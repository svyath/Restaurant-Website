import React, { Component } from 'react'
import {DataContext} from '../../components/Context/Context';
import Navbar from '../../components/Navbar/Navbar';
import {Line} from '../../globalStyles';
import {
    MenuContainer,
    MenuH2,
    MenuH3,
    MenuContent,
    MenuItem,
    FoodH2,
    FoodH3,
    FoodP,
    FoodBtn
} from './MenuElements';

export default class Menu extends Component {
    static contextType = DataContext;

    render() {
        const {food} = this.context;

        return (
            <>
                <Navbar />
                <MenuContainer>
                    <MenuH2>OUR MENU</MenuH2>
                    <MenuH3>A mouth-watering menu like never before</MenuH3>
                    <Line />
                    <MenuContent>
                    {
                        food.map(item =>(
                            <MenuItem className="cart" key={item.id}>
                                <FoodH2>{item.title}</FoodH2>
                                <FoodH3>{item.description}</FoodH3>
                                <FoodP>~~~~~~ {item.price}$ ~~~~~~</FoodP>
                            </MenuItem>
                        ))
                    }
                    </MenuContent>
                </MenuContainer>
            </>
        )
    }
}
