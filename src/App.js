import React from 'react';
import ExcelLoads from './components/ExcelLoad';
import DisplayList from './components/DisplayList';
import Footer from './components/Footer.css';
import { Normalize } from 'styled-normalize';


function App() {
  return (
    <div className="App" style={{position:"relative" , minHeight:"100vh" , width:"95%" , margin:"0 auto" , fontFamily:"Lato"}}>
      <Normalize/>
      <ExcelLoads></ExcelLoads>
      <DisplayList></DisplayList>
      <Footer></Footer>
    </div>
  );
}

export default App;
