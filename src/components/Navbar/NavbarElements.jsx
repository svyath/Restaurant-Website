import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Container} from '../../globalStyles';
import {GrRestaurant} from 'react-icons/gr';

export const Nav = styled.nav `
    background: rgba(0, 0, 0, 0.3);
    height: 70px;
    margin: 0;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavContainer = styled(Container) `
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Container}
`;

export const NavLogo = styled(Link) `
    color: #fff;
    display: flex;
    justify-self: start;
    align-items: center;
    cursor: poiner;
    text-decoration: none;
    font-size: 2rem;
`;

export const NavIcon = styled(GrRestaurant) `
    margin-right: 15px;

    path{
        stroke: #fff;
    }
`;

export const Hamburger = styled.div `
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

/*
export const NavLink = styled(Link) `
    display: flex;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #f9c56a;
    }
`;
*/