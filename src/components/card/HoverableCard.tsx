import { Space, Typography, Card, Link } from "@arco-design/web-react";
const { Title, Paragraph } = Typography;
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../Card.";

const HoverableCard = () => {
  const codeString = `import { Card } from "@arco-design/web-react"

<Card style={{ width: 360 }} title="Arco Card" hoverable extra={<Link>More</Link>}>Content </Card>
<Card style={{ width: 360 }} title="Arco Card" hoverable extra={<Link>More</Link>}>Content </Card>`;
  return (
    <div>
      <Title heading={4}>Hoverable Card</Title>
      <Paragraph>
        Use hoverable to add a hover style to the card. The hover style can also
        be customized through style override.
      </Paragraph>

      <ReusableCard
        title={
          <Space>
            <Card
              style={{ width: 360 }}
              title="Arco Card"
              hoverable
              extra={<Link>More</Link>}
            >
              Card content
              <br />
              Card content
            </Card>
            <Card
              style={{ width: 360 }}
              className="card-custom-hover-style"
              title="Custom hover style"
              hoverable
              extra={<Link>More</Link>}
            >
              Card content <br /> Card content
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

export default HoverableCard;
