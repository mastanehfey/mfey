import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import Navbar from './Navbar'
import intro from '../images/intro-image.jpg'
import CV from '../CV/Mastaneh-Fey.pdf'
import projectList from '../CV/projects'
import logoList from '../CV/logoDesign'

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
    var projects = projectList.map((item,index)=>{
        return (
            <div className="single-website-wrapper" key={index} style={{backgroundImage:`url(${item.image})`}}>
                <a className="shade" target="_blank" href={item.link}>
                    <img src={item.logo} alt={item.vame} className="hover-logo"/>
                </a>
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
    return (
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
                        I am a Web Developer located in Hartford, Connecticut. I currently work as a part time Remote Junior Web Developer for Coolor, located in Las Vegas. I am looking to take on more work and to increase my skills as a Web Developer.
                        </p>
                        <div className="contact-intro">
                            <p className="text-dark">Phone:</p><a href="tel: 778-882-3767"><p>778 882 3767</p></a>
                            <p className="text-dark">Email:</p><a href="mailto: mastaneh.f@gmail.com"><p>mastaneh.f@gmail.com</p></a>
                        </div>
                        <button className="cv-btn btn"><a href={CV} download>Download CV</a></button>
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
                                <li>HTML5</li>
                                <li>CSS3</li>
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
                                <li>consuming APIs</li>
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
                            <h4 className="item-header">Tools</h4>
                            <ul>
                                <li>GitHub</li>
                                <li>NPM</li>
                            </ul>
                        </span>
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
                        I partner with startups, organizations and Fortune 500 companies to build digital products that help clients overcome challenges and create lasting connections with millions of people every day.
                        </p>
                        </div>
                        <div className="experience-items-wrapper">
                            <div className="experience-item border-b">
                                <h3>Freelance Web Developer</h3>
                                <p>2017 - Present</p>
                                <ul className="ul-customized">
                                    <li>Designing and developing small business websites.</li>
                                    <li>meeting with clients to discuss requirements and/or project progress</li>
                                    <li>responsible for setting up website hosting and domain name registration for clients</li>
                                    <li>Responsible for the graphic design and implementation of company web site including navigation, writing HTML and JavaScript and optimization of website</li>
                                    <li>Worked with clients to design, develop, modify and update their content.</li>
                                    <li>Designing branding brochures, creating company logos and branding.</li>
                                    <li>Working independently on website maintenance</li>
                                </ul>
                            </div>
                            <div className="experience-item">
                                <span className="flex">
                                <h3>Frontend Development</h3> <p>&nbsp;&nbsp;Tajan Systems</p>
                                </span>
                                <p>2009 - 2016</p>
                                <ul className="ul-customized">
                                    <li>Turned broad, conceptual ideas into highly creative visual websites</li>
                                    <li>Developed and maintained the frontend functionality of websites</li>
                                    <li>Created, edited and gathered website content such as text, video, audio and media</li>
                                    <li>Met with clients and “end-users” to analyze their needs and advised them on the layout, color and style of an efficient website</li>
                                    <li>Created logos, business cards, brochures and other printed materials</li>
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
                                    <h3>Computer software Engineering</h3> <p>&nbsp;&nbsp;Bachelor of Science</p>
                                </span>
                                <p>2002-2005</p>
                            </div>
                            <div className="experience-item">
                                <span className="flex">
                                <h3>Architecture</h3> <p>&nbsp;&nbsp;Associated Degree</p>
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
                    </div>
                </div>
                </div>
            </section>
            <section id="contact">
                <div className="container">
                    Contact Me
                </div>
            </section>
            <section>
                <div className="container">
                    Footer
                </div>
            </section>
        </div>
    )
}
