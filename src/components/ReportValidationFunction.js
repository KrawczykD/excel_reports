import React from "react";
import {connect} from 'react-redux';
import currentWeekNumber from'current-week-number';
import addData from '../actions/addDataAction';
import Buttons from './Button.css';
const functionChange = (files , addData)=>{

    let OTIF = []
    let OPEN = []


    const excelData = (data)=>{

        if(typeof(data) === "string"){
            return data.slice(0,10).split('.').join('/');
        } else if(typeof(data) === "number"){
        //   data represents Jan 1, 1993
       let e0date = new Date(0); // epoch "zero" date
       let offset = e0date.getTimezoneOffset(); // tz offset in min

       // calculate Excel xxx days later, with local tz offset
       let jsdate = new Date(0, 0, data-1, 0, -offset, 0);

       return `${jsdate.getDate()}/${jsdate.getMonth()+1}/${jsdate.getUTCFullYear()}`;
        }
   }




    
    for( let i = 0 ; i < files.length ; i++){
        files[i].map(item=> item.report === "OTIF" ? OTIF.push(item) : OPEN.push(item))
    }
   
    

    OTIF.map( item => {
        return(
            
            item["Report Customer"] === "STK" ? item["Country ship-to-party"] = item["Country sold-to-party"] : null,
            item["Report Customer"] === "STK" ? item["PO Quantity"] = item["SD Quantity"] : null,
            item["Report Customer"] === "STK" ? item["PO Invoice Quantity"] = item["Billed Quantity"] : null,
            item["Report Customer"] === "STK" ? item["PO first commited delivery date"] = item["Deliv.date last confirm."] : null,
            item["Report Customer"] === "STK" ? item["SD Billing Doc. created"] = item["Billing Date"] : null,
            
            item.Product = item["Material"].slice(0,4),
            item["WW-YYYY"] = `${currentWeekNumber()}-${new Date().getFullYear()}`,

            item["SD Billing Doc. created"] = excelData(item["SD Billing Doc. created"]),
            item["Billing Date"] = excelData(item["Billing Date"]),
            item["PO first commited delivery date"] = excelData(item["PO first commited delivery date"]),
            item["Sales Doc. created"] = excelData(item["Sales Doc. created"]),
            item["Deliv.date last confirm."] = excelData(item["Deliv.date last confirm."]),
            item["Ship-to Pur. Order Date"] = excelData(item["Ship-to Pur. Order Date"]),
            item["SO + Line"] = `${item["Sales Document"]}${item["Item (SD)"]}`,

            item["Physical delivery date (CLS&JBL)"] = `null`,
            item["OTIF V's 1st Commit"] = `null`,
            item["Late Category to 1st Commit"] = `null`,
            item["Comments (all)"] = `null`,
            item["OTIF V's Cust. Req."] = `null`,
            item["Late Category to Customer requested"] = `null`
        )
    });




    OPEN.map(item=> {
        return(
            
            item["Report Customer"] === "STK" ? item["Country ship-to-party"] = item["Country sold-to-party"] : null,
            item["Report Customer"] === "STK" ? item["PO Quantity"] = item["SD Quantity"] : null,
            item["Report Customer"] === "STK" ? item["PO Invoice Quantity"] = item["Billed Quantity"] : null,
            item["Report Customer"] === "STK" ? item["PO first commited delivery date"] = item["Deliv.date last confirm."] : null,
            item["Report Customer"] === "STK" ? item["SD Billing Doc. created"] = item["Billing Date"] : null,

            item.Product = item["Material"].slice(0,4),
            item["WW-YYYY"] = `${currentWeekNumber()}-${new Date().getFullYear()}`,

            item["Deliv.date last confirm."] = excelData(item["Deliv.date last confirm."]),
            item["Ship-to Pur. Order Date"] = excelData(item["Ship-to Pur. Order Date"]),
            item["SO + Line"] = `${item["Sales Document"]}${item["Item (SD)"]}`,
            item["Billing Date"] = excelData(item["Billing Date"]),
            item["SD Billing Doc. created"] = excelData(item["SD Billing Doc. created"]),
            item["PO first commited delivery date"] = excelData(item["PO first commited delivery date"]),

            item["Physical delivery date (CLS&JBL)"] = `null`,
            item["OTIF V's 1st Commit"] = `null`,
            item["Late Category to 1st Commit"] = `null`,
            item["Comments (all)"] = `null`,
            item["OTIF V's Cust. Req."] = `null`,
            item["Late Category to Customer requested"] = `null`

        )
    });

  
    
    addData( OTIF , OPEN);
}
const reportValidationFunction = ({files , addData})=>{
   

    return(
        <>
            <Buttons style={{position:"absolute", bottom:"20px", right:"0"}} onClick={()=>{functionChange(files , addData)}}>Generate report</Buttons>
        </>
    )
}


const mapStateToProps = state =>({
    files: state.addExcelFile 
})

const mapDispatchToProps = dispatch => ({
    addData : (OTIF , OPEN)=> dispatch(addData(OTIF , OPEN))
})

export default connect(mapStateToProps,mapDispatchToProps)(reportValidationFunction);;