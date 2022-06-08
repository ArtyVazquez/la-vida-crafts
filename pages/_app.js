import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import MyNav from '../components/navbar/MyNav';
import Footer from '../components/footer/Footer';
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MyNav />
      <Component {...pageProps} />
      <Footer />
    </>
    
  )
    
}

export default MyApp
