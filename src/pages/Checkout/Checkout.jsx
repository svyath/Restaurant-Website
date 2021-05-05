import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import {
    CheckoutContainer
} from './CheckoutElements.jsx';

export default class Checkout extends Component {
    render() {
        return (
            <>
                <Navbar />
                <CheckoutContainer>
                    <h2>Checkout Page</h2>
                </CheckoutContainer>
                <Footer />
            </>
        )
    }
}
