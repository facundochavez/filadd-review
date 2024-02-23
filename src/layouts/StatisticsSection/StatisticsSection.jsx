import StatisticCard from '@/components/StatisticCard/StatisticCard';
import styles from './StatisticsSection.module.scss';
import { useTourContext } from '@/context/tour.context';

const StatisticsSection = () => {
  const { ref7 } = useTourContext();

  //// COMPONENT
  return (
    <section className={styles.statistics_section}>
      <ul ref={ref7}>
        <StatisticCard title='Facultades' value='78' />
        <StatisticCard title='Profesores' value='243' />
        <StatisticCard title='Cursos' value='325' />
        <StatisticCard title='Estudiantes' value='1.5' />
      </ul>
    </section>
  );
};

export default StatisticsSection;
