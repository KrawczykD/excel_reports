import React from 'react';
import ExcelLoads from './components/ExcelLoad';
import DisplayList from './components/DisplayList';
import Footer from './components/Footer';
import MacroDownload from './components/MacroDownload';
import Dialog from './components/Dialog';
import ContainerDiv from './components/Container.css';
import {connect} from 'react-redux';


function App({warningState}) {

  return (
    <>
      <ContainerDiv>
        <ExcelLoads></ExcelLoads>
        <DisplayList></DisplayList>
        <MacroDownload buttonText="Download macro for SAP"></MacroDownload>
        <Footer></Footer>
      </ContainerDiv>
    {warningState ? <Dialog text="Oops! Looks like you missed something. Check report file, customer or report type!"></Dialog> : null}
    </>
  );
}

  const mapStateToProps = state =>({
    warningState: state.changeWarningStateReducer
})

export default connect(mapStateToProps)(App);
