import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
    height: 700px;
`;

const TextImage = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63,75), rgba(34,49,63,75));
    color: #000;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex:1;
    align-items: center;
    justify-content: center;
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
            <TextImage>
                <h1>Welcome to Gatsby Hotel</h1>
                <p>the best hotel to vacation.</p>
            </TextImage>
        </ImageBackground>
    );
}
 
export default HomeImage;