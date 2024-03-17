import { Typography, Alert, Button } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../Card.";

const { Title, Paragraph } = Typography;

const AlertAction = () => {
  const codeString = `import { Alert, Button } from "@arco-design/web-react"

<Alert content="Here is an example text" action={ <Button size="mini" type="primary"> Detail </Button>} closable />
<Alert title="Example" content="Here is an example text" action={ <Button size="mini" type="primary"> Detail </Button>} closable />`;
  return (
    <div>
      <Title heading={4}>Action</Title>
      <Paragraph>Customize the action items through action.</Paragraph>
      <ReusableCard
        title={
          <div>
            <Alert
              content="Here is an example text"
              action={
                <Button size="mini" type="primary">
                  Detail
                </Button>
              }
              closable
            />
            <Alert
              title="Example"
              content="Here is an example text"
              action={
                <Button size="mini" type="primary">
                  Detail
                </Button>
              }
              closable
              style={{ marginTop: 10 }}
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

export default AlertAction;
