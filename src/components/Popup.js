import React from "react";
import { PopupDiv } from "./Popup.css";
import ButtonHead from "./DownloadExcelButton";
import { connect } from "react-redux";
import { useState, useEffect, useReducer } from "react";

const Popup = ({ loadedCustomers }) => {
  let list = loadedCustomers.map((item, index) => <li key={index}>{item}</li>);

  let [shake, setCount] = useState(0.7);

  useEffect(() => {
    if (list.length !== 0) {
      setCount((shake = 3));

      setTimeout(() => {
        setCount((shake = 0));
      }, 100);
      setTimeout(() => {
        setCount((shake = 0.7));
      }, 300);
    }
  }, [loadedCustomers]);

  return (
    <PopupDiv shake={shake} className="tour-4">
      <ButtonHead buttonName={`Loaded Reports ${list.length}`}></ButtonHead>
      <ul>{list.length === 0 ? <li>Please load report</li> : list}</ul>
    </PopupDiv>
  );
};

const mapStateToProps = (state) => ({
  loadedCustomers: state.loadedCustomersReducer,
});

export default connect(mapStateToProps)(Popup);
