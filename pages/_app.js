import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from '../components/navbar/MyNav';
import Footer from '../components/footer/Footer';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>La Vida Crafts</title>
        <meta name="description" content="Custom crafts work" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap" rel="stylesheet" />
      </Head>
      <MyNav />
      <Component {...pageProps} />
      <Footer />
    </>
    
  )
    
}

export default MyApp
