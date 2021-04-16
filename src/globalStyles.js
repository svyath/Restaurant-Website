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

    @media screen and (max-width: 991px){
        padding-right: 20px;
        padding-left: 20px;
    }
`;