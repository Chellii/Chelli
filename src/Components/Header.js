import "../styles/header.css"
import {GiMoonBats, GiSun} from "react-icons/gi"
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useTheme } from "./ThemeContext";

export default function Header() {
    const { toggleTheme, isDarkMode } = useTheme()

    const [isClickedMenu, setIsClickedMenu] = useState(false);

    const handleClickMenu = (() => {
        if (!isClickedMenu)
            document.body.style.overflow = 'hidden';
        else
            document.body.style.overflow = 'scroll';
        setIsClickedMenu(!isClickedMenu)
    });
    const handleClick = (() => {
        document.body.style.overflow = 'scroll'
        if (isClickedMenu)
            setIsClickedMenu(false)
    })

    return (
        <header className={`header--container ${isDarkMode ? "dark-mode" : ""}`}>
            <Link className={`header-logo ${isDarkMode ? "dark-mode" : ""}`} to="/">
                <h1>Chelli</h1>
                {isDarkMode && <>
                <div class="spider-line">
                    <div class="spider">
                        <div class="spider-body"></div>
                        <div class="spider-head"></div>
                        <div class="spider-circle"></div>
                        <div class="spider-leg1"></div>
                        <div class="spider-leg2"></div>
                        <div class="spider-leg3"></div>
                        <div class="spider-leg4"></div>
                        <div class="spider-leg5"></div>
                        <div class="spider-leg6"></div>
                    </div>
                </div>
                <div class="spider-line-shadow">
                    <div class="spider-shadow">
                        <div class="spider-body-shadow"></div>
                        <div class="spider-head-shadow"></div>
                        <div class="spider-leg1-shadow"></div>                            <div class="spider-leg2"></div>
                        <div class="spider-leg3-shadow"></div>
                        <div class="spider-leg4-shadow"></div>
                        <div class="spider-leg5-shadow"></div>
                        <div class="spider-leg6-shadow"></div>
                    </div>
                </div></>
                }
            </Link>
            <ul className={isClickedMenu ? `header-ul clicked ${isDarkMode ? "dark-mode" : ""}` : `header-ul ${isDarkMode ? "dark-mode" : ""}`}>
                <li onClick={handleClick}><Link className={`header-choices ${isDarkMode ? "dark-mode" : ""}`} to="about">About</Link></li>
                <li onClick={handleClick}><Link className={`header-choices ${isDarkMode ? "dark-mode" : ""}`} to="projects">Projects</Link></li>
                <li onClick={handleClick}><Link className={`header-choices ${isDarkMode ? "dark-mode" : ""}`} to="articles">Articles</Link></li>
                <li onClick={toggleTheme}>{isDarkMode? <GiSun size={'2.5em'} color={'white'} /> : <GiMoonBats size={'2.5em'} />}</li>
            </ul>
            <div className="menu-icon" onClick={handleClickMenu}>
                <i className={isClickedMenu ? `fas fa-times fa-lg ${isDarkMode ? "dark-mode" : ""}` : `fas fa-bars fa-lg ${isDarkMode ? "dark-mode" : ""}`}></i>
            </div>
        </header>
    )
}