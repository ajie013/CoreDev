import React, { lazy, useEffect, useState } from "react"
import './MainLayout.css'
import { Outlet } from "react-router-dom"
import Navigation from "../component/Navigation"
import { easeInOut, motion, useScroll } from 'framer-motion'
import Footer from "../component/Footer/Footer"
import { FaArrowAltCircleUp } from "react-icons/fa";

const MainLayout: React.FC = () =>{

    const {scrollYProgress} = useScroll();
    const [yAxis, setYAxis] = useState(0);
    
    useEffect(() =>{
        const handleScroll = () => {
            setYAxis(window.scrollY)
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);

    const backToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    return(
        <>
            <div className="main-container">
                <motion.div className="progress-bar" style={{
                    scaleX: scrollYProgress,
                }}></motion.div>

                <Navigation/>
                <Outlet/>
                <Footer/>
                {yAxis > 150 && <FaArrowAltCircleUp className="backTop" onClick={backToTop}/>}
               
            </div>
        </>
    )
}

export default MainLayout