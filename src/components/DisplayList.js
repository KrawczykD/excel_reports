import React from 'react';
import {connect} from 'react-redux';
import ReportValidationFunction from './ReportValidationFunction';





const DisplayList = ({OTIF , OPEN})=> {

    console.log(OTIF)
    // headers.push(`${property}: ${OTIF.[0][property]}`));

    let headers = [];
    let items = [];
    
        for (const property in OTIF.[0]) {
            headers.push(<li style={{display: "inline-block" , width: "5%" , fontSize: "7px" }}>{property}</li>);
          }
          for(let i = 0 ; i <OTIF.length ; i++){
            for (const property in OTIF.[i]) {
                items.push(<li style={{display: "inline-block" , width: "5%" , fontSize: "7px"}}>{OTIF.[i][property]}</li>);
              }
          }
    
    

    
        return(
        <div>
            <ReportValidationFunction></ReportValidationFunction>
            <ul>
                {headers}
                {items}
            </ul>
        </div>
        )
    
}

const mapStateToProps = state =>({
    OTIF: state.displayDataReducer[0],
    OPEN: state.displayDataReducer[1]
})

export default connect(mapStateToProps)(DisplayList);



// Billed Quantity
// Country ship-to-party
// Customer
// Deliv.date last confirm.
// Description
// Item (SD)
// Item category
// Material
// Purchase order no.
// SD Billing Doc. created
// SD Quantity
// Sales Doc. created
// Sales Document
// Ship-to Pur. Order 
// Sold-to party name