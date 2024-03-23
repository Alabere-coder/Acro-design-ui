import { createBrowserRouter } from "react-router-dom";
import Alert from "./pages/DataDisplay/Avatar/Alert.tsx";
import Buttons from "./pages/Button/Button.tsx";
import Card from "./pages/DataDisplay/Card/Card.tsx";
import Checkbox from "./pages/DataEntry/Checkbox/Checkbox.tsx";
import Separator from "./pages/Separator.tsx";
import Drawer from "./pages/Drawer.tsx";
import Dropdown from "./pages/Navigation/Dropdown/Dropdown.tsx";
import List from "./pages/DataDisplay/List/List.tsx";
import Modal from "./pages/Modal.tsx";
import Popover from "./pages/DataDisplay/Popover/Popover.tsx";
import Select from "./pages/DataEntry/Select/Select.tsx";
import Table from "./pages/DataDisplay/Table/Table.tsx";
import Tabs from "./pages/DataDisplay/Tabs/Tabs.tsx";
import Textarea from "./pages/Textarea.tsx";
import Inputs from "./pages/DataEntry/Inputs/Inputs.tsx";
import App from "./App.tsx";
import ButtonGroups from "./pages/Button/ButtonGroup.tsx";
import ButtonShape from "./pages/Button/ButtonShape.tsx";
import ButtonIcon from "./pages/Button/ButtonIcon.tsx";
import LongButton from "./pages/Button/LongButton.tsx";
import ButtonCatalogue from "./pages/Button/Catalog.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import BreadcrumbComponent from "./pages/Navigation/Breadcrumb/Breadcrumb.tsx";
import MenuIComponent from "./pages/Navigation/Menu/MenuI.tsx";
import StepComponent from "./pages/Navigation/Step/StepComponent.tsx";
import DatePickerComponent from "./pages/DataEntry/DatePicker/DatePicker.tsx";
import FormComponent from "./pages/DataEntry/Form/Form.tsx";
import RadioComponent from "./pages/DataEntry/Radio/Radio.tsx";
import SliderComponent from "./pages/DataEntry/Slider/Slider.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/getStarted",
        element: <Dashboard />,
      },
      {
        path: "/alert",
        element: <Alert />,
      },

      // BUTTON COMPONENTS
      {
        path: "/button",
        element: <Buttons />,
      },
      {
        path: "/buttonGroup",
        element: <ButtonGroups />,
      },
      {
        path: "/buttonShape",
        element: <ButtonShape />,
      },
      {
        path: "/iconButton",
        element: <ButtonIcon />,
      },
      {
        path: "/longButton",
        element: <LongButton />,
      },

      {
        path: "/buttonCatalogue",
        element: <ButtonCatalogue />,
      },

      {
        path: "/card",
        element: <Card />,
      },
      // DATAENTRY
      {
        path: "/checkbox",
        element: <Checkbox />,
      },
      {
        path: "/datepicker",
        element: <DatePickerComponent />,
      },
      {
        path: "/form",
        element: <FormComponent />,
      },
      {
        path: "/inputs",
        element: <Inputs />,
      },
      {
        path: "/radio",
        element: <RadioComponent />,
      },
      {
        path: "/divider",
        element: <Separator />,
      },
      {
        path: "/slider",
        element: <SliderComponent />,
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
        path: "/breadcrumb",
        element: <BreadcrumbComponent />,
      },
      {
        path: "/menu",
        element: <MenuIComponent />,
      },
      {
        path: "/step",
        element: <StepComponent />,
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
    ],
  },
]);
