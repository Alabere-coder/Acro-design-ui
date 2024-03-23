import { Card, Steps } from "@arco-design/web-react";
const Step = Steps.Step;

const StepComponent = () => {
  return (
    <div className="container">
      <Card>
        <Steps current={1} style={{ maxWidth: 780, margin: "0 auto" }}>
          <Step title="Processing" />
          <Step title="Pending" />
          <Step title="Succeeded" />
        </Steps>
      </Card>
    </div>
  );
};

export default StepComponent;
