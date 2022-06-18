import React from 'react';
import './App.css';
import { Button } from "./components/Button/Button";
import { EmojiContainer } from './components/EmojiContainer/EmojiContainer';
import { Navbur } from './components/Navbar/Navbur';
import { Title } from './components/Title/Title';
import { User } from "./components/User/User"

function App() {
  return (
    <div className="App flex flex-col-reverse items-center">
      <div className='UserButton'>
       <User text="Shawn Connory"/>
       <Button disabled={true} text = "" type={"primary"}/>
      </div>
      <EmojiContainer />
      <Title/>
      <Navbur/>
    </div>
  );
}

export default App;
