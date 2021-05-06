import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Container, MainLogo} from '../../globalStyles';
import CartHeaderBg from '../../images/rest8.jpg';

export const CartContainer = styled(Container)`
  max-width: 900px;
  margin-bottom: 40px;
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

export const CartContent = styled.div``;

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

export const NoItemsH2 = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  color: #4b4741;
  padding: 20px 100px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const NoItemsP = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #4b4741;
  margin-top: 20px;
`;

export const NoItemsContainer = styled(Container)`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  ${Container}
`;

export const NoItemsLink = styled(Link)`
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
  margin-top: 20px;

  &:hover{
      transform: scale(1.08);
      transition: linear 0.2s;
  }
`;

export const CartHeaderTop = styled.div`
    height: 50vh;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${CartHeaderBg});
    background-position: center;
    background-size: cover;
    position: relative;
    top: -70px;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CartLogo = styled(MainLogo)``;
