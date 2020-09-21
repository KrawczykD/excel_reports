import React from 'react';
import ExcelLoads from './components/ExcelLoad';
import DisplayList from './components/DisplayList';
import Footer from './components/Footer.css';
import { Normalize } from 'styled-normalize';
import MacroDownload from './components/MacroDownload';
import Dialog from './components/Dialog';
import {connect} from 'react-redux';


function App({warningState}) {


  return (
    <>
    <div className="App" style={{position:"relative" , minHeight:"100vh" , width:"95%" , minWidth:"1300px" , margin:"0 auto" , fontFamily:"Lato"}}>
      <Normalize/>
      <ExcelLoads></ExcelLoads>
      <DisplayList></DisplayList>
      <MacroDownload buttonText="Download macro for SAP"></MacroDownload>
      <Footer></Footer>
    </div>
    {warningState ? <Dialog text="Oops! Looks like you missed something. Check report file, customer or report type!"></Dialog> : null}
    </>
  );
}

  const mapStateToProps = state =>({
    warningState: state.changeWarningStateReducer
})

export default connect(mapStateToProps)(App);
