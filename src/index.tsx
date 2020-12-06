import React from "react";
import ReactDOM from "react-dom";
import Landing from "./components/landing/Landing";
import Presentation from "./components/presentation/Presentation";
import "./index.scss";

ReactDOM.render(
  <>
    <Landing />
    <Presentation />
  </>,
  document.getElementById("root")
);
