import React, {useState} from 'react';
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

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to='/'>
                        <NavIcon />
                        CHEF
                    </NavLogo>
                    <Hamburger onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </Hamburger>
                    <NavMenu onClick={handleClick} click={click}>
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
                                <span>CART</span><FaShoppingCart />
                            </NavLink>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;
