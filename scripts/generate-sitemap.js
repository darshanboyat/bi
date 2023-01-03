const sitemap = require('nextjs-sitemap-generator')

const path = require('path')

sitemap({
    baseUrl: 'https://braininventory.com',
    pagesDirectory: path.resolve(__dirname, '../'),
    targetDirectory: path.resolve(__dirname, '../'),
    ignoredExtensions: ["js", "map", "xml", "json", "png", "css", "jpeg", "jpg", "icon"],
    ignoredPaths: [404, 'favicon', 'index'],
    extraPaths: ["/"]
});