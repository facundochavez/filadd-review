import Image from 'next/image';
import styles from './Footer.module.scss';
import Button from '../Button/Button';
import { useModalContext } from '@/context/modal.context';
import { useTourContext } from '@/context/tour.context';

const Footer = () => {
  const { openModal } = useModalContext();
  const {ref13} = useTourContext();
  const sponsors = [
    {
      name: 'Y Combinator',
      logo: '/icons/logo-y-combinator.svg',
      href: 'https://www.ycombinator.com/',
      width: 200,
    },
    {
      name: 'Alaya',
      logo: '/icons/logo-alaya.svg',
      href: 'https://alaya-capital.com/',
      width: 160,
    },
    {
      name: 'Fide',
      logo: '/icons/logo-fide.svg',
      href: 'https://incubadoracordoba.org.ar/',
      width: 90,
    },
    {
      name: 'Incutex',
      logo: '/icons/logo-incutex.svg',
      href: 'https://www.incutex.com.ar/',
      width: 160,
    },
  ];

  const contactItems = [
    {
      name: 'Instagram',
      image: '/icons/icon-instagram.svg',
      href: 'https://www.instagram.com/filadd_web/',
    },
    {
      name: 'YouTube',
      image: '/icons/icon-youtube.svg',
      href: 'https://www.youtube.com/channel/UC6PoYEu79xbbUGSM0s38Esg',
    },
    {
      name: 'LinkedIn',
      image: '/icons/icon-linkedin.svg',
      href: 'https://www.linkedin.com/company/filadd/',
    },
    {
      name: 'WhatsApp',
      image: '/icons/icon-whatsapp.svg',
      href: 'https://api.whatsapp.com/send?phone=+5493512556089&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20...',
    },
  ];

  //// COMPONENT
  return (
    <footer className={styles.footer}>
      <header>
        <h3>Confían en nosotros:</h3>
        <div>
          {sponsors.map((sponsor) => (
            <a key={sponsor.name} href={sponsor.href} target='_blank'>
              <Image
                src={sponsor.logo}
                alt={'Logo de ' + sponsor.name}
                width={sponsor.width}
                height={80}
                style={{
                  paddingBottom: sponsor.name === 'Fide' ? '10px' : '0',
                  paddingTop: sponsor.name === 'Incutex' ? '10px' : '0',
                }}
              />
            </a>
          ))}
        </div>
      </header>
      <main ref={ref13}>
        <aside>
          <a href='#'>
            <Image
              src='/filadd-logo.svg'
              alt='Logo Filadd'
              fill
              objectFit='contain'
            />
          </a>

          <div>
            <Button
              type='transparent-white'
              style={{ width: '100%' }}
              onClick={() => openModal('login')}
            >
              Ingresar
            </Button>
            <Button
              type='primary-white'
              style={{ width: '100%' }}
              onClick={() => openModal('register')}
            >
              Registrarme
            </Button>
          </div>
        </aside>
        <div>
          <section>
            <h3>Explorar</h3>
            <ul>
              <li>Inicio</li>
              <li>Nosotros</li>
              <li>Preguntas frecuentes</li>
              <li>Contacto</li>
              <li>Blog</li>
              <li>Filadd Profesional</li>
            </ul>
          </section>
          <section>
            <h3>Legal</h3>
            <ul>
              <li>Términos y Condiciones</li>
              <li>Aviso de privacidad</li>
            </ul>
          </section>
          <section>
            <h3>Contacto</h3>
            <ul>
              <li>Independencia 1487, Córdoba, Argetina</li>
              <li>info@filadd.com</li>
              <li>+54 9 351 255-6089</li>
            </ul>
            <div>
              {contactItems.map((item) => (
                <a key={item.name} href={item.href} target='_blank'>
                  <Image
                    src={item.image}
                    alt={'Icono de ' + item.name}
                    width={35}
                    height={30}
                  />
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer>
        <p>
          Review por{' '}
          <a href='https://www.facundochavez.com/' target='_blank'>
            Facundo Chavez
          </a>
        </p>
      </footer>
    </footer>
  );
};

export default Footer;
