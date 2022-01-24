import overlayStyles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({ action }) =>  <div className={overlayStyles.overlay} onClick={action}></div>;

ModalOverlay.propTypes = {
  action: PropTypes.func.isRequired
};

export default ModalOverlay;