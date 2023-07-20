// import PropTypes from "prop-types";
import styles from "./Modal.module.css";

import { createPortal } from "react-dom";

import { Component } from "react";

const modalRoot = document.querySelector("#modal");

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

  // render() {
  //   return createPortal(
  //     <div className={css.overlay} onClick={this.props.toggleModal}>
  //       <div className={css.modal}>
  //         <img src={this.props.modalImage} alt={this.props.alt} width="700" />
  //       </div>
  //     </div>,
  //     modalRoot
  //   );
  // }

  render() {
    const { image, description } = this.props;
    return createPortal(
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <img src={image} alt={description} />
        </div>
      </div>,
      modalRoot
    );
  }
}

// Modal.propTypes = {};

export default Modal;
