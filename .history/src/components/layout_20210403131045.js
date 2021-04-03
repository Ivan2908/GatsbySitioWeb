import React from 'react';
import Header from './header';
import Footer from './footer';
import { Global, css } from '@emotion/react';
import { Helmet } from 'react-helmet';

import useSeo from '../hooks/use-seo';


const Layout = (props) => {

    const seo = useSeo();

    const { siteName, fallbackSeo: { description, title } } = seo

    return (
        <>
            <Global 
                styles={css`
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;   
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                        font-size: 18px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }
                    h1 {
                        font-family: 'PT Sans', sans-serif;
                    }
                    h1, h2 {
                        font-family: 'Roboto', serif;
                    }
                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />
            <Helmet>
                <title>{title}</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>

            <Header />
            {props.children}
            <Footer />
        </>
    );
}
 
export default Layout;