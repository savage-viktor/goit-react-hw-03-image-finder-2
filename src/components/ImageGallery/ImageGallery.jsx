// import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map((image) => {
        return (
          <ImageGalleryItem key={image.id} onClick={onClick} image={image} />
        );
      })}
    </ul>
  );
};

// ImageGallery.propTypes = {};

export default ImageGallery;
