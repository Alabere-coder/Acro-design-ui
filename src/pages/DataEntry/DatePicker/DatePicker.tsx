import { Typography, DatePicker, Divider, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const { Title, Paragraph } = Typography;

const DatePickerComponent = () => {
  const codeString = `import { DatePicker } from '@arco-design/web-react';
    
<DatePicker style={{ width: 200 }}/>`;

  return (
    <div className="container">
      <Title>DatePicker</Title>
      <Divider />
      <Paragraph>The basic usage DatePicker.</Paragraph>

      <Card>
        <DatePicker style={{ width: 200 }} />
      </Card>
      <SyntaxHighlighter
        language="jsx"
        style={docco}
        customStyle={{
          padding: "20px",
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default DatePickerComponent;
