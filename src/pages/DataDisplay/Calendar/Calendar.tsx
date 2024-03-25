import { Card, Calendar } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CalendarComponent = () => {
  const codeString = `import { Calendar } from "@arco-design/web-react"

<div style={{ width: '100%', overflow: 'auto' }}>
    <Calendar defaultValue='2020-04-01' />
</div>`;
  return (
    <div className="container">
      <Card style={{ width: 760, marginBottom: "20px" }}>
        <div style={{ width: "100%", overflow: "auto" }}>
          <Calendar defaultValue="2020-04-01" />
        </div>
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

export default CalendarComponent;
