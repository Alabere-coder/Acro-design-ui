import {
  Trigger,
  Tooltip,
  Skeleton,
  Typography,
  Space,
  Divider,
} from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../components/Card.";
const { Title, Paragraph } = Typography;

const TriggerComponent = () => {
  const codeString = `import { Trigger, Tooltip, Skeleton } from '@arco-design/web-react';
  

  <Space style={{ width: 1000, overflow: "auto" }} size={40}>
  <Trigger
    popup={() => {
      return (
        <div
          className="p-3 w-72 mt-4 text-center bg-slate-200"
          style={{ width: 300 }}
        >
          <Tooltip content="123" defaultPopupVisible>
            <span>123123</span>
          </Tooltip>
          <Skeleton />
        </div>
      );
    }}
    mouseEnterDelay={400}
    mouseLeaveDelay={400}
    position="bottom"
  >
    <div>Hover on me</div>
  </Trigger>
</Space>`;

  return (
    <div className="container">
      <Title>Trigger</Title>
      <Paragraph>
        Used to pop up a drop-down box by hovering, focusing, or clicking on a
        element.
      </Paragraph>
      <Divider />
      <Title heading={4}>Basic</Title>
      <Paragraph>
        The basic usage. The popup layer has no style by default.
      </Paragraph>
      <ReusableCard
        title={
          <Space style={{ width: 1000, overflow: "auto" }} size={40}>
            <Trigger
              popup={() => {
                return (
                  <div
                    className="p-3 w-72 mt-4 text-center bg-slate-200"
                    style={{ width: 300 }}
                  >
                    <Tooltip content="123" defaultPopupVisible>
                      <span>123123</span>
                    </Tooltip>
                    <Skeleton />
                  </div>
                );
              }}
              mouseEnterDelay={400}
              mouseLeaveDelay={400}
              position="bottom"
            >
              <div className="border-2 p-2">Hover on me</div>
            </Trigger>
          </Space>
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

export default TriggerComponent;
