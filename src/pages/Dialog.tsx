import { Divider, Typography } from "@arco-design/web-react";
const { Title, Paragraph } = Typography;

const Dialog = () => {
  return (
    <div className="container">
      <Typography.Title>Dialog</Typography.Title>
      <Paragraph>A modal dialog window displayed above the page.</Paragraph>
      <Divider />
    </div>
  );
};

export default Dialog;
