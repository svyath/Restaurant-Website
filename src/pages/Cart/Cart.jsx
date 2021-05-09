import React, { Component } from 'react';
import {FaTimes} from 'react-icons/fa';
import {DataContext} from '../../components/Context/Context';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Subscribe from '../../components/Subscribe/Subscribe';
import {
    CartContainer,
    ItemQuantity,
    DecreaseBtn,
    CurrentQuantity,
    IncreaseBtn,
    DeleteBtn,
    Total,
    CheckoutLink,
    TotalP,
    CartContent,
    CartItemInfo,
    CartItemImg,
    CartItemH2,
    CartItemSpan,
    CartHeader,
    GridItem,
    NoItemsH2,
    NoItemsP,
    NoItemsLink,
    NoItemsContainer,
    CartHeaderTop,
    CartLogo
} from './CartElements.jsx';

class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }

    render() {
        const {cart, reduction, increase, deleteItem, total} = this.context;
        if(cart.length === 0){
            return (
                <>
                <Navbar />
                <CartHeaderTop>
                    <CartLogo>- Chef Restaurant -</CartLogo>
                </CartHeaderTop>
                <NoItemsContainer>
                    <NoItemsH2>Cart is empty</NoItemsH2>
                    <NoItemsP>Please make your choise</NoItemsP>
                    <NoItemsLink to='/shop'>GO TO SHOP</NoItemsLink>
                </NoItemsContainer>
                <Subscribe />
                <Footer />
                </>
            ) 
        }else {
            return (
                <>
                    <Navbar />
                    <CartHeaderTop>
                        <CartLogo>- Chef Restaurant -</CartLogo>
                    </CartHeaderTop>
                    <CartContainer>
                        <CartHeader>
                            <GridItem></GridItem>
                            <GridItem>PRODUCT</GridItem>
                            <GridItem>PRICE</GridItem>
                            <GridItem>QUANTITY</GridItem>
                            <GridItem></GridItem>
                        </CartHeader>
                        <CartContent>
                            {
                                cart.map(item =>(
                                    <CartItemInfo key={item.id}>
                                        <CartItemImg src={item.src} />
                                        <CartItemH2>{item.title}</CartItemH2>
                                        <CartItemSpan>{item.price * item.count}$</CartItemSpan>
                                        <ItemQuantity>
                                            <DecreaseBtn onClick={() => reduction(item.id)}> - </DecreaseBtn>           
                                            <CurrentQuantity>
                                                {item.count}
                                            </CurrentQuantity>                                          
                                            <IncreaseBtn onClick={() => increase(item.id)}> + </IncreaseBtn>
                                        </ItemQuantity>
                                        <DeleteBtn onClick={() => deleteItem(item.id)}> <FaTimes /> </DeleteBtn>
                                    </CartItemInfo>
                                    
                                ))
                            }
                        </CartContent>
                        <Total>
                            <TotalP>TOTAL: {total}$</TotalP>
                            <CheckoutLink to='/checkout'>CHECKOUT</CheckoutLink>
                        </Total>
                    </CartContainer>
                    <Subscribe />
                    <Footer />
                </>
            );
        }
    }
}

export default Cart;
