import '../styles/globals.css'
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    themeChange(false);
  }, [])
  
  return <Component {...pageProps} />
}

export default MyApp
