import React from "react";
import exportFromJSON from "export-from-json";
import Buttons from "./Button.css.js";

const Button = ({ report, name }) => {
  const handleDownloadExcel = () => {
    const date = new Date().toLocaleDateString();
    const data = report;
    const fileName = `${name}_${date}`;
    const exportType = "csv";

    exportFromJSON({ data, fileName, exportType });
  };
  return (
    <>
      <Buttons
        onClick={() => {
          handleDownloadExcel(report);
        }}
      >
        Download CSV File
      </Buttons>
    </>
  );
};

export default Button;
