import styles from './StepsSlider.module.scss';
import { useStepsContext } from '@/context/steps.context';
import universities from '@/data/universities.data.json';
import careers from '@/data/careers.data.json';
import subjects from '@/data/subjects.data.json';
import Image from 'next/image';

const StepsSlider = () => {
  const { steps, selectedStep } = useStepsContext();

  //// COMPONENT
  return (
    <main
      className={styles.steps_slider}
      style={{
        justifyContent:
          selectedStep === 1
            ? 'flex-start'
            : selectedStep === 2
            ? 'center'
            : 'flex-end',
      }}
    >
      <UniversitiesSlide />
      <CarrersSlide />
      <SubjectsSlide />
    </main>
  );
};

const UniversitiesSlide = () => {
  //// COMPONENT
  return (
    <ul className={styles.slide}>
      {universities.map((university) => (
        <OptionButton
          key={university.id}
          mainText={university.abbreviation}
          subText={university.name}
        />
      ))}
    </ul>
  );
};

const CarrersSlide = () => {
  //// COMPONENT
  return (
    <ul className={styles.slide}>
      {careers.map((career) => (
        <OptionButton key={career.id} mainText={career.name} />
      ))}
    </ul>
  );
};

const SubjectsSlide = () => {
  //// COMPONENT
  return (
    <ul className={styles.slide}>
      {subjects.map((group) => {
        return (
          <ul key={group.id}>
            <h2 className={styles.group_name}>{group.name}</h2>
            {group.subjects.map((subject) => (
              <OptionButton key={subject.id} subText={subject.name} />
            ))}
          </ul>
        );
      })}
    </ul>
  );
};

const OptionButton = ({ mainText, subText }) => {
  //// COMPONENT
  return (
    <button className={styles.option_button}>
      <h2>
        {mainText ? mainText : null}{' '}
        <span /* style={{ marginLeft: mainText ? '5px' : null }}  */>
          {' '}
          {subText ? subText : null}{' '}
        </span>{' '}
      </h2>
      <Image
        src='/icons/arrow-right.svg'
        alt='Arrow Right'
        width={15}
        height={15}
        style={{ filter : 'brightness(10)' }}
      />
    </button>
  );
};

export default StepsSlider;
