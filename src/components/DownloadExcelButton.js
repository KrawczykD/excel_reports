import React from "react";
import exportFromJSON from 'export-from-json';

const Button = ({report , name}) =>{

    const handleDownloadExcel = () =>{
        const date = new Date().toLocaleDateString();
        const data = report;
        const fileName = `${name}_${date}`;
        const exportType = 'csv';

        exportFromJSON({ data, fileName, exportType })
}
    return(
        <button onClick={()=>{handleDownloadExcel(report)}}>Download CSV File</button>
    )
}

export default Button;