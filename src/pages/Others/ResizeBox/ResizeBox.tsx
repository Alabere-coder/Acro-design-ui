import { Typography, Card, ResizeBox, Divider } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ResizeBoxComponent = () => {
  const codeString = `import { ResizeBox } from "@arco-design/web-react"

<ResizeBox
directions={["right", "bottom"]}
style={{
    width: 500,
    minWidth: 100,
    maxWidth: "100%",
    height: 200,
    textAlign: "center",
}}
>
<Typography.Paragraph>
    We are building the future of content discovery and creation.
</Typography.Paragraph>
<Divider />
<Typography.Paragraph>
    ByteDance's content platforms enable people to enjoy content
    powered by AI technology. We inform, entertain, and inspire people
    across language, culture and geography.
</Typography.Paragraph>
<Divider>ByteDance</Divider>
<Typography.Paragraph>
    Yiming Zhang is the founder and CEO of ByteDance.
</Typography.Paragraph>
</ResizeBox>`;
  return (
    <div className="container">
      <Card style={{ width: 560, marginBottom: "20px" }}>
        <div>
          <ResizeBox
            directions={["right", "bottom"]}
            style={{
              width: 500,
              minWidth: 100,
              maxWidth: "100%",
              height: 200,
              textAlign: "center",
            }}
          >
            <Typography.Paragraph>
              We are building the future of content discovery and creation.
            </Typography.Paragraph>
            <Divider />
            <Typography.Paragraph>
              ByteDance's content platforms enable people to enjoy content
              powered by AI technology. We inform, entertain, and inspire people
              across language, culture and geography.
            </Typography.Paragraph>
            <Divider>ByteDance</Divider>
            <Typography.Paragraph>
              Yiming Zhang is the founder and CEO of ByteDance.
            </Typography.Paragraph>
          </ResizeBox>
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

export default ResizeBoxComponent;
