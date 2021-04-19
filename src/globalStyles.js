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
    margin-right: 30px;
    margin-left: 30px;
    margin: 0 auto;

    @media screen and (max-width: 991px){
        margin-right: 20px;
        margin-left: 20px;
    }
`;

export const Line = styled.div `
    margin: 0 auto;
    width: 80px;
    height: 5px;
    background-color: #f9c56a;
    margin-top: 20px;
    margin-bottom: 40px;
`;