import '@/styles/globals.css';
import { ConfigProvider } from 'antd';

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
      <Component {...pageProps} />;
    </ConfigProvider>
  );
}
