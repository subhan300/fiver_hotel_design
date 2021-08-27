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
        spaceId: `pcetfx7ovva8`,
        accessToken: `wc5LMv32tEAImjgkgWNHNMvvcM8KCaJk4aXDoZxJeaM`,
      },
    }
  ],
}
