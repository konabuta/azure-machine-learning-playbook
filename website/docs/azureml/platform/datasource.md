---
id: datasource
title: "データソース"
---

# データソース
## データへのアクセス方法
機械学習のモデル学習やバッチ推論ではデータソースにアクセスし、データを取得し処理を実行します。Azure Machine Learning v2 ではデータソースにあるデータにアクセスする方法として次の 4 つ形式があります。

- **URI**
- **Data asset**
- **Datastore**
- **MLTable**

基本的には可能な限りアクセス先のデータソースには **Datastore** の設定をします。Datastore で一元的に接続情報を管理することができます。

次の Datastore の情報を用いて **Data asset** もしくは **URI (`azureml://datastores/<datastore_name>/paths/<folder>(/<file>)`)** の形式でデータを取得します。


## Datatstore が対応しているデータソース

Datastore がサポートするデータソースの一覧です。

|データソースの種類  |資格情報ベースの認証|ID ベースの認証|
|---------|---------|---------|
|Azure Blob Storage |Account Key<br /> SAS Token|○|
|Azure File Share|Account Key<br /> SAS Token|×|
|Azure Data Lake Storage Gen1|Service Principal|○|
|Azure Data Lake Storage Gen2|Service Principal|○|

:::caution
Azure Machine Learning v2 では Azure SQL Database などの Database 系のサービスは Datastore ではサポートされていません。pyodbc などを使って Database に接続し、データを取得する処理を実装する必要があります。
:::

### 参考情報
- [Azure Machine Learning のデータ](https://learn.microsoft.com/ja-jp/azure/machine-learning/concept-data)

--- 
## パフォーマンス最適化のポイント
大規模データを扱う場合やデータの出し入れが頻繁の場合はパフォーマンスが問題になりやすいです。ここではパフォーマンスを向上させるポイントを挙げます。

- Parquet の利用
    - 列指向でデータを保持するため高効率なデータ圧縮を実現。
- リージョン選択
    - 計算リソースとデータソースはなるべく同じ・近いリージョンにデプロイ。
- Mount or Download
    - 処理の中でデータソースから同じデータに複数回アクセスする場合は、Download の方法を検討。
- Azure Data Lake Storage Gen2 の利用
    - 階層型ストレージの Azure Data Lake Storage Gen2 を利用することでファイル編集速度が向上する場合有り。


### 参考情報
- [Azure Data Lake Storage Gen2 の階層型名前空間 - 階層型名前空間の利点](https://learn.microsoft.com/ja-jp/azure/storage/blobs/data-lake-storage-namespace#the-benefits-of-a-hierarchical-namespac)


