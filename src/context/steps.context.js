import { createContext, useContext, useEffect, useRef, useState } from 'react';
import nonFilteredUniversities from '@/data/universities.data.json';
import nonFilteredCareers from '@/data/careers.data.json';
import nonFilteredSubjects from '@/data/subjects.data.json';
import Normalize from '@/Services/Normalize';

export const StepsContext = createContext();

const StepsProvider = ({ children }) => {
  const sectionRef = useRef();
  const [sliderHeight, setSliderHeight] = useState('unset');
  const [selectedStep, setSelectedStep] = useState(1);
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedUniversityAbbreviation, setSelectedUniversityAbbreviation] =
    useState('');
  const [selectedCareer, setSelectedCareer] = useState('');

  const [step1ShowAll, setStep1ShowAll] = useState(false);
  const [step2ShowAll, setStep2ShowAll] = useState(false);
  const [step3ShowAll, setStep3ShowAll] = useState(false);

  const inputRef = useRef();
  const [inputValue, setInputValue] = useState('');
  const [universities, setUniversities] = useState(nonFilteredUniversities);
  const [careers, setCareers] = useState(nonFilteredCareers);
  const [subjects, setSubjects] = useState(nonFilteredSubjects);

  // HANDLING STEPS
  const changeStep = (step) => {
    setStep1ShowAll(false);
    setStep2ShowAll(false);
    setStep3ShowAll(false);

    setSelectedStep(step);
    setInputValue('');
    inputRef.current.focus({ preventScroll: true });

    setTimeout(() => {
      if (sectionRef.current) {
        const marginTop = window.innerWidth <= 900 ? 30 : 50;
        window.scrollTo({
          top: sectionRef.current.offsetTop + marginTop,
          behavior: 'smooth',
        });
      }
    }, 10);
  };

  // HANDLING INPUT SEARCH
  useEffect(() => {
    setStep1ShowAll(false);
    setStep2ShowAll(false);
    setStep3ShowAll(false);
    const normalizedInputValue = Normalize(inputValue);
    if (normalizedInputValue !== '') {
      if (selectedStep === 1) {
        const filteredUniversities = nonFilteredUniversities.filter(
          (university) =>
            Normalize(university.name).includes(normalizedInputValue) ||
            Normalize(university.abbreviation).includes(normalizedInputValue)
        );
        setUniversities(filteredUniversities);
      } else if (selectedStep === 2) {
        const filteredCareers = nonFilteredCareers.filter((career) =>
          Normalize(career.name).includes(normalizedInputValue)
        );
        setCareers(filteredCareers);
      } else {
        const filteredSubjects = nonFilteredSubjects
          .map((group) => {
            const filteredGroup = {
              ...group,
              subjects: group.subjects.filter((subject) =>
                Normalize(subject.name).includes(normalizedInputValue)
              ),
            };

            return filteredGroup.subjects.length > 0 ? filteredGroup : null;
          })
          .filter((group) => group !== null);

        setSubjects(filteredSubjects);
      }
    } else {
      setUniversities(nonFilteredUniversities);
      setCareers(nonFilteredCareers);
      setSubjects(nonFilteredSubjects);
    }
  }, [inputValue]);

  //// COMPONENT
  return (
    <StepsContext.Provider
      value={{
        sectionRef,
        sliderHeight,
        setSliderHeight,        
        selectedStep,
        setSelectedStep,
        selectedUniversity,
        setSelectedUniversity,
        selectedUniversityAbbreviation,
        setSelectedUniversityAbbreviation,
        selectedCareer,
        setSelectedCareer,
        step1ShowAll,
        setStep1ShowAll,
        step2ShowAll,
        setStep2ShowAll,
        step3ShowAll,
        setStep3ShowAll,
        inputRef,
        inputValue,
        setInputValue,
        changeStep,
        universities,
        careers,
        subjects,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
};

export const useStepsContext = () => {
  const context = useContext(StepsContext);
  if (context === undefined) {
    throw new Error('StepsContext must be used within a StepsProvider');
  }
  return context;
};

export default StepsProvider;
