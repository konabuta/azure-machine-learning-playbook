---
id: fundamentals-readme
title: "Azure Machine Learning とは"
---

## 機械学習のプラットフォーム

機械学習システムは非常に複雑です。研究開発や実験フェーズではシンプルな構成で実行環境を構築することができますが、本番運用を想定したり高い信頼性を実現するためには、さまざまなコンポーネントから構成される機械学習のプラットフォームが必要になります。

<img src={require('./images/mlsystem-component-2015.png').default} width="500" /><br />
“Hidden Technical Debt in Machine Learning Systems,” Google NIPS 2015  より引用

<br />

この図の 「ML Code」が Python スクリプトなどを用いてモデル学習する部分になるが、他にもデータ収集・堅調、プロセス管理、特徴量生成などさまざまな処理を実行するためのコンポーネントが必要になってきます。

## Azure Machine Learning とは？

Azure Machine Learning は Azure が提供する機械学習のプラットフォームです。E2E で機械学習のライフサイクルをサポートしています。マネージドサービス (PaaS) になっており、インフラ部分は Microsoft によって管理・運用されるため、本来注力したい機械学習の業務にフォーカスすることができます。

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

:::info
あくまで汎用的なプラットフォームのため、業界・業務のシナリオに特化しているものではありません。実現したいことが明確であれば、Azure Applied AI Service などのソリューションをご利用いただくのが良いケースもあります。
:::


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

