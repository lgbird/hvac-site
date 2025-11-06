const fs = require('fs');
const { parse } = require('csv-parse/sync');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const csvFile = fs.readFileSync('./src/data/landing-pages.csv'); // adjust path

  // Parse CSV to JSON-like array of objects
  const records = parse(csvFile, {
    columns: true, // Use first row as column headers
    skip_empty_lines: true,
  });

  records.forEach(page => {
    createPage({
      path: `/${page.slug}`,
      component: require.resolve('./src/templates/landing-page.js'),
      context: {
        header: page.header,
        subheader: page.subheader,
      },
    });
  });
};
