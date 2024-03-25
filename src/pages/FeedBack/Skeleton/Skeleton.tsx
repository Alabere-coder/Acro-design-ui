import { Card, Skeleton } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SkeletonComponent = () => {
  const codeString = `import { Skeleton } from "@arco-design/web-react"

<Skeleton
    text={{
    rows: 3,
    width: ['100%', 600, 400],
    }}
    image
></Skeleton>`;
  return (
    <div className="container">
      <Card style={{ width: 460, marginBottom: "20px" }}>
        <Skeleton
          text={{
            rows: 3,
            width: ["100%", 600, 400],
          }}
          image
        ></Skeleton>
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

export default SkeletonComponent;
