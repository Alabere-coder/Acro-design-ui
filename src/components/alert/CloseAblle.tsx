import { Typography, Alert, Grid } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../Card.";

const { Title, Paragraph } = Typography;
const { Row } = Grid;

const ClosAbleAlert = () => {
  const codeString = `import { Alert } from "@arco-design/web-react"

<Alert closeable type="info" content="Here is an info text"/>
<Alert closeable type="warning" content="Here is a warning text" />
`;
  return (
    <div>
      <Title heading={4}>Closable Alert</Title>
      <Paragraph>Use closable = true to turn on the close button.</Paragraph>
      <ReusableCard
        title={
          <Row gutter={10}>
            <Alert
              closeable
              style={{ marginBottom: 20 }}
              type="info"
              content="Here is an info text"
            />
            <Alert closeable type="warning" content="Here is a warning text" />
          </Row>
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

export default ClosAbleAlert;
