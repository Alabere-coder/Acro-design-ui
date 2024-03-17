import {
  Divider,
  Typography,
  Drawer,
  Button,
  Descriptions,
} from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../Card.";
import { useState } from "react";
const { Title, Paragraph } = Typography;

const DrawerPosition = () => {
  const [visible, setVisible] = useState(false);

  const codeString = `import { useState } from 'react';
    import { Drawer, Button, Divider, Link, Descriptions } from '@arco-design/web-react';
    
    function DrawerPosition() {
      const [visible, setVisible] = useState(false);
      return (
        <div>
          <Button onClick={() => {setVisible(true)}}
            type='primary'
          >
            Open Drawer
          </Button>
          <Drawer width={350} title={<span>User Information </span>} visible={visible}
            onOk={() => {setVisible(false)}}
            onCancel={() => {setVisible(false);}}
            placement="left"
            footer={null}
          >
            <Descriptions
              colon=''
              title='Personal Information'
              column={1}
              labelStyle={{ width: 100 }}
              data={[
                {
                  label: 'Name',
                  value: 'Orwell',
                },
                {
                  label: 'Date of birth',
                  value: '1995.01.01',
                },
                {
                  label: 'City',
                  value: 'Beijing',
                },
                {
                  label: 'To work',
                  value: '2017.07',
                },
              ]}
            />
            <Divider />
            <Descriptions
              colon=''
              title='Contact Information'
              column={1}
              labelStyle={{ width: 100 }}
              data={[
                {
                  label: 'Telephone',
                  value: '+86 136-6333-2888',
                },
                {
                  label: 'Email',
                  value: '123456789@163.com',
                },
              ]}
            />
          </Drawer>
        </div>
      );
    }
    
    export default DrawerPosition;`;

  return (
    <div className="container">
      <Title heading={4}>Drawer Position</Title>
      <Paragraph>
        Use placement to customize the position where the drawer will slide out
        from. you can slide from left, top, bottom and right is default
      </Paragraph>
      <ReusableCard
        title={
          <div>
            <Button
              onClick={() => {
                setVisible(true);
              }}
              type="primary"
            >
              Open Drawer
            </Button>
            <Drawer
              width={350}
              title={<span>User Information </span>}
              visible={visible}
              placement="left"
              onOk={() => {
                setVisible(false);
              }}
              onCancel={() => {
                setVisible(false);
              }}
              footer={null}
            >
              <Descriptions
                colon=""
                title="Personal Information"
                column={1}
                labelStyle={{ width: 100 }}
                data={[
                  {
                    label: "Name",
                    value: "Orwell",
                  },
                  {
                    label: "Date of birth",
                    value: "1995.01.01",
                  },
                  {
                    label: "City",
                    value: "Beijing",
                  },
                  {
                    label: "To work",
                    value: "2017.07",
                  },
                ]}
              />
              <Divider />
              <Descriptions
                colon=""
                title="Contact Information"
                column={1}
                labelStyle={{ width: 100 }}
                data={[
                  {
                    label: "Telephone",
                    value: "+86 136-6333-2888",
                  },
                  {
                    label: "Email",
                    value: "123456789@163.com",
                  },
                ]}
              />
            </Drawer>
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

export default DrawerPosition;
