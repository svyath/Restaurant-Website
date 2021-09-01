import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Subscribe from '../../components/Subscribe/Subscribe';
import {DataContext} from '../../components/Context/Context';
import {
    CheckoutContainer,
    CheckHeader,
    CheckLogo,
    CheckoutH3,
    OrderContainer,
    PaymentContainer,
    PaymentBtn,
    PaymentItem,
    PaymentCheck,
    PaymentLabel,
    PaymentP
} from './CheckoutElements.jsx';
import { toast, Zoom } from 'react-toastify';
import './Table.css';

export default class Checkout extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }

    render() {
        const {total} = this.context;
        
          function handleClick(e) {
            e.preventDefault();
            toast.success('Thanks for your order', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                transition: Zoom
            });
          }

        return (
            <>
                <Navbar />
                <CheckHeader>
                    <CheckLogo>- Chef Restaurant -</CheckLogo>
                </CheckHeader>
                <CheckoutContainer>
                    <CheckoutH3>YOUR ORDER</CheckoutH3>
                    <OrderContainer>
                        <table>
                            <tr>
                                <td>Cart Subtotal</td>
                                <td>{total}$</td>
                            </tr>
                            <tr>
                                <td>Shiping</td>
                                <td>4$</td>
                            </tr>
                            <tr>
                                <td>Order Total</td>
                                <td>{total + 4}$</td>
                            </tr>
                        </table>
                    </OrderContainer>
                    <CheckoutH3>PAYMENT METHOD</CheckoutH3>
                    <PaymentContainer>
                    <PaymentItem>
                            <PaymentCheck type="radio" id="cash" name="payment" checked/>
                            <PaymentLabel for="cash">CASH</PaymentLabel>
                            <PaymentP>
                            Fiat, or physical cash, is a payment method often used for physical goods and cash-on-delivery transactions. 
                            </PaymentP>
                        </PaymentItem>
                        <PaymentItem>
                            <PaymentCheck type="radio" id="card" name="payment"/>
                            <PaymentLabel for="card">CREDIT/DEBIT CARD</PaymentLabel>
                            <PaymentP>
                            As a global payment solution, credit cards are the most common way for customers to pay online. 
                            </PaymentP>
                        </PaymentItem>
                        <PaymentItem>
                            <PaymentCheck type="radio" id="transfer" name="payment"/>
                            <PaymentLabel for="transfer">ELECTRONIC BANK TRANSFERS</PaymentLabel>
                            <PaymentP>
                            Customers enrolled in an internet banking facility can do a bank transfer to pay for online purchases.
                            </PaymentP>
                        </PaymentItem>
                    </PaymentContainer>
                    <PaymentBtn type="submit" onClick={handleClick}>PAY NOW</PaymentBtn>
                </CheckoutContainer>
                <Subscribe />
                <Footer />
            </>
        )
    }
}
