import type { Plugin } from "vite";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";

interface RouteMeta {
  path: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  canonical: string;
}

function replaceMetaTags(html: string, meta: RouteMeta): string {
  let result = html;

  // Replace <title>
  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`
  );

  // Replace <meta name="title">
  result = result.replace(
    /<meta\s+name="title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="title" content="${meta.title}" />`
  );

  // Replace <meta name="description">
  result = result.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${meta.description}" />`
  );

  // Replace <link rel="canonical">
  result = result.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${meta.canonical}" />`
  );

  // Replace og:url
  result = result.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${meta.ogUrl}" />`
  );

  // Replace og:title
  result = result.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${meta.ogTitle}" />`
  );

  // Replace og:description
  result = result.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${meta.ogDescription}" />`
  );

  // Replace twitter:url
  result = result.replace(
    /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:url" content="${meta.ogUrl}" />`
  );

  // Replace twitter:title
  result = result.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${meta.ogTitle}" />`
  );

  // Replace twitter:description
  result = result.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${meta.ogDescription}" />`
  );

  return result;
}

export default function staticMetaPlugin(): Plugin {
  return {
    name: "vite-plugin-static-meta",
    apply: "build",
    async closeBundle() {
      // Dynamic import to handle ESM module from TS source
      const { routesMeta } = await import("./src/data/routesMeta.ts");
      
      const distDir = join(process.cwd(), "dist");
      const templateHtml = readFileSync(join(distDir, "index.html"), "utf-8");

      let count = 0;
      for (const meta of routesMeta as RouteMeta[]) {
        // Skip root path — that's already the default index.html
        if (meta.path === "/") continue;

        const routePath = meta.path.replace(/^\//, "");
        const outputDir = join(distDir, routePath);
        const outputFile = join(outputDir, "index.html");

        mkdirSync(outputDir, { recursive: true });

        const customHtml = replaceMetaTags(templateHtml, meta);
        writeFileSync(outputFile, customHtml, "utf-8");
        count++;
      }

      console.log(`\n✅ Static Meta Plugin: Generated ${count} route-specific HTML files.\n`);
    },
  };
}
