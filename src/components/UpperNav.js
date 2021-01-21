import React, { useState } from 'react'
import styled from 'styled-components';
import { FaFacebook, FaPlayCircle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Section, InnerWrapper } from './core/styled'

const IconWrapper = styled.div`
    margin: 5px 4px;
    &:hover {
        cursor: pointer;
    }
`
const PushRight = styled.div`
    display: flex;
    //align-items: center;
    margin-left: auto;
`

export default function UpperNav({ homeRef, width }) {
    const [hovering, setHovering] = useState(undefined)
    const mobile = width < 500;
    const iconSize = mobile ? "14px":"20px"

    function handleMouseOver(target) {
        setHovering(target);
    }

    return (
    <Section background="var(--green)" fillScreenHeight={false} ref={homeRef}>
        <InnerWrapper>
            <PushRight center={mobile}>
                <IconWrapper onMouseOver={ () => handleMouseOver('fb')} onMouseLeave={ () => setHovering(undefined)} >
                    <FaFacebook color={hovering === 'fb' ? 'var(--black)' : 'var(--white)'} size={iconSize}/>
                </IconWrapper>
                <IconWrapper onMouseOver={ () => handleMouseOver('tw')} onMouseLeave={ () => setHovering(undefined)}>
                    <FaTwitter color={hovering === 'tw' ? 'var(--black)' : 'var(--white)'} size={iconSize}/>
                </IconWrapper>
                <IconWrapper onMouseOver={ () => handleMouseOver('yt')} onMouseLeave={ () => setHovering(undefined)}>
                    <FaPlayCircle color={hovering === 'yt' ? 'var(--black)' : 'var(--white)'} size={iconSize}/>
                </IconWrapper>
                <IconWrapper onMouseOver={ () => handleMouseOver('in')} onMouseLeave={ () => setHovering(undefined)}>
                    <FaInstagram color={hovering === 'in' ? 'var(--black)' : 'var(--white)'} size={iconSize}/>
                </IconWrapper>
            </PushRight>  
        </InnerWrapper>
    </Section>
    )
}
