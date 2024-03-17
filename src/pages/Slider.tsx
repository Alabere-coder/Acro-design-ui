import { Typography, Slider, Divider } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../components/Card.";

const { Title, Paragraph } = Typography;

const SliderComponent = () => {
  const codeString = `import { Slider } from '@arco-design/web-react';
    
<Slider  style={{ width: 200 }} />`;

  return (
    <div className="container">
      <Title>Slider</Title>
      <Paragraph>
        A Slider component for displaying current value and intervals in range.
      </Paragraph>
      <Divider />
      <Title heading={4}>Basic</Title>
      <Paragraph>The basic usage of Slider.</Paragraph>
      <ReusableCard title={<Slider style={{ width: 200 }} />}>
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

export default SliderComponent;
