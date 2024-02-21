import { Breadcrumb, Input } from 'antd';
import styles from './StepsInput.module.scss';
import Image from 'next/image';
import { useStepsContext } from '@/context/steps.context';
import steps from '@/data/steps.data.json';


const StepsInput = () => {
  const {
    selectedStep,
    changeStep,
    selectedUniversity,
    selectedCareer,
    inputRef,
    inputValue,
    setInputValue,
  } = useStepsContext();


  // BREADCRUMB ITEMS
  const firstItem = {
    title: (
      <Image src='/icons/home.svg' alt='University' width={19} height={19} />
    ),
    onClick: () => {
      changeStep(1);
    },
  };
  const secondItem = {
    title: selectedUniversity,
    onClick: () => {
      selectedStep !== 2 && changeStep(2);
    },
  };
  const thirdItem = {
    title: selectedCareer,
  };

  //// COMPONENT
  return (
    <div className={styles.steps_input}>
      <label>{steps[selectedStep - 1]?.question}</label>
      <Input
        type='text'
        allowClear
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef}
        placeholder={steps[selectedStep - 1]?.placeHolder}
        size='large'
        prefix={
          <Image
            src='/icons/icon-search.svg'
            alt='Search'
            width={18}
            height={18}
            style={{ marginRight: '5px' }}
          />
        }
      />

      <Breadcrumb
        items={
          selectedStep === 1
            ? []
            : selectedStep === 2
            ? [firstItem, secondItem]
            : [firstItem, secondItem, thirdItem]
        }
        className={styles.breadcrumb}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default StepsInput;
