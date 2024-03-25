import { Empty, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const EmptyComponent = () => {
  const codeString = `import { Empty } from "@arco-design/web-react"

<Empty />`;
  return (
    <div className="container">
      <Card style={{ width: 560, height: 160, marginBottom: "20px" }}>
        <Empty />
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

export default EmptyComponent;
