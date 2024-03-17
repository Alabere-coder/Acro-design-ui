import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Alert from "./pages/Alert.tsx";
import Buttons from "./pages/Button.tsx";
import Card from "./pages/Card.tsx";
import Checkbox from "./pages/Checkbox.tsx";
import Dialog from "./pages/Dialog.tsx";
import Separator from "./pages/Separator.tsx";
import Drawer from "./pages/Drawer.tsx";
import Dropdown from "./pages/Dropdown.tsx";
import List from "./pages/List.tsx";
import Modal from "./pages/Modal.tsx";
import Popover from "./pages/Popover.tsx";
import Select from "./pages/Select.tsx";
import Table from "./pages/Table.tsx";
import Tabs from "./pages/Tabs.tsx";
import Textarea from "./pages/Textarea.tsx";
import Home from "./pages/Home.tsx";
import Inputs from "./pages/Inputs.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/alert",
    element: <Alert />,
  },
  {
    path: "/button",
    element: <Buttons />,
  },
  {
    path: "/card",
    element: <Card />,
  },
  {
    path: "/checkbox",
    element: <Checkbox />,
  },
  {
    path: "/dialog",
    element: <Dialog />,
  },
  {
    path: "/divider",
    element: <Separator />,
  },
  {
    path: "/drawer",
    element: <Drawer />,
  },
  {
    path: "/dropdown",
    element: <Dropdown />,
  },
  {
    path: "/input",
    element: <Inputs />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/modal",
    element: <Modal />,
  },
  {
    path: "/popover",
    element: <Popover />,
  },
  {
    path: "/select",
    element: <Select />,
  },
  {
    path: "/table",
    element: <Table />,
  },
  {
    path: "/tabs",
    element: <Tabs />,
  },
  {
    path: "/textarea",
    element: <Textarea />,
  },
]);
