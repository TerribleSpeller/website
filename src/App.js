import Time from "./components/App";
import Navbar from "./components/Navbar";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.//
//import "react-bootstrap/dist/react-bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.css'; !!Uses !important so overrides everything.

function App() {
  return (
    <div>
      <Navbar />
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
