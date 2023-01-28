import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from "@/src/common/components/sidebar";
import Navbar from "@/src/common/components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className={'flex w-screen h-screen overflow-y-auto bg-slate-50 dark:bg-slate-900'}>
          <Navbar />
          <Sidebar />
          <Component {...pageProps} />
      </div>
  )
}
