import React , {useState , useEffect} from 'react';
import {connect} from 'react-redux';
import ReportValidationFunction from './ReportValidationFunction';
import Table from './DisplayList.css';
import Button from './DownloadExcelButton';
import TableButton from './Button.css';
import ExcelDownloadSeparateButton from './ExcelDownloadSeparateButton';



const DisplayList = ({OTIF, OPEN})=> {


    const preferredOrderSetup = [
        // 1st Commit - Late Category
        // Billed Quantity
        // Billing Date
        // Comments (Landis)
        // Country sold-to-party
        // Customer
        // Deliv.date last confirm.
        // Description
        // Item (SD)
        // Item category
        // Material
        // OTIF to Original 1st commit
        // Product
        // Report Customer
        // SD Billing Doc. created
        // SD Quantity
        // SO + Line
        // Sales Doc. created
        // Sales Document
        // Ship-to Pur. Order Date
        // Sold-to party name
        // WW-YYYY
        // report
        /////////// STOCKPORT SETTING
        // "WW-YYYY",
        // "Sales Document",
        // "SO + Line",
        // "Material",
        // "Description",
        // "Country sold-to-party",
        // "Customer",
        // "Sold-to party name",
        // "SD Quantity",
        // "Billed Quantity",
        // "Ship-to Pur. Order Date",
        // "Deliv.date last confirm.",
        // "Billing Date",
        // "Report Customer",
        // "Physical delivery date (CLS&JBL)",
        // "OTIF to Original 1st commit",
        // "1st Commit - Late Category",
        // "Comments (Landis)",
        // "OTIF V's Cust. Req.",
        // "Late Category to Customer requested"

        "WW-YYYY",
        "Sales Document",
        "SO + Line",
        "Material",
        "Description",
        // "Country ship-to-party",
        "Country",
        "Customer",
        "Sold-to party name",
        "PO Quantity",
        "PO Invoice Quantity",
        // "Ship-to Pur. Order Date",
        "Cust. Requested date",
        "PO first commited delivery date",
        // "SD Billing Doc. created",
        "PO Invoice created",
        // "Report Customer",
        "Vendor",
        "Physical delivery date (CLS&JBL)",
        "Physical delivery date",
        "OTIF V's 1st Commit",
        "Late Category to 1st Commit",
        "Comments (all)",
        "OTIF V's Cust. Req.",
        "Late Category to Customer requested",
        "report"


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
                    myArr[i]["Duplicate"] = false;
                }
                count=0;
            }


            return myArr;
        }

        
            let [visibletable,setCount] = useState(3);


            const leftChgange = ()=>{
                console.log(document.querySelectorAll("table")[0].classList.toggle("left"))
            }
    
            
        return(
        <div>
            <TableButton onClick={()=> setCount(visibletable=1 ,   leftChgange())}>Display OTIF</TableButton>
            <TableButton onClick={()=> setCount(visibletable=2 ,   leftChgange())}>Display OPEN</TableButton>
            <TableButton onClick={()=> setCount(visibletable=3 ,   leftChgange())}>Display OPEN + OTIF</TableButton>
            {visibletable === 1 ? <Table>
                <caption><p>Weekly OTIF report</p><Button report={OTIF.map(item=> preferedOrder(item,preferredOrderSetup))} name="OTIF"></Button></caption>
                <thead>
                    <tr>
                        {generateTable(OTIF).headers}
                    </tr>
                </thead>
                <tbody>
                        {generateTable(OTIF).tables.map((item , index)=><tr key={index}>{item}</tr>)}
                </tbody>
            </Table> : null}
            {visibletable === 2 ? <Table>
                    <caption><p>Weekly OPEN OTIF report</p><Button report={OPEN.map(item=> preferedOrder(item,preferredOrderSetup))} name="OPEN"></Button></caption>
                    <thead>
                        <tr>
                            {generateTable(OPEN).headers}
                            
                        </tr>
                    </thead>
                    <tbody>
                            {generateTable(OPEN).tables.map((item , index)=><tr key={index}>{item}</tr>)}
                            
                    </tbody>
            </Table> : null}
            {visibletable === 3 ? <Table>
                    <caption><p>OPEN + OTIF duplicates red</p><Button report={noDuplicate(OPEN , OTIF).map(item=> preferedOrder(item,preferredOrderSetup))} name="OPEN OTIF REMOVED DUPLICATES"></Button></caption>
                    <thead>
                        <tr>
                            {generateTable(noDuplicate(OPEN , OTIF)).headers}
                        </tr>
                    </thead>
                    <tbody>
                            {generateTable(noDuplicate(OPEN , OTIF)).tables.map((item , index)=><tr key={index}>{item}</tr>)}
                    </tbody>
            </Table> : null}
            <ExcelDownloadSeparateButton name={"Celestica OPEN + OTIF"} report={null} customer={"CLS"} file={noDuplicate(OPEN , OTIF).map(item=> preferedOrder(item,preferredOrderSetup))}></ExcelDownloadSeparateButton>
            <ExcelDownloadSeparateButton name={"JABIL OPEN + OTIF"} report={null} customer={"JBL"} file={noDuplicate(OPEN , OTIF).map(item=> preferedOrder(item,preferredOrderSetup))}></ExcelDownloadSeparateButton>
            <ExcelDownloadSeparateButton name={"STOCKPORT OPEN + OTIF"} report={null} customer={"STK"} file={noDuplicate(OPEN , OTIF).map(item=> preferedOrder(item,preferredOrderSetup))}></ExcelDownloadSeparateButton>
            <br></br>
            <ExcelDownloadSeparateButton name={"Celestica OTIF"} customer={"CLS"} report={"OTIF"} file={noDuplicate(OPEN , OTIF).map(item=> preferedOrder(item,preferredOrderSetup))}></ExcelDownloadSeparateButton>
            <ExcelDownloadSeparateButton name={"JABIL OTIF"} customer={"JBL"} report={"OTIF"} file={noDuplicate(OPEN , OTIF).map(item=> preferedOrder(item,preferredOrderSetup))}></ExcelDownloadSeparateButton>
            <ExcelDownloadSeparateButton name={"STOCKPORT OTIF"} customer={"STK"} report={"OTIF"} file={noDuplicate(OPEN , OTIF).map(item=> preferedOrder(item,preferredOrderSetup))}></ExcelDownloadSeparateButton>
            <br></br>
            <ExcelDownloadSeparateButton name={"Celestica OPEN"} customer={"CLS"} report={"OPEN"} file={noDuplicate(OPEN , OTIF).map(item=> preferedOrder(item,preferredOrderSetup))}></ExcelDownloadSeparateButton>
            <ExcelDownloadSeparateButton name={"JABIL OPEN"} customer={"JBL"} report={"OPEN"} file={noDuplicate(OPEN , OTIF).map(item=> preferedOrder(item,preferredOrderSetup))}></ExcelDownloadSeparateButton>
            <ExcelDownloadSeparateButton name={"STOCKPORT OPEN"} customer={"STK"} report={"OPEN"} file={noDuplicate(OPEN , OTIF).map(item=> preferedOrder(item,preferredOrderSetup))}></ExcelDownloadSeparateButton>
            <ReportValidationFunction></ReportValidationFunction>
        </div>
        )
    
}

const mapStateToProps = state =>({
    OTIF: state.displayDataReducer[0],
    OPEN: state.displayDataReducer[1]
})

export default connect(mapStateToProps)(DisplayList);