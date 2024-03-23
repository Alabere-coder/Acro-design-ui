import { Divider, Typography, Card } from "@arco-design/web-react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const { Title, Paragraph } = Typography;

const Cards = () => {
  const codeString = `import { Card } from "@arco-design/web-react"

<Card style={{ width: 360 }}>Content </Card>
<Card style={{ width: 360 }} title="Arco Card" >Content </Card>`;

  return (
    <div className="container">
      <Typography.Title>Card</Typography.Title>
      <Paragraph>Container that groups related content and actions.</Paragraph>
      <Divider />
      <Title heading={4}>Basic</Title>

      <Card>
        {" "}
        <div style={{ display: "flex", gap: "20px" }}>
          <Card style={{ width: 360 }}>
            ByteDance's core product, Toutiao ('Headlines'), is a content
            platform in China and around the world. Toutiao started out as a
            news recommendation engine and gradually evolved into a platform
            delivering content in various formats.
          </Card>
          <Card style={{ width: 360 }} title="Arco Card">
            ByteDance's core product, Toutiao ('Headlines'), is a content
            platform in China and around the world. Toutiao started out as a
            news recommendation engine and gradually evolved into a platform
            delivering content in various formats.
          </Card>
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
  );
};

export default Cards;
