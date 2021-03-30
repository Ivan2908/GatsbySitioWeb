import React from 'react';
import Header from './header';
import helmet from '.react-helmet';
import { Helmet } from 'react-helmet';

const Layout = (props) => {
    return (
        <>
            <Helmet>
                <title>Gatsby Hotel</title>
            </Helmet>

            <Header />
            {props.children}
        </>
    );
}
 
export default Layout;