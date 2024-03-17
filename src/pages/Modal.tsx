import { Divider, Typography, Modal, Button } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../components/Card.";
import { useState } from "react";
const { Title, Paragraph } = Typography;

const Modals = () => {
  const [visible, setVisible] = useState(false);

  const codeString = `import { Modal, Button } from '@arco-design/web-react';
  
  function ModalPage () {
    const [visible, setVisible] = useState(false);
    return (
      <div>
        <Button onClick={() => setVisible(true)} type="primary">
          Open Modal
        </Button>
        <Modal
          title="Modal Title"
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          autoFocus={false}
          focusLock={true}
        >
          <p>
            You can customize modal body text by the current situation. This
            modal will be closed immediately once you press the OK button.
          </p>
        </Modal>
      </div>
    );
  }
  
  export default ModalPage;`;

  return (
    <div className="container">
      <Typography.Title>Modal</Typography.Title>
      <Paragraph>
        Open a floating layer on the current page to carry related operations.
      </Paragraph>
      <Divider />

      <Title heading={4}>Basic</Title>
      <Paragraph>Basic Dialog with text.</Paragraph>
      <ReusableCard
        title={
          <div>
            <Button onClick={() => setVisible(true)} type="primary">
              Open Modal
            </Button>
            <Modal
              title="Modal Title"
              visible={visible}
              onOk={() => setVisible(false)}
              onCancel={() => setVisible(false)}
              autoFocus={false}
              focusLock={true}
            >
              <p>
                You can customize modal body text by the current situation. This
                modal will be closed immediately once you press the OK button.
              </p>
            </Modal>
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
  );
};

export default Modals;
