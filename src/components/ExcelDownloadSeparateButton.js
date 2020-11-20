import React from "react";
import exportFromJSON from "export-from-json";
import Buttons from "./Button.css.js";

const ExcelDownloadSeparateButton = ({
  customer,
  file,
  name,
  report,
  variant,
}) => {
  const separateCustomers = (dataFile, ChoosenReport) => {
    //Report Customer = Vendor

    switch (report) {
      case "OTIF":
        return dataFile.filter((item) =>
          item["Vendor"] === customer && item["report"] === ChoosenReport
            ? item
            : null
        );

      case "OPEN":
        return dataFile.filter((item) =>
          item["Vendor"] === customer && item["report"] === ChoosenReport
            ? item
            : null
        );

      case null:
        return dataFile.filter((item) =>
          item["Vendor"] === customer ? item : null
        );

      default:
        return [];
    }
  };

  const handleDownloadExcel = () => {
    console.log(report);
    if (report !== undefined) {
      const date = new Date().toLocaleDateString();
      const data = separateCustomers(file, report);
      const fileName = `${customer}_${report ? report : "COMBINED"}_${date}`;
      const exportType = "csv";
      exportFromJSON({ data, fileName, exportType });
    } else return null;
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
