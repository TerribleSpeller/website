import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import '../public/styles.css'
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


export default function MyApp({ Component, pageProps }) {
    return (
      <div className="flex-column cool-background cool-background-2">
        <div className="page-content">
          <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="theme-color" content="#000000" />
              <meta
                  name="description"
                  content="TerribleSpeller's website"
              />
                <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
          </Head>
          <NavBar />
          <div className="main-content">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>

     </div>
    )
  }