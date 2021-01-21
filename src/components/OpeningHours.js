import React from 'react'
import styled from 'styled-components';
import { Section, InnerWrapper, Column } from './core/styled'
import HeaderText from './core/HeaderText'

const Blocks = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: var(--l);
    
`
const Block = styled.div`
    background: var(--white);
    color: var(--black);
    padding: 15px;
    margin: 10px;
    min-width: 190px;
`
const Bold = styled.span`
    font-weight: 500;
`

export default function OpeningHours({ servicesRef, width }) {
    const mobile = width < 500;
    return (
    <Section background='var(--green)' fillScreenHeight={true} ref={servicesRef}>
        <InnerWrapper mobile={mobile}>
            <Column mobile={mobile}>
                <HeaderText color="var(--white)" size="40px" text="OPENING HOURS" weight="800" styles={{ marginBottom: 30 }}/>
                <Blocks>
                    <Block><Bold>Weekdays</Bold> 9:00 AM - 8:00 PM</Block>
                    <Block><Bold>Saturday</Bold> 9:00 AM - 6:00 PM</Block>
                    <Block><Bold>Weekdays</Bold> 11:00 AM - 2:00 PM</Block>   
                </Blocks>
            </Column>  
        </InnerWrapper>
    </Section>
    )
}
