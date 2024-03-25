import { Divider, Typography, Alert, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const AlertS = () => {
  const codeString = `import { Alert, Button } from "@arco-design/web-react"

<Alert content='Here is an example text' />`;

  return (
    <div className="container">
      <Typography.Title>Alert</Typography.Title>

      <Divider />
      <Card style={{ width: 360, marginBottom: "20px" }}>
        <Alert content="Here is an example text" />
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

export default AlertS;
