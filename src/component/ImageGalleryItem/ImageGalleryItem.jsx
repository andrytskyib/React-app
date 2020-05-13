import React from "react";
import classes from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({photos, handlerShowModal}) => {
    return (
        <li
            className={classes.ImageGalleryItem}
        >
            <img
                src={photos.largeImageURL}
                alt={photos.id}
                className={classes.ImageGalleryItemImage}
                onClick={() => handlerShowModal(photos.largeImageURL)}
            />
        </li>
    )
}

export default ImageGalleryItem;