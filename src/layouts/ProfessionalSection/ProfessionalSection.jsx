import Image from 'next/image';
import styles from './ProfessionalSection.module.scss';
import Button from '@/components/Button/Button';

const ProfessionalSection = () => {
  //// COMPONENT
  return (
    <section className={styles.professional_section}>
      <picture>
        <Image
          src='/filadd-profesional-logo.svg'
          alt='logo Filas Profesional'
          fill
        />
      </picture>
      <h2>
        ¿Estás terminando tu carrera universitaria y pensando en tu futuro
        profesional?
      </h2>
      <p>
        Capacítate con clases en vivo certificadas y adquiere competencias
        reales para el mundo laboral.
      </p>
      <Button type='transparent-white'>Más información</Button>
    </section>
  );
};

export default ProfessionalSection;
