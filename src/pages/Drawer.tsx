import { Divider, Typography, Drawer, Button } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../components/Card.";
import { useState } from "react";
const { Title, Paragraph } = Typography;

const Drawers = () => {
  const [visible, setVisible] = useState(false);

  const codeString = `import { useState } from 'react';
  import { Drawer, Button } from '@arco-design/web-react';
  
  function Drawer () {
    const [visible, setVisible] = useState(false);
    return (
      <div>
        <Button onClick={() => {setVisible(true)}}
          type='primary'>
          Open Drawer
        </Button>
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
        <Paragraph>
          Basic usage of Drawer. Click the trigger button to slide out the
          drawer from the right, click the mask area to close.
        </Paragraph>
        <Divider />

        <Title heading={4}>Basic</Title>
        <Paragraph>Basic usage.</Paragraph>
        <ReusableCard
          title={
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
    </>
  );
};

export default Drawers;
