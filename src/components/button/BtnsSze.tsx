import { Space, Typography, Button } from "@arco-design/web-react";
const { Title, Paragraph } = Typography;
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../Card.";

const BtnsSze = () => {
  const codeString = `import { Button } from "@arco-design/web-react"

<Button size="mini" type="primary">Mini</Button>
<Button size="small" type="primary">Small</Button>
<Button size="default" type="primary">Default</Button>
<Button size="large" type="primary">Large</Button>
`;
  return (
    <div>
      <Title heading={4}>button size</Title>
      <Paragraph>
        The size prop is used to control the size of the button. Buttons are
        divided into four sizes: mini, small, medium and large.{" "}
      </Paragraph>
      <ReusableCard
        title={
          <Space size="large">
            <Button size="mini" type="primary">
              Mini
            </Button>
            <Button size="small" type="primary">
              Small
            </Button>
            <Button size="default" type="primary">
              Default
            </Button>
            <Button size="large" type="primary">
              Large
            </Button>
          </Space>
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

export default BtnsSze;
