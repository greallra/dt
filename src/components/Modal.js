import React from 'react'
import Modal from 'react-modal';
import styled from 'styled-components'
import Button from './core/Button'

import { reset } from '../redux/actions/apiActions'
import { useSelector, useDispatch } from 'react-redux'


const Wrapper = styled.div`
    background: 'red'
`
const H1 = styled.div`
    color: var(--success-green);
    font-size: 16px;
    font-weight: 900;
    padding: 20px;
    text-align: center;
`

const customStyles = {
    content : {
      backgroundColor: 'white',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 1
      },
  };
export default function ModalComponent({isOpen, setIsOpen, messageText, scroll, homeRef}) {
    const { fetching, success, error } = useSelector(store => store.apiReducer)
    const dispatch = useDispatch()

    function handleConfirm() {
        dispatch(reset())
        scroll(homeRef)
    }

    return (
        <Wrapper>
            <Modal
              isOpen={isOpen}
            //   onAfterOpen={afterOpenModal}
            //   onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
                <H1>{messageText}</H1>
                <Button 
                  text="OK" 
                  color="var(--white)"
                  uppercase={true}
                  width="100%" 
                  backgroundColor="var(--orange)" 
                  size="12px" 
                  handleClick={handleConfirm} 
                  />
            </Modal> 
        </Wrapper>
    )
}
