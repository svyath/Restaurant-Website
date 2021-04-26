import React, { Component } from 'react'
import Shop from '../Shop/Shop';
import Details from '../Details/Details';
import Cart from '../Cart/Cart';
import Home from '../Home/Home';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Reservation from '../Reservation/Reservation';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';
import Checkout from '../Checkout/Checkout';

export default class Section extends Component {
    render() {
        return (
            <>
                <Router>
                <Switch>
                <Redirect from="/Restaurant-Website" to="/" />
                <Route path='/' component={Home} exact />
                    <Route path='/shop' component={Shop} exact />
                    <Route path='/shop/:id' component={Details} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/menu' component={Menu} />
                    <Route path='/reservation' component={Reservation} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/checkout' component={Checkout} />
                </Switch>
                </Router>
            </>
        )
    }
}
