---
id: mlops-practice
title: "MLOps のプラクティス"
---

本ページでは MLOps のプラクティスを紹介します。

## 🎨 7 つのプラクティス
MLOps を導入する際の基本原則を挙げます。

#### コード、データ、モデルを管理する。
>機械学習のシステムはコードだけでなくデータが品質に大きく影響をします。そのためコードだけでなく、データを管理する必要があります。

#### 複数の実行環境を使用する。
>開発環境、テスト環境、本番環境とワークロードに応じて環境を分けることで、環境ごとのアクセス制御を設定することでセキュリティレベルを上げます。

#### インフラストラクチャと構成をコードとして管理する。
>環境を複製したり再構築することに備えて、迅速に構築ができるようにインフラをコードで管理します。

#### 実験管理と追跡をする。 
>実験で利用したアセットやモデル指標などの出力を管理します。またモデルや推論環境に紐づく実験を追跡します。

#### コードのテストを行い、データの整合性を検証し、モデルの品質を確認する。
>実験で利用するコードやデータは機械学習モデルの品質に大きく影響するため、テストを実行することが大事です。

#### 継続的インテグレーションとデリバリーによる自動化。
>継続的インテグレーション (CI) によるテストの自動化や再現性の確認、継続的デリバリー (CD) によるデプロイメントの自動化を行います。

#### 推論環境、モデル精度、データ特徴を監視する。 
>推論環境やその上で動くモデルの精度、また新しいデータを監視して再学習が必要かどうかを把握する必要があります。

---

## 🚀 Azure Machine Learning を利用した MLOps の実現
MLOps を Azure Machine Learning で実装する際に利用する代表的な機能を挙げます。

- [再現性のあるモデル学習・推論](#再現性のあるモデル学習・推論)
- [再現性のあるソフトウェア環境](#再現性のあるソフトウェア環境)
- [モデルの運用管理](#モデルの運用管理)
- [エンドツーエンド監査証跡](#エンドツーエンド監査証跡)
- [通知・アラート](#通知・アラート)
- [モニタリング](#モニタリング)
- [再学習の実行](#再学習の実行)
- [機械学習ライフサイクルの自動化](#機械学習ライフサイクルの自動化)


### :brain: 再現性のあるモデル学習・推論
Azure Machine Learning の**パイプライン (Pipeline)** を使用して、再現性の高い機械学習ライフサイクル (データ準備、特徴量エンジニアリング、モデル学習、ハイパーパラメータチューニング、モデル評価 etc) を実装することができます。

<br/>
<img src={require('./images/azureml-pipeline.png').default} width="500" />
<br/><br/>

また、デザイナーの機能を用いることで UI 操作のみでコード操作無しに Pipeline を作成することができます。デザイナーで用いることができる[コンポーネント (Component)](https://learn.microsoft.com/ja-jp/azure/machine-learning/concept-component) はユーザー自身で作成して、Workspace 内部で共有して使用することもできます。

:::note
Azure Machine Learning Pipeline による推論の形態は、**バッチ推論** を想定しています。
:::

<br/>

### :globe_with_meridians: 再現性のあるソフトウェア環境
Azure Machine Learning の**環境 (Environment)** の機能を用いて、モデル学習や推論環境で利用する Python ライブラリなどのソフトウェアを管理します。

特に Python のライブラリの管理は煩雑になっているため、再現性に苦慮することが多いため、早い段階から環境 (Enviornment) を用いたソフトウェア管理に取り組むことを推奨します。

<br/>

### :package: モデルの運用管理
Azure Machine Learning を用いて、実験を紐づけたモデル登録と推論環境へのデプロイを行うことができます。


#### モデル登録と追跡
あらゆる実験環境で構築されたモデルは、API (Azure CLI や Python SDK) や UI (Azure ML studio) 経由で Azure Machine Learning の**モデル (Model)** の機能を用いて登録することができます。

また、モデル登録時に実験の情報を紐づけておくことで、登録済みモデルを構築した元のソースコード、データ、パラメータなどのメタデータを追跡することができます。

#### モデルのデプロイ
Azure Machine Learning では Batch Endpoint と呼ばれる**バッチ推論**の形態の推論環境と、Online Endpoint と呼ばれる**リアルタイム推論**の形態の推論環境を提供しています。比較は [推論に特化した計算リソース](https://konabuta.github.io/azure-machine-learning-playbook/docs/azureml/platform/compute#%E6%8E%A8%E8%AB%96%E3%81%AB%E7%89%B9%E5%8C%96%E3%81%97%E3%81%9F%E8%A8%88%E7%AE%97%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9) を参照ください。

また、ユーザーへの影響を極力抑えて安全にデプロイするための仕組みとして Blue/Green デプロイメントもサポートしています。

<br/>

### :recycle: エンドツーエンド監査証跡
Azure Machine Learning 上で機械学習ライフサイクルを回すことで、エンドツーエンドでの監査証跡が可能になります。

- コードのスナップショットと Git のメタデータ (リポジトリ、ブランチ、コミット ID)
- データとそのバージョン
- 計算リソースのメタデータ
- モデルのパラメータやメトリック (MLflow)
- 出力ログやファイル
- その他、実験の実行時間、作成者、タグ...
- 学習済みモデルと関連する実験のメタデータ
- 説明性に関するダッシュボードやレポート
- 推論環境と関連するモデルのメタデータ

<br/>

### :mega: 通知・アラート
Azure Event Grid との連携機能を用いて、機械学習ライフサイクルで発生したイベント (実験完了、モデル登録、デプロイ完了、データドリフト etc) をキャッチしアクションを起こせる仕組みを作ることができます。

#### 参考
- [Azure Machine Learning イベントに基づいてアプリケーション、プロセス、または CI/CD ワークフローをトリガーする (プレビュー)](https://learn.microsoft.com/ja-jp/azure/machine-learning/how-to-use-event-grid)

<br/>

### :bar_chart: モニタリング
Azure Monitor を利用して監視の仕組みを作ることができます。例えば推論環境における CPU 利用率や接続数などのログや、入出力データを取得し、再学習に役立てることができます。

サンプルのモニタリング用のダッシュボードが公開されており、クイックに実装することができます。
<img src="https://github.com/Azure/azure-quickstart-templates/raw/master/quickstarts/microsoft.machinelearningservices/machine-learning-workspace-monitoring-dashboard/Azure_Dashboard.png" width="500" />

#### 参考
- [Azure Machine Learning の監視](https://learn.microsoft.com/ja-jp/azure/machine-learning/monitor-azure-machine-learning)
- [オンラインエンドポイントを監視する](https://learn.microsoft.com/ja-jp/azure/machine-learning/how-to-monitor-online-endpoints)

<br/>

### :chart_with_upwards_trend: 再学習の実行
多くの機械学習モデルはデータの変化や要件の変化に対応すべく、再学習することが求められます。Azure Machine Learning パイプライン (Pipeline) の仕組みを利用して、新しいデータで構築したモデルを古いものと比較し、あらかじめ設定した閾値・条件に基づいて置換するかどうかを選択するようなフローを構築することができます。

<br/>

### :oncoming_automobile: 機械学習ライフサイクルの自動化
Azure Machine Learning パイプライン (Pipeline) 以外にも、GitHub Actions や Azure Pipeline を利用して、Git 操作をトリガーにした自動化を実装することができます。

**例**<br />
- Data Scientist がコードを Commit/Push するタイミングでテストを実行する
- コードや利用しているパッケージの脆弱性を定期的にスキャンする
- モデル登録をトリガーにして、推論アプリケーションを構築する

---


## 参考情報
- [MLOps - Microsoft Cloud Adoption Framework](https://learn.microsoft.com/ja-JP/azure/cloud-adoption-framework/ready/azure-best-practices/ai-machine-learning-mlops)
- [MLOps : Azure Machine Learning を使用したモデル管理、デプロイ、および監視](https://learn.microsoft.com/ja-JP/azure/machine-learning/concept-model-management-and-deployment)