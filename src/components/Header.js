import React from 'react'
import styled from 'styled-components';
import { Section, InnerWrapper, PushRight } from './core/styled'
import Button from './core/Button'
import HeaderText from './core/HeaderText'

import imgURL from '../pharmacy.jpeg'
import imgURL2 from '../pharmacy2.jpg'

const backgroundStyleDesktop = {
    backgroundImage: `url(${imgURL2})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    marginTop: 95
}
const backgroundStyleMob = {
    ...backgroundStyleDesktop,
    marginTop: 45
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px; 
    text-align: ${ props => props.mobile ? "center;" : "end;"}

`
const TransparentBackground = styled.div`
    position: absolute;
    background: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const Spacer = styled.div`
    padding: 10px;
`

export default function Header({ width }) {
    const mobile = width < 500;
    const backgroundStyle = mobile ? backgroundStyleMob : backgroundStyleDesktop;

    return (
    <Section fillScreenHeight={true} style={backgroundStyle}>
        <TransparentBackground  className="hi" style={{zIndex: 2}}/>
        <InnerWrapper>
            <PushRight center={mobile} style={{zIndex: 3}}>
                <Container mobile={mobile}>
                    <HeaderText color="var(--white)" size="40px" text="LOREM IPSUM DUMMY TEXT" weight="800"/>
                    <HeaderText color="var(--white)"  size="25px" text="LOREM IPSUM IS SIMPLY DUMMY TEXT" weight="400" styles={mobile ? {} : { paddingLeft: 40 } }/>
                    <Spacer />
                    <Button text="READ MORE" backgroundColor="var(--purple)" width="200px" size="20px"  styles={ mobile ? {margin: 'auto'} : {marginLeft: 'auto'} } />
                </Container>
            </PushRight> 
        </InnerWrapper>
    </Section>
    )
}
