import { ReactElement, ReactNode } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

interface IModal {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, closeModal, children }: IModal): ReactElement {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="react-modal"
      overlayClassName="react-overlay"
    >
      {children}
    </ReactModal>
  );
}
