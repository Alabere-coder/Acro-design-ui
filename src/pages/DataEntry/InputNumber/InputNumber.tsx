import { InputNumber, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const InputNumberComponent = () => {
  const codeString = `import { InputNumber } from "@arco-design/web-react"

<InputNumber
    placeholder='Please enter'
    min={0}
    max={15}
    style={{ width: 160, margin: '10px 24px 10px 0' }}
/>`;
  return (
    <div className="container">
      <Card style={{ width: 360, marginBottom: "20px" }}>
        <InputNumber
          placeholder="Please enter"
          min={0}
          max={15}
          style={{ width: 180, margin: "10px 24px 10px 0" }}
        />
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

export default InputNumberComponent;
