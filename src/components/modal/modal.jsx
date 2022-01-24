import ReactDOM from "react-dom";
import { useEffect } from "react";
import modalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

const Modal = ({ title, closed, children }) => {
  useEffect(() => {
    const closeEsc = (e) => {
      if (e.key === "Escape" || e.key === "Esc") {
        closed();
      }
    }
    document.addEventListener("keyup", closeEsc);

    return () => {
      document.removeEventListener("keyup", closeEsc);
    };
  }, [closed]);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay closed={closed}/>
      <div className={modalStyles.modal}>
        <span className={modalStyles.close}>
          <CloseIcon type="primary" onClick={closed} />
        </span>
        <h3
          className={
            modalStyles.title +
            " text text_type_main-large pr-10 mt-10 pl-10 pt-3"
          }
        >
          {title}
        </h3>
        {children}
      </div>
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  closed: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};

export default Modal;
