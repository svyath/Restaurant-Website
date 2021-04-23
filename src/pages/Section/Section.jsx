import React, { Component } from 'react'
import Shop from '../Shop/Shop';
import Details from '../Details/Details';
import Cart from '../Cart/Cart';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class Section extends Component {
    render() {
        return (
            <section>
                <Route path='/shop' component={Shop} exact />
                <Route path='/shop/:id' component={Details} />
                <Route path='/cart' component={Cart} />
            </section>
        )
    }
}
