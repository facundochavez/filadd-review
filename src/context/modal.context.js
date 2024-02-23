import { createContext, useContext, useState } from 'react';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeKey, setActiveKey] = useState('login');

  const openModal = (activeKey) => {
    setActiveKey(activeKey);
    setIsModalOpen(true);
    document.documentElement.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.documentElement.style.overflow = 'auto';
  };

  //// COMPONENT
  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        activeKey,
        setActiveKey,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('ModalContext must be used within a ModalsProvider');
  }
  return context;
};

export default ModalProvider;
