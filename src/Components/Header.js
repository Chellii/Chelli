import "../styles/header.css"
import {FaRegMoon} from "react-icons/fa"

export default function Header() {
    return (
        <header className="header--container">
            <h1>Chelli</h1>
            <ul className="header-ul">
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
                <li ><FaRegMoon  /></li>
            </ul>
        </header>
    )
}