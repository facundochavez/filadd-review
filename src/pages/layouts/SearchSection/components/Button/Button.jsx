import styles from './Button.module.scss';
import { Button as AntButton } from 'antd';

const Button = (props) => {
  // SE REDIRECCIONA EL TIPO DE BOTÓN DADO A LOS TIPOS PROPIOS DE ANT DESIGN
  const types = {
    primary: 'primary',
    'primary-white': 'primary',
    secondary: 'text',
    'primary-transparent': 'primary',
    'secondary-transparent': 'primary',
    link: 'link',
  };

  //COMPONENT
  return (
    <AntButton
      type={types[props.type]}
      className={`${styles.button} ${styles[props.type]}`}
      size='large'
      {...props}
    >
      {props.children}
    </AntButton>
  );
};

export default Button;
