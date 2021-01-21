import React from 'react'
import styled from 'styled-components';

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }
  

export const Wrapper = styled.button`
    text-align: center;
    width: ${props => props.width};
    font-size: ${props => props.size};
    background: ${props => props.backgroundColor};
    color: ${props => props.color};
    padding: 10px;
    font-weight: 600;
`

export default function Button({ text="Choose button text", size="12px", backgroundColor="purple", uppercase = true, color="var(--white)", width="auto", styles={}, handleClick }) {
    return (
        <Wrapper size={size} backgroundColor={backgroundColor} color={color} width={width} style={styles} onClick={handleClick}>
            {uppercase ? text.toUpperCase() : camelize(text)}
        </Wrapper>
    )
}
