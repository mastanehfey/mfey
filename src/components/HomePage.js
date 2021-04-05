import React ,{useState} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import {FaLinkedinIn,FaFacebookF,FaGithub} from 'react-icons/fa'
import Navbar from './Navbar'
import intro from '../images/intro-image.jpg'
import projectList from '../CV/projects'
import logoList from '../CV/logoDesign'
import {FiX} from 'react-icons/fi'

export default function HomePage() {
    const [projectState, setProject] = useState()
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
    const openProjectDetail =(item) =>{
        setProject(item)
        const container = document.querySelector('.project-modal')
        container.classList.remove('hidden')
    }
    const closeProjectDetail = () =>{
        const container = document.querySelector('.project-modal')
        container.classList.add('hidden')
      }
    window.addEventListener('scroll',handleNavbarPosition)
    var projects = projectList.map((item,index)=>{
        return (
            <div className="single-website-wrapper" key={index} style={{backgroundImage:`url(${item.image})`}} onClick={()=> openProjectDetail(item)}>
                <span className="shade">
                    <img src={item.logo} alt={item.vame} className="hover-logo"/>
                </span>
            </div>
        )
    })
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
      };
      var logos = logoList.map((item,index)=>{
          return(
              <div  key={index}>
                  <img src={item} alt="Logo Design"/>
              </div>
          )
      })
      const openAllLogos =() =>{
          const container = document.querySelector('.logo-modal')
          container.classList.remove('hidden')
      }
      const closeLogoModal = () =>{
        const container = document.querySelector('.logo-modal')
        container.classList.add('hidden')
      }
    return (
        <>
        <div className="project-modal hidden">
            <button className="btn close-btn" onClick={()=> closeProjectDetail()}>
            <FiX />
            </button>
            {projectState ?
            <div className="project-wrapper-modal container">
                <img src={projectState.pagesimage} />
                <div className="project-detail-content">
                    <h2>{projectState.name}</h2>
                    <p>{projectState.desc}</p>
                    <p><b>Technologies: </b><span className="uniqueColor">{projectState.technology}</span></p>
                </div>
                <div className="project-detail-btns">
                    <button className="btn cv-btn m-r"><a target="_blank" href={projectState.link}>Visit Website</a></button>
                    <button className="btn back-btn" onClick={()=> closeProjectDetail()}>Back to CV</button>
                </div>
            </div>
         : null}

        </div>
        <div className="logo-modal hidden">
            <button className="btn close-btn" onClick={()=> closeLogoModal()}>
            <FiX />
            </button>
            <div className="logo-wrapper-modal container">
                {logos}
            </div>
        </div>
        <div>
            <div className="navbar-container">
                <Navbar />
            </div>
            <section id="intro">
                <div className="container">
                    <span className="bold">About</span>
                    <div className="inner-intro">
                    <div className="intro-text">
                        <h2>I am Mastaneh Fey</h2>
                        <p>
                        Proficient Front-End Developer helping customers design, create and publish their online presence.
                        Coordinating with all parties engaged in delivering the project.<br/>
                        Highly organized, proactive, problem-solver with high communication skills.<br/>
                        With a team-oriented mentality, I fit into the team quickly to contribute to the organization’s goals
                        and carry out the job to very high standards with my hardworking nature.<br/>
                        Looking to take the next step in the career to take on new opportunities and advance my skill-set.
                        </p>
                        <div className="contact-intro">
                            <p className="text-dark">Phone:</p><a href="tel: 778-882-3767"><p>778 882 3767</p></a>
                            <p className="text-dark">Email:</p><a href="mailto: mastaneh.f@gmail.com"><p>mastaneh.f@gmail.com</p></a>
                        </div>
                        {/* <button className="cv-btn btn"><a href={CV} download>Download CV</a></button> */}
                    </div>
                    <img src={intro} alt="Mastaneh Fey Intro" className="intro-image"/>
                    </div>
                </div>
            </section>
            <section id="skills">
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
                            </ul>
                        </span>
                    </div>
                    <div className="skills-top-text">
                    <p>I am inspired by creating great work with people who are as passionate as I am about building something remarkable.</p>
                    </div>
                    <div className="skills-bottom-text skill-item-personal">
                        <ul>
                            <li>Highly organized, detail oriented, self-motivated, and punctual</li>
                            <li>Outstanding analytical, problem solving and communication skills</li>
                            <li>Hard working, able to work independently and love to work within a team</li>
                            <li>Ability to multi task and work with minimal supervision</li>
                            <li>Great time management skills</li>
                            <li>Excel at developing strong relationships with co-workers, managers and committed to support them in order to meet individual as well as team goals</li>
                            <li>Willing to learn new skills</li>                        
                        </ul>
                    </div>
                </div>
                </div>
            </section>
            <section id="experience">
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
                                <li>Translated designers’ work into well-constructed HTML, CSS, and JavaScript</li>
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
            <section id="education">
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
                                    <h3>Computer software Engineering</h3> <p>&nbsp;&nbsp;Bachelor of Science - Tehran</p>
                                </span>
                                <p>2002-2005</p>
                            </div>
                            <div className="experience-item">
                                <span className="flex">
                                <h3>Architecture</h3> <p>&nbsp;&nbsp;Associated Degree - Hamedan</p>
                                </span>
                                <p>1998-2001</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section id="portfolio">
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
                        <button className="cv-btn btn" onClick={()=> openAllLogos()}><a>View all logos</a></button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section id="contact">
            <div className="container">
                <span className="bold">Contact</span>
                <div className="inner-education">
                    <h2>Let’s work together</h2>
                    <form className="contact-form" action="contactForm.php" method="post" name="contactform">
                        <div className="input-group">
                            <input type="text" name="name" id="name" placeholder="Name" required/>
                        </div>
                        <div className="input-group">
                            <input type="email" name="email" id="email" placeholder="E-mail" required/>
                        </div>
                        <div className="input-group">
                            <input type="text" name="subject" id="subject" placeholder="Subject"/>
                        </div>
                        <div className="input-group">
                            <input type="text" name="heard" id="heard" placeholder="How did you hear about me?"/>
                        </div>
                        <div className="input-group strech">
                            <textarea type="text" name="message" id="message" placeholder="Message" rows="5" required/>
                        </div>
                        <div className="input-group">
                            <button className="btn send-btn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
            </section>
            <section>
                <div className="container">
                    <p className="footer-small-text">Copyright ©2021 All rights reserved | Website is made by Mastaneh Fey</p>
                </div>
            </section>
        </div>
    </>
    )
}
