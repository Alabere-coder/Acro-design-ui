import { Typography, TimePicker, Divider } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../../../components/Card.";
const { Title, Paragraph } = Typography;

const TimePickerComponent = () => {
  const codeString = `import { TimePicker } from '@arco-design/web-react';
    
<TimePicker style={{ width: 194 }} />`;

  return (
    <div className="container">
      <Title>TimePicker</Title>
      <Paragraph>
        Select the time on the popup panel to conveniently complete the time
        input control.
      </Paragraph>
      <Divider />
      <Title heading={4}>Basic</Title>
      <Paragraph>The basic usage of TimePicker</Paragraph>
      <ReusableCard title={<TimePicker style={{ width: 194 }} />}>
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

export default TimePickerComponent;
