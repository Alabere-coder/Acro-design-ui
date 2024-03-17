import { Space, Typography, Button } from "@arco-design/web-react";
const { Title, Paragraph } = Typography;
import SyntaxHighlighter from "react-syntax-highlighter";
import ReusableCard from "../Card.";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const BtnType = () => {
  const codeString = `import { Button } from "@arco-design/web-react";

<Button type="primary">Primary</Button>
<Button type="secondary">Secondary</Button>
<Button type="dashed">Dashed</Button>
<Button type="outline">Outline</Button>
<Button type="text">Text</Button>
`;
  return (
    <div>
      <div>
        <Title heading={4}>button types</Title>
        <Paragraph>
          Use the type prop to control the visual style of the button. As we
          have five types of buttons: primary buttons, secondary buttons, dashed
          buttons, linear buttons and text buttons.
        </Paragraph>
        {/* <div style={{ display: "flex" }}> */}
        <ReusableCard
          title={
            <Space size="large" className="h-10">
              <Button type="primary">Primary</Button>
              <Button type="secondary">Secondary</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="outline">Outline</Button>
              <Button type="text">Text</Button>
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
        {/* </div> */}
      </div>
    </div>
  );
};

export default BtnType;
