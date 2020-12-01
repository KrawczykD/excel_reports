import React, { useState } from "react";
import ExcelLoads from "./components/ExcelLoad";
import DisplayList from "./components/DisplayList";
import Footer from "./components/Footer";
import Dialog from "./components/Dialog";
import ContainerDiv from "./components/Container.css";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import Spiner from "./components/Spiner.css";
import tourSteps from "./components/tourSteps";
import Tour from "reactour";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function App({ warningState, spinerState }) {
  const Theme = {
    main: {
      color: "#7AB800",
      buttonWidth: "300",
    },
  };

  const [isTourOpen, toggleTour] = useState(false);

  return (
    <ThemeProvider theme={Theme}>
      <ContainerDiv style={{ boxSizing: "border-box", position: "relative" }}>
        <ExcelLoads
          toggleTour={(toggle) => {
            toggleTour(toggle);
          }}
        ></ExcelLoads>
        <DisplayList></DisplayList>
        <Footer></Footer>
      </ContainerDiv>
      {warningState ? (
        <Dialog text="Oops! Looks like you missed something. Check report file, customer or report type!"></Dialog>
      ) : null}
      {spinerState ? (
        <Spiner>
          <div>
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </Spiner>
      ) : null}
      <Tour
        steps={tourSteps}
        isOpen={isTourOpen}
        onRequestClose={() => toggleTour(false)}
        prevButton={
          <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faArrowLeft} />
        }
        nextButton={
          <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faArrowRight} />
        }
      />
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  warningState: state.changeWarningStateReducer,
  spinerState: state.spinerReducer,
});

export default connect(mapStateToProps)(App);
