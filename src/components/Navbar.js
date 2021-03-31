import React, { Component } from 'react'
import {FaBars , FaTimes,FaLinkedinIn,FaFacebookF,FaGithub} from 'react-icons/fa'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from '../logo.png'

export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            menuOpen:false
        }
    }
    handleClick = (e,clickedItem) =>{
        var allMenuItems = document.querySelectorAll('.menu-item li a')
        var allItems = [...allMenuItems]
        allItems.map(item=>{
            item.classList.remove('active')
            return true
        })
        if(clickedItem !== 'intro'){
            e.target.classList.add('active')
        }
        
        // change the hash manually
        window.history.pushState({}, "Example Title", '#'+ clickedItem);

        // close the expanded navbar after clicking on each link
        const expandContainer = document.querySelector('.expand-menu-container')
        if(expandContainer.classList.contains('showMenu')){
            expandContainer.classList.remove('showMenu')
        }
    }
    toggleExpandMenu = () =>{
        const expandContainer = document.querySelector('.expand-menu-container')
        if(expandContainer.classList.contains('showMenu')){
            expandContainer.classList.remove('showMenu')
        }else{
            expandContainer.classList.add('showMenu')
        }        
    }
    setOffsetTop = () =>{
        return 170
    }
    render() {
        return (
            <div className="navbar">
                <div className="navbar-logo">
                    <AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'intro')} href="#intro">
                    <img src={Logo} alt="logo" />
                    </AnchorLink>
                </div>
                <div className="socialmedia-container">
                    <a href="https://www.linkedin.com/in/mastaneh-fey/" target="_blank"><FaLinkedinIn /></a>
                    <a href="https://www.facebook.com/mastaneh.fe" target="_blank"><FaFacebookF /></a>
                    <a href="https://github.com/mastanehfey?tab=repositories" target="_blank"><FaGithub /></a>
                </div>
                <ul className="navbar-ul menu-item">
                    <li><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'skills')} href="#skills">Skills</AnchorLink></li>
                    <li><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'experience')} href="#experience">Experience</AnchorLink></li>
                    <li><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'education')} href="#education">Education</AnchorLink></li>
                    <li><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'portfolio')} href="#portfolio">Portfolio</AnchorLink></li>
                    <li><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'contact')} href="#contact">Contact Me</AnchorLink></li>
                </ul>
                <div className="navbar-burger-menu" onClick={()=> this.toggleExpandMenu()}>
                    <FaBars />
                </div>
                <div className="expand-menu-container">
                    <div className="navbar-burger-menu times-icon" onClick={()=> this.toggleExpandMenu()}>
                        <FaTimes />
                    </div>
                    <ul className="navbar-expand-ul menu-item">
                        <li><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'skills')} href="#skills">Skills</AnchorLink></li>
                        <li><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'experience')} href="#experience">Experience</AnchorLink></li>
                        <li><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'education')} href="#education">Education</AnchorLink></li>
                        <li><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'portfolio')} href="#portfolio">Portfolio</AnchorLink></li>
                        <li><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'contact')} href="#contact">Contact Me</AnchorLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}
