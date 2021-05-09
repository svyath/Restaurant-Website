import React, { Component } from 'react'
import {DataContext} from '../../components/Context/Context';
import Navbar from '../../components/Navbar/Navbar';
import {Line} from '../../globalStyles';
import {
    MenuContainer,
    MenuHeader,
    MenuLogo,
    MenuH2,
    MenuH3,
    MenuContent,
    MenuItem,
    FoodH2,
    FoodH3,
    FoodP,
    FoodBtn,
    FilterButtons
} from './MenuElements';
import ItemsList from './ItemsList';
import Footer from '../../components/Footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';

export default class Menu extends Component {
    static contextType = DataContext;

    handleBtns = (e) => {

    }

    render() {
        const {food} = this.context;
        
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
