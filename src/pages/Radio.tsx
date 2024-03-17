import { Typography, Radio, Space, Divider } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../components/Card.";
const { Title, Paragraph } = Typography;

const RadioComponent = () => {
  const codeString = `import { Radio } from '@arco-design/web-react';
    
<Radio>Radio</Radio>
<Radio checked>Checked Radio</Radio>`;

  return (
    <div className="container">
      <Title>Radio</Title>
      <Paragraph>
        In a set of related and mutually exclusive data, the user can only
        select one option.
      </Paragraph>
      <Divider />
      <Title heading={4}>Basic</Title>
      <Paragraph>The basic usage.</Paragraph>
      <ReusableCard
        title={
          <Space size={40}>
            <Radio>Radio</Radio>
            <Radio checked>Checked Radio</Radio>
          </Space>
        }
      >
        <SyntaxHighlighter
          language="jsx"
          style={docco}
          customStyle={{
            padding: "20px",
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </ReusableCard>
    </div>
  );
};

export default RadioComponent;
