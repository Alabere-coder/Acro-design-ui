import {
  Dropdown,
  Menu,
  Button,
  Space,
  Typography,
} from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../Card.";
const positions: ("bl" | "bottom" | "br" | "tl" | "top" | "tr")[] = [
  "bl",
  "bottom",
  "br",
  "tl",
  "top",
  "tr",
];
const descriptions = [
  "BottomLeft",
  "BottomCenter",
  "BottomRight",
  "TopLeft",
  "Top",
  "TopRight",
];

const { Title, Paragraph } = Typography;

const DropdownComponent = () => {
  const codeString = `import { Dropdown, Menu, Button, Space } from '@arco-design/web-react';
    import { IconDown } from '@arco-design/web-react/icon';
    const dropList = (
      <Menu>
        <Menu.Item key='1'>Beijing</Menu.Item>
        <Menu.Item key='2'>Shanghai</Menu.Item>
        <Menu.Item key='3'>Guangzhou</Menu.Item>
      </Menu>
    );
    
    function DropdownComponent () {
      const [visible, setVisible] = useState(false);
      return (
        <Dropdown droplist={dropList} position='bl'>
          <Button type='text'>
            Hover me <IconDown />
          </Button>
        </Dropdown>
      );
    }
    
    export default DropdownComponent;`;

  return (
    <div className="container">
      <Title heading={4}>Position of popup</Title>
      <Paragraph>
        Six popup position are available: top, tl: top-left, tr: top-right,
        bottom, bl: bottom-left (default), br: bottom-right。
      </Paragraph>
      <ReusableCard
        title={
          <Space size="large" className="dropdown-demo">
            {positions.map((position, index) => (
              <Dropdown
                key={index}
                position={position}
                droplist={
                  <Menu>
                    <Menu.Item key="1">Menu Item 1</Menu.Item>
                    <Menu.Item key="2">Menu Item 2</Menu.Item>
                    <Menu.Item key="3">Menu Item 3</Menu.Item>
                  </Menu>
                }
              >
                <Button type="secondary">{descriptions[index]}</Button>
              </Dropdown>
            ))}
          </Space>
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

export default DropdownComponent;
