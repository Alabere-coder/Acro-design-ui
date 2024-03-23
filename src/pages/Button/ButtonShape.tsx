import { Button, Card, Space } from "@arco-design/web-react";
import { IconPlus } from "@arco-design/web-react/icon";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ButtonShape = () => {
  const codeString = `import { Button } from "@arco-design/web-react"
import { IconPlus } from "@arco-design/web-react/icon";

<div>
<Button shape="circle" type="primary" icon={<IconPlus />} />
<Button shape="round" type="primary">Primary</Button>
</div>`;
  return (
    <div className="container">
      <Card style={{ width: 360, marginBottom: "20px" }}>
        <Space size="large">
          <Button shape="circle" type="primary" icon={<IconPlus />} />
          <Button shape="round" type="primary">
            Primary
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

export default ButtonShape;
