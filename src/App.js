import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';




function App() {


  const [mode, setMode] = useState("light");

  // backgroundColor: "#191818"


  const Mode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(25 28 32)";
      document.body.style.color = "white";
      
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
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
      <Navbar toggleMode={Mode} mode={mode} />
      <div className="container" mode={mode}>
        <TextForm mode={mode} />
      </div>
    </>
  );
}

export default App;
