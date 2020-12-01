import React, { useState } from "react";
import { connect } from "react-redux";
import ReportValidationFunction from "./ReportValidationFunction";
import Table from "./DisplayList.css";
import Button from "./DownloadExcelButton";
import TableButton from "./Button.css";
import ExcelDownloadSeparateButton from "./ExcelDownloadSeparateButton";
import currentWeek from "current-week-number";
import { DateInput as Input } from "./MacroDownload.css";
import DownloadVariants from "./DownloadVariants.css";
import FunctionButtons from "./FunctionButtons.css";
import MacroDownload from "./MacroDownload";
import Popup from "./Popup.js";
import spinerToggle from "../actions/spinerAction";

let databaseData;
let inputDate;

let buttonsVariants = [
  { name: "Variants for download" },
  { name: "CELESTICA OPEN + OTIF", report: null, customer: "CLS" },
  { name: "JABIL OPEN + OTIF", report: null, customer: "JBL" },
  { name: "STOCKPORT OPEN + OTIF", report: null, customer: "STK" },
  { name: "CUST CELESTICA OTIF", report: null, customer: "CUST_CLS" },
  { name: "CELESTICA OPEN", report: "OPEN", customer: "CLS" },
  { name: "JABIL OPEN", report: "OPEN", customer: "JBL" },
  { name: "STOCKPORT OPEN", report: "OPEN", customer: "STK" },
  { name: "CUST JABIL OTIF", report: null, customer: "CUST_JBL" },
  { name: "CELESTICA OTIF", report: "OTIF", customer: "CLS" },
  { name: "JABIL OTIF", report: "OTIF", customer: "JBL" },
  { name: "STOCKPORT OTIF", report: "OTIF", customer: "STK" },
  { name: "CUST STOCKPORT OTIF", report: null, customer: "CUST_STK" },
];

const dbRequest = async (date, spiner) => {
  let searchDate = `${currentWeek(date)}-${
    inputDate ? inputDate.slice(6, 10) : new Date().getFullYear()
  }`;

  await fetch(`${process.env.REACT_APP_SERVER}/getreports?date=${searchDate}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  })
    .then((response) => response.json())
    .then((data) => {
      databaseData = data;
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const dateStringify = (date) => {
  let year = date.target.value.slice(0, 4);
  let month = date.target.value.slice(5, 7);
  let day = date.target.value.slice(8, 10);

  return `${month}/${day}/${year}`;
};

dbRequest();

//here you can controll what field display

const DisplayList = ({ OTIF, OPEN, spinerToggle }) => {
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
    "Country",
    "Customer",
    "Sold-to party name",
    "PO Quantity",
    "PO Invoice Quantity",
    "Cust Requested date",
    "PO first commited delivery date",
    "PO Invoice created",
    "Vendor",
    "Physical delivery date (CLS&JBL)",
    "Physical delivery date",
    "OTIF V's 1st Commit",
    "Late Category to 1st Commit",
    "Comments (all)",
    "OTIF V's Cust Req",
    "Late Category to Customer requested",
    "report",
  ];

  const preferedOrder = (obj, order) => {
    var newObject = {};
    for (var i = 0; i < order.length; i++) {
      if (obj.hasOwnProperty(order[i])) {
        newObject[order[i]] = obj[order[i]];
      }
    }

    return newObject;
  };

  OTIF = OTIF.map((item) => preferedOrder(item, preferredOrderSetup));
  OPEN = OPEN.map((item) => preferedOrder(item, preferredOrderSetup));

  const generateTable = (report) => {
    let headers = [];
    let tables = [];
    let table = [];

    for (const property in report[0]) {
      headers.push(<th style={{ textAlign: "left" }}>{property}</th>);
    }

    for (let i = 0; i < report.length; i++) {
      for (const property in report[i]) {
        table.push(
          <td
            onClick={() => {
              console.log(report[i]);
            }}
            style={{ color: `${report[i]["Duplicate"] ? "red" : "black"}` }}
          >
            {report[i][property]}
          </td>
        );
      }
      tables.push(table);
      table = [];
    }
    spinerToggle(false);
    return { headers, tables };
  };

  const generateTableDb = (report) => {
    let headers = [];
    let tables = [];
    let table = [];

    for (const property in report[0]) {
      headers.push(<th style={{ textAlign: "left" }}>{property}</th>);
    }

    for (let i = 0; i < report.length; i++) {
      for (const property in report[i]) {
        table.push(
          <td style={{ color: `${report[i]["Duplicate"] ? "red" : "black"}` }}>
            {report[i][property]}
          </td>
        );
      }
      tables.push(table);
      table = [];
    }
    spinerToggle(false);
    return { headers, tables };
  };

  const duplicateCheck = (A, B) => {
    var myArr = A.concat(B);
    var count = 0;
    for (let i = 0; i < myArr.length; i++) {
      for (let j = 0; j < myArr.length; j++) {
        if (myArr[j]["SO + Line"] === myArr[i]["SO + Line"]) {
          count++;
          myArr[i]["Duplicate"] = true;
        }
      }
      if (count === 1) {
        myArr[i]["Duplicate"] = false;
      }
      count = 0;
    }

    return myArr;
  };

  const duplicateRemove = (A, B) => {
    var myArr = A.concat(B);
    var count = 0;

    for (let i = 0; i < myArr.length; i++) {
      for (let j = 0; j < myArr.length; j++) {
        if (myArr[j]["SO + Line"] === myArr[i]["SO + Line"]) {
          count++;
          myArr[i]["Duplicate"] = true;
        }
      }
      if (count === 1) {
        myArr[i]["Duplicate"] = false;
      }
      count = 0;
    }

    myArr = myArr.filter((item) => (item["Duplicate"] === false ? item : null));
    return myArr;
  };

  let [visibletable, setCount] = useState(3);
  let [useStyle1, leftChange1] = useState(-window.innerWidth);
  let [useStyle2, leftChange2] = useState(-window.innerWidth);
  let [useStyle3, leftChange3] = useState(0);
  let [useStyle4, leftChange4] = useState(-window.innerWidth);

  let [toggleDuplicate, toggleDuplicateRemove] = useState(false);

  let [toggleSave, saveDb] = useState(false);

  const AxiosRequest = (file) => {
    file.map((item) => {
      fetch(`${process.env.REACT_APP_SERVER}/reports`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          saveDb((toggleSave = true));
        })
        .catch((error) => {
          console.error("Error:", error);
          saveDb((toggleSave = false));
        });
      return 0;
    });
  };

  return (
    <div className="tour-0">
      <TableButton
        className="tour-6"
        onClick={() =>
          setCount(
            (visibletable = 1),
            setTimeout(() => {
              leftChange1((useStyle1 = 0));
            }, 100),
            leftChange2((useStyle2 = -window.innerWidth)),
            leftChange3((useStyle3 = -window.innerWidth)),
            leftChange4((useStyle4 = -window.innerWidth))
          )
        }
      >
        Display OTIF
      </TableButton>
      <TableButton
        onClick={() =>
          setCount(
            (visibletable = 2),
            setTimeout(() => {
              leftChange2((useStyle2 = 0));
            }, 100),
            leftChange1((useStyle1 = -window.innerWidth)),
            leftChange3((useStyle3 = -window.innerWidth)),
            leftChange4((useStyle4 = -window.innerWidth))
          )
        }
      >
        Display OPEN
      </TableButton>
      <TableButton
        onClick={() =>
          setCount(
            (visibletable = 3),
            setTimeout(() => {
              leftChange3((useStyle3 = 0));
            }, 100),
            leftChange1((useStyle1 = -window.innerWidth)),
            leftChange2((useStyle2 = -window.innerWidth)),
            leftChange4((useStyle4 = -window.innerWidth))
          )
        }
      >
        Display OPEN + OTIF
      </TableButton>
      <TableButton
        className="tour-10"
        onClick={async () => (
          await dbRequest(inputDate),
          await setCount(
            (visibletable = 4),
            await setTimeout(() => {
              leftChange4((useStyle4 = -window.innerWidth));
              leftChange4((useStyle4 = 0));
            }, 100),
            leftChange1((useStyle1 = -window.innerWidth)),
            leftChange2((useStyle2 = -window.innerWidth)),
            leftChange3((useStyle3 = -window.innerWidth))
          )
        )}
      >
        {visibletable === 4 ? "Search Database" : "Display Database"}
      </TableButton>
      {visibletable === 4 ? (
        <Input
          type="date"
          id="start"
          name="inputDate"
          onChange={(node) => (inputDate = dateStringify(node))}
        />
      ) : null}
      {visibletable !== 4 ? (
        <TableButton
          className="tour-8"
          onClick={() => {
            spinerToggle(true);
            setTimeout(() => {
              toggleDuplicateRemove((toggleDuplicate = !toggleDuplicate));
            }, 100);
          }}
        >
          {toggleDuplicate ? "Duplicates Removed" : "Duplicates Added"}
        </TableButton>
      ) : null}
      {visibletable === 1 ? (
        <Table left={useStyle1}>
          <caption>
            <p>Weekly OTIF report</p>
            <Button
              buttonName="Download CSV File"
              report={OTIF.map((item) =>
                preferedOrder(item, preferredOrderSetup)
              )}
              name="OTIF"
            ></Button>
          </caption>
          <thead>
            <tr>{generateTable(OTIF).headers}</tr>
          </thead>
          <tbody>
            {generateTable(OTIF).tables.map((item, index) => (
              <tr key={index}>{item}</tr>
            ))}
          </tbody>
        </Table>
      ) : null}
      {visibletable === 2 ? (
        <Table left={useStyle2}>
          <caption>
            <p>Weekly OPEN OTIF report</p>
            <Button
              buttonName="Download CSV File"
              report={OPEN.map((item) =>
                preferedOrder(item, preferredOrderSetup)
              )}
              name="OPEN"
            ></Button>
          </caption>
          <thead>
            <tr>{generateTable(OPEN).headers}</tr>
          </thead>
          <tbody>
            {generateTable(OPEN).tables.map((item, index) => (
              <tr key={index}>{item}</tr>
            ))}
          </tbody>
        </Table>
      ) : null}
      {visibletable === 3 ? (
        <Table left={useStyle3}>
          <caption className="tour-7">
            <p>
              {toggleDuplicate
                ? "OPEN + OTIF Duplicates Removed"
                : `OPEN + OTIF ${
                    duplicateCheck(OTIF, OPEN).filter((item) =>
                      item["Duplicate"] === true ? item : null
                    ).length
                  } Duplicates Added`}
            </p>
            <Button
              buttonName="Download CSV File"
              report={
                toggleDuplicate
                  ? duplicateRemove(OPEN, OTIF).map((item) =>
                      preferedOrder(item, preferredOrderSetup)
                    )
                  : duplicateCheck(OPEN, OTIF).map((item) =>
                      preferedOrder(item, preferredOrderSetup)
                    )
              }
              name="OPEN OTIF REMOVED DUPLICATES"
            ></Button>
          </caption>
          <thead>
            <tr>{generateTable(duplicateCheck(OPEN, OTIF)).headers}</tr>
          </thead>
          <tbody>
            {toggleDuplicate
              ? generateTable(
                  duplicateRemove(OPEN, OTIF)
                ).tables.map((item, index) => <tr key={index}>{item}</tr>)
              : generateTable(
                  duplicateCheck(OPEN, OTIF)
                ).tables.map((item, index) => <tr key={index}>{item}</tr>)}
          </tbody>
        </Table>
      ) : null}
      {visibletable === 4 ? (
        <Table left={useStyle4} style={{ height: "80vh" }}>
          {databaseData.data === undefined ? (
            <caption>
              <p>No data to display</p>
            </caption>
          ) : (
            <>
              <caption>
                <p>Database</p>
                <Button
                  buttonName="Download CSV File"
                  report={databaseData.data.map((item) =>
                    preferedOrder(item, preferredOrderSetup)
                  )}
                  name="DB"
                ></Button>
              </caption>
              <thead>
                <tr>{generateTableDb(databaseData.data).headers}</tr>
              </thead>
              <tbody>
                {generateTableDb(databaseData.data).tables.map(
                  (item, index) => (
                    <tr key={index}>{item}</tr>
                  )
                )}
              </tbody>
            </>
          )}
        </Table>
      ) : null}

      {visibletable !== 4 ? (
        <>
          <FunctionButtons>
            <TableButton
              className="tour-9"
              onClick={() => {
                AxiosRequest(
                  toggleDuplicate
                    ? duplicateRemove(OPEN, OTIF).map((item) =>
                        preferedOrder(item, preferredOrderSetup)
                      )
                    : duplicateCheck(OPEN, OTIF).map((item) =>
                        preferedOrder(item, preferredOrderSetup)
                      )
                );
              }}
            >
              {toggleSave ? "Saved!" : "Save to Database"}
            </TableButton>
            <ReportValidationFunction></ReportValidationFunction>
          </FunctionButtons>

          <DownloadVariants className="tour-11">
            {buttonsVariants.map((variant) => (
              <li>
                <ExcelDownloadSeparateButton
                  name={variant.name}
                  report={variant.report}
                  customer={variant.customer}
                  file={
                    toggleDuplicate
                      ? duplicateRemove(OPEN, OTIF).map((item) =>
                          preferedOrder(item, preferredOrderSetup)
                        )
                      : duplicateCheck(OPEN, OTIF).map((item) =>
                          preferedOrder(item, preferredOrderSetup)
                        )
                  }
                ></ExcelDownloadSeparateButton>
              </li>
            ))}
          </DownloadVariants>
          <MacroDownload buttonText="Download macro for SAP"></MacroDownload>
          <Popup></Popup>
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  OTIF: state.displayDataReducer[0],
  OPEN: state.displayDataReducer[1],
});

const mapDispatchToProps = (dispatch) => ({
  spinerToggle: (toggle) => dispatch(spinerToggle(toggle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayList);
