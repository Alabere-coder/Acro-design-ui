import { Divider, Typography, Tabs } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../../../components/Card.";
const { Title, Paragraph } = Typography;
const TabPane = Tabs.TabPane;

const TabComponent = () => {
  const codeString = `import { Tabs } from '@arco-design/web-react';
  const TabPane = Tabs.TabPane;

  function TabComponent () {
    
    return (
      <Tabs defaultActiveTab="1">
        <TabPane key="1" title="Tab 1">
          <Typography.Paragraph
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            Content of Tab Panel 1
          </Typography.Paragraph>
        </TabPane>
        <TabPane key="2" title="Tab 2">
          <Typography.Paragraph
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            Content of Tab Panel 2
          </Typography.Paragraph>
        </TabPane>
        <TabPane key="3" title="Tab 3">
          <Typography.Paragraph
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            Content of Tab Panel 3
          </Typography.Paragraph>
        </TabPane>
      </Tabs>
    );
  }
  
  export default TabComponent;`;

  return (
    <div className="container">
      <Typography.Title>Tabs</Typography.Title>
      <Paragraph>
        Set of content sections to be displayed one at a time.
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
            <Tabs defaultActiveTab="1">
              <TabPane key="1" title="Tab 1">
                <Typography.Paragraph
                  style={{ textAlign: "center", marginTop: "20px" }}
                >
                  Content of Tab Panel 1
                </Typography.Paragraph>
              </TabPane>
              <TabPane key="2" title="Tab 2">
                <Typography.Paragraph
                  style={{ textAlign: "center", marginTop: "20px" }}
                >
                  Content of Tab Panel 2
                </Typography.Paragraph>
              </TabPane>
              <TabPane key="3" title="Tab 3">
                <Typography.Paragraph
                  style={{ textAlign: "center", marginTop: "20px" }}
                >
                  Content of Tab Panel 3
                </Typography.Paragraph>
              </TabPane>
            </Tabs>
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

export default TabComponent;
