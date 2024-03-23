import {
  Typography,
  Radio,
  Space,
  Divider,
  Card,
} from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const { Title } = Typography;

const RadioComponent = () => {
  const codeString = `import { Radio } from '@arco-design/web-react';
    
<Radio>Radio</Radio>
<Radio checked>Checked Radio</Radio>`;

  return (
    <div className="container">
      <Title>Radio</Title>
      <Divider />
      <Card>
        <Space size={40}>
          <Radio>Radio</Radio>
          <Radio checked>Checked Radio</Radio>
        </Space>
      </Card>{" "}
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

export default RadioComponent;
