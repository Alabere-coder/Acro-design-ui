import { Card, Image } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ImageComponent = () => {
  const codeString = `import { Button } from "@arco-design/web-react"
import { IconPlus } from "@arco-design/web-react/icon";

<Image
    width={200}
    src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
    alt='lamp'
/>`;
  return (
    <div className="container">
      <Card style={{ width: 360, marginBottom: "20px" }}>
        <Image
          width={200}
          src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
          alt="lamp"
        />
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

export default ImageComponent;
