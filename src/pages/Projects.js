import '../styles/projects.css'
import ProjectList from '../Components/ProjectList'
import Project from '../data/data'
import { useTheme } from '../Components/ThemeContext'

export default function Projects() {
    const { isDarkMode } = useTheme()
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
            <div className={`moreButton ${isDarkMode ? 'dark-mode' : ''}`}>
                <a 
                    href="https://github.com/Chellii?tab=repositories"
                    target={"_blank"}
                    rel="noreferrer"
                >MORE</a>
            </div>
        </div>
    )
}