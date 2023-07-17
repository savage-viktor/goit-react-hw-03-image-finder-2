import { Component } from "react";

import styles from "./App.module.css";
import Searchbar from "./Searchbar/Searchbar";
import Loader from "./Loader/Loader";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { getImages } from "../services/getImages";

class App extends Component {
  state = {
    imageName: "",
    status: "idle",
    images: [],
    pages: 1,
    error: "",
    currentImage: null,
    modal: false,
  };

  handleLoadMode = () => {
    this.setState((prevState) => {
      return { pages: prevState.pages + 1 };
    });
  };

  handleSearch = (searchWord) => {
    this.setState({ imageName: searchWord });
  };

  handleClick = (image) => {
    this.setState({ currentImage: image, modal: true });
  };

  handleCloseModal = () => {
    this.setState({ modal: false });
  };

  componentDidMount() {
    // console.log("did mount");
  }

  async componentDidUpdate(_, prevState) {
    if (
      prevState.imageName !== this.state.imageName ||
      prevState.pages !== this.state.pages
    ) {
      // if (prevState.imageName !== this.state.imageName) {
      //   this.setState({ pages: 1 });
      // }
      this.setState({ status: "loading" });

      try {
        const images = await getImages(this.state.imageName, this.state.pages);
        this.setState({ images });
      } catch (error) {
        this.setState({ error, status: "error" });
      } finally {
        this.setState({ status: "idle" });
      }
    }
  }

  render() {
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearch} />
        {this.state.status === "loading" && <Loader />}
        {this.state.status === "error" && (
          <p>Whoops, something went wrong: {this.state.error.message}</p>
        )}
        <ImageGallery images={this.state.images} onClick={this.handleClick} />
        {this.state.images.length !== 0 && (
          <Button onClick={this.handleLoadMode} />
        )}
        {this.state.modal && (
          <Modal
            onClose={this.handleCloseModal}
            image={this.state.currentImage.largeImageURL}
            description={this.state.currentImage.tags}
          />
        )}
      </div>
    );
  }
}

export default App;
