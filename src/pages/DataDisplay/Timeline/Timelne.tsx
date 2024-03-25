import { Timeline, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const TimelineItem = Timeline.Item;

const TimelineComponent = () => {
  const codeString = `import { Button } from "@arco-design/web-react"
import { IconPlus } from "@arco-design/web-react/icon";

<Timeline reverse={this.state.reverse}>
    <TimelineItem label='2017-03-10'>The first milestone</TimelineItem>
    <TimelineItem label='2018-05-12'>The second milestone</TimelineItem>
    <TimelineItem label='2020-09-30'>The third milestone</TimelineItem>
</Timeline>`;
  return (
    <div className="container">
      <Card style={{ width: 560, marginBottom: "20px" }}>
        <Timeline>
          <TimelineItem label="2017-03-10">The first milestone</TimelineItem>
          <TimelineItem label="2018-05-12">The second milestone</TimelineItem>
          <TimelineItem label="2020-09-30">The third milestone</TimelineItem>
        </Timeline>
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

export default TimelineComponent;
