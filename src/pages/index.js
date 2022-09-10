import React, { useState } from 'react'
import Navbar from '../components/NavBar';
import SideBar from '../components/SideBar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import Projects from '../components/Projects';
import ContactSection from '../components/ContactSection';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import toast from "../components/Toast";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Projects />
            <ContactSection />
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                draggable={false}
                pauseOnVisibilityChange
                closeOnClick
                pauseOnHover
            />
        </>
    )
}

export default Home;