import React, { useState } from "react";
import Button from "./Button.css";
import { DateInput as Input } from "./Input.css";
import { Div, Info, Img } from "./MacroDownload.css";
import sap from "../assets/images/sap.png";
import { connect } from "react-redux";
import addWeekNumber from "../actions/addWeekNumberAction";
import currentWeekNumber from "current-week-number";

const Macro = (props) => {
  // let path = `"C:\\reports\\${currentWeekNumber()}"`
  let path = `"C:\\reports"`;

  const vbs = (startDate, endDate) => {
    let excel = `If Not IsObject(application) Then
Set SapGuiAuto  = GetObject("SAPGUI")
Set application = SapGuiAuto.GetScriptingEngine
End If
If Not IsObject(connection) Then
Set connection = application.Children(0)
End If
If Not IsObject(session) Then
Set session    = connection.Children(0)
End If
If IsObject(WScript) Then
WScript.ConnectObject session,     "on"
WScript.ConnectObject application, "on"
End If
session.findById("wnd[0]").maximize
session.findById("wnd[0]/tbar[0]/okcd").text = "ZSD_KPI_CL"
session.findById("wnd[0]").sendVKey 0
session.findById("wnd[0]/tbar[1]/btn[17]").press
session.findById("wnd[1]/usr/txtENAME-LOW").text = "KRAWCZYD"
session.findById("wnd[1]/usr/txtENAME-LOW").setFocus
session.findById("wnd[1]/usr/txtENAME-LOW").caretPosition = 0
session.findById("wnd[1]/tbar[0]/btn[8]").press
session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").setCurrentCell 0,"TEXT"
session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").selectedRows = "0"
session.findById("wnd[1]/tbar[0]/btn[2]").press
session.findById("wnd[0]/usr/ctxtSO_INVPO-LOW").text = ""
session.findById("wnd[0]/usr/ctxtSO_INVPO-HIGH").text = ""
session.findById("wnd[0]/usr/ctxtSO_SHRD-LOW").text = ${startDate}
session.findById("wnd[0]/usr/ctxtSO_SHRD-HIGH").text = ${endDate}
session.findById("wnd[0]/usr/ctxtSO_INVPO-HIGH").setFocus
session.findById("wnd[0]/usr/ctxtSO_INVPO-HIGH").caretPosition = 10
session.findById("wnd[0]/tbar[1]/btn[8]").press
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "EBELN"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "EBELP"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "VBELN"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "POSNR"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "MATNR"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "ARKTX"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "WECOUNTRY"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "KUNNR"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "AGNAME1"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "SDITEMSHIPTORD"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "POCONFIRMED_FIRSTDELIV"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "POQUANTITY"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "POINVQTY"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "FLIEF_NAME"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").contextMenu
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectContextMenuItem "&XXL"
session.findById("wnd[1]/tbar[0]/btn[0]").press
session.findById("wnd[1]/usr/ctxtDY_PATH").text = ${path}
session.findById("wnd[1]/usr/ctxtDY_FILENAME").text = "CLS_OPEN.XLSX"
session.findById("wnd[1]/usr/ctxtDY_FILENAME").caretPosition = 13
session.findById("wnd[1]/tbar[0]/btn[0]").press
session.findById("wnd[0]/tbar[0]/btn[3]").press
session.findById("wnd[0]/usr/ctxtP_LAYOUT").text = "/UK JBL OPEN"
session.findById("wnd[0]/usr/ctxtP_LAYOUT").setFocus
session.findById("wnd[0]/usr/ctxtP_LAYOUT").caretPosition = 12
session.findById("wnd[0]").sendVKey 0
session.findById("wnd[0]/tbar[1]/btn[8]").press
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "EBELN"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "EBELP"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "VBELN"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "POSNR"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "MATNR"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "ARKTX"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "WECOUNTRY"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "KUNNR"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "AGNAME1"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "SDITEMSHIPTORD"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "POCONFIRMED_FIRSTDELIV"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "POQUANTITY"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "POINVQTY"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "FLIEF_NAME"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").contextMenu
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectContextMenuItem "&XXL"
session.findById("wnd[1]/tbar[0]/btn[0]").press
session.findById("wnd[1]/usr/ctxtDY_PATH").text = ${path}
session.findById("wnd[1]/usr/ctxtDY_FILENAME").text = "JBL_OPEN.XLSX"
session.findById("wnd[1]/usr/ctxtDY_FILENAME").caretPosition = 13
session.findById("wnd[1]/tbar[0]/btn[0]").press
session.findById("wnd[0]/tbar[0]/btn[3]").press
session.findById("wnd[0]/tbar[0]/btn[3]").press

If Not IsObject(application) Then
Set SapGuiAuto  = GetObject("SAPGUI")
Set application = SapGuiAuto.GetScriptingEngine
End If
If Not IsObject(connection) Then
Set connection = application.Children(0)
End If
If Not IsObject(session) Then
Set session    = connection.Children(0)
End If
If IsObject(WScript) Then
WScript.ConnectObject session,     "on"
WScript.ConnectObject application, "on"
End If
session.findById("wnd[0]").maximize
session.findById("wnd[0]/tbar[0]/okcd").text = "ZSD_KPI_CL"
session.findById("wnd[0]").sendVKey 0
session.findById("wnd[0]/tbar[1]/btn[17]").press
session.findById("wnd[1]/usr/txtENAME-LOW").text = "KRAWCZYD"
session.findById("wnd[1]/usr/txtENAME-LOW").setFocus
session.findById("wnd[1]/usr/txtENAME-LOW").caretPosition = 0
session.findById("wnd[1]/tbar[0]/btn[8]").press
session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").setCurrentCell 1,"TEXT"
session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").selectedRows = "1"
session.findById("wnd[1]/tbar[0]/btn[2]").press
session.findById("wnd[0]/usr/ctxtSO_INVSD-LOW").text = ${startDate}
session.findById("wnd[0]/usr/ctxtSO_INVSD-HIGH").text = ${endDate}
session.findById("wnd[0]/usr/ctxtSO_INVPO-LOW").text = ""
session.findById("wnd[0]/usr/ctxtSO_INVPO-HIGH").text = ""
session.findById("wnd[0]/usr/ctxtSO_INVPO-HIGH").setFocus
session.findById("wnd[0]/usr/ctxtSO_INVPO-HIGH").caretPosition = 10
session.findById("wnd[0]/tbar[1]/btn[8]").press
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").setCurrentCell -1,""
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "EBELN"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "EBELP"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "VBELN"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "POSNR"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "MATNR"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "ARKTX"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "WECOUNTRY"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "KUNNR"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "AGNAME1"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "POQUANTITY"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "POINVQTY"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "SDITEMSHIPTORD"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "POCONFIRMED_FIRSTDELIV"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "SDBILLDATE"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "FLIEF_NAME"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").contextMenu
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectContextMenuItem "&XXL"
session.findById("wnd[1]/tbar[0]/btn[0]").press
session.findById("wnd[1]/usr/ctxtDY_PATH").text = ${path}
session.findById("wnd[1]/usr/ctxtDY_FILENAME").text = "CLS_OTIF.XLSX"
session.findById("wnd[1]/usr/ctxtDY_FILENAME").caretPosition = 13
session.findById("wnd[1]/tbar[0]/btn[0]").press
session.findById("wnd[0]/tbar[0]/btn[3]").press
session.findById("wnd[0]/usr/ctxtP_LAYOUT").text = "/UK JBL OTIF"
session.findById("wnd[0]/usr/ctxtP_LAYOUT").setFocus
session.findById("wnd[0]/usr/ctxtP_LAYOUT").caretPosition = 12
session.findById("wnd[0]/tbar[1]/btn[8]").press
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").setCurrentCell -1,""
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectAll
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").contextMenu
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectContextMenuItem "&XXL"
session.findById("wnd[1]/tbar[0]/btn[0]").press
session.findById("wnd[1]/usr/ctxtDY_PATH").text = ${path}
session.findById("wnd[1]/usr/ctxtDY_FILENAME").text = "JBL_OTIF.XLSX"
session.findById("wnd[1]/usr/ctxtDY_FILENAME").caretPosition = 13
session.findById("wnd[1]/tbar[0]/btn[0]").press
session.findById("wnd[0]/tbar[0]/btn[3]").press
session.findById("wnd[0]/tbar[0]/btn[3]").press

If Not IsObject(application) Then
Set SapGuiAuto  = GetObject("SAPGUI")
Set application = SapGuiAuto.GetScriptingEngine
End If
If Not IsObject(connection) Then
Set connection = application.Children(0)
End If
If Not IsObject(session) Then
Set session    = connection.Children(0)
End If
If IsObject(WScript) Then
WScript.ConnectObject session,     "on"
WScript.ConnectObject application, "on"
End If
session.findById("wnd[0]").maximize
session.findById("wnd[0]/tbar[0]/okcd").text = "ZSD_KPI_CL"
session.findById("wnd[0]").sendVKey 0
session.findById("wnd[0]/tbar[1]/btn[17]").press
session.findById("wnd[1]/usr/txtENAME-LOW").text = "KRAWCZYD"
session.findById("wnd[1]/usr/txtENAME-LOW").setFocus
session.findById("wnd[1]/usr/txtENAME-LOW").caretPosition = 0
session.findById("wnd[1]/tbar[0]/btn[8]").press
session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").setCurrentCell 3,"TEXT"
session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").selectedRows = "3"
session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").doubleClickCurrentCell
session.findById("wnd[0]/tbar[1]/btn[8]").press
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").setCurrentCell -1,""
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectAll
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").contextMenu
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectContextMenuItem "&XXL"
session.findById("wnd[1]/tbar[0]/btn[0]").press
session.findById("wnd[1]/usr/ctxtDY_PATH").text = ${path}
session.findById("wnd[1]/usr/ctxtDY_FILENAME").text = "STK_OPEN.XLSX"
session.findById("wnd[1]/usr/ctxtDY_FILENAME").caretPosition = 13
session.findById("wnd[1]/tbar[0]/btn[0]").press
session.findById("wnd[0]/tbar[0]/btn[3]").press
session.findById("wnd[0]/tbar[0]/btn[3]").press

If Not IsObject(application) Then
Set SapGuiAuto  = GetObject("SAPGUI")
Set application = SapGuiAuto.GetScriptingEngine
End If
If Not IsObject(connection) Then
Set connection = application.Children(0)
End If
If Not IsObject(session) Then
Set session    = connection.Children(0)
End If
If IsObject(WScript) Then
WScript.ConnectObject session,     "on"
WScript.ConnectObject application, "on"
End If
session.findById("wnd[0]").maximize
session.findById("wnd[0]/tbar[0]/okcd").text = "ZSD_KPI_CL"
session.findById("wnd[0]").sendVKey 0
session.findById("wnd[0]/tbar[1]/btn[17]").press
session.findById("wnd[1]/usr/txtENAME-LOW").text = "KRAWCZYD"
session.findById("wnd[1]/usr/txtENAME-LOW").setFocus
session.findById("wnd[1]/usr/txtENAME-LOW").caretPosition = 0
session.findById("wnd[1]/tbar[0]/btn[8]").press
session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").setCurrentCell 4,"TEXT"
session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").selectedRows = "4"
session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").doubleClickCurrentCell
session.findById("wnd[0]/tbar[1]/btn[8]").press
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").setCurrentCell -1,"SDBILLINGDATE"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectColumn "SDBILLINGDATE"
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").contextMenu
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectContextMenuItem "&FILTER"
session.findById("wnd[1]/usr/ssub%_SUBSCREEN_FREESEL:SAPLSSEL:1105/ctxt%%DYN002-LOW").text = ${startDate}
session.findById("wnd[1]/usr/ssub%_SUBSCREEN_FREESEL:SAPLSSEL:1105/ctxt%%DYN002-HIGH").text = ${endDate}
session.findById("wnd[1]/usr/ssub%_SUBSCREEN_FREESEL:SAPLSSEL:1105/ctxt%%DYN002-HIGH").setFocus
session.findById("wnd[1]/usr/ssub%_SUBSCREEN_FREESEL:SAPLSSEL:1105/ctxt%%DYN002-HIGH").caretPosition = 10
session.findById("wnd[1]/tbar[0]/btn[0]").press
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").setCurrentCell -1,""
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectAll
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").contextMenu
session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectContextMenuItem "&XXL"
session.findById("wnd[1]/tbar[0]/btn[0]").press
session.findById("wnd[1]/usr/ctxtDY_PATH").text = ${path}
session.findById("wnd[1]/usr/ctxtDY_FILENAME").text = "STK_OTIF.XLSX"
session.findById("wnd[1]/usr/ctxtDY_FILENAME").caretPosition = 13
session.findById("wnd[1]/tbar[0]/btn[0]").press
session.findById("wnd[0]/tbar[0]/btn[3]").press
session.findById("wnd[0]/tbar[0]/btn[3]").press
`;

    return excel;
  };

  let startDate;
  let endDate;
  let weekDate;

  const saveData = () => {
    var blob = new Blob([vbs(startDate, endDate)], {
      type: "txt/plain;charset=utf-8",
      endings: "native",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "macro.vbs";
    document.body.appendChild(a);
    a.click();

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob);
    } else {
      var objectUrl = window.URL.revokeObjectURL(url);
      window.open(objectUrl);
    }
    props.addWeekNumber(
      `${currentWeekNumber(weekDate)}-${weekDate.slice(7, 11)}`
    );
  };

  const dateStringify = (date) => {
    let year = date.target.value.slice(0, 4);
    let month = date.target.value.slice(5, 7);
    let day = date.target.value.slice(8, 10);

    return `"${day}.${month}.${year}"`;
  };

  const dateStringifyWeekNumber = (date) => {
    let year = date.target.value.slice(0, 4);
    let month = date.target.value.slice(5, 7);
    let day = date.target.value.slice(8, 10);

    return `"${month}/${day}/${year}"`;
  };

  let [positionLeft, setPosition] = useState(-650);

  return (
    <>
      <Div left={positionLeft}>
        <Input
          type="date"
          id="start"
          name="startDate"
          onChange={(node) => (
            (startDate = dateStringify(node)),
            (weekDate = dateStringifyWeekNumber(node)),
            props.addWeekNumber(
              `${currentWeekNumber(weekDate)}-${weekDate.slice(7, 11)}`
            )
          )}
        />
        <Input
          type="date"
          id="end"
          name="endDate"
          onChange={(node) => (endDate = dateStringify(node))}
        />
        <Button
          onClick={() => {
            saveData();
          }}
        >
          {props.buttonText}
        </Button>
        <Info>
          Logged in to SAP and stay on main screen. <br></br>
          Choose start and finish report date. <br></br>
          "Click download macro for SAP" , accept warning and run macro.
          <br></br>
          All reports You can find in c:\reports
        </Info>
      </Div>
      <Img
        onClick={() => {
          setPosition(
            positionLeft === -650 ? (positionLeft = 0) : (positionLeft = -650)
          );
        }}
        src={sap}
      ></Img>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addWeekNumber: (weekNumber) => dispatch(addWeekNumber(weekNumber)),
});

export default connect(null, mapDispatchToProps)(Macro);
