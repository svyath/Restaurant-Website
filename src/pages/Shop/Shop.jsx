import React, { Component } from 'react'
import {DataContext} from '../../components/Context/Context';
import Navbar from '../../components/Navbar/Navbar';
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
            <Navbar />
            <Container>
                <ShopContent>
                    {
                        food.map(shopItem =>(
                            <ShopItem className="cart" key={shopItem.id}>
                                <FoodLink to={`/shop/${shopItem.id}`}>
                                    <FoodImg src={shopItem.src} />
                                    <FoodH2>{shopItem.title}</FoodH2>
                                </FoodLink>
                                    <FoodP>{shopItem.price}$</FoodP>
                                    <FoodBtn onClick = {() => this.context.addToCart(shopItem.id)}>ADD TO CART</FoodBtn>
                            </ShopItem>
                        ))
                    }
                </ShopContent>
            </Container>
            </>
        )
    }
}


