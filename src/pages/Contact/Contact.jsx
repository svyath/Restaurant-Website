import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import {
    ContactContainer,
    ContactHeader,
    ContactLogo,
    Devider
} from './ContactElements.jsx';
import MapContainer from './MapContainer';

export default class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />
                <ContactHeader>
                    <ContactLogo>- Chef Restaurant -</ContactLogo>
                </ContactHeader>
                <ContactContainer>
                    
                </ContactContainer>
                <MapContainer />
                <Devider />
                <Footer />
            </>
        )
    }
}

