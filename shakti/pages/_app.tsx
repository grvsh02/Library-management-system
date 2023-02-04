import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <div className="h-screen w-screen ">
            <Component {...pageProps} />
        </div>
      </>
  );
}

export default MyApp;
