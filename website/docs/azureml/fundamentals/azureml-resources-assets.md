---
id: azureml-resources-assets
title: "リソース、アセット、関連 Azure サービス"
---

Azure Machine Learning の内部の仕組み (リソース & アセット & 関連する Azure サービス) を紹介します。

---

## リソース
Azure Machine Learning のインフラストラクチャーを支えるリソースです。

- Workspace
- Compute
- Datastore

### Workspace

Workspace は Azure Machine Learning を構成する最上位のリソースです。計算環境などのリソースや、モデルや環境情報などのアセットと関連付けられています。
<img src={require('./images/azureml-workspace-diagram.png').default} /><br />


### Compute
モデル学習や推論で利用する計算環境です。Azure Machine Learning が管理するマネージドな計算環境としてコンピューティングインスタンス (Compute Instance) とコンピューティングクラスター (Compute Cluster) があります。 その他にも Kubernetes などの外部の計算環境をアタッチして利用することもできます。

### Datastore
Azure Storage へのセキュアな接続情報を管理します。v2 でサポートしている Azure のデータソースは下記です。

- Azure Blob Container
- Azure File Share
- Azure Data Lake
- Azure Data Lake Gen2


---

## アセット

- Model
- Environment
- Data
- Component



### Model
学習済みモデルを登録して運用管理をします。任意のファイルフォーマットがサポートされています。`カスタム`、`MLflow`、`Triton` の 3 種類の形式がサポートされています。またモデルが生成された実験の紐付けができたり、責任のある AI ダッシュボードを作成し管理することもできます (Preview)。

### Environment
モデル学習や推論で利用する Python や Docker などのランタイムや環境変数を管理します。

### Data
モデル学習やバッチ推論などで利用されるデータのサブセットです。ファイル形式 or 表形式のデータを登録することができます。

### Component
パイプラインを構成する 1 つの処理をパッケージ化してものです。


---

## 関連する Azure サービス

_TODO_