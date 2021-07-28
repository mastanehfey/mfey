import React from 'react'

export default function Experience() {
    return (
    <section id="experience" aria-label="experience section">
        <div className="container">
        <span className="bold">Experience</span>
        <div className="inner-experience">
            <h2>Proffesional Experience</h2>
            <div className="experience-wrapper">
                <div><p>
                Innovative Front-End Developer with 10+ years’ experience building and maintaining responsive websites. <br/>Seeking a front-end developer position with a company which will require me to utilize and expand my skills, abilities and experience.
                </p>
                </div>
                <div className="experience-items-wrapper">
                    <div className="experience-item border-b">
                        <span className="flex">
                            <h3>Frontend Web Developer</h3> <p>&nbsp;&nbsp;AXA Systems</p>
                        </span>
                        <p>2017 - Present</p>
                        <ul className="ul-customized">
                            <li>Design, develop, and deliver interactive websites to grow sales for small to medium-sized businesses</li>
                            <li>Design and code webpages using technologies and frameworks such as HTML, CSS, WordPress, JavaScript, and React</li>
                            <li>Manage multiple projects effectively at once and meet deadlines</li>
                            <li>Create successful websites that meet requirements for objectives such as load speed and design</li>
                            <li>Design logos, business cards, brochures, and other printed materials</li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <span className="flex">
                        <h3>Front-End Developer</h3> <p>&nbsp;&nbsp;Tajan Systems</p>
                        </span>
                        <p>2009 - 2016</p>
                        <ul className="ul-customized">
                            <li>Created landing pages and web applications using HTML, CSS, and JavaScript</li>
                            <li>Created, edited, and gathered website content such as text, video, audio, and media</li>
                            <li>Collaborated with design and backend teammates to ensure my strategies are in alignment with the rest of the team</li>
                            <li>Built and applied reusable code to reduce development hours</li>
                            <li>Worked with customers to determine needs and work through design options</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    )
}
