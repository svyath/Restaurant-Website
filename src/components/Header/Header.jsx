import React from 'react'
import Navbar from '../Navbar/Navbar';
import {HeaderContainer, HeaderContent, HeaderItems, HeaderLogo, HeaderH1, HeaderH2, HeaderLink, HeaderLinkImg} from './HeaderElements';

function Header() {
    return (
        <HeaderContainer>
            <Navbar />
            <HeaderContent>
                <HeaderItems>
                    <HeaderLogo></HeaderLogo>
                    <HeaderH1>Delicious Food</HeaderH1>
                    <HeaderH2>Tomato is a delitious restaurant website template</HeaderH2>
                    <HeaderLink>
                        <HeaderLinkImg></HeaderLinkImg>
                    </HeaderLink>
                </HeaderItems>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header
