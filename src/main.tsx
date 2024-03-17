import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import enUS from "@arco-design/web-react/es/locale/en-US";
import "@arco-design/web-react/dist/css/arco.css";
// import "@arco-themes/react-molly/css/arco.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "@arco-design/web-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider locale={enUS}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
