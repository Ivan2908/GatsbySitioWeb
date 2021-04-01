import React from 'react';
// import Img from "gatsby-image"
import { GatsbyImage,getImage } from "gatsby-plugin-image";

const RoomPreview = ({room}) => {
    
    const { content, image, title, slug } = room
    const imageHome = getImage(image);

    return ( 
        <div>
            <GatsbyImage image={imageHome} alt="About Image Page" />
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
}
 
export default RoomPreview;