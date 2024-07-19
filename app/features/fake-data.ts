import { Monitor } from "lucide-react";
import { title } from "process";
import React from "react";

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
    title: "Metadata",
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
    title: "Metadata",
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
    title: "Metadata",
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
    title: "Metadata",
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

export const materializationData = [
  {
    title: "Configuração Geral",
    Tempo_de_execucao_de_materializacao: "0.9.0b7",
    Inicio_da_funcionalidade: "2020-01-01 00:00:00",
    Inicio_da_materializacao: "2019-12-25 00:00:00",
    Agendamento_de_lote: "1d",
    Disparo_de_lote: "scheduled",
    Tempo_final_do_disparo_manual: "n/a",
    Atraso_maximo_da_fonte_de_dados: "n/a",
    Preenchimento_incremental: "disabled",
    Intervalo_maximo_de_preenchimento: "n/a",
    Compactacao_de_lote: "disabled"
  },
  {
    title: "Configuração de Armazenamento",
    online: "enabled",
    ttl_de_servico: "n/a",
    Tipo_de_armazenamento: "DynamoDB",
    Idate_maxima_do_cache: "n/a",
    Monitoramento_de_frescura: "enabled",
    Frescura_esperada: "2d",
    offline: "enabled",
    Formato_da_tabela_de_estágio: "Delta",
    Publicar_funcionalidades_completas: "n/a",
    Inicio_da_publicacao: "n/a"
  }
]

export const materializationColumns = [
  { key: "status", label: "Status" },
  { key: "type", label: "Tipo" },
  { key: "featureTimeRange", label: "Intervalo de Tempo da Funcionalidade" },
  { key: "attempts", label: "Tentativas" },
  { key: "online", label: "Online" },
  { key: "offline", label: "Offline" },
  { key: "latestStateChange", label: "Última Mudança de Estado" },
  { key: "latestDuration", label: "Última Duração" },
  { key: "actions", label: "Ações" }
];

export const materializationRows = [
  {
    key: "1",
    status: "success",
    type: "Batch",
    featureTimeRange: "2024-06-11 00:00 — 2024-06-12 00:00",
    attempts: "1",
    online: "enabled",
    offline: "enabled",
    latestStateChange: "2024-06-12 00:03",
    latestDuration: "2m 3s",
    actions: ""
  },
  {
    key: "2",
    status: "success",
    type: "Batch",
    featureTimeRange: "2024-06-10 00:00 — 2024-06-11 00:00",
    attempts: "1",
    online: "enabled",
    offline: "enabled",
    latestStateChange: "2024-06-11 00:04",
    latestDuration: "2m 2s",
    actions: ""
  },
  {
    key: "3",
    status: "success",
    type: "Batch",
    featureTimeRange: "2024-06-09 00:00 — 2024-06-10 00:00",
    attempts: "1",
    online: "enabled",
    offline: "enabled",
    latestStateChange: "2024-06-10 00:06",
    latestDuration: "2m 3s",
    actions: ""
  },
  {
    key: "4",
    status: "success",
    type: "Batch",
    featureTimeRange: "2024-06-08 00:00 — 2024-06-09 00:00",
    attempts: "1",
    online: "enabled",
    offline: "enabled",
    latestStateChange: "2024-06-09 00:06",
    latestDuration: "2m 2s",
    actions: ""
  },
  {
    key: "5",
    status: "success",
    type: "Batch",
    featureTimeRange: "2024-06-07 00:00 — 2024-06-08 00:00",
    attempts: "1",
    online: "enabled",
    offline: "enabled",
    latestStateChange: "2024-06-08 00:03",
    latestDuration: "2m 6s",
    actions: ""
  },
  {
    key: "6",
    status: "success",
    type: "Batch",
    featureTimeRange: "2024-06-06 00:00 — 2024-06-07 00:00",
    attempts: "1",
    online: "enabled",
    offline: "enabled",
    latestStateChange: "2024-06-07 00:03",
    latestDuration: "2m 3s",
    actions: ""
  },
  {
    key: "7",
    status: "success",
    type: "Batch",
    featureTimeRange: "2024-06-05 00:00 — 2024-06-06 00:00",
    attempts: "1",
    online: "enabled",
    offline: "enabled",
    latestStateChange: "2024-06-06 00:03",
    latestDuration: "2m 2s",
    actions: ""
  },
  {
    key: "8",
    status: "success",
    type: "Batch",
    featureTimeRange: "2024-06-04 00:00 — 2024-06-05 00:00",
    attempts: "1",
    online: "enabled",
    offline: "enabled",
    latestStateChange: "2024-06-05 00:03",
    latestDuration: "2m 3s",
    actions: ""
  },
  {
    key: "9",
    status: "success",
    type: "Batch",
    featureTimeRange: "2024-06-03 00:00 — 2024-06-04 00:00",
    attempts: "1",
    online: "enabled",
    offline: "enabled",
    latestStateChange: "2024-06-04 00:03",
    latestDuration: "2m 3s",
    actions: ""
  },
  {
    key: "10",
    status: "success",
    type: "Batch",
    featureTimeRange: "2024-06-02 00:00 — 2024-06-03 00:00",
    attempts: "1",
    online: "enabled",
    offline: "enabled",
    latestStateChange: "2024-06-03 00:03",
    latestDuration: "2m 2s",
    actions: ""
  }
];

export const serviceRows = [
  {
    key: "1",
    featureService: "fraud_detection_feature_service",
    lastUpdatedBy: "mahesh@tecton.ai",
    lastUpdated: "2024-04-01 22:30",
    owner: "n/a",
    created: "2024-04-01 22:30"
  },
  {
    key: "2",
    featureService: "fraud_detection_feature_service:v2",
    lastUpdatedBy: "mahesh@tecton.ai",
    lastUpdated: "2024-04-01 22:30",
    owner: "n/a",
    created: "2024-04-01 22:30"
  }
];

export const serviceColumns = [
  { key: "featureService", label: "Serviço de Funcionalidade" },
  { key: "lastUpdatedBy", label: "Última Atualização Por" },
  { key: "lastUpdated", label: "Última Atualização" },
  { key: "owner", label: "Proprietário" },
  { key: "created", label: "Criado" }
];

