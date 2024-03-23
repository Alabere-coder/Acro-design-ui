import { Button, Card, Space } from "@arco-design/web-react";
import { IconPlus, IconDelete } from "@arco-design/web-react/icon";

const ButtonIcon = () => {
  return (
    <div className="container">
      <Card style={{ width: 360 }}>
        <Space size="large">
          <Button type="primary" icon={<IconPlus />} />
          <Button type="primary" icon={<IconDelete />}>
            Delete
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default ButtonIcon;
