import React, { Component } from 'react'
import Carousel from 'react-multi-carousel'
import projectList from '../CV/projects'
import logoList from '../CV/logoDesign'
import {FiX} from 'react-icons/fi'


export default class Portfolio extends Component {
    constructor(){
        super()
        this.state ={
            selectedProject:'',
            modalOpen:false
        }
    }
    render() {
        //get all logos from logoDesign.js and display
        const logos = logoList.map((item,index)=>{
        return(
            <div  key={index}>
                <img src={item} alt="Logo Design"/>
            </div>
        )
        })
        //customized breakpoints for carousel - logos
        const responsive = {
            superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
            },
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
            }
        }
        //display the list of projects from projects.js
        var projects = projectList.map((item,index)=>{
        return (
            <div tabIndex="0" key={index} id={item.id} className="single-website-wrapper" style={{backgroundImage:`url(${item.image})`}} onFocus={(e)=>updateState(e,item)}>
                <span className="shade">
                        <img src={item.logo} alt={item.name} className="hover-logo"/>
                </span>
            </div>        
            )
        })
        //open modal
        const openModal = (modalId,shouldFocus) =>{
            const modal = document.querySelector(modalId)
            modal.classList.remove('hidden')
            // add all the elements inside modal which you want to make focusable - trap focus
            const  focusableElements =
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
            // const modal = document.querySelector('#exampleModal'); // select the modal by it's id

            const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
            const focusableContent = modal.querySelectorAll(focusableElements);
            const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal
            document.addEventListener('keydown', function(e) {
            let isTabPressed = e.key === 'Tab' || e.keyCode === 9;
                
            if (!isTabPressed) {
                return;
            }

            if (e.shiftKey) { // if shift key pressed for shift + tab combination
                if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus(); // add focus for the last focusable element
                e.preventDefault();
                }
            } else { // if tab key is pressed
                if (document.activeElement === lastFocusableElement) { 
                // if focused has reached to last focusable element then focus first focusable element after pressing tab
                firstFocusableElement.focus(); // add focus for the first focusable element
                e.preventDefault()
                }
            }
            })
            if(shouldFocus){
                firstFocusableElement.focus()
            }else if(!shouldFocus){
                setTimeout(() => {
                    firstFocusableElement.focus()
                }, 0);
            }
        }
        //close all modals
        const closeModal = (modalId) =>{
            let modal = document.querySelectorAll(modalId)
            modal = [...modal]
            if(modal){
                modal.forEach(item=>{
                    item.classList.add('hidden')
                })
            }else{
                return
            }
            this.setState({
                modalOpen:false
            })
            //get focus back to the same item before opening
            

            // console.log(focusedThumbnail);
            // focusedThumbnail.focus()
        }
        //keep the focused project thumbnail in teh state
        //eventlistener on thumbnails on click and enter press
        const updateState =(e,item) =>{
            this.setState({
                selectedProject:item
            },
            e.target.addEventListener('click',()=>openModal('#project-modal',true)),
            e.target.addEventListener('keydown',(e)=>{
                if(e.keyCode === 13){
                openModal('#project-modal',false)
                }
            })
            )
        }

        const selectedProject = this.state.selectedProject
        //close modals with ESC button
        window.addEventListener('keydown',(e)=>{
            if(e.keyCode === 27){
                closeModal('.modal')
            }else{
                return
            }
        })
        return (
            <>
            <section id="project-modal" className="modal project-modal hidden" role="dialog" aria-modal="true" aria-hidden="true">                
                    <button className="btn close-btn" onClick={()=> closeModal('#project-modal')} tabIndex="0">
                    <FiX />
                    </button>
                    <div className="project-wrapper-modal container">
                        <img src={selectedProject.pagesimage} alt={selectedProject.name}/>
                        <div className="project-detail-content">
                            <h2>{selectedProject.name}</h2>
                            <p>{selectedProject.desc}</p>
                            <p><b>Technologies: </b><span className="uniqueColor">{selectedProject.technology}</span></p>
                        </div>
                        <div className="project-detail-btns">
                            <button className="btn cv-btn m-r" onClick={()=> window.open(selectedProject.link , '_blank')}>Visit Website</button>
                            <button className="btn back-btn" onClick={()=> closeModal('#project-modal')}>Back to CV</button>
                        </div>
                    </div>
            </section>

            <div id="logo-modal" className="modal logo-modal hidden" role="dialog" aria-modal="true" aria-hidden="true">            
                <button className="btn close-btn" onClick={()=> closeModal('#logo-modal')} tabIndex="0">
                <FiX />
                </button>
                <div className="logo-wrapper-modal container">
                    {logos}
                </div>
            </div>

            <section id="portfolio" aria-label="portfolio section">
                <div className="container">
                <span className="bold">Works</span>
                <div className="inner-portfolio">
                    <h2>Website Design</h2>
                    <div className="portfolio-websites-wrapper">
                        {projects}
                    </div>
                    <h2>Logo Design</h2>
                    <div className="portfolio-logo-wrapper">
                    <Carousel responsive={responsive}>
                        {logos}
                    </Carousel>
                    <div className="logo-btn-wrapper">
                        <button className="cv-btn btn" onClick={()=> openModal('#logo-modal',true)}>View all logos</button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </>
        )
    }
}
