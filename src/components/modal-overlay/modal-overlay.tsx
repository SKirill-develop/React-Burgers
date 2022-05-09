import overlayStyles from "./modal-overlay.module.css";
import { IModalOverlayProps } from '../../services/types/index'

export const ModalOverlay = ({ closed }: IModalOverlayProps) => <div className={overlayStyles.overlay} onClick={closed}></div>;
