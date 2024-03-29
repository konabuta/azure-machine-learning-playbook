---
id: mlops-concept
title: "MLOps とは"
---

近年の AI テクノロジーの進歩や普及によって多くの企業で機械学習プロジェクトが始まっています。しかしながら、機械学習プロジェクトはこれまでのソフトウェア開発と異なる側面を持つため失敗してしまうケースが散見されます。本ページでは機械学習の開発・運用管理のライフサイクルを堅牢に高速に実現する MLOps の概要を説明します。

## MLOps の定義

MLOps は Machine Learning Operations の略称で、「**DevOps の原則と実践に基づいて、機械学習ライフサイクルを管理する手法・概念**」を指します。企業は MLOps を導入することで責任のある形でスケーラブルに機械学習のワークロードを実施することができるようになります。

### 参考情報
- [機械学習の運用 (MLOps)](https://azure.microsoft.com/ja-jp/products/machine-learning/mlops/)
- [DevOps とは](https://learn.microsoft.com/ja-jp/devops/what-is-devops)

## 機械学習のライフサイクル

Microsoft は機械学習ライフサイクルを 3 つの Loop (Prototyping、Training, Operationalizing) で定義しています。MLOps はこの 3 つの Loop 全てが対象です。

<img src={require('./images/ml-lifecycle.png').default} width="1000" /><br />


---

## 機械学習プロジェクトにおける課題

企業の中で機械学習の取り組みが進むにつれて、下記の理由から機械学習のライフサイクルを実行や運用管理が難しくなります。

- 増え続けるデータ、コード、モデルなどのアセットを記録し管理する必要がある。
- モデル学習、デプロイ、再学習といった機械学習ライフサイクルで発生するプロセスを確立する必要がある。
- 複数のシステム、モデル、データを監視する必要に臨機応変に改良してく必要がある。

こういった複雑性が生じるのは次に挙げる点が組織で欠如しているためです。

### 組織内外の連携
- アセットの管理・監査が属人化・サイロ化されていることによってスケールできない
- 組織が縦割りのため機械学習ライフサイクルが分断される

### プロセスの再現性
- プロセスの実行が属人化されており、同じ機械学習システム・モデルを構築できない
- 手動で実行されるためライフサイクルの実行が遅くなる

### 変化の対応
- データの増加、データの特性の変化に対応できずモデルの精度が下がる
- 要件の変化に対応できずモデルの精度が下がる

### リソース管理
- ライフサイクルに携わる人員やその工数が欠如していて、ライフサイクルの実行が滞る
- 計算リソースのスペックが貧しく、モデル学習・推論に時間がかかる

### 機械学習モデルの透明性
- ブラックボックスなモデルがステークホルダーから信頼されずプロジェクトが頓挫する

---
## MLOps を実現するための要素

MLOps は単に技術を指しているのではなく、技術を用いたビジネスの変革です。そのため次の 3 つの要素が必要になります。

### :blush: People
- チームで共同で開発を進め、他人が引き継ぐことを前提として品質確保を継続的に行う体制構築と文化醸成
- 無駄なくスキルをビジネス価値へと変換するために必要な体制・技術へ金銭的/人的投資

### :recycle: Process
- 学習やデプロイプロセス等、機械学習の一連のプロセスに含まれる定型的処理の自動化
- アセットの集中管理と共存による作業効率の向上
- 再現性確保

### :wrench: Platform
- アセットを集中管理し共有するためのハブ
- 運用中のパイプライン、インフラ、製品を監視し、期待通りの動作をしていないことを検知することが可能な仕組み
- 必要に応じて可及的かつ安全に本番への機能投入を可能とするシステム

---

## MLOps のベネフィット

MLOps を導入することによるベネフィットを挙げます。

### 自動化
- 繰り返し実行されるプロセスが自動化され、機械学習ライフサイクルが高速に回る。

### コラボレーション
- アセットを共有し引き継ぐことによって、チーム・組織のコラボレーションを促進する。

### 再現性
- 機械学習ライフサイクル全体における可観測性と再現性を確保する。

---

## 参考情報
- [Step-by-Step MLOps and Microsoft Products](https://speakerdeck.com/shisyu_gaku/step-by-step-mlops-and-microsoft-products)
- [Code with Engineering](https://microsoft.github.io/code-with-engineering-playbook/)