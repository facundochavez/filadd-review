import Image from 'next/image';
import styles from './StepsHeader.module.scss';
import { useStepsContext } from '@/context/steps.context';
import steps from '@/data/steps.data.json';
import { useTourContext } from '@/context/tour.context';

const StepsHeader = () => {
  const {ref4} = useTourContext();

  //// COMPONENT
  return (
    <header className={styles.steps_header} ref={ref4}>
      {steps.map((step) => (
        <Step key={step.key} step={step} />
      ))}
    </header>
  );
};

const Step = ({ step }) => {
  const { selectedStep, changeStep } = useStepsContext();
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
        style={{
          opacity: step.key <= selectedStep ? 1 : 0.25,
          cursor: step.key < selectedStep ? 'pointer' : 'default',
        }}
        onClick={() => {
          if (step.key < selectedStep) changeStep(parseInt(step.key));
        }}
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
