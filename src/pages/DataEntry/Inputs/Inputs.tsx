import { Divider, Typography, Input, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const { Title } = Typography;

const Inputs = () => {
  const codeString = `import { Input } from '@arco-design/web-react';
  

<Input style={{ width: 350 }} allowClear  placeholder='Please Enter something' />`;

  return (
    <div className="container">
      <Title>Inputs</Title>

      <Divider />
      <Card>
        <div>
          <Input
            style={{ width: 350 }}
            allowClear
            placeholder="Please Enter something"
          />
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

export default Inputs;
