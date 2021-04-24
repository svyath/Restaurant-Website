import React, { Component } from 'react';
import {Container} from '../../globalStyles';
import {DataContext} from '../../components/Context/Context';
import {
    ItemContent,
    DetailsInfo,
    DetailsImg,
    DetailsContainer,
    DetailsH2,
    DetailsSpan,
    DetailsP
} from '../Details/DetailsElements.jsx';
import {
    ItemQuantity,
    DecreaseBtn,
    CurrentQuantity,
    IncreaseBtn,
    DeleteBtn,
    Total,
    CheckoutLink,
    TotalP
} from './CartElements.jsx';

class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }

    render() {
        const {cart, reduction, increase, deleteItem, total} = this.context;

        return (
            <>
                <Container>
                    <ItemContent>
                        {
                            cart.map(item =>(
                                <DetailsInfo key={item.id}>
                                    <DetailsImg src={item.src} />
                                    <DetailsContainer>
                                        <DetailsH2>{item.title}</DetailsH2>
                                        <DetailsSpan>{item.price * item.count}$</DetailsSpan>
                                        <DetailsP>{item.description}</DetailsP>
                                        <ItemQuantity>
                                            <DecreaseBtn onClick={() => reduction(item.id)}> - </DecreaseBtn>           
                                            <CurrentQuantity>
                                                {item.count}
                                            </CurrentQuantity>                                          
                                            <IncreaseBtn onClick={() => increase(item.id)}> + </IncreaseBtn>
                                        </ItemQuantity>
                                    </DetailsContainer>
                                    <DeleteBtn onClick={() => deleteItem(item.id)}> X </DeleteBtn>
                                </DetailsInfo>
                            ))
                        }
                    </ItemContent>
                    <Total>
                        <CheckoutLink to='/checkout'>CHECKOUT</CheckoutLink>
                        <TotalP>TOTAL: {total}$</TotalP>
                    </Total>
                </Container>
            </>
        );
    }
}

export default Cart;
