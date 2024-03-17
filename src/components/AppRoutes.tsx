import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Buttons from "../pages/Button";
import Inputs from "../pages/Inputs";
import Card from "../pages/Card";
import Checkbox from "../pages/Checkbox";
import Dialog from "../pages/Dialog";
import Dropdown from "../pages/Dropdown";
import Select from "../pages/Select";
import Separator from "../pages/Separator";
import Alert from "../pages/Alert";
import Drawer from "../pages/Drawer";
import List from "../pages/List";
import Modal from "../pages/Modal";
import Popover from "../pages/Popover";
import Table from "../pages/Table";
import Tabs from "../pages/Tabs";
import Textarea from "../pages/Textarea";
import TriggerComponent from "../pages/Trigger";
import SwitchComponent from "../pages/Switch";
import TimePickerComponent from "../pages/TimePicker";
import SliderComponent from "../pages/Slider";
import RadioComponent from "../pages/Radio";
import FormComponent from "../pages/Form";
import DatePickerComponent from "../pages/DatePicker";
import TooltipComponent from "../pages/Tooltip";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/alert" element={<Alert />}></Route>
      <Route path="/button" element={<Buttons />}></Route>
      <Route path="/card" element={<Card />}></Route>
      <Route path="/checkbox" element={<Checkbox />}></Route>
      <Route path="/dialog" element={<Dialog />}></Route>
      <Route path="/drawer" element={<Drawer />}></Route>
      <Route path="/dropdown" element={<Dropdown />}></Route>
      <Route path="/inputs" element={<Inputs />}></Route>
      <Route path="/list" element={<List />}></Route>
      <Route path="/modal" element={<Modal />}></Route>
      <Route path="/popover" element={<Popover />}></Route>
      <Route path="/separator" element={<Separator />}></Route>
      <Route path="/select" element={<Select />}></Route>
      <Route path="/table" element={<Table />}></Route>
      <Route path="/tabs" element={<Tabs />}></Route>
      <Route path="/trigger" element={<TriggerComponent />}></Route>
      <Route path="/switch" element={<SwitchComponent />}></Route>
      <Route path="/timepicker" element={<TimePickerComponent />}></Route>
      <Route path="/slider" element={<SliderComponent />}></Route>
      <Route path="/radio" element={<RadioComponent />}></Route>
      <Route path="/form" element={<FormComponent />}></Route>
      <Route path="/datepicker" element={<DatePickerComponent />}></Route>
      <Route path="/tooltip" element={<TooltipComponent />}></Route>
      <Route path="/textarea" element={<Textarea />}></Route>
      <Route path="/textarea" element={<Textarea />}></Route>
    </Routes>
  );
};

export default AppRoutes;
