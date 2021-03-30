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
const Navigation = () => {
    return (
        <Nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
        </Nav>
     );
}
 
export default Navigation;