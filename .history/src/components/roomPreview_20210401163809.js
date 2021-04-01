import React from 'react';

const RoomPreview = ({room}) => {
    
    const { content, imagen, title, slug } = room
    
    return ( 
        <div>
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
}
 
export default RoomPreview;