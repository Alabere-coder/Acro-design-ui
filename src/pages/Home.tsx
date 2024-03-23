import { useState } from "react";
import { Layout, Menu, Button } from "@arco-design/web-react";
import { IconCaretRight, IconCaretLeft } from "@arco-design/web-react/icon";
import AppRoutes from "../components/AppRoutes";
import { Link } from "react-router-dom";
import { IconFolder } from "@arco-design/web-react/icon";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [clickedItem, setClickedItem] = useState("");

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuItemClick = (itemName: string) => {
    setClickedItem(itemName);
  };

  return (
    <Layout className="layout-collapse-demo relative">
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        breakpoint="xl"
        className="h-screen"
      >
        <Header
          style={{
            width: "100%",
            backgroundColor: "#4682b4",
            position: "fixed",
            zIndex: 20,
          }}
        >
          <span className="ml-4 text-xl text-white">Components</span>
          <span className="text-xl text-white">
            <span className="ml-20 text-xl text-white">{clickedItem}</span>
          </span>
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
          defaultSelectedKeys={[""]}
          style={{ width: "100%", marginTop: 70 }}
        >
          <Link to="/">
            <MenuItem
              key="0"
              onClick={() => handleMenuItemClick("Getting Started")}
            >
              Getting Started
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
              <MenuItem key="1_1" onClick={() => handleMenuItemClick("Button")}>
                Basic
              </MenuItem>
            </Link>
            <Link to="/buttongroup">
              <MenuItem
                key="1_2"
                onClick={() => handleMenuItemClick("Button/buttongroup")}
              >
                ButtonGroup
              </MenuItem>
            </Link>
            <MenuItem key="1_3">ButtonShape</MenuItem>
            <MenuItem key="1_4">ButtonSize</MenuItem>
            <MenuItem key="1_5">IconButton</MenuItem>
            <MenuItem key="1_6">LongButton</MenuItem>
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
              <MenuItem key="2_1-1">Menu 1</MenuItem>
              <MenuItem key="2_1_2">Menu 2</MenuItem>
            </SubMenu>
            <SubMenu key="2_3" title={[<IconFolder />, "Link"]}>
              <MenuItem key="2_3_1">Menu 1</MenuItem>
              <MenuItem key="2_3_2">Menu 2</MenuItem>
            </SubMenu>
            <SubMenu key="2_4" title={[<IconFolder />, "MenuItem"]}>
              <MenuItem key="2_4_1">Menu 1</MenuItem>
            </SubMenu>
            <SubMenu key="2_5" title={[<IconFolder />, "NavigationDrawer"]}>
              <MenuItem key="2_5_1">Menu 1</MenuItem>
            </SubMenu>
          </SubMenu>

          {/* LAYOUT SECTION */}
          {/* <SubMenu
            key="3_0"
            title={
              <span>
                <IconFolder />
                DataEntry
              </span>
            }
          >
            <SubMenu key="3_1" title={[<IconFolder />, "AutoComplete"]}>
              <MenuItem key="3_1_1">Menu 1</MenuItem>
              <MenuItem key="3_!_2">Menu 2</MenuItem>
            </SubMenu>
            <SubMenu key="3_2" title={[<IconFolder />, "Cascader"]}>
              <MenuItem key="3_2_1">Menu 1</MenuItem>
            </SubMenu>
            <SubMenu key="3_3" title={[<IconFolder />, "Checkbox"]}>
              <Link to="/checkbox">
                <MenuItem
                  key="3_3_1"
                  onClick={() => handleMenuItemClick("Checkbox")}
                >
                  Checkbox
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_4" title={[<IconFolder />, "ColorPicker"]}>
              <MenuItem key="3_4_1">Menu 1</MenuItem>
            </SubMenu>
            <SubMenu key="3_5" title={[<IconFolder />, "Datepicker"]}>
              <Link to="/datepicker">
                <MenuItem
                  key="3_5_1"
                  onClick={() => handleMenuItemClick("DatePicker")}
                >
                  DatePicker
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_6" title={[<IconFolder />, "Form"]}>
              <Link to="/form">
                <MenuItem
                  key="3_6_1"
                  onClick={() => handleMenuItemClick("Form")}
                >
                  Form
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_7" title={[<IconFolder />, "Input"]}>
              <Link to="/inputs">
                <MenuItem
                  key="3_7_1"
                  onClick={() => handleMenuItemClick("Input")}
                >
                  Input
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_8" title={[<IconFolder />, "InputTag"]}>
              <MenuItem key="3_8_1">Menu 1</MenuItem>
            </SubMenu>
            <SubMenu key="3_9" title={[<IconFolder />, "InputNumber"]}>
              <MenuItem key="3_9_1">Menu 1</MenuItem>
            </SubMenu>
            <SubMenu key="3_10" title={[<IconFolder />, "Radio"]}>
              <MenuItem key="3_10_1">Menu 1</MenuItem>
            </SubMenu>
            <SubMenu key="3_11" title={[<IconFolder />, "Select"]}>
              <Link to="/select">
                <MenuItem
                  key="3_11_1"
                  onClick={() => handleMenuItemClick("Select")}
                >
                  Select
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_12" title={[<IconFolder />, "Slider"]}>
              <Link to="/slider">
                <MenuItem
                  key="3_12_1"
                  onClick={() => handleMenuItemClick("Slider")}
                >
                  Slider
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_13" title={[<IconFolder />, "Switch"]}>
              <Link to="/switch">
                <MenuItem
                  key="3_13_1"
                  onClick={() => handleMenuItemClick("Switch")}
                >
                  Switch
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_14" title={[<IconFolder />, "TimePicker"]}>
              <Link to="/timepicker">
                <MenuItem
                  key="3_14_1"
                  onClick={() => handleMenuItemClick("TimePicker")}
                >
                  TimePicker
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="3_15" title={[<IconFolder />, "Upload"]}>
              <MenuItem key="3_15_1">Menu 1</MenuItem>
            </SubMenu>
          </SubMenu> */}

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
              <MenuItem key="4_1_1">Menu 1</MenuItem>
              <MenuItem key="4_1_2">Menu 2</MenuItem>
            </SubMenu>
            <SubMenu key="4_2" title={[<IconFolder />, "Calendar"]}>
              <MenuItem key="4_2_1">Menu 1</MenuItem>
              <MenuItem key="4_2_2">Menu 2</MenuItem>
            </SubMenu>
            <SubMenu key="4_3" title={[<IconFolder />, "Card"]}>
              <Link to="/card">
                <MenuItem
                  key="4_3_1"
                  onClick={() => handleMenuItemClick("Card")}
                >
                  Card
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_4" title={[<IconFolder />, "Collapse"]}>
              <MenuItem key="4_4_1">Menu 1</MenuItem>
            </SubMenu>
            <SubMenu key="4_%" title={[<IconFolder />, "Comment"]}>
              <MenuItem key="4_5_1">Menu 1</MenuItem>
            </SubMenu>
            <SubMenu key="4_6" title={[<IconFolder />, "Description"]}>
              <MenuItem key="4_6_1">Menu 1</MenuItem>
            </SubMenu>
            <SubMenu key="4_7" title={[<IconFolder />, "Image"]}>
              <MenuItem key="4_7_1">Menu 1</MenuItem>
            </SubMenu>
            <SubMenu key="4_8" title={[<IconFolder />, "List"]}>
              <Link to="/list">
                <MenuItem
                  key="4_8_1"
                  onClick={() => handleMenuItemClick("List")}
                >
                  List
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_9" title={[<IconFolder />, "Popover"]}>
              <Link to="/popover">
                <MenuItem
                  key="4_9_1"
                  onClick={() => handleMenuItemClick("Popover")}
                >
                  Popover
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_10" title={[<IconFolder />, "Statistic"]}>
              <MenuItem key="4_10_1">Menu 1</MenuItem>
            </SubMenu>
            <SubMenu key="4_11" title={[<IconFolder />, "Table"]}>
              <Link to="/table">
                <MenuItem
                  key="4_11_1"
                  onClick={() => handleMenuItemClick("Table")}
                >
                  Table
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_12" title={[<IconFolder />, "Tabs"]}>
              <Link to="/tabs">
                <MenuItem
                  key="4_12_1"
                  onClick={() => handleMenuItemClick("Tabs")}
                >
                  Tabs
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_13" title={[<IconFolder />, "Tag"]}>
              <MenuItem key="4_13_1">Menu 1</MenuItem>
            </SubMenu>
            <SubMenu key="4_14" title={[<IconFolder />, "Tooltip"]}>
              <Link to="/tooltip">
                <MenuItem
                  key="4_14_1"
                  onClick={() => handleMenuItemClick("Tooltip")}
                >
                  Tooltip
                </MenuItem>
              </Link>
            </SubMenu>
            <SubMenu key="4_15" title={[<IconFolder />, "Tree"]}>
              <MenuItem key="4_15_1">Menu 1</MenuItem>
            </SubMenu>
            <SubMenu key="4_16" title={[<IconFolder />, "Timeline"]}>
              <MenuItem key="4_16_1">Menu 1</MenuItem>
            </SubMenu>
          </SubMenu>

          {/* <Link to="/alert">
            <MenuItem key="2_0" onClick={() => handleMenuItemClick("Alert")}>
              Alert
            </MenuItem>
          </Link>

          
          

          <Link to="/drawer">
            <MenuItem key="7" onClick={() => handleMenuItemClick("Drawer")}>
              Drawer
            </MenuItem>
          </Link>
          <Link to="/dropdown">
            <MenuItem key="8" onClick={() => handleMenuItemClick("Dropdown")}>
              Dropdown
            </MenuItem>
          </Link>
          
          
          <Link to="/modal">
            <MenuItem key="11" onClick={() => handleMenuItemClick("Modal")}>
              Modal
            </MenuItem>
          </Link>
          
          
          <Link to="/separator">
            <MenuItem key="14" onClick={() => handleMenuItemClick("Separator")}>
              Separator
            </MenuItem>
          </Link>
          
          
          <Link to="/textarea">
            <MenuItem key="17" onClick={() => handleMenuItemClick("Textarea")}>
              Textarea
            </MenuItem>
          </Link>
          <Link to="/trigger">
            <MenuItem key="18" onClick={() => handleMenuItemClick("Trigger")}>
              Trigger
            </MenuItem>
          </Link>
          
          
          
          <Link to="/radio">
            <MenuItem key="22" onClick={() => handleMenuItemClick("Radio")}>
              Radio
            </MenuItem>
          </Link>
          
          
          
          <Link to="/card">
            <MenuItem key="21">component18</MenuItem>
          </Link>
          <Link to="/card">
            <MenuItem key="21">component18</MenuItem>
          </Link> */}
        </Menu>
      </Sider>

      <Layout>
        {/* <Header
          style={{
            width: "86%",
            backgroundColor: "#4682b4",
            position: "fixed",
            zIndex: 20,
          }}
        >
          <span className="ml-10 text-xl text-white">{clickedItem}</span>
        </Header> */}
        <hr />
        <Layout style={{ padding: "0 1px" }}>
          <Content style={{ padding: 16 }}>
            <AppRoutes />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
