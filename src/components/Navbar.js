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
    toggleExpandMenu = (e) =>{
        if(e.type === 'click' || (e.type === 'keydown' && e.keyCode === 13) || (e.type === 'keydown' && e.keyCode === 27)){
            const expandContainer = document.querySelector('.expand-menu-container')
            if(expandContainer.classList.contains('showMenu')){
                expandContainer.classList.remove('showMenu')
                this.setState({
                    menuOpen : false
                })
            }else{
                expandContainer.classList.add('showMenu')
                this.setState({
                    menuOpen : true
                })
            } 
        }       
    }

    setOffsetTop = () =>{
        return 170
    }
    render() {
        window.addEventListener('DOMContentLoaded',()=>{
            const burgerBtn = document.querySelector('.burger-btn')
            burgerBtn.addEventListener('click', this.toggleExpandMenu)
            burgerBtn.addEventListener('keydown', this.toggleExpandMenu)

            const closeBtn = document.querySelector('.times-btn')
            closeBtn.addEventListener('click', this.toggleExpandMenu)
            closeBtn.addEventListener('keydown', this.toggleExpandMenu)
        })
        //to close the menu with ESC btn
        window.addEventListener('keydown',(e)=>{
            if(e.keyCode === 27 && this.state.menuOpen){
                this.toggleExpandMenu(e)
            }
        })
        return (
        <header className="navbar-container">
            <nav className="navbar" aria-label="main menu">
                <div className="navbar-logo" aria-label="Home page Mastaneh Fey">
                    <AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'intro')} href="#intro">
                    <img src={Logo} alt="Home of Mastaneh Fey" />
                    </AnchorLink>
                </div>
                <ul className="navbar-ul menu-item" role="menu">
                    <li role="menuitem"><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'skills')} href="#skills">Skills</AnchorLink></li>
                    <li role="menuitem"><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'experience')} href="#experience">Experience</AnchorLink></li>
                    <li role="menuitem"><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'education')} href="#education">Education</AnchorLink></li>
                    <li role="menuitem"><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'portfolio')} href="#portfolio">Portfolio</AnchorLink></li>
                    <li role="menuitem"><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'contact')} href="#contact">Contact Me</AnchorLink></li>
                </ul>
                <div className="socialmedia-container">
                    <a href="https://www.linkedin.com/in/mastaneh-fey/" target="_blank" rel="noreferrer" aria-label="social media linkedin"><FaLinkedinIn /></a>
                    <a href="https://www.facebook.com/mastaneh.fe" target="_blank" rel="noreferrer" aria-label="social media facebook"><FaFacebookF /></a>
                    <a href="https://github.com/mastanehfey?tab=repositories" target="_blank" rel="noreferrer" aria-label="social media github"><FaGithub /></a>
                </div>
                <div className="navbar-burger-menu burger-btn" tabIndex='0' aria-label="open menu">
                    <FaBars />
                </div>
                <div className="expand-menu-container">
                    <div className="navbar-burger-menu times-icon times-btn" tabIndex='0' aria-label="close menu">
                        <FaTimes />
                    </div>
                    <ul className="navbar-expand-ul menu-item" role="menu">
                        <li role="menuitem"><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'skills')} href="#skills">Skills</AnchorLink></li>
                        <li role="menuitem"><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'experience')} href="#experience">Experience</AnchorLink></li>
                        <li role="menuitem"><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'education')} href="#education">Education</AnchorLink></li>
                        <li role="menuitem"><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'portfolio')} href="#portfolio">Portfolio</AnchorLink></li>
                        <li role="menuitem"><AnchorLink offset={()=> this.setOffsetTop()} onClick={(e)=>this.handleClick(e,'contact')} href="#contact">Contact Me</AnchorLink></li>
                    </ul>
                </div>
            </nav>
        </header>
        )
    }
}
