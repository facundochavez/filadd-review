import TestimonyCard from '@/components/TestimonyCard/TestimonyCard';
import styles from './TestimoniesSection.module.scss';
import { useTourContext } from '@/context/tour.context';

const TestimoniesSection = () => {
  const { ref11 } = useTourContext();

  const testimonies = [
    {
      id: 'sofia',
      image: '/images/profile-sofia.jpg',
      name: 'Sofía Vocos',
      career: 'Psicología (UNLP)',
      text: 'Me encantó esta plataforma!! La variedad de documentos que hay para estudiar es increíble y la calidad es muy alta. Si sos estudiante universitario, no podés no probar esta herramienta!',
    },
    {
      id: 'lautaro',
      image: '/images/profile-lautaro.jpg',
      name: 'Lautaro Lapenta',
      career: 'Ingeniería Civil (UNSa)',
      text: 'Filadd te amo para siempre. 100% recomendable.',
    },
    {
      id: 'gonzalo',
      image: '/images/profile-gonzalo.jpg',
      name: 'Gonzalo Tarín',
      career: 'Abogacía (UNL)',
      text: 'Me acaba de llegar un regalo de Filadd, un PDF con tips para el estudio. Aaah gracias solcito de Filadd!!',
    },
    {
      id: 'sol',
      image: '/images/profile-sol.jpg',
      name: 'Sol Heredia',
      career: 'Medicina (UBA)',
      text: 'AMÉ FILADD!! La verdad me salvó en una banda de materias y muchos de mis amigos lo empezaron a usar. Lo súper recomiendo!!',
    },
    {
      id: 'rodrigo',
      image: '/images/profile-rodrigo.jpg',
      name: 'Rodrigo Polini',
      career: 'Economía (UNC)',
      text: 'La cantidad de material que hay en la plataforma es una locura, posta muy zarpado. Los documentos están piolas y están re bien organizados. Me sirvió MUCHÍSIMO!!',
    },
    {
      id: 'melisa',
      image: '/images/profile-melisa.jpg',
      name: 'Melisa Jurado',
      career: 'Arquitectura (UCC)',
      text: 'Filadd es una aplicación que te salva la vida. Increíble el contenido que tiene.',
    },
  ];
  //// COMPONENT
  return (
    <section className={styles.testimonies_section}>
      <div className={styles.testimonies_section__max_width}>
        <h2 ref={ref11}>La comunidad te está esperando</h2>
        <p>
          Más del 90% de nuestros estudiantes dijo tener una experiencia
          increíble estudiando con Filadd y haber aprobado sus exámenes. ¡Hoy
          puedes sumarte a esta gran comunidad!
        </p>
        <ul>
          {testimonies.map((testimony, index) => (
            <TestimonyCard testimony={testimony} key={testimony.id} />
          ))}
        </ul>
        {/*         <footer>
          <Button>Unirme ahora</Button>
        </footer> */}
      </div>
    </section>
  );
};

export default TestimoniesSection;
