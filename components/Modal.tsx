import React, { ReactNode } from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
import { MdClose } from 'react-icons/md';
import { rgba } from 'polished';
import { useModalContext } from '../context';
ReactModal.setAppElement('body');

export type ModalProps = {
  children: ReactNode;
  showToggle?: boolean;
  modalKey: string;
  full?: boolean;
  isOpen?: boolean;
  locked?: boolean;
} & Pick<ReactModalProps, 'style' | 'onRequestClose'>;

export const Modal = ({
  children,
  style,
  showToggle = true,
  onRequestClose,
  locked = false,
  modalKey,
  full,
  isOpen,
  ...props
}: ModalProps) => {
  const { modalId, closeModal } = useModalContext();
  return (
    <ReactModal
      isOpen={isOpen === undefined ? modalId === modalKey : isOpen}
      shouldFocusAfterRender
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      shouldReturnFocusAfterClose
      onRequestClose={
        locked ? () => {} : onRequestClose === undefined ? closeModal : onRequestClose
      }
      style={{
        content: {
          position: 'relative',
          top: 'auto',
          left: 'auto',
          bottom: 'auto',
          right: 'auto',
          padding: 0,
          zIndex: 9999,
          width: full ? '100%' : 'auto',
          height: full ? '100%' : 'auto',
          border: 0,
          borderRadius: full ? 0 : 4,
          ...(style && style.content),
        },
        overlay: {
          background: rgba('#000', 0.5),
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 110,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ...(style && style.overlay),
        },
      }}
      closeTimeoutMS={300}
      {...props}
    >
      {showToggle && (
        <MdClose
          data-name="close-button"
          onClick={onRequestClose === undefined ? closeModal : onRequestClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
          }}
          size={22}
        />
      )}
      {children}
    </ReactModal>
  );
};
