import React, { Component } from 'react'
import Shop from '../Shop/Shop';
import Details from '../Details/Details';
import Cart from '../Cart/Cart';
import Home from '../Home/Home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Reservation from '../Reservation/Reservation';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';

export default class Section extends Component {
    render() {
        return (
            <>
                <Route path='/' component={Home} exact />
                <Route path='/shop' component={Shop} exact />
                <Route path='/shop/:id' component={Details} />
                <Route path='/cart' component={Cart} />
                <Route path='/menu' component={Menu} />
                <Route path='/reservation' component={Reservation} />
                <Route path='/contact' component={Contact} />
            </>
        )
    }
}
