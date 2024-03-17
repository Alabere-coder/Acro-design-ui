import {
  Typography,
  Form,
  Input,
  Checkbox,
  Button,
  Divider,
} from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../components/Card.";
const { Title, Paragraph } = Typography;
const FormItem = Form.Item;

const FormComponent = () => {
  const codeString = `import { Switch } from '@arco-design/web-react';
onst FormItem = Form.Item;
  
<Form style={{ width: 600 }} autoComplete='off'>
  <FormItem label='Username'>
    <Input placeholder='please enter your username...' />
  </FormItem>
  <FormItem label='Post'>
    <Input placeholder='please enter your post...' />
  </FormItem>
  <FormItem wrapperCol={{ offset: 5 }}>
    <Checkbox>I have read the manual</Checkbox>
  </FormItem>
  <FormItem wrapperCol={{ offset: 5 }}>
    <Button type='primary'>Submit</Button>
  </FormItem>
</Form>`;

  return (
    <div className="container">
      <Title>Form</Title>
      <Paragraph>
        A form with data collection, verification and submission functions,
        including checkboxes, radio buttons, input boxes, drop-down selection
        boxes and other elements.
      </Paragraph>
      <Divider />
      <Title heading={4}>Basic</Title>
      <Paragraph>Usage of uncontrolled mode.</Paragraph>
      <ReusableCard
        title={
          <Form style={{ width: 600 }} autoComplete="off">
            <FormItem label="Username">
              <Input placeholder="please enter your username..." />
            </FormItem>
            <FormItem label="Post">
              <Input placeholder="please enter your post..." />
            </FormItem>
            <FormItem wrapperCol={{ offset: 5 }}>
              <Checkbox>I have read the manual</Checkbox>
            </FormItem>
            <FormItem wrapperCol={{ offset: 5 }}>
              <Button type="primary">Submit</Button>
            </FormItem>
          </Form>
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
  );
};

export default FormComponent;
