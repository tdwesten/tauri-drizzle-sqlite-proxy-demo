import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { migrate } from "./db/migrate";
import "./styles.css";

await migrate();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
