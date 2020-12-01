import React, { Component } from "react";
import XLSX from "xlsx";
import { connect } from "react-redux";
import addFile from "../actions/addFileActions";
import changeWarningState from "../actions/changeWarningStateAction";
import addCustomer from "../actions/loadedCustomersActions";
import { Input, Label } from "./Input.css.js";
import Select from "./Select.css.js";
import ExcelLoadDiv from "./ExcelLoad.css";
import spinerToggle from "../actions/spinerAction";

import logo from "../assets/images/landisgyr_logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const SheetJSFT = [
  "xlsx",
  "xlsb",
  "xlsm",
  "xls",
  "xml",
  "csv",
  "txt",
  "ods",
  "fods",
  "uos",
  "sylk",
  "dif",
  "dbf",
  "prn",
  "qpw",
  "123",
  "wb*",
  "wq*",
  "html",
  "htm",
]
  .map(function (x) {
    return "." + x;
  })
  .join(",");

export const make_cols = (refstr) => {
  let o = [],
    C = XLSX.utils.decode_range(refstr).e.c + 1;
  for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i };
  return o;
};

export let state = null;

class ExcelLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: [],
      data: [],
      cols: [],
      report: null,
      customer: null,
      loadedCustomer: [],
      displayPopup: -500,
      displayPopupOpacity: 1,
    };

    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    state = this.state;
  }

  handleChange(e) {
    const files = e.target.files;

    let newFiles = [];

    for (let i = 0; i < files.length; i++) {
      newFiles.push(files[i]);
    }
    if (files && files[0]) this.setState({ file: newFiles }); // files[0]
  }

  handleFile(file, customer, report) {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true,
      });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      // add customer and report type

      data.map((item) => (item["Report Customer"] = customer));
      data.map((item) => (item.report = report));
      /*Add to object report type and customer*/
      // data.unshift(this.state.report);
      /* Update state */
      this.setState({ data: data, cols: make_cols(ws["!ref"]) }, () => {
        // console.log(JSON.stringify(this.state.data, null, 2));
        this.props.addFile(this.state.data);
      });
    };

    if (rABS) {
      reader.readAsBinaryString(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
  }

  handleReportChange = (e) => {
    if (e.target.id === "report") {
      this.setState({
        report: e.target.value,
      });
    }
    if (e.target.id === "customer") {
      this.setState({
        customer: e.target.value,
      });
    }
  };

  checkReport = () => {
    for (let i = 0; i < this.state.file.length; i++) {
      if (this.state.file[i].name.length === 13) {
        let customer = this.state.file[i].name.slice(0, 3);
        let report = this.state.file[i].name.slice(4, 8);
        this.handleFile(this.state.file[i], customer, report);

        this.props.addCustomer(`${customer} ${report}`);
      } else if (this.state.file[i].name.length === 18) {
        let customer = this.state.file[i].name.slice(0, 8);
        let report = this.state.file[i].name.slice(9, 13);
        this.handleFile(this.state.file[i], customer, report);

        this.props.addCustomer(`${customer} ${report}`);
      } else {
        this.props.changeWarningState(true);
        return null;
      }
    }

    this.props.changeWarningState(false);
  };

  render() {
    return (
      <ExcelLoadDiv>
        <a
          href="https://landisgyr.sharepoint.com/sites/intranet/"
          title="Landis+Gyr website"
        >
          <img
            alt="Landis and Gyr logo"
            src={logo}
            width="100px"
            // style={{ position: "absolute", top: "0", right: "0" }}
            style={{ float: "right" }}
          ></img>
        </a>
        <FontAwesomeIcon
          onClick={() => {
            this.props.toggleTour(true);
          }}
          style={{
            float: "right",
            width: "20px",
            height: "20px",
            marginTop: "25px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "50px",
            cursor: "pointer",
          }}
          icon={faInfo}
        />
        {/* <button
          style={{
            float: "right",
            marginTop: "40px",
            background: "#7ab800",
            border: "none",
          }}
          onClick={() => {
            this.props.toggleTour(true);
          }}
        >
          Tour
        </button> */}
        <br></br>

        <Label htmlFor="file" className="tour-2">
          Upload an excel files
        </Label>
        <Input
          multiple="multiple"
          type="file"
          className="form-control"
          id="file"
          accept={SheetJSFT}
          onChange={this.handleChange}
        />

        <Label color={this.state.success} htmlFor="submit" className="tour-3">
          Load Files
        </Label>
        <Input
          className="LoadFile"
          id="submit"
          type="submit"
          value="Load File"
          onClick={() => {
            this.checkReport();
          }}
        />
      </ExcelLoadDiv>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addFile: (data) => dispatch(addFile(data)),
  changeWarningState: (state) => dispatch(changeWarningState(state)),
  addCustomer: (state) => dispatch(addCustomer(state)),
  spinerToggle: (toggle) => dispatch(spinerToggle(toggle)),
});

export default connect(null, mapDispatchToProps)(ExcelLoad);
