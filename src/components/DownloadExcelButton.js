import React from "react";
import exportFromJSON from "export-from-json";
import Buttons from "./Button.css.js";

const Button = ({ report, name, buttonName }) => {
  const handleDownloadExcel = () => {
    if (report !== undefined) {
      const date = new Date().toLocaleDateString();
      const data = report;
      const fileName = `${name}_${date}`;
      const exportType = "csv";

      exportFromJSON({ data, fileName, exportType });
    } else return null;
  };
  return (
    <>
      <Buttons
        onClick={() => {
          handleDownloadExcel(report);
        }}
      >
        {buttonName}
      </Buttons>
    </>
  );
};

export default Button;
