import { Divider, Typography, Checkbox } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../components/Card.";
const { Title, Paragraph } = Typography;

const Checkboxs = () => {
  const codeString = `import { Checkbox } from "@arco-design/web-react"

<Checkbox>Checkbox</Checkbox>`;

  return (
    <div className="container">
      <Typography.Title>Checkbox</Typography.Title>
      <Paragraph>
        Selects a single value, typically for submission in a form.
      </Paragraph>
      <Divider />

      <Title heading={4}>Basic</Title>
      <Paragraph>Basic usage.</Paragraph>
      <ReusableCard title={<Checkbox>Checkbox</Checkbox>}>
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

export default Checkboxs;
