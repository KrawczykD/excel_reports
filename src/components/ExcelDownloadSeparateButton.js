import React from "react";
import exportFromJSON from "export-from-json";
import Buttons from "./Button.css.js";

const ExcelDownloadSeparateButton = ({ customer, file, name, report }) => {
  const separateCustomers = (dataFile, ChoosenReport) => {
    var data;

    //Report Customer = Vendor

    switch (report) {
      case "OTIF":
        return (data = dataFile.filter((item) =>
          item["Vendor"] === customer && item["report"] === ChoosenReport
            ? item
            : null
        ));

      case "OPEN":
        return (data = dataFile.filter((item) =>
          item["Vendor"] === customer && item["report"] === ChoosenReport
            ? item
            : null
        ));

      case null:
        return (data = dataFile.filter((item) =>
          item["Vendor"] === customer ? item : null
        ));

      default:
        return [];
    }
  };

  const handleDownloadExcel = () => {
    const date = new Date().toLocaleDateString();
    const data = separateCustomers(file, report);
    const fileName = `${customer}_${report ? report : "COMBINED"}_${date}`;
    const exportType = "csv";
    exportFromJSON({ data, fileName, exportType });
  };

  return (
    <>
      <Buttons
        onClick={() => {
          handleDownloadExcel();
        }}
      >
        {name}
      </Buttons>
    </>
  );
};

export default ExcelDownloadSeparateButton;
