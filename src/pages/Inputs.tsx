import { Divider, Typography, Input } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../components/Card.";
const { Title, Paragraph } = Typography;

const Inputs = () => {
  const codeString = `import { Input } from '@arco-design/web-react';
  

<Input style={{ width: 350 }} allowClear  placeholder='Please Enter something' />`;

  return (
    <div className="container">
      <Title>Inputs</Title>
      <Paragraph>
        specifies an input field where the user can enter data.
      </Paragraph>
      <Divider />
      <Title heading={4}>Basic</Title>
      <Paragraph>Input content via mouse or keyboard.</Paragraph>
      <ReusableCard
        title={
          <div>
            <Input
              style={{ width: 350 }}
              allowClear
              placeholder="Please Enter something"
            />
          </div>
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

export default Inputs;
