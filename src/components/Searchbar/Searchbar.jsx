// import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={styles.searchbar}>
      <form onSubmit={onSubmit} className={styles.searchForm}>
        <button type="submit" className={styles.searchFormButton}>
          <span className={styles.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.searchFormInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

// Searchbar.propTypes = {};

export default Searchbar;
