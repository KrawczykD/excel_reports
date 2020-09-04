import React from 'react';
import {connect} from 'react-redux';
import ReportValidationFunction from './ReportValidationFunction';
import Table from './DisplayList.css';
import Button from './DownloadExcelButton';
import ExcelDownloadSeparateButton from './ExcelDownloadSeparateButton';



const DisplayList = ({OTIF, OPEN})=> {

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
        "Comments (Landis)",
        "Report Customer"
    ];

    const preferedOrder = (obj, order)=> {
        var newObject = {};
        for(var i = 0; i < order.length; i++) {
            if(obj.hasOwnProperty(order[i])) {
                newObject[order[i]] = obj[order[i]];
            }
        }
        return newObject;
        }


    OTIF = OTIF.map(item=> preferedOrder(item,preferredOrderSetup))
    OPEN = OPEN.map(item=> preferedOrder(item,preferredOrderSetup))

    //here you can controll what field display
    
    

    const generateTable = (report)=>{
        let headers = [];
        let tables = [];
        let table = [];

        
    
        for (const property in report.[0]) {
            headers.push(<th style={{textAlign:"left"}}>{property}</th>);
          }

          for(let i = 0 ; i < report.length ; i++){
            for (const property in report[i]) {
                table.push(<td style={{color:`${report.[i]["Duplicate"] ? "red" : "black"}` }}>{report.[i][property]}</td>);
              }
              tables.push(table);
              table = [];
          }


          return({headers , tables})

    }

    

        const noDuplicate = (A, B)=>{
      
            var myArr=A.concat(B);
            var count=0;
            for(let i=0;i<myArr.length;i++){
                for(let j=0;j<myArr.length;j++){
                if(myArr[j]["SO + Line"]===myArr[i]["SO + Line"]){
                    count++;
                     myArr[i]["Duplicate"] = true;

                }
                }
                if(count===1){
                    // console.log(myArr[i])
                    myArr[i]["Duplicate"] = false;
                }
                count=0;
            }


            return myArr;
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
            <Button report={OTIF.map(item=> preferedOrder(item,preferredOrderSetup))} name="OTIF"></Button>
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
            <Button report={OPEN.map(item=> preferedOrder(item,preferredOrderSetup))} name="OPEN_OTIF"></Button>
            
            <Table>
                    <caption>OPEN + OTIF duplicates red</caption>
                    <thead>
                        <tr>
                            {generateTable(noDuplicate(OPEN , OTIF)).headers}
                        </tr>
                    </thead>
                    <tbody>
                            {generateTable(noDuplicate(OPEN , OTIF)).tables.map((item , index)=><tr key={index}>{item}</tr>)}
                    </tbody>
            </Table>
            <Button report={noDuplicate(OPEN , OTIF).map(item=> preferedOrder(item,preferredOrderSetup))} name="OPEN OTIF REMOVED DUPLICATES"></Button>
            {/* cos tu */}
            <ReportValidationFunction></ReportValidationFunction>
            <ExcelDownloadSeparateButton name={"Celestica OPEN + OTIF"} customer={"CLS"} file={noDuplicate(OPEN , OTIF).map(item=> preferedOrder(item,preferredOrderSetup))}></ExcelDownloadSeparateButton>
            <ExcelDownloadSeparateButton name={"JABIL OPEN + OTIF"} customer={"JBL"} file={noDuplicate(OPEN , OTIF).map(item=> preferedOrder(item,preferredOrderSetup))}></ExcelDownloadSeparateButton>
            <ExcelDownloadSeparateButton name={"STOCKPORT OPEN + OTIF"} customer={"STK"} file={noDuplicate(OPEN , OTIF).map(item=> preferedOrder(item,preferredOrderSetup))}></ExcelDownloadSeparateButton>
        </div>
        )
    
}

const mapStateToProps = state =>({
    OTIF: state.displayDataReducer[0],
    OPEN: state.displayDataReducer[1]
})

export default connect(mapStateToProps)(DisplayList);