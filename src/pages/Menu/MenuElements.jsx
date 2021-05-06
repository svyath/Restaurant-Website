import styled from 'styled-components';
import {Container, MainLogo} from '../../globalStyles';
import MenuHeaderBg from '../../images/rest5.jpg';

export const MenuContainer =  styled(Container)`
    margin-bottom: 40px;

    ${Container}
`;

export const MenuH2 = styled.h2 `
    text-align: center;
    font-size: 45px;
    font-weight: 800;
    color: #4b4741;
    padding-top: 20px;
`;

export const MenuH3 = styled.h3 `
    text-align: center;
    font-size: 26px;
    font-weight: 300;
    color: #4b4741;
`;

export const MenuContent = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    max-height: 250px;
    overflow: hidden;
    padding: 10px 10px;
    border: 1px solid #eee;
    box-shadow: 2px 8px 15px #ddd;
    margin: 10px;
`;

export const FoodH2 = styled.h2`
    color: #4b4741;
    font-size: 28px;
    margin-bottom: 15px;
`;

export const FoodH3 = styled.h3`
    text-align: center;
    color: #828281;
    font-size: 18px;
    margin-bottom: 10px;
`;

export const FoodP = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: #f9c56a;
    margin-bottom: 10px;
`;

export const MenuHeader = styled.div`
    height: 50vh;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${MenuHeaderBg});
    background-position: center;
    background-size: cover;
    position: relative;
    top: -70px;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MenuLogo = styled(MainLogo)``;

export const FoodBtn = styled.button``;

export const FilterButtons = styled.div``;