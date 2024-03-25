import { Collapse, Card, Divider } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const CollapseItem = Collapse.Item;

const CollapseComponent = () => {
  const codeString = `import { Collapse, Divider } from "@arco-design/web-react"
  const CollapseItem = Collapse.Item;
<Collapse defaultActiveKey={["1", "2"]} style={{ maxWidth: 1180 }}>
          <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="1">
            Beijing Toutiao Technology Co., Ltd.
            <Divider style={{ margin: "8px 0" }} />
            Beijing Toutiao Technology Co., Ltd.
            <Divider style={{ margin: "8px 0" }} />
            Beijing Toutiao Technology Co., Ltd.
          </CollapseItem>

          <CollapseItem header="The Underlying AI Technology" name="3">
            In 2016, ByteDance's AI Lab and Peking University co-developed
            Xiaomingbot (张小明), an artificial intelligence bot that writes
            news articles. The bot published 450 articles during the 15-day 2016
            Summer Olympics in Rio de Janeiro. In general, Xiaomingbot published
            stories approximately two seconds after the event ended.
          </CollapseItem>
        </Collapse>`;
  return (
    <div className="container">
      <Card style={{ width: 360, marginBottom: "20px" }}>
        <Collapse defaultActiveKey={["1", "2"]} style={{ maxWidth: 1180 }}>
          <CollapseItem header="Beijing Toutiao Technology Co., Ltd." name="1">
            Beijing Toutiao Technology Co., Ltd.
            <Divider style={{ margin: "8px 0" }} />
            Beijing Toutiao Technology Co., Ltd.
            <Divider style={{ margin: "8px 0" }} />
            Beijing Toutiao Technology Co., Ltd.
          </CollapseItem>

          <CollapseItem header="The Underlying AI Technology" name="3">
            In 2016, ByteDance's AI Lab and Peking University co-developed
            Xiaomingbot (张小明), an artificial intelligence bot that writes
            news articles. The bot published 450 articles during the 15-day 2016
            Summer Olympics in Rio de Janeiro. In general, Xiaomingbot published
            stories approximately two seconds after the event ended.
          </CollapseItem>
        </Collapse>
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

export default CollapseComponent;
