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




    // files.map(array=>array[0] === "OTIF" ? array.map(item=> OTIF.push(item)) : null)
    // files.map(array=>array[0] === "OPEN_OTIF" ? array.map(item=> OPEN.push(item)) : null)

   

    // OTIF = OTIF.filter(item => item !== "OTIF" ? item : null )
    // OPEN = OPEN.filter(item => item !== "OPEN_OTIF" ? item : null )

    // files.map(array=>array[0] === "OPEN_OTIF" ? array.map(item=> OPEN.push(item)) : null)
    for( let i = 0 ; i < files.length ; i++){
        files[i].map(item=> item.report === "OTIF" ? OTIF.push(item) : OPEN.push(item))
    }
    // console.log(files); problem z pobieraniem ostatniej tabeli
    
        



  

  

    OTIF.map( item => {
        return(
            // item.report = "OTIF",
            item.Product = item["Material"].slice(0,4),
            item["WW-YYYY"] = `${currentWeekNumber()}-${new Date().getFullYear()}`,

            item["SD Billing Doc. created"] = excelData(item["SD Billing Doc. created"]),
            item["Sales Doc. created"] = excelData(item["Sales Doc. created"]),
            item["Deliv.date last confirm."] = excelData(item["Deliv.date last confirm."]),
            item["Ship-to Pur. Order Date"] = excelData(item["Ship-to Pur. Order Date"]),
            item["SO + Line"] = `${item["Sales Document"]}${item["Item (SD)"]}`,

            item["OTIF to Original 1st commit"] = `null`,
            item["1st Commit - Late Category"] = `null`,
            item["Comments (Landis)"] = `null`
        )
    });




    OPEN.map(item=> {
        return(
            // item.report = "OPEN_OTIF",
            item.Product = item["Material"].slice(0,4),
            item["WW-YYYY"] = `${currentWeekNumber()}-${new Date().getFullYear()}`,

            item["Deliv.date last confirm."] = excelData(item["Deliv.date last confirm."]),
            item["Ship-to Pur. Order Date"] = excelData(item["Ship-to Pur. Order Date"]),
            item["SO + Line"] = `${item["Sales Document"]}${item["Item (SD)"]}`,

            item["OTIF to Original 1st commit"] = `null`,
            item["1st Commit - Late Category"] = `null`,
            item["Comments (Landis)"] = `null`
        )
    });

  
    
    addData( OTIF , OPEN);
}
const reportValidationFunction = ({files , addData})=>{
   

    return(
        <>
            <Buttons onClick={()=>{functionChange(files , addData)}}>Generate report</Buttons>
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