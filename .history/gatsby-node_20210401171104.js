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

    // console.log(result.data.allDatoCmsRoom.nodes);

    if(result.errors) {
        reporter.panic('There was no result', result.errors);
    }
}