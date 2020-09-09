    session.findById("wnd[0]").maximize
    session.findById("wnd[0]/tbar[0]/okcd").Text = "ZSD_KPI_CL"
    session.findById("wnd[0]").sendVKey 0
    session.findById("wnd[0]/tbar[1]/btn[17]").press
    session.findById("wnd[1]/usr/txtENAME-LOW").Text = ""
    session.findById("wnd[1]/usr/txtENAME-LOW").SetFocus
    session.findById("wnd[1]/usr/txtENAME-LOW").caretPosition = 0
    session.findById("wnd[1]/tbar[0]/btn[8]").press
    session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").setCurrentCell 12, "TEXT"
    session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").selectedRows = "12"
    session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").doubleClickCurrentCell
    session.findById("wnd[0]/usr/ctxtSO_ERDAT-LOW").Text = Cells(2, 1).Value
    session.findById("wnd[0]/usr/ctxtSO_ERDAT-HIGH").Text = Cells(2, 2).Value
    session.findById("wnd[0]/tbar[1]/btn[8]").press
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").setCurrentCell -1, ""
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").SelectAll
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").contextMenu
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectContextMenuItem "&XXL"
    session.findById("wnd[1]/tbar[0]/btn[0]").press
    session.findById("wnd[1]/usr/ctxtDY_PATH").Text = "C:\reports"
    session.findById("wnd[1]/usr/ctxtDY_FILENAME").Text = "STK_OPEN.XLSX"
    session.findById("wnd[1]/usr/ctxtDY_FILENAME").caretPosition = 13
    session.findById("wnd[1]/tbar[0]/btn[0]").press
    session.findById("wnd[0]/mbar/menu[3]/menu[0]/menu[1]").Select
    session.findById("wnd[1]/usr/cntlGRID/shellcont/shell").setCurrentCell 24, "TEXT"
    session.findById("wnd[1]/usr/cntlGRID/shellcont/shell").selectedRows = "24"
    session.findById("wnd[1]/usr/cntlGRID/shellcont/shell").doubleClickCurrentCell
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").setCurrentCell -1, ""
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").SelectAll
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").contextMenu
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectContextMenuItem "&XXL"
    session.findById("wnd[1]/tbar[0]/btn[0]").press
    session.findById("wnd[1]/usr/ctxtDY_PATH").Text = "C:\reports"
    session.findById("wnd[1]/usr/ctxtDY_FILENAME").Text = "STK_OTIF.XLSX"
    session.findById("wnd[1]/usr/ctxtDY_FILENAME").caretPosition = 13
    session.findById("wnd[1]/tbar[0]/btn[0]").press
    session.findById("wnd[0]/tbar[0]/btn[3]").press
    session.findById("wnd[0]/tbar[0]/btn[3]").press

    session.findById("wnd[0]").maximize
    session.findById("wnd[0]/tbar[0]/okcd").Text = "ZSD_KPI_CL"
    session.findById("wnd[0]").sendVKey 0
    session.findById("wnd[0]/tbar[1]/btn[17]").press
    session.findById("wnd[1]/usr/txtENAME-LOW").Text = ""
    session.findById("wnd[1]/usr/txtENAME-LOW").SetFocus
    session.findById("wnd[1]/usr/txtENAME-LOW").caretPosition = 0
    session.findById("wnd[1]/tbar[0]/btn[8]").press
    session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").setCurrentCell 11, "TEXT"
    session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").selectedRows = "11"
    session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").doubleClickCurrentCell
    session.findById("wnd[0]/usr/ctxtSO_ERDAT-LOW").Text = Cells(2, 1).Value
    session.findById("wnd[0]/usr/ctxtSO_ERDAT-HIGH").Text = Cells(2, 2).Value
    session.findById("wnd[0]/tbar[1]/btn[8]").press
    session.findById("wnd[0]/mbar/menu[3]/menu[0]/menu[1]").Select
    session.findById("wnd[1]/usr/cntlGRID/shellcont/shell").setCurrentCell 18, "TEXT"
    session.findById("wnd[1]/usr/cntlGRID/shellcont/shell").selectedRows = "18"
    session.findById("wnd[1]/usr/cntlGRID/shellcont/shell").doubleClickCurrentCell
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").setCurrentCell -1, ""
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").SelectAll
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").contextMenu
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectContextMenuItem "&XXL"
    session.findById("wnd[1]/tbar[0]/btn[0]").press
    session.findById("wnd[1]/usr/ctxtDY_PATH").Text = "C:\reports"
    session.findById("wnd[1]/usr/ctxtDY_FILENAME").Text = "JBL_OPEN.XLSX"
    session.findById("wnd[1]/usr/ctxtDY_FILENAME").caretPosition = 13
    session.findById("wnd[1]/tbar[0]/btn[0]").press
    session.findById("wnd[0]/mbar/menu[3]/menu[0]/menu[1]").Select
    session.findById("wnd[1]/usr/cntlGRID/shellcont/shell").setCurrentCell 19, "TEXT"
    session.findById("wnd[1]/usr/cntlGRID/shellcont/shell").selectedRows = "19"
    session.findById("wnd[1]/usr/cntlGRID/shellcont/shell").doubleClickCurrentCell
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").setCurrentCell -1, ""
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").SelectAll
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").contextMenu
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectContextMenuItem "&XXL"
    session.findById("wnd[1]/tbar[0]/btn[0]").press
    session.findById("wnd[1]/usr/ctxtDY_PATH").Text = "C:\reports"
    session.findById("wnd[1]/usr/ctxtDY_FILENAME").Text = "JBL_OTIF.XLSX"
    session.findById("wnd[1]/usr/ctxtDY_FILENAME").caretPosition = 13
    session.findById("wnd[1]/tbar[0]/btn[0]").press
    session.findById("wnd[0]/tbar[0]/btn[3]").press
    session.findById("wnd[0]/tbar[0]/btn[3]").press

    session.findById("wnd[0]").maximize
    session.findById("wnd[0]/tbar[0]/okcd").Text = "ZSD_KPI_CL"
    session.findById("wnd[0]").sendVKey 0
    session.findById("wnd[0]/tbar[1]/btn[17]").press
    session.findById("wnd[1]/usr/txtENAME-LOW").Text = ""
    session.findById("wnd[1]/usr/txtENAME-LOW").SetFocus
    session.findById("wnd[1]/usr/txtENAME-LOW").caretPosition = 0
    session.findById("wnd[1]/tbar[0]/btn[8]").press
    session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").setCurrentCell 11, "TEXT"
    session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").selectedRows = "11"
    session.findById("wnd[1]/usr/cntlALV_CONTAINER_1/shellcont/shell").doubleClickCurrentCell
    session.findById("wnd[0]/usr/ctxtSO_ERDAT-LOW").Text = Cells(2, 1).Value
    session.findById("wnd[0]/usr/ctxtSO_ERDAT-HIGH").Text = Cells(2, 2).Value
    session.findById("wnd[0]/tbar[1]/btn[8]").press
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").setCurrentCell -1, ""
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").SelectAll
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").contextMenu
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectContextMenuItem "&XXL"
    session.findById("wnd[1]/tbar[0]/btn[0]").press
    session.findById("wnd[1]/usr/ctxtDY_PATH").Text = "C:\reports"
    session.findById("wnd[1]/usr/ctxtDY_FILENAME").Text = "CLS_OPEN.XLSX"
    session.findById("wnd[1]/usr/ctxtDY_FILENAME").caretPosition = 13
    session.findById("wnd[1]/tbar[0]/btn[0]").press
    session.findById("wnd[0]/mbar/menu[3]/menu[0]/menu[1]").Select
    session.findById("wnd[1]/usr/cntlGRID/shellcont/shell").setCurrentCell 14, "TEXT"
    session.findById("wnd[1]/usr/cntlGRID/shellcont/shell").selectedRows = "14"
    session.findById("wnd[1]/tbar[0]/btn[0]").press
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").setCurrentCell -1, ""
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").SelectAll
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").contextMenu
    session.findById("wnd[0]/usr/cntlGRID1/shellcont/shell").selectContextMenuItem "&XXL"
    session.findById("wnd[1]/tbar[0]/btn[0]").press
    session.findById("wnd[1]/usr/ctxtDY_PATH").Text = "C:\reports"
    session.findById("wnd[1]/usr/ctxtDY_FILENAME").Text = "CLS_OTIF.XLSX"
    session.findById("wnd[1]/usr/ctxtDY_FILENAME").caretPosition = 13
    session.findById("wnd[1]/tbar[0]/btn[0]").press
    session.findById("wnd[0]/tbar[0]/btn[3]").press
    session.findById("wnd[0]/tbar[0]/btn[3]").press`
