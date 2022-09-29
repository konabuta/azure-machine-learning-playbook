---
id: ftalive
---

# FTA Live Session
FastTrack for Azure (aka FTA) では、Azure の様々なサービス・ワークロードに関する技術セッションを開催しています。FTA のプログラムに参加されていないお客様でも自由に参加することができます。

- トップページ : [FastTrack for Azure Live](https://fasttrack.azure.com/live)
    - [AI & ML セッション一覧](https://fasttrack.azure.com/live/category/AI%20&%20ML)

# AI & ML セッションのご紹介
FastTrack for Azure - AI & ML の Japan で提供されている Live session の概要です。なおセッションは参加者とインタラクティブに実施しており、基本的に録画はしていません。個社別の開催はご相談ください。

:::caution

アジェンダや内容は予告なしに変更される場合があります。

:::

## Azure Machine Learning 基礎編

本ライブセッションでは、[Azure Machine Learning (AzureML)](https://docs.microsoft.com/azure/machine-learning/overview-what-is-azure-machine-learning) の概要を説明し、[AzureML Studio](https://docs.microsoft.com/azure/machine-learning/overview-what-is-machine-learning-studio) の Web ポータル機能や [Azure ML Python SDK](https://docs.microsoft.com/ja-JP/python/api/overview/azure/ml/?view=azure-ml-py) を使って機械学習のプロセスを実行する様子をデモンストレーションを通じて解説します。

### 対象
現在業務でデータ分析を行なっている(市民)データサイエンティストや機械学習エンジニアの方、また Azure Machine Learning の基盤を設計&構築するためにサービスの概要を把握されたいインフラエンジニアが対象です。事前の Azure の知識は不要です。


### アジェンダ

|     | トピック  | 機能 | 概要  
| :-- | :----- | :-----  | :-----
| 00. | Introduction  |     | セッションの概要について説明します。
| 01. | Azure ML 概要  |     | Azure AI の全体像、Azure Machine Learning のコンポーネントや特徴を説明します。
| 02. | Demo : Azure Machine Learning サービス作成 |[Azure Portal](http://portal.azure.com/) | Azure Portal を利用したサービスのデプロイ方法や作成される関連 Azure サービスの説明をします。
| 03. | Demo : Azure Machine Learning Studio | [AzureML Studio](https://ml.azure.com/) | Azure ML Studio の Web ポータル機能を用いてモデル学習からデプロイまでの一連の流れをデモンストレーションします。
| 04. | Demo : Azure Machine Learning CLI v2 | [AzureML CLI v2](https://docs.microsoft.com/en-us/cli/azure/ml?view=azure-cli-latests) + [YAML](https://docs.microsoft.com/en-us/azure/machine-learning/reference-yaml-overview) | Azure ML CLI v2 + YAML を使ったモデル学習などsの実行方法をデモンストレーションする。
| 05. |Q&A        || Azure Machine Learning に関する質問にお答えします。

### 資料

Azure ML ページタブの [Fundamentals](../azureml/fundamentals/azureml-basic) 配下にある Web サイトや参照先の製品ドキュメントなどを利用します。

---

## Azure Machine Learning システム構築 & 運用編

本ライブセッションでは、システム観点から [Azure Machine Learning (AzureML)](https://docs.microsoft.com/azure/machine-learning/overview-what-is-azure-machine-learning) を構築・運用管理するのに役立つ機能の紹介、設計や構成設定のベストプラクティスをご紹介します。

### 対象
Azure Machine Learning の構築を担当されるシステムエンジニアの方、機械学習エンジニアの方が対象になります。Azure の基本的な知識があることが前提になります。



### アジェンダ


|     | セクション  | トピック | 概要   
| :-- | :----- | :-----  | :-----
| 00. | 導入           |            | セッションの概要について説明します。
| 01. | イントロダクション |            | 本題に入る前に Azure ML の基本的な機能を説明します。
|     |               | Azure Machine Learning 概要| Azure ML を構成するコンポーネントや関連サービスについて説明します。
|     |               | 機械学習サービスの選択 | Azure から提供される複数の機械学習サービスを紹介します。
| 02. | システム設計 & 構築 |            | インフラの観点で構築・運用に必要なポイントを説明します。
|     |               | ワークスペースの設計 | ワークスペースの構成パターンを説明します。
|     |               | 計算リソース  | モデル学習や推論で用いる計算環境について説明します。
|     |               | データソース  | モデル学習やバッチ推論で利用するデータの保存方法や運用方法について説明します。
|     |               | ネットワーク構 | 仮想ネットワークをセキュアな構成について説明します。
|     |               | 認証認可     |各サービスへの認証方法、ロール設定について説明します。
|     |               | システム監視  | インフラ環境を監視する方法を説明します。
|     |               | コスト管理   | コストの考え方や抑制方法について説明します。
| 03. |Q&A            |            | Azure Machine Learning に関する質問にお答えします。

### 資料

Azure ML ページタブの [Platform](../azureml/platform/select-ai-services) 配下にある Web サイトや参照先の製品ドキュメントなどを利用します。



