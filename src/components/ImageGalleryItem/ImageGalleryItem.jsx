// import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = () => {
  return (
    <li className={styles.imageGalleryItem}>
      <img className={styles.imageGalleryItemImage} src="" alt="" />
    </li>
  );
};

// ImageGalleryItem.propTypes = {};

export default ImageGalleryItem;
