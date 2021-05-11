import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Subscribe from '../../components/Subscribe/Subscribe';
import {
    ContactContainer,
    ContactHeader,
    ContactLogo,
    Devider,
    ContactH2,
    ContactP,
    CSpan,
    CItemWrapper
} from './ContactElements.jsx';
import MapContainer from './MapContainer';
import {
    FaCompass, 
    FaEnvelope, 
    FaPhone
} from 'react-icons/fa';

export default class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />
                <ContactHeader>
                    <ContactLogo>- Chef Restaurant -</ContactLogo>
                </ContactHeader>
                <ContactContainer>
                    <CItemWrapper>
                        <ContactH2>ADDRESS</ContactH2>
                        <ContactP><CSpan><FaCompass /></CSpan> 999 Halytska Street, Ivano-Frankivsk</ContactP>
                        <ContactP><CSpan><FaPhone /></CSpan> (380) 26 58 190 44</ContactP>
                        <ContactP><CSpan><FaEnvelope /></CSpan> chef.restaurant@outlook.com</ContactP>
                    </CItemWrapper>
                    <CItemWrapper>
                        <ContactH2>WORKING HOURS</ContactH2>
                        <ContactP>9:00 am to 11:00 pm on Weekdays</ContactP>
                        <ContactP>10:00 am to 11:45 pm on Weekends</ContactP>
                    </CItemWrapper>
                </ContactContainer>
                <MapContainer />
                <Devider />
                <Subscribe />
                <Footer />
            </>
        )
    }
}

