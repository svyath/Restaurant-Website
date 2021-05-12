import React from 'react'
import {
    AboutContent,
    AboutContainer, 
    AboutH2, 
    AboutH3,
    AboutItems, 
    AboutImgs, 
    AImg, 
    AboutDescription, 
    AboutP, 
    AboutSign
} from '../About/AboutElements'
import {Line} from '../../globalStyles';
import aboutImg1 from '../../images/thumb1.png';
import aboutImg2 from '../../images/thumb2.png';
import aboutSign from '../../images/signature.png';

function About() {
    return (
        <>
            <AboutContent>
                <AboutContainer>
                    <AboutH2>THE CHEF RESTAURANT</AboutH2>
                    <AboutH3>A little about us and a breif history of how we started</AboutH3>
                    <Line />
                    <AboutItems>
                        <AboutImgs>
                            <AImg src={aboutImg1} />
                            <AImg src={aboutImg2} />
                        </AboutImgs>
                        <AboutDescription>
                            <AboutP>
                                "Chef", a restaurant owned and operated by award-winning chef Henry Baker, 
                                offers first-class cuisine and service in an intimate, sophisticated setting. 
                                Located New York City, in the heart of Greenwich Village, 
                                the restaurant features Chef Lo's contemporary American cuisine. 
                                By combining flavors inspired by her Asian roots.
                            </AboutP>
                            <AboutP>
                                "Chef", also features a wine list that celebrates women in wine, 
                                primarily offering selections produced by female vintners or vineyard owners.
                            </AboutP>
                            <AboutSign src={aboutSign} />
                        </AboutDescription>
                    </AboutItems>
                </AboutContainer>
            </AboutContent>
        </>
    )
}

export default About;
