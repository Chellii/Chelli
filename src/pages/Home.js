import "../styles/home.css"
import Header from "../Components/Header"
import chelliGif from "../images/chelli.gif"
import Typed from "react-typed"
import LatestProject from "../Components/LatestProject"
import Projects from '../data/data'

export default function Home() {
    const project_tag = Projects.map(project => {
        return (
            <LatestProject 
                key={project.id}
                project={project} 
            />
        )
    })

    return(
        <div className="Home--container">
            <Header />
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
                <div className="getInTouch">
                    <h1>Get in Touch</h1>
                    <div className="callMe">
                        <p>Want to work together or have any questions ?</p>
                        <div className="helloButton">
                            <p>SAY HELLO</p>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}