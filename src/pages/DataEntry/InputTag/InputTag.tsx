import { InputTag, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const InputTagComponent = () => {
  const codeString = `import { InputTag } from "@arco-design/web-react"

<InputTag
    allowClear
    placeholder='Input and press Enter'
    style={{ width: 350 }}
/>`;
  return (
    <div className="container">
      <Card style={{ width: 360, marginBottom: "20px" }}>
        <InputTag
          allowClear
          placeholder="Input and press Enter"
          style={{ width: 350 }}
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

export default InputTagComponent;
