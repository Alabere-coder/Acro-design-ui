import { Button, Card, Notification } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const NotificationComponent = () => {
  const codeString = `import { Button, Notification } from "@arco-design/web-react"
import { IconPlus } from "@arco-design/web-react/icon";

<Button
    onClick={() =>
    Notification.info({
        closable: false,
        title: 'Notification',
        content: 'This is a notification!',
    })
    }
    type='primary'
>
    Open Notification
</Button>`;
  return (
    <div className="container">
      <Card style={{ width: 360, marginBottom: "20px" }}>
        <Button
          onClick={() =>
            Notification.info({
              closable: false,
              title: "Notification",
              content: "This is a notification!",
            })
          }
          type="primary"
        >
          Open Notification
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

export default NotificationComponent;
