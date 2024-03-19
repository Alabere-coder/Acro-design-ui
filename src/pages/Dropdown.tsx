import {
  Divider,
  Typography,
  Button,
  Menu,
  Dropdown,
} from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../components/Card.";
import { IconDown } from "@arco-design/web-react/icon";

const dropList = (
  <Menu>
    <Menu.Item key="1">Beijing</Menu.Item>
    <Menu.Item key="2">Shanghai</Menu.Item>
    <Menu.Item key="3">Guangzhou</Menu.Item>
  </Menu>
);
const { Title, Paragraph } = Typography;

const Dropdowns = () => {
  const codeString = `import { Dropdown, Menu, Button, Space } from '@arco-design/web-react';
  import { IconDown } from '@arco-design/web-react/icon';
  const dropList = (
    <Menu>
      <Menu.Item key='1'>Beijing</Menu.Item>
      <Menu.Item key='2'>Shanghai</Menu.Item>
      <Menu.Item key='3'>Guangzhou</Menu.Item>
    </Menu>
  );
  
  function Dropdowns () {
    const [visible, setVisible] = useState(false);
    return (
      <Dropdown droplist={dropList} position='bl'>
        <Button type='text'>
          Hover me <IconDown />
        </Button>
      </Dropdown>
    );
  }
  
  export default Dropdowns;`;

  return (
    <>
      <div className="container">
        <Typography.Title>Dropdown</Typography.Title>
        <Paragraph>
          Menu representing a set of actions, triggered by a button.
        </Paragraph>
        <Divider />

        <Title heading={4}>Basic</Title>
        <Paragraph>Basic usage of Dropdown.</Paragraph>
        <ReusableCard
          title={
            <div>
              <Dropdown droplist={dropList} position="bl">
                <Button type="text">
                  Hover me <IconDown />
                </Button>
              </Dropdown>
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
    </>
  );
};

export default Dropdowns;
