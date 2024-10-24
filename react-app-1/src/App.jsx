import "./App.css";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
// import About from "./components/About.jsx";

function App() {
  return (
    <div>
      {/* use default props -- depreciated */}
      {/* <Navbar />      */}

      <Navbar title="TextUtils" about="about" />
      <div className="container my-3">
        {/* BootStrap Class */}
        <TextForm title="Enter the text to analyze below" />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
