import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import {
    ContactContainer,
    ContactHeader,
    ContactLogo
} from './ContactElements.jsx';

export default class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />
                <ContactHeader>
                    <ContactLogo>- Chef Restaurant -</ContactLogo>
                </ContactHeader>
                <ContactContainer>
                    <h2>Contact Page</h2>
                </ContactContainer>
                <Footer />
            </>
        )
    }
}
