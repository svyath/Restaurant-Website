import React, { Component } from 'react';
import Item from './Item';
import {DataContext} from '../../components/Context/Context';

class ItemsList extends Component {
    static contextType = DataContext;

    render() {
        return (
            <>
                {
                    <Item />
                }
            </>
        );
    }
}

export default ItemsList;
