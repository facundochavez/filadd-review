import Image from 'next/image';
import styles from './TestimonyCard.module.scss';

const TestimonyCard = ({ testimony }) => {
  //// COMPONENT
  return (
    <div className={styles.testimony_card}>
      <header>
        <picture className={styles.testimony_card__image}>
          <Image
            src={testimony.image}
            alt={testimony.name}
            fill
            objectFit='cover'
          />
        </picture>
        <div className={styles.testimony_card__titles}>
          <h3>{testimony.name}</h3>
          <span>{testimony.career}</span>
        </div>
      </header>
      <p>&quot;{testimony.text}&quot;</p>
    </div>
  );
};

export default TestimonyCard;
