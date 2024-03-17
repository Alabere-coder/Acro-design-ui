import { Space, Typography, Card, Link } from "@arco-design/web-react";
const { Title, Paragraph } = Typography;
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../Card.";

const BorderlessCard = () => {
  const codeString = `import { Card } from "@arco-design/web-react"

<Card style={{ width: 360 }} title="Arco Card" hoverable bordered={false} extra={<Link>More</Link>}>Content </Card>
<Card style={{ width: 360 }} title="Arco Card" hoverable bordered={false} extra={<Link>More</Link>}>Content </Card>`;
  return (
    <div>
      <Title heading={4}>Borderless (No Border)</Title>
      <Paragraph>Set bordered to false to use borderless cards.</Paragraph>

      <ReusableCard
        title={
          <Space
            style={{
              padding: 40,
              backgroundColor: "var(--color-fill-2)",
            }}
            size="large"
          >
            <Card
              style={{ width: 360 }}
              title="Arco Card"
              extra={<Link>More</Link>}
              bordered={false}
            >
              Card content
              <br />
              Card content
            </Card>
            <Card
              style={{ width: 360 }}
              title="Hover me"
              hoverable
              extra={<Link>More</Link>}
              bordered={false}
            >
              Card content
              <br />
              Card content
            </Card>
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

export default BorderlessCard;
