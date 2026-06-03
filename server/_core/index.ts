import "dotenv/config";
// Deployment: 2026-02-16 09:05 UTC - Force rebuild with 10-URL sitemap
import express from "express";
import { createServer } from "http";
import net from "net";
import path from "path";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  
  // Add HSTS header to enforce HTTPS
  app.use((req, res, next) => {
    res.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    next();
  });

  // Canonical redirect middleware - redirect www to non-www (https://quicktechservices.com.au)
  // Only applies to production domain, not to dev/localhost or API routes
  app.use((req, res, next) => {
    // Skip redirect for API routes, static files, and health checks
    if (
      req.path === '/sitemap.xml' ||
      req.path === '/sitemap1.xml' ||
      req.path.startsWith('/api/') ||
      req.path.startsWith('/.')
    )
      return next();
    
    const host = req.get('host') || '';
    const protocol = req.get('x-forwarded-proto') || req.protocol;
    
    // Skip redirect for localhost and dev domains
    if (host.includes('localhost') || host.includes('127.0.0.1') || host.includes('manus.computer')) {
      return next();
    }
    
    // For production domain, enforce https://quicktechservices.com.au (non-www)
    const isHttps = protocol === 'https';
    const isWww = host.includes('www.quicktechservices.com.au');
    
    if (!isHttps || isWww) {
      // Add cache-busting headers to prevent Cloudflare from caching the redirect
      res.set('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
      res.set('Pragma', 'no-cache');
      res.set('Expires', '0');
      res.set('Surrogate-Control', 'no-store');
      
      const redirectUrl = `https://quicktechservices.com.au${req.originalUrl}`;
      return res.redirect(301, redirectUrl);
    }
    
    next();
  });
  
  // 301 Redirects for old suburb page URLs to new computer-repair URLs
  // This ensures old Google Search Console URLs redirect properly
  app.get('/greenslopes', (req, res) => {
    res.redirect(301, '/computer-repair-greenslopes');
  });
  app.get('/coorparoo', (req, res) => {
    res.redirect(301, '/computer-repair-coorparoo');
  });
  app.get('/mount-gravatt', (req, res) => {
    res.redirect(301, '/computer-repair-mount-gravatt');
  });
  app.get('/woolloongabba', (req, res) => {
    res.redirect(301, '/computer-repair-woolloongabba');
  });
  app.get('/indooroopilly', (req, res) => {
    res.redirect(301, '/computer-repair-indooroopilly');
  });
  // Redirect malformed URLs with $ character to homepage
  app.get(/\/\$/, (req, res) => {
    res.redirect(301, '/');
  });
  
  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);

  // Sitemap is now served as a static file from /client/public/sitemap.xml
  // This ensures it's always consistent and doesn't depend on Node server routing

  // CORS headers for API
  app.use('/api/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });

  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // Serve sitemap with no-cache headers to prevent Cloudflare caching
  app.get("/sitemap.xml", (req, res) => {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    res.setHeader("Surrogate-Control", "no-store"); // helps CDNs like Cloudflare
    res.type("application/xml");
    const publicRoot = path.join(process.cwd(), "dist", "public");
    return res.sendFile("sitemap.xml", { root: publicRoot });
  });

  // Temporary sitemap1 with all 10 URLs - bypass Cloudflare cache
  // Delete this route once Manus fixes the Cloudflare caching issue
  app.get("/sitemap1.xml", (req, res) => {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    res.setHeader("Surrogate-Control", "no-store");
    res.type("application/xml");
    const publicRoot = path.join(process.cwd(), "dist", "public");
    return res.sendFile("sitemap1.xml", { root: publicRoot });
  });

  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }



  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
