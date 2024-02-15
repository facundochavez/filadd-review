import { createContext, useContext, useState } from 'react';

export const StepsContext = createContext();

const StepsProvider = ({ children }) => {
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
  const [selectedStep, setSelectedStep] = useState(1);

  //// COMPONENT
  return (
    <StepsContext.Provider
      value={{
        steps,
        selectedStep,
        setSelectedStep,
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
