import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// import Img from "gatsby-image"
import { GatsbyImage,getImage } from "gatsby-plugin-image";

const ContentAbout = () => {
    const result = useStaticQuery(graphql`
    query {
        allDatoCmsPage(filter: { slug: { eq: "about" } }) {
            nodes {
                title
            content
            image {
                gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
    `);

    const { title, content, image } = result.allDatoCmsPage.nodes[0];
    const imageHome = getImage(image);

    return ( 
        <>
            <h2>{title}</h2>
            <div>
                <p> {content} </p>
                <GatsbyImage image={imageHome} alt="About Image Page" />
            </div>
        </>
     );
}
 
export default ContentAbout;