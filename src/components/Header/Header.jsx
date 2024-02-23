import Image from 'next/image';
import styles from './Header.module.scss';
import { Menu, Drawer } from 'antd';
import CountrySelector from '../CountrySelector/CountrySelector';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { useModalContext } from '@/context/modal.context';
import { useStepsContext } from '@/context/steps.context';
import { useTourContext } from '@/context/tour.context';

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isShowButtons, setIsShowButtons] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { openModal } = useModalContext();
  const { sectionRef } = useStepsContext();
  const { isHeaderShow, setIsHeaderShow, ref0, ref2 } = useTourContext();

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
      setIsSideBarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= sectionRef.current.offsetTop - 100) {
        setIsHeaderShow(true);
      } else if (
        window.scrollY <=
          sectionRef.current.offsetTop + sectionRef.current.offsetHeight ||
        window.scrollY > lastScrollY
      ) {
        setIsHeaderShow(false);
      } else {
        setIsHeaderShow(true);
      }
      setLastScrollY(window.scrollY);

      if (window.scrollY >= sectionRef.current.offsetTop + 500) {
        setIsShowButtons(true);
      } else {
        setIsShowButtons(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  //// COMPONENT
  return (
    <nav
      className={styles.header}
      style={{ translate: isHeaderShow ? '0 0' : '0 -100%' }}
    >
      <div className={styles.header__max_width} ref={ref2}>
        <header className={styles.logo_and_country}>
          <Image
            ref={ref0}
            src='/filadd-logo.svg'
            alt='Filadd Logo'
            width={130}
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
          {isShowButtons ? (
            <>
              <Button
                style={{ marginLeft: '20px' }}
                onClick={() => openModal('register')}
              >
                Registrarme
              </Button>
              <Button type='primary' onClick={() => openModal('login')}>
                Ingresar
              </Button>
            </>
          ) : (
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
          )}
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
        open={isSideBarOpen}
        onClose={() => setIsSideBarOpen(false)}
        closable={false}
      >
        <Menu items={allNavItems} defaultSelectedKeys={['home']} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '20px',
          }}
        >
          <Button
            onClick={() => {
              setIsSideBarOpen(false);
              openModal('register');
            }}
            style={{ width: '100%' }}
          >
            Registrarme
          </Button>
          <Button
            type='primary'
            onClick={() => {
              setIsSideBarOpen(false);
              openModal('login');
            }}
            style={{ width: '100%' }}
          >
            Ingresar
          </Button>
        </div>
      </Drawer>
    </nav>
  );
};

export default Header;
