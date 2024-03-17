import { Divider, Typography } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../components/Card.";
const { Title, Paragraph } = Typography;

const Separator = () => {
  const codeString = `import { Divider } from '@arco-design/web-react';
  
  function Separator () {
    
    return (
      <div>
      <Divider />
      <Divider style={{ borderBottomStyle: "dashed"}} />
      <Divider style={{ borderBottomStyle: "dotted", }} />
      </div>
    );
  }
  
  export default Separator;`;

  return (
    <div className="container">
      <Typography.Title>Separator</Typography.Title>
      <Paragraph>Visually or semantically separates content.</Paragraph>
      <Divider />

      <Title heading={4}>Basic</Title>
      <Paragraph>
        Can be used to separate paragraphs of different chapters. The default is
        a horizontal dividing line. Text can be added within divider.
      </Paragraph>
      <ReusableCard
        title={
          <div className=" box-border w-[34rem] p-7 border-10px bg-gray-400">
            <Paragraph style={{ color: "white" }}>
              A design is a plan or specification for the construction of an
              object.
            </Paragraph>
            <Divider />
            <Paragraph style={{ color: "white" }}>
              A design is a plan or specification for the construction of an
              object.
            </Paragraph>
            <Divider
              style={{
                borderBottomStyle: "dashed",
              }}
            />
            <Paragraph style={{ color: "white" }}>
              A design is a plan or specification for the construction of an
              object.
            </Paragraph>
            <Divider
              style={{
                borderBottomWidth: 2,
                borderBottomStyle: "dotted",
              }}
            />
            <Paragraph style={{ color: "white" }}>
              A design is a plan or specification for the construction of an
              object.
            </Paragraph>
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

export default Separator;
