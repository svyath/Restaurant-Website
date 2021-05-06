import React, { Component } from 'react'
import {DataContext} from '../../components/Context/Context';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import {Container, Line} from '../../globalStyles';
import {
    ShopContent,
    ShopItem,
    FoodLink,
    FoodImg,
    FoodH2,
    FoodP,
    FoodBtn,
    ShopHeader,
    ShopLogo,
    ShopH2,
    ShopH3
} from './ShopElements';

export default class Shop extends Component {
    static contextType = DataContext;

    render() {
        const {food} = this.context;
        return (
            <>
            <Navbar />
            <ShopHeader>
                <ShopLogo>- Chef Restaurant -</ShopLogo>
            </ShopHeader>
            <Container>
                <ShopH2>OUR RANGE OF DISHES</ShopH2>
                <ShopH3>Choose whatever you like</ShopH3>
                <Line />
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
            <Footer />
            </>
        )
    }
}


