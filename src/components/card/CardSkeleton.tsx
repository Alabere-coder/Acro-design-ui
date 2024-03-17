import {
  Card,
  Switch,
  Skeleton,
  Avatar,
  Link,
  Typography,
  Space,
} from "@arco-design/web-react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReusableCard from "../Card.";
import { useState } from "react";

const { Meta } = Card;
const { Title, Paragraph } = Typography;

const CardSkeleton = () => {
  const [loading, setLoading] = useState(true);

  const codeString = `import { Card } from "@arco-design/web-react"

<>
<Switch
  style={{ display: "block", marginBottom: 10 }}
  checked={!loading}
  onChange={(checked) => setLoading(!checked)}
/>
<Space align="start" size="large">
  <Card
    style={{ width: 384 }}
    cover={
      <Skeleton
        loading={loading}
        text={{ rows: 0 }}
        image={{
          style: {
            width: 352,
            height: 188,
            margin: "16px 16px 0 16px",
          },
        }}
      >
        <div style={{ height: 204, overflow: "hidden" }}>
          <img
            style={{
              width: "100%",
              transform: "translateY(-20px)",
            }}
            alt="dessert"
            src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          />
        </div>
      </Skeleton>
    }
  >
    <Meta
      avatar={
        <Skeleton
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 4,
          }}
          loading={loading}
          text={{ rows: 1, width: 64 }}
          image={{
            shape: "circle",
            style: {
              width: 24,
              height: 24,
            },
          }}
        >
          <Space>
            <Avatar size={24}>A</Avatar>
            <Typography.Text>Username</Typography.Text>
          </Space>
        </Skeleton>
      }
      title={
        <Skeleton
          loading={loading}
          style={{ marginTop: 0 }}
          text={{
            rows: 1,
            width: 72,
          }}
        >
          Card title
        </Skeleton>
      }
      description={
        <Skeleton loading={loading} text={{ rows: 1, width: 150 }}>
          This is the description
        </Skeleton>
      }
    />
  </Card>
  <Card
    style={{ width: 384 }}
    title={
      <Skeleton loading={loading} text={{ rows: 1, width: 72 }}>
        Arco Card
      </Skeleton>
    }
    extra={
      <Skeleton
        loading={loading}
        text={{
          rows: 1,
          width: "100%",
          style: {
            width: 30,
            float: "right",
          },
        }}
      >
        <Link>More</Link>
      </Skeleton>
    }
  >
    <Skeleton
      loading={loading}
      text={{ rows: 2, width: ["100%", "80%"] }}
    >
      ByteDance's core product, Toutiao ('Headlines'), is a content
      platform in China and around the world.
    </Skeleton>

    <Meta
      avatar={
        <Skeleton
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 4,
          }}
          loading={loading}
          text={{ rows: 1, width: 64 }}
          image={{
            shape: "circle",
            style: {
              width: 24,
              height: 24,
            },
          }}
        >
          <Space>
            <Avatar size={24}>A</Avatar>
            <Typography.Text>Username</Typography.Text>
          </Space>
        </Skeleton>
      }
    />
  </Card>
  </Space>
</>`;
  return (
    <div>
      <Title heading={4}>Card skeleton</Title>
      <Paragraph>
        Combine Skeleton to display the text skeleton before the data is loaded.
      </Paragraph>

      <ReusableCard
        title={
          <>
            <Switch
              style={{
                display: "block",
                marginBottom: 10,
                backgroundColor: "ButtonText",
              }}
              checked={!loading}
              onChange={(checked) => setLoading(!checked)}
            />
            <Space align="start" size="large">
              <Card
                style={{ width: 384 }}
                cover={
                  <Skeleton
                    loading={loading}
                    text={{ rows: 0 }}
                    image={{
                      style: {
                        width: 352,
                        height: 188,
                        margin: "16px 16px 0 16px",
                      },
                    }}
                  >
                    <div style={{ height: 204, overflow: "hidden" }}>
                      <img
                        style={{
                          width: "100%",
                          transform: "translateY(-20px)",
                        }}
                        alt="dessert"
                        src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                      />
                    </div>
                  </Skeleton>
                }
              >
                <Meta
                  avatar={
                    <Skeleton
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 4,
                      }}
                      loading={loading}
                      text={{ rows: 1, width: 64 }}
                      image={{
                        shape: "circle",
                        style: {
                          width: 24,
                          height: 24,
                        },
                      }}
                    >
                      <Space>
                        <Avatar size={24}>A</Avatar>
                        <Typography.Text>Username</Typography.Text>
                      </Space>
                    </Skeleton>
                  }
                  title={
                    <Skeleton
                      loading={loading}
                      style={{ marginTop: 0 }}
                      text={{
                        rows: 1,
                        width: 72,
                      }}
                    >
                      Card title
                    </Skeleton>
                  }
                  description={
                    <Skeleton loading={loading} text={{ rows: 1, width: 150 }}>
                      This is the description
                    </Skeleton>
                  }
                />
              </Card>
              <Card
                style={{ width: 384 }}
                title={
                  <Skeleton loading={loading} text={{ rows: 1, width: 72 }}>
                    Arco Card
                  </Skeleton>
                }
                extra={
                  <Skeleton
                    loading={loading}
                    text={{
                      rows: 1,
                      width: "100%",
                      style: {
                        width: 30,
                        float: "right",
                      },
                    }}
                  >
                    <Link>More</Link>
                  </Skeleton>
                }
              >
                <Skeleton
                  loading={loading}
                  text={{ rows: 2, width: ["100%", "80%"] }}
                >
                  ByteDance's core product, Toutiao ('Headlines'), is a content
                  platform in China and around the world.
                </Skeleton>

                <Meta
                  avatar={
                    <Skeleton
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 4,
                      }}
                      loading={loading}
                      text={{ rows: 1, width: 64 }}
                      image={{
                        shape: "circle",
                        style: {
                          width: 24,
                          height: 24,
                        },
                      }}
                    >
                      <Space>
                        <Avatar size={24}>A</Avatar>
                        <Typography.Text>Username</Typography.Text>
                      </Space>
                    </Skeleton>
                  }
                />
              </Card>
            </Space>
          </>
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

export default CardSkeleton;
