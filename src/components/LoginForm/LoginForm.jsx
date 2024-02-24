import styles from './LoginForm.module.scss';
import Image from 'next/image';
import Button from '../Button/Button';
import { Form } from 'antd';
import { Divider } from 'antd';
import { Input } from 'antd';
import { useModalContext } from '@/context/modal.context';

const LoginForm = () => {
  const { openModal } = useModalContext();

  //// COMPONENT
  return (
    <div className={styles.login_form}>
      <Button
        style={{
          width: '100%',
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {' '}
        <Image
          src='/icons/icon-google.svg'
          alt='Google Icon'
          width={23}
          height={23}
          style={{ marginBottom: '3px' }}
        />{' '}
        Continuar con Google
      </Button>

      <Divider>O ingresa con tu email</Divider>
      <Form
        name='login'
        layout='vertical'
        autoComplete='off'
        className={styles.login_section__form}
        style={{ width: '100%' }}
      >
        <Form.Item
          name='email'
          label='Email'
          validateDebounce={1000}
          hasFeedback
          rules={[
            {
              type: 'email',
              message: 'Ingresa un email valido',
            },
          ]}
        >
          <Input type='email' placeholder='ejemplo@gmail.com' size='large' />
        </Form.Item>
        <Form.Item
          name='password'
          label='Contraseña'
          rules={[
            {
              message: 'Ingresa una contraseña valida',
            },
          ]}
        >
          <Input.Password
            type='password'
            placeholder='Ingresa tu contraseña'
            size='large'
          />
        </Form.Item>
        <Button type='primary' style={{ width: '100%', marginTop: '10px' }}>
          Ingresar
        </Button>
      </Form>
      <p onClick={() => openModal('register')}>
        <Image
          src='/icons/arrow-right.svg'
          alt='Arrow Right'
          width={10}
          height={10}
          style={{ rotate: '180deg' }}
        />{' '}
        No tengo una cuenta
      </p>
    </div>
  );
};

export default LoginForm;
