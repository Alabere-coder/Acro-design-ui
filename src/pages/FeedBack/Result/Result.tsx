import { Button, Card, Result } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ResultComponent = () => {
  const codeString = `import { Button, Result } from "@arco-design/web-react"

<Result
status='success'
title='Success message'
subTitle='This is a success description.'
extra={[
    <Button key='again' type='secondary' style={{ margin: '0 16px' }}>
    Again
    </Button>,
    <Button key='back' type='primary'>
    Back
    </Button>,
]}
></Result>`;
  return (
    <div className="container">
      <Card style={{ width: 560, marginBottom: "20px" }}>
        <Result
          status="success"
          title="Success message"
          subTitle="This is a success description."
          extra={[
            <Button key="again" type="secondary" style={{ margin: "0 16px" }}>
              Again
            </Button>,
            <Button key="back" type="primary">
              Back
            </Button>,
          ]}
        ></Result>
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

export default ResultComponent;
