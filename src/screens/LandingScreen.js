import React, { useRef, useState } from 'react'
import UpperNav from '../components/UpperNav'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import OpeningHours from '../components/OpeningHours'
import Contact from '../components/Contact'
import Modal from '../components/Modal'

import { useWindowDimensions } from '../utils/useWindow'
import Fade from 'react-reveal/Fade';
import { useSelector, useDispatch } from 'react-redux'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
 
export default function LandingScreen() {
    const { width } = useWindowDimensions();
    const { fetching, success, error } = useSelector(store => store.apiReducer)
    const dispatch = useDispatch()
    const [ scrollYPostionAtTop, setScrollYPostionAtTop ] = useState(true);

    //refs for smooth scroll
    const homeRef= useRef()
    const aboutUsRef= useRef()
    const servicesRef= useRef()
    const contactRef= useRef()

    //smooth scroll function
    function scroll(ref) {
        ref.current.scrollIntoView({behavior: 'smooth'})
    }
    //scroll position
    useScrollPosition(({ prevPos, currPos }) => {
        if(currPos.y < 0) setScrollYPostionAtTop(false)
        else setScrollYPostionAtTop(true)
    })

    return (
        <>
            <UpperNav homeRef={homeRef} width={width} />
            <Navbar width={width} contactRef={contactRef} aboutUsRef={aboutUsRef} servicesRef={servicesRef} homeRef={homeRef} scroll={scroll} scrollYPostionAtTop={scrollYPostionAtTop}/>
            <Fade>
                <Header width={width} />
                <AboutUs aboutUsRef={aboutUsRef}width={width} />
                <OpeningHours servicesRef={servicesRef} width={width}/>
                <Contact width={width} contactRef={contactRef} width={width}/>
                 {/* Success Modal */}
                <Modal isOpen={success} messageText="Your contact details have been received!" scroll={scroll} homeRef={homeRef} />
            </Fade>    
        </>
    )
}
