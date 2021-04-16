import styled, {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: 'Raleway', sans-serif;
    }
`;

export const Container = styled.div `
    z-index: 1;
    max-width: 1170px;
    width: 100%;
    padding-right: 30px;
    padding-left: 30px;
    margin: 0 auto;

    @media screen and (max-width: 991px){
        padding-right: 20px;
        padding-left: 20px;
    }
`;

export const Line = styled.div `
    width: 70px;
    height: 1px;
    background-color: #f9c56a;
    padding-bottom: 30px;
    z-index: 1;
`;