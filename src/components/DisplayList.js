import React from 'react';
import {connect} from 'react-redux';
import ReportValidationFunction from './ReportValidationFunction';





const DisplayList = ({OTIF, OPEN})=> {

    // headers.push(`${property}: ${OTIF.[0][property]}`));

    const generateTable = (report)=>{
        let headers = [];
        let tables = [];
        let table = []
    
        for (const property in report.[0]) {
            headers.push(<th>{property}</th>);
          }

        //   console.log(OTIF.length)


          for(let i = 0 ; i < report.length ; i++){
            for (const property in report[i]) {
                // console.log(OTIF[i])
                table.push(<td>{report.[i][property]}</td>);
              }
              tables.push(table);
              table = [];
          }


          return({headers , tables })

    }

    
        
        return(
        <div>
            <ReportValidationFunction></ReportValidationFunction>
            <table style={{width:"100%"}}>
                <caption>Weekly OTIF report</caption>
                <tr>
                    {generateTable(OTIF).headers}
                </tr>
                    {generateTable(OTIF).tables.map(item=><tr>{item}</tr>)}
            </table>
            <table style={{width:"100%"}}>
                <caption>Weekly OPEN OTIF report</caption>
                <tr>
                    {generateTable(OPEN).headers}
                </tr>
                    {generateTable(OPEN).tables.map(item=><tr>{item}</tr>)}
            </table>
        </div>
        )
    
}

const mapStateToProps = state =>({
    OTIF: state.displayDataReducer[0],
    OPEN: state.displayDataReducer[1]
})

export default connect(mapStateToProps)(DisplayList);