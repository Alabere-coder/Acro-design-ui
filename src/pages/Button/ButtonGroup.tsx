import { Button, Card } from "@arco-design/web-react";
import { IconLeft, IconRight } from "@arco-design/web-react/icon";
const ButtonGroup = Button.Group;

const ButtonGroups = () => {
  return (
    <div className="container">
      <Card style={{ width: 360 }}>
        <ButtonGroup>
          <Button
            type="primary"
            icon={<IconLeft />}
            style={{ padding: "0 8px" }}
          >
            Prev
          </Button>
          <Button type="primary" style={{ padding: "0 8px" }}>
            Next
            <IconRight />
          </Button>
        </ButtonGroup>
      </Card>
    </div>
  );
};

export default ButtonGroups;
