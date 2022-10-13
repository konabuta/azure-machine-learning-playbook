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

チーム・組織での標準的なコラボレーションができる機械学習環境として Azure Machine Learning を導入します。`Data` の機能を利用して透過的にさまざまなデータソースにアクセスし、`Compute Instance` で探索的にモデル学習を行います。モデル学習後は `Model` でモデルを管理し、`Managed Online Endpoint` など Azure Machine Learning が提供する推論環境にモデルをデプロイします。

コード管理のツールとして GitHub を利用し、Azure Machine Learning で利用する学習コードや推論コードを管理します。また、GitHub Actions を利用して pull request ごとにテストを自動化する仕組みを導入します。

<img src={require('./images/level1-azureml.png').default} width="1000" /><br/>


### 参考情報
- [Azure Machine Learning エンドポイントとは](https://learn.microsoft.com/ja-JP/azure/machine-learning/concept-endpoints)
---

## Level 2 : Automated Training

<img src={require('./images/level2-azureml.png').default} width="1000" /><br/>

---

## Level 3 : Automated Model Deployment

<img src={require('./images/level3-azureml.png').default} width="1000" /><br/>

---

## Level 4 : Full MLOps Automated Retraining

<img src={require('./images/level4-azureml.png').default} width="1000" /><br/>

---