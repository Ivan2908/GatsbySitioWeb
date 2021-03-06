import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
    query($slug: String!){
        allDatoCmsRoom(filter: { slug: {eq: $slug } }) {
            nodes {
                title
                content
                image {
                    fluid(maxWidth: 1200) {
                        srcSet
                    }
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