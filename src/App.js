import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {


  const [mode, setMode] = useState("light");


  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => { setAlert(null) }, 1500);

  }

  // backgroundColor: "#191818"


  const Mode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(25 28 32)";
      // document.body.style.color = "white";
      showAlert("DarkMode is enabled", "success");

    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode is enabled", "success");

      // document.body.style.color = "black";
    }
    // console.log(style.color);
    // if (style.color == "white") {
    //   style.color = "black";
    //   style.backgroundColor = "white";
    // }
    // else {
    //   style.color = "black";
    //   style.backgroundColor = "white";
    // }


    // setMode(style);

  }

  return (
    <>

      <Router>
      <Navbar toggleMode={Mode} mode={mode} />
      <Alert alert={alert} />
        <Routes>
            
          <Route path="/textutils" element={<TextForm mode={mode}/>}>

            
          </Route>
            
          <Route exact path="/About" element={ <About mode={mode} />}>
            
          </Route>
        </Routes>
      </Router>



    </>
  );
}

export default App;
