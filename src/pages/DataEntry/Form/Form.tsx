import {
  Typography,
  Form,
  Input,
  Button,
  Divider,
  Card,
} from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const { Title } = Typography;
const FormItem = Form.Item;

const FormComponent = () => {
  const codeString = `import { Form, Button } from '@arco-design/web-react';
onst FormItem = Form.Item;
  
<Form style={{ width: 600 }} autoComplete='off'>
  <FormItem label='Username'>
    <Input placeholder='please enter your username...' />
  </FormItem>
  <FormItem label='Post'>
    <Input placeholder='please enter your post...' />
  </FormItem>
  <FormItem wrapperCol={{ offset: 5 }}>
    <Button type='primary'>Submit</Button>
  </FormItem>
</Form>`;

  return (
    <div className="container">
      <Title>Form</Title>

      <Divider />
      <Card>
        <Form style={{ width: 600 }} autoComplete="off">
          <FormItem label="Username">
            <Input placeholder="please enter your username..." />
          </FormItem>
          <FormItem label="Post">
            <Input placeholder="please enter your post..." />
          </FormItem>

          <FormItem wrapperCol={{ offset: 5 }}>
            <Button type="primary">Submit</Button>
          </FormItem>
        </Form>
      </Card>

      <SyntaxHighlighter
        language="jsx"
        style={docco}
        customStyle={{
          padding: "20px",
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default FormComponent;
