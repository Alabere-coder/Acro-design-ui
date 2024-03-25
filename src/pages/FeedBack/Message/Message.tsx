import { Button, Card, Message } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const MessageComponent = () => {
  const codeString = `import { Button, Message } from "@arco-design/web-react"

<Button
    onClick={() => {
    Message.info('This is an info message!');
    }}
    type='primary'
>
    Open Message
</Button>`;
  return (
    <div className="container">
      <Card style={{ width: 360, marginBottom: "20px" }}>
        <Button
          onClick={() => {
            Message.info("This is an info message!");
          }}
          type="primary"
        >
          Open Message
        </Button>
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

export default MessageComponent;
