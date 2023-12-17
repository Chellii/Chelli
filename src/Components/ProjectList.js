import "../styles/projectlist.css"
import { Link } from "@mui/material"
import { useTheme } from "./ThemeContext";

export default function ProjectList(props) {
  const { isDarkMode } = useTheme()
  const handleClick = () => {
    window.open(props.project.link, '_blank');
  }
    return (
      <div className={`Project-container ${isDarkMode ? 'dark-mode' : ''}`} onClick={handleClick}>
            <h3>{props.project.title}</h3>
            <p>{props.project.description}</p>
            <Link 
                className={`project-link ${isDarkMode ? "dark-mode" : ""}`}
                target={"_blank"} 
                href={props.project.link} 
            >{props.project.link}</Link>
        </div>
    )
}