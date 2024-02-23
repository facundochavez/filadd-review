import Image from 'next/image';
import styles from './Header.module.scss';
import { Menu, Drawer } from 'antd';
import CountrySelector from '../CountrySelector/CountrySelector';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
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
  const allNavItems = [
    ...navItems,
    { label: 'Filad Profesional', key: 'profesional' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (isSideBarOpen) {
        setIsSideBarOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[])

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
            style={{ flex: 'auto', justifyContent: 'flex-end' }}
          />
        </main>
        <aside className={styles.buttons}>
          {/*           <Button type='link' size='large' styles={{ color: '#2929FA' }}>
            Filadd Profesional{' '}
            <Image
              src='/icons/arrow-right.svg'
              alt='Arrow Right'
              width={10}
              height={10}
              style={{ marginLeft: 5 }}
            />{' '}
          </Button> */}
          <Button style={{ marginLeft: '20px' }}>Registrarme</Button>
          <Button type='primary'>Ingresar</Button>
        </aside>
        <picture onClick={() => setIsSideBarOpen(true)}>
          <Image
            src='/icons/icon-burguer.svg'
            alt='Icono de hamburguesa'
            width={28}
            height={28}
          />
        </picture>
      </div>

      <Drawer
        width={720}
        open={isSideBarOpen}
        onClose={() => setIsSideBarOpen(false)}
        size='small'
        closable={false}
        closeIcon={<Image src='/icons/icon-close.svg' alt='Icono de cerrar' width={15} height={15} />
      }
      >
        <Menu items={allNavItems} defaultSelectedKeys={['home']} />
      </Drawer>
    </nav>
  );
};

export default Header;
