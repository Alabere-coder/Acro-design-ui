import { Typography, DatePicker, Divider } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../components/Card.";
const { Title, Paragraph } = Typography;

const DatePickerComponent = () => {
  const codeString = `import { DatePicker } from '@arco-design/web-react';
    
<DatePicker style={{ width: 200 }}/>`;

  return (
    <div className="container">
      <Title>DatePicker</Title>
      <Paragraph>
        Choose a date. Support year, month, week, day type, support range
        selection, etc.
      </Paragraph>
      <Divider />
      <Title heading={4}>Basic</Title>
      <Paragraph>The basic usage DatePicker.</Paragraph>
      <ReusableCard title={<DatePicker style={{ width: 200 }} />}>
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

export default DatePickerComponent;
