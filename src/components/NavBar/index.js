import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import { BsLinkedin } from 'react-icons/bs'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'
import "./navbar.css";

export const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    })
    const externalLink = () =>{
        window.open('https://github.com/jackdnguyen', '_blank');
    }
    const externalLink2 = () =>{
        window.open('https://www.linkedin.com/in/jackdnguyen/', '_blank');
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <div className='logos'>
                        <NavLogo to="/" onClick={externalLink}><VscGithub /></NavLogo>
                        <NavLogo to="/" onClick={externalLink2}><BsLinkedin /></NavLogo>
                    </div>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home" smooth={true}
                                duration={700}
                                spy={true}
                                exact="true"
                                offset={-80}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about" smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Skills"smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                >Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Projects"smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Contact"smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar