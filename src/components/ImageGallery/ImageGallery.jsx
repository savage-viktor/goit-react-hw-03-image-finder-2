// import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = () => {
  return (
    <ul className={styles.imageGallery}>
      <ImageGalleryItem />
    </ul>
  );
};

// ImageGallery.propTypes = {};

export default ImageGallery;
