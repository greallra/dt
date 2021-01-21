import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import BarLoader from "react-spinners/BarLoader";
import { Section, InnerWrapper } from './core/styled'
import Button from './core/Button'
import HeaderText from './core/HeaderText'
import Flip from 'react-reveal/Flip';
import Input from './core/Input'
import { BiHelpCircle } from 'react-icons/bi';
import { isEmail, isLength, isMobilePhone } from 'validator';
import PhoneNumber from './core/PhoneNumber'

import { sendContact } from '../redux/actions/apiActions'
import { useSelector, useDispatch } from 'react-redux'


const Row = styled.div`
    display: flex;
    ${ props => props.mobile ? 'padding: 0px;' : 'padding: 30px;'}
    width: 100%;
    justify-content:space-evenly;
    flex-wrap: wrap;
  
`

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: center;
    flex-grow: 1;
    min-width: 310px;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex-grow: 1;
    min-width: 310px;
    // ${ props => props.mobile && 'justify-content:center;' }
    ${ props => props.mobile && 'align-items: center;' }
`
const Form = styled.form`
    display: flex;
    // padding: 30px;
    flex-direction: column;
    width: 100%;
  
`
const BusinessInfo = styled.form`

`
const InputRow = styled.div`
    display: flex;
    align-items: center;
`
const Block = styled.div`

`
const Spacer = styled.div`
    padding: ${ props => props.size};
`
const Title = styled.div`
    color: var(--white);
    font-weight: 500;
`
const Value = styled.div`
    color: var(--white);
`
const Helper = styled.div`
    max-width: 200px;
    overflow: hidden;
    background: var(--lightorange);
    padding: 4px 8px;
    border-radius: .5rem;
    margin-left: 5px;
    color: var(--white);
    font-size: var(--small-text);
    text-align: start;
    font-weight: 500;
    box-sizing: border-box;
}
`
const ErrorMessage = styled.div`
    max-width: 200px;
    overflow: hidden;
    background: var(--error-red-light);
    padding: 5px;
    margin: 5px 0;
    border-radius: .5rem;
    color: var(--error-red);
    font-size: var(--small-text);
    text-align: start;
    font-weight: 500;
    box-sizing: border-box;
}

`
const Pipe = styled.div`
    // height: 100%;
    border-right: 1px solid var(--dark-grey);
    // padding-right: 20px;
    margin-left: 5rem;
    margin-right: 5rem;
`


export default function Contact({ width, contactRef }) {
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ nameValid, setNameValid ] = useState(false)
    const [ phoneValid, setPhoneValid ] = useState(false)
    const [ emailValid, setEmailValid ] = useState(false)
    const [ validationError, setValidationError ] = useState('')
    const [ nameHelper, toggleNameHelper ] = useState(false)
    const [ phoneHelper, togglerPhoneHelper ] = useState(false)
    const [ emailHelper, togglerEmailHelper ] = useState(false)

    const mobile = width < 920;

    const { apiCallActive, success, error } = useSelector(store => store.apiReducer)
    const dispatch = useDispatch()
   

    function handleSubmit(e) {
        e.preventDefault();
        if(!nameValid || !phoneValid || !phoneValid) {
            setValidationError('The form has errors, click the help box for details.')
        }
        else {
            setValidationError('')
            dispatch(sendContact({
                name,
                phone,
                email
            }))
        }
    }
    // Real time validation using validator
    useEffect(() => {
        //name at least 3 characters
        if(isLength(name, { min: 3 })) setNameValid(true)
        else setNameValid(false)
    }, [name])
     useEffect(() => {
         //valid MOBILE number
        if(phone && phone.length > 0 && isMobilePhone(phone)) setPhoneValid(true)
        else setPhoneValid(false)
    }, [phone])
    useEffect(() => {
        //valid email
        if(email.length > 0 && isEmail(email)) setEmailValid(true)
        else setEmailValid(false)
    }, [email])
    //clear form on successfull message sent

    useEffect(() => {
        if(success) {
            setName('')
            setPhone('')
            setEmail('')
        }
    }, [apiCallActive, success, error])

    return (
    <Section background='var(--lightblack)' fillScreenHeight={true} ref={contactRef}>
        <InnerWrapper mobile={mobile}>
            <Row mobile={mobile}>
                <FormWrapper>
                    <HeaderText color="var(--white)" size="20px" text="CONTACT US" weight="500"/>
                    <Spacer size="10px"/>
                    <Form onSubmit={handleSubmit}>  
                        <InputRow>
                            <Input placeholder="name" type="text" value={name} setValue={setName} isValid={nameValid}/>     
                        </InputRow>
                        <InputRow style={{margin: '5px 0'}}>
                            <BiHelpCircle color="var(--orange)" onClick={ () => toggleNameHelper(!nameHelper)}/>{nameHelper ? <Flip top><Helper>Minimum 3 Characters</Helper></Flip> : <Helper style={{visibility: 'hidden'}}>dummy</Helper>}
                        </InputRow>
                        <InputRow> 
                            <PhoneNumber value={phone} setValue={setPhone} isValid={phoneValid}/>    
                        </InputRow>
                        <InputRow style={{margin: '5px 0'}}>
                            <BiHelpCircle color="var(--orange)" onClick={ () => togglerPhoneHelper(!phoneHelper)}/>{phoneHelper ? <Flip top><Helper>Must be a valid mobile number</Helper></Flip> : <Helper style={{visibility: 'hidden'}}>dummy</Helper>}
                        </InputRow> 
                        <InputRow>
                            <Input placeholder="Email" type="text" value={email} setValue={setEmail} isValid={emailValid}/>     
                        </InputRow>  
                        <InputRow style={{marginTop: '5px'}}>
                            <BiHelpCircle color="var(--orange)" onClick={ () => togglerEmailHelper(!emailHelper)}/>{emailHelper ? <Flip top><Helper>Not a valid email</Helper></Flip> : <Helper style={{visibility: 'hidden'}}>dummy</Helper>}
                        </InputRow>
                        {!validationError &&  !error && !apiCallActive && <ErrorMessage style={{visibility: 'hidden'}} className="oye">dummy dummy dummy dummy dummy dummy dd</ErrorMessage> }
                        {validationError && <ErrorMessage>{validationError}</ErrorMessage> }
                        {/* Api error */}
                        {error && <ErrorMessage>{error}</ErrorMessage> }
                        {/* Loading */}
                        <BarLoader color={'var(--lightorange)'} loading={apiCallActive} size={150}   css={{width: '100%', margin: '15px 0'}} />
                        <Button text="SUBMIT" backgroundColor="var(--orange)" size="10px" width="auto" type="submit" />
                    </Form>
                </FormWrapper>
                {!mobile && <Pipe></Pipe>}
                <Info mobile={mobile}>
                    <HeaderText color="var(--white)" size="20px" text="CONTACT INFORMATION" weight="500" styles={{textAlign: 'center'}}/>
                    <Spacer size="10px"/>
                     <BusinessInfo >
                         <Block>
                             <Title>Email: </Title>
                             <Value>test@gmail.com</Value>
                         </Block>
                         <Spacer size="5px"/>
                         <Block>
                             <Title>Phone</Title>
                             <Value>(087) 12345678</Value>
                         </Block>
                         <Spacer size="5px"/>
                         <Block>
                             <Title>Address</Title>
                             <Value>test, test street, country test</Value>
                         </Block>
                     </BusinessInfo>
                </Info>
            </Row>  
        </InnerWrapper>
    </Section>
    )
}
