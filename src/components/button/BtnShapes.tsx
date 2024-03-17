import { Space, Typography, Button } from "@arco-design/web-react";
const { Title, Paragraph } = Typography;
import SyntaxHighlighter from "react-syntax-highlighter";
import { IconPlus } from "@arco-design/web-react/icon";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../Card.";

const BtnShapes = () => {
  const codeString = `import { Button } from "@arco-design/web-react"
  
<Button type="primary" icon={<IconPlus />} />
<Button shape="circle" type="primary" icon={<IconPlus />} />
<Button shape="round" type="primary">Primary</Button>
<Button type="primary">Primary</Button>`;
  return (
    <div>
      <div>
        <Title heading={4}>button shapes</Title>
        <Paragraph>
          Button has many shapes, square- rectangle (default) , circle- circle,
          round- fully rounded corners.
        </Paragraph>
        <div style={{ display: "flex" }}>
          <ReusableCard
            title={
              <Space size="large">
                <Button type="primary" icon={<IconPlus />} />
                <Button shape="circle" type="primary" icon={<IconPlus />} />
                <Button shape="round" type="primary">
                  Primary
                </Button>
                <Button type="primary">Primary</Button>
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
      </div>
    </div>
  );
};

export default BtnShapes;
