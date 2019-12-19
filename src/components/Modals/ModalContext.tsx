import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ModalContextType = {
  openModalId: string;
  openModal: (id: string) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  openModalId: '',
  openModal: () => {},
  closeModal: () => {},
});

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [openModalId, setOpenModalId] = useState('');
  const openModal = (id: string) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId('');
  };

  return (
    <ModalContext.Provider
      value={{
        openModalId,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
