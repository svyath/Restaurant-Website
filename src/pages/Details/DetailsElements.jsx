import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Container, MainLogo} from '../../globalStyles';
import DetailsHeaderBg from '../../images/rest6.jpg';

export const ItemContent = styled.div`
    border: 1px solid #eee;
    box-shadow: 2px 8px 15px #ddd;
    margin: 10px;
`;

export const DetailsInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
`;

export const DetailsImg = styled.img`
    max-width: 600px;
    width: 100%
`;

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
`;

export const DetailsH2 = styled.h2`
    color: #4b4741;
    text-align: center;
    font-size: 32px;
    font-weight: 800;
`;

export const DetailsSpan = styled.span`
    margin: 10px 0;
`;

export const DetailsP = styled.p`
    font-size: 22px;
    font-weight: 300;
    color: #828281;
    margin-bottom: 10px;
`;

export const AddLink = styled(Link)`
    text-decoration: none;
    color: #000;
    background-color: #f9c56a;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px 25px;

    &:hover{
        transform: scale(1.08);
        transition: linear 0.2s;
    }
`;

export const DetailsHeader = styled.div`
    height: 50vh;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${DetailsHeaderBg});
    background-position: center;
    background-size: cover;
    position: relative;
    top: -70px;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DetailsLogo = styled(MainLogo)``;

export const DetailsWrapper = styled(Container)`
    margin-bottom: 80px;
`;