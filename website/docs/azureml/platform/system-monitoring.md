---
id: system-monitoring
title: システム監視
---

システム観点で Azure Machine Learning や関連するサービスの監視について説明します。

## Azure Monitor

Azure の監視で中心的な役割を果たすのは Azure Monitor です。Azure Monitor は Azure 上で利用できる監視に関連する多数の機能を統合し、一元的な管理を可能にしています。


<img src={require('./images/azure-monitor.png').default} width="600" /><br />


## Azure Machine Learning の監視

Azure Machine Learning も同様に Azure Monitor を用いて監視の機能を提供しています。代表的な アクティビティログ、プラットフォームメトリック、リソースログの 3 つ監視データの概要は次の通りです。


|監視データ|概要|格納先|分析ツール
|---------|---------|---------|---------|
|アクティビティログ|ワークスペース、計算リソースの作成・更新など|Azure Monitor に自動で収集・格納されるが、他の場所にルーティングすることもできる。|Azure Monitor の可視化|
|プラットフォームメトリック|実験の実行、モデルの統計情報、クォータ情報など|Azure Monitor に自動で収集・格納されるが、他の場所にルーティングすることもできる。|Azure Monitor の可視化|
|リソースログ|アセットやジョブの作成・削除・読み取りのイベント情報など|"診断設定" から明治的に収集するログの種類とルーティング先を指定する。|Azure Monitor の可視化、Log Analytics|


### 参考情報
- [Azure Machine Learning の監視](https://learn.microsoft.com/ja-JP/azure/machine-learning/monitor-azure-machine-learning)
- [Azure Machine Learning データの監視のリファレンス](https://learn.microsoft.com/ja-JP/azure/machine-learning/monitor-resource-reference?view=azure-ml-py)

---
## ネットワークの監視
[外部へのインターネット通信の必要性](./network-security#azure-外部へのインターネット通信の必要性) にあるように、Data Scientist はインターネット上にあるさまざまなコンテンツを利用します。Hub 構成で Azure Firewall の利用した場合、通信ログが一元的に取得できるため、ユーザのアクセス履歴を分析し、ネットワーク制御の設定に役立てることができます。

Azure Firewall の監視用のダッシュボード (Workbook) が公開されているのでご活用ください。


<img src="https://raw.githubusercontent.com/Azure/Azure-Network-Security/master/Cross%20Product/MediaFiles/Azure-Firewall/AzFwWorkbook.png" width="600" /><br />

サンプル : [Create an Azure ML monitoring dashboard](https://github.com/Azure/azure-quickstart-templates/tree/master/quickstarts/microsoft.machinelearningservices/machine-learning-workspace-monitoring-dashboard)

---
## 消費エネルギー

プラットフォームメトリックで収集された GPU エネルギーメトリック (GpuEnergyJoules) を Azure Machine Learning Studio や Azure Monitor で表示することgあできます。

<img src="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/319363i635B36204187FF30/image-size/large?v=v2&px=999" width="500" /><br />


<img src="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/319381i123783E4F098758C/image-size/large?v=v2&px=999" width="500" /><br />

### 参考情報
- [Charting the path towards sustainable AI with Azure Machine Learning resource metrics](https://techcommunity.microsoft.com/t5/green-tech-blog/charting-the-path-towards-sustainable-ai-with-azure-machine/ba-p/2866923)
