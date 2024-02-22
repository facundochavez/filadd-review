import Image from 'next/image';
import styles from './Footer.module.scss';
import Button from '@/Components/Button/Button';

const Footer = () => {
  const sponsors = [
    {
      name: 'Y Combinator',
      logo: '/icons/logo-y-combinator.svg',
      width: 200,
    },
    {
      name: 'Alaya',
      logo: '/icons/logo-alaya.svg',
      width: 160,
    },
    {
      name: 'Fide',
      logo: '/icons/logo-fide.svg',
      width: 90,
    },
    {
      name: 'Incutex',
      logo: '/icons/logo-incutex.svg',
      width: 160,
    },
  ];

  const contactItems = [
    {
      name: 'Instagram',
      image: '/icons/icon-instagram.svg',
    },
    {
      name: 'YouTube',
      image: '/icons/icon-youtube.svg',
    },
    {
      name: 'LinkedIn',
      image: '/icons/icon-linkedin.svg',
    },
    {
      name: 'WhatsApp',
      image: '/icons/icon-whatsapp.svg',
    },
  ];

  //// COMPONENT
  return (
    <footer className={styles.footer}>
      <header>
        <h3>Confían en nosotros:</h3>
        <picture>
          {sponsors.map((sponsor) => (
            <Image
              key={sponsor.name}
              src={sponsor.logo}
              alt={'Logo de ' + sponsor.name}
              width={sponsor.width}
              height={80}
              style={{
                paddingBottom: sponsor.name === 'Fide' ? '10px' : '0',
                paddingTop: sponsor.name === 'Incutex' ? '10px' : '0',
              }}
            />
          ))}
        </picture>
      </header>
      <main>
        <aside>
          <picture>
            <Image
              src='/filadd-logo.svg'
              alt='Logo Filadd'
              fill
              objectFit='contain'
            />
          </picture>
          <div>
            <Button type='transparent-white' style={{ width: '100%' }}>
              Ingresar
            </Button>
            <Button type='primary-white' style={{ width: '100%' }}>
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
            <picture>
              {contactItems.map((item) => (
                <Image
                  key={item.name}
                  src={item.image}
                  alt={'Icono de ' + item.name}
                  width={35}
                  height={30}
                />
              ))}
            </picture>
          </section>
        </div>
      </main>
      <footer>
        <p>
         {/*  © Copyright 2024 -  */}Review por <a href='https://www.facundochavez.com/' target='_blank' >Facundo Chavez</a>
        </p>
      </footer>
    </footer>
  );
};

export default Footer;
