---
id: azureml-resources-assets
title: "リソースとアセット"
---


## リソース
Azure Machine Learning のインフラストラクチャーを支えるリソースです。

- Workspace
- Compute
- Datastore

## アセット

- Model
- Environment
- Data
- Component

## Workspace

Workspace は Azure Machine Learning を構成する最上位のリソースです。計算環境などのリソースや、モデルや環境情報などのアセットと関連付けられています。


## Compute
モデル学習や推論で利用する計算環境です。Compute Instance と Compute Cluster は Azure Machine Learning が提供する計算環境です。その他にも Kubernetes などの外部の計算環境を利用することもできます。

## Datastore
Azure Storage へのセキュアな接続情報を管理します。v2 でサポートしている Azure のデータソースは下記です。

- Azure Blob Container
- Azure File Share
- Azure Data Lake
- Azure Data Lake Gen2

## Model
学習済みモデルを登録して運用管理をします。任意のファイルフォーマットがサポートされています。`カスタム`、`MLflow`、`Triton` の 3 種類の形式がサポートされています。またモデルが生成された実験の紐付けができたり、責任のある AI ダッシュボードを作成し管理することもできます (Preview)。

## Environment
モデル学習や推論で利用する Python や Docker などのランタイムや環境変数を管理します。

## Data
モデル学習やバッチ推論などで利用されるデータのサブセットです。ファイル形式 or 表形式のデータを登録することができます。

## Component
パイプラインを構成する 1 つの処理をパッケージ化してものです。