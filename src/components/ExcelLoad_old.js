import React, { Component } from "react";
import XLSX from "xlsx";
import { connect } from "react-redux";
import addFile from "../actions/addFileActions";
import changeWarningState from "../actions/changeWarningStateAction";
import addCustomer from "../actions/loadedCustomersActions";
import { Input, Label } from "./Input.css.js";
import Select from "./Select.css.js";
import ExcelLoadDiv from "./ExcelLoad.css";

import logo from "../assets/images/landisgyr_logo.png";

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
      file: {},
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
    console.log(files);
    if (files && files[0]) this.setState({ file: files[0] });
  }

  handleFile() {
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

      data.map((item) => (item["Report Customer"] = this.state.customer));
      data.map((item) => (item.report = this.state.report));
      /*Add to object report type and customer*/
      // data.unshift(this.state.report);
      /* Update state */
      this.setState({ data: data, cols: make_cols(ws["!ref"]) }, () => {
        // console.log(JSON.stringify(this.state.data, null, 2));
        this.props.addFile(this.state.data);
      });

      this.setState({
        customer: null,
        report: null,
      });

      document.getElementById("report").value = "";
      document.getElementById("customer").value = "";
    };

    if (rABS) {
      reader.readAsBinaryString(this.state.file);
    } else {
      reader.readAsArrayBuffer(this.state.file);
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
    if (this.state.file.name !== undefined) {
      if (
        this.state.file.name.slice(0, 8) ===
          `${this.state.customer}_${this.state.report}` ||
        this.state.file.name.slice(0, 13) ===
          `${this.state.customer}_${this.state.report}`
      ) {
        this.props.changeWarningState(false);
        this.props.addCustomer(`${this.state.customer} ${this.state.report}`);
        this.setState({
          loadedCustomer: [
            ...this.state.loadedCustomer,
            `${this.state.customer} ${this.state.report} `,
          ],
        });

        return this.handleFile();
      } else {
        this.props.changeWarningState(true);
        return null;
      }
    } else {
      this.props.changeWarningState(true);
      return null;
    }
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
            style={{ position: "absolute", top: "0", right: "0" }}
          ></img>
        </a>
        <br></br>

        <Label htmlFor="file">Upload an excel files</Label>
        <Input
          type="file"
          className="form-control"
          id="file"
          accept={SheetJSFT}
          onChange={this.handleChange}
        />

        <Select name="report" id="report" onChange={this.handleReportChange}>
          <option value=""></option>
          <option value="OPEN">OPEN</option>
          <option value="OTIF">OTIF</option>
        </Select>

        <Select
          name="customer"
          id="customer"
          onChange={this.handleReportChange}
        >
          <option value=""></option>
          <option value="CLS">CLS</option>
          <option value="JBL">JBL</option>
          <option value="STK">STK</option>
          <option value="CUST_CLS">CUST_CLS</option>
          <option value="CUST_JBL">CUST_JBL</option>
          <option value="CUST_STK">CUST_STK</option>
        </Select>

        <Label color={this.state.success} htmlFor="submit">
          Load File
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
});

export default connect(null, mapDispatchToProps)(ExcelLoad);
