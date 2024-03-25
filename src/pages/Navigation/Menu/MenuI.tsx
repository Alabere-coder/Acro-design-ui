import { Card, Menu } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const MenuItem = Menu.Item;

const MenuIComponent = () => {
  const codeString = `import { Menu } from "@arco-design/web-react"

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
</Menu>`;
  return (
    <div className="container">
      <Card style={{ width: 560, marginBottom: "20px" }}>
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

      <SyntaxHighlighter
        language="jsx"
        style={docco}
        customStyle={{
          padding: "20px",
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default MenuIComponent;
