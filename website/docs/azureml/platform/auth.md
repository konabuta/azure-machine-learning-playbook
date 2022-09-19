---
id: auth
title: "認証認可"
---

Azure Machine Learning における認証方法と認可の仕組みについて記載します。

## Workspace への認証方法
Azure Machine Learning Workspace を中心にさまざまなリソースやアセットが関連付けられており、多くの作業を Workspace を起点に行うことができます。


|種類|認証形式|ユースケース|
|---------|---------|---------|
|対話型|Azure Active Directory のユーザアカウント|実験フェーズ|
|サービスプリンシパル|Azure Active Directory のサービスプリンシパル|CI/CD パイプライン|
|Azure CLI セッション|Azure CLI 認証|実験フェーズ、CI/CD パイプライン|
|マネージド ID|仮想マシンのマネージド ID|実験フェーズ、CI/CD パイプライン|

※ Azure CLI 認証では Azure AD、サービスプリンシパル、マネージド ID それぞれの認証形式をサポートしている。

:::note
[Azure Active Directory の条件付きアクセス](https://learn.microsoft.com/ja-jp/azure/active-directory/conditional-access/overview) を利用することでセキュリティレベルを高めることができます。
:::

## その他サービスへの認証方法

以下のサービスへの接続も Azure Active Directory 認証になります。

### Azure Machine Learning
- Compute Instance
- Comopute Cluster
- Azure Machine Learning Studio (Web インターフェース)

### 関連サービス
- Azure Key Vault
- Azure Container Registry (Azure AD 以外の認証方法あり)
- Azure Storage Account (Azure AD 以外の認証方法あり)


<img src={require('./images/compute-auth.png').default} width="300" /><br />

## 各サービスからデータソースへの認証

Azure Machine Learning Workspace, Compute Instance, Compute Cluster で対応しているデータソースへの認証方法を整理します。

※データソース側で対応している認証方法は [Datastore が対応しているデータソース](./azureml-datasource#datatstore-が対応しているデータソース) を参照ください。



|アクセス元  |資格情報ベースの認証|IDベースの認証|マネージド ID 対応|
|---------|---------|---------|---------|
|Compute Instance|○|○ - Azure Active Directory 認証| △ - [Private Preview](https://github.com/Azure/azureml-previews/blob/main/previews/compute-instance-managed-identity/compute-instance-managed-identity.md)|
|Compute Cluster|○|○ - Azure Active Directory パススルー認証 (Preview)|○|
|Azure Machine Learning Workspace|○|○ - Azure Active Directory 認証|○|


<img src={require('./images/service-to-datasource-auth.png').default} width="300" /><br />

## 推論環境への認証

### Online Endpoint
Managed Online Endpoint と Kubernetes Online Endpoint 共に**トークンベースの認証**と**キーベース認証**をサポートしています。

### Batch Endpoint

Managed Batch Endpoint と Kubernetes Batch Endpoint 共に**トークンベースの認証**をサポートしています。

<img src={require('./images/endpoint-auth.png').default} width="600" /><br />


### 参考情報
- [Azure Machine Learning のリソースとワークフローの認証を設定する](https://learn.microsoft.com/ja-jp/azure/machine-learning/how-to-setup-authentication?tabs=sdk#use-interactive-authentication)

- [コンピューティング クラスターでのトレーニング ジョブにおけるデータへのアクセス (プレビュー)](https://learn.microsoft.com/ja-JP/azure/machine-learning/how-to-identity-based-data-access?WT.mc_id=Portal-Microsoft_Azure_MLTeamAccounts#access-data-for-training-jobs-on-compute-clusters-preview)
---

## ロールの設計

Azure RBAC を用いて Azure ML Workspace の内部リソースへのアクセスを制御する “ロール” をセキュリティプリンシパル (ユーザ、グループ、サービスプリンシパル、マネージド ID) に割り当てます。

次の 4 つの組み込みロールを使うことが多いですが、十分でない場合はこれらをベースにカスタムロールを作成します。


|ロール     |アクセスレベル|
|---------|---------|
|Azure ML データサイエンティスト |コンピューティング リソースの作成または削除とワークスペース自体の変更を除く、Azure Machine Learning ワークスペース内のすべてのアクションを実行できます。|
|Reader|ワークスペースでの読み取り専用のアクション。 閲覧者はワークスペースで資産 (データストアの資格情報を含む) を一覧および表示できます。 閲覧者がこれらの資産を作成または更新することはできません。|
|Contributor|ワークスペース内の資産を表示、作成、編集、削除 (該当する場合) します。 たとえば、共同作成者は実験を作成したり、コンピューティング クラスターを作成またはアタッチしたり、実行を送信したり、Web サービスをデプロイしたりできます。|
|所有者|ワークスペース内の資産を表示、作成、編集、削除 (該当する場合) する機能など、ワークスペースへのフル アクセス。 また、ロールの割り当てを変更することができます。|

## ワークロードに応じたロールの設計

[ワークスペースの設計](./workspace-design) の記載にあるように複数の Workspace で運用する場合、それぞれの Workspace で付与するロールが変わってきます。

### 参考情報
- [Azure Machine Learning ワークスペースへのアクセスの管理](https://learn.microsoft.com/ja-jp/azure/machine-learning/how-to-assign-roles?tabs=labeler)
- [Advance Resource Access Governance for AML](https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/advance-resource-access-governance-for-aml/ba-p/2180520)