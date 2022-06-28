import "../styles/latestProject.css"
import { Link, makeStyles } from "@mui/material"



export default function LatestProject(props) {

    return (
        <div className="latestProject-container">
            <h3>{props.project.title}</h3>
            <p>{props.project.description}</p>
            <Link 
                target={"_blank"} 
                href={props.project.link} 
            >{props.project.link}</Link>
        </div>
    )
}