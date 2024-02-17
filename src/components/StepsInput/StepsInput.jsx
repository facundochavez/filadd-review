import { Breadcrumb, Input } from 'antd';
import styles from './StepsInput.module.scss';
import Image from 'next/image';
import { useStepsContext } from '@/context/steps.context';

const StepsInput = () => {
  const { steps, selectedStep, inputRef, inputValue, setInputValue } =
    useStepsContext();

  //// COMPONENT
  return (
    <div className={styles.steps_input}>
      <label>{steps[selectedStep - 1]?.question}</label>
      <Input
        type='text'
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
        items={[
          { title: 'Universidad Nacional de Salta' },
          { title: 'Ingeniería Civil' },
        ]}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default StepsInput;
