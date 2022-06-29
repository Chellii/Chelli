import "../styles/header.css"
import {GiMoonBats} from "react-icons/gi"
import { Link } from 'react-router-dom';
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    root: {
        padding: 0,
        margin: '0 15 0 15',
        fontFamily: "'Henny Penny', cursive",
        fontSize: 25,
        color: '#33272A',
        ['@media screen and (max-width: 455px)'] : {
            fontSize: 35,
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
    const classes = useStyles();
    return (
        <header className="header--container">
            <Link className={classes.root} to="/"><h1>Chelli</h1></Link>
            <ul className="header-ul">
                <li><Link className={classes.root} to="/about">About</Link></li>
                <li><Link className={classes.root} to="projects">Projects</Link></li>
                <li><Link className={classes.root} to="articles">Articles</Link></li>
                <li ><GiMoonBats size={40}  /></li>
            </ul>
        </header>
    )
}