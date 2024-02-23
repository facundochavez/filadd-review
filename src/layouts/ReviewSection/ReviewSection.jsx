import Image from 'next/image';
import styles from './ReviewSection.module.scss';
import Button from '@/components/Button/Button';
import { useTourContext } from '@/context/tour.context';

const ReviewSection = () => {
  const { startTour } = useTourContext();
  const { ref14 } = useTourContext();
  const contactItems = [
    {
      name: 'LinkedIn',
      image: '/icons/icon-linkedin.svg',
      href: 'https://www.linkedin.com/in/facundo-chavez-dev/',
    },
    {
      name: 'WhatsApp',
      image: '/icons/icon-whatsapp.svg',
      href: 'https://api.whatsapp.com/send?phone=543516820080',
    },
  ];
  //// COMPONENT
  return (
    <section className={styles.review_section}>
      <div className={styles.review_section__max_width}>
        <picture>
          <Image
            src='/images/profile-facu.jpg'
            alt='Foto perfil Facu'
            fill
            objectFit='cover'
          />
        </picture>
        <div>
          <p>
            ¡Hola Filadd!
            <br />
            <br />
            Mi nombre es Facundo Chavez. Soy Desarrollador Frontend, Diseñador
            UX/UI y Consultor de Marca.
            <br />
            <br />
            Hace poco me enteré de ustedes y que buscaban nuevo personal. Me
            encantó la idea de la <span>startup</span>, pero como la búsqueda
            fue pausada y yo tenía tanto para contarles, decidí hacer este{' '}
            <span>review</span> volcando un poco de mis ideas.
            <br />
            <br />
            Hice este rediseño con el objetivo principal de aumentar las
            conversiones; incluso algunas decisiones de estilo (uno que busca
            instalar un perfil más serio) fueron tomadas con ese enfoque. Tengo
            muchas más ideas para compartirles, tanto para las demás páginas
            como para la aplicación web, la aplicación movíl e incluso sobre
            formas de promoción e incentivos para los estudiantes.
            <br />
            <br />
            ¡Espero que les guste! Aquí les dejo un <span>tour</span> por las
            consideraciones que tuve para hacer este rediseño:
          </p>
          <footer>
            <div>
              <Button
                type='primary-white'
                style={{ filter: 'grayscale()' }}
                onClick={() => startTour()}
              >
                Iniciar tour
              </Button>
              <a
                href='https://www.facundochavez.com/'
                target='_blank'
                ref={ref14}
              >
                <Button type='transparent-white'>
                  Mi portfolio{' '}
                  <Image
                    src='/icons/arrow-right.svg'
                    alt='Arrow Right'
                    width={10}
                    height={10}
                    style={{ marginLeft: 5, filter: 'brightness(10)' }}
                  />
                </Button>
              </a>
            </div>
            <aside>
              {contactItems.map((item) => (
                <a key={item.name} href={item.href} target='_blank'>
                  <Image
                    src={item.image}
                    alt={'Icono de ' + item.name}
                    width={36}
                    height={36}
                  />
                </a>
              ))}
            </aside>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
