import React from 'react'
import styled from 'styled-components';

export const Wrapper = styled.div`
     font-size: ${props => props.size};
     color: ${props => props.color};
     font-weight: ${props => props.weight};
`

export default function HeaderText({ text="choose header text", size="12px", color="white", weight="600", styles={}}) {
    return (
        <Wrapper size={size} color={color} weight={weight} style={styles}>
            {text.toUpperCase()}
        </Wrapper>
    )
}
