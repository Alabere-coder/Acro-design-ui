import { Button, Menu, Dropdown, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IconDown } from "@arco-design/web-react/icon";

const dropList = (
  <Menu>
    <Menu.Item key="1">Beijing</Menu.Item>
    <Menu.Item key="2">Shanghai</Menu.Item>
    <Menu.Item key="3">Guangzhou</Menu.Item>
  </Menu>
);

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
        <Button type='text'> Hover me <IconDown /></Button>
      </Dropdown>
    );
  }
  export default DropdownComponent;`;

  return (
    <>
      <div className="container">
        <Card style={{ width: 360, marginBottom: "20px" }}>
          <div>
            <Dropdown droplist={dropList} position="bl">
              <Button type="secondary">
                Hover me <IconDown />
              </Button>
            </Dropdown>
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
    </>
  );
};

export default DropdownComponent;
