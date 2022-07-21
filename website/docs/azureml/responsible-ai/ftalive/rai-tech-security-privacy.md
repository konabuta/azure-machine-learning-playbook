---
id: rai-tech-security-privacy
title : "セキュリティ & プライバシー"
---

### 2.3. セキュリティとプライバシー

本モジュールでは、機械学習モデルを敵対的攻撃や潜在的な誤用などから保護するための技術を紹介します。

- 意図的な障害
    - 攻撃者は、AI システムの誤分類を発生させたり、個人情報などのプライベートなデータの推測、アルゴリズムの盗みを目的とします。
- 非意図的な障害
    - AI システムが正しい結果だが完全に安全で無い結果を生成します。

想定される具体的な障害の種類は [Machine Learning の エラー モード](https:/.microsoft.com/ja-JP/security/engineering/failure-modes-in-machine-learning) を参照ください。


#### SmartNoise
[SmartNoise](https://smartnoise.org/) は差分プライバシーを利用した AI システムを構築するためのオープンソースのライブラリです。。差分プライバシーはデータにノイズや乱数を追加することで、Data Scientist や外部の攻撃者が個々のデータポイントを識別できないようにします。


#### Confidential Computing
[Azure Confidential Computing](https://azure.microsoft.com/ja-jp/solutions/confidential-compute/) を利用して Azure 上で機密データの処理を安全に行うことができます。Azure 内部ではデフォルトで Microsoft がデータを暗号化していますが、Microsoft がそのデータにアクセスしないことを確認するのは難しいことです。また機密データに対する攻撃者の手法も多様化しています。Azure Confidential Computing は使用中のデータ (Data In Use) を TEE (Trusted Execution Environments) を利用して保護します。現在は Intel SGX、AMD SEV-SNP、また Nvidia A100 GPUs with APM (Private Preview) が利用できます。


#### システムとしてのセキュリティ
当然ながら上記以外にも、学習・推論を行うシステムとしてのセキュリティ (認証認可、暗号化、ネットワーク etc) を考える必要がありますが、ここでは割愛します。


<br/>
