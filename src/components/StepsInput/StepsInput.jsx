import { Breadcrumb, Input } from 'antd';
import styles from './StepsInput.module.scss';
import Image from 'next/image';

const StepsInput = () => {
  //// COMPONENT
  return (
    <div className={styles.steps_input}>
      <label>¿Dónde estás estudiando?</label>
      <Input
        placeholder='Universidad Nacional de Salta'
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
          { title: 'Ingeniería CIvil' },
        ]}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default StepsInput;
