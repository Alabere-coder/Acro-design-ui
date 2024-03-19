import React, { useState } from "react";
import { Typography, Divider, Button, Radio } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
      <Typography.Title>Button</Typography.Title>
      <Paragraph>
        Button is a clickable interactive element that triggers a response.
      </Paragraph>
      <Paragraph>You can place text and icons inside of a button.</Paragraph>
      <Paragraph>
        Buttons are often used for form submissions and to toggle elements into
        view.
      </Paragraph>
      <Button
        size={size}
        type={type}
        status={status}
        disabled={isDisable === "true"}
        onClick={() => alert("Button clicked!")}
      >
        Click Me
      </Button>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          
        }}
      > */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginTop: 30,
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
          <Paragraph>"mini"</Paragraph>
          <Paragraph>"primary"</Paragraph>
          <Paragraph>"danger"</Paragraph>
          <Paragraph>"false"</Paragraph>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 20,
          }}
        >
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
      {/* </div> */}

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
    </div>
  );
};

export default Buttons;
