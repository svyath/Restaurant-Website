import React, { Component } from 'react';
import {DataContext} from '../../components/Context/Context';
import {
    MenuContent,
    MenuItem,
    FoodH2,
    FoodH3,
    FoodP
} from './MenuElements';

class Item extends Component {
    static contextType = DataContext;

    render() {
        const {food} = this.context;

        return (
            <>
                <MenuContent>
                    {
                        food.map(item =>(
                            <MenuItem key={item.id}>
                                <FoodH2>{item.title}</FoodH2>
                                <FoodH3>{item.description}</FoodH3>
                                <FoodP>~~~~~~ {item.price}$ ~~~~~~</FoodP>
                            </MenuItem>
                        ))
                    }
                </MenuContent>
            </>
        );
    }
}

export default Item;

