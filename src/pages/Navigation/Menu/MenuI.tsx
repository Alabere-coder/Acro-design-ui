import { Card, Menu } from "@arco-design/web-react";
const MenuItem = Menu.Item;

const MenuIComponent = () => {
  return (
    <div className="container">
      <Card>
        <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
          <MenuItem
            key="0"
            style={{ padding: 0, marginRight: 38 }}
            disabled
          ></MenuItem>
          <MenuItem key="1">Home</MenuItem>
          <MenuItem key="2">Solution</MenuItem>
          <MenuItem key="3">Cloud Service</MenuItem>
          <MenuItem key="4">Cooperation</MenuItem>
        </Menu>
      </Card>
    </div>
  );
};

export default MenuIComponent;
