import { Breadcrumb, Card } from "@arco-design/web-react";
const BreadcrumbItem = Breadcrumb.Item;

const BreadcrumbComponent = () => {
  return (
    <div className="container">
      <Card>
        <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Channel</BreadcrumbItem>
          <BreadcrumbItem>News</BreadcrumbItem>
        </Breadcrumb>
      </Card>
    </div>
  );
};

export default BreadcrumbComponent;
