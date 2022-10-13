---
id: mlops-maturity-azureml
title : "Azure ML による実装"
---

## Azure Machine Learning における MLOps

Azure Machine Learning を中心とした機械学習プラットフォームを利用することで MLOps を実装することができます。
:::note
Azure Machine Learning の概要は次のページを参照ください。

- [Azure Machine Learning とは](../fundamentals/azureml-basic)
- [リソース、アセット](../fundamentals/azureml-resources-assets) 
:::

### ツール、サービス

本ページの説明で利用しているツールやサービスは下記になります。

**統合開発環境** : Visual Studio Code <br/>
**コード管理** : GitHub <br/>
**パイプライン** : GitHub Actions <br/>


---

## Level 0 : No MLOps

この段階では、Data Scientist のローカル PC や Azure Machine Learning が提供する `Compute Instance` を使い、探索的なモデル学習を行います。よく使われる Jupyter Notebook、VSCode (Remote 接続) や Python ライブラリがインストール済みなので、すぐに作業に取り掛かれます。

モデル学習後は、ローカル環境でモデルをテストしたり、`Managed Online Endpoint` など Azure Machine Learning が提供する推論環境にモデルをデプロイします。

<img src={require('./images/level0-azureml.png').default} width="1000" /><br/>

---

## Level 1 : DevOps no MLOops

この段階では、チーム・組織での標準的なコラボレーションができる機械学習環境として Azure Machine Learning を導入します。`Data` の機能を利用して透過的にさまざまなデータソースにアクセスし、`Compute Instance` で探索的にモデル学習を行います。モデル学習後は `Model` でモデルを管理し、`Managed Online Endpoint` など Azure Machine Learning が提供する推論環境にモデルをデプロイします。

コード管理のツールとして GitHub を利用し、Azure Machine Learning で利用する学習コードや推論コードを管理します。また、GitHub Actions を利用して pull request ごとにテストを自動化する仕組みを導入します。

<img src={require('./images/level1-azureml.png').default} width="1000" /><br/>


### 参考情報
- [Azure Machine Learning エンドポイントとは](https://learn.microsoft.com/ja-JP/azure/machine-learning/concept-endpoints)
---

## Level 2 : Automated Training
この段階では、モデル学習が自動化します。Azure Machine Learning の `Pipeline` を利用して、モデル学習の複雑なワークフローを管理し、再現性を確保しています。ログ、パラメータ、メトリックを自動的に取得するために `Job` を利用した学習方式を導入します。Job は Azure Machine Learning CLI v2 と設定事項が宣言的に記載された YAML ファイルを利用して実行されます。Python ライブラリなどのソフトウェア環境は `Environment` を利用し、モデル学習や推論環境の再現性を確保します。

また、モデル学習をトリガー実行 & スケジュール実行するための仕組みとして GitHub Actions を利用します。

<img src={require('./images/level2-azureml.png').default} width="1000" /><br/>

---

## Level 3 : Automated Model Deployment
この段階では、デプロイメントが自動化します。`Managed Online Endpoint` や `Batch Endpoint` を推論環境として利用します。GitHub Environment を利用し、テスト環境での検証を終えてから本番環境にデプロイする際の承認ゲートを設けるます。

また、本番展開するモデルに関しては Responsible AI を考慮しモデルの説明性・透明性を確保するために、`Responsible AI Toolbox` を用います。

<img src={require('./images/level3-azureml.png').default} width="1000" /><br/>

---

## Level 4 : Full MLOps Automated Retraining
この段階では、モデルを再実験・再学習する仕組みを導入します。推論環境のログやメトリックは Azure Monitor で統合的に取り込み分析します。人間の判断、もしくはメトリックに基づいて自動的にモデルの再実験・再学習をトリガーします。モデル更新の際は、ユーザーへの影響を最小限に抑えるために、ブルーグリーンデプロイメントを利用して、新しいモデルに対するトラフィックを制御します。s

<img src={require('./images/level4-azureml.png').default} width="1000" /><br/>

---