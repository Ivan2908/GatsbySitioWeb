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
                    ...GatsbyImageSharpFluid_withWebp
            }
        }
      }
    }
    `);

    // console.log(image.sharp.fluid);

    return ( 
        <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
            <div>
                <h1>Welcome to Gatsby Hotel</h1>
                <p>To the best hotel.</p>
            </div>
        </ImageBackground>
    );
}
 
export default HomeImage;