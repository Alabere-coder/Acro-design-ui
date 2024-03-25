import { Card, Watermark } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const WatermarkComponent = () => {
  const codeString = `import { Watermark } from "@arco-design/web-react"

<Watermark
  content='Arco Design'
  >
   <div style={{height: 300}}></div>
  </Watermark>`;
  return (
    <div className="container">
      <Card style={{ marginBottom: "20px" }}>
        <Watermark content="Arco Design">
          <div style={{ height: 300 }}></div>
        </Watermark>
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

export default WatermarkComponent;
