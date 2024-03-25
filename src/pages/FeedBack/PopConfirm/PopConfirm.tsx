import { Button, Card, Popconfirm, Message } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const PopConfirmComponent = () => {
  const codeString = `import { Button, Popconfirm, Message } from "@arco-design/web-react"
import { IconPlus } from "@arco-design/web-react/icon";

<Popconfirm
    focusLock
    title='Confirm'
    content='Are you sure you want to delete?'
    onOk={() => {
        Message.info({
        content: 'Deleted',
        });
    }}
    onCancel={() => {
        Message.error({
        content: 'cancel',
        });
    }}

    >
    <Button>Delete</Button>
</Popconfirm>`;
  return (
    <div className="container">
      <Card style={{ width: 360, marginBottom: "20px" }}>
        <Popconfirm
          focusLock
          title="Confirm"
          content="Are you sure you want to delete?"
          onOk={() => {
            Message.info({
              content: "Deleted",
            });
          }}
          onCancel={() => {
            Message.error({
              content: "cancel",
            });
          }}
        >
          <Button>Delete</Button>
        </Popconfirm>
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

export default PopConfirmComponent;
