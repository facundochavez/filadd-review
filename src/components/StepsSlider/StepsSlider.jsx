import styles from "./StepsSlider.module.scss";
import { useStepsContext } from "@/context/steps.context";

const StepsSlider = () => {
  const { steps, selectedStep } = useStepsContext();
  
  //// COMPONENT
  return (
    <main className={styles.steps_slider} style={{ transform: `translateX(-${(selectedStep - 1) * 100}%)` }}>
      {steps.map((step) => (
        <Slide key={step.key} step={step} />
      ))}
    </main>
  );
};

const Slide = () => {
  const { selectedStep } = useStepsContext();
  
  //// COMPONENT
  return (
    <div className={styles.slide}>
     
    </div>
  );
};

export default StepsSlider;
