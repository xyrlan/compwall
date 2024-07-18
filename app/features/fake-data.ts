import { title } from "process";

export const columns = [
  { key: "featureView", label: "Visualização de Recurso" },
  { key: "tags", label: "Tags" },
  { key: "type", label: "Tipo" },
  { key: "online", label: "Online" },
  { key: "offline", label: "Offline" },
  { key: "numFeatures", label: "Número de Funcionalidades" },
  { key: "entities", label: "Entidades" },
  { key: "featureServices", label: "Serviços de Funcionalidades" },
  { key: "lastUpdatedBy", label: "Última Atualização Por" },
  { key: "lastUpdated", label: "Última Atualização" },
  { key: "owner", label: "Proprietário" },
  { key: "created", label: "Criado" }
];

export const rows = [
  {
    key: "1",
    featureView: "user_transaction_metrics",
    slug: "user_transaction_metrics",
    title : "Metadata",
    tags: "2",
    type: "Batch",
    online: "enabled",
    offline: "enabled",
    numFeatures: "6",
    entities: "1",
    featureServices: "2",
    lastUpdatedBy: "mahesh@tecton.ai",
    lastUpdated: "2024-04-01 22:30",
    owner: "n/a",
    created: "2024-04-01 22:30"
  },
  {
    key: "2",
    featureView: "user_credit_card_issuer",
    slug: "user_credit_card_issuer",
    title : "Metadata",
    tags: "0",
    type: "Batch",
    online: "enabled",
    offline: "enabled",
    numFeatures: "1",
    entities: "1",
    featureServices: "1",
    lastUpdatedBy: "mahesh@tecton.ai",
    lastUpdated: "2024-04-01 22:30",
    owner: "n/a",
    created: "2024-04-01 22:30"
  },
  {
    key: "3",
    featureView: "user_transaction_amount_totals",
    slug: "user_transaction_amount_totals",
    title : "Metadata",
    tags: "0",
    type: "Stream",
    online: "enabled",
    offline: "enabled",
    numFeatures: "3",
    entities: "1",
    featureServices: "2",
    lastUpdatedBy: "mahesh@tecton.ai",
    lastUpdated: "2024-04-01 22:30",
    owner: "n/a",
    created: "2024-04-01 22:30"
  },
  {
    key: "4",
    featureView: "transaction_amount_is_higher_than_average",
    slug: "transaction_amount_is_higher_than_average",
    title : "Metadata",
    tags: "0",
    type: "On Demand",
    online: "n/a",
    offline: "n/a",
    numFeatures: "1",
    entities: "0",
    featureServices: "1",
    lastUpdatedBy: "mahesh@tecton.ai",
    lastUpdated: "2024-04-01 22:30",
    owner: "n/a",
    created: "2024-04-01 22:30"
  }
];

export const data = [
  {
    title: "Configuração",
    tipo_de_visualizacao_de_recurso: "Batch",
    entidades: "user",
    chaves_de_juncao: "user_id",
    campo_de_timestamp: "timestamp",
    online: "enabled",
    offline: "enabled",
    inicio_da_funcionalidade: "2020-01-01 00:00:00",
    chave_secundaria_de_agregacao: "n/a",
    email_de_alerta: "n/a"
  },
  {
    title: "Recursos",
    amount_mean_1d_1d: "aggregation",
    amount_mean_3d_1d: "aggregation",
    amount_mean_7d_1d: "aggregation",
    amount_count_1d_1d: "aggregation",
    amount_count_3d_1d: "aggregation",
    amount_count_7d_1d: "aggregation"
  }
]