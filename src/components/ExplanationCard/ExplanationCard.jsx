import Button from '@/components/Button/Button';
import styles from './ExplanationCard.module.scss';
import Image from 'next/image';
import { useModalContext } from '@/context/modal.context';

const ExplanationCard = ({ item, isWhite }) => {
  const { openModal } = useModalContext();
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
            onClick={
              item.cta === 'Crear una cuenta ahora'
                ? () => openModal('register')
                : null
            }
          >
            {item.cta}
            {item.withArrow && (
              <Image
                src='/icons/arrow-right.svg'
                alt='Arrow Right'
                width={10}
                height={10}
                style={{
                  marginLeft: 8,
                  filter: !isWhite ? 'brightness(10)' : null,
                }}
              />
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ExplanationCard;
