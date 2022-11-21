---
id: compute
title: "計算リソース"
---

機械学習におけるモデル学習や推論は計算リソース上で処理が実行されます。本ページでは Azure Machine Learning で利用可能な計算リソースの一覧とそれぞれの特徴を記載します。


## マネージドな計算リソース

Azure Machine Learning が提供する計算リソースとしては、コンピューティングインスタンス (Compute Instance) とコンピューティングクラスター (Compute Cluster) があります。

|          |Compute Instance | Compute Cluster  |
|---------|---------|---------|
|用途|データサイエンティスト一人ひとりに付与される自由度の高い開発/テスト環境|中・大規模な学習・推論、分散・並列処理を実行するクラスター環境|
|方式|インタラクティブ|非インタラクティブ (バッチ)|
|スケーラビリティ|単一ノード|複数ノード|
|起動停止|スケジュール設定可|ワークロードに応じて自動で起動停止|
|低優先度|非対応|対応|

### 推論に特化した計算リソース

Managed Online Endpoint は Azure Machine Learning で管理される独自の計算リソースが利用されます。また、Managed Batch Endpoint は Compute Cluster が利用されます。

一方で Kubernetes Online Endpoint や Kubernetes Batch Endpoint は Kubernetes を計算環境としており、

|          |Managed/Kubernetes Online Endpoint |Batch Endpoint (Managed & Kubernetes)|
|---------|---------|---------|
|用途|リアルタイム推論|バッチ推論|
|方式|Rest API|Rest API, Job|
|スケーラビリティ|複数ノードにスケールアウト可|複数ノードにスケールアウト可|
|MLflow モデル| 推論スクリプト、Environment (環境) を自動生成  |  推論スクリプト、Environment (環境) を自動生成 
|モデル更新サポート|ブルーグリーンデプロイメント、トラフィックのミラーリング機能|なし|


### 参考情報
- [Azure Machine Learning エンドポイントとは](https://docs.microsoft.com/ja-JP/azure/machine-learning/concept-endpoints)


## アタッチする計算リソース

マネージドな計算リソース以外にも、Azure で管理をしている計算環境をアタッチして利用することができます。

### Kubernetes

Azure ML v2 から、次の 2 種類の Kubernetes クラスターが Azure Machine Learning の計算環境としてサポートされています。

- Azure Kubernetes Service (AKS)
- Azure Arc-enabled Kubernetes cluster

### その他

その他アタッチできる計算環境は次の通りです。

- Azure Synapse Analytics - Spark Pool (Preview)
- Azure Databricks
- Azure VM



### 参考情報
- [Azure Machine Learning でのコンピューティング ターゲットとは](https://docs.microsoft.com/ja-jp/azure/machine-learning/concept-compute-target)
- [Azure Machine Learning での Kubernetes コンピューティング先の概要](https://docs.microsoft.com/ja-JP/azure/machine-learning/how-to-attach-kubernetes-anywhere)


--- 

## 計算リソースの選択や構成における考慮事項

### Compute Cluster の起動時間

Job 実行時に Compute Cluster のノード数が 0 の場合、ノードの起動に数分時間がかかります。インタラクティブに Job を実行したい場合は、以下の構成を検討ください。

- 最小ノード数を 1 以上にする。
- Kubernetes を計算リソースにする。

---
## 補足
### Job の実行フロー

Azure Machine Learning の Job を実行したときの内部の処理フローは次の通りです。

- Job を Azure CLI (v2) + YAML ファイル から発行する
- Compute Cluster が起動する
- Azure ML - Environment に登録してある Docker Image を Pull する
- Datastore や Data asseet からデータを取得する
- 学習スクリプトをロードする
- Compute Cluster で処理が実行される
- ログやメトリックが取得される
- Compute Cluster が停止する

<img src={require('./images/job-flow.png').default} width="1000" /><br />