import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';


const ContentAbout = () => {
    const result = useStaticQuery(graphql`
    query {
        allDatoCmsPage(filter: { slug: { eq: "about" } }) {
            nodes {
                title
            content
            image {
                gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
    `)
    return (  );
}
 
export default ContentAbout;