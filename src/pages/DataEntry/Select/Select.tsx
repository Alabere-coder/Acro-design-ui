import { Divider, Typography, Select, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Option = Select.Option;
const options = ["Beijing", "Shanghai", "Guangzhou", "Disabled"];

const Selects = () => {
  const codeString = `import { Select } from '@arco-design/web-react';
const Option = Select.Option;
const options = ["Beijing", "Shanghai", "Guangzhou", "Disabled"];

function SelectComponent () {
  
  return (
    <Select
      placeholder="Select city"
      style={{ width: 154 }}
      defaultValue="Beijing"
    >
      {options.map((option, index) => (
        <Option key={option} disabled={index === 4} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  );
}

export default SelectComponent;`;

  return (
    <div className="container">
      <Typography.Title>Select</Typography.Title>

      <Divider />

      <Card>
        <Select
          placeholder="Select city"
          style={{ width: 200 }}
          defaultValue="Beijing"
        >
          {options.map((option, index) => (
            <Option key={option} disabled={index === 4} value={option}>
              {option}
            </Option>
          ))}
        </Select>
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

export default Selects;
