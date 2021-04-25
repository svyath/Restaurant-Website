import React, { Component } from 'react';
import {FaTimes} from 'react-icons/fa';
import {DataContext} from '../../components/Context/Context';
import Navbar from '../../components/Navbar/Navbar';
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
    GridItem
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
                <h2>Cart is empty</h2>
                </>
            ) 
        }else {
            return (
                <>
                    <Navbar />
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
                </>
            );
        }
    }
}

export default Cart;
