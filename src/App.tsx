import { useState } from "react";
import { Layout, Menu, Button, Divider } from "@arco-design/web-react";
import { IconCaretRight, IconCaretLeft } from "@arco-design/web-react/icon";
import { Link, Outlet } from "react-router-dom";
import { IconFolder, IconApps } from "@arco-design/web-react/icon";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="layout-collapse-demo h-screen relative">
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        breakpoint="xl"
        className="h-screen"
      >
        <Header
          style={{
            width: "98%",
            backgroundColor: "#4682b4",
            position: "fixed",
            zIndex: 20,
          }}
        >
          <span className="ml-4 text-xl text-white">Components</span>
        </Header>
        <Button
          shape="circle"
          type="secondary"
          size="large"
          className="absolute top-10 -right-2"
          style={{ zIndex: 100, boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}
          onClick={handleCollapsed}
        >
          {collapsed ? <IconCaretRight /> : <IconCaretLeft />}
        </Button>
        <Menu
          defaultOpenKeys={["0"]}
          defaultSelectedKeys={["0"]}
          style={{ width: "100%", marginTop: 70 }}
        >
          <Link to="/getStarted">
            <MenuItem key="0">
              <IconApps /> Getting Started
            </MenuItem>
          </Link>

          {/* BUTTON SECTION */}
          <SubMenu
            key="1_0"
            title={
              <span>
                <IconFolder />
                Button
              </span>
            }
          >
            <Link to="/button">
              <MenuItem key="1_1">
                <IconApps /> Docs
              </MenuItem>
            </Link>
            <Link to="/buttongroup">
              <MenuItem key="1_2">
                <IconApps /> ButtonGroup
              </MenuItem>
            </Link>

            <Link to="/buttonShape">
              <MenuItem key="1_3">
                <IconApps /> ButtonShape
              </MenuItem>
            </Link>

            <Link to="/iconButton">
              <MenuItem key="1_4">
                <IconApps /> IconButton
              </MenuItem>
            </Link>

            <Link to="/longButton">
              <MenuItem key="1_5">
                <IconApps /> LongButton
              </MenuItem>
            </Link>

            <Link to="/buttonCatalogue">
              <MenuItem key="1_6">
                <IconApps /> Catalog
              </MenuItem>
            </Link>
          </SubMenu>
          {/* Navigation SECTION */}
          <SubMenu
            key="2_0"
            title={
              <span>
                <IconFolder />
                Navigation
              </span>
            }
          >
            <SubMenu key="2_1" title={[<IconFolder />, "Breadcrumb"]}>
              <Link to="/breadcrumb">
                <MenuItem key="2_1_1">
                  <IconApps /> Breadcrumb
                </MenuItem>
              </Link>
              <Link to="/dropbreadcrumb">
                <MenuItem key="2_1_2">
                  <IconApps /> DropdownBreadcrumb
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="2_3" title={[<IconFolder />, "Dropdown"]}>
              <Link to="/dropdown">
                <MenuItem key="2_3_1">
                  <IconApps /> Dropdown
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="2_4" title={[<IconFolder />, "Menu"]}>
              <Link to="/menu">
                <MenuItem key="2_4_1">
                  <IconApps /> Menu
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="2_5" title={[<IconFolder />, "Step"]}>
              <Link to="/step">
                <MenuItem key="2_5_1">
                  <IconApps /> Step
                </MenuItem>
              </Link>
            </SubMenu>
          </SubMenu>

          {/* DataEntry SECTION */}
          <SubMenu
            key="3_0"
            title={
              <span>
                <IconFolder />
                DataEntry
              </span>
            }
          >
            <SubMenu key="3_1" title={[<IconFolder />, "AutoComplete"]}>
              <Link to="/autocomplete">
                <MenuItem key="3_1_1">
                  <IconApps /> AutoComplete
                </MenuItem>
              </Link>
              <MenuItem key="3_1_2">
                <IconApps /> Menu 2
              </MenuItem>
            </SubMenu>
            <SubMenu key="3_2" title={[<IconFolder />, "Cascader"]}>
              <Link to="/cascader">
                <MenuItem key="3_2_1">
                  <IconApps /> Cascader
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_3" title={[<IconFolder />, "Checkbox"]}>
              <Link to="/checkbox">
                <MenuItem key="3_3_1">
                  <IconApps /> Checkbox
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_4" title={[<IconFolder />, "ColorPicker"]}>
              <Link to="/colorpicker">
                <MenuItem key="3_4_1">
                  <IconApps /> Colorpicker
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_5" title={[<IconFolder />, "Datepicker"]}>
              <Link to="/datepicker">
                <MenuItem key="3_5_1">
                  <IconApps /> DatePicker
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_6" title={[<IconFolder />, "Form"]}>
              <Link to="/form">
                <MenuItem key="3_6_1">
                  <IconApps /> Form
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_7" title={[<IconFolder />, "Input"]}>
              <Link to="/inputs">
                <MenuItem key="3_7_1">
                  <IconApps /> Input
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_8" title={[<IconFolder />, "InputTag"]}>
              <Link to="/inputTag">
                <MenuItem key="3_8_1">
                  <IconApps /> InputTag
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_9" title={[<IconFolder />, "InputNumber"]}>
              <Link to="/inputnumber">
                <MenuItem key="3_9_1">
                  <IconApps /> InputNumber
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_10" title={[<IconFolder />, "Radio"]}>
              <Link to="/radio">
                <MenuItem key="3_10_1">
                  <IconApps /> Radio
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_11" title={[<IconFolder />, "Select"]}>
              <Link to="/select">
                <MenuItem key="3_11_1">
                  <IconApps /> Select
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_12" title={[<IconFolder />, "Slider"]}>
              <Link to="/slider">
                <MenuItem key="3_12_1">
                  <IconApps /> Slider
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_13" title={[<IconFolder />, "Switch"]}>
              <Link to="/switch">
                <MenuItem key="3_13_1">
                  <IconApps /> Switch
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_14" title={[<IconFolder />, "TimePicker"]}>
              <Link to="/timepicker">
                <MenuItem key="3_14_1">
                  <IconApps /> TimePicker
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_15" title={[<IconFolder />, "Upload"]}>
              <Link to="/upload">
                <MenuItem key="3_15_1">
                  <IconApps /> Upload
                </MenuItem>
              </Link>
            </SubMenu>
          </SubMenu>

          {/* DataDisplay SECTION */}
          <SubMenu
            key="4_0"
            title={
              <span>
                <IconFolder />
                DataDisplay
              </span>
            }
          >
            <SubMenu key="4_1" title={[<IconFolder />, "Avatar"]}>
              <Link to="/avatar">
                <MenuItem key="4_1_1">
                  <IconApps /> Avatar
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_17" title={[<IconFolder />, "Badge"]}>
              <Link to="/badge">
                <MenuItem key="4_17_1">
                  <IconApps /> Badge
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_2" title={[<IconFolder />, "Calendar"]}>
              <Link to="/Calendar">
                <MenuItem key="4_2_1">
                  <IconApps /> Calendar
                </MenuItem>
              </Link>
              <Link to="/Catalog">
                <MenuItem key="4_2_2">
                  <IconApps /> Catalog
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_3" title={[<IconFolder />, "Card"]}>
              <Link to="/card">
                <MenuItem key="4_3_1">
                  <IconApps /> Card
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_4" title={[<IconFolder />, "Collapse"]}>
              <Link to="/collapse">
                <MenuItem key="4_4_1">
                  <IconApps /> Collapse
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_5" title={[<IconFolder />, "Comment"]}>
              <Link to="/comment">
                <MenuItem key="4_5_1">
                  <IconApps /> Comment
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_6" title={[<IconFolder />, "Description"]}>
              <Link to="/description">
                <MenuItem key="4_6_1">
                  <IconApps /> Description
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_7" title={[<IconFolder />, "Image"]}>
              <Link to="/image">
                <MenuItem key="4_7_1">
                  <IconApps /> Image
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_8" title={[<IconFolder />, "List"]}>
              <Link to="/list">
                <MenuItem key="4_8_1">
                  <IconApps /> List
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_9" title={[<IconFolder />, "Popover"]}>
              <Link to="/popover">
                <MenuItem key="4_9_1">
                  <IconApps /> Popover
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_10" title={[<IconFolder />, "Statistic"]}>
              <Link to="/statistic">
                <MenuItem key="4_10_1">
                  <IconApps /> Statistic
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_11" title={[<IconFolder />, "Table"]}>
              <Link to="/table">
                <MenuItem key="4_11_1">
                  <IconApps /> Table
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_12" title={[<IconFolder />, "Tabs"]}>
              <Link to="/tabs">
                <MenuItem key="4_12_1">
                  <IconApps /> Tabs
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_13" title={[<IconFolder />, "Tag"]}>
              <Link to="/tag">
                <MenuItem key="4_13_1">
                  <IconApps /> Tag
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_14" title={[<IconFolder />, "Tooltip"]}>
              <Link to="/tooltip">
                <MenuItem key="4_14_1">
                  <IconApps /> Tooltip
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_15" title={[<IconFolder />, "Tree"]}>
              <Link to="/tree">
                <MenuItem key="4_15_1">
                  <IconApps /> Tree
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_16" title={[<IconFolder />, "Timeline"]}>
              <Link to="/timeline">
                <MenuItem key="4_16_1">
                  <IconApps /> Timeline
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_18" title={[<IconFolder />, "Empty"]}>
              <Link to="/empty">
                <MenuItem key="4_18_1">
                  <IconApps /> Empty
                </MenuItem>
              </Link>
            </SubMenu>
          </SubMenu>

          {/* FEEDBACK SECTION */}
          <SubMenu
            key="5_0"
            title={
              <span>
                <IconFolder />
                FeedBack
              </span>
            }
          >
            <SubMenu key="5_1" title={[<IconFolder />, "Alert"]}>
              <Link to="/alert">
                <MenuItem key="5_1_1">
                  <IconApps /> Alert
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="5_2" title={[<IconFolder />, "Drawer"]}>
              <Link to="/drawer">
                <MenuItem key="5_2_1">
                  <IconApps /> Drawer
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="5_3" title={[<IconFolder />, "Message"]}>
              <Link to="/message">
                <MenuItem key="5_3_1">
                  <IconApps /> Message
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="5_4" title={[<IconFolder />, "Modal"]}>
              <Link to="/modal">
                <MenuItem key="5_5_1">
                  <IconApps /> Modal
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="5_5" title={[<IconFolder />, "Notification"]}>
              <Link to="/notification">
                <MenuItem key="5_5_1">
                  <IconApps /> Notification
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="5_6" title={[<IconFolder />, "PopConfirm"]}>
              <Link to="/popconfirm">
                <MenuItem key="5_6_1">
                  <IconApps /> PopConfirm
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="5_7" title={[<IconFolder />, "Progress"]}>
              <Link to="/progress">
                <MenuItem key="5_7_1">
                  <IconApps /> Progress
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="5_8" title={[<IconFolder />, "Result"]}>
              <Link to="/result">
                <MenuItem key="5_8_1">
                  <IconApps /> Result
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="5_9" title={[<IconFolder />, "Spin"]}>
              <Link to="/spin">
                <MenuItem key="5_9_1">
                  <IconApps /> Spin
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="5_10" title={[<IconFolder />, "Skeleton"]}>
              <Link to="/skeleton">
                <MenuItem key="5_10_1">
                  <IconApps /> Skeleton
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="5_11" title={[<IconFolder />, "Watermark"]}>
              <Link to="/watermark">
                <MenuItem key="5_11_1">
                  <IconApps /> Watemark
                </MenuItem>
              </Link>
            </SubMenu>
          </SubMenu>

          {/* OTHERS SECTION */}
          <SubMenu
            key="6_0"
            title={
              <span>
                <IconFolder />
                Others
              </span>
            }
          >
            <SubMenu key="6_1" title={[<IconFolder />, "BackTop"]}>
              <Link to="/backtop">
                <MenuItem key="6_1_1">
                  <IconApps /> BackTop
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="6_2" title={[<IconFolder />, "ResizeBox"]}>
              <Link to="/resize">
                <MenuItem key="6_2_1">
                  <IconApps /> ResizeBox
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="6_3" title={[<IconFolder />, "Trigger"]}>
              <Link to="/trigger">
                <MenuItem key="6_3_1">
                  <IconApps /> Trigger
                </MenuItem>
              </Link>
            </SubMenu>
            {/* <SubMenu key="5_4" title={[<IconFolder />, "Modal"]}>
              <Link to="/modal">
                <MenuItem key="5_5_1">
                  <IconApps /> Modal
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="5_5" title={[<IconFolder />, "Notification"]}>
              <Link to="/notification">
                <MenuItem key="5_5_1">
                  <IconApps /> Notification
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="5_6" title={[<IconFolder />, "PopConfirm"]}>
              <MenuItem key="5_6_1">
                <IconApps /> Menu 1
              </MenuItem>
            </SubMenu> */}
          </SubMenu>

          <Link to="/separator">
            <MenuItem key="14">
              <IconApps /> Separator
            </MenuItem>
          </Link>
        </Menu>
      </Sider>

      <Layout>
        <Header
          style={{
            width: "98%",
            backgroundColor: "#4682b4",
            position: "fixed",
            zIndex: 20,
          }}
        ></Header>
        <Divider />
        <Layout>
          <Content className="py-12">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
