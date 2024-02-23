import StepsHeader from '@/components/StepsHeader/StepsHeader';
import styles from './SearchSection.module.scss';
import StepsSlider from '@/components/StepsSlider/StepsSlider';
import StepsInput from '@/components/StepsInput/StepsInput';
import { useStepsContext } from '@/context/steps.context';

const SearchSection = () => {
  const { sectionRef } = useStepsContext();


  //// COMPONENT
  return (
    <section className={styles.search_section} ref={sectionRef}>
      <div className={styles.search_section__max_width}>
        <StepsHeader />
        <StepsInput />
        <StepsSlider />
      </div>
    </section>
  );
};

export default SearchSection;
