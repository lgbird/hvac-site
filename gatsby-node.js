const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const campaignsFolder = './src/data/campaigns';

  // Read all files in the campaigns folder
  const csvFiles = fs.readdirSync(campaignsFolder).filter(file => file.endsWith('.csv'));

  // Loop over each CSV file
  csvFiles.forEach(csvFileName => {
    const csvFilePath = path.join(campaignsFolder, csvFileName);
    const csvContent = fs.readFileSync(csvFilePath);

    // Parse CSV file content
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
    });

    // Create a page for each record in current CSV file
    records.forEach(page => {
      createPage({
        path: `/${page.slug}`, // Assuming each record has a unique slug field
        component: require.resolve('./src/templates/landing-page.js'),
        context: {
          header: page.header,
          subheader: page.subheader,
          // Add other fields as needed
        },
      });
    });
  });
};
