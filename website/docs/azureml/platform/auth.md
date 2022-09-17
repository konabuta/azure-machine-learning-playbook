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

※ ※ Azure CLI 認証では Azure AD、サービスプリンシパル、マネージド ID それぞれの認証形式をサポートしている。

:::note
[Azure Active Directory の条件付きアクセス](https://learn.microsoft.com/ja-jp/azure/active-directory/conditional-access/overview) を利用することでセキュリティレベルを高めることができます。
:::

### 参考情報
- [Azure Machine Learning のリソースとワークフローの認証を設定する](https://learn.microsoft.com/ja-jp/azure/machine-learning/how-to-setup-authentication?tabs=sdk#use-interactive-authentication)

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

[ワークスペースの設計](./workspace-design.md) の記載にあるように複数の Workspace で運用する場合、それぞれの Workspace で付与するロールが変わってきます。

### 参考情報
- [Azure Machine Learning ワークスペースへのアクセスの管理](https://learn.microsoft.com/ja-jp/azure/machine-learning/how-to-assign-roles?tabs=labeler)
- [Advance Resource Access Governance for AML](https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/advance-resource-access-governance-for-aml/ba-p/2180520)