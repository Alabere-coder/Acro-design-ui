import { Typography, Card, BackTop } from "@arco-design/web-react";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const BackTopComponent: React.FC = () => {
  const codeString = `import { Button } from "@arco-design/web-react"
import { IconPlus } from "@arco-design/web-react/icon";

<div style={{ position: "relative", padding: "8px 12px" }}>
    <BackTop
    visibleHeight={30}
    style={{ position: "absolute" }}
    target={() => document.getElementById("custom_backtop0")}
    />
    <Typography.Paragraph>
    The button will appear in the bottom corner of the scrolling area
    </Typography.Paragraph>
    <div id="custom_backtop0" style={{ height: 300, overflow: "auto" }}>
    <Typography.Paragraph>This is the content</Typography.Paragraph>
    </div>
</div>`;
  return (
    <div className="container">
      <Card style={{ width: 560, marginBottom: "20px" }}>
        <div style={{ position: "relative", padding: "8px 12px" }}>
          <BackTop
            visibleHeight={30}
            style={{ position: "absolute" }}
            target={() => document.getElementById("custom_backtop0") || window}
          />
          <Typography.Paragraph>
            The button will appear in the bottom corner of the scrolling area
          </Typography.Paragraph>
          <div id="custom_backtop0" style={{ height: 300, overflow: "auto" }}>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
            <Typography.Paragraph>This is the content</Typography.Paragraph>
          </div>
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

export default BackTopComponent;
