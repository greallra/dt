import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumberIntl } from 'react-phone-number-input'
import React from 'react'
import styled from 'styled-components';
import { BiErrorCircle, BiCheckCircle } from 'react-icons/bi';

const Wrapper = styled.div`
    background: var(--white);
    padding: 10px;
    border-radius: .5rem;
    display: flex;
    flex-grow: 1;
`
const Label = styled.label`
    
`


export default function PhoneNumber({ value, setValue, isValid, label="" }) {
  //validation is E.164
  // - limited to a maximum of 15 digits excluding the international call prefix.
  // - The presentation of a number at the B-party device is usually prefixed with the plus sign (+) indicating that the number includes the country calling code.
  // - Country code (1 to 3 digits)
  // - Subscriber number (max 12 digits)

  return (
    <Wrapper>
    {label && <Label>{label}</Label>}
    <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
        defaultCountry="US"
        initialValueFormat="national"
        international={true}
        />
       
    {!value && <BiErrorCircle style={{visibility: 'hidden'}}/>}
    {value && !isValid && value.length > 0 && <BiErrorCircle color="var(--red)"/>}
    {isValid && <BiCheckCircle color="var(--green)"/>}
  </Wrapper>
  )
}