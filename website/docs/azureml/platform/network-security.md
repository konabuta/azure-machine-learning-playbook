---
id: network-security
title: "ネットワーク"
---

シナリオに依りますが、機械学習では秘匿性の高いデータを用いることがあるためセキュリティを考慮したシステムを構築・運用管理していく必要があります。ネットワークの分野においてセキュリティの考慮が必要になってきます。本ページでは仮想ネットワークを用いた Azure Machine Learning のネットワーク構成について説明します。


## PaaS サービスの仮想ネットワーク対応

PaaS サービスを構築するとデフォルトでは Public Endpoint という Public IP で構成される接続先が存在します。セキュリティレベルを上げるため、**プライベートエンドポイント** と呼ばれる Private IPアドレスの接続先を利用することができます。

Private Endpoint と PaaS サービスの牽連付は **Private Link** が担当します。Public Endpoint を無効化することでインターネット環境などの外部からのアクセスを遮断することができます。


<img src={require('./images/private-link-sql.png').default} width="600" /><br />


## Azure Machine Learning のネットワーク閉域化

Azure Machine Learning のネットワーク閉域化は Private Link を使います。基本的には、

1. Azure Machine Learning Workspace への Private Link
1. Azure Storage Account, Azure Key Vault, Azure Container Registry への Private Link

を構成します。

<img src="https://docs.microsoft.com/ja-JP/azure/machine-learning/media/how-to-network-security-overview/secure-workspace-resources.svg" width="500" />

### 参考情報
- [ワークスペースと関連するリソースをセキュリティで保護するs](https://docs.microsoft.com/ja-JP/azure/machine-learning/how-to-network-security-overview#secure-the-workspace-and-associated-resources)

## 構成例
### デフォルト構成
デフォルト設定で構築される Public Endpoint を持つ構成。

<img src={require('./images/network-step1.png').default} width="600" /><br />

#### 特徴
- 基本的は Public Endpoint を用いた接続
- Azure Machine Learning Workspace の認証は Azure Active Directory で実施
- Azure Storage アカウントはアクセスキーでのアクセスが可能な状態

### 一部サービスのみ閉域化
Azure Machine Learning Workspace に対する Private Link の構成は行わず、ストレージや計算リソースに対して仮想ネットワーク対応を行う。

<img src={require('./images/network-step2.png').default} width="600" /><br />

#### 特徴
- Azure Storage アカウントや Compute Instance & Compute Cluster は仮想ネットワーク対応
- Azure Machine Learning Workspace の認証は Azure Active Directory で実施
- 接続元のクライアントが Azure Storage アカウントのデータを参照できるように、クライアントを仮想ネットワークに配置する or 接続元のクライアントのパブリック IP アドレスを Storage のホワイトリストに追加

### 全体の閉域化
Azure Machine Learning Workspace や関連する PaaS サービスに対して Private Link を構成する構成。

<img src={require('./images/network-step3.png').default} width="600" /><br />

#### 特徴
- Azure Machine Learning Workspace や関連する Azure Storage アカウント、Azure Key Vault、Azure Container Registry を全て Private Link で構成
- 接続元のクライアントは VPN などで仮想ネットワークに接続されている or 仮想ネットワーク内部に存在

### Hub & Spoke 構成
Hub & Spoke ネットワークトポロジを用いる構成。仮想ネットワークから外へのインターネット通信を Hub にある Azure Firewall で一元的に制御することがガバナンスを強化する。

<img src={require('./images/network-step4.png').default} width="600" /><br />

#### 特徴
- 仮想ネットワーク外部へのインターネット通信は Azure Firewall を経由
- Azure Firewall で一元的に Service Tag (IPアドレスプラフィックスのグレープ) や FQDN でのネットワーク制御とログ収集

### 参考情報
- [仮想ネットワーク (VNet) を使用して Azure Machine Learning ワークスペース リソースを保護する](https://learn.microsoft.com/ja-jp/azure/machine-learning/how-to-network-security-overview)
- [ネットワークの着信トラフィックおよび送信トラフィックを構成する](https://learn.microsoft.com/ja-jp/azure/machine-learning/how-to-access-azureml-behind-firewall?tabs=ipaddress%2Cpublic)

--- 

## 考慮事項
### Private Endpoint の名前解決

Private Endpoint を利用する際はクライアントから Private Endpoint の名前解決が必要です。Azure の仮想ネットワーク内から接続する際は、デフォルトでは Private DNS Zone が名前解決 (接続先URL → Private Endpoint の Private IP) をします。

#### オンプレミスからのアクセス
Private DNS Zone での名前解決は Azure DNS (168.63.129.16) へのアクセスによって実現されますが、これは Azure 内部からのみアクセスできます。そのため次のいずれかの方法で接続をします。

- Azure 上に DNS Forwarder を構築
- Azure Firewall の DNS Proxy 機能を利用
- クライアント端末の hosts ファイルにレコード追加


### Azure 外部へのインターネット通信の必要性

近年の機械学習はオープンソースの Python や R のライブラリ、GitHub にあるようなコード、オープンデータなどといった、インターネット上にあるさまざまなコンテンツを活用することが多いです。Azure Machine Learning のネットワーク制御においてインターネット通信を完全に遮断することでこういったコンテンツを簡単に利用できなくなり、Data Scientist の生産性を下げることに繋がります。


#### Non-sensitive Zone と Sensitive Zone のハイブリッド運用
ワークアラウンドとして次のセキュリティレベルが異なる 2 つの Workspace を準備することが挙げられます。

**Non-sensitive Zone** <br />
外部とのインターネット通信が許可されている Workspace 環境。この環境では機械学習ライフサイクルでは序盤に位置付けられる試行錯誤的なモデル構築のフェーズで利用される。セキュリティのリスクが高いため、可能な限りデータは暗号化されていたり、擬似的なものを利用するのが望ましい。試行錯誤終了後は、Data Scientist や機械学習エンジニアは本番環境での学習や推論で利用する Docker Image を作成するところまでを担当する。


**Sensitive Zone**

外部とのインターネット通信が遮断されている Workspace 環境。閉域環境で処理が実行されるため、セキュリティのリスクが低い。処理は Non-sensitive Zone で作成されてインポートされた Docker Image を Azure Machine Learning Environment として利用する。この環境では試行錯誤的な作業は難しく、バッチ型のモデル学習や推論が実行される。

<img src={require('./images/hybrid-workspace.png').default} width="600" /><br />