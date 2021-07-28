import React from 'react'

export default function Skills() {
    return (
    <section id="skills" aria-label="skills section">
        <div className="container">
        <span className="bold">Skills</span>
        <div className="inner-skills">
            <h2>Here Are Some of My Skills</h2>
            <div className="skills-wrapper">
                <span className="skill-item">
                    <h4 className="item-header">FRONT END DEVELOPMENT</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>SASS</li>
                        <li>Responsive Design</li>
                    </ul>
                </span>
                <span className="skill-item">
                    <h4 className="item-header">frameworks/ libraries</h4>
                    <ul>
                        <li>React Js</li>
                        <li>Bootstrap</li>
                        <li>WordPress</li>
                    </ul>
                </span>
                <span className="skill-item">
                    <h4 className="item-header">UI\UX Design</h4>
                    <ul>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                    </ul>
                </span>
                <span className="skill-item">
                    <h4 className="item-header">Other</h4>
                    <ul>
                        <li>Git / GitHub</li>
                        <li>NPM</li>
                        <li>JSON / REST API</li>
                        <li>Knowledge of SEO</li>
                        <li>Agile methodogy / Scrum</li>
                    </ul>
                </span>
            </div>
            <div className="skills-top-text">
            <p>I am inspired by creating great work with people who are as passionate as I am about building something remarkable.</p>
            </div>
            <div className="skills-bottom-text skill-item-personal">
                <ul>
                    <li>Collaborate with customers to determine needs and work through design options</li>
                    <li>Design and code webpages using technologies and frameworks such as HTML, CSS, WordPress, JavaScript, and React</li>
                    <li>Manage multiple projects effectively at once and meet deadlines</li>
                    <li>Create successful websites that meet requirements for objectives such as load speed and design</li>
                    <li>Design logos, business cards, brochures, and other printed materials</li>                       
                </ul>
            </div>
        </div>
        </div>
    </section>
    )
}
