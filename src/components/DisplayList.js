import React from 'react';
import {connect} from 'react-redux';
import ReportValidationFunction from './ReportValidationFunction';
import Table from './DisplayList.css';

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

    // headers.push(`${property}: ${OTIF.[0][property]}`));

    const generateTable = (report)=>{
        let headers = [];
        let tables = [];
        let table = [];
    
        for (const property in report.[0]) {
            headers.push(<th style={{textAlign:"left"}}>{property}</th>);
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


          return({headers , tables})

    }

    
        
        return(
        <div>
            <ReportValidationFunction></ReportValidationFunction>
            {/* <table style={{width:"100%"}}> */}
            <Table>
                <caption>Weekly OTIF report</caption>
                    <tr>
                        {generateTable(OTIF).headers}
                    </tr>
                        {generateTable(OTIF).tables.map(item=><tr>{item}</tr>)}
            </Table>
            <Table>
                    <caption>Weekly OPEN OTIF report</caption>
                    <tr>
                        {generateTable(OPEN).headers}
                    </tr>
                        {generateTable(OPEN).tables.map(item=><tr>{item}</tr>)}
            </Table>
            {/* </table> */}
        </div>
        )
    
}

const mapStateToProps = state =>({
    OTIF: state.displayDataReducer[0],
    OPEN: state.displayDataReducer[1]
})

export default connect(mapStateToProps)(DisplayList);