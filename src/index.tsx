import React from "react";
import { createRoot } from "react-dom/client";
import Landing from "./components/landing/Landing";
import Presentation from "./components/presentation/Presentation";
import "./index.scss";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Not ready !");
}

const root = createRoot(container);

root.render(
  <>
    <Landing />
    <Presentation />
  </>
);
