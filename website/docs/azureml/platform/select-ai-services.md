---
id: select-ai-services
title: "機械学習サービスの選択"
---

# 機械学習サービスの選択

Azure では用途に応じてさまざまな機械学習サービスを提供しています。本ページでは代表的な Azure サービスについてご紹介します。

## マネージドサービスの活用

従来は個人のデスクトップ環境に統計ツールをインストールしたデータ分析の形骸が多かったと思いますが、最近はチーム・組織の規模で機械学習のさまざまな処理が実行・管理できるプラットフォームを構築してモデルを開発・運用管理することが増えています。この機械学習プラットフォームを構築する方法はいくつかありますが、ここでは **管理コスト** に着目します。

社内にエンジニアリソースが豊富にある場合は機械学習に必要なさまざまなコンポーネントや基盤をスクラッチで開発することも選択肢にあがりますが、[「Fundamentals : Azure Machine Learning とは」](../fundamentals/azureml-basic#機械学習のプラットフォーム)に記載したように機械学習のコンポーネントは多岐に渡っているため、全てを自前で開発・運用するのは簡単ではありません。

そこで多くのお客様はクラウドサービスが提供するマネージドサービスと呼ばれる、クラウドでは PaaS (Platform as a service) と呼ばれる分野のサービスを利用しています。

マネージドサービスを利用することで、各コンポーネントの開発工数を削減できるだけでなく、以下のようなシステムの管理コストも削減することができます。

- ストレージの障害対応
- 計算リソースの作成、削除、スケールアウト/イン
- セキュリティパッチの適用
- セキュリティ機能の実装
etc


## Azure Machine Learning

[「Fundamentals : Azure Machine Learning とは」](../fundamentals/azureml-basic#azure-machine-learning-とは) をご参照ください。

## Azure Databricks

Azure Databricks は Apache Spark をベースにした統合的な分析プラットフォームです。Azure Active Directory と連携したクラウド内の完全に管理され最適化・高速化された Spark クラスターを迅速に立ち上げることができます。分析者はインフラを意識することなく共同分析作業に集中でき ます。また、処理に応じて柔軟にスケールを変更することができ、これまで分析に要していた時間を短縮することにより 様々なアプローチに取り組むことができます。

### 参考情報
- [Azure Databricks (Web 製品ページ)](https://azure.microsoft.com/ja-jp/products/databricks/#overview)

## Azure Data Science VM

:::caution

このサービスは IaaS (Infrastructure as service) に分類されるもので PaaS サービスではございません。
:::

Azure Data Science VM (aka DSVM) は Azure VM をベースとし、データ分析、AI・機械学習でよく使用されるツールやライブラリが予めインストール・構築された VM 環境になります。CPU だけなく、GPU ドライバがインストール済みの GPU の VM も選択することができます。OS は Windows ベースのものと Linux ベースのものを用意しています。


## Azure Machine Learning と Azure Databricks

2 つのサービスのそれぞれの強みについて説明します。

### Azure Machine Learning
機械学習に特化したサービスであり、Data Scientist をターゲットにしている。オープンソースのテクノロジーとの親和性が高く、Data Scientist がよく使っている Visual Studio Code や Jupyter Notebook、R Studio が利用できます。学習や推論の計算処理も単一ノードから複数ノードにスケールアウト可能です。

### Azure Databricks
Spark を利用した強力なデータレイクの基盤になっており、データの前処理からモデル学習・推論まで一期通貫にスケーラブルの計算環境上で高速に実行できる。MLflow が内蔵されている。開発は専用のノートブック環境が用意されており、対話的にビジュアル機能を利用しながらデータ分析を進めることができる。