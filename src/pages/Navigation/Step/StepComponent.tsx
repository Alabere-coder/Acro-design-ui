import { Card, Steps } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Step = Steps.Step;

const StepComponent = () => {
  const codeString = `import { Steps } from "@arco-design/web-react"
  const Step = Steps.Step;

<div>
<Button shape="circle" type="primary" icon={<IconPlus />} />
<Button shape="round" type="primary">Primary</Button>
</div>`;
  return (
    <div className="container">
      <Card style={{ marginBottom: "20px" }}>
        <Steps current={1} style={{ maxWidth: 780, margin: "0 auto" }}>
          <Step title="Processing" />
          <Step title="Pending" />
          <Step title="Succeeded" />
        </Steps>
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

export default StepComponent;
