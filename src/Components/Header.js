import "../styles/header.css"
import {GiMoonBats} from "react-icons/gi"

export default function Header() {
    return (
        <header className="header--container">
            <h1>Chelli</h1>
            <ul className="header-ul">
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
                <li ><GiMoonBats size={40}  /></li>
            </ul>
        </header>
    )
}