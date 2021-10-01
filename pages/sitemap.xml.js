import React from "react";
import fs from "fs";
import { getPostSlugs } from "../lib/api";
const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const baseUrl = "https://www.kpadeyinka.com";
  const otherPages = [];
  const staticPages = fs
    .readdirSync("./pages")
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      if (!staticPagePath.endsWith("js")) {
        const staticPagesz = fs
          .readdirSync(`./pages/${staticPagePath}`)
          .filter((staticPage) => {
            return ![
              "_app.js",
              "_document.js",
              "_error.js",
              "sitemap.xml.js",
            ].includes(staticPage);
          })
          .map((staticPagePathz) => {
            if (!staticPagePathz.endsWith("js")) {
              return;
            }
            if (staticPagePathz.startsWith("[")) return;
            return `${baseUrl}/${staticPagePath}/${staticPagePathz.replace(
              /\.js$/,
              ""
            )}`;
          });
        staticPagesz.forEach((pagelol) => {
          if (pagelol === undefined) return;
          if (pagelol.startsWith("[")) return;
          otherPages.push(pagelol);
        });
      } else {
        if (staticPagePath === undefined) return;
        return `${baseUrl}/${staticPagePath.replace(/\.js$/, "")}`;
      }
    });

  const slugsNotfull = getPostSlugs();
  const slugs = [];
  staticPages.map((pagelol, i) => {
    if (pagelol === undefined) {
      staticPages.splice(i, 1);
    }
  });
  console.log(staticPages);
  const slugsz = slugsNotfull.map((slug) => {
    slugs.push(`https://www.kpadeyinka.com/post/${slug}`);
  });
  const dang = otherPages.concat(staticPages);
  const pages = slugs.concat(dang);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://www.kpadeyinka.com/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>
      ${pages
        .map((url) => {
          if (url === undefined) return;
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
