import { Typography, Button, Space } from "@arco-design/web-react";
const { Title, Paragraph } = Typography;
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../Card.";

const BtnState = () => {
  const codeString = `import { Button } from "@arco-design/web-react"

<Button type="primary" status="warning">Warning</Button>
<Button type="primary" status="danger">Danger</Button>
<Button type="primary" status="success">Success</Button>
`;
  return (
    <div>
      <Title heading={4}>button state (color)</Title>
      <Paragraph>
        Button states are divided into three types: warning, danger, and
        success. Which can be used on type prop.
      </Paragraph>
      <ReusableCard
        title={
          <Space size="large">
            <Button type="primary" status="warning">
              Warning
            </Button>
            <Button type="primary" status="danger">
              Danger
            </Button>
            <Button type="primary" status="success">
              Success
            </Button>
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

export default BtnState;
