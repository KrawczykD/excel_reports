import React from "react";
import exportFromJSON from 'export-from-json';
import Buttons from './Button.css.js';

const ExcelDownloadSeparateButton = ({customer , file , name})=>{

    const separateCustomers = (dataFile)=> {
        console.log(dataFile)
        var data = dataFile.filter(item => item["Report Customer"] === customer ? item : null)
        console.log(data)
        return data;
    };




    const handleDownloadExcel = () =>{
        const date = new Date().toLocaleDateString();
        const data = separateCustomers(file);
        console.log(data)
        const fileName = `${customer}_${date}`;
        const exportType = 'csv';

        exportFromJSON({ data, fileName, exportType })
    }

    return(
        <>
            <Buttons onClick={()=>{handleDownloadExcel()}}>{name}</Buttons>
        </>
    )
}

export default ExcelDownloadSeparateButton;