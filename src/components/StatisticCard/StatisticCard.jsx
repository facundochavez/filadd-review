import styles from './StatisticCard.module.scss';
import CountUp from 'react-countup';

const StatisticsCard = ({ title, value }) => {
  //// COMPONENT
  return (
    <div className={styles.statistics_card}>
      <CountUp
        end={value}
        duration={1}
        enableScrollSpy={true}
        scrollSpyOnce={true}
        prefix={title === 'Estudiantes' ? '+' : ''}
        suffix={title === 'Estudiantes' ? 'M' : ''}
        decimals={title === 'Estudiantes' ? 1 : 0}
        decimal='.'
      />
      <p>{title}</p>
    </div>
  );
};

export default StatisticsCard;
