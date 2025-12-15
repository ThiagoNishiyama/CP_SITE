// filepath: /home/pc/Site-CP/sitemap-generator.js
import fs from 'fs';
import path from 'path';
import routes from './app/routes'; // ajuste o caminho conforme necessário

const generateSitemap = () => {
  const baseUrl = 'https://www.seusite.com'; // substitua pelo seu domínio
  const paths = routes.map(route => `/${route.path}`);
  const sitemapContent = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${paths.map(routePath => `
        <url>
          <loc>${baseUrl}${routePath}</loc>
        </url>
      `).join('')}
    </urlset>
  `;

  fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), sitemapContent.trim());
};

generateSitemap();