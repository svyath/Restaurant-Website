import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {DataContext} from '../../components/Context/Context';

export default class Shop extends Component {
    static contextType = DataContext;

    render() {
        const {food} = this.context;
        return (
            <div id='shopItem'>
                {
                    food.map(shopItem =>(
                        <div className="cart" key={shopItem.id}>
                            <Link to={`/shop/${shopItem.id}`}>
                                <h2>{shopItem.title}</h2>
                                <img src={shopItem.src} />
                            </Link>
                                <h3>{shopItem.price}</h3>
                        </div>
                    ))
                }
            </div>
        )
    }
}


