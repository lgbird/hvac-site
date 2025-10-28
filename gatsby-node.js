const pages = require("./src/data/landing-pages.json");

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  pages.forEach(page => {
    createPage({
      path: `/${page.slug}`,
      component: require.resolve("./src/templates/landing-page.js"),
      context: {
        header: page.header,
        subheader: page.subheader
      },
    });
  });
};

