import React, {useState} from 'react'
import Navbar from '../components/NavBar';
import SideBar from '../components/SideBar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
        </>
    )
}

export default Home;