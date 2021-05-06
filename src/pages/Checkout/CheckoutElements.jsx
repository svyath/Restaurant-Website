import styled from 'styled-components';
import {Container, MainLogo} from '../../globalStyles';
import CheckHeaderBg from '../../images/rest9.jpg';

export const CheckoutContainer = styled(Container)`
    text-align: center;
    height: 40vh;
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