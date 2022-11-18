---
id: azureml-resources-assets
title: "リソース、アセット"
---

Azure Machine Learning の内部の仕組みである **リソース** と **アセット** の概要を紹介します。

---

## リソース
Azure Machine Learning のインフラストラクチャーを支えるリソースです。

- [Workspace](#workspace)
- [Compute](#compute)
- [Datastore](#datastore)

### Workspace

Workspace は Azure Machine Learning を構成する最上位のリソースです。計算環境などのリソースや、モデルや環境情報などのアセットと関連付けられています。
<img src={require('./images/azureml-workspace-diagram.png').default} /><br />

#### 関連する Azure サービス

- Azure Container Registry
    - モデル学習や推論で利用する Docker コンテナを管理します。Azure Machine Learning Environment によって管理されます。
- Azure Application Insights
    - 推論エンドポイントの監視をします。
- Azure Key Vault
    - シークレット・機密情報を格納します。

### Compute
モデル学習や推論で利用する計算環境です。Azure Machine Learning が管理するマネージドな計算環境として

- コンピューティングインスタンス (Compute Instance) 
- コンピューティングクラスター (Compute Cluster) 

があります。 その他にも Kubernetes などの外部の計算環境をアタッチして利用することもできます。

### Datastore
Azure Storage へのセキュアな接続情報を管理します。v2 でサポートしている Azure のデータソースは下記です。

- Azure Blob Container
- Azure File Share
- Azure Data Lake
- Azure Data Lake Gen2


※ イメージ図は [Data](#data) を参照のこと。


---

## アセット

- [Model](#model)
- [Environment](#environment)
- [Data](#data)
- [Component](#component)



### Model
学習済みモデルを登録して運用管理をします。任意のファイルフォーマットがサポートされています。`カスタム`、`MLflow`、`Triton` の 3 種類の形式がサポートされています。またモデルが生成された実験の紐付けができたり、責任のある AI ダッシュボードを作成し管理することもできます (Preview)。


<img src={require('./images/model.png').default} width="800" /><br />

### Environment
モデル学習や推論で利用する Python や Docker などのランタイムや環境変数を管理します。

<img src={require('./images/environment.png').default} width="800" /><br />


### Data
モデル学習やバッチ推論などで利用されるデータのサブセットです。ファイル形式 or 表形式のデータを登録することができます。

<img src={require('./images/datastore_data.png').default} width="800" /><br />


### Component
パイプラインを構成する 1 つのステップ(処理)をパッケージ化したものです。ユーザーは任意のコンポーネントを作ることができます。

<img src={require('./images/component.png').default} width="800" /><br />

---



## 参考情報

- [Azure Machine Learning ワークスペースとは](https://docs.microsoft.com/ja-jp/azure/machine-learning/concept-workspace)
- [Azure Machine Learning コンピューティングインスタンスとは](https://docs.microsoft.com/ja-jp/azure/machine-learning/concept-compute-instance)
- [Azure Machine Learning コンピューティングクラスターとは](https://docs.microsoft.com/ja-jp/azure/machine-learning/concept-compute-target)
- [Azure MAchine Learning 環境とは](https://docs.microsoft.com/ja-jp/azure/machine-learning/concept-environments)
- [Azure Machine Learning データとは](https://dsocs.microsoft.com/ja-JP/azure/machine-learning/concept-data?tabs=uri-file-example%2Ccli-data-create-example)
- [Azure Machine Learning コンポーネントとは](https://docs.microsoft.com/en-us/azure/machine-learning/concept-component)
