/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Reparações Lisboa`,
    description: 'Reparação de todos tipos de eletrodomésticos, grandes e pequenos. Vamos até si em toda Grande Lisboa!',
    siteUrl: `https://www.reparacoeslisboa.portimaoonline.pt`,
    heroHeader: 'Reparação eletrodomésticos em Grande Lisboa',
    heroSubheader: 'Reparação de todos tipos de eletrodomésticos, grandes e pequenos. Resposta imediata, diagnóstico e reparação no próprio dia. Ligue agora e receba um técnico certificado ainda hoje',
    serviceArea: 'toda Grande Lisboa',
    phoneNumber: '923233332',
    waMessage: 'Olá! Gostaria de reparar um...',
    googleTag: 'AW-17670662770',
    googleConversionAction: 'mgPPCPevy7cbEPLUg-pB',
    clarityTag: 'u76pysinte'
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
  ],
};
