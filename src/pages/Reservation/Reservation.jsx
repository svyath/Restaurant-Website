import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import {
    ReservContainer,
    ReservationHeader,
    ReservationLogo,
    ReservationH2,
    ReservationH3
} from './ReservationElements.jsx';
import {Line} from '../../globalStyles';
import Subscribe from '../../components/Subscribe/Subscribe';

export default class Reservation extends Component {
    render() {
        return (
            <>
                <Navbar />
                <ReservationHeader>
                    <ReservationLogo>- Chef Restaurant -</ReservationLogo>
                </ReservationHeader>
                <ReservContainer>
                    <ReservationH2>RESERVATION</ReservationH2>
                    <ReservationH3>Book a table online</ReservationH3>
                    <Line />
                </ReservContainer>
                <Subscribe />
                <Footer />
            </>
        )
    }
}
