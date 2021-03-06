import React, { Component } from 'react';
import {DataContext} from '../../components/Context/Context';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Subscribe from '../../components/Subscribe/Subscribe';
import {
    ItemContent,
    DetailsInfo,
    DetailsImg,
    DetailsContainer,
    DetailsH2,
    DetailsSpan,
    DetailsP,
    AddLink,
    DetailsHeader,
    DetailsLogo,
    DetailsWrapper
} from './DetailsElements';

export default class Details extends Component {
    static contextType = DataContext;

    state = {
        foodItem: []
    }

    getItem = () => {
        if(this.props.match.params.id){
            const result = this.context.food;
            const data = result.filter(item =>
                {
                    return item.id === this.props.match.params.id
                })
            this.setState({foodItem: data});
        }
    }

    componentDidMount(){
        this.getItem();
    }

    render() {
        const {foodItem} = this.state;
        return (
            <>
                <Navbar />
                <DetailsHeader>
                    <DetailsLogo>- Chef Restaurant -</DetailsLogo>
                </DetailsHeader>
                <DetailsWrapper>
                    <ItemContent>
                        {
                            foodItem.map(item =>(
                                <DetailsInfo key={item.id}>
                                    <DetailsImg src={item.src} />
                                    <DetailsContainer>
                                        <DetailsH2>{item.title}</DetailsH2>
                                        <DetailsSpan>{item.price}$</DetailsSpan>
                                        <DetailsP>{item.description}</DetailsP>
                                        <AddLink onClick = {() => this.context.addToCart(item.id)}>
                                            ADD TO CART
                                        </AddLink>
                                    </DetailsContainer>
                                </DetailsInfo>
                            ))
                        }
                    </ItemContent>
                </DetailsWrapper>
                <Subscribe />
                <Footer />
            </>
        )
    }
}


