import { Button, Card } from "@arco-design/web-react";
import { IconLeft, IconRight } from "@arco-design/web-react/icon";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ButtonGroup = Button.Group;

const ButtonGroups = () => {
  const codeString = `import { Button } from "@arco-design/web-react"
import { IconLeft, IconRight } from "@arco-design/web-react/icon";
const ButtonGroup = Button.Group;

<ButtonGroup>
  <Button type="primary" icon={<IconLeft />} style={{ padding: "0 8px" }}>
    Prev
  </Button>
  <Button type="primary" style={{ padding: "0 8px" }}>
    Next
    <IconRight />
  </Button>
</ButtonGroup>`;
  return (
    <div className="container">
      <Card style={{ width: 360, marginBottom: "20px" }}>
        <ButtonGroup>
          <Button
            type="primary"
            icon={<IconLeft />}
            style={{ padding: "0 8px" }}
          >
            Prev
          </Button>
          <Button type="primary" style={{ padding: "0 8px" }}>
            Next
            <IconRight />
          </Button>
        </ButtonGroup>
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

export default ButtonGroups;
