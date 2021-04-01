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
                        fluid(maxWidth: 1200) {
                            srcSet
                        }
                    }
                }
            }
        }
    `);

    console.log(data);
}
 
export default useRoom;
