---
id: notebook-to-job
title: "Notebook の Job への変換"
---

Prototyping Loop から Training Loop に遷移する際、Data Scientist の成果物である Notebook を Azure Machine Learning の Job で実行する形態に変更することが推奨されます。
本ページでは Notebook を Azure Machine Learning Job で実行するためのステップを説明します。


---

## 全体の流れ

1. [Notebook のリファクタリング](#notebook-のリファクタリング)
1. [アセットの疎結合](#アセットの疎結合)
    - データ   
    - 環境
    - 計算環境
1. [ジョブの作成](#ジョブの作成)

---

## Notebook のリファクタリング

取り組むことの例を次に挙げます。

- 不要なコードを削除する
    - Notebook の中では探索的な目的で利用されるコードがあります。

- 汎用的なコードを関数 (function) にする
    - 単体テストが容易になり、保守性が向上します。

- Notebook を Python スクリプトに変換する
    - 一般的な python コマンドから実行できるようにします。

<br/>

## アセットの疎結合

コードの中で利用される次のアセットは Azure Machine Learning のアセット管理の機能に置き換えることで、チームで共有し開発・運用管理の効率性を上げます。

- データ
    - モデル学習で用いるデータを管理します。
    - Azure Machine Learning の `Data` を利用します。
- 環境
    - Python ライブラリを管理します。
    - Azure Machine Learning の `Environment` を利用します。
- 計算環境
    - 計算環境を管理します。
    - Azure Machine Learning の `Compute Clusters` を利用します。

<br/>

## ジョブの作成

Azure Machine Learning の Job を利用して実行します。必要なものは次に挙げるものです。


- YAML ファイル
    - 各アセットの情報を記載します。
        - Python スクリプトのパス
        - Azure Machine Learning のアセット
            - `Data` : 名前、バージョン、アクセス方法
            - `Environment` : 名前、バージョン
            - `Compute Clusters` : 名前

- Azure CLI 実行環境
    - 実行環境に Azure CLI の `ml` 拡張機能をインストールします。


### 参考情報
- [Azure CLI (v2) のインストールと設定](https://learn.microsoft.com/ja-jp/azure/machine-learning/how-to-configure-cli?tabs=public)


---
## 参考情報
- [ML 実験を運用 Python コードに変換する](https://learn.microsoft.com/ja-jp/azure/machine-learning/v1/how-to-convert-ml-experiment-to-production#create-unit-tests-for-each-python-file)