import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
// import About from "./components/About.jsx";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // document.body.style.backgroundColor = "#343a40";
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div>
      {/* use default props -- depreciated */}
      {/* <Navbar />      */}

      <Navbar
        title="TextUtils"
        about="about"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        {/* BootStrap Class */}
        <TextForm title="Enter the text to analyze below" mode={mode}/>
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
