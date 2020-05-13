import React from "react";
import classes from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = (
    {
        gallery,
        handlerShowModal
    }
) => {
    return (
        <ul className={classes.ImageGallery}>
            {
                gallery.map(item => {
                    return (
                        <ImageGalleryItem
                            key={item.id}
                            photos={item}
                            handlerShowModal={handlerShowModal}
                        />
                    )
                })
            }
        </ul>
    )
}
export default ImageGallery;