import "rapidoc";

import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
    {/* @ts-expect-error */}
    <rapi-doc spec-url="/swagger.json" render-style="view" theme="light" />
  </React.StrictMode>
);
