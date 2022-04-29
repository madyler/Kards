import React from 'react';
import logo from './logo.svg';
import './App.css';
import SuperInputText from "./components/common/c1-SuperInputText/SuperInputText";
import SuperButton from "./components/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./components/common/c3-SuperCheckbox/SuperCheckbox";

function App() {
  return (
    <div className="App">
      <SuperInputText/>
      <SuperButton/>
      <SuperCheckbox/>
    </div>
  );
}

export default App;
