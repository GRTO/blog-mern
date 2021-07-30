import Button from "../../styles/GlobalComponents/Button.jsx";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
import {
  ModalBody,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "./modalStyles.js";

export const Modal = ({ show, onClose, title, children, onSubmit }) => (
  <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
    <ModalContainer onClick={onClose} showModal={show}>
      <ModalContent showModal={show} onClick={(e) => e.stopPropagation()}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button typeButton="secondary" onClick={onSubmit} form>
            Accept
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  </CSSTransition>
);
