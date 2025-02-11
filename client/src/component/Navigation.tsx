import './styles/Navigation.css';
import { NavLink } from 'react-router-dom';
import { RxCaretUp, RxCaretDown } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from 'react';
import coreDevIcon from '../assets/coredev.png';

const Navigation: React.FC = () => {
    // const [isMenuVisible, setIsMenuVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 868);
    const [showLinks, setShowLinks] = useState(false)
 
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 868);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openMenu = () =>{
        setShowLinks(!showLinks)
    }

    return (
        <>

            <div className="navigation-container">
                <div className='brand'>
                    <img src={coreDevIcon} alt="" />
                    <span>CoreDev <br /> Solutions Inc.</span>
                </div>
                {!isMobile ?
                    <>
                      <Links/>
                    </> :
                    <>
                        <GiHamburgerMenu onClick={openMenu} className='menu-bar' color='white' fontSize='1.5rem' />

                        {showLinks && <div className='mobile-links'>
                           
                           <Links/>
                       </div>}
                      
                    </>
                }
            </div>
        </>
    );
}

const Links = () =>{
    return(
        <>
          <ul>
                <li className='navigation-link'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className='navigation-link sub'>
                    Product <RxCaretDown className='caret' />
                    <div className="dropdown">
                        <NavLink to="/Products/Software">Software Products</NavLink>
                        <NavLink to="/product/hardware">Hardware Products</NavLink>
                    </div>
                </li>
                <li className='navigation-link sub'>
                    <NavLink to="/clients">Clients</NavLink>
                </li>
                <li className='navigation-link'>
                    <NavLink to="/careers">Careers</NavLink>
                </li>
                <li className='navigation-link sub'>
                    About <RxCaretDown  className='caret' />
                    <div className="dropdown">
                        <NavLink to="/about/who-we-are">Who we are</NavLink>
                        <NavLink to="/about/our-team">Our Team</NavLink>
                        <NavLink to="/about/government-regulation">Government<br/>Regulation</NavLink>
                        <NavLink to="/about/milestone">Milestone</NavLink>
                    </div>
                </li>
                <li className='navigation-link'>
                    <NavLink to="/contact">Contact</NavLink>
                </li>     
          </ul>
        </>
    )
}

export default Navigation;