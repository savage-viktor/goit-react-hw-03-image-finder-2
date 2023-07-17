// import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={styles.imageGalleryItem}>
      <img
        onClick={() => {
          onClick(image);
        }}
        className={styles.largeImageURL}
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  );
};

// ImageGalleryItem.propTypes = {};

export default ImageGalleryItem;
