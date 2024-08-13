import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./styles.css";
import BaseLayout from "./components/layout/BaseLayout";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div id="container">
      <BaseLayout />
    </div>
    <div>
      <App />
    </div>
  </React.StrictMode>
);

