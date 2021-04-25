import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Container} from '../../globalStyles';

export const CartContainer = styled(Container)`
  max-width: 900px;

  ${Container}
`;

export const CartHeader = styled.div`
  display: grid;
  grid-template-columns: 255px 230px 130px 100px 50px;
  height: 80px;
  grid-gap: 15px;
  justify-items: center;
  align-items: center;
  border: 1px solid;
  background-color: rgba(0, 0, 0, 0.9);
  margin-top: 40px;
`;

export const GridItem = styled.div`
  color: #fff;
`;

export const ItemQuantity = styled.div`
  display: block;
`;

export const DecreaseBtn = styled.button`
  background-color: #f9c56a;
  outline: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px;
  margin-right: 5px;
  font-size: 14px;
  font-weight: 500;
`;

export const CurrentQuantity = styled.span`
  font-size: 18px;
  font-weight: 400;
`;

export const IncreaseBtn = styled.button`
  background-color: #f9c56a;
  outline: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px;
  margin-left: 5px;
  font-size: 14px;
  font-weight: 500;
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  outline: none;
  border: none;
  background: transparent;
  
  &:hover{
      transform: rotate(90deg);
      transition: linear 0.4s;
  }
`;

export const Total = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CheckoutLink = styled(Link)`
  text-decoration: none;
  color: #000;
  background-color: #f9c56a;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px 25px;
  border-radius: 3px;
  margin-right: 30px;

  &:hover{
      transform: scale(1.08);
      transition: linear 0.2s;
  }
`;

export const TotalP = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-right: 30px;
`;

export const CartContent = styled.div`

`;

export const CartItemInfo = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 15px;
    justify-items: center;
    align-items: center;
    border: 1px solid;
    border-top: none;
    margin-bottom: 0;

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
    font-weight: 600;
`;

export const CartItemSpan = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

