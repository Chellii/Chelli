import '../styles/projects.css'
import ProjectList from '../Components/ProjectList'
import Project from '../data/data'

export default function Projects() {
    const project_tag = Project.map(project => {
        return (
            <ProjectList
                key={project.id}
                project={project} 
            />
        )
    })
    return(
        <div className='project'>
            <h1>List of Projects</h1>
            <div className="project-container">
                {
                project_tag.map((item, i) => (
                    <div>{item}</div>
                ))
                }
            </div>
            <div className="helloButton">
                <a 
                    href="https://github.com/Chellii?tab=repositories"
                    target={"_blank"}
                >MORE</a>
            </div>
        </div>
    )
}