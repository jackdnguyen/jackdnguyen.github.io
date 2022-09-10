import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarMenu, SideBarLink, SideBarWrapper} from './SideBarElements'

const SideBar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to="home" onClick={toggle}>Home</SideBarLink>
                <SideBarLink to="about" onClick={toggle}>About</SideBarLink>
                <SideBarLink to="Skills" onClick={toggle}>Skills</SideBarLink>
                <SideBarLink to="Projects" onClick={toggle}>Projects</SideBarLink>
                <SideBarLink to="Contact" onClick={toggle}>Contact</SideBarLink>
            </SideBarMenu>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar