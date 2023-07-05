import { Component } from "react";

import styles from "./App.module.css";
import Searchbar from "./Searchbar/Searchbar";
import Loader from "./Loader/Loader";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
// import Modal from "./Modal/Modal";

class App extends Component {
  state = {
    imageName: "",
  };

  handleSearch = (searchWord) => {
    console.log("Hello", searchWord);
    this.setState({ imageName: searchWord });
  };

  render() {
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearch} />
        <Loader />
        <ImageGallery />
        <Button />
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
