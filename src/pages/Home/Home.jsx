import React, { Component } from 'react';
import About from '../../components/About/About';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import TodSpecial from '../../components/TodSpecial/TodSpecial';

export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Header />
                <About />
                <TodSpecial />
            </>
        )
    }
}
