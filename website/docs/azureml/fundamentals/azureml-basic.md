---
id: azureml-basic
title: "Azure Machine Learning とは"
---

## 機械学習のプラットフォーム

機械学習システムは非常に複雑です。研究開発や実験フェーズではシンプルな構成で実行環境を構築することができますが、本番運用を想定したり高い信頼性を実現するためには、さまざまなコンポーネントから構成される機械学習のプラットフォームが必要になります。

この図の 「ML Code」が Python スクリプトなどを用いてモデル学習する部分になるが、他にもデータ収集・堅調、プロセス管理、特徴量生成などさまざまな処理を実行するためのコンポーネントが必要になってきます。

<img src={require('./images/mlsystem-component-2015.png').default} width="500" /><br />
“Hidden Technical Debt in Machine Learning Systems,” Google NIPS 2015  より引用


## Azure Machine Learning とは？

Azure Machine Learning (aka Azure ML) は Azure が提供する機械学習のプラットフォームです。E2E で機械学習のライフサイクルをサポートしています。マネージドサービス (PaaS) になっており、インフラ部分は Microsoft によって管理・運用されるため、本来注力したい機械学習の業務にフォーカスすることができます。

<img src={require('./images/azureml-lifecycle.png').default} width="500" /><br />



### Azure Machine Learning で出来ること

汎用的でオープンな機械学習のプラットフォームになっているため、実装次第ではお客様が実現したいことを柔軟に実現することができるようになっています。


- トラディショナルな機械学習モデルの開発
- 画像、音声、テキストなどの非構造化データを用いて機械学習モデルの開発
- 因果探索・因果推論
- ハイパーパラメータチューニング、Neural Architecture Search (NAS)
- 並列分散処理 (Spark、Dask、Ray)
- MLOps (実験管理、ライフサイクルの自動化、モニタリング など)
- 責任のある AI

など


:::info
あくまで汎用的なプラットフォームのため、業界・業務のシナリオに特化しているものではありません。実現したいことが明確であれば、汎用的な学習済みモデルを提供する Azure Cognitive Services や Azure Applied AI Service などのソリューションをご利用いただくのが良いケースもあります。
:::

### 機械学習のライフサイクル

Azure Machine Learning は機械学習ライフサイクル (MLOps) を構成する 3 つの Loop (Inner、Middle, Outer) の各要素やループ間が高速に回ることを意識しています。

<img src={require('./images/ml-lifecycle.png').default} width="500" /><br />



### 従来の方法との比較

オープンソース (Python/R など)を利用する観点で言えば、Azure Machine Learning を利用せずともモデル学習や推論はもちろん可能ですが、Azure Machine Learning を使うことで多くのメリットがあります。

| 機械学習ライフサイクル    | 従来の方法 | Azure ML | 
|-----------|---------|---------|
| 計算リソースの用意 |<li>CPU/GPUのサーバーを調達</li><li>電源を確保し、ネットワークに接続</li>|<li> Azure ML 付属の計算環境である Compute Instance や Compute Clusters を起動</li><li>既存の計算環境をアタッチ</li>|
| 環境構築      |<li>Python 環境と Jupyter 環境をインストール</li><li>GPU のドライバ/ライブラリをインストール</li>|<li>Compute Instance のインストール済みの Python やそのライブラリ、Jupyter Notebook や VSCode （Remove) を利用</li><li>環境 (Environment) を利用して共有の Python 環境を作成・運用</li>|
| データの準備    |<li>システムから手動でデータを都度取得</li><li>Python コード中にストレージへの接続情報を定義し、データのサブセットを取得</li>|<li>データストア Datastore でデータソースのストレージへの接続情報を管理</li><li>データ Data でデータのサブセットを定義</li>|
| 前処理とモデル作成 |<li>手動でのデータの前処理やモデル学習</li>|<li>AutoML や Hyperdrive (ハイパーパラメータチューニング) による前処理・モデル学習の高速化</li><li>実験管理や再利用可能なパイプラインの作成</li>|
| 推論コンテナの作成 |<li>Dockerfile を記述してコンテナを作成</li><li>Flaks や Fast API などを利用して手動でエンドポイントを作成</li>|<li>保存済みモデルに対するメタデータの付与</li><li>環境 Environment と推論スクリプトを定義するのみでクイックにエンドポイントを作成</li>| 
| デプロイメント   |<li>Kubernetes などにコンテナを手動でデプロイ</li><li>手動でのスケールアウト/スケールイン</li>|<li>マネージドなエンドポイント (Managed Endpoint) への自動デプロイ</li><li>Kubernetes へのクイックなデプロイ</li>|
| 監視        |<li>手動でのログ取得</li><li>手動でのデータ変化検知</li>|<li>Azure Monitor を利用した監視</li><li>Data Drift の自動検知と通知</li>|

## Azure Machine Learning の特徴

Azure Machine Learning の特徴的な側面を 4 つに整理します。

### 1. ライフサイクルの高速化
- プロトタイプの機械学習モデルを迅速に構築できる実験サービス (AutoML, Designer)
- チーム・組織の共有環境
- さまざまなオープンテクノロジーとの統合 (Python/R、VSCode、GitHub など)

### 2. MLOps による大規模な開発・運用
- MLflow を用いて実験管理
- パイプライン機能による処理の自動化と再現性の確保
- エンドツーエンドの監視の仕組み

### 3. セキュリティ & コンプライアンス
- Azure セキュリティ・コンプライアンスの仕組み
- クオータ管理やスケジュール起動・停止機能によるコストの抑制

### 4. 責任のある AI の実現
- Responsible AI Toolbox との統合
- 機械学習モデルのデバッグと意思決定への活用

