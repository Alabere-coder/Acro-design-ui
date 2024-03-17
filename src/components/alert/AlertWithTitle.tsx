import { Typography, Alert, Grid } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../Card.";

const { Title, Paragraph } = Typography;
const { Row, Col } = Grid;

const AlertWithTitle = () => {
  const codeString = `import { Alert } from "@arco-design/web-react"

<Alert type="info" title="Info" content="Here is an info text"/>
<Alert type="warning" title="Warning" content="Here is a warning text" />
<Alert type="success" title="success" content="Here is a success text" />
<Alert type="error" title="Error" content="Here is an error text" />
`;
  return (
    <div>
      <Title heading={4}>With title</Title>
      <Paragraph>
        content is turned into auxiliary introduction text with presence of
        title
      </Paragraph>
      <ReusableCard
        title={
          <Row gutter={40}>
            <Col span={12}>
              <Alert
                style={{ marginBottom: 20 }}
                type="info"
                title="Info"
                content="Here is an info text"
              />
              <Alert
                type="warning"
                title="Warning"
                content="Here is a warning text"
              />
            </Col>
            <Col span={12}>
              <Alert
                style={{ marginBottom: 20 }}
                type="success"
                title="Success"
                content="Here is a success text"
              />
              <Alert
                type="error"
                title="Error"
                content="Here is an error text"
              />
            </Col>
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

export default AlertWithTitle;