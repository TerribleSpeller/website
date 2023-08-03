import Time from "./components/App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css"; //!!Uses !important so overrides everything.
import "./styles.css";


function App() {
  return (
    <div>
      <Navbar />
      <h1>Hello!</h1>
      <Footer />
    </div>
  );
}

export default App;
