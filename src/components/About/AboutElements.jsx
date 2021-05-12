import styled from 'styled-components';
import {Container} from '../../globalStyles';

export const AboutContent = styled.div `
    background: #fff;
`;

export const AboutContainer = styled(Container) `
    padding: 0 10px;
    ${Container};
`;

export const AboutH2 = styled.h2 `
    text-align: center;
    font-size: 45px;
    font-weight: 800;
    color: #4b4741;
    margin-top: 20px;
`;

export const AboutH3 = styled.h3 `
    text-align: center;
    font-size: 26px;
    font-weight: 300;
    color: #8f8d89;
`;

export const AboutLine = styled.div `
    margin: 0 auto;
    width: 80px;
    height: 5px;
    background-color: #f9c56a;
    margin-top: 20px;
    margin-bottom: 40px;
`;

export const AboutItems = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
`;

export const AboutImgs = styled.div `
    display: flex;
    flex-direction: column;
    margin-right: 30px;
`;

export const AImg = styled.img `
    width: 100%;
    margin-bottom: 15px;
`;

export const AboutDescription = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 750px;
`;

export const AboutP = styled.p `
    font-size: 22px;
    font-weight: 300;
    color: #828281;
    margin-bottom: 50px;
`;

export const AboutSign = styled.img `
    height: 20%;
    width: 30%;
`;