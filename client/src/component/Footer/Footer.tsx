import './Footer.css'
import { FaFacebook, FaLinkedin  } from "react-icons/fa";
import { useState } from 'react';
import { FiTool, FiChevronsRight  } from "react-icons/fi";

interface Footer{
    links: FooterLinks
    services: FooterServices
    contact: FooterContact
    about: FooterAbout
};

interface FooterLinks{
    label: string
    links: string[]
};

interface FooterServices{
    label: string;
    services: string[]
};

interface FooterContact{
    label: string;
    email: string
    follow: {
        label: string,
        links: { link: string; icon: JSX.Element}[]
    }
};

interface FooterAbout{
    label: string;
    description: string
};

const Footer = () =>{

    const [footer, setFooter] = useState<Footer>({
            links:{
                label: "USEFUL LINKS",
                links: ["Home", "Products", "Clients", "Careers", "Contact", "About"]
            },
            services: {
                label: "OUR SERVICES",
                services: ["Software Development", "Hardware Distributor", "Service Provider"]
            },
            contact: {
                label: "EMAIL US",
                email: "info@coredev.ph",
                follow: {
                    label: "FOLLOW US",
                    links: [
                        {icon: <FaFacebook color='#ff6c00'/>, link: ""},
                        {icon: <FaLinkedin color='#ff6c00' />, link: ""}
                    ],        
                }
            },
            about: {
                label: "About CoreDev",
                description: "We aim to provide a-one-stop-shop to our valued clients, from Hardware, Software and Service provider! Just name it, and you'll have it!"
            }
        });

    return(
        <>
            <div className='footer-wrapper'>
                <div className='links-wrapper'>
                    <h2>{footer.links.label}</h2>
                    <ul className="custom-list">
                        {footer.links.links.map((item, index) => (
                            <li key={index}>
                                <FiChevronsRight /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className='footer-services-wrapper'>
                    <h2>{footer.services.label}</h2>
                    <ul className='custom-list'>
                        {footer.services.services.map((item, index) => <li key={index}>  <FiChevronsRight /> {item}</li>)}
                    </ul> 
                </div>

                <div className='contact-wrapper'>
                    <h2>{footer.contact.label}</h2>
                    <p>{footer.contact.email}</p>
                    <h3>{footer.contact.follow.label}</h3>
                    <div className='links-wrapper'>
                        {footer.contact.follow.links.map((item, index) => <a key={index} href={item.link}>{item.icon}</a>)}
                    </div>
                </div>
                
                <div className='about-wrapper'>
                    <h2>{footer.about.label}</h2>
                    <p>{footer.about.description}</p>
                </div>
            </div>
        
        </>
    )
}

export default Footer