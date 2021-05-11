import styled from 'styled-components';
import {Container, MainLogo} from '../../globalStyles';
import ContactHeaderBg from '../../images/rest7.jpg';

export const ContactContainer = styled(Container)`
    text-align: center;
   
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

export const Devider = styled.div`
    height: 480px;
`;

export const ContactH2 = styled.h2`
    margin-bottom: 15px;
    font-size: 36px;
    font-weight: 800;
    color: #4b4741;
`;

export const ContactP = styled.p`
    font-size: 26px;
    font-weight: 400;
    color: #8f8d89;
    margin-bottom: 10px;
`;

export const CSpan = styled.span`
    color: #f9c56a;
`;

export const CItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
`;