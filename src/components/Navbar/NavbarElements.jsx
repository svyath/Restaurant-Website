import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

export const Nav = styled.nav`
    background: rgba(0, 0, 0, 0.3);
    height: 70px;
    margin: 0;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLink = styled(Link)`
    display: flex;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
`;
