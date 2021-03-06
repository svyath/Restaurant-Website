import React from 'react'
import {
    HeaderContainer,
    HeaderBg,
    VideoBg, 
    HeaderContent, 
    HeaderItems, 
    HeaderLogo, 
    HeaderH1, 
    HeaderH2, 
    HeaderLink, 
    HeaderLinkImg
} from './HeaderElements';
import Video from '../../videos/video.mp4';

function Header() {
    return (
        <HeaderContainer>
            <HeaderBg>
                <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline/>
            </HeaderBg>
            <HeaderContent>
                <HeaderItems>
                    <HeaderLogo></HeaderLogo>
                    <HeaderH1>Mouth-watering dishes</HeaderH1>
                    <HeaderH2>Beyond the boundaries of taste</HeaderH2>
                    <HeaderLink>
                        <HeaderLinkImg></HeaderLinkImg>
                    </HeaderLink>
                </HeaderItems>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header
