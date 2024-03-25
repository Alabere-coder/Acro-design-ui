import { Typography, Tooltip, Divider, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const { Title, Paragraph } = Typography;

const TooltipComponent = () => {
  const codeString = `import { Tooltip } from '@arco-design/web-react'; 

<Tooltip content='This is tooltip content'>
  <Typography.Text style={{ marginRight: 20, }} >
    Mouse over to display tooltip
  </Typography.Text>
</Tooltip>;`;

  return (
    <div className="container">
      <Title>Tooltip</Title>
      <Paragraph>A simple text popup tip.</Paragraph>
      <Divider />

      <Card style={{ marginBottom: "30px" }}>
        <Tooltip content="This is tooltip content">
          <Typography.Text style={{ marginRight: 20 }}>
            Mouse over to display tooltip
          </Typography.Text>
        </Tooltip>
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

export default TooltipComponent;
