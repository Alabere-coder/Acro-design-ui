import { createBrowserRouter } from "react-router-dom";
import Alert from "./pages/FeedBack/Alert/Alert.tsx";
import Buttons from "./pages/Button/Button.tsx";
import Card from "./pages/DataDisplay/Card/Card.tsx";
import Checkbox from "./pages/DataEntry/Checkbox/Checkbox.tsx";
import Separator from "./pages/Separator.tsx";
import Drawer from "./pages/FeedBack/Drawer/Drawer.tsx";
import Dropdown from "./pages/Navigation/Dropdown/Dropdown.tsx";
import List from "./pages/DataDisplay/List/List.tsx";
import Modal from "./pages/FeedBack/Modal/Modal.tsx";
import Popover from "./pages/DataDisplay/Popover/Popover.tsx";
import Select from "./pages/DataEntry/Select/Select.tsx";
import Table from "./pages/DataDisplay/Table/Table.tsx";
import Tabs from "./pages/DataDisplay/Tabs/Tabs.tsx";
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
import TriggerComponent from "./pages/Others/Trigger/Trigger.tsx";
import ResizeBoxComponent from "./pages/Others/ResizeBox/ResizeBox.tsx";
import BackTopComponent from "./pages/Others/BackTop/BackTop.tsx";
import MessageComponent from "./pages/FeedBack/Message/Message.tsx";
import NotificationComponent from "./pages/FeedBack/Notification/Notification.tsx";
import PopConfirmComponent from "./pages/FeedBack/PopConfirm/PopConfirm.tsx";
import ProgressComponent from "./pages/FeedBack/Progress/Progress.tsx";
import ResultComponent from "./pages/FeedBack/Result/Result.tsx";
import SpinComponent from "./pages/FeedBack/Spin/Spin.tsx";
import SkeletonComponent from "./pages/FeedBack/Skeleton/Skeleton.tsx";
import WatermarkComponent from "./pages/FeedBack/Watermark/Watermark.tsx";
import AvatarComponent from "./pages/DataDisplay/Avatar/Avatar.tsx";
import BadgeComponent from "./pages/DataDisplay/Badge/Badge.tsx";
import CalendarComponent from "./pages/DataDisplay/Calendar/Calendar.tsx";
import CollapseComponent from "./pages/DataDisplay/Collapse/Collapse.tsx";
import CommentComponent from "./pages/DataDisplay/Comment/Comment.tsx";
import DescriptionComponent from "./pages/DataDisplay/description/Description.tsx";
import ImageComponent from "./pages/DataDisplay/Image/Image.tsx";
import Statisticcomponent from "./pages/DataDisplay/Statistic/Statistic.tsx";
import TagComponent from "./pages/DataDisplay/Tag/Tag.tsx";
import TooltipComponent from "./pages/DataDisplay/Tooltip/Tooltip.tsx";
import TreeComponent from "./pages/DataDisplay/Tree/Tree.tsx";
import TimelineComponent from "./pages/DataDisplay/Timeline/Timelne.tsx";
import EmptyComponent from "./pages/DataDisplay/Empty/Empty.tsx";
import AutoCompleteComponent from "./pages/DataEntry/AutoComplete/AutoComplete.tsx";
import CascaderComponent from "./pages/DataEntry/Cascader/Cascader.tsx";
import ColorPickerComponent from "./pages/DataEntry/ColorPicker/ColorPicker.tsx";
import InputTagComponent from "./pages/DataEntry/InputTag/InputTag.tsx";
import InputNumberComponent from "./pages/DataEntry/InputNumber/InputNumber.tsx";
import UploadComponent from "./pages/DataEntry/Upload/Upload.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/getStarted",
        element: <Dashboard />,
      },
      // FEEDBACK SECTION
      {
        path: "/alert",
        element: <Alert />,
      },
      {
        path: "/message",
        element: <MessageComponent />,
      },
      {
        path: "/notification",
        element: <NotificationComponent />,
      },
      {
        path: "/popconfirm",
        element: <PopConfirmComponent />,
      },
      {
        path: "/progress",
        element: <ProgressComponent />,
      },
      {
        path: "/result",
        element: <ResultComponent />,
      },
      {
        path: "/spin",
        element: <SpinComponent />,
      },
      {
        path: "/skeleton",
        element: <SkeletonComponent />,
      },
      {
        path: "/watermark",
        element: <WatermarkComponent />,
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
        path: "/autocomplete",
        element: <AutoCompleteComponent />,
      },
      {
        path: "/cascader",
        element: <CascaderComponent />,
      },
      {
        path: "/checkbox",
        element: <Checkbox />,
      },
      {
        path: "/colorpicker",
        element: <ColorPickerComponent />,
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
        path: "/inputTag",
        element: <InputTagComponent />,
      },
      {
        path: "/inputnumber",
        element: <InputNumberComponent />,
      },
      {
        path: "/upload",
        element: <UploadComponent />,
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
        path: "/modal",
        element: <Modal />,
      },
      {
        path: "/select",
        element: <Select />,
      },

      // DATADisplay
      {
        path: "/avatar",
        element: <AvatarComponent />,
      },
      {
        path: "/badge",
        element: <BadgeComponent />,
      },
      {
        path: "/calendar",
        element: <CalendarComponent />,
      },
      {
        path: "/collapse",
        element: <CollapseComponent />,
      },
      {
        path: "/comment",
        element: <CommentComponent />,
      },
      {
        path: "/description",
        element: <DescriptionComponent />,
      },
      {
        path: "/empty",
        element: <EmptyComponent />,
      },
      {
        path: "/image",
        element: <ImageComponent />,
      },
      {
        path: "/list",
        element: <List />,
      },
      {
        path: "/popover",
        element: <Popover />,
      },
      {
        path: "/statistic",
        element: <Statisticcomponent />,
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
        path: "/tag",
        element: <TagComponent />,
      },
      {
        path: "/tooltip",
        element: <TooltipComponent />,
      },
      {
        path: "/tree",
        element: <TreeComponent />,
      },
      {
        path: "/timeline",
        element: <TimelineComponent />,
      },
      // OTHER SECTION
      {
        path: "/backtop",
        element: <BackTopComponent />,
      },
      {
        path: "/resize",
        element: <ResizeBoxComponent />,
      },
      {
        path: "/trigger",
        element: <TriggerComponent />,
      },
    ],
  },
]);
