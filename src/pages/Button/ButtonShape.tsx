import { Button, Card, Space } from "@arco-design/web-react";
import { IconPlus } from "@arco-design/web-react/icon";

const ButtonShape = () => {
  return (
    <div className="container">
      <Card style={{ width: 360 }}>
        <Space size="large">
          <Button shape="circle" type="primary" icon={<IconPlus />} />
          <Button shape="round" type="primary">
            Primary
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default ButtonShape;
