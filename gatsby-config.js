module.exports = {
  siteMetadata: {
    title: 'SKO Tech Academy - Integration',
    description: 'Landing Page for SKO Tech Academy - Integration',
    keywords: 'ibm,mcm,carbon',
  },
  plugins: ['gatsby-theme-carbon',
  'gatsby-transformer-json',

{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: 'data',
    path: './src/data'
  },
  resolve: 'gatsby-theme-carbon',
  options: {
    iconPath: './src/images/custom-icon-512.png',
    isSearchEnabled: true,
    repository: {
      baseUrl:
        'https://github.ibm.com/ibm-integration/tech-academy-japan',
      subDirectory: '/',
    },
  },
}
],
pathPrefix: "/tech-academy-japan",
};
