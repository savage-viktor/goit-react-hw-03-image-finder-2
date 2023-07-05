import styles from "./App.module.css";
import Searchbar from "./Searchbar/Searchbar";
import Loader from "./Loader/Loader";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

function App() {
  return (
    <div className={styles.App}>
      <Searchbar />
      <Loader />
      <ImageGallery />
      <Button />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
