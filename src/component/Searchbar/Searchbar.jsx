import React from "react";
import classes from "./Searchbar.module.css";

const Searchbar = ({handlerSubmit}) => {
    return (
        <header className={classes.Searchbar}>
            <form className={classes.SearchForm}>
                <button
                    type="submit"
                    className={classes.SearchFormButton}
                    onClick={handlerSubmit}
                >
                    <span className={classes.SearchFormButtonLabel}></span>
                </button>

                <input
                    className={classes.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />

            </form>
        </header>
    )
}

export default Searchbar;