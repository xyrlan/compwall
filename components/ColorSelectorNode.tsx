import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";

const ColorSelectorNode = memo(({ data, isConnectable }: any) => {
  return (
    <>
      <Handle
        isConnectable={isConnectable}
        position={Position.Left}
        style={{ background: "#555" }}
        type="target"
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <div>
        Custom Color Picker Node: <strong>{data.color}</strong>
      </div>
      <input
        className="nodrag"
        defaultValue={data.color}
        type="color"
        onChange={data.onChange}
      />
      <Handle
        id="a"
        isConnectable={isConnectable}
        position={Position.Right}
        style={{ top: 10, background: "#555" }}
        type="source"
      />
      <Handle
        id="b"
        isConnectable={isConnectable}
        position={Position.Right}
        style={{ bottom: 10, top: "auto", background: "#555" }}
        type="source"
      />
    </>
  );
});

ColorSelectorNode.displayName = "ColorSelectorNode";

export { ColorSelectorNode };
