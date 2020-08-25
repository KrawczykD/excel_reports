import React from 'react';
import {connect} from 'react-redux';
import ReportValidationFunction from './ReportValidationFunction';
import Table from './DisplayList.css';
import Button from './DownloadExcelButton';


function preferedOrder(obj, order) {
        var newObject = {};
        for(var i = 0; i < order.length; i++) {
            if(obj.hasOwnProperty(order[i])) {
                newObject[order[i]] = obj[order[i]];
            }
        }
        return newObject;
        }
    
        const preferredOrderSetup = [
            "SO + Line",
            "WW-YYYY",
            "Product",
            "Sales Document",
            "Item (SD)",
            "Sold-to party name",
            "SD Quantity",
            "Billed Quantity",
            "Deliv.date last confirm.",
            "OTIF to Original 1st commit",
            "1st Commit - Late Category",
            "Comments (Landis)"
        ];





const DisplayList = ({OTIF, OPEN})=> {

    OTIF = OTIF.map(item=> preferedOrder(item,preferredOrderSetup))
    OPEN = OPEN.map(item=> preferedOrder(item,preferredOrderSetup))


    const generateTable = (report)=>{
        let headers = [];
        let tables = [];
        let table = [];
    
        for (const property in report.[0]) {
            headers.push(<th style={{textAlign:"left"}}>{property}</th>);
          }




          for(let i = 0 ; i < report.length ; i++){
            for (const property in report[i]) {
                table.push(<td>{report.[i][property]}</td>);
              }
              tables.push(table);
              table = [];
          }


          return({headers , tables})

    }

    

    const noDuplicate = ()=>{
        const compareName = (obj1, obj2)=>{
            return (obj1.["SO + Line"] === obj2.["SO + Line"]);
          }
          
          
          let output = OPEN.filter(b=>{
            let indexFound = OTIF.findIndex(a => compareName(a, b));
            return indexFound === -1;
          })   

          return output;
    }
            
        return(
        <div>
            <Table>
                <caption>Weekly OTIF report</caption>
                <thead>
                    <tr>
                        {generateTable(OTIF).headers}
                    </tr>
                </thead>
                <tbody>
                        {generateTable(OTIF).tables.map((item , index)=><tr key={index}>{item}</tr>)}
                </tbody>
            </Table>
            <Button report={OTIF} name="OTIF"></Button>
            <Table>
                    <caption>Weekly OPEN OTIF report</caption>
                    <thead>
                        <tr>
                            {generateTable(OPEN).headers}
                        </tr>
                    </thead>
                    <tbody>
                            {generateTable(OPEN).tables.map((item , index)=><tr key={index}>{item}</tr>)}
                    </tbody>
            </Table>
            <Button report={OPEN} name="OPEN OTIF"></Button>
            <Table>
                    <caption>OPEN OTIF removed duplicates from OTIF</caption>
                    <thead>
                        <tr>
                            {generateTable(noDuplicate()).headers}
                        </tr>
                    </thead>
                    <tbody>
                            {generateTable(noDuplicate()).tables.map((item , index)=><tr key={index}>{item}</tr>)}
                    </tbody>
            </Table>
            <Button report={OPEN} name="OPEN OTIF REMOVED DUPLICATES"></Button>
            <br/>
            <br/>
            <ReportValidationFunction></ReportValidationFunction>
        </div>
        )
    
}

const mapStateToProps = state =>({
    OTIF: state.displayDataReducer[0],
    OPEN: state.displayDataReducer[1]
})

export default connect(mapStateToProps)(DisplayList);