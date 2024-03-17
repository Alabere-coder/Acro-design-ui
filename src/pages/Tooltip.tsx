import { Typography, Tooltip, Divider } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../components/Card.";
const { Title, Paragraph, Text } = Typography;

const TooltipComponent = () => {
  const codeString = `import { Tooltip, Typography } from '@arco-design/web-react';
const { Text } = Typography;  

<Tooltip content='This is tooltip content'>
<Text style={{ marginRight: 20, }} >
Mouse over to display tooltip
</Text>
</Tooltip>;`;

  return (
    <div className="container">
      <Title>Tooltip</Title>
      <Paragraph>A simple text popup tip.</Paragraph>
      <Divider />
      <Title heading={4}>Basic</Title>
      <Paragraph>
        When the mouse is moved in, the bubble appears, and when the mouse is
        moved out, the bubble disappears.
      </Paragraph>
      <ReusableCard
        title={
          <Tooltip content="This is tooltip content">
            <Text style={{ marginRight: 20 }}>
              Mouse over to display tooltip
            </Text>
          </Tooltip>
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

export default TooltipComponent;
