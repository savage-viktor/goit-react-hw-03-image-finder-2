// import PropTypes from "prop-types";
import styles from "./Modal.module.css";

import { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.listener);
    // window.addEventListener("click", this.listener);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.listener);
  }

  listener = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
    // console.log(event.target);
    // console.log(event.currentTarget);
    // if (event.target !== event.currentTarget) {
    //   console.log("Клікнули мимо");
    // }
  };

  render() {
    const { image, description } = this.props;
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <img src={image} alt={description} />
        </div>
      </div>
    );
  }
}

// Modal.propTypes = {};

export default Modal;
