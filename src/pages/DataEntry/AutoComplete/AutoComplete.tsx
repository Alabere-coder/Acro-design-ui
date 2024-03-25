import { AutoComplete, Card } from "@arco-design/web-react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const AutoCompleteComponent = () => {
  const codeString = `import { Button } from "@arco-design/web-react"

<AutoComplete
    placeholder='Please Enter'
    onSearch={handleSearch}
    data={data}
    style={{ width: 154, marginRight: 20 }}
/>`;

  const [data, setData] = useState<string[]>([]);

  const handleSearch = (inputValue: string): void => {
    setData(
      inputValue
        ? new Array(5).fill(null).map((_, index) => `${inputValue}_${index}`)
        : []
    );
  };

  return (
    <div className="container">
      <Card style={{ width: 360, marginBottom: "20px" }}>
        <AutoComplete
          placeholder="Please Enter"
          onSearch={handleSearch}
          data={data}
          style={{ width: 154, marginRight: 20 }}
        />
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

export default AutoCompleteComponent;
