import styled from 'styled-components';
import {Container, MainLogo} from '../../globalStyles';
import CheckHeaderBg from '../../images/rest9.jpg';

export const CheckoutContainer = styled(Container)`
    text-align: center;
    
    ${Container}
`;

export const CheckHeader = styled.div`
    height: 50vh;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${CheckHeaderBg});
    background-position: center;
    background-size: cover;
    position: relative;
    top: -70px;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CheckLogo = styled(MainLogo)``;

export const CheckoutH3 = styled.h3`
    margin-bottom: 15px;
    font-size: 32px;
    font-weight: 800;
    color: #4b4741;
`;

export const OrderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
`;

export const PaymentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
`;

export const PaymentBtn = styled.button`
    margin-bottom: 50px;
    max-width: 300px;
    padding: 14px 30px;
    border-style: none;
    border-radius: 5px;
    background-color: rgba(249, 197, 106, 0.8);
    box-shadow: 0px 2px 2px rgb(0 0 0 / 15%);
    font-size: 17px;
    font-weight: 500;
    color: #000;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    -webkit-appearance: none;
    margin-left: 10px;
    position: relative;

    &:hover{
        background-color: rgba(249, 197, 106, 1);
        transition: 0.2s linear;
        transform: scale(1.08);
    }
`;

export const OrderItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const PaymentItem = styled.div`
    max-width: 300px;
`;

export const OrderP = styled.p`
    padding: 10px;
`;

export const PaymentCheck = styled.input`
    background-color: rgba(249, 197, 106, 1);
`;

export const PaymentLabel = styled.label`
    padding-left: 10px;
    font-size: 18px;
    font-weight: 500;
`;

export const PaymentP = styled.p`
    font-size: 16px;
    color: #828281;
    margin-top: 20px;
`;

export const PaymentForm = styled.form`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const OrderSpan = styled.span`
   
   
`;