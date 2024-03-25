import { Upload, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const UploadComponent = () => {
  const codeString = `import { Upload } from "@arco-design/web-react"

<div>
  <Upload action='/' />
</div>`;
  return (
    <div className="container">
      <Card style={{ width: 460, marginBottom: "20px" }}>
        <div>
          <Upload action="/" />
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

export default UploadComponent;
