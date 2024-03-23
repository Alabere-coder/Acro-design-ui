import React from "react";
import ReactDOM from "react-dom/client";
import enUS from "@arco-design/web-react/es/locale/en-US";
import "@arco-design/web-react/dist/css/arco.css";
// import "@arco-themes/react-molly/css/arco.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "@arco-design/web-react";
import { router } from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider locale={enUS}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
