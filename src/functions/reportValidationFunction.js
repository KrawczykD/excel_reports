import React from "react";
import {connect} from 'react-redux';

const functionChange = (files)=>{
    let OTIF = []
    let OPEN = []

    files.map(array=>array[0] === "OTIF" ? array.map(item=> OTIF.push(item)) : null)
    files.map(array=>array[0] === "OPEN_OTIF" ? array.map(item=> OPEN.push(item)) : null)

    OTIF = OTIF.filter(item => item !== "OTIF" ? item : null )
    OPEN = OPEN.filter(item => item !== "OPEN_OTIF" ? item : null )

    // OTIF = OTIF.map(item=>console.log(item["Material"]))
    // OPEN = OPEN.map(item=>item)

    OTIF.map(item=> {
        let data = new Date();

        return(
            item.report = "OTIF",
            item.Product = item["Material"].slice(0,4),
            item["WW-YYYY"] = 
            console.log(data.format('W'))
        )
    });

    console.log(OTIF)
}

const reportValidationFunction = ({files})=>{
   

    return(
       <button onClick={()=>{functionChange(files)}}>ChangeFile</button>
 
    )
}


const mapStateToProps = state =>({
    files: state.addExcelFile // one file only
})

export default connect(mapStateToProps)(reportValidationFunction);;