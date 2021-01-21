import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../logo.png'
import { FaPhoneAlt } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Section, InnerWrapper, PushRight } from './core/styled'
import Fade from 'react-reveal/Fade';

const Row = styled.div`
    display: flex;
    width: 100%;
`
const Left = styled.div`
    display: flex;
   
`
const LogoWrapper = styled.div`

   
`
const Logo = styled.img`
  max-height: 80px;
 
`
const NavItems = styled.div`  
  display: flex;
  align-items: center;

`
const NavItem = styled.div`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  
`
const NumberWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  font-size: var(--xl);
  font-weight: 500;
  color: var(--red);
`
const Number = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`
const MobWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`
const PhoneIcon = styled(FaPhoneAlt)`
   background: var(--red);
   border-radius: 50%; 
   padding: 2px;
 
`
const BurgerIcon = styled(GiHamburgerMenu)`
   border: 1px solid var(--lightgrey);
   border-radius: 15%; 
   padding: 6px;
   margin: 6px;
   &:hover {
    background: var(--lightest-grey);
    cursor: pointer;
  }
`
const MobNavItems = styled.div`
  display: ${ props => props.mobMenuOpen ? 'block':'none'};
  z-index: 1;
  position: absolute;
  top: 45px;
  background: var(--white);
  border: 1px solid var(--lightest-grey);
  opacity: ${ props => props.mobMenuOpen ? 'block':'none'};
`
const MobNavItem = styled.div`
  border-bottom: 1px solid var(--lightest-grey);
  padding: 12px;
  min-width: 120px;
  &:hover {
    text-decoration: underline;
    background: var(--superlight-grey);
    cursor: pointer;
  }
`
const PipeSeparator = styled.div`  
 border-right: 1px solid var(--lightgrey);
 padding-left: 8px;
 margin-right: 8px;
 height: 10px;
`
const Prefix = styled.span`  
  height: 24px;
  marginRight: 2;
`
const fixedNavStyleTop = {
    position: 'fixed',
    zIndex: 1,
    top: '45px',
    width: '100%',
    transition: 'top 0.3s linear',
    boxShadow: '0px 1px 1px white'
}
const fixedNavStyleMoving = {
    position: 'fixed',
    zIndex: 1,
    top: '0',
    width: '100%',
    transition: 'top 0.3s linear',
    boxShadow: '0px 1px 1px white'
}


function NavBar({width, contactRef, aboutUsRef, servicesRef, homeRef, scroll, scrollYPostionAtTop }) {
  const [ mobMenuOpen, setMobMenuOpen ] = useState(false)
  const mobile = width < 500;
  const fixedNavStyle = scrollYPostionAtTop ? fixedNavStyleTop : fixedNavStyleMoving;

  return (
    <Section style={fixedNavStyle}>  
        {mobile ? 
        <MobWrapper>
       {/* Mobile  Nav*/}
          <div><BurgerIcon onClick={ () => setMobMenuOpen(!mobMenuOpen)}/></div>
          <MobNavItems mobMenuOpen={mobMenuOpen}>         
            <Fade>
              <MobNavItem onClick={ () => scroll(homeRef) }>HOME </MobNavItem> 
              <MobNavItem onClick={ () => scroll(aboutUsRef) }>ABOUT</MobNavItem>
              <MobNavItem onClick={ () => scroll(servicesRef) }>SERVICES</MobNavItem>
              {/* <MobNavItem>GALLERY</MobNavItem> */}
              <MobNavItem onClick={ () => scroll(contactRef) }>CONTACT</MobNavItem>
            </Fade>   
          </MobNavItems>   
        </MobWrapper>
        :   
        <InnerWrapper>
        {/* Desktop Nav*/}
          <Row>
            <Left>
              <LogoWrapper><Logo src={logo} /></LogoWrapper>
            </Left>    
            <PushRight>
                <NumberWrapper><PhoneIcon color="var(--white)" size="10px"/><Number><Prefix>+</Prefix> <span>353 12 345 6788</span> </Number></NumberWrapper>
                <NavItems>
                  <NavItem onClick={ () => scroll(homeRef) }>HOME </NavItem> <PipeSeparator />
                  <NavItem onClick={ () => scroll(aboutUsRef) }>ABOUT</NavItem><PipeSeparator />
                  <NavItem onClick={ () => scroll(servicesRef) }>SERVICES</NavItem><PipeSeparator />
                  {/* <NavItem>GALLERY</NavItem><PipeSeparator /> */}
                  <NavItem onClick={ () => scroll(contactRef) }>CONTACT</NavItem>
                </NavItems>    
            </PushRight>
          </Row>
        </InnerWrapper>   
        }
    </Section>
  );
}

export default NavBar;




        