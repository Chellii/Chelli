import "../styles/latestProject.css"
import { Link } from "@mui/material"

export default function LatestProject(props) {
    return (
        <div className="latestProject-container">
            <h3>{props.project.title}</h3>
            <p>{props.project.description}</p>
            <Link 
                target={"_blank"} 
                href={props.project.link}
                sx={{
                    color: '#4e4d4d'
                }}
            >{props.project.link}</Link>
        </div>
    )
}