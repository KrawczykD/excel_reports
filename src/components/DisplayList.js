import React from 'react';
import {connect} from 'react-redux';
import ReportValidationFunction from '../functions/reportValidationFunction'



const DisplayList = ({files})=> {

    
        return(
        <div>
            <ReportValidationFunction></ReportValidationFunction>
        </div>
        )
    
}

const mapStateToProps = state =>({
    files: state.addExcelFile
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