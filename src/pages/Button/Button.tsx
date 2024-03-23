import React, { useState } from "react";
import {
  Typography,
  Divider,
  Button,
  Radio,
  Card,
} from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Outlet } from "react-router-dom";

const { Paragraph } = Typography;

const Buttons: React.FC = () => {
  const [size, setSize] = useState<"small" | "mini" | "default" | "large">(
    "mini"
  );
  const [type, setType] = useState<
    "primary" | "secondary" | "default" | "outline" | "text"
  >("primary");

  const [status, setStatus] = useState<
    "danger" | "success" | "default" | "warning"
  >("danger");

  const [isDisable, setIsDisable] = useState<"false" | "true">("false");

  const codeString = `import { Button } from "@arco-design/web-react"

<Button>Click me</Button>`;
  return (
    <div className="container">
      {/* <Title>Button</Title> */}
      <Paragraph>
        Button is a clickable interactive element that triggers a response.
      </Paragraph>
      <Paragraph>You can place text and icons inside of a button.</Paragraph>
      <Paragraph>
        Buttons are often used for form submissions and to toggle elements into
        view.
      </Paragraph>
      <Card style={{ width: 360 }}>
        <Button
          size={size}
          type={type}
          status={status}
          disabled={isDisable === "true"}
          onClick={() => alert("Button clicked!")}
        >
          Click Me
        </Button>
      </Card>
      <Card style={{ marginTop: 30 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 20,
            }}
          >
            <Paragraph style={{ fontWeight: "bold" }}>Name</Paragraph>
            <Paragraph>Size</Paragraph>
            <Paragraph>Type</Paragraph>
            <Paragraph>Status</Paragraph>
            <Paragraph>Disable</Paragraph>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 20,
            }}
          >
            <Paragraph style={{ fontWeight: "bold" }}>Default</Paragraph>
            <Paragraph className="txt">"mini"</Paragraph>
            <Paragraph className="txt">"primary"</Paragraph>
            <Paragraph className="txt">"danger"</Paragraph>
            <Paragraph className="txt">"false"</Paragraph>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 20,
            }}
          >
            <Paragraph style={{ fontWeight: "bold" }}>Control</Paragraph>
            <Radio.Group
              options={["mini", "small", "default", "large"]}
              value={size}
              onChange={(value: "small" | "mini" | "default" | "large") =>
                setSize(value)
              }
              type="button"
            />
            <Radio.Group
              options={["primary", "secondary", "outline", "text"]}
              value={type}
              onChange={(value: "primary" | "secondary" | "outline" | "text") =>
                setType(value)
              }
              type="button"
            />
            <Radio.Group
              options={["danger", "success", "default", "warning"]}
              value={status}
              onChange={(value: "success" | "danger" | "default" | "warning") =>
                setStatus(value)
              }
              type="button"
            />
            <Radio.Group
              options={["false", "true"]}
              value={isDisable}
              onChange={(value: "false" | "true") => setIsDisable(value)}
              type="button"
            />
          </div>
        </div>
      </Card>

      <Divider />
      <Paragraph>Basic usage</Paragraph>
      <SyntaxHighlighter
        language="jsx"
        style={docco}
        customStyle={{
          padding: "20px",
        }}
      >
        {codeString}
      </SyntaxHighlighter>

      <Outlet />
    </div>
  );
};

export default Buttons;
