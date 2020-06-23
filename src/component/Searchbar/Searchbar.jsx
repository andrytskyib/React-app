import React from "react";
import classes from "./Searchbar.module.css";

const Searchbar = ({handlerSubmit, handleChange}) => {
    return (
        <header className={classes.Searchbar}>
            <form onSubmit={handlerSubmit} className={classes.SearchForm}>
                <button
                    type="submit"
                    className={classes.SearchFormButton}
                >
                    <span className={classes.SearchFormButtonLabel}></span>
                </button>

                <input
                    onChange={handleChange}
                    className={classes.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    name="filter"
                    placeholder="Search images and photos"
                />

            </form>
        </header>
    )
}

export default Searchbar;