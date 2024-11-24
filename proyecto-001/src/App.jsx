import "./App.css";
import { useState, useRef } from "react";
import Ruleta from  "./ruleta/ruleta.png"

function App() {
  return (
    <div className="container ">
      <img src={require(`./ruleta/ruleta.png`)} className="ruleta-img" alt="ruleta" />
      <picture>

      <img src={require(`./ruleta/central.png`)} className="ruleta-img animar" alt="central" />
      </picture>
    </div>
  );
}

export default App;
