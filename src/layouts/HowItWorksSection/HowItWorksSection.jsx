import ExplanationCard from '@/components/ExplanationCard/ExplanationCard';
import styles from './HowItWorksSection.module.scss';
import Image from 'next/image';
import { useTourContext } from '@/context/tour.context';

const HowItWorksSection = () => {
  const { ref8, ref9, ref10 } = useTourContext();

  const explanationItems = [
    {
      title: 'Comienza gratis',
      description: (
        <p>
          Crea una cuenta y encuentra rápidamente el material de estudio de tu
          carrera. Nuestra plataforma cuenta con más de 50 millones de archivos
          de todas las universidades del país.
        </p>
      ),
      cta: 'Crear una cuenta ahora',
    },
    {
      title: 'Conéctate',
      description: (
        <p>
          Sigue a otros estudiantes y a referentes de tu carrera para mantenerte
          al tanto de su contenido compartido. Te sorprenderá saber cuántas
          personas que conoces ya están acá.
        </p>
      ),
    },
    {
      title: 'Enriquece a la comunidad',
      description: (
        <p>
          Colabora con los demás subiendo tus propios archivos. También podrás
          valorar otros documentos y reportar archivos inapropiados. <br />{' '}
          <br /> ¡Completa tareas para acceder a Premium por 10 días de forma
          gratuita!
        </p>
      ),
      cta: 'Subir archivos',
      withArrow: true,
    },
    {
      title: 'Hazte Premium',
      description: (
        <p>
          Con los planes pagos podrás acceder de forma ilimitada a los
          documentos mejor valorados y contarás con nuestra asistencia
          personalizada.
        </p>
      ),
      cta: 'Ver planes',
      withArrow: true,
    },
    {
      title: 'Accede a la Academia',
      description: (
        <p>
          Nuestros cursos virtuales están creados según los programas de estudio
          específicos de cada facultad. Podrás acceder a ellos* desde cualquier
          lugar, incluso desde tu móvil con <a>nuestra aplicación.</a> <br />{' '}
          <br />
          Además, tendrás contacto directo con tu profe vía WhatsApp y recibirás
          un resumen en PDF especialmente diseñado para aprobar la materia.
        </p>
      ),
      cta: 'Ir a la Academia',
      withArrow: true,
    },
  ];

  //// COMPONENT
  return (
    <section className={styles.how_it_works_section}>
      <h2 ref={ref8}>Cómo funciona Filadd</h2>
      <ul className={styles.how_it_works_section__cards}>
        <li ref={ref9}>
          <ExplanationCard item={explanationItems[0]} />
          <picture style={{ minWidth: '40%' }}>
            <Image
              src='/images/explanation-image1.jpg'
              alt='Illustration'
              fill
              objectFit='cover'
            />
          </picture>
        </li>
        <li>
          <ExplanationCard item={explanationItems[1]} isWhite />
        </li>
        <li>
          <picture style={{ minWidth: '250px' }}>
            <Image
              src='/images/explanation-image3.jpg'
              alt='Illustration'
              fill
              objectFit='cover'
              style={{}}
            />
          </picture>
          <ExplanationCard item={explanationItems[2]} />
        </li>
        <li>
          <ExplanationCard item={explanationItems[3]} isWhite />
          <picture style={{ minWidth: '40%' }}>
            <Image
              src='/images/explanation-image4.jpg'
              alt='Illustration'
              fill
              objectFit='cover'
            />
          </picture>
        </li>
        <li>
          <ExplanationCard item={explanationItems[4]} />
        </li>
        <li ref={ref10}>
          <picture style={{ minWidth: '50%', minHeight: '300px' }}>
            <Image
              src='/images/explanation-image5.jpg'
              alt='Illustration'
              fill
              objectFit='cover'
            />
          </picture>
          <p className={styles.how_it_works_section__asterisk}>
            * Por defecto tienes desbloqueados los primeros capítulos de todos
            los cursos. Con tu cuenta Premium tendrás importantes descuentos
            para acceder a los cursos completos.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default HowItWorksSection;
