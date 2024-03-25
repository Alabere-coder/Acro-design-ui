import { Card, Descriptions } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const data = [
  {
    label: "Name",
    value: "Socrates",
  },
  {
    label: "Mobile",
    value: "123-1234-1234",
  },
  {
    label: "Residence",
    value: "Beijing",
  },
  {
    label: "Hometown",
    value: "Beijing",
  },
  {
    label: "Address",
    value: "Yingdu Building, Zhichun Road, Beijing",
  },
];

const DescriptionComponent = () => {
  const codeString = `import { Descriptions } from "@arco-design/web-react"
  const data = [
    {
      label: 'Name',
      value: 'Socrates',
    },
    {
      label: 'Mobile',
      value: '123-1234-1234',
    },
    {
      label: 'Residence',
      value: 'Beijing',
    },
    {
      label: 'Hometown',
      value: 'Beijing',
    },
    {
      label: 'Address',
      value: 'Yingdu Building, Zhichun Road, Beijing',
    },
  ];

<Descriptions colon=' :' layout='inline-horizontal' title='User Info' data={data} />`;
  return (
    <div className="container">
      <Card style={{ marginBottom: "20px" }}>
        <Descriptions
          colon=" :"
          layout="inline-horizontal"
          title="User Info"
          data={data}
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

export default DescriptionComponent;
