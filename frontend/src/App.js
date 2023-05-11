import React from "react";
import './App.css';
import webfont from "webfontloader";
import Home from "./components/Home/Home";


function App() {

  React.useEffect(()=>{
    webfont.load({
      google:{
        families:['Roboto','Droid Sans','Chilanka']
      }
    })
  })

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;