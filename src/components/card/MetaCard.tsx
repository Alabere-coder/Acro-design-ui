import { Typography, Card } from "@arco-design/web-react";
const { Title, Paragraph } = Typography;
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import ReusableCard from "../Card.";

const { Meta } = Card;

const MetaCard = () => {
  const codeString = `import { Card } from "@arco-design/web-react"

  const { Meta } = Card;

  <Card
  hoverable
  style={{ width: 360 }}
  cover={
    <div style={{ height: 204, overflow: "hidden" }}>
      <img
        style={{ width: "100%", transform: "translateY(-20px)" }}
        alt="dessert"
        src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
      />
    </div>
  }
>
  <Meta
    title="Card Title"
    description={
      <>
        Card content <br /> Card content
      </>
    }
  />
</Card>`;
  return (
    <div>
      <Title heading={4}>Meta</Title>
      <Paragraph>Set bordered to false to use borderless cards.</Paragraph>

      <ReusableCard
        title={
          <Card
            hoverable
            style={{ width: 360 }}
            cover={
              <div style={{ height: 204, overflow: "hidden" }}>
                <img
                  style={{ width: "100%", transform: "translateY(-20px)" }}
                  alt="dessert"
                  src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                />
              </div>
            }
          >
            <Meta
              title="Card Title"
              description={
                <>
                  Card content <br /> Card content
                </>
              }
            />
          </Card>
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

export default MetaCard;
