import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;

    @media (min-width: 768px) {
        padding-bottom: 0;
    }
`;

const NavLink = styled(Link)`
    color: #FFFFFF;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    &:last-of-type {
        margin-right:0
    }
`;

const Navigation = () => {
    return (
        <Nav>
            <NavLink 
                to={'/'}
                activeClassName="actualpage"
            >Home</NavLink>
            <NavLink 
                to={'/about'}
                activeClassName="actualpage"    
            >About</NavLink>
        </Nav>
     );
}
 
export default Navigation;