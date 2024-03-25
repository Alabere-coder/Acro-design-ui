import { Card, Avatar } from "@arco-design/web-react";
import { IconUser } from "@arco-design/web-react/icon";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const AvatarComponent = () => {
  const codeString = `import { Button } from "@arco-design/web-react"
import { IconUser } from "@arco-design/web-react/icon";

<Avatar style={{ backgroundColor: '#3370ff' }}>
  <IconUser />
</Avatar>`;
  return (
    <div className="container">
      <Card style={{ width: 360, marginBottom: "20px" }}>
        <Avatar style={{ backgroundColor: "#3370ff" }}>
          <IconUser />
        </Avatar>
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

export default AvatarComponent;
