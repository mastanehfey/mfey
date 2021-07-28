import React from 'react'

export default function Education() {
    return (
    <section id="education" aria-label="education section">
        <div className="container">
        <span className="bold">Education</span>
        <div className="inner-education">
            <h2>Education</h2>
            <div className="experience-wrapper">
                <div><p>
                All my life I have been driven by my strong belief that education is important. I try to learn something new every single day.
                </p>
                </div>
                <div className="experience-items-wrapper">
                    <div className="experience-item border-b">
                        <span className="flex">
                            <h3>Computer software Engineering</h3> <p>&nbsp;&nbsp;Bachelor of Science</p>
                        </span>
                        <p>Azad University - 2005</p>
                    </div>
                    <div className="experience-item">
                        <span className="flex">
                        <h3>Architecture</h3> <p>&nbsp;&nbsp;Associated Degree</p>
                        </span>
                        <p>BouAli-Sina University - 2001</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    )
}
