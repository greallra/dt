import React from 'react'
import styled from 'styled-components';
import { Section, InnerWrapper } from './core/styled'
import Button from './core/Button'
import HeaderText from './core/HeaderText'

const Column = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    margin: auto;
    text-align: center;
    max-width: 500px;
    justify-content:center;
    align-items: center;
`
const P = styled.p`
    
`

export default function AboutUs({ aboutUsRef, width }) {
    const mobile = width < 500;
    return (
    <Section fillScreenHeight={true} background="var(--white)" ref={aboutUsRef}>
        <InnerWrapper mobile={mobile} >
            <Column>
                <HeaderText color="var(--green)" size="30px" text="ABOUT" weight="800"/>
                <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius perspiciatis cupiditate sit consequatur provident vitae quasi corrupti, deleniti laudantium totam non nobis inventore reprehenderit fugit sapiente necessitatibus eveniet impedit nam?</P>
                <Button text="READ MORE" backgroundColor="var(--green)" size="20px"></Button>
            </Column>  
        </InnerWrapper>
    </Section>
    )
}
