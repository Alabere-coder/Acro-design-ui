import { Divider, Typography } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../components/Card.";
const { Paragraph } = Typography;

const Separator = () => {
  const codeString = `import { Divider } from '@arco-design/web-react';
  
  function Separator () {
    
    return (
      <Divider />
    );
  }
  
  export default Separator;`;

  return (
    <div className="container">
      <Typography.Title>Separator</Typography.Title>
      <Divider />

      <ReusableCard
        title={
          <div className=" box-border w-[34rem] p-7 border-10px bg-gray-400">
            <Paragraph style={{ color: "white" }}>A design is a plan</Paragraph>

            <Divider />
            <Paragraph style={{ color: "white" }}>A design is a plan</Paragraph>
            <Divider
              style={{
                borderBottomWidth: 2,
                borderBottomStyle: "dotted",
              }}
            />
            <Paragraph style={{ color: "white" }}>A design is a plan</Paragraph>
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
