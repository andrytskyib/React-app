import React from "react";
import classes from "./Buton.module.css"

const Button = ({handlerClick}) => {
    return (
        <button
            className={classes.Button}
            onClick={handlerClick}
        >
            Load more
        </button>
    )
}

export default Button;