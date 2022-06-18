import React from 'react';
import './App.css';
import { Button } from "./components/Button/Button";
import {User} from "./components/User/User"

function App() {
  return (
    <div className="App">
      <div className='UserButton'>
       <User text="Shawn Connory"/>
       <Button disabled={true} text = "" type={"primary"}/>
      </div>
    </div>
  );
}

export default App;
