import styles from './LoginRegisterModal.module.scss';
import { Modal } from 'antd';
import { useModalContext } from '@/context/modal.context';
import RegisterForm from '../RegisterForm/RegisterForm';
import { Tabs } from 'antd';
import LoginForm from '../LoginForm/LoginForm';

const LoginRegisterModal = () => {
  const { isModalOpen, openModal, closeModal, activeKey } = useModalContext();
  const items = [
    {
      key: 'register',
      label: 'Registrarme',
      children: <RegisterForm />,
    },
    {
      key: 'login',
      label: 'Ingresar',
      children: <LoginForm />,
    },
  ];

  //// COMPONENT
  return (
    <Modal
      wrapClassName={styles.tour}
      open={isModalOpen}
      onOk={closeModal}
      onCancel={closeModal}
      footer={null}
    >
      {' '}
      <Tabs
        defaultActiveKey='register'
        items={items}
        size='large'
        activeKey={activeKey}
        onChange={(key) => openModal(key)}
      >
        <RegisterForm />
      </Tabs>
    </Modal>
  );
};

export default LoginRegisterModal;
