exports.createPage = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
    query{
        allDatoCmsRoom {
                nodes {
                    slug
            }
        }
    } 
    `);

    console.log(result.data.allDatoCmsRoom.nodes);

    if(result.errors) {
        reporter.panic('There was no result', result.errors);
    }

    const rooms = result.data.allDatoCmsRoom.nodes;

    rooms.forEach(room => {
        actions.createPage({
            path: room.slug,
            component: require.resolve('./src/components/rooms.js'),
            context: {
                slug: room.slug
            }
        })
    })
}