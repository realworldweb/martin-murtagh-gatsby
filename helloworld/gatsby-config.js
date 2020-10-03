/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 
 
module.exports = {
  /* Your site config here */
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-transformer-sharp', 'gatsby-plugin-sharp',
  {
   resolve: 'gatsby-source-filesystem',
  options: {
   name: 'images',
   path: '${_dirname}/src/images/'
  }
  },
  {
   resolve: 'gatsby-source-filesystem',
  options: {
   name: 'pages',
   path: '${_dirname}/src/pages/'
  }
  }
  ]
  
  
         
}
 