import { Typography, Drawer, Button, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";

const Drawers = () => {
  const [visible, setVisible] = useState(false);

  const codeString = `import { useState } from 'react';
  import { Drawer, Button } from '@arco-design/web-react';
  
  function Drawer () {
    const [visible, setVisible] = useState(false);
    return (
      <div>
        <Button onClick={() => {setVisible(true)}}type='primary'>Open Drawer</Button>
        <Drawer width={332} title={<span>Basic Information </span>} visible={visible}
          onOk={() => {setVisible(false)}}
          onCancel={() => {setVisible(false)}}
        >
          <div>Here is an example text.</div>
  
          <div>Here is an example text.</div>
        </Drawer>
      </div>
    );
  }
  export default Drawer;`;

  return (
    <>
      <div className="container">
        <Typography.Title>Drawer</Typography.Title>

        <Typography.Paragraph>Basic usage.</Typography.Paragraph>

        <Card>
          <div>
            <Button
              onClick={() => {
                setVisible(true);
              }}
              type="primary"
            >
              Open Drawer
            </Button>
            <Drawer
              width={332}
              title={<span>Basic Information </span>}
              visible={visible}
              onOk={() => {
                setVisible(false);
              }}
              onCancel={() => {
                setVisible(false);
              }}
            >
              <div>Here is an example text.</div>

              <div>Here is an example text.</div>
            </Drawer>
          </div>
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
    </>
  );
};

export default Drawers;
