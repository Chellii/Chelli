import "../styles/latestProject.css"

export default function LatestProject(props) {
    return (
        <div className="latestProject-container">
            <h3>{props.project.title}</h3>
            <p>{props.project.description}</p>
            <a href={props.project.link}>{props.project.link}</a>
        </div>
    )
}