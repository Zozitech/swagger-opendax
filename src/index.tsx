import React from "react";
import ReactDOM from "react-dom";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

ReactDOM.render(
  <React.StrictMode>
    <SwaggerUI url="/swagger.json" />
  </React.StrictMode>,
  document.getElementById("root")
);
