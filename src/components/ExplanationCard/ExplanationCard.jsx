import Button from '@/components/Button/Button';
import styles from './ExplanationCard.module.scss';

const ExplanationCard = ({ item, isWhite }) => {
  //// COMPONENT
  return (
    <div
      className={styles.explanation_card}
      style={
        isWhite
          ? { backgroundColor: 'white', color: 'var(--color-primary)' }
          : null
      }
    >
      <h3>{item.title}</h3>
      {item.description ? item.description : null}
      {item.cta && (
        <div className={styles.explanation_card__cta}>
          <Button
            type={isWhite ? 'transparent-blue' : 'transparent-white'}
          >
            {item.cta}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ExplanationCard;
