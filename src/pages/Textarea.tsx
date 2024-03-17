import { Divider, Typography } from "@arco-design/web-react";
const { Title, Paragraph } = Typography;

const Textarea = () => {
  return (
    <div className="container">
      <Typography.Title>Textarea</Typography.Title>
      <Paragraph>Captures multi-line user input.</Paragraph>
      <Divider />
      <Title heading={4}>Button types</Title>
    </div>
  );
};

export default Textarea;
