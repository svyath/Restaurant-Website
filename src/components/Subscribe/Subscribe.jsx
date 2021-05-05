import React from 'react'
import {
    SubscribeWrapper,
    SubscribeContainer,
    SubscribeContent,
    SubscribeH2,
    SubscribeH3,
    SubscribeInput,
    SubscribeBtn,
    SubscribeForm
} from './SubscribeElements.jsx';
import {FaAngleRight} from 'react-icons/fa';

export default function Subscribe() {
    return (
        <>
            <SubscribeWrapper>
                <SubscribeContainer>
                    <SubscribeContent>
                        <SubscribeH2>SUBSCRIBE</SubscribeH2>
                        <SubscribeH3>Get updates about new dishes and upcoming events</SubscribeH3>
                        <SubscribeForm>
                            <SubscribeInput type='email'></SubscribeInput>
                            <SubscribeBtn type='submit' value='S'/>
                        </SubscribeForm>
                    </SubscribeContent>
                </SubscribeContainer>
            </SubscribeWrapper>
        </>
    )
}
