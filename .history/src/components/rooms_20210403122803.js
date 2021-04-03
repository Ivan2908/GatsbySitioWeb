import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const query = graphql`
    query($slug: String!){
        allDatoCmsRoom(filter: { slug: {eq: $slug } }) {
            nodes {
                title
                content
                image {
                    gatsbyImageData(
                        layout: CONSTRAINED
                    )
                }
            }
        }
    }
`

const RoomTemplate = ({data:{ allDatoCmsRoom: { nodes } } }) => {
    console.log(nodes);

    return ( 
        <Layout>

        </Layout>
     );
}
 
export default RoomTemplate;