import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// import Img from "gatsby-image"
import { GatsbyImage,getImage } from "gatsby-plugin-image";

const TextInit = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }

    p {
        line-height: 2;
    }
`;

const ContentHome = () => {
    const  info  = useStaticQuery(graphql`
    query {
        allDatoCmsPage(filter: { slug: { eq: "home" } }) {
            nodes {
                title
            content
            image {
                gatsbyImageData(
                    layout: FIXED
                    width: 500
                )
          }
        }
      }
    }
    `);

    console.log(info.allDatoCmsPage.nodes[0]);
    const { title, content, image } = info.allDatoCmsPage.nodes[0];
    const imageHome = getImage(image);

    return ( 
        <>
            <h2
                css={css`
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 4rem;
                `}
            >{title}</h2>
            
            <TextInit>
                <p> {content} </p>
                <GatsbyImage image={imageHome} alt="Home Image Page" />
            </TextInit>
        </>
     );
}
 
export default ContentHome;