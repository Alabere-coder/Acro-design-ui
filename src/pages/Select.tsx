import { Divider, Typography, Select } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../components/Card.";
const { Title, Paragraph } = Typography;

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
      <Paragraph>
        Displays a list of options for the user to pick from—triggered by a
        button.
      </Paragraph>
      <Divider />

      <Title heading={4}>Basic</Title>
      <Paragraph>
        List can carry text, pictures, and paragraphs, and is often used to
        display data.
      </Paragraph>
      <ReusableCard
        title={
          <div>
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
          </div>
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

export default Selects;
