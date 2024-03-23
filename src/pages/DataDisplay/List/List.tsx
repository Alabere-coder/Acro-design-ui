import { Divider, Typography, List, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

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

      <Divider />

      <Card>
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
            render={(item, index) => <List.Item key={index}>{item}</List.Item>}
          />
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

export default ListComponent;
