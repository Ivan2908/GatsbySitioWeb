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
        <footer
            css={css`
                background-color: rgb(44,62,80);
                padding: 1rem;
                margin-top: 5rem;
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
        </>
     );
}
 
export default Footer;