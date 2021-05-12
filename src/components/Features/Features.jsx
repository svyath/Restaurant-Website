import React from 'react'
import {
    FeaturesContent,
    FeaturesContainer, 
    FeaturesH2, 
    FeaturesH3,
    FeaturesItems,
    FeaturesItem, 
    FeaturesImg, 
    FeaturesH4,
    FeaturesP,
    FLine 
} from './FeaturesElements';
import {Line} from '../../globalStyles';
import features1 from '../../images/features1.png';
import features2 from '../../images/features3.png';
import features3 from '../../images/features2.png';

export default function Features() {
    return (
        <>
            <FeaturesContent>
                <FeaturesContainer>
                    <FeaturesH2>OUR FEATURES</FeaturesH2>
                    <FeaturesH3>Little things make us the best</FeaturesH3>
                    <Line />
                    <FeaturesItems>
                        <FeaturesItem>
                            <FeaturesImg src={features1} />
                            <FeaturesH4>GOOD SERVICE</FeaturesH4>
                            <FLine />
                            <FeaturesP>
                            Waitrons know their jobs, are efficient and able to advise customers on the best choices. Food is served with minimal delay, and after the meal patrons don’t have to struggle to get their bill.
                            </FeaturesP>
                        </FeaturesItem>
                        <FeaturesItem>
                            <FeaturesImg src={features2} />
                            <FeaturesH4>REASONABLE COST</FeaturesH4>
                            <FLine />
                            <FeaturesP>
                            Restaurants have different price points, but the golden rule is that customers should feel that the cost of their meal was fair and reasonable, even in high-end establishments. Avoid overcharging.
                            </FeaturesP>
                        </FeaturesItem>
                        <FeaturesItem>
                            <FeaturesImg src={features3} />
                            <FeaturesH4>TASTY FOOD</FeaturesH4>
                            <FLine />
                            <FeaturesP>
                            Invariably the food is tasty and well prepared. The fare is appropriate for the price point and market it’s aimed at. It’s essential that patrons feel they’ve had a good, enjoyable meal.
                            </FeaturesP>
                        </FeaturesItem>
                    </FeaturesItems>
                </FeaturesContainer>
            </FeaturesContent>
        </>
    )
}
