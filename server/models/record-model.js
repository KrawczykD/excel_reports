const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Record = new Schema({
  ["Comments (all)"]: { type: String, required: false },
  ["Country"]: { type: String, required: false },
  ["Cust Requested date"]: { type: String, required: false },
  ["Customer"]: { type: String, required: false },
  ["Description"]: { type: String, required: false },
  ["Late Category to 1st Commit"]: { type: String, required: false },
  ["Late Category to Customer requested"]: { type: String, required: false },
  ["Material"]: { type: String, required: false },
  ["OTIF V's 1st Commit"]: { type: String, required: false },
  ["OTIF V's Cust Req"]: { type: String, required: false },
  ["PO Invoice Quantity"]: { type: Number, required: false },
  ["PO Invoice created"]: { type: String, required: false },
  ["PO Quantity"]: { type: Number, required: false },
  ["PO first commited delivery date"]: { type: String, required: false },
  ["Physical delivery date (CLS&JBL)"]: { type: String, required: false },
  ["SO + Line"]: { type: String, required: false },
  ["Sales Document"]: { type: String, required: false },
  ["Sold-to party name"]: { type: String, required: false },
  ["Vendor"]: { type: String, required: false },
  ["WW-YYYY"]: { type: String, required: false },
  ["report"]: { type: String, required: false },
});

module.exports = mongoose.model("record", Record);

//sprawdzic tablice bo dodaje zamiast textu tablice
