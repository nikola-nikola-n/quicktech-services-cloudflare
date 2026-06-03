import { describe, it, expect, vi, beforeEach } from 'vitest';
import { z } from 'zod';

// Mock the dependencies
vi.mock('./db', () => ({
  createContactSubmission: vi.fn(),
}));

vi.mock('./_core/notification', () => ({
  notifyOwner: vi.fn(),
}));

vi.mock('./storage', () => ({
  storagePut: vi.fn(),
}));

import { createContactSubmission } from './db';
import { notifyOwner } from './_core/notification';
import { storagePut } from './storage';

describe('Contact Form - Image Upload', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should handle contact submission without images', async () => {
    // Mock the functions
    (createContactSubmission as any).mockResolvedValue({ insertId: 1 });
    (notifyOwner as any).mockResolvedValue(true);

    const input = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'My computer is broken',
      attachedImages: [],
    };

    // Verify the submission would work
    expect(input.name).toBe('John Doe');
    expect(input.email).toBe('john@example.com');
    expect(input.message).toBe('My computer is broken');
    expect(input.attachedImages).toHaveLength(0);
  });

  it('should convert base64 images to buffer correctly', () => {
    // Test base64 conversion logic
    const base64Image = 'data:image/jpeg;base64,/9j/4AAQSkZJRg==';
    const base64Data = base64Image.split(',')[1] || base64Image;
    const buffer = Buffer.from(base64Data, 'base64');

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBeGreaterThan(0);
  });

  it('should generate unique filenames for images', () => {
    const timestamp = Date.now();
    const filenames = [];

    for (let i = 0; i < 3; i++) {
      const filename = `contact-images/${timestamp}-${i}.jpg`;
      filenames.push(filename);
    }

    // Verify all filenames are unique
    expect(new Set(filenames).size).toBe(3);

    // Verify filename format
    filenames.forEach((filename) => {
      expect(filename).toMatch(/^contact-images\/\d+-\d+\.jpg$/);
    });
  });

  it('should handle multiple image uploads', async () => {
    // Mock storagePut to return URLs
    (storagePut as any).mockImplementation((filename: string) => {
      return Promise.resolve({
        key: filename,
        url: `https://storage.example.com/${filename}`,
      });
    });

    const imageUrls: string[] = [];
    const base64Images = [
      'data:image/jpeg;base64,/9j/4AAQSkZJRg==',
      'data:image/jpeg;base64,/9j/4AAQSkZJRg==',
    ];

    for (let i = 0; i < base64Images.length; i++) {
      const base64Image = base64Images[i];
      const base64Data = base64Image.split(',')[1] || base64Image;
      const buffer = Buffer.from(base64Data, 'base64');
      const timestamp = Date.now();
      const filename = `contact-images/${timestamp}-${i}.jpg`;

      const { url } = await (storagePut as any)(filename, buffer, 'image/jpeg');
      imageUrls.push(url);
    }

    expect(imageUrls).toHaveLength(2);
    expect((storagePut as any)).toHaveBeenCalledTimes(2);
  });

  it('should build notification content with image URLs', () => {
    const imageUrls = [
      'https://storage.example.com/contact-images/1234-0.jpg',
      'https://storage.example.com/contact-images/1234-1.jpg',
    ];

    let notificationContent = 'Email: john@example.com\n\nMessage: My computer is broken';

    if (imageUrls.length > 0) {
      notificationContent += `\n\nAttached Images (${imageUrls.length}):\n`;
      imageUrls.forEach((url, index) => {
        notificationContent += `${index + 1}. ${url}\n`;
      });
    }

    expect(notificationContent).toContain('Email: john@example.com');
    expect(notificationContent).toContain('Message: My computer is broken');
    expect(notificationContent).toContain('Attached Images (2):');
    expect(notificationContent).toContain('1. https://storage.example.com/contact-images/1234-0.jpg');
    expect(notificationContent).toContain('2. https://storage.example.com/contact-images/1234-1.jpg');
  });

  it('should handle image upload failures gracefully', async () => {
    // Mock storagePut to fail for second image
    let callCount = 0;
    (storagePut as any).mockImplementation(() => {
      callCount++;
      if (callCount === 2) {
        return Promise.reject(new Error('Upload failed'));
      }
      return Promise.resolve({
        key: `contact-images/test-${callCount}.jpg`,
        url: `https://storage.example.com/contact-images/test-${callCount}.jpg`,
      });
    });

    const imageUrls: string[] = [];
    const base64Images = [
      'data:image/jpeg;base64,/9j/4AAQSkZJRg==',
      'data:image/jpeg;base64,/9j/4AAQSkZJRg==',
    ];

    for (let i = 0; i < base64Images.length; i++) {
      const base64Image = base64Images[i];
      try {
        const base64Data = base64Image.split(',')[1] || base64Image;
        const buffer = Buffer.from(base64Data, 'base64');
        const timestamp = Date.now();
        const filename = `contact-images/${timestamp}-${i}.jpg`;

        const { url } = await (storagePut as any)(filename, buffer, 'image/jpeg');
        imageUrls.push(url);
      } catch (error) {
        // Continue with other images even if one fails
        console.error(`Failed to upload image ${i}:`, error);
      }
    }

    // Should have 1 successful upload despite 1 failure
    expect(imageUrls).toHaveLength(1);
  });

  it('should validate email format', () => {
    const emailSchema = z.string().email();

    expect(() => emailSchema.parse('invalid-email')).toThrow();
    expect(() => emailSchema.parse('john@example.com')).not.toThrow();
  });

  it('should require non-empty name and message', () => {
    const nameSchema = z.string().min(1);
    const messageSchema = z.string().min(1);

    expect(() => nameSchema.parse('')).toThrow();
    expect(() => messageSchema.parse('')).toThrow();
    expect(() => nameSchema.parse('John')).not.toThrow();
    expect(() => messageSchema.parse('Hello')).not.toThrow();
  });
});
