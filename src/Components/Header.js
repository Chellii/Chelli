import "../styles/header.css"
import {GiMoonBats} from "react-icons/gi"
import { Link } from 'react-router-dom';
import { makeStyles } from "@mui/styles"
import { useState } from "react";

const useStyles = makeStyles({
    headeroot: {
        padding: 0,
        fontFamily: "'Henny Penny', cursive",
        fontSize: 40,
        color: 'black',
        ['@media only screen and (max-width: 600px)'] : {
            fontSize: 50,
          },
      '&:link': {
          textDecoration: 'none'
      },
    },
    root: {
        padding: 0,
        margin: '0 15 0 15',
        fontFamily: "'Henny Penny', cursive",
        fontSize: 25,
        color: '#33272A',
        ['@media only screen and (max-width: 600px)'] : {
            fontSize: 80,
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

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => setIsClicked(!isClicked);
    const classes = useStyles();
    return (
        <header className="header--container">
            <Link className={classes.headeroot} to="/"><h1 onClick={handleClick}>Chelli</h1></Link>
                <ul className={isClicked ? "header-ul clicked" : "header-ul"}>
                    <li onClick={handleClick}><Link className={classes.root} to="/about">About</Link></li>
                    <li onClick={handleClick}><Link className={classes.root} to="projects">Projects</Link></li>
                    <li onClick={handleClick}><Link className={classes.root} to="articles">Articles</Link></li>
                    <li onClick={handleClick}><GiMoonBats className={classes.moon} size={50}  /></li>
                </ul>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={isClicked ? 'fas fa-times fa-lg' : 'fas fa-bars fa-lg'}></i>
                </div>
        </header>
    )
}