import { Typography, Card, Link } from "@arco-design/web-react";
const { Title, Paragraph } = Typography;
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../Card.";

const { Grid } = Card;

const CardGrid = () => {
  const codeString = `import { Card } from "@arco-design/web-react"

const { Grid } = Card;

<Card bordered={false} style={{ width: '100%' }}>
{new Array(7).fill(null).map((_, index) => {
  const hoverable = index % 2 === 0;
  return (
    <Grid
      key={index}
      hoverable={hoverable}
      style={{
        width: '25%',
      }}
    >
      <Card
        className='card-demo-in-grid'
        style={{ width: '100%' }}
        title='Arco Card'
        extra={<Link>More</Link>}
        bordered={false}
      >
        {new Array(2).fill(null).map((_, index) => (
          <p style={{ margin: 0 }} key={index}>
            {hoverable ? 'Card allow to hover' : 'Card content'}
          </p>
        ))}
      </Card>
    </Grid>
    );
  })}
</Card>>`;
  return (
    <div>
      <Title heading={4}>Card grid</Title>
      <Paragraph>
        Use Card.Grid to enable the card content segmentation mode.
      </Paragraph>

      <ReusableCard
        title={
          <Card bordered={false} style={{ width: "100%" }}>
            {new Array(7).fill(null).map((_, index) => {
              const hoverable = index % 2 === 0;
              return (
                <Grid
                  key={index}
                  hoverable={hoverable}
                  style={{
                    width: "25%",
                  }}
                >
                  <Card
                    className="card-demo-in-grid"
                    style={{ width: "100%" }}
                    title="Arco Card"
                    extra={<Link>More</Link>}
                    bordered={false}
                  >
                    {new Array(2).fill(null).map((_, index) => (
                      <p style={{ margin: 0 }} key={index}>
                        {hoverable ? "Card allow to hover" : "Card content"}
                      </p>
                    ))}
                  </Card>
                </Grid>
              );
            })}
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

export default CardGrid;
