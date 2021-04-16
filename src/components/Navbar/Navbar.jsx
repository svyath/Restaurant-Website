import React, {useState} from 'react';
import {Nav, NavContainer, NavLogo, NavIcon, Hamburger} from './NavbarElements';
import {FaTimes, FaBars} from 'react-icons/fa';

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
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;
