import { Divider, Typography, List } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../components/Card.";
const { Title, Paragraph } = Typography;

const ListComponent = () => {
  const codeString = `import { List } from '@arco-design/web-react';
  
  function ListComponent () {
    
    return (
      <List
      style={{ width: 622 }}
      size='small'
      header='List title'
      dataSource={[
        'Beijing Bytedance Technology Co., Ltd.',
        'Bytedance Technology Co., Ltd.',
        'Beijing Toutiao Technology Co., Ltd.',
        'Beijing Volcengine Technology Co., Ltd.',
        'China Beijing Bytedance Technology Co., Ltd.',
      ]}
      render={(item, index) => <List.Item key={index}>{item}</List.Item>}
    />
    );
  }
  
  export default ListComponent;`;
  return (
    <div className="container">
      <Typography.Title>List</Typography.Title>
      <Paragraph>
        The most basic list display can carry text, lists, pictures, and
        paragraphs, and is often used in background data display pages.
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
            <List
              style={{ width: 622 }}
              size="small"
              header="List title"
              dataSource={[
                "Beijing Bytedance Technology Co., Ltd.",
                "Bytedance Technology Co., Ltd.",
                "Beijing Toutiao Technology Co., Ltd.",
                "Beijing Volcengine Technology Co., Ltd.",
                "China Beijing Bytedance Technology Co., Ltd.",
              ]}
              render={(item, index) => (
                <List.Item key={index}>{item}</List.Item>
              )}
            />
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

export default ListComponent;
