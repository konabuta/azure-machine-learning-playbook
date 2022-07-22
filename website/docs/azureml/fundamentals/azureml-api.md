---
id: azureml-api
title: "API"
---


## API の種類
Azure Machine Learning は UI (Azure Machine Learning Studio) 以外にも、API 経由での操作も可能になっています。

<img src={require('./images/azureml-api.png').default} width="500" /><br />

## API の利用シーン

研究開発・実験フェーズにおいては UI を使うことが多いと思いますが、下記のようなユースケースにおいてはシステムとして Azure Machine Learning を利用しようとすると API の利用が必要になってきます。

**API を利用するユースケース**

- モデル学習を毎週自動的に実行する
- コードの変更をトリガーとしてモデル学習を実行する
- 再現できるモデル学習のプロセスを定義する
- モデル登録をトリガーにモデルを推論環境にデプロイする
- 外部システムと連携する (Git など)

etc