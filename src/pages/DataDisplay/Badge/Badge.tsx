import { Badge, Card, Avatar } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const BadgeComponent = () => {
  const codeString = `import { Button } from "@arco-design/web-react"

<Badge count={9}>
    <Avatar shape='square' />
</Badge>`;
  return (
    <div className="container">
      <Card style={{ width: 360, marginBottom: "20px" }}>
        <Badge count={9}>
          <Avatar shape="square" />
        </Badge>
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

export default BadgeComponent;
