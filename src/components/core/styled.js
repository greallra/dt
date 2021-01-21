import React from 'react';
import styled from 'styled-components';

export const Section = styled.div`
    height: ${ props => props.fillScreenHeight ? '100vh' : 'auto'};
    background: ${ props => props.background ? props.background : 'var(--white)'};
`
export const InnerWrapper = styled.div`
    display: flex;
    max-width: 900px;
    margin: auto;
    padding: ${ props => props.mobile ? "0px;" : "10px 20px;"}
    justify-content: center;
    align-items: center;
    height: 100%;
`
export const PushRight = styled.div`
    display: flex;
    ${ props => props.center ? 'margin-left: 0' : 'margin-left: auto'};
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Button = styled.button`
    display: flex;
    width: 100%;
`

export const Row = styled.div`
    display: flex;
    ${ props => props.mobile ? 'padding: 0px;' : 'padding: 30px;'}
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`
export const Column = styled.div`
    display: flex;
    padding: ${ props => props.mobile ? "0px;" : "30px;"}
    flex-direction: column;
    margin: auto;
    text-align: center;
    // max-width: 300px;
    justify-content: center;
    align-items: center;
`
