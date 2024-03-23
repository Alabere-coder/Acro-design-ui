import {
  Divider,
  Typography,
  Popover,
  Button,
  Card,
} from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Popovers = () => {
  const codeString = `import { Popover, Button } from '@arco-design/web-react';
  
  function Popovers () {
    
    return (
      <Popover
        title="Title"
        content={
          <span>
            <p style={{ margin: 0 }}>Here is the text content</p>
            <p style={{ margin: 0 }}>Here is the text content</p>
          </span>
        }
      >
        <Button type="primary">Hover</Button>
      </Popover>
    );
  }
  
  export default Popovers;`;

  return (
    <div className="container">
      <Typography.Title>Popover</Typography.Title>

      <Divider />

      <Card>
        <Popover
          title="Title"
          content={
            <span>
              <p style={{ margin: 0 }}>Here is the text content</p>
              <p style={{ margin: 0 }}>Here is the text content</p>
            </span>
          }
        >
          <Button type="primary">Hover</Button>
        </Popover>
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

export default Popovers;
