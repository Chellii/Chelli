import "../styles/latestProject.css"
import { Link } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    root: {
      fontFamily: 'Cambria, Cochin, Georgia, Times, \'Times New Roman\', serif',
      fontSize: 18,
      margin: 0,
      color:"#4e4d4d !important",
      ['@media only screen and (max-width: 600px)'] : {
        fontSize: 35,
        color: '#a26700ef !important'
      },
      "&:hover": {
        color: '#a26700ef !important'
      },
      '&:link': {
          textDecoration: 'none'
      },

    },
  });

export default function LatestProject(props) {
    const classes = useStyles();
    return (
        <div className="latestProject-container">
            <h3>{props.project.title}</h3>
            <p>{props.project.description}</p>
            <Link 
                className={classes.root}
                target={"_blank"} 
                href={props.project.link} 
            >{props.project.link}</Link>
        </div>
    )
}