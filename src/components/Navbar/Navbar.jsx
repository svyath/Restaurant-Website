import React, {Component} from 'react';
import {
    Nav, 
    NavContainer, 
    NavLogo, 
    NavIcon, 
    Hamburger,
    NavMenu,
    NavItem,
    NavLink
} from './NavbarElements';
import {FaTimes, FaBars, FaShoppingCart} from 'react-icons/fa';
import {DataContext} from '../../components/Context/Context';

class Navbar extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }


    render() {
        const {toggle} = this.state;
        const {cart} = this.context;

        return (
            <>
            <Nav>
                <NavContainer>
                    <NavLogo to='/'>
                        <NavIcon />
                        CHEF
                    </NavLogo>
                    <Hamburger onClick={this.menuToggle}>
                        {toggle ? <FaTimes /> : <FaBars />}
                    </Hamburger>
                    <NavMenu onClick={this.menuToggle} toggle={toggle}>
                        <NavItem>
                            <NavLink to='/'>HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/menu'>MENU</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/reservation'>RESERVATION</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/shop'>SHOP</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/contact'>CONTACT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/cart'>
                                <span>CART</span><FaShoppingCart /><span>{cart.length}</span>
                            </NavLink>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
        );
    }
}

export default Navbar;

