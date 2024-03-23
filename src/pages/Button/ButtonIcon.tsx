import { Button, Card, Space } from "@arco-design/web-react";
import { IconPlus, IconDelete } from "@arco-design/web-react/icon";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ButtonIcon = () => {
  const codeString = `import { Button } from "@arco-design/web-react"
import { IconLeft, IconRight } from "@arco-design/web-react/icon";
const ButtonGroup = Button.Group;

<div>
<Button type="primary" icon={<IconPlus />} />
<Button type="primary" icon={<IconDelete />}>Delete</Button>
</div>`;
  return (
    <div className="container">
      <Card style={{ width: 360, marginBottom: "20px" }}>
        <Space size="large">
          <Button type="primary" icon={<IconPlus />} />
          <Button type="primary" icon={<IconDelete />}>
            Delete
          </Button>
        </Space>
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

export default ButtonIcon;
