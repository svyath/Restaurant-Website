import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import {
    ReservContainer
} from './ReservationElements.jsx';

export default class Reservation extends Component {
    render() {
        return (
            <>
                <Navbar />
                <ReservContainer>
                    <h2>Reservation Page</h2>
                </ReservContainer>
            </>
        )
    }
}
