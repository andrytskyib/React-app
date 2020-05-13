import React from "react";
import classes from "./App.module.css";
import * as basicLightbox from 'basiclightbox'
import Searchbar from "./component/Searchbar/Searchbar";
import ImageGallery from "./component/ImageGallery/ImageGallery";
import Button from "./component/Button/Button";
import Loader from 'react-loader-spinner';
import Modal from "./component/Modal/Modal";


class App extends React.Component {
    state = {
        gallery: [],
        filtered: "",
        pending: false,
        perpage: 12,
        showModal: false,
        modalImg: ""
    }

    search = () => {
        this.setState({
            pending: true
        })

        fetch(`https://pixabay.com/api/?q=${this.state.filtered}&page=1&key=16463810-5b0e0492e2fd924a420e650d3&image_type=photo&orientation=horizontal&per_page=${this.state.perpage}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    gallery: data.hits,
                    pending: false
                })
            });
    }

    handlerSubmit = (e) => {
        e.preventDefault();

        this.setState({
            filtered: e.target.nextElementSibling.value
        }, this.search)
    }

    handlerClickLoadMore = () => {
        this.setState({
            perpage: this.state.perpage + 12
        }, this.search)

        //     window.scrollTo({
        //         top: document.documentElement.scrollHeight,
        //         behavior: "smooth"
        // });
    }

    showModal = (src) => {
        this.setState({
            showModal: true,
            modalImg: src
        });
    };

    handlerClickHideModal = () => {
        this.setState({showModal: false});
    };

    handlerPressHideModal = (e) => {
        if (e.key === "Escape") {
            this.setState({showModal: false});
        }
    }

    render() {
        return (
            <div className={classes.App}>
                <Searchbar
                    handlerSubmit={this.handlerSubmit}
                />
                <ImageGallery
                    gallery={this.state.gallery}
                    handlerShowModal={this.showModal}
                />
                {
                    this.state.pending &&
                    <div style={{margin: "0 auto"}}>
                        <Loader
                            type="TailSpin"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        />
                    </div>
                }
                {
                    this.state.gallery.length > 0 &&
                    <Button
                        handlerClick={this.handlerClickLoadMore}
                    />
                }
                <Modal
                    show={this.state.showModal}
                    modalImg={this.state.modalImg}
                    handlerClickHide={this.handlerClickHideModal}
                    handlerPressHide={this.handlerPressHideModal}
                />
            </div>
        )
    }
}

export default App;