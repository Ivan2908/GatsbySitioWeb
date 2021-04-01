import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// import Img from "gatsby-image"
import { GatsbyImage,getImage } from "gatsby-plugin-image";

const Content = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (max-width: 768px) {
        img {
            width: 814.4px;
        }
    }
`;

const ContentAbout = () => {
    const result = useStaticQuery(graphql`
    query {
        allDatoCmsPage(filter: { slug: { eq: "about" } }) {
            nodes {
                title
            content
            image {
                gatsbyImageData(
                    layout: FIXED
                    width: 1200
                )

          }
        }
      }
    }
    `);

    const { title, content, image } = result.allDatoCmsPage.nodes[0];
    const imageHome = getImage(image);

    return ( 
        <>
            <h2
                css={css`
                    margin-top: 3rem;
                    text-align: center;
                    font-size: 3.5rem;
                `}
            >{title}</h2>
            <Content>
                <p> {content} </p>
                <GatsbyImage image={imageHome} alt="About Image Page" />
            </Content>
        </>
     );
}
 
export default ContentAbout;