import React from 'react';
import { graphql } from 'gatsby';

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

const RoomTemplate = () => {
    return ( 
        <h1>Room.js</h1>
     );
}
 
export default RoomTemplate;