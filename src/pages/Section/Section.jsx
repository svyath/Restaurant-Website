import React, { Component } from 'react'
import Shop from '../Shop/Shop';
import Details from '../Details/Details';
import Cart from '../Cart/Cart';
import Home from '../Home/Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
                        <Route path='/Restaurant-Website' component={Home} />
                        <Route path='/shop' component={Shop} exact />
                        <Route path='/shop/:id' component={Details} />
                        <Route path='/cart' component={Cart} />
                        <Route path='/menu' component={Menu} />
                        <Route path='/reservation' component={Reservation} />
                        <Route path='/contacts' component={Contact} />
                        <Route path='/checkout' component={Checkout} />
                    </Switch>
                </Router>
            </>
        )
    }
}
