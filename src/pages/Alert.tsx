import { Divider, Typography, Alert } from "@arco-design/web-react";
import ReusableCard from "../components/Card.";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const { Title, Paragraph } = Typography;
const AlertS = () => {
  const codeString = `import { Alert, Button } from "@arco-design/web-react"

<Alert content='Here is an example text' />`;

  return (
    <div className="container">
      <Typography.Title>Alert</Typography.Title>
      <Paragraph>
        Used to display warning information in a way that attracts attention.
      </Paragraph>
      <Divider />
      <Title heading={4}>basic</Title>
      <Paragraph>
        Warning prompts. Suitable for displaying short warning prompts in a way
        that attracts attention.
      </Paragraph>

      <ReusableCard
        title={
          <div>
            <Alert content="Here is an example text" />
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

export default AlertS;
