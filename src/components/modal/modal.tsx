import { createPortal } from "react-dom";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import modalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { IModalProps } from '../../services/types/index'

export const Modal = ({ title, onClose, children }: IModalProps) => {
  const modalRoot: HTMLElement | null = document.getElementById("react-modals");

  const history = useHistory();
  const closeModal = () => {
    onClose ? onClose() : history.goBack();
  };

  useEffect(() => {
    const closeEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        closeModal();
      }
    };
    document.addEventListener("keyup", closeEsc);

    return () => {
      document.removeEventListener("keyup", closeEsc);
    };
  }, [onClose]);

  return modalRoot && createPortal(
    <>
      <ModalOverlay closed={closeModal} />
      <div className={modalStyles.modal}>
        <span className={modalStyles.close}>
          <CloseIcon type="primary" onClick={closeModal} />
        </span>
        <h3
          className={
            modalStyles.title + " text text_type_main-large pr-10 pl-10 pt-3"
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
