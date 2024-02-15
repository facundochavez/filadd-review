import Button from '@/components/Button/Button';
import styles from './Hero.module.scss';

const Hero = () => {
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
        <Button /* type='secondary' */ >Registrarme</Button>
        <Button
          type='primary'
          style={{ paddingLeft: '35px', paddingRight: '35px' }}
        >
          Ingresar
        </Button>
      </footer>
    </section>
  );
};

export default Hero;
