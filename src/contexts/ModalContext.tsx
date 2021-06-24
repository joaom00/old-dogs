import React, { createContext, useState, useCallback, useEffect } from 'react';

type TModalProviderProps = {
  children: React.ReactNode;
};

type TModalContextData = {
  postId: string;
  isOpen: boolean;
  openModal: (postId: string) => void;
  closeModal: () => void;
};

const ModalContext = createContext<TModalContextData>({} as TModalContextData);

const ModalProvider = ({ children }: TModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [postId, setPostId] = useState('');

  const openModal = useCallback((postId: string) => {
    setPostId(postId);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return <ModalContext.Provider value={{ postId, isOpen, openModal, closeModal }}>{children}</ModalContext.Provider>;
};

export { ModalContext, ModalProvider };
