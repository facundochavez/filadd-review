import Image from 'next/image';
import styles from './StepsHeader.module.scss';
import { useStepsContext } from '@/context/steps.context';

const StepsHeader = () => {
  const { steps } = useStepsContext();

  //// COMPONENT
  return (
    <header className={styles.steps_header}>
      {steps.map((step) => (
        <Step key={step.key} step={step} />
      ))}
    </header>
  );
};

const Step = ({ step }) => {
  const { selectedStep, setSelectedStep } = useStepsContext();
  //// COMPONENT
  return (
    <>
      {step.key != '1' && (
        <div
          className={styles.line}
          style={{ opacity: step.key <= selectedStep ? 1 : 0.25 }}
        />
      )}
      <div
        className={styles.step}
        style={{ opacity: step.key <= selectedStep ? 1 : 0.25 }}
      >
        <picture>
          <Image src={step.icon} alt={`Icono de ${step.label}`} fill />
        </picture>
        <p>{step.label}</p>
      </div>
    </>
  );
};

export default StepsHeader;
