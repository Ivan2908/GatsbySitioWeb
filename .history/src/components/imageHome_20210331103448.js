import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
    height: 700px;
`; 
const HomeImage = () => {

    const { image } = useStaticQuery(graphql`
    query {
        image: file( relativePath: { eq: "HomePage.jpg" } ) {
            sharp: childImageSharp {
                fluid {
                    srcSetWebp
          }
        }
      }
    }
    `);

    console.log(image);
    return ( 
        // <ImageBackground tag="section" fluid={image.sharp.fluid}>
            
        // </ImageBackground>
        <h1>Image</h1>
    );
}
 
export default HomeImage;