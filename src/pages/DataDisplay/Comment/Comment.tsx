import { Comment, Card, Avatar } from "@arco-design/web-react";
import {
  IconHeart,
  IconMessage,
  IconStar,
  IconStarFill,
  IconHeartFill,
} from "@arco-design/web-react/icon";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CommentComponent = () => {
  const [like, setLike] = useState<boolean | undefined>();
  const [star, setStar] = useState<boolean | undefined>();
  const actions = [
    <button
      className="custom-comment-action"
      key="heart"
      onClick={() => setLike(!like)}
    >
      {like ? <IconHeartFill style={{ color: "#f53f3f" }} /> : <IconHeart />}
      {83 + (like ? 1 : 0)}
    </button>,
    <button
      className="custom-comment-action"
      key="star"
      onClick={() => setStar(!star)}
    >
      {star ? <IconStarFill style={{ color: "#ffb400" }} /> : <IconStar />}
      {3 + (star ? 1 : 0)}
    </button>,
    <button className="custom-comment-action" key="reply">
      <IconMessage /> Reply
    </button>,
  ];

  const codeString = `import { Comment, Avatar } from "@arco-design/web-react"
import {
IconHeart,
IconMessage,
IconStar,
IconStarFill,
IconHeartFill,
} from '@arco-design/web-react/icon';

<Comment
    actions={actions} // define your action
    author="Socrates"
    avatar={
    <Avatar>
        <img
        alt="avatar"
        src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
        />
    </Avatar>
    }
    content={<div>Comment body content.</div>}
    datetime="1 hour"
/>`;
  return (
    <div className="container">
      <Card style={{ width: 360, marginBottom: "20px" }}>
        <Comment
          actions={actions}
          author="Socrates"
          avatar={
            <Avatar>
              <img
                alt="avatar"
                src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
              />
            </Avatar>
          }
          content={<div>Comment body content.</div>}
          datetime="1 hour"
        />
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

export default CommentComponent;
