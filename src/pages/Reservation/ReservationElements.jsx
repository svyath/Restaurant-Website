import styled from 'styled-components';
import {Container, MainLogo} from '../../globalStyles';
import RestHeaderBg from '../../images/rest3.jpg';

export const ReservContainer = styled(Container)`
    text-align: center;
    max-width: 800px;
    margin-bottom: 120px;
    ${Container}
`;

export const ReservationHeader = styled.div`
    height: 50vh;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${RestHeaderBg});
    background-position: center;
    background-size: cover;
    position: relative;
    top: -70px;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ReservationLogo = styled(MainLogo)``;

export const ReservationH2 = styled.h2`
    font-size: 45px;
    font-weight: 800;
    color: #4b4741;
    padding-top: 20px;
`;

export const ReservationH3 = styled.h3`
    font-size: 26px;
    font-weight: 300;
    color: #4b4741;
`;