import React from "react";
import "./App.css";
import img from "./img/logo.png";
import { Form } from "./component/Form";
import { Menu } from "./component/Menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <p>Bienvenue sur le diagnostique de peau</p>
      </header>
      <div className="formContainer">
        <div className="Menu">
          <Menu />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
