export const columns = [
  { key: "featureService", label: "Serviço de Funcionalidade" },
  { key: "tags", label: "Tags" },
  { key: "onlineServing", label: "Serviço Online" },
  { key: "featureViews", label: "Visualizações de Funcionalidades" },
  { key: "lastUpdatedBy", label: "Última Atualização Por" },
  { key: "lastUpdated", label: "Última Atualização" },
  { key: "owner", label: "Proprietário" },
  { key: "created", label: "Criado" },
];

export const rows = [
  {
    key: "1",
    featureService: "fraud_detection_feature_service",
    slug: "fraud_detection_feature_service",
    title: "Metadata",
    tags: "0",
    onlineServing: "enabled",
    featureViews: "1",
    lastUpdatedBy: "mahesh@tecton.ai",
    lastUpdated: "2024-04-01 22:30",
    owner: "n/a",
    created: "2024-04-01 22:30",
  },
  {
    key: "2",
    featureService: "fraud_detection_feature_service_streaming",
    slug: "fraud_detection_feature_service_streaming",
    title: "Metadata",
    tags: "0",
    onlineServing: "enabled",
    featureViews: "1",
    lastUpdatedBy: "mahesh@tecton.ai",
    lastUpdated: "2024-04-01 22:30",
    owner: "n/a",
    created: "2024-04-01 22:30",
  },
  {
    key: "3",
    featureService: "fraud_detection_feature_service:v2",
    slug: "fraud_detection_feature_service:v2",
    title: "Metadata",
    tags: "0",
    onlineServing: "enabled",
    featureViews: "4",
    lastUpdatedBy: "mahesh@tecton.ai",
    lastUpdated: "2024-04-01 22:30",
    owner: "n/a",
    created: "2024-04-01 22:30",
  },
];

export const data = [
  {
    title: "Configuração",
    entidades: "user",
    Keys_de_juncao: "user_id",
    Chave_secundaria_de_agregacao: "n/a",
    Online_serving: "enabled",
    On_demand_evironment: "n/a",
    Logging_enabled: "disabled",
    Logging_sample_rate: "0.0",
    Log_effective_times: "n/a",
    Caching: "disabled",
  },
];

export const materializationTableColumns = [
  { key: "featureView", label: "Visualização de Funcionalidade" },
  { key: "processingTimeline", label: "Linha do Tempo de Processamento" },
  { key: "lastProcessed", label: "Último Processamento" },
];

export const materializationTableRows = [
  {
    key: "1",
    featureView: "user_credit_card_issuer",
    processingTimeline: "2016-2024",
    lastProcessed: "19 hours ago",
  },
  {
    key: "2",
    featureView: "user_transaction_amount_totals",
    processingTimeline: "2018-2024",
    lastProcessed: "19 hours ago",
  },
  {
    key: "3",
    featureView: "user_transaction_metrics",
    processingTimeline: "2017-2024",
    lastProcessed: "19 hours ago",
  },
];
