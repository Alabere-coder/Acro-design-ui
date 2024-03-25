import { Progress, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ProgressComponent = () => {
  const codeString = `import { Button } from "@arco-design/web-react"

<Progress percent={30} width='40%' />`;
  return (
    <div className="container">
      <Card style={{ width: 560, marginBottom: "20px" }}>
        <Progress percent={30} width="100%" />
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

export default ProgressComponent;
