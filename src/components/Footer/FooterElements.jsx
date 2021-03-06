import styled from 'styled-components';
import {Container} from '../../globalStyles';
import FooterImage from '../../images/rest4.jpg';
import {Link} from 'react-router-dom';

export const FooterWrapper = styled.div`
    height: 50vh;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${FooterImage});
    background-position: center;
    background-size: cover;
`;

export const FooterContainer = styled(Container)`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 40px 0;
`;

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    overflow: hidden;
`;

export const FooterH3 = styled.h3`
    color: #f9c56a;
    font-size: 18px;
    margin-bottom: 30px;
`;

export const FooterP = styled.p`
    color: #c2c2c2;
`;

export const SocialBox = styled.div`
    background: rgba(0, 0, 0, 0.8);
    padding: 6px 7px 7px 7px;
    display: flex;
    width: 200px;
    margin-bottom: 20px;
    position: relative;
`;

export const SocialLink = styled.a`
    padding: 8px 0px 6px 0px;
    margin: 0 1px;
    color: #fff;
    background-color: #343434;
    border-radius: 5px;
    width: 38px;
    display: inline-block;
    text-align: center;
    font-size: 20px;
    cursor: pointer;

    &:hover{
        color: #343434;
        background-color: #f9c56a;
        transition: 0.2s linear;
    }
`;

export const ContactsBox = styled.div`

`;

export const ContactsBoxItem = styled.div`
    color: #fff;
    margin-bottom: 10px;
`;

export const FSpan = styled.span`
    color: #f9c56a;
    margin-right: 5px;
`;

export const Cellar = styled.div`
    padding: 30px 0;
    background-color: rgba(0, 0, 0, 0.9);
`;

export const CellarSpan = styled.span`
    padding-right: 5px;
`;

export const CellarP = styled.p`
    text-align: center;
    font-size: 16px;
    color: #c2c2c2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Dish = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`;

export const DishItem = styled.div`
    margin-bottom: 5px;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px 10px 5px 10px;
    border-radius: 5px;

    &:hover{
        transform: scale(1.05);
        transition: 0.2s linear;
        background-color: #343434;
    }

    &:hover  p{
        color: #f9c56a;
    }
`;

export const DishP = styled.p`
    color: #c2c2c2;
`;

export const DishImg = styled.img`
    max-width: 135px;
`;

export const DishLink = styled(Link)`
    text-decoration: none;
`;
