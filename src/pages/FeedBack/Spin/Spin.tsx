import { Card, Spin } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SpinComponent = () => {
  const codeString = `import { Spin } from "@arco-design/web-react"

<Spin />`;
  return (
    <div className="container">
      <Card style={{ width: 560, marginBottom: "20px" }}>
        <Spin />
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

export default SpinComponent;
