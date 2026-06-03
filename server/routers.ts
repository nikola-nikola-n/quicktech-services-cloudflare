import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContactSubmission } from "./db";
import { notifyOwner } from "./_core/notification";
import { storagePut } from "./storage";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          email: z.string().email(),
          message: z.string().min(1),
          attachedImages: z.array(z.string()).optional().default([]),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Upload images to S3 and collect URLs
          const imageUrls: string[] = [];
          
          for (let i = 0; i < input.attachedImages.length; i++) {
            const base64Image = input.attachedImages[i];
            
            try {
              // Convert base64 to buffer
              const base64Data = base64Image.split(',')[1] || base64Image;
              const buffer = Buffer.from(base64Data, 'base64');
              
              // Generate unique filename
              const timestamp = Date.now();
              const filename = `contact-images/${timestamp}-${i}.jpg`;
              
              // Upload to S3
              const { url } = await storagePut(filename, buffer, 'image/jpeg');
              imageUrls.push(url);
            } catch (imgError) {
              console.error(`[Contact] Failed to upload image ${i}:`, imgError);
              // Continue with other images even if one fails
            }
          }
          
          // Create contact submission with image URLs
          await createContactSubmission({
            name: input.name,
            email: input.email,
            message: input.message,
            attachedImages: imageUrls.length > 0 ? JSON.stringify(imageUrls) : null,
          });

          // Build notification content with image URLs
          let notificationContent = `Email: ${input.email}\n\nMessage: ${input.message}`;
          
          if (imageUrls.length > 0) {
            notificationContent += `\n\nAttached Images (${imageUrls.length}):\n`;
            imageUrls.forEach((url, index) => {
              notificationContent += `${index + 1}. ${url}\n`;
            });
          }

          // Send notification asynchronously without blocking the response
          notifyOwner({
            title: `New Contact Form Submission from ${input.name}`,
            content: notificationContent,
          }).catch(err => {
            console.error("[Contact] Failed to send notification:", err);
          });

          return { success: true, message: "Thank you for contacting us!" };
        } catch (error) {
          console.error("[Contact] Failed to submit form:", error);
          throw new Error("Failed to submit contact form");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
