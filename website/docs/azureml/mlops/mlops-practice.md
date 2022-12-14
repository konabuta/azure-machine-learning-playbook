---
id: mlops-practice
title: "MLOps のプラクティス"
---

本ページでは MLOps のプラクティスを紹介します。

## 7 つのプラクティス
1. コード、データ、実験の出力にバージョン コントロールを使用する。
1. 複数の環境を使用する。
1. インフラストラクチャと構成をコードとして管理する。
1. 機械学習の実験を追跡したり管理したりする。 
1. コードのテストを行い、データの整合性を検証し、モデルの品質を確認する。
1. 機械学習の継続的インテグレーションとデリバリー。
1. サービス、モデル、データをモニターする。 



## Azure Machine Learning を利用した MLOps の実現
### 再現性のあるモデル学習・推論
Azure Machine Learning の**パイプライン (Pipeline)** を使用して、再現性の高い機械学習ライフサイクル (データ準備、特徴量エンジニアリング、モデル学習、ハイパーパラメータチューニング、モデル評価 etc) を実装することができます。

TODO: Azure ML Pipeline の絵

また、デザイナーの機能を用いることで UI 操作のみでコード操作無しに Pipeline を作成することができます。デザイナーで用いることができる[コンポーネント (Component)](https://learn.microsoft.com/ja-jp/azure/machine-learning/concept-component) はユーザー自身で作成して、Workspace 内部で共有して使用することもできます。

:::note
Azure Machine Learning Pipeline による推論の形態は、**バッチ推論** を想定しています。
:::


### 再現性のあるソフトウェア環境
Azure Machine Learning の**環境 (Environment)** の機能を用いて、モデル学習や推論環境で利用する Python ライブラリなどのソフトウェアを管理します。

特に Python のライブラリの管理は煩雑になっているため、再現性に苦慮することが多いため、早い段階から環境 (Enviornment) を用いたソフトウェア管理に取り組むことを推奨します。


### モデルの運用管理
Azure Machine Learning を用いて、実験を紐づけたモデル登録と推論環境へのデプロイを行うことができます。


#### モデル登録と追跡
あらゆる実験環境で構築されたモデルは、API (Azure CLI や Python SDK) や UI (Azure ML studio) 経由で Azure Machine Learning の**モデル (Model)** の機能を用いて登録することができます。

また、モデル登録時に実験の情報を紐づけておくことで、登録済みモデルを構築した元のソースコード、データ、パラメータなどのメタデータを追跡することができます。

#### モデルのデプロイ
Azure Machine Learning では Batch Endpoint と呼ばれる**バッチ推論**の形態の推論環境と、Online Endpoint と呼ばれる**リアルタイム推論**の形態の推論環境を提供しています。比較は [推論に特化した計算リソース](https://konabuta.github.io/azure-machine-learning-playbook/docs/azureml/platform/compute#%E6%8E%A8%E8%AB%96%E3%81%AB%E7%89%B9%E5%8C%96%E3%81%97%E3%81%9F%E8%A8%88%E7%AE%97%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9) を参照ください。

また、ユーザーへの影響を極力抑えて安全にデプロイするための仕組みとして Blue/Green デプロイメントもサポートしています。

### エンドツーエンド監査証跡


### 通知・アラート


### モニタリング


### 再学習


### 機械学習ライフサイクルの自動化




## 参考情報
- [MLOps - Microsoft Cloud Adoption Framework](https://learn.microsoft.com/ja-JP/azure/cloud-adoption-framework/ready/azure-best-practices/ai-machine-learning-mlops)
- [MLOps : Azure Machine Learning を使用したモデル管理、デプロイ、および監視](https://learn.microsoft.com/ja-JP/azure/machine-learning/concept-model-management-and-deployment)