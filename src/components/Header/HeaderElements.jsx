import styled from 'styled-components';
import headerBackground from '../../images/header/1.jpg';
import headerLogo from '../../images/logo.png';
import headerLinkImg from '../../images/arrow-down.png';

export const HeaderContainer = styled.div`
    background: url(${headerBackground});
    height: 720px;
    background-position: center;
    background-size: cover;
`;

export const HeaderContent = styled.div `
    padding-top: 150px;
`;

export const HeaderItems = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
`;

export const HeaderLogo = styled.img.attrs({
    src: `${headerLogo}`
}) `
   
`;

export const HeaderH1 = styled.h1 `
    font-size: 70px;
    font-weight: 900;
    text-transform: uppercase;
`;

export const HeaderH2 = styled.h2 `
    font-size: 38px;
    font-weight: 300;
`;

export const HeaderLink = styled.a `
    cursor: pointer;
`;

export const HeaderLinkImg = styled.img.attrs({
    src: `${headerLinkImg}`
}) `
    height: 100%;
    width: 100%;
`;
