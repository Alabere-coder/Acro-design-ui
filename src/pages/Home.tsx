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
          defaultOpenKeys={["1"]}
          defaultSelectedKeys={["1"]}
          style={{ width: "100%", marginTop: 70 }}
        >
          <Link to="/">
            <MenuItem
              key="1"
              onClick={() => handleMenuItemClick("Getting Started")}
            >
              Getting Started
            </MenuItem>
          </Link>

          <SubMenu
            key="4"
            title={
              <span>
                <IconFolder />
                Button
              </span>
            }
          >
            {/* <MenuItem >Basic</MenuItem> */}
            <Link to="/button">
              <MenuItem key="4_1" onClick={() => handleMenuItemClick("Button")}>
                Basic
              </MenuItem>
            </Link>
            <MenuItem key="4_2">IconButton</MenuItem>
            <MenuItem key="4_3">ButtonShape</MenuItem>
            <MenuItem key="4_4">ButtonSize</MenuItem>
            <MenuItem key="4_5">ButtonGroup</MenuItem>
            <MenuItem key="4_6">LongButton</MenuItem>
          </SubMenu>

          <Link to="/alert">
            <MenuItem key="2" onClick={() => handleMenuItemClick("Alert")}>
              Alert
            </MenuItem>
          </Link>

          <Link to="/card">
            <MenuItem key="4" onClick={() => handleMenuItemClick("Card")}>
              Card
            </MenuItem>
          </Link>
          <Link to="/checkbox">
            <MenuItem key="5" onClick={() => handleMenuItemClick("Checkbox")}>
              Checkbox
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
          <Link to="/inputs">
            <MenuItem key="9" onClick={() => handleMenuItemClick("Input")}>
              Input
            </MenuItem>
          </Link>
          <Link to="/list">
            <MenuItem key="10" onClick={() => handleMenuItemClick("List")}>
              List
            </MenuItem>
          </Link>
          <Link to="/modal">
            <MenuItem key="11" onClick={() => handleMenuItemClick("Modal")}>
              Modal
            </MenuItem>
          </Link>
          <Link to="/popover">
            <MenuItem key="12" onClick={() => handleMenuItemClick("Popover")}>
              Popover
            </MenuItem>
          </Link>
          <Link to="/select">
            <MenuItem key="13" onClick={() => handleMenuItemClick("Select")}>
              Select
            </MenuItem>
          </Link>
          <Link to="/separator">
            <MenuItem key="14" onClick={() => handleMenuItemClick("Separator")}>
              Separator
            </MenuItem>
          </Link>
          <Link to="/table">
            <MenuItem key="15" onClick={() => handleMenuItemClick("Table")}>
              Table
            </MenuItem>
          </Link>
          <Link to="/tabs">
            <MenuItem key="16" onClick={() => handleMenuItemClick("Tabs")}>
              Tabs
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
          <Link to="/switch">
            <MenuItem key="19" onClick={() => handleMenuItemClick("Switch")}>
              Switch
            </MenuItem>
          </Link>
          <Link to="/timepicker">
            <MenuItem
              key="20"
              onClick={() => handleMenuItemClick("TimePicker")}
            >
              TimePicker
            </MenuItem>
          </Link>
          <Link to="/slider">
            <MenuItem key="21" onClick={() => handleMenuItemClick("Slider")}>
              Slider
            </MenuItem>
          </Link>
          <Link to="/radio">
            <MenuItem key="22" onClick={() => handleMenuItemClick("Radio")}>
              Radio
            </MenuItem>
          </Link>
          <Link to="/form">
            <MenuItem key="23" onClick={() => handleMenuItemClick("Form")}>
              Form
            </MenuItem>
          </Link>
          <Link to="/datepicker">
            <MenuItem
              key="24"
              onClick={() => handleMenuItemClick("DatePicker")}
            >
              DatePicker
            </MenuItem>
          </Link>
          <Link to="/tooltip">
            <MenuItem key="25" onClick={() => handleMenuItemClick("Tooltip")}>
              Tooltip
            </MenuItem>
          </Link>
          <Link to="/card">
            <MenuItem key="21">component18</MenuItem>
          </Link>
          <Link to="/card">
            <MenuItem key="21">component18</MenuItem>
          </Link>
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
        <Layout style={{ padding: "0 2px" }}>
          <Content className="py-12">
            <AppRoutes />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
