import React from "react";
import "./App.css";
import Homepage from "./pages/home";
import { Navbar } from "./pages/navbar";
import {About} from  './pages/about'
import {Main} from './pages/main'
import { Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
          
        </header>
<Homepage />
<Main />
<About />

      </div>
    </BrowserRouter>
  );
}

export default App;
