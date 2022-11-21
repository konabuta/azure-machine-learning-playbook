---
id: cost-management
title: "コスト管理"
---

Azure Machine Learning は業務用アプリケーションのような定常的なワークロードではなく、Data Scientist が試行錯誤をする環境として使われることが多いため予期せぬコスト増加を防ぐ必要がでてきます。ここでは Azure Machine Learning Workspace のコストの考え方や抑制方法について説明します。


## Azure Machine Learning のコスト

代表的な Azure Machine Learning と関連するサービスそれぞれのコストの対象は次の通りです。

|サービス名  |コストの対象|
|---------|---------|
|Azure Machine Learning Workspace|[マネージドな計算リソース](#マネージドな計算リソースのコスト) に対してコストが発生|
|Azure Key Vault|シークレットの操作|
|Azure Storage|学習データ、ログの保持、操作|
|Azure Container Registry|Docker Image の保持、ビルド操作|

:::caution
ここに記載したのは一部のサービスのみです。他にもネットワーク、監視、セキュリティ etc のサービスに関連したコストも考えられます。
:::

### マネージドな計算リソースのコスト

Azure Machine Learning のマネージドな計算環境の Compute Instance と Compute Cluster は仕組みは非常に似ていますが、コストの考え方が違います。


#### Compute Instance

停止中でも**一部コストが定常的に発生**します。

<コスト対象リソース>
- VM
- Load Balancer
- Managed Disk
- IP Address (Public IP の場合)


#### Compute Cluster

Compute Cluster は**起動中のみコスト**が発生します。

<コスト対象リソース>
- VM
- **Load Balancer** (停止中でもコストが発生)
- **Managed Disk** (停止中でもコストが発生)
- **IP Address (Public IP の場合)** (停止中でもコストが発生)


### 参考情報
- [Azure Machine Learning のコスト見積もりについて](https://jpmlblog.github.io/blog/2020/06/18/AML-estimate-costs/)
- [Azure Machine Learning のコストの管理を計画する](https://learn.microsoft.com/ja-jp/azure/machine-learning/concept-plan-manage-cost?view=azure-ml-py)


---
## コスト最適化

ドキュメント : [Azure Machine Learning のコストを管理して最適化する](https://learn.microsoft.com/ja-jp/azure/machine-learning/how-to-manage-optimize-cost?view=azure-ml-py) にコスト最適化のポイントの記載があります。

- 自動スケーリングされるようにトレーニング クラスターを構成する
- サブスクリプションとワークスペースにクォータを設定する
- トレーニングの実行に終了ポリシーを設定する
- 優先順位の低い仮想マシン (VM) を使用する
- 自動的にシャットダウンおよび起動するようにコンピューティング インスタンスのスケジュールを設定する
- Azure 予約 VM インスタンスを使用する
- ローカルでトレーニングする
- トレーニングの並列化
- データ保持と削除のポリシーを設定する
- リソースを同じリージョンにデプロイする


他には **Kuberentes 環境の利用** が挙げられます。計算リソースが日々稼働している状態の場合は、Kuberentes の計算リソースを複数人・複数ワークスペースで共有することで Compute Cluster を利用するオーバーヘッドを削減することができます。

### クォータの設定

Azure Machine Learning を利用する際は、クォータ (Quota) は Compute Instance と Compute Cluster に対して設定する必要があります。

:::caution
初期の Azure Subscription によってはクォータが 0 になっている場合があります。Azure Machine Learning の利用開始前にクォータの値を確認してください。
:::


#### クォータの適用

Azure Subscription 単位でのクォータを確保したのちに、Workspace 単位で設定する流れでクォータを設定します。

1. **Azure Subscription** : VM のインスタンスタイプごとに利用可能な CPU コア数の上限を確保する (サポートへ申請)。
2. **Azure Machine Learning Workspace** : 管理者が Workspace 単位でユーザが利用できるコア数を VM のインスタンスタイプごとに制限する。

### 参考情報
- [Azure Machine Learning のコストを管理して最適化する](https://learn.microsoft.com/ja-jp/azure/machine-learning/how-to-manage-optimize-cost?view=azure-ml-py)
- [組織規模での Azure Machine Learning の予算、コスト、クォータを管理する](https://learn.microsoft.com/ja-jp/azure/cloud-adoption-framework/ready/azure-best-practices/ai-machine-learning-resource-organization)
- [Azure Machine Learning を使用するリソースのクォータの管理と引き上げ](https://learn.microsoft.com/ja-jp/azure/machine-learning/how-to-manage-quotas?view=azure-ml-py)