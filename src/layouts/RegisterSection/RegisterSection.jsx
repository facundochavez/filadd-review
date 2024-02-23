import Button from '@/components/Button/Button';
import styles from './RegisterSection.module.scss';
import { Form, Input, Divider } from 'antd';
import Image from 'next/image';
import RegisterForm from '@/components/RegisterForm/RegisterForm';

const RegisterSection = () => {
  //// COMPONENT
  return (
    <section className={styles.register_section}>
      <h2>Crea tu cuenta y comienza a aprobar</h2>
      <RegisterForm />
    </section>
  );
};

export default RegisterSection;
