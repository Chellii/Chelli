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


export default function Home() {
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
                        <div className="info-div-title">
                            <h1>Hello I'm Chaimae El Oiriagli</h1>
                            <p>But call me Chelli</p>
                        </div>
                        <p>I am a 
                        <Typed
                            style={{
                                'paddingLeft':10,
                                'color':'#f4be0d'
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
                    <div className="img-div">
                        <img src={chelliGif} alt="chelli"/>
                    </div>
                </div>
                <div className="projects-main">
                    <p>Latest Projects</p>
                    <div className="project-container">
                        {
                        project_tag.map((item, i) => (
                            (i < 3) && <div>{item}</div>
                        ))
                        }
                    </div>
                </div>
                <div className="contact">
                    <div className="getInTouch">
                        <h1>Get in Touch</h1>
                        <div className="callMe">
                            <p>Want to work together or have any questions ?</p>
                            <div className="helloButton">
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
                                    <AiOutlineGithub color={'#432600'} size={'3.2em'} style={{'paddingRight': 25}} />
                                </a>
                                <a 
                                    href={"https://www.linkedin.com/in/chaimae-el-oiriagli-44804518a/"} 
                                    target={"_blank"} 
                                    rel="noreferrer"
                                >
                                    <AiFillLinkedin color={'#432600'} size={'3.2em'} style={{'paddingRight': 25}} />
                                </a>
                                <a 
                                    href={"https://twitter.com/Ch_ellii"} 
                                    target={"_blank"} 
                                    rel="noreferrer"
                                >
                                    <AiFillTwitterSquare color={'#432600'} size={'3.2em'}  style={{'paddingRight': 25}} />
                                </a>
                                <a 
                                    href={"mailto:eloiriaglichaimae2@gmail.com"} 
                                    target={"_blank"}
                                    rel="noreferrer"
                                >
                                    <AiOutlineMail color={'#432600'} size={'3.2em'} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}