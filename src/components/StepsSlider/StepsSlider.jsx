import styles from './StepsSlider.module.scss';
import { useStepsContext } from '@/context/steps.context';
import universities from '@/data/universities.data.json';
import careers from '@/data/careers.data.json';
import subjects from '@/data/subjects.data.json';
import Image from 'next/image';

const StepsSlider = () => {
  const { selectedStep } = useStepsContext();

  //// COMPONENT
  return (
    <main className={styles.steps_slider_container}>
      <div
        className={styles.steps_slider_container__slider}
        style={{ transform: `translateX(-${((selectedStep - 1) * 100) / 3}%)` }}
      >
        <UniversitiesSlide />
        <CarrersSlide />
        <SubjectsSlide />
      </div>
    </main>
  );
};

const UniversitiesSlide = () => {
  const { selectedStep, setSelectedUniversity, changeStep } = useStepsContext();

  const handleClick = (university) => {
    changeStep(2);
    setSelectedUniversity(university);
  };

  //// COMPONENT
  return (
    <ul
      className={styles.slide}
      style={{
        opacity: selectedStep === 1 ? 1 : 0,
        pointerEvents: selectedStep === 1 ? 'auto' : 'none',
      }}
    >
      {universities.map((university) => (
        <OptionButton
          key={university.id}
          mainText={university.abbreviation}
          subText={university.name}
          disbleFocus={selectedStep !== 1}
          handleClick={() => handleClick(university.abbreviation)}
        />
      ))}
    </ul>
  );
};

const CarrersSlide = () => {
  const { selectedStep, selectedUniversity, changeStep } = useStepsContext();

  const handleClick = () => {
    changeStep(3);
  };
  //// COMPONENT
  return (
    <ul
      className={styles.slide}
      style={{
        opacity: selectedStep === 2 ? 1 : 0,
        pointerEvents: selectedStep === 2 ? 'auto' : 'none',
      }}
    >
      {careers.map((career) => (
        <OptionButton
          key={career.id}
          mainText={`${career.name} (${selectedUniversity})`}
          disbleFocus={selectedStep !== 2}
          handleClick={() => handleClick()}
        />
      ))}
    </ul>
  );
};

const SubjectsSlide = () => {
  const { selectedStep } = useStepsContext();
  //// COMPONENT
  return (
    <ul
      className={styles.slide}
      style={{
        opacity: selectedStep === 3 ? 1 : 0,
        pointerEvents: selectedStep === 3 ? 'auto' : 'none',
      }}
    >
      {subjects.map((group) => {
        return (
          <ul key={group.id}>
            <div className={styles.group_name}>
              <p>{group.name}</p>
            </div>
            {group.subjects.map((subject) => (
              <OptionButton
                key={subject.id}
                subText={subject.name}
                disbleFocus={selectedStep !== 3}
              />
            ))}
          </ul>
        );
      })}
    </ul>
  );
};

const OptionButton = ({ mainText, subText, disbleFocus, handleClick }) => {
  //// COMPONENT
  return (
    <button
      className={styles.option_button}
      tabindex={disbleFocus ? -1 : 'unset'}
      onClick={handleClick}
    >
      <div>
        {mainText && (
          <p style={{ minWidth: !subText ? null : 'fit-content' }}>
            {mainText}
          </p>
        )}
        {subText && (
          <span style={{ marginLeft: mainText && '10px' }}>{subText}</span>
        )}
      </div>

      <Image
        src='/icons/arrow-right.svg'
        alt='Arrow Right'
        width={14}
        height={14}
        style={{ filter: 'brightness(10)' }}
      />
    </button>
  );
};

export default StepsSlider;
