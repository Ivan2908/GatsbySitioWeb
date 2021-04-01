import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
        <h1>Image Here</h1>
    );
}
 
export default HomeImage;