import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Home'
import Bartender from './Bartender/Bartender.js'
import Customer from "./Customer/Customer.js"
import { useState } from 'react';


function App() {

  const [table, setTable] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route exact path="customer" element={<Customer table={table} setTable={setTable}/>}></Route>
        <Route exact path="bartender" element={<Bartender table={table} setTable={setTable}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
