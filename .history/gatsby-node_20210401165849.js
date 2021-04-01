/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
    query{
        allDatoCmsRoom {
                nodes {
                    slug
            }
        }
    } 
    `);
}