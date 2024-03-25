import { Cascader, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const options = [
  {
    value: "beijing",
    label: "Beijing",
    children: [
      {
        value: "Beijing",
        label: "Beijing",
        children: [
          {
            value: "chaoyang",
            label: "Chaoyang",
            children: [
              {
                value: "datunli",
                label: "Datunli",
              },
            ],
          },
        ],
      },
    ],
  },
];

const CascaderComponent = () => {
  const codeString = `import { Cascader } from "@arco-design/web-react"

<Cascader
    placeholder='Please select ...'
    style={{ width: 300, marginBottom: 20 }}
    options={options}
/>`;
  return (
    <div className="container">
      <Card style={{ width: 460, marginBottom: "20px" }}>
        <Cascader
          placeholder="Please select ..."
          style={{ width: 300, marginBottom: 20 }}
          options={options}
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

export default CascaderComponent;
