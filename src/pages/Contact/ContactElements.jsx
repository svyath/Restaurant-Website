import styled from 'styled-components';
import {Container, MainLogo} from '../../globalStyles';
import ContactHeaderBg from '../../images/rest7.jpg';

export const ContactContainer = styled(Container)`
    text-align: center;
    height: 40vh;
    ${Container}
`;

export const ContactHeader = styled.div`
    height: 50vh;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${ContactHeaderBg});
    background-position: center;
    background-size: cover;
    position: relative;
    top: -70px;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContactLogo = styled(MainLogo)``;