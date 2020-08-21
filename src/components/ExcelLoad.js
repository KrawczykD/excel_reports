import React, { Component } from 'react';
import XLSX from 'xlsx';
import {connect} from 'react-redux';
import addFile from '../actions/addFileActions';

const SheetJSFT = [
	"xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(function(x) { return "." + x; }).join(",");

export const make_cols = refstr => {
	let o = [], C = XLSX.utils.decode_range(refstr).e.c + 1;
	for(var i = 0; i < C; ++i) o[i] = {name:XLSX.utils.encode_col(i), key:i}
	return o;
};
 
class ExcelLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
      cols: [],
      report: null
    }
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
  };

 
  handleFile() {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
 
    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA : true });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      /*Add to object report type*/
      data.unshift(this.state.report)
      /* Update state */
      this.setState({ data: data, cols: make_cols(ws['!ref']) }, () => {
        // console.log(JSON.stringify(this.state.data, null, 2));
        this.props.addFile(this.state.data)
      });
 
    };
 
    if (rABS) {
      reader.readAsBinaryString(this.state.file);
    } else {
      reader.readAsArrayBuffer(this.state.file);
    };
  }


  handleReportChange = (e)=>{
    this.setState({
      report: e.target.value
    })
  }


 
  render() {
    return (
        <div>
            <label htmlFor="file">Upload an excel files</label>
            <br />
            <input type="file" className="form-control" id="file" accept={SheetJSFT} onChange={this.handleChange}/>
            <select name="report" id="report" onChange={this.handleReportChange}>
              <option value=""></option>
              <option value="OTIF">OTIF</option>
              <option value="OPEN_OTIF">OPEN OTIF</option>
            </select>
            
            <input type='submit' value="Load File" onClick={this.handleFile} />
        </div>
      
    )
  }
}

const mapDispatchToProps = (dispatch)=>({
    addFile : (data)=> dispatch(addFile(data))
})


export default connect(null,mapDispatchToProps)(ExcelLoad);