import { Typography, Switch, Divider } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../../../components/Card.";
const { Title, Paragraph } = Typography;

const SwitchComponent = () => {
  const codeString = `import { Switch } from '@arco-design/web-react';
    
<Switch />;`;

  return (
    <div className="container">
      <Title>Switch</Title>
      <Paragraph>
        Mutually exclusive operation controls, users can turn on or turn off a
        certain function.
      </Paragraph>
      <Divider />
      <Title heading={4}>Basic</Title>
      <Paragraph>The basic usage.</Paragraph>
      <ReusableCard title={<Switch style={{ backgroundColor: "GrayText" }} />}>
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

export default SwitchComponent;
