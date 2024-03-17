import { Space, Typography, Button } from "@arco-design/web-react";
import { useState } from "react";
const { Title, Paragraph } = Typography;
import { IconPlus } from "@arco-design/web-react/icon";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../Card.";

const LoadingBtn = () => {
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  function onClickBtn2() {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 4000);
  }

  function onClickBtn3() {
    setLoading3(true);
    setTimeout(() => {
      setLoading3(false);
    }, 4000);
  }

  const codeString = `import { Button } from "@arco-design/web-react"
import { IconPlus } from "@arco-design/web-react/icon";

<Button type="primary" loading>Loading</Button>
<Button type="primary" shape="circle" loading />
<Button type="secondary" shape="circle" loading />


const LoadingBtn2 = () => {

  const [loading2, setLoading2] = useState(false);

  function onClickBtn2() {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 4000);
  }
  return (
    <Button type="primary" loading={loading2} onClick={onClickBtn2} >{!loading2 && <IconPlus />}Click Me</Button>
  )
}

const LoadingBtn3 = () => {
  const [loading3, setLoading3] = useState(false);

  function onClickBtn3() {
    setLoading3(true);
    setTimeout(() => {
      setLoading3(false);
    }, 4000);
  }
  return (
    <Button type="primary" loadingFixedWidth loading={loading3} onClick={onClickBtn3} >
    Search
</Button>
  )
}`;

  return (
    <div>
      <Title heading={4}>loading button</Title>
      <Paragraph>You can seta button to be in the loading state.</Paragraph>
      <div style={{ display: "flex" }}>
        <ReusableCard
          title={
            <div>
              <Space className="gap-4">
                <Button type="primary" loading>
                  Loading
                </Button>
                <Button type="primary" shape="circle" loading />
                <Button type="secondary" shape="circle" loading />
                <Button type="primary" loading={loading2} onClick={onClickBtn2}>
                  {!loading2 && <IconPlus />}Click Me
                </Button>
                <Button
                  type="primary"
                  loadingFixedWidth
                  loading={loading3}
                  onClick={onClickBtn3}
                >
                  Search
                </Button>
              </Space>
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
    </div>
  );
};

export default LoadingBtn;
