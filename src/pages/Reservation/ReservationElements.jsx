import styled from 'styled-components';
import {Container, MainLogo} from '../../globalStyles';
import RestHeaderBg from '../../images/rest3.jpg';

export const ReservContainer = styled(Container)`
    text-align: center;
    height: 40vh;
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