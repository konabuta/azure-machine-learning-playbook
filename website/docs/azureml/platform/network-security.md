---
id: azureml-network
title: "ネットワーク"
---

シナリオに依りますが、機械学習では秘匿性の高いデータを用いることがあるためセキュリティを考慮したシステムを構築・運用管理していく必要があります。ネットワークの分野においてセキュリティの考慮が必要になってきます。本ページでは仮想ネットワークを用いた Azure Machine Learning のネットワーク構成について説明します。


## PaaS サービスの仮想ネットワーク対応

PaaS サービスを構築するとデフォルトでは Public Endpoint という Public IP で構成される接続先が存在します。セキュリティレベルを上げるため、**プライベートエンドポイント** と呼ばれる Private IPアドレスの接続先を利用することができます。

Private Endpoint と PaaS サービスの牽連付は **Private Link** が担当します。Public Endpoint を無効化することでインターネット環境などの外部からのアクセスを遮断することができます。




## Azure Machine Learning のネットワーク閉域化

Azure Machine Learning のネットワーク閉域化は Private Link を使います。基本的には、

1. Azure Machine Learning Workspace への Private Link
1. Azure Storage Account, Azure Key Vault, Azure Container Registry への Private Link

を構成します。

<img src="https://docs.microsoft.com/ja-JP/azure/machine-learning/media/how-to-network-security-overview/secure-workspace-resources.svg" width="500" />


## 構成例
### デフォルト構成
デフォルト設定で構築される Public Endpoint を持つ構成。


### 一部サービスのみ閉域化
Azure Machine Learning Workspace に対する Private Link の構成は行わず、ストレージや計算リソースに対して仮想ネットワーク対応を行う。


### 全体の閉域化
Azure Machine Learning Workspace や関連する PaaS サービスに対して Private Link を構成する構成。


### Hub & Spoke 構成
Hub & Spoke ネットワークトポロジを用いる構成。仮想ネットワークから外へのインターネット通信を Hub にある Azure Firewall で一元的に制御することがガバナンスを強化する。


## 考慮事項
### Private Endpoint の名前解決

Private Endpoint を利用する際は DNS の設定を確認する必要が出てきます。Azure の仮想ネットワーク内から接続する際は、デフォルトでは Private DNS Zone が名前解決 (接続先URL → Private Endpoint の Private IP) をします。しかしながらカスタムの DNS を利用していたり、オンプレミスの DNS を利用している際は、Private Endpoint の名前解決ができるように既存の DNS のレコードを追加するなどの作業が発生します。
