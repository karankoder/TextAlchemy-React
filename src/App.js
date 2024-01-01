import './App.css';
import Textform from './components/Textform/textform';
import Navbar from './components/Navbar/navbar';
import React from 'react'

function App() {
  return (
    <>
    <Navbar title="Textutils"/>
    <div className="container hello mt-4 pt-4" style={{width:'70%'}}>
    <Textform/>
    </div>
  
    </>
  );
}

export default App;
