import React from 'react';
import Navigation from '../components/nav';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'gatsby';

const HomeLink = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;

const Footer = ({title}) => {

    const year = new Date().getFullYear();
    return ( 
        <>
        <footer>
            <p
                css={css`
                    text-align: center;
                    color: #FFF;
                    background-color: rgb(33,44,55);
                    margin: 0;
                    padding: 1rem;
                `}
            >
                {title}. All rights reserved {year} &copy;
            </p>
        </footer>
        </>
     );
}
 
export default Footer;