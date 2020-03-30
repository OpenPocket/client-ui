import React, { createContext, useContext, useState, ReactNode } from 'react';

export const ModalContext = createContext({
  modalId: '',
  openModal: (id: string) => {},
  closeModal: () => {},
});
export const useModalContext = () => useContext(ModalContext);
export const ModalConsumer = ModalContext.Consumer;
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalId, setModalId] = useState<string>('');
  const openModal = (id: string) => {
    setModalId(id);
  };

  const closeModal = () => {
    setModalId('');
  };

  return (
    <ModalContext.Provider
      value={{
        modalId,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
