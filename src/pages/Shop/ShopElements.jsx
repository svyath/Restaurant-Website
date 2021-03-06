import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {MainLogo} from '../../globalStyles';
import ShopHeaderBg from '../../images/rest1.jpg';

export const ShopContent = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 40px;
`;

export const ShopItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    max-height: 320px;
    overflow: hidden;
    padding: 10px 10px;
    border: 1px solid #eee;
    box-shadow: 2px 8px 15px #ddd;
    margin: 10px;

    &:hover{
        box-shadow: 4px 10px 15px #f9c56a;
        transition: 0.2s linear;
        transform: scale(1.04);
    }

    &:hover h2 {
        color: #f9c56a;
        transition: 0.2s linear;
    }
`;

export const FoodLink = styled(Link)`
    text-decoration: none;
`;

export const FoodImg = styled.img`
    max-width: 300px;
    width: 100%;
    max-height: 200px;
    height: 100%;
    display: block;
    object-fit: cover;
`;

export const FoodH2 = styled.h2`
    color: #4b4741;
    text-align: center;
    margin: 8px 0;
    font-weight: 800;
`;

export const FoodP = styled.p`
    text-align: center;
    color: #000;
    font-weight: 400;
`;

export const FoodBtn = styled.button`
    width: 120px;
    height: 32px;
    background-color: #f9c56a;
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 10px;

    &:hover{
        transform: scale(1.08);
        transition: linear 0.2s;
    }
`;

export const ShopHeader = styled.div`
    height: 50vh;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${ShopHeaderBg});
    background-position: center;
    background-size: cover;
    position: relative;
    top: -70px;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ShopLogo = styled(MainLogo)``;

export const ShopH2 = styled.h2 `
    text-align: center;
    font-size: 45px;
    font-weight: 800;
    color: #4b4741;
    padding-top: 20px;
`;

export const ShopH3 = styled.h3 `
    text-align: center;
    font-size: 26px;
    font-weight: 300;
    color: #4b4741;
`;