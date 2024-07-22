export const columns = [
  { key: "transformation", label: "Transformação" },
  { key: "tags", label: "Tags" },
  { key: "mode", label: "Modo" },
  { key: "featureViews", label: "Visualizações de Funcionalidades" },
  { key: "featureServices", label: "Serviços de Funcionalidades" },
  { key: "lastUpdatedBy", label: "Última Atualização Por" },
  { key: "lastUpdated", label: "Última Atualização" },
  { key: "owner", label: "Proprietário" },
  { key: "created", label: "Criado" },
];

export const rows = [
  {
    key: "1",
    transformation: "transaction_amount_is_higher_than_average",
    slug: "transaction_amount_is_higher_than_average",
    title: "Metadata",
    tags: "0",
    mode: "Python",
    featureViews: "1",
    featureServices: "1",
    lastUpdatedBy: "dino@hookz.com.br",
    lastUpdated: "2024-03-06 16:31",
    owner: "n/a",
    created: "2024-03-06 16:31",
  },
  {
    key: "2",
    transformation: "user_transaction_metrics",
    slug: "user_transaction_metrics",
    title: "Metadata",
    tags: "2",
    mode: "Pandas",
    featureViews: "1",
    featureServices: "2",
    lastUpdatedBy: "dino@hookz.com.br",
    lastUpdated: "2024-03-06 16:31",
    owner: "n/a",
    created: "2024-03-06 16:31",
  },
  {
    key: "3",
    transformation: "user_transaction_amount_totals",
    slug: "user_transaction_amount_totals",
    title: "Metadata",
    tags: "0",
    mode: "Pandas",
    featureViews: "1",
    featureServices: "2",
    lastUpdatedBy: "dino@hookz.com.br",
    lastUpdated: "2024-03-06 16:31",
    owner: "n/a",
    created: "2024-03-06 16:31",
  },
  {
    key: "4",
    transformation: "user_credit_card_issuer",
    slug: "user_credit_card_issuer",
    title: "Metadata",
    tags: "0",
    mode: "Pandas",
    featureViews: "1",
    featureServices: "1",
    lastUpdatedBy: "matt@tecton.ai",
    lastUpdated: "2024-02-07 18:23",
    owner: "n/a",
    created: "2024-02-07 18:23",
  },
];

export const data = [
  {
    title: "Configuração",
    mode: "Python",
    transformation_function: "transaction_amount_is_higher_than_average",
  },
];

export const featureViewColumns = [
  { key: "featureView", label: "Visualização de Recurso" },
  { key: "type", label: "Tipo" },
  { key: "online", label: "Online" },
  { key: "offline", label: "Offline" },
  { key: "lastUpdatedBy", label: "Última Atualização Por" },
  { key: "lastUpdated", label: "Última Atualização" },
  { key: "owner", label: "Proprietário" },
  { key: "created", label: "Criado" },
];

export const featureViewRows = [
  {
    key: "1",
    featureView: "transaction_amount_is_higher_than_average",
    type: "On Demand",
    online: "disabled",
    offline: "disabled",
    lastUpdatedBy: "dino@hookz.com.br",
    lastUpdated: "2024-04-01 22:30",
    owner: "n/a",
    created: "2024-04-01 22:30",
  },
];
