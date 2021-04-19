import React from 'react'
import {Line} from '../../globalStyles';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {
    TodSpecialContent,
    TodSpecialContainer, 
    TodSpecialH2, 
    TodSpecialH3, 
    SliderItem,
    SliderImg,
    SliderContent,
    SliderH2,
    SliderP,
    SliderLink,
    SliderBtn
} from '../../components/TodSpecial/TodSpecialElements';
import sliderImg1 from '../../images/slider/slider_img1.png';
import sliderImg2 from '../../images/slider/slider_img2.png';
import sliderImg3 from '../../images/slider/slider_img3.png';

function TodSpecial() {
    return (
        <>
            <TodSpecialContent>
                <TodSpecialContainer>
                    <TodSpecialH2>TODAY’S SPECIALS</TodSpecialH2>
                    <TodSpecialH3>Come today and have this special dish by our chefs</TodSpecialH3>
                    <Line />      
                        <AwesomeSlider>
                            <div>
                                <SliderItem>
                                    <SliderImg src={sliderImg1} />
                                    <SliderContent>
                                        <SliderH2>Beef Wellington</SliderH2>
                                        <SliderP>
                                        A dish that's fallen out of favour and then become popular again more 
                                        times than we can count, beef Wellington's origins are as unclear as its connection 
                                        to Arthur Wellesley, 1st Duke of Wellington. 
                                        </SliderP>
                                        <SliderP>
                                        Traditionally, it's a beef fillet steak, 
                                        coated in pâté and mushroom duxelles (an extremely finely chopped mixture of mushrooms, 
                                        shallots and herbs), wrapped in puff pastry, then baked. Its modern-day popularity is 
                                        largely thanks to Gordon Ramsay who's made it one of his signature dishes.
                                        </SliderP>
                                        <SliderLink>
                                            <SliderBtn>ADD TO CART</SliderBtn>
                                        </SliderLink>
                                    </SliderContent>
                                </SliderItem>
                            </div>
                            <div>
                                <SliderItem>
                                    <SliderImg src={sliderImg2} />
                                        <SliderContent>
                                            <SliderH2>Peking duck</SliderH2>
                                            <SliderP>
                                            A dish cooked and eaten in Beijing since the Imperial era, today Peking duck 
                                            is a Chinese restaurant favourite across the world. There are countless methods 
                                            of preparing and cooking the duck.
                                            </SliderP>
                                            <SliderP>
                                            But originally it was roasted in a closed oven 
                                            until the kitchens of the Qing Dynasty developed the open-oven style to cook several 
                                            ducks at the same time. The duck is then served with steamed Chinese pancakes, cucumber, 
                                            spring onion and sweet bean sauce.
                                            </SliderP>
                                            <SliderLink>
                                                <SliderBtn>ADD TO CART</SliderBtn>
                                            </SliderLink>
                                    </SliderContent>   
                                </SliderItem>
                            </div>
                            <div>
                                <SliderItem>
                                    <SliderImg src={sliderImg3} />
                                    <SliderContent>
                                        <SliderH2>Texas-style barbecue</SliderH2>
                                        <SliderP>Other states along the so-called barbecue belt that include the Carolinas, 
                                        Tennessee and Kentucky will have to forgive us, but Texan barbecue takes the spotlight. 
                                        </SliderP>
                                        <SliderP>
                                        Drawing on the diverse cultural traditions within the state, Texas-style barbecue has 
                                        strong German and Czech influences, and mostly features brisket, sausage and beef short 
                                        ribs as well as smoked meats. The selection of sides usually includes some type of 
                                        a slaw and beans as well as potato salad, mac 'n' cheese, fried okra or green beans.
                                        </SliderP>
                                        <SliderLink>
                                            <SliderBtn>ADD TO CART</SliderBtn>
                                        </SliderLink>
                                    </SliderContent>
                                </SliderItem>
                            </div>
                        </AwesomeSlider>
                </TodSpecialContainer>
            </TodSpecialContent>
        </>
    )
}

export default TodSpecial;
