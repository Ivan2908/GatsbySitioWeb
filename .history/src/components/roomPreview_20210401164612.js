import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby'

// import Img from "gatsby-image"
import { GatsbyImage,getImage } from "gatsby-plugin-image";

const Button = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80,.85) ;
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`;

const RoomPreview = ({room}) => {
    
    const { content, image, title, slug } = room
    const imageHome = getImage(image);

    return ( 
        <div
            css={css`
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
            `}
        >
            <GatsbyImage image={imageHome} alt="About Image Page" />
            <div>
                <h3>{title}</h3>
                <p>{content}</p>

                <Button to={slug}>See Room</Button>
            </div>
        </div>
    );
}
 
export default RoomPreview;