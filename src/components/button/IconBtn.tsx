import { Space, Typography, Button } from "@arco-design/web-react";
const { Title, Paragraph } = Typography;
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  IconLeft,
  IconRight,
  IconStar,
  IconSettings,
  IconMessage,
} from "@arco-design/web-react/icon";
import ReusableCard from "../Card.";

const ButtonGroup = Button.Group;

const BtnWithIcon = () => {
  const codeString = `import { Button } from "@arco-design/web-react"
import {
  IconLeft,
  IconRight,
  IconStar,
  IconSettings,
  IconMessage,
} from "@arco-design/web-react/icon";
const ButtonGroup = Button.Group;

<ButtonGroup>
<Button type="primary" icon={<IconLeft />} shape="round" style={{ padding: "0 8px" }}>Prev</Button>
<Button type="primary" shape="round" style={{ padding: "0 8px" }}>Next<IconRight /></Button>
</ButtonGroup>
<Button type="primary" icon={<IconStar />} />
<Button type="primary" icon={<IconMessage />} />
<Button type="primary" icon={<IconSettings />} />
<Button type="primary" icon={<IconSettings />}>Setting</Button>
<Button type="primary" icon={<IconStar />}>Favorite</Button>
`;
  return (
    <div>
      <Title heading={4}>button with icon</Title>
      <Paragraph>
        You can nest icons directly inside the button. An appropriate gap is
        provided automatically.
      </Paragraph>

      <ReusableCard
        title={
          <Space size="large">
            <ButtonGroup>
              <Button
                type="primary"
                icon={<IconLeft />}
                shape="round"
                style={{ padding: "0 8px" }}
              >
                Prev
              </Button>
              <Button type="primary" shape="round" style={{ padding: "0 8px" }}>
                Next
                <IconRight />
              </Button>
            </ButtonGroup>

            <Button type="primary" icon={<IconStar />} />
            <Button type="primary" icon={<IconMessage />} />
            <Button type="primary" icon={<IconSettings />} />

            <Button type="primary" icon={<IconStar />}>
              Favorite
            </Button>
            <Button type="primary" icon={<IconSettings />}>
              Setting
            </Button>
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

export default BtnWithIcon;
