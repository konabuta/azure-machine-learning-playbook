---
id: azureml-api
title: "API"
---


## API の種類
Azure Machine Learning は UI (Azure Machine Learning Studio) 以外にも、API 経由での操作も可能になっています。

<img src={require('./images/azureml-api.png').default} width="800" /><br />

## API の利用シーン

研究開発・実験フェーズにおいては UI から手動で様々な処理を実行することが多いと思います。ただ、下記ののユースケースのような場合には、UI ではなく API 経由で様々な処理を実行することで、自動化できたり、操作ログを残すこと出来るメリットがありますし、システム間の連携も可能になり、利便性が向上します。

**API を利用するユースケース**

- モデル学習を毎週自動的に実行する
- コードの変更をトリガーとしてモデル学習を実行する
- 再現できるモデル学習のプロセスを定義する
- モデル登録をトリガーにモデルを推論環境にデプロイする
- 外部システムと連携する (Git など)

etc



## 参考情報
- [Azure Machine Learning CLI と Python SDK v2 の概要](https://docs.microsoft.com/ja-jp/azure/machine-learning/concept-v2)