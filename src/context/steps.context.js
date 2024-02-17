import { createContext, useContext, useRef, useState } from 'react';

export const StepsContext = createContext();

const StepsProvider = ({ children }) => {
  const [selectedStep, setSelectedStep] = useState(1);
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [step1ShowAll, setStep1ShowAll] = useState(false);
  const [step2ShowAll, setStep2ShowAll] = useState(false);
  const [step3ShowAll, setStep3ShowAll] = useState(false);
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState('');

  const steps = [
    {
      key: '1',
      label: 'Universidad',
      icon: '/icons/icon-university.svg',
      question: '¿Dónde estás estudiando?',
      placeHolder: 'Universidad Nacional de Salta',
    },
    {
      key: '2',
      label: 'Carrera',
      icon: '/icons/icon-career.svg',
      question: '¿Qué estás estudiando?',
      placeHolder: 'Ingeniería Industrial',
    },
    {
      key: '3',
      label: 'Materia',
      icon: '/icons/icon-subject.svg',
      question: '¿Y qué materia?',
      placeHolder: 'Economía II',
    },
  ];

  const changeStep = (step) => {
    setStep1ShowAll(false);
    setStep2ShowAll(false);
    setStep3ShowAll(false);
    setSelectedStep(step);
    setInputValue('');
    inputRef.current.value = inputValue;
    inputRef.current.focus();
  }

  //// COMPONENT
  return (
    <StepsContext.Provider
      value={{
        selectedStep,
        setSelectedStep,
        selectedUniversity,
        setSelectedUniversity,
        step1ShowAll,
        setStep1ShowAll,
        step2ShowAll,
        setStep2ShowAll,
        step3ShowAll,
        setStep3ShowAll,
        steps,
        changeStep,
        inputRef,
        inputValue,
        setInputValue,
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
