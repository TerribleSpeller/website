import Time from "./components/App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css"; //!!Uses !important so overrides everything.
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/pages/AboutUs";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <div className="page-content">
        <Navbar />
        <div className="main-content">
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
          </Routes>        
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
