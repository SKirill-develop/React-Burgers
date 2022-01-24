import overlayStyles from "./modal-overlay.module.css";

const ModalOverlay = ({ action }) =>  <div className={overlayStyles.overlay} onClick={action}></div>;

export default ModalOverlay;