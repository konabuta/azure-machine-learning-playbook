---
id: azureml-compute
title: "計算リソース"
---

モデル学習や推論は計算リソース上で処理が実行されます。Azure Machine Learning は計算リソースとして Azure Machine Learning で管理しているマネージドな計算リソースとして Compute Cluster & Compute Instance が利用できます。また Kubernetes など外部の計算リソースをアタッチして利用することもできます。本ページでは Azure Machine Learning で利用可能な計算リソースの一覧とそれぞれの特徴を記載します。


## マネージドな計算リソース

Azure Machine Learning が提供するコンピューティングインスタンス (Compute Instance) とコンピューティングクラスター (Compute Clusters) の比較をします。

|          |Compute Instance | Compute Clusters  |
|---------|---------|---------|
|用途|データサイエンティスト一人ひとりに付与される自由度の高い開発/テスト環境|中大規模な学習・推論、分散・並列処理を実行するクラスター環境|
|方式|インタラクティブ|非インタラクティブ (バッチ)|
|スケーラビリティ|単一インスタンス|最大 6500 ノードまで拡張可能 (MPI 非実行時)|
|起動停止|スケジュール設定可|ワークロードに応じて自動で起動停止|
|低優先度|非対応|対応|

### 推論に特化した計算リソース

Managed Online Endpoint は Azure Machine Learning で管理される独自の計算リソースが利用されます。一方、Managed Batch Endpoint は Compute Cluster が利用されます。

### 参考情報
- [Azure Machine Learning エンドポイントとは](https://docs.microsoft.com/ja-JP/azure/machine-learning/concept-endpoints)


## アタッチする計算リソース

マネージドな計算リソース以外にも、Azure で管理をしている計算環境をアタッチして利用することができます。

- Kubernetes
    - Azure Kubernetes Service (AKS)
    - Azure Arc-enabled Kubernetes cluster
- Azure Synapse Analytics - Spark Pool
- Azure Databricks
- Azure VM



### 参考情報
- [Azure Machine Learning でのコンピューティング ターゲットとは](https://docs.microsoft.com/ja-jp/azure/machine-learning/concept-compute-target)
- [Azure Machine Learning での Kubernetes コンピューティング先の概要](https://docs.microsoft.com/ja-JP/azure/machine-learning/how-to-attach-kubernetes-anywhere)


--- 

## 計算リソースの選択や構成における考慮事項

### Public IP or No Public IP

Compute Instance と Compute Cluster の IP アドレスはデフォルトでは Public IP が付与されます。No Public IP の設定は 2022年9月現在 Public Preview の機能としてご利用いただけます。

#### Public IP
- Public IP の環境下では Network Security Group (NSG) の受信アクセス (Inbound) において、サービスタグで "Azure Machine Learning" と "Batch NodeManagement" を許可する必要があります。


#### No Public IP
- 受信アクセス (Inbound) の設定は不要です。
- Azure Active Direcotry や Microsoft Container Registry などの Azure/Microsoft 内部のサービスや Azure 外部へのインターネット接続をするために、ユーザー定義ルーティング (UDR) を構成して、Firewall の Public IP や Virtual Network NAT を使用する必要があります。