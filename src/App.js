import "./App.css";
import Textform from "./components/Textform/textform";
import Navbar from "./components/Navbar/navbar";
import React, { useState } from "react";
import Alert from "./components/Alert/Alert";
import About from "./components/About/About";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#3D2C29";
      modifyAlert("Dark Mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      modifyAlert("Light Mode has been enabled", "success");
    }
  };
  const modifyAlert = (msg, type) => {
    setalert({
      msg,
      type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  return (
    <Router>
      <>
        <Navbar title="TextAlchemy" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}></Alert>
        <div className="container hello mt-4 pt-4" style={{ width: "70%" }}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
             exact path="/"
              element={<Textform modifyAlert={modifyAlert} mode={mode} />}
            ></Route>
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
