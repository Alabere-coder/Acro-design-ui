import { Divider, Typography, Popover, Button } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../components/Card.";
const { Title, Paragraph } = Typography;

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
      <Paragraph>
        Floating element for displaying rich content, triggered by a button.
      </Paragraph>
      <Divider />

      <Title heading={4}>Basic</Title>
      <Paragraph>
        List can carry text, pictures, and paragraphs, and is often used to
        display data.
      </Paragraph>
      <ReusableCard
        title={
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

export default Popovers;
