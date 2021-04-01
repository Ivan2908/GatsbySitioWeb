import { useStaticQuery, graphql } from 'gatsby';

const useRoom = () => {
    const data = useStaticQuery(graphql`
        query{
            allDatoCmsRoom {
                nodes {
                    title
                    id
                    slug
                    content
                    image {
                        gatsbyImageData(
                            layout: CONSTRAINED
                        )
                    }
                }
            }
        }
    `);

    return data.allDatoCmsRoom.nodes.map(room => ({
        title: room.title,
        content: room.content,
        id: room.id,
        slug: room.slug,
        image: room.image
    }))
}
 
export default useRoom;
