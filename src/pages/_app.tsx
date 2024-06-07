import type { AppProps } from 'next/app';

/* 
Instalar:
npm install next-auth react
*/
import { SessionProvider, useSession } from "next-auth/react";
import "../globals.css";
// Importações de componentes
import Menu from '../componentes/Header'; 
import Menu1 from "../componentes/Footer"
import { useRouter } from 'next/router';
import { useEffect } from 'react';




function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const isHomePage = router.pathname === '/'; // Verifica se está na HomePage

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <SessionProvider session={session}>
      {/*{!isHomePage && <Header />*/}
      <Menu/>
      <Component {...pageProps} />
      <Menu1/>
    </SessionProvider>
  );
}

export default MyApp;