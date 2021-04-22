import React, { Component } from 'react'
import {DataContext} from '../../components/Context/Context';
import {Container} from '../../globalStyles';
import {
    ShopContent,
    ShopItem,
    FoodLink,
    FoodImg,
    FoodH2,
    FoodP,
    FoodBtn
} from './ShopElements';

export default class Shop extends Component {
    static contextType = DataContext;

    render() {
        const {food} = this.context;
        return (
            <>
            <Container>
                <ShopContent id='shopItem'>
                    {
                        food.map(shopItem =>(
                            <ShopItem className="cart" key={shopItem.id}>
                                <FoodLink to={`/shop/${shopItem.id}`}>
                                    <FoodImg src={shopItem.src} />
                                    <FoodH2>{shopItem.title}</FoodH2>
                                </FoodLink>
                                    <FoodP>{shopItem.price}</FoodP>
                                    <FoodBtn>ADD TO CART</FoodBtn>
                            </ShopItem>
                        ))
                    }
                </ShopContent>
            </Container>
                
            </>
        )
    }
}


