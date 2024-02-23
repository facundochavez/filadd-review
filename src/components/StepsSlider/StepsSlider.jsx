import styles from './StepsSlider.module.scss';
import { useStepsContext } from '@/context/steps.context';
import Image from 'next/image';
import Button from '../Button/Button';
import { useEffect, useRef, useState } from 'react';
import { useTourContext } from '@/context/tour.context';

const StepsSlider = () => {
  const { selectedStep, sliderHeight } = useStepsContext();
  const {ref6} = useTourContext();
  const [optionButtonHeight, setOptionButtonHeight] = useState(0);

  useEffect(() => {
    const handleOptionButtonHeight = () => {
      const newOptionButtonHeight = window.innerWidth <= 900 ? 47 : window.innerWidth <= 900 ? 53 : 60;
      setOptionButtonHeight(newOptionButtonHeight);
    };
    handleOptionButtonHeight();
    window.addEventListener('resize', handleOptionButtonHeight);
  }, []);

  //// COMPONENT
  return (
    <main className={styles.steps_slider_container} ref={ref6}>
      <div
        className={styles.steps_slider_container__slider}
        style={{
          transform: `translateX(-${((selectedStep - 1) * 100) / 3}%)`,
          height: sliderHeight,
        }}
      >
        <UniversitiesSlide optionButtonHeight={optionButtonHeight} />
        <CarrersSlide optionButtonHeight={optionButtonHeight} />
        <SubjectsSlide optionButtonHeight={optionButtonHeight} />
      </div>
    </main>
  );
};

const UniversitiesSlide = ({ optionButtonHeight }) => {
  const {
    selectedStep,
    setSelectedUniversity,
    setSelectedUniversityAbbreviation,
    changeStep,
    step1ShowAll,
    setStep1ShowAll,
    universities,
    setSliderHeight,
  } = useStepsContext();

  const minHeight =
    optionButtonHeight * Math.max(5, Math.min(universities.length, 10));
  const maxHeight = optionButtonHeight * universities.length;

  const handleClick = (university) => {
    setSelectedUniversity(university.name);
    setSelectedUniversityAbbreviation(university.abbreviation);
    changeStep(2);
  };

  useEffect(() => {
    if (universities.length < 10) {
      setSliderHeight(optionButtonHeight * 10);
      setTimeout(() => {
        setSliderHeight(minHeight);
      });
    } else {
      setSliderHeight('unset');
    }
  }, [minHeight]);

  //// COMPONENT
  return (
    <div
      className={styles.slide}
      style={{
        opacity: selectedStep === 1 ? 1 : 0,
        pointerEvents: selectedStep === 1 ? 'auto' : 'none',
      }}
    >
      <ul
        className={styles.slide__list}
        style={{ height: step1ShowAll ? `${maxHeight}px` : `${minHeight}px` }}
      >
        {universities.map((university) => (
          <OptionButton
            key={university.id}
            mainText={university.abbreviation}
            subText={university.name}
            disbleFocus={selectedStep !== 1}
            handleClick={() => handleClick(university)}
          />
        ))}
        {universities.length === 0 && (
          <OopsMessage buttonMessage='Sugerir nueva universidad' />
        )}
      </ul>
      {universities.length > 10 && (
        <ShowAllButton
          stepShowAll={step1ShowAll}
          handleClick={() => {
            setStep1ShowAll(!step1ShowAll);
          }}
        />
      )}
    </div>
  );
};

const CarrersSlide = ({ optionButtonHeight }) => {
  const {
    selectedStep,
    selectedUniversityAbbreviation,
    setSelectedCareer,
    changeStep,
    step2ShowAll,
    setStep2ShowAll,
    careers,
    setSliderHeight,
  } = useStepsContext();

  const minHeight =
    optionButtonHeight * Math.max(5, Math.min(careers.length, 10));
  const maxHeight = optionButtonHeight * careers.length;

  useEffect(() => {
    if (careers.length < 10) {
      setSliderHeight(optionButtonHeight * 10);
      setTimeout(() => {
        setSliderHeight(minHeight);
      });
    } else {
      setSliderHeight('unset');
    }
  }, [minHeight]);

  const handleClick = (career) => {
    setSelectedCareer(career.name);
    changeStep(3);
  };
  //// COMPONENT
  return (
    <div
      className={styles.slide}
      style={{
        opacity: selectedStep === 2 ? 1 : 0,
        pointerEvents: selectedStep === 2 ? 'auto' : 'none',
      }}
    >
      <ul
        className={styles.slide__list}
        style={{ height: step2ShowAll ? `${maxHeight}px` : `${minHeight}px` }}
      >
        {careers.map((career) => (
          <li>
            <OptionButton
              key={career.id}
              mainText={`${career.name} (${selectedUniversityAbbreviation})`}
              disbleFocus={selectedStep !== 2}
              handleClick={() => handleClick(career)}
            />
          </li>
        ))}
        {careers.length === 0 && (
          <OopsMessage buttonMessage='Sugerir nueva carrera' />
        )}
      </ul>
      {careers.length > 10 && (
        <ShowAllButton
          stepShowAll={step2ShowAll}
          handleClick={() => {
            setStep2ShowAll(!step2ShowAll);
          }}
        />
      )}
    </div>
  );
};

const SubjectsSlide = ({ optionButtonHeight }) => {
  const {
    selectedStep,
    step3ShowAll,
    setStep3ShowAll,
    subjects,
    setSliderHeight,
  } = useStepsContext();

  let length = 0;
  subjects.forEach((group) => {
    length += 1 + group.subjects.length;
  });

  const minHeight = optionButtonHeight * Math.max(5, Math.min(length, 10));
  const maxHeight = optionButtonHeight * length;

  useEffect(() => {
    if (length < 10) {
      setSliderHeight(optionButtonHeight * 10);
      setTimeout(() => {
        setSliderHeight(minHeight);
      });
    } else {
      setSliderHeight('unset');
    }
  }, [minHeight]);

  //// COMPONENT
  return (
    <div
      className={styles.slide}
      style={{
        opacity: selectedStep === 3 ? 1 : 0,
        pointerEvents: selectedStep === 3 ? 'auto' : 'none',
      }}
    >
      <ul
        className={styles.slide__list}
        style={{ height: step3ShowAll ? `${maxHeight}px` : `${minHeight}px` }}
      >
        {subjects.map((group) => {
          return (
            <li key={group.id}>
              <ul>
                <div className={styles.slide__list__group_name}>
                  <p>{group.name}</p>
                </div>
                {group.subjects.map((subject) => (
                  <li>
                    <OptionButton
                      key={subject.id}
                      subText={subject.name}
                      disb
                      leFocus={selectedStep !== 3}
                    />
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
        {length === 0 && <OopsMessage buttonMessage='Sugerir nueva materia' />}
      </ul>
      {length > 10 && (
        <ShowAllButton
          stepShowAll={step3ShowAll}
          handleClick={() => {
            setStep3ShowAll(!step3ShowAll);
          }}
        />
      )}
    </div>
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

const ShowAllButton = ({ stepShowAll, handleClick }) => {
  const { sectionRef } = useStepsContext();

  //// COMPONENT
  return (
    <Button
      type='transparent-white'
      style={{ width: 'fit-content' }}
      onClick={() => {
        if (stepShowAll) {
          window.scrollTo({
            top: sectionRef.current.offsetTop,
            behavior: 'smooth',
          });
        }
        setTimeout(() => {
          handleClick();
        }, 50)
      }}
    >
      {stepShowAll ? 'Ver menos' : 'Ver todo'}
      <Image
        src='/icons/arrow-down.svg'
        width={13}
        height={13}
        style={{
          marginLeft: '10px',
          filter: 'brightness(10)',
          transform: stepShowAll ? 'rotate(180deg)' : null,
        }}
      />
    </Button>
  );
};

const OopsMessage = ({ buttonMessage }) => {
  return (
    <div className={styles.oops_message}>
      <p>¡Ups! Nada por aquí</p>
      <Button type='transparent-white' style={{ width: 'fit-content' }}>
        {buttonMessage}
      </Button>
    </div>
  );
};

export default StepsSlider;
