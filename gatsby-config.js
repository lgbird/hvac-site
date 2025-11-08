/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ClimaLisboa`,
    siteUrl: `https://www.climalisboa.portimaoonline.pt`,
    heroHeader: 'Especialistas em ar condicionado',
    heroSubheader: 'Instalação, reparação e manutenção de ar condicionado em toda Grande Lisboa',
    serviceArea: 'toda Grande Lisboa'
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
    },  'gatsby-transformer-json',
  ],
};
