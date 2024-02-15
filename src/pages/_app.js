import '@/styles/globals.css';
import { ConfigProvider } from 'antd';
import StepsProvider from '@/context/steps.context';

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
      <StepsProvider>
        <Component {...pageProps} />
      </StepsProvider>
    </ConfigProvider>
  );
}
