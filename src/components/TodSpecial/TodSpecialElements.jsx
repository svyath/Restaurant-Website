import styled from 'styled-components';
import specBack from '../../images/special_background.png';
import {Container} from '../../globalStyles';

export const TodSpecialContainer =  styled(Container)`
    width: 95% !important;
    ${Container}
`;

export const TodSpecialContent = styled.div `
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${specBack});
    background-position: center;
    background-size: cover;
    padding-bottom: 80px;
`;

export const TodSpecialH2 = styled.h2 `
    text-align: center;
    font-size: 45px;
    font-weight: 800;
    color: #fff;
    padding-top: 70px;
`;

export const TodSpecialH3 = styled.h3 `
    text-align: center;
    font-size: 26px;
    font-weight: 300;
    color: #fff;
`;

export const SliderItem = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 0 100px;
`;

export const SliderImg = styled.img `
    width: 50%;
    height: 50%;
`;

export const SliderContent = styled.div `
    margin-left: 30px;
`;

export const SliderH2 = styled.h2 `
    text-align: center;
    font-size: 36px;
    font-weight: 800;
    color: #4b4741;
    margin-bottom: 10px;
    margin-top: 15px;
`;

export const SliderP = styled.p `
    font-size: 22px;
    font-weight: 300;
    color: #828281;
    margin-bottom: 10px;
`;

export const SliderLink = styled.a `
    display: flex;
    justify-content: center;
`;

export const SliderBtn = styled.button `
    width: 170px;
    height: 52px;
    background-color: #f9c56a;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 10px;

    &:hover{
        transform: scale(1.1);
        transition: linear 0.2s;
    }
`;


