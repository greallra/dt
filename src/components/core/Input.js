import React from 'react'
import styled from 'styled-components';
import { BiErrorCircle, BiCheckCircle } from 'react-icons/bi';

const Wrapper = styled.div`
    background: var(--white);
    padding: 10px;
    border-radius: .5rem;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
`
const Label = styled.label`
    
`
const TextInput = styled.input`
    display: block;
    width: 100%;
    // margin: 5px;
    outline: none;
    border: none;
    
`


export default function Input({placeholder="", value, setValue, label="", isValid}) {
    return (
        <Wrapper>
            {label && <Label>{label}</Label>}
            <TextInput value={value} onChange={ (e) => setValue(e.target.value)} placeholder={placeholder}/>
            {value.length === 0 && <BiErrorCircle style={{visibility: 'hidden'}}/>}
            {!isValid && value.length > 0 && <BiErrorCircle color="var(--red)"/>}
            {isValid && <BiCheckCircle color="var(--green)"/>}
        </Wrapper>
    )
}
