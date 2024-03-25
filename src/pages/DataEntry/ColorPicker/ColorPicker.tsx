import { ColorPicker, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ColorPickerComponent = () => {
  const codeString = `import { ColorPicker } from "@arco-design/web-react"

<div>
    <ColorPicker defaultValue={'#165DFF'} />
    <div style={{ marginTop: 10 }}/>
    <ColorPicker defaultValue={'#165DFF'} showText />
</div>`;
  return (
    <div className="container">
      <Card style={{ width: 360, marginBottom: "20px" }}>
        <div>
          <ColorPicker defaultValue={"#165DFF"} />
          <div style={{ marginTop: 10 }} />
          <ColorPicker defaultValue={"#165DFF"} showText />
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

export default ColorPickerComponent;
