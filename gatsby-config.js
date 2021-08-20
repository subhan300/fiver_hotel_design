/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xg6sud087ron`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken:"8vszzZxAPiX_6ASAfJmCAvSB3QrGoo1Rsmze_6u9iRU",
      },
    }
  ]

}
