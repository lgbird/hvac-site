const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');
const fetch = require('node-fetch');

exports.createPages = async ({ actions, reporter }) => {
  const { createPage } = actions;
  const baseJsonPath = path.resolve('./src/data/base.json');
  const templatePath = require.resolve('./src/templates/landing-page.js');

  // Helper to create pages from an array of page objects
  const createPagesFromRecords = (records) => {
    records.forEach(page => {
      if (!page.slug) {
        reporter.warn(`Skipping page without slug: ${JSON.stringify(page)}`);
        return;
      }
      createPage({
        path: `/${page.slug}`,
        component: templatePath,
        context: {
          header: page.header,
          subheader: page.subheader,
          campaignTag: page.campaign_tag,
          location: page.location
          // Add other fields as needed
        },
      });
    });
  };

  // 1. Build pages from base.json if it exists
  if (fs.existsSync(baseJsonPath)) {
    const baseContent = fs.readFileSync(baseJsonPath, 'utf-8');
    try {
      const baseRecords = JSON.parse(baseContent);
      reporter.info(`Creating ${baseRecords.length} pages from base.json`);
      createPagesFromRecords(baseRecords);
    } catch (error) {
      reporter.panic(`Failed to parse base.json: ${error.message}`);
    }
  }

  // 2. Fetch extra pages from API
  const apiUrl = 'https://n8n.orthogan.com/webhook/rep-lisboa'; // Replace with your actual endpoint

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch pages: ${response.status} ${response.statusText}`);
    }

    const remotePages = await response.json();
    reporter.info(`Creating ${remotePages.length} pages from API`);
    createPagesFromRecords(remotePages);
  } catch (error) {
    reporter.panic(`Error fetching remote pages: ${error.message}`);
  }
};
