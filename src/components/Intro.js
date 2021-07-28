import React from 'react'
import intro from '../images/intro-image.jpg'

export default function Intro() {
    return (
    <section id="intro" aria-label="intro">
        <div className="container">
            <span className="bold">About</span>
            <div className="inner-intro">
            <div className="intro-text">
                <h2>I am Mastaneh Fey</h2>
                <p>
                Proficient Web Developer helping customers to design, create and publish their online presence.
                Coordinating with all parties engaged in delivering the project to speed up delivery.
                Highly organized, proactive, problem-solver, self-motivated with high communication skills.<br/>
                With a team-oriented mentality, I fit into the team quickly to contribute to the organization’s goals and carry out the project to very high standards with my hardworking and smart working nature. <br/>
                Looking to take the next step in the career to take on new opportunities and advance my skill-set.
                </p>
                <div className="contact-intro">
                    <p className="text-dark">Phone:</p><a href="tel: 778-882-3767"><p>778 882 3767</p></a>
                    <p className="text-dark">Email:</p><a href="mailto: mastaneh.f@gmail.com"><p>mastaneh.f@gmail.com</p></a>
                </div>
                {/* <button className="cv-btn btn"><a href={CV} download>Download CV</a></button> */}
            </div>
            <img src={intro} alt="Mastaneh Fey working on the computer" className="intro-image"/>
            </div>
        </div>
    </section>
    )
}
