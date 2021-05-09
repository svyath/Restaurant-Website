import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Subscribe from '../../components/Subscribe/Subscribe';
import {
    CheckoutContainer,
    CheckHeader,
    CheckLogo
} from './CheckoutElements.jsx';

export default class Checkout extends Component {
    render() {
        return (
            <>
                <Navbar />
                <CheckHeader>
                    <CheckLogo>- Chef Restaurant -</CheckLogo>
                </CheckHeader>
                <CheckoutContainer>
                    <h2>Checkout Page</h2>
                </CheckoutContainer>
                <Subscribe />
                <Footer />
            </>
        )
    }
}
