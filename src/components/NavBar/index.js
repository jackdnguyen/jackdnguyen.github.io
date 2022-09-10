import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'
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
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={externalLink}><VscGithub /></NavLogo>
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