import React from 'react'
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    img: {
        margin: 0,
        display: "flex",
        maxWidth: "100vw",
        backgroundColor: "black",
        alignItems: "center",
    },
}));


export default function menu(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    return ( 
    <div >
        <Paper >
        <figure className = { classes.img } >
        <img className = { classes.img }
        alt = "complex"
        src = { props.itemsImage }
        /> 
        </figure> 
        </Paper> 
        </div>
    );
}