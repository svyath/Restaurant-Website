import styled from 'styled-components';
import {Container} from '../../globalStyles';

export const MenuContainer =  styled(Container)`
    margin-bottom: 40px;
    
    ${Container}
`;

export const MenuH2 = styled.h2 `
    text-align: center;
    font-size: 45px;
    font-weight: 800;
    color: #4b4741;
    padding-top: 70px;
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

export const FoodBtn = styled.button``;