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

const Footer = () => {

    const year = new Date().getFullYear();
    return ( 
        <>
        <footer
            css={css`
                background-color: #222;
                padding: 0.1rem;
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <HomeLink
                    to='/'
                ><h1>Hotel Gatsby</h1>
                </HomeLink>

                <Navigation />
            </div>
        </footer>
        <p>
            Hotel Gatsby, All rights reserved {year} &copy;
        </p>
        </>
     );
}
 
export default Footer;