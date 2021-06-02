const globby = require('globby');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');
import { getAllArticles } from "./prismicApi";

// SOURCE : https://medium.com/swlh/generate-a-sitemap-for-your-next-js-site-and-submit-it-to-google-8019ba7423bb

const generateSitemap = async () => {
  const BASE_URL = "https://bocageairlines.fr/.fr";
  // Fetch all routes based on patterns
  // Your folder structure might be different so change bellow to match your needs
  const pages = await globby([
    'pages/**/*.{ts,tsx,mdx}', // All routes inside /pages
    '_content/**/*.mdx', // All MDX files inside my /_content
    '!pages/**/[*.{ts,tsx}', // Ignore my dynamic route index Example /pages/blog/[slug].tsx
    '!pages/_*.{ts,tsx}', // Ignore next.js files
    '!pages/api', // Ignore API routes
    '!pages/admin.tsx' // Ignore pages not meant to be indexed
  ]);

  const blocklist = ["/404"];

  const localPagesLinks = pages
    .map((page: any) => {
      // Remove none route related parts of filename.
      const path = page
        .replace('/index', '')
        .replace('pages', '')
        .replace('_content', '')
        .replace(/(.tsx|.ts)/, '')
        .replace('.mdx', '');
      // Remove the word index from route
      return path === "/index"
        ? { url: "/", changefreq: "always", priority: 0.8 }
        : { url: path, changefreq: "always", priority: 0.8 };
    })
    .filter((page: any) => !blocklist.includes(page.url));

  //ROUTES FROM WORDPRESS

  const document = await getAllArticles();
  const postLinks = document.results.map((article) => ({
    url: `/actualites/${article.uid}`,
    changefreq: "daily",
    priority: 0.6,
  }));

  //SITEMAP CONSTRUCTIONS
  const links = [...localPagesLinks, ...postLinks];

  const stream = new SitemapStream({ hostname: BASE_URL });
  const xml = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data: any) => data.toString());
  fs.writeFileSync("./public/sitemap.xml", xml);

};

export default generateSitemap;
