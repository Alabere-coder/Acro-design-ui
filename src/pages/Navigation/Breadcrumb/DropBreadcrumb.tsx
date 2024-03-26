import { Breadcrumb, Menu, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const BreadcrumbItem = Breadcrumb.Item;

const menu = (
  <Menu>
    <Menu.Item key="1">Data</Menu.Item>
    <Menu.Item key="2">Users</Menu.Item>
    <Menu.Item key="3">Permission</Menu.Item>
  </Menu>
);
const routes = [
  {
    path: "/",
    breadcrumbName: "Home",
  },
  {
    path: "/Channel",
    breadcrumbName: "Channel",
    children: [
      {
        path: "/users",
        breadcrumbName: "Users",
      },
      {
        path: "/permission",
        breadcrumbName: "Permission",
      },
    ],
  },
  {
    path: "/news",
    breadcrumbName: "News",
  },
];

const DropdownBreadcrumb = () => {
  const codeString = `import { Breadcrumb, Menu } from "@arco-design/web-react"
const BreadcrumbItem = Breadcrumb.Item;

const menu = (
  <Menu>
    <Menu.Item key="1">Data</Menu.Item>
    <Menu.Item key="2">Users</Menu.Item>
    <Menu.Item key="3">Permission</Menu.Item>
  </Menu>
);

<div>
    <Breadcrumb>
    <BreadcrumbItem>Home</BreadcrumbItem>
    <BreadcrumbItem droplist={menu}>Channel</BreadcrumbItem>
    <BreadcrumbItem>News</BreadcrumbItem>
    </Breadcrumb>
    <br />
    <Breadcrumb style={{ marginTop: 20 }} routes={routes} />
</div>`;
  return (
    <div className="container">
      <Card style={{ width: 560, marginBottom: "20px" }}>
        <div>
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem droplist={menu}>Channel</BreadcrumbItem>
            <BreadcrumbItem>News</BreadcrumbItem>
          </Breadcrumb>
          <br />
          <Breadcrumb style={{ marginTop: 20 }} routes={routes} />
        </div>
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

export default DropdownBreadcrumb;
