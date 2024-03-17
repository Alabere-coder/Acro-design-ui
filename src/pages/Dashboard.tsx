import { Typography, Divider } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const { Title, Paragraph } = Typography;

const Dashboard = () => {
  const codeString = `// npm

npm i @arco-design/web-react
    
// yarn

yarn add @arco-design/web-react`;

  const codeString2 = `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@arco-design/web-react/dist/css/arco.css";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);
  `;
  return (
    <div className="container">
      <Title>Getting Started</Title>
      <Paragraph>You need to install arco-design</Paragraph>
      <Divider />

      <SyntaxHighlighter
        language="jsx"
        style={docco}
        customStyle={{
          padding: "20px",
        }}
      >
        {codeString}
      </SyntaxHighlighter>
      <Paragraph style={{ marginTop: "20px", fontSize: "18px" }}>
        Add the css to the root of your application.
      </Paragraph>
      <SyntaxHighlighter
        language="jsx"
        style={docco}
        customStyle={{
          padding: "20px",
        }}
      >
        {codeString2}
      </SyntaxHighlighter>
    </div>
  );
};

export default Dashboard;
