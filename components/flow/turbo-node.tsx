import React, { memo, ReactNode } from "react";
import { Handle, NodeProps, Position, Node } from "@xyflow/react";

export type TurboNodeData = {
  title: string;
  icon?: ReactNode;
  subline?: string;
};

const TurboNode = memo(({ data }: NodeProps<Node<TurboNodeData>>) => {
  return (
    <>
      <div className="cloud gradient">
        <div>{data.icon}</div>
      </div>
      <div className="wrapper gradient">
        <div className="inner">
          <div className="body">
            <div>
              <div className="title">{data.title}</div>
              {data.subline && <div className="subline">{data.subline}</div>}
            </div>
          </div>
          <Handle position={Position.Left} type="target" />
          <Handle position={Position.Right} type="source" />
        </div>
      </div>
    </>
  );
});

TurboNode.displayName = "TurboNode";

export { TurboNode };
