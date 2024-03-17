import { Typography, Divider } from "@arco-design/web-react";

const { Paragraph } = Typography;

import BtnType from "../components/button/BtnType";
import BtnsSze from "../components/button/BtnsSze";
import BtnState from "../components/button/BtnState";
import BtnWithIcon from "../components/button/IconBtn";
import LoadingBtn from "../components/button/LoadingBtn";
import BtnShapes from "../components/button/BtnShapes";

const Buttons = () => {
  return (
    <div className="container">
      <Typography.Title>Button</Typography.Title>
      <Paragraph>
        Trigger an action or event, such as submitting a form or displaying a
        dialog.
      </Paragraph>
      <Divider />
      <BtnType />
      <BtnsSze />
      <BtnShapes />
      <BtnState />
      <BtnWithIcon />
      <LoadingBtn />
    </div>
  );
};

export default Buttons;
