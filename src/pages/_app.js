import '@/styles/globals.css';
import { ConfigProvider } from 'antd';
import StepsProvider from '@/context/steps.context';
import ModalProvider from '@/context/modal.context';
import LoginRegisterModal from '@/components/LoginRegisterModal/LoginRegisterModal';
import TourProvider from '@/context/tour.context';

export default function App({ Component, pageProps }) {

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2929FA',
          borderRadius: '5px',
        },
      }}
    >
      <TourProvider>
        <ModalProvider>
          <StepsProvider>
            <Component {...pageProps} />
            <LoginRegisterModal />
          </StepsProvider>
        </ModalProvider>
      </TourProvider>
    </ConfigProvider>
  );
}
