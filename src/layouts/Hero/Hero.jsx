import Button from '@/components/Button/Button';
import styles from './Hero.module.scss';
import { useModalContext } from '@/context/modal.context';

const Hero = () => {
  const { openModal } = useModalContext();
  //// COMPONENT
  return (
    <section className={styles.hero}>
      <div className={styles.hero__background} />
      <main>
        <h1>Todo lo que necesitas para aprobar tus materias</h1>
        <p>
          Encuentra apuntes, exámenes y clases virtuales de tu propia
          universidad.
        </p>
      </main>
      <footer>
        <Button onClick={() => openModal('register')}>Registrarme</Button>
        <Button
          type='primary'
          style={{ paddingLeft: '35px', paddingRight: '35px' }}
          onClick={() => openModal('login')}
        >
          Ingresar
        </Button>
      </footer>
    </section>
  );
};

export default Hero;
