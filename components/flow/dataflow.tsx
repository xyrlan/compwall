"use client"
import React, { useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/base.css';
import turboNode, { TurboNodeData } from './turbo-node';
import TurboEdge from './turbo-edge';
import FunctionIcon from './function-icon';


const initialNodes: Node<TurboNodeData>[] = [
  {
    id: '1',
    position: { x: 0, y: 50 },
    data: { icon: <FunctionIcon />, title: 'Batch Data Source', subline: 'users' },
    type: 'turbo',
  },
  {
    id: '2',
    position: { x: 0, y: 250 },
    data: { icon: <FunctionIcon />, title: 'Stream Data Source', subline: 'transactions_stream' },
    type: 'turbo',
  },
  {
    id: '3',
    position: { x: 0, y: 450 },
    data: { icon: <FunctionIcon />, title: 'Batch Data Source', subline: 'transactions_batch' },
    type: 'turbo',
  },
  {
    id: '4',
    position: { x: 350, y: 50 },
    data: { icon: <FunctionIcon />, title: 'Batch Feature View', subline: 'user_credit_card_issuer' },
    type: 'turbo',
  },
  {
    id: '5',
    position: { x: 350, y: 250 },
    data: { icon: <FunctionIcon />, title: 'Stream Feature View', subline: 'user_transaction_amount_totals' },
    type: 'turbo',
  },
  {
    id: '6',
    position: { x: 350, y: 450 },
    data: { icon: <FunctionIcon />, title: 'Batch Feature View', subline: 'user_transaction_metrics' },
    type: 'turbo',
  },
  {
    id: '7',
    position: { x: 700, y: 250 },
    data: { icon: <FunctionIcon />, title: 'Online Store / Offline Store' },
    type: 'turbo',
    style: { width: 100, height: 100, borderRadius: '50%' }, // Estilo especial para o nó 7
  },
  {
    id: '8',
    position: { x: 950, y: 50 },
    data: { icon: <FunctionIcon />, title: 'On-Demand Feature View', subline: 'transaction_amount_is_higher_than_average' },
    type: 'turbo',
  },
  {
    id: '9',
    position: { x: 1350, y: 50 },
    data: { icon: <FunctionIcon />, title: 'Feature Service', subline: 'fraud_detection_feature_service_v2' },
    type: 'turbo',
  },
  {
    id: '10',
    position: { x: 1350, y: 250 },
    data: { icon: <FunctionIcon />, title: 'Feature Service', subline: 'fraud_detection_feature_service_streaming' },
    type: 'turbo',
  },
  {
    id: '11',
    position: { x: 1350, y: 450 },
    data: { icon: <FunctionIcon />, title: 'Feature Service', subline: 'fraud_detection_feature_service' },
    type: 'turbo',
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-4', source: '1', target: '4' },
  { id: 'e2-5', source: '2', target: '5' },
  { id: 'e3-6', source: '3', target: '6' },
  { id: 'e4-7', source: '4', target: '7' },
  { id: 'e5-7', source: '5', target: '7' },
  { id: 'e6-7', source: '6', target: '7' },
  { id: 'e7-8', source: '7', target: '8' },
  { id: 'e8-9', source: '8', target: '9' },
  { id: 'e7-10', source: '7', target: '10' },
  { id: 'e7-11', source: '7', target: '11' },
];

const nodeTypes = {
  turbo: turboNode,
};

const edgeTypes = {
  turbo: TurboEdge,
};

const defaultEdgeOptions = {
  type: 'turbo',
  markerEnd: 'edge-circle',
};

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((els) => addEdge(params, els)),
    [],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      defaultEdgeOptions={defaultEdgeOptions}
    >
      <Controls showInteractive={false} />
      <svg>
        <defs>
          <linearGradient id="edge-gradient">
            <stop offset="0%" stopColor="#9fbf38" />
            <stop offset="100%" stopColor="#fefefe" />
          </linearGradient>

          <marker
            id="edge-circle"
            viewBox="-5 -5 10 10"
            refX="0"
            refY="0"
            markerUnits="strokeWidth"
            markerWidth="10"
            markerHeight="10"
            orient="auto"
          >
            <circle stroke="#fefefe" strokeOpacity="0.75" r="2" cx="0" cy="0" />
          </marker>
        </defs>
      </svg>
    </ReactFlow>
  );
};

export default Flow;