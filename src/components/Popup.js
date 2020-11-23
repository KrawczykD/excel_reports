import React from "react";
import { PopupDiv } from "./Popup.css";
import ButtonHead from "./DownloadExcelButton";
import { connect } from "react-redux";
import { useState, useEffect, useReducer } from "react";

const Popup = ({ loadedCustomers }) => {
  let list = loadedCustomers.map((item, index) => <li key={index}>{item}</li>);

  let [shake, setCount] = useState(0.7);
  let [color, setColor] = useState("FFFFFF");

  useEffect(() => {
    if (list.length !== 0) {
      setCount((shake = 3));
      setColor((color = "7AB800"));

      setTimeout(() => {
        setCount((shake = 0));
      }, 100);
      setTimeout(() => {
        setCount((shake = 0.7));
        setColor((color = "FFFFFF"));
      }, 300);
    }
  }, [loadedCustomers]);

  return (
    <PopupDiv shake={shake} color={color}>
      <ButtonHead buttonName={`Loaded Reports ${list.length}`}></ButtonHead>
      <ul>{list.length === 0 ? <li>Please load report</li> : list}</ul>
    </PopupDiv>
  );
};

const mapStateToProps = (state) => ({
  loadedCustomers: state.loadedCustomersReducer,
});

export default connect(mapStateToProps)(Popup);
