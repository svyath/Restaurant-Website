import React, { Component } from 'react';
import {Container} from '../../globalStyles';
import {DataContext} from '../../components/Context/Context';
import {
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
    CartItemSpan
} from './CartElements.jsx';

class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }

    render() {
        const {cart, reduction, increase, deleteItem, total} = this.context;
        if(cart.length === 0){
            return <h2>Cart is empty</h2>
        }else{
            return (
                <>
                    <Container>
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
                                        <DeleteBtn onClick={() => deleteItem(item.id)}> X </DeleteBtn>
                                    </CartItemInfo>
                                    
                                ))
                            }
                        </CartContent>
                        <Total>
                            <CheckoutLink to='/checkout'>CHECKOUT</CheckoutLink>
                            <TotalP>TOTAL: {total}$</TotalP>
                        </Total>
                    </Container>
                </>
            );
        }
    }
}

export default Cart;
