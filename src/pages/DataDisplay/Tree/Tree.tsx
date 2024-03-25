import { Tree, Card } from "@arco-design/web-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const TreeNode = Tree.Node;

const TreeComponent = () => {
  const codeString = `import { Tree } from "@arco-design/web-react"
const TreeNode = Tree.Node;

<Tree
    defaultExpandedKeys={['0-0-0']}
    defaultSelectedKeys={['0-0-0', '0-0-1']}
    onSelect={(value, info) => {
    console.log(value, info);
    }}
    onExpand={(keys, info) => {
    console.log(keys, info);
    }}
>
    <TreeNode title='Trunk' key='0-0'>
    <TreeNode title='Branch 0-0-0' key='0-0-0' disabled>
        <TreeNode title='Leaf' key='0-0-0-0' />
        <TreeNode title='Leaf' key='0-0-0-1' />
    </TreeNode>
    <TreeNode title='Branch 0-0-1' key='0-0-1'>
        <TreeNode title='Leaf' key='0-0-1-0' />
    </TreeNode>
    </TreeNode>
</Tree>`;
  return (
    <div className="container">
      <Card style={{ width: 560, marginBottom: "20px" }}>
        <Tree
          defaultExpandedKeys={["0-0-0"]}
          defaultSelectedKeys={["0-0-0", "0-0-1"]}
          onSelect={(value, info) => {
            console.log(value, info);
          }}
          onExpand={(keys, info) => {
            console.log(keys, info);
          }}
        >
          <TreeNode title="Trunk" key="0-0">
            <TreeNode title="Branch 0-0-0" key="0-0-0" disabled>
              <TreeNode title="Leaf" key="0-0-0-0" />
              <TreeNode title="Leaf" key="0-0-0-1" />
            </TreeNode>
            <TreeNode title="Branch 0-0-1" key="0-0-1">
              <TreeNode title="Leaf" key="0-0-1-0" />
            </TreeNode>
          </TreeNode>
        </Tree>
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

export default TreeComponent;
