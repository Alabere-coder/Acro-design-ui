import { Typography, Card, Link, Grid, Divider } from "@arco-design/web-react";
const { Title, Paragraph } = Typography;
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../Card.";

const { Row, Col } = Grid;

const CardRow = () => {
  const codeString = `import { Card, Grid } from "@arco-design/web-react"
const { Row, Col } = Grid;

<Row gutter={20} style={{ marginBottom: 20 }}>
<Col span={8}>
  <Card
    title="Arco Card"
    extra={<Link>More</Link>}
    bordered={false}
    style={{
      width: "100%",
    }}
  >
    Card content1
  </Card>
</Col>
<Col span={8}>
  <Card
    title="Arco Card"
    extra={<Link>More</Link>}
    bordered={false}
    style={{ width: "100%" }}
  >
    Card content2
  </Card>
</Col>
<Col span={8}>
  <Card
    title="Arco Card"
    extra={<Link>More</Link>}
    bordered={false}
    style={{ width: "100%" }}
  >
    Card content3
  </Card>
</Col>
</Row>


<Row gutter={20}>
  <Col span={16}>
    <Card
      title="Arco Card"
      extra={<Link>More</Link>}
      bordered={false}
      style={{ width: "100%" }}
    >
      Card content4
    </Card>
  </Col>
  <Col span={8}>
    <Card
      title="Arco Card"
      extra={<Link>More</Link>}
      bordered={false}
      style={{ width: "100%" }}
    >
      Card content5
    </Card>
  </Col>
</Row>`;
  return (
    <div>
      <Title heading={4}>Card With Row</Title>
      <Paragraph>
        Often used together with Grid on the overview page of systems.
      </Paragraph>

      <ReusableCard
        title={
          <div
            style={{
              boxSizing: "border-box",
              width: "100%",
              padding: 40,
              backgroundColor: "var(--color-fill-2)",
            }}
          >
            <Row gutter={20} style={{ marginBottom: 20 }}>
              <Col span={8}>
                <Card
                  title="Arco Card"
                  extra={<Link>More</Link>}
                  bordered={false}
                  style={{
                    width: "100%",
                  }}
                >
                  Card content1
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Arco Card"
                  extra={<Link>More</Link>}
                  bordered={false}
                  style={{ width: "100%" }}
                >
                  Card content2
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Arco Card"
                  extra={<Link>More</Link>}
                  bordered={false}
                  style={{ width: "100%" }}
                >
                  Card content3
                </Card>
              </Col>
            </Row>
            <Divider />
            <Row gutter={20}>
              <Col span={16}>
                <Card
                  title="Arco Card"
                  extra={<Link>More</Link>}
                  bordered={false}
                  style={{ width: "100%" }}
                >
                  Card content4
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Arco Card"
                  extra={<Link>More</Link>}
                  bordered={false}
                  style={{ width: "100%" }}
                >
                  Card content5
                </Card>
              </Col>
            </Row>
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

export default CardRow;
