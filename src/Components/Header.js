import "../styles/header.css"
import {GiMoonBats} from "react-icons/gi"
import { Link } from 'react-router-dom';
import { makeStyles } from "@mui/styles"
import { useState } from "react";

const useStyles = makeStyles({
    headeroot: {
        padding: 0,
        fontFamily: "'Henny Penny', cursive",
        fontSize: '2.5em',
        color: 'black',
        '&:link': {
            textDecoration: 'none'
        },
    },
    root: {
        padding: 0,
        margin: '0 15 0 15',
        fontFamily: "'Henny Penny', cursive",
        color: '#33272A',
        fontSize: '1.3em',
        ['@media only screen and (max-width: 1200px)'] : {
            '&:hover' : {
                backgroundColor: 'black'
            }
          },
      '&:link': {
          textDecoration: 'none'
      },
      '&:hover' : {
          color: '#e3b10d'
      }
    },
  });

export default function Header() {

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
    const classes = useStyles();
    return (
        <header className="header--container">
            <Link className={classes.headeroot} to="/"><h1>Chelli</h1></Link>
                <ul className={isClickedMenu ? "header-ul clicked" : "header-ul"}>
                    <li onClick={handleClick}><Link className={classes.root} to="/about">About</Link></li>
                    <li onClick={handleClick}><Link className={classes.root} to="projects">Projects</Link></li>
                    <li onClick={handleClick}><Link className={classes.root} to="articles">Articles</Link></li>
                    <li onClick={handleClick}><GiMoonBats size={'2.5em'}  /></li>
                </ul>
                <div className="menu-icon" onClick={handleClickMenu}>
                    <i className={isClickedMenu ? 'fas fa-times fa-lg' : 'fas fa-bars fa-lg'}></i>
                </div>
        </header>
    )
}