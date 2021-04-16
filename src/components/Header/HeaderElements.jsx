import styled from 'styled-components';
import headerBackground from '../../images/header/1.jpg';
import headerLogo from '../../images/logo.png';
import headerLinkImg from '../../images/arrow-down.png';

export const HeaderContainer = styled.div`
    min-height: 791px;
    position: relative;
    margin-top: -70px;
    color: #fff;
`;

export const HeaderBg = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &::after{
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        width: 100%;
        height: 100%;
        background-image: -moz-linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgb(1, 1, 1) 100%);
        background-image: -webkit-linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgb(1, 1, 1) 100%);
        background-image: -ms-linear-gradient(0deg, rgba(0, 0, 0.8) 0%, rgb(1, 1, 1) 100%);
        opacity: 0.8;
        z-index: 1;
    }
`;

export const VideoBg = styled.video `
    width: 100%;
    height: 100%;
    --o-object-fit: cover;
    object-fit: cover;
    z-index: 0;
`;

export const HeaderContent = styled.div `
    position: relative;
    padding-top: 120px;
    z-index: 1;
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
}) ``;

export const HeaderH1 = styled.h1 `
    font-size: 70px;
    font-weight: 900;
    text-transform: uppercase;
    padding-top: 20px;
    padding-bottom: 10px;
`;

export const HeaderH2 = styled.h2 `
    font-size: 38px;
    font-weight: 300;
`;

export const HeaderLink = styled.a `
    cursor: pointer;
    padding-top: 40px;
    padding-bottom: 20px;
`;

export const HeaderLinkImg = styled.img.attrs({
    src: `${headerLinkImg}`
}) `
    height: 100%;
    width: 100%;
`;
