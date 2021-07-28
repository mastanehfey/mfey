import React, { Component } from 'react'
import {FiX} from 'react-icons/fi'

export default class SingleProject extends Component {
    constructor(props){
        super(props)
        this.state={
            projectState: this.props.item
        }
    }
    render() {
        const projectState = this.state.projectState
        const item = this.props.item
        const openProjectDetail =() =>{
            const container = document.querySelector('.project-modal')
            container.classList.remove('hidden')
        }
        const closeProjectDetail = () =>{
            const container = document.querySelector('.project-modal')
            container.classList.add('hidden')
          }

        return (
        <>
            <section className="project-modal hidden">
                <button className="btn close-btn" onClick={()=> closeProjectDetail()}>
                <FiX />
                </button>
                {projectState ?
                <div className="project-wrapper-modal container">
                    <img src={projectState.pagesimage} alt={projectState.name}/>
                    <div className="project-detail-content">
                        <h2>{projectState.name}</h2>
                        <p>{projectState.desc}</p>
                        <p><b>Technologies: </b><span className="uniqueColor">{projectState.technology}</span></p>
                    </div>
                    <div className="project-detail-btns">
                        <button className="btn cv-btn m-r"><a target="_blank" rel="noreferrer" href={projectState.link}>Visit Website</a></button>
                        <button className="btn back-btn" onClick={()=> closeProjectDetail()}>Back to CV</button>
                    </div>
                </div>
            : null}

            </section>
            <div tabIndex="0" className="single-website-wrapper" style={{backgroundImage:`url(${item.image})`}} onFocus={()=>openProjectDetail()} onClick={()=>openProjectDetail()}>
                <span className="shade">
                    <img src={item.logo} alt={item.name} className="hover-logo"/>
                </span>
            </div>
        </>
        )
    }
}
