import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Container} from '../../globalStyles';
import {GrRestaurant} from 'react-icons/gr';

export const Nav = styled.nav `
    background: rgba(0, 0, 0, 0.6);
    height: 70px;
    margin: 0;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    position: -webkit-sticky;
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
    font-size: 1.5rem;
    font-weight: 500;
`;

export const NavIcon = styled(GrRestaurant) `
    margin-right: 15px;
    font-size: 2.5rem;

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

export const NavMenu = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 60vh;
        position: absolute;
        top: 70px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5 ease;
        background:  rgb(0, 0, 0);
        border-top: 2px solid #fff;
        padding-top: 20px;
    }
`;

export const NavItem = styled.li `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    padding-right: 40px;
    font-size: 15px;
    font-weight: 500;
    
    span{
        display: none;
    }

    &:last-child{
        padding-right: 0;
    }

    @media screen and (max-width: 960px){
        width: 100%;
        
        span{
            display: block;
        }

        &:last-child{
            padding-right: 40px;
        }
    }
`;

export const NavLink = styled(Link) `
    display: flex;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    padding: 5px;

    &:hover {
        color: #f9c56a;
        transition: all 0.2s ease;
        border-bottom: 2px solid #f9c56a;
    }

    @media screen and (max-width: 960px){
        text-align: center;
        padding: 10px;
    }
`;
