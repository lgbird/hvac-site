/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Reparações Lisboa`,
    siteUrl: `https://www.reparacoeslisboa.portimaoonline.pt`,
    heroHeader: 'Reparação eletrodomésticos em Grande Lisboa',
    heroSubheader: 'Reparação de todos tipos de eletrodomésticos, grandes e pequenos. Vamos até si em toda Grande Lisboa!',
    serviceArea: 'toda Grande Lisboa',
    phoneNumber: '964609056',
    waMessage: 'Olá! Gostaria de reparar um...'
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`, // Adjust if your images are stored elsewhere
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-plugin-clarity`,
      options: {
        // String value for your clarity project ID
        clarity_project_id: 'u76pysinte',
        // Boolean value for enabling clarity while developing
        // true will enable clarity tracking code on both development and production environments
        // false will enable clarity tracking code on production environment only
        enable_on_dev_env: true
      },
    }
  ],
};
