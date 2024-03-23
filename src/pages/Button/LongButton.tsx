import { Button, Card } from "@arco-design/web-react";

const LongButton = () => {
  return (
    <div className="container">
      <Card style={{ width: 360 }}>
        <Button type="primary" long>
          Primary
        </Button>
      </Card>
    </div>
  );
};

export default LongButton;
