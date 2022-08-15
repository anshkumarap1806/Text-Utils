
import React, { Component } from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { useState } from 'react'
// import { BrowserRouter ,Router,Route,Routes } from 'react-router-dom';
function App() {
  const [mode,smode]=useState('light');
  const [alert,setalert]=useState(null);
  const salert=(message,type)=>{
    setalert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1500);
  }
  
  const theme=()=>{
    if(mode==='light'){
    smode('dark')
    document.title='Text-Util Dark-Mode'
    document.body.style.backgroundColor = 'grey';
    salert("Dark mode enabled","success")
  }
  else {
    smode('light')
    document.body.style.backgroundColor = 'white';
    salert("Light mode enabled","success")
    document.title='Text-Util Light-Mode'
    }
  }
  return (
    <> 
<Navbar title="Text-Utils" about="About us" mode={mode} theme={theme}/>
<Alert alert={alert}/>
    <Textform heading="Enter text" mode={mode} salert={salert}/>
    </>
    
  );
}

export default App;
