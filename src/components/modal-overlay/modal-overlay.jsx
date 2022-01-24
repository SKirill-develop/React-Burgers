import overlayStyles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({ closed }) =>  <div className={overlayStyles.overlay} onClick={closed}></div>;

ModalOverlay.propTypes = {
  closed: PropTypes.func.isRequired
};

export default ModalOverlay;