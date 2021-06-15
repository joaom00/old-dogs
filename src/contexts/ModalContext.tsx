import React, { createContext, useState, useCallback } from 'react';

type ModalProviderProps = {
  children: React.ReactNode;
};

type ModalContextData = {
  postId: string;
  isOpen: boolean;
  openModal: (postId: string) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [postId, setPostId] = useState('');

  const openModal = useCallback((postId: string) => {
    setPostId(postId);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ postId, isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
