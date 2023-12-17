import "../styles/home.css"
import chelliGif from "../images/chelli.gif"
import Typed from "react-typed"
import Projects from '../data/data'
import ProjectList from "../Components/ProjectList"
import {
    AiOutlineGithub, 
    AiFillLinkedin, 
    AiFillTwitterSquare,
    AiOutlineMail
} from 'react-icons/ai'
import { useTheme } from "../Components/ThemeContext"

export default function Home() {
    const { isDarkMode } = useTheme()
    const project_tag = Projects.map(project => {
        return (
            <ProjectList 
                key={project.id}
                project={project} 
            />
        )
    })

    return(
        <div className="Home--container">
            <main className="main-home">
                <div className="info-main-div">
                    <div className="info-div">
                        <div className={`info-div-title ${isDarkMode ? "dark-mode p": ""}`}>
                            <h1>Hello I'm Chaimae El Oiriagli</h1>
                            <p class={isDarkMode ? "dark-mode p": ""}>But call me Chelli</p>
                        </div>
                        <p>I am a 
                            <Typed
                               className={isDarkMode ? "dark-mode" : ""} 
                            style={{
                                'paddingLeft': 10,
                                'color': `${isDarkMode ? '#581088' : '#f4be0d'}`
                            }}
                            strings={[
                                "Software Engineer",
                                "Web App Developer",
                                "Content Creator",
                            ]}
                            typeSpeed={150}
                            backSpeed={100}
                            loop
                        />
                        </p>
                    </div>
                    <div className={`img-div ${isDarkMode ? "dark-mode p": ""}`}>
                        <div>
                            
                        <img src={chelliGif} alt="chelli" />
                        </div>
                    </div>
                </div>
                <div className="projects-main">
                    <p>Latest Projects</p>
                    {isDarkMode && <div class="cat">
                        <div class="body"></div>
                        <div class="tail">
                            <div class="tail1">
                                <div class="tailx">
                                    <div class="tailx">
                                        <div class="tailx">
                                            <div class="tailx">
                                                <div class="tailx">
                                                    <div class="tailx">
                                                        <div class="tailx">
                                                            <div class="tailx">
                                                                <div class="tailx">
                                                                    <div class="tail-last"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="head">
                            <div class="ear1"></div>
                            <div class="ear2"></div>
                        </div>
                        <div class="paw"></div>
                    </div>}
                    <div className="project-container">
                        {
                        project_tag.map((item, i) => (
                            (i < 3) && <div>{item}</div>
                        ))
                        }
                    </div>
                </div>
                <div className="contact">
                    <div className={`getInTouch ${isDarkMode ? "dark-mode" : ""}`}>
                        <h1>Get in Touch</h1>
                        <div className={`callMe ${isDarkMode ? "dark-mode" : ""}`}>
                            <p>Want to work together or have any questions ?</p>
                            <div className={`helloButton ${isDarkMode ? 'dark-mode' : ''}`}>
                                <a 
                                    href="mailto:eloiriaglichaimae2@gmail.com"
                                    target={"_blank"}
                                    rel="noreferrer"
                                >SAY HELLO</a>
                            </div>
                            <div className="socialnet">
                                <a 
                                    href={"https://github.com/Chellii"} 
                                    target={"_blank"} 
                                    rel="noreferrer"
                                >
                                    <AiOutlineGithub color={isDarkMode ? 'white' : '#432600'} size={'3.2em'} style={{'paddingRight': 25}} />
                                </a>
                                <a 
                                    href={"https://www.linkedin.com/in/chaimae-el-oiriagli-44804518a/"} 
                                    target={"_blank"} 
                                    rel="noreferrer"
                                >
                                    <AiFillLinkedin color={isDarkMode ? 'white' : '#432600'} size={'3.2em'} style={{'paddingRight': 25}} />
                                </a>
                                <a 
                                    href={"https://twitter.com/Ch_ellii"} 
                                    target={"_blank"} 
                                    rel="noreferrer"
                                >
                                    <AiFillTwitterSquare color={isDarkMode ? 'white' : '#432600'} size={'3.2em'}  style={{'paddingRight': 25}} />
                                </a>
                                <a 
                                    href={"mailto:eloiriaglichaimae2@gmail.com"} 
                                    target={"_blank"}
                                    rel="noreferrer"
                                >
                                    <AiOutlineMail color={isDarkMode ? 'white' : '#432600'} size={'3.2em'} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}