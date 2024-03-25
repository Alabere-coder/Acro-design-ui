import { Breadcrumb, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const BreadcrumbItem = Breadcrumb.Item;

const BreadcrumbComponent = () => {
  const codeString = `import { Breadcrumb } from "@arco-design/web-react"
const BreadcrumbItem = Breadcrumb.Item;

<Breadcrumb>
  <BreadcrumbItem>Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Channel</BreadcrumbItem>
  <BreadcrumbItem>News</BreadcrumbItem>
</Breadcrumb>`;
  return (
    <div className="container">
      <Card style={{ width: 360, marginBottom: "20px" }}>
        <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Channel</BreadcrumbItem>
          <BreadcrumbItem>News</BreadcrumbItem>
        </Breadcrumb>
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

export default BreadcrumbComponent;
