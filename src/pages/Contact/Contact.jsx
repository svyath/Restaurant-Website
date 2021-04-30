import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import {
    ContactContainer
} from './ContactElements.jsx';

export default class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />
                <ContactContainer>
                    <h2>Contact Page</h2>
                </ContactContainer>
            </>
        )
    }
}
