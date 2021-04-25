import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ItemQuantity = styled.div`

`;

export const DecreaseBtn = styled.button`

`;

export const CurrentQuantity = styled.span`

`;

export const IncreaseBtn = styled.button`

`;

export const DeleteBtn = styled.button`

`;

export const Total = styled.div`

`;

export const CheckoutLink = styled(Link)`

`;

export const TotalP = styled.p`

`;

export const CartContent = styled.div`

`;

export const CartItemInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 200px);
    grid-gap: 15px;
    justify-items: center;
    align-items: center;
    border: 1px solid;
    margin: 20px 20px;

    &:nth-child(-n+2) {
      border-right: 1px solid;
    }
`;

export const CartItemImg = styled.img`
    max-width: 150px;
    width: 100%;
    display: block;
    padding: 10px;
    
`;

export const CartItemH2 = styled.h2`
    
`;

export const CartItemSpan = styled.span`

`;

