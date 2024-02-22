import Button from '@/components/Button/Button';
import styles from './RegisterSection.module.scss';
import { Form, Input, Divider } from 'antd';
import Image from 'next/image';

const RegisterSection = () => {
  //// COMPONENT
  return (
    <section className={styles.register_section}>
      <h2>Crea tu cuenta y comienza a aprobar</h2>
      <div className={styles.register_section__form}>
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

        <Divider>O crea una cuenta con tu email</Divider>
        <Form
          name='register'
          layout='vertical'
          autoComplete='off'
          className={styles.register_section__form}
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
          <Form.Item
            name='confirm'
            label='Confirma tu contraseña'
            dependencies={['password']}
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                },
              }),
            ]}
          >
            <Input.Password
              type='password'
              placeholder='Confirma tu contraseña'
              size='large'
            />
          </Form.Item>
          <Button type='primary' style={{ width: '100%', marginTop: '15px' }}>
            Registrarme
          </Button>
        </Form>
        <p>
          Ya tengo una cuenta
        </p>
      </div>
    </section>
  );
};

export default RegisterSection;
