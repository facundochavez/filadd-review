import Image from 'next/image';
import styles from './Header.module.scss';
import { Menu } from 'antd';
import CountrySelector from '../CountrySelector/CountrySelector';
import Button from '../Button/Button';

const Header = () => {
  const navItems = [
    {
      label: 'Inicio',
      key: 'home',
      
    },
    {
      label: 'Nosotros',
      key: 'about-us',
    },
    {
      label: 'Preguntas frecuentes',
      key: 'faq',
    },
    {
      label: 'Contacto',
      key: 'contact',
    },
    {
      label: 'Blog',
      key: 'blog',
    },
  ];

  //// COMPONENT
  return (
    <nav className={styles.header}>
      <div className={styles.header__max_width}>
        <header className={styles.logo_and_country}>
          <Image
            src='/filadd-logo.svg'
            alt='Filadd Logo'
            width={110}
            height={60}
            style={{ cursor: 'pointer' }}
          />
          <CountrySelector />
        </header>
        <main>
          <Menu
            mode='horizontal'
            items={navItems}
            defaultSelectedKeys={['home']}
          />
        </main>
        <aside className={styles.buttons}>
          <Button type='link' size='large' styles={{ color: '#2929FA' }}>
            Filadd Profesional{' '}
            <Image
              src='/icons/arrow-right.svg'
              alt='Arrow Right'
              width={10}
              height={10}
              style={{ marginLeft: 5 }}
            />{' '}
          </Button>
{/*           <Button >Registrarme</Button>
          <Button type='primary'>Ingresar</Button> */}
        </aside>
      </div>
    </nav>
  );
};

export default Header;
