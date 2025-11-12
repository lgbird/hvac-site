/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ClimAlgarve`,
    siteUrl: `https://www.climalgarve.portimaoonline.pt`,
    heroHeader: 'Especialistas em ar condicionado',
    heroSubheader: 'Instalação, reparação e manutenção de ar condicionado em todo o Algarve',
    serviceArea: 'todo o Algarve'
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
    }, 'gatsby-transformer-json',
  ],
};
