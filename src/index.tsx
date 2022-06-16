import React from "react";

import ReactDOM from "react-dom/client";
import { DnDSample } from "./dnd_components/DnDSample";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DnDSample />
  </React.StrictMode>
);
