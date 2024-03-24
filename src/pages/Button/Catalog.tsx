import { Space, Typography, Button } from "@arco-design/web-react";

const { Paragraph } = Typography;

const ButtonCatalog = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 30,
        padding: "0 20px",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <div>
            <Paragraph style={{ fontSize: "16px", fontWeight: "bold" }}>
              Primary
            </Paragraph>
            <Space>
              <Paragraph
                style={{ margin: "auto", fontSize: "16px", width: "65px" }}
              >
                size
              </Paragraph>
              <Button size="mini" type="primary">
                Mini
              </Button>
              <Button size="small" type="primary">
                Small
              </Button>
              <Button size="default" type="primary">
                Default
              </Button>
              <Button size="large" type="primary">
                Large
              </Button>
            </Space>
          </div>
          <div>
            <Paragraph style={{ fontSize: "16px", fontWeight: "bold" }}>
              Secondary
            </Paragraph>
            <Space>
              <Button size="mini" type="secondary">
                Mini
              </Button>
              <Button size="small" type="secondary">
                Small
              </Button>
              <Button size="default" type="secondary">
                Default
              </Button>
              <Button size="large" type="secondary">
                Large
              </Button>
            </Space>
          </div>

          <div>
            <Paragraph style={{ fontSize: "16px", fontWeight: "bold" }}>
              Outline
            </Paragraph>
            <Space>
              <Button size="mini" type="outline">
                Mini
              </Button>
              <Button size="small" type="outline">
                Small
              </Button>
              <Button size="default" type="outline">
                Default
              </Button>
              <Button size="large" type="outline">
                Large
              </Button>
            </Space>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <div>
            <Space>
              <Paragraph
                style={{ margin: "auto", fontSize: "16px", width: "65px" }}
              >
                status
              </Paragraph>
              <Button size="mini" type="primary" status="default">
                Mini
              </Button>
              <Button size="small" type="primary" status="warning">
                Small
              </Button>
              <Button size="default" type="primary" status="danger">
                Default
              </Button>
              <Button size="large" type="primary" status="success">
                Large
              </Button>
            </Space>
          </div>
          <div>
            <Space>
              <Button size="mini" type="secondary" status="default">
                Mini
              </Button>
              <Button size="small" type="secondary" status="warning">
                Small
              </Button>
              <Button size="default" type="secondary" status="danger">
                Default
              </Button>
              <Button size="large" type="secondary" status="success">
                Large
              </Button>
            </Space>
          </div>
          <div>
            <Space>
              <Button size="mini" type="outline" status="default">
                Mini
              </Button>
              <Button size="small" type="outline" status="warning">
                Small
              </Button>
              <Button size="default" type="outline" status="danger">
                Default
              </Button>
              <Button size="large" type="outline" status="success">
                Large
              </Button>
            </Space>
          </div>
        </div>

        {/* fdkjh */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <div>
            <Space>
              <Paragraph
                style={{ margin: "auto", fontSize: "16px", width: "65px" }}
              >
                disabled
              </Paragraph>
              <Button size="mini" type="primary" disabled status="default">
                Mini
              </Button>
              <Button size="small" type="primary" disabled status="warning">
                Small
              </Button>
              <Button size="default" type="primary" disabled status="danger">
                Default
              </Button>
              <Button size="large" type="primary" disabled status="success">
                Large
              </Button>
            </Space>
          </div>
          <div>
            <Space>
              <Button size="mini" type="secondary" disabled status="default">
                Mini
              </Button>
              <Button size="small" type="secondary" disabled status="warning">
                Small
              </Button>
              <Button size="default" type="secondary" disabled status="danger">
                Default
              </Button>
              <Button size="large" type="secondary" disabled status="success">
                Large
              </Button>
            </Space>
          </div>
          <div>
            <Space>
              <Button size="mini" type="outline" disabled status="default">
                Mini
              </Button>
              <Button size="small" type="outline" disabled status="warning">
                Small
              </Button>
              <Button size="default" type="outline" disabled status="danger">
                Default
              </Button>
              <Button size="large" type="outline" disabled status="success">
                Large
              </Button>
            </Space>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 34,
            marginBottom: 20,
          }}
        >
          <div>
            <Paragraph style={{ fontSize: "16px", fontWeight: "bold" }}>
              Dashed
            </Paragraph>
            <Space>
              <Paragraph
                style={{ margin: "auto", fontSize: "16px", width: "65px" }}
              >
                size
              </Paragraph>
              <Button size="mini" type="dashed">
                Mini
              </Button>
              <Button size="small" type="dashed">
                Small
              </Button>
              <Button size="default" type="dashed">
                Default
              </Button>
              <Button size="large" type="dashed">
                Large
              </Button>
            </Space>
          </div>
          <div>
            <Paragraph style={{ fontSize: "16px", fontWeight: "bold" }}>
              Text
            </Paragraph>
            <Space>
              <Button size="mini" type="text">
                Mini
              </Button>
              <Button size="small" type="text">
                Small
              </Button>
              <Button size="default" type="text">
                Default
              </Button>
              <Button size="large" type="text">
                Large
              </Button>
            </Space>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 34,
            marginBottom: 20,
          }}
        >
          <div>
            <Space>
              <Paragraph
                style={{ margin: "auto", fontSize: "16px", width: "65px" }}
              >
                status
              </Paragraph>
              <Button size="mini" type="dashed" status="default">
                Mini
              </Button>
              <Button size="small" type="dashed" status="warning">
                Small
              </Button>
              <Button size="default" type="dashed" status="danger">
                Default
              </Button>
              <Button size="large" type="dashed" status="success">
                Large
              </Button>
            </Space>
          </div>
          <div>
            <Space>
              <Button size="mini" type="text" status="default">
                Mini
              </Button>
              <Button size="small" type="text" status="warning">
                Small
              </Button>
              <Button size="default" type="text" status="danger">
                Default
              </Button>
              <Button size="large" type="text" status="success">
                Large
              </Button>
            </Space>
          </div>
        </div>

        {/* disabled */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 34,
          }}
        >
          <div>
            <Space>
              <Paragraph
                style={{ margin: "auto", fontSize: "16px", width: "65px" }}
              >
                disabled
              </Paragraph>
              <Button size="mini" type="dashed" status="default" disabled>
                Mini
              </Button>
              <Button size="small" type="dashed" status="warning" disabled>
                Small
              </Button>
              <Button size="default" type="dashed" status="danger" disabled>
                Default
              </Button>
              <Button size="large" type="dashed" status="success" disabled>
                Large
              </Button>
            </Space>
          </div>
          <div>
            <Space>
              <Button size="mini" type="text" status="default" disabled>
                Mini
              </Button>
              <Button size="small" type="text" status="warning" disabled>
                Small
              </Button>
              <Button size="default" type="text" status="danger" disabled>
                Default
              </Button>
              <Button size="large" type="text" status="success" disabled>
                Large
              </Button>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonCatalog;
