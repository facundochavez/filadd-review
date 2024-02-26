import Image from 'next/image';
import { Dropdown, Button } from 'antd';
import { useTourContext } from '@/context/tour.context';
import { useEffect, useRef, useState } from 'react';

const CountrySelector = () => {
  const { ref1 } = useTourContext();
  const countriesItems = [
    {
      label: 'Argentina',
      key: 'arg',
      icon: (
        <Image
          src='/flags/ar.svg'
          alt='Argentina Flag'
          width={32}
          height={20}
        />
      ),
    },
    {
      label: 'Brasil',
      key: 'bra',
      icon: (
        <Image src='/flags/br.svg' alt='Brasil Flag' width={32} height={20} />
      ),
    },
    {
      label: 'Chile',
      key: 'chl',
      icon: (
        <Image src='/flags/cl.svg' alt='Chile Flag' width={32} height={20} />
      ),
    },
    {
      label: 'Colombia',
      key: 'col',
      icon: (
        <Image src='/flags/co.svg' alt='Colombia Flag' width={32} height={20} />
      ),
    },
    {
      label: 'México',
      key: 'mex',
      icon: (
        <Image src='/flags/mx.svg' alt='Mexico Flag' width={32} height={20} />
      ),
    },
    {
      label: 'Perú',
      key: 'per',
      icon: (
        <Image src='/flags/pe.svg' alt='Peru Flag' width={32} height={20} />
      ),
    },
    {
      label: 'Uruguay',
      key: 'ury',
      icon: (
        <Image src='/flags/uy.svg' alt='Uruguay Flag' width={32} height={20} />
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const buttonElement = ref1?.current;
      if (buttonElement && buttonElement.classList.contains('ant-dropdown-open')) {
        buttonElement.click();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref1]);


  //// COMPONENT
  return (
    <Dropdown
      menu={{
        items: countriesItems,
        selectable: false,
        defaultSelectedKeys: ['arg'],
      }}
    >
      <Button
        ref={ref1}
        type='text'
        size='large'
        style={{
          padding: 10,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Image
          src='/flags/ar.svg'
          alt='Argentina Flag'
          width={32}
          height={20}
        />
        <Image
          src='/icons/arrow-down.svg'
          alt='Arrow Down'
          width={12}
          height={15}
          style={{
            filter: 'var(--filter-gray)',
            marginLeft: 10,
          }}
        />
      </Button>
    </Dropdown>
  );
};

export default CountrySelector;
