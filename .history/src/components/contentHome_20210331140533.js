import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// import Img from "gatsby-image"
import { GatsbyImage,getImage } from "gatsby-plugin-image"

const ContentHome = () => {
    const  info  = useStaticQuery(graphql`
    query {
        allDatoCmsPage(filter: { slug: { eq: "home" } }) {
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

    console.log(info.allDatoCmsPage.nodes[0]);
    const { title, content, image } = info.allDatoCmsPage.nodes[0];
    const imageHome = getImage(image.gatsbyImageData.images.fallback.src);
    console.log(imageHome);
    return ( 
        <>
            <h2>{title}</h2>
            
            <div>
                <p> {content} </p>
                <GatsbyImage image={image.gatsbyImageData.images.fallback.src} alt="Home Image Page" />
            </div>
        </>
     );
}
 
export default ContentHome;