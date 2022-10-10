import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import NavigationBar from "./layout/NavigationBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationBar>
        <Routes />
      </NavigationBar>
    </BrowserRouter>
  </React.StrictMode>
);
