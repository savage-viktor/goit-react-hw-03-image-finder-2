import styles from "./Error.module.css";
const Error = ({ errorMessage }) => {
  return (
    <p className={styles.message}>
      Whoops, something went wrong: {errorMessage}
    </p>
  );
};

export default Error;
// Whoops, something went wrong: {errorMessage}
