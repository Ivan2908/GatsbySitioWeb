import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const ContentHome = () => {
    const  info  = useStaticQuery(graphql`
    query {
        allDatoCmsPage(filter: { slug: { eq: "home" } }) {
            nodes {
                title
            content
            image {
                fluid {
                    ...GatsbyDatoCmsFluid
                }
            }
        }
      }
    }
    `);

    // console.log(info.allDatoCmsPage.nodes[0]);

    const { title, content, image } = info.allDatoCmsPage.nodes[0];

    return ( 
        <>
            <h2>{title}</h2>
            
            <div>
                <p> {content} </p>
                <Image fluid={image.fluid.src} />
            </div>
        </>
     );
}
 
export default ContentHome;