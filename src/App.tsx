import React from 'react';
import './App.css';
import { Button } from "./components/Button/Button";
import { EmojiContainer } from './components/EmojiContainer/EmojiContainer';
import {User} from "./components/User/User"

function App() {
  return (
    <div className="App flex flex-col-reverse items-center">
      <div className='UserButton'>
       <User text="Shawn Connory"/>
       <Button disabled={true} text = "" type={"primary"}/>
      </div>
      <EmojiContainer />
    </div>
  );
}

export default App;
