import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import MyNav from '../components/navbar/MyNav';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <MyNav />
    <Component {...pageProps} />
    </>
    
  )
    
}

export default MyApp
