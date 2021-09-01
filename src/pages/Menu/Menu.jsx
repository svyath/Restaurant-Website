import React, { Component } from 'react'
import {DataContext} from '../../components/Context/Context';
import Navbar from '../../components/Navbar/Navbar';
import {Line} from '../../globalStyles';
import {
    MenuContainer,
    MenuHeader,
    MenuLogo,
    MenuH2,
    MenuH3
} from './MenuElements';
import ItemsList from './ItemsList';
import Footer from '../../components/Footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';

export default class Menu extends Component {
    static contextType = DataContext;

    render() {
        return (
            <>
                <Navbar />
                <MenuHeader>
                    <MenuLogo>- Chef Restaurant -</MenuLogo>
                </MenuHeader>
                <MenuContainer>
                    <MenuH2>OUR MENU</MenuH2>
                    <MenuH3>A mouth-watering menu like never before</MenuH3>
                    <Line />
                    <ItemsList />
                </MenuContainer>
                <Subscribe />
                <Footer />
            </>
        )
    }
}
