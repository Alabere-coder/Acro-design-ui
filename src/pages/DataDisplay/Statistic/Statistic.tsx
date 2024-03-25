import { Card, Statistic } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Statisticcomponent = () => {
  const codeString = `import { Statistic } from "@arco-design/web-react"

<div>
    <Statistic title='Downloads' value={125670} groupSeparator style={{ marginRight: 60 }} />
    <Statistic extra='Comments' value={40509} groupSeparator precision={2} />
</div>`;
  return (
    <div className="container">
      <Card style={{ width: 360, marginBottom: "20px" }}>
        <div>
          <Statistic
            title="Downloads"
            value={125670}
            groupSeparator
            style={{ marginRight: 60 }}
          />
          <Statistic
            extra="Comments"
            value={40509}
            groupSeparator
            precision={2}
          />
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

export default Statisticcomponent;
