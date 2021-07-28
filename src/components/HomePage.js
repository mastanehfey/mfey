import React from 'react'
import 'react-multi-carousel/lib/styles.css'
import Navbar from './Navbar'
import Intro from './Intro'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Contact from './Contact'
import Footer from './Footer'
import Portfolio from './Portfolio'
export default function HomePage() {    

    const handleNavbarPosition = () =>{
        const fromTop = window.scrollY
        const intro = document.querySelector('#intro')

        const navbar = document.querySelector('.navbar-container')
        if(fromTop>30){
            navbar.classList.add('sticky')
            navbar.style.height = '100px'
            intro.style.marginTop = '150px'
        }else{
            navbar.classList.remove('sticky')
            navbar.style.height = '150px'
            intro.style.marginTop = 0
        }
    }
    window.addEventListener('scroll',handleNavbarPosition)
    return (
    <>
        <Navbar />
        <Intro />
        <Skills />
        <Experience />
        <Education />
        <Portfolio />
        <Contact />
        <Footer />
    </>
    )
}
