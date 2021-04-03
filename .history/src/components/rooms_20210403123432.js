import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

// import Img from "gatsby-image"
import { GatsbyImage,getImage } from "gatsby-plugin-image";

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
    const { title, image, content } = nodes[0];
    const imageHome = getImage(image);

    return ( 
        <Layout>
            <h1>{title}</h1>
            <p>{content}</p>
            <GatsbyImage image={imageHome} alt="Home Image Page" /> 
        </Layout>
     );
}
 
export default RoomTemplate;