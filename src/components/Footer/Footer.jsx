import React , {Component} from 'react';
import {
    FooterWrapper,
    FooterContainer,
    FooterSection,
    FooterH3,
    FooterP,
    SocialBox,
    SocialLink,
    ContactsBox,
    ContactsBoxItem,
    Cellar,
    CellarSpan,
    CellarP,
    FSpan,
    Dish,
    DishImg,
    DishItem,
    DishP,
    DishLink
} from './FooterElements.jsx';
import {DataContext} from '../../components/Context/Context';
import {
    FaRegCopyright, 
    FaFacebook, 
    FaTwitter, 
    FaYoutube, 
    FaPinterest, 
    FaInstagram, 
    FaCompass, 
    FaEnvelope, 
    FaPhone
} from 'react-icons/fa';
import { Redirect, Route, Switch } from "react-router";

class Footer extends Component {
    static contextType = DataContext;

    render() {
        const {food} = this.context;

        return (
            <>
                <FooterWrapper>
                <FooterContainer>
                    <FooterSection>
                        <FooterH3>ABOUT US</FooterH3>
                        <FooterP>
                        "Chef", a restaurant owned and operated by award-winning chef Henry Baker, 
                        offers first-class cuisine and service in an intimate, sophisticated setting. 
                        Located New York City, in the heart of Greenwich Village, the restaurant features 
                        Chef Lo's contemporary American cuisine. By combining flavors inspired by her Asian roots.
                        </FooterP>
                    </FooterSection>
                    <FooterSection>
                        <FooterH3>DISHES OF THE WEEK</FooterH3>
                        <Dish>
                        {
                            <>
                                <DishItem>
                                    <DishLink to={`/shop/${food[16].id}`}>
                                        <DishImg src={food[16].src} />
                                        <DishP>{food[16].title}</DishP>
                                    </DishLink>
                                </DishItem>
                                <DishItem>
                                    <DishLink to={`/shop/${food[17].id}`}>
                                        <DishImg src={food[17].src} />
                                        <DishP>{food[17].title}</DishP> 
                                    </DishLink>
                                </DishItem>
                            </>
                        }
                        </Dish>
                    </FooterSection>
                    <FooterSection>
                        <FooterH3>REACH US</FooterH3>
                        <SocialBox>
                            <SocialLink href='https://www.facebook.com/'><FaFacebook /></SocialLink>
                            <SocialLink href='https://twitter.com/'><FaTwitter /></SocialLink>
                            <SocialLink href='https://www.pinterest.com/'><FaPinterest /></SocialLink>
                            <SocialLink href='https://www.youtube.com/'><FaYoutube /></SocialLink>
                            <SocialLink href='https://www.instagram.com/'><FaInstagram /></SocialLink>
                        </SocialBox>
                        <ContactsBox>
                            <ContactsBoxItem><FSpan><FaCompass /></FSpan> 999 Halytska Street, Ivano-Frankivsk</ContactsBoxItem>
                            <ContactsBoxItem><FSpan><FaPhone /></FSpan> (380) 26 58 190 44</ContactsBoxItem>
                            <ContactsBoxItem><FSpan><FaEnvelope /></FSpan> chef.restaurant@outlook.com</ContactsBoxItem>
                        </ContactsBox>
                    </FooterSection>
                </FooterContainer>
            </FooterWrapper>
            <Cellar>
                <CellarP><CellarSpan><FaRegCopyright /></CellarSpan> 2021 Chef Restaurant. All rights reserved.</CellarP>
            </Cellar>
            </>
        );
    }
}

export default Footer;
