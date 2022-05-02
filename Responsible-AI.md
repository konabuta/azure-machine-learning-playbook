# Responsible AI

AI のテクノロジーが大きな注目を浴びています。便利で画期的な技術が開発される一方で、AI が持つリスクや障害に対応できずに、ガバナンス・セキュリティ・コンプラインスの観点でさまざまな課題が出てきています。そのため、近年はこれまで以上に AI を責任を持って開発し運用管理することが求められています。

本資料では Microsoft の視点から責任のある AI に対する原則などのコンセプトを紹介し、具体的に機械学習ライフサイクルにおいて責任のある AI に関連にする技術を実装・運用管理する方法を説明します。

## アジェンダ
- 1. 責任のある AI のコンセプト
- 2. 機械学習モデルを理解する
- 3. 機械学習モデルを保護する


## 1. 責任のある AI 概要
本モジュールでは Microsoft が定義する Responsible AI (aka RAI) にフォーカスし、「責任のある AI の 7 つの原則」、「社内の標準化の活動」、「機械学習ライフサイクルにおける RAI の設計な実践」、「ツール」のご紹介をします。

### 背景

AI の技術が急速に進化しています。AI は人間に近いような動作をするということもあり、意思決定に利用されることが多くなってきました。そのため AI システム全体の透明性に対するニーズが高まっています。AI モデルの観点では説明可能性が高いことが求められます。透明性が無い AI システムはステークホルダーの信頼を失い、AI の社会実装を妨げる一つの大きな要因です。しかしながら、責任のある AI はまだ十分に浸透しているとは言えません。AI システムのプライバイシーの懸念、誤動作、副作用などの課題に対して、誰が責任を取るのか、どのように対処するのかがルール化されていないことがあります。本資料では、責任のある AI の概念や技術について説明を行い、皆さまの人間中心で信頼された透明性の高い AI システムの構築・運用管理をサポートすることを目的として記載しています。

"The more powerful the tool, the greater the benefit or damage it can cause ... Technology innovation is not going to slow down. The work to manage it needs to speed up." Brad Smith, President and Chief Legal Officer, Microsoft


### Microsoft の責任のある AI への取り組み

Microsoft 自身も責任のある AI に取り組んでいます。

<!-- TODO : 歴史年表のチャート追加 -->

- 2016年 : Satya Nadella が "The Partnership of the Future" という論説を投稿。透明性、効率性、プライバシーの尊重、バイアスからの保護などに言及している。
- 2017年 : Aether (AI, Ethics, and Effects in Engineering and Research) を設立しました。ここは Microsoft 社内の責任のある AI に関する最高機関になっており、様々な責任のある AI の課題、テクノロジー、プロセス、ベストプラクティスに関する提言を行なっています。
- 2018年 : The Future Computed という書籍を公表しました。AI が社会にもたらす課題、AI をどうすれば責任がある形で開発され、運用されるのか、どのようにガバナンスを制定すればいいのかについて Microsoft の見解を述べているものです。次のスライドでご説明する 6 つの基本原則についても言及しています。まだ2018年に、顔認証技術の透明や独立した第三者機関によるテストの法規制の必要性を訴えています。
- 2019年 : Office of Responsible AI を設立しました。ポリシーやガバナンスのプロセスを策定しています。また、Responsible AI Standard (v1) を発行しました。
- 2020年 : RAISE (Responsible AI Strategy in Engineering) はエンジニアリンググループ全体で責任のある AI のルールとプロセスの実装を促進するために設立されました。
- 2021年 : Responsible AI Standard (v2) を発行しました。
- また最近ではマイクロソフトのこれまでの培ってきた知見を社会・お客様に伝えていくべく、AI Business School という責任のある AIについて学べるビジネス向け学習コンテンツ、ガイドライン、オープンソースのツールを公開しています。


### 責任のある AI の 6 つの原則

<!-- TODO : 原則のスライド追加 -->

- Fairness
- Transparency
- Innovation
- Security
- Responsibility
- Efficiency
- Adaptability 


### 責任のある AI の実践


#### Practices
最初は、人間中心のデザインに基づくプラクティスです。ソフトウェア開発のライフサイクルにおける問題を予測し、それを解決することで責任のある方法で AI システムを開発することをサポートするガイドラインを提供しています。

- Human-AI eXperience (HAX)
- Guidelines for Human-AI Interaction
- Conversational AI Guidelines
- Inclusive Design Guidelines
- AI Fairness Checklist
- Datasheets for Datasets
- AI Security Guidelines


その取り組みの結果として [](Transparency Notes) は AI システムの目的、能力、限界についてのコミュニケーションを支援しており、マーケティングと技術文章のギャップを埋め、お客様が責任を持って AI を導入するために知っておくべき情報を積極的に伝えています。


#### Tools

開発チームなどがあらゆる AI の構築・運用のライフサイクルにおいて AI を理解し、保護し、制御するためのツールを開発しています。こちらは後ほど詳細に説明します。

### 登場するライブラリ・ツール・フレームワーク


|Column1  |Column2  |Column3  |
|---------|---------|---------|
|Fairlearn|         |         |
|InterpretML|         |         |
|Error Analysis|         |         |
|SmartNoise|         |         |
|Responsible AI Toolbox|         |         |
|SHAP|         |         |
|LIME|         |         |
|Row8     |         |         |
|Row9     |         |         |
|Row10     |         |         |
|Row11     |         |         |
|Row12     |         |         |
|Row13     |         |         |
|Row14     |         |         |
|Row15     |         |         |


#### Governance

Microsoft は Hub and Spokes 　モデルでガバナンスの体制を構築しています。

<!-- TODO : hub and spokes の図を追加 -->

また、Microsoft では AI システムの開発の各段階において実行すべき推奨事項をまとめた Responsible AI Standard を作成しています (現時点では社内限定の公開)。


### Responsible AI Lifecycle (RAIL)

Microsoft は Responsible AI Lifecycle (aka RAIL) を開発しました。これは Responsible AI Standard に沿った形で責任のある AI をシステムに構築・デプロイするためのフレームワークです。

- 評価と準備
    - 製品による利益、技術、潜在的なリスク、チームを評価する。
- 設計、構築、文章化
    - 製品がもたらす影響、独自の考慮事項、文章の実践などをレビューする。
- 検証とサポート
    - テスト手順を選択し、製品が意図した通りに動作するか確認する。


### ツール、ガイドライン、パターン、プラクティスの活用

責任のある AI ツールは一貫性のある AI システムの開発において有効です。ただしツールは人間中心となるデザインのような思考を自動化することはできない点には注意が必要です。Microsoft などが開発し提供している取り組みをご紹介します。

#### ガイドライン、パターン、プラクティス

- Guidelines for Human-AI Interaction
- HAX ワークブック
- HAX デザインパターン
- HAX プレイブック

#### ツール

- 理解 : Responsible AI Toolbox
- 保護 : Presidio, SmartNoise, Counterfit
- 統制 : MLOps, Datasheet


--- 

## 2. 機械学習モデルを理解する

本モジュールではモデルを理解するための様々な技術を紹介します。Responsible AI Lifecycle の中でも 「設計、構築、文章化」のフェーズで利用する技術です。

- モデルの公平性
    - 学習済みモデルの公平性を評価し、必要に応じて軽減を行います。公平性とは特定のグループに対してモデルが他とは異なる挙動しないことを意味します。特にセンシティブな属性 (人種、ジェンダー、年齢、障害の有無 etc) の観点で考慮されます
- モデルの透明性
    - 機械学習アルゴリズムの解釈性、または説明可能性の技術より、大域的・局所的なトレンドを理解します。これは AI システムを実装する際に Data Scientist が経営者やステークホルダーにモデルを説明する際に役立ちます。また運用中モデルの挙動について説明が求められるようなシーンでも有効ですし、Data Scientist 自身が開発中の機械学習モデルをデバッグする際にも有効です。

これらの技術は下記の 3 つのステップ (特定 -> 診断 -> 軽減・対処) で実行します。

<!-- TODO : IDENTIFY, DIAGNOSE, MITIGATE の 3 ステップのスライドの追加 -->

### FairLearn
### InterpretML
### Error Analysis
### Responsible AI Dashboard


---

<br/>

## 3. 機械学習モデルとデータを保護する

本モジュールでは機械学習モデルを敵対的攻撃や潜在的な誤用などから保護するための技術を紹介します。

- 意図的な障害
    - 攻撃者は、AI システムの誤分類を発生させたり、個人情報などのプライベートなデータの推測、アルゴリズムの盗みを目的とします。
- 非意図的な障害
    - AI システムが正しい結果だが完全に安全で無い結果を生成します。

想定される具体的な障害の種類は [Machine Learningの エラー モード](https://docs.microsoft.com/ja-JP/security/engineering/failure-modes-in-machine-learning) を参照ください。

### SmartNoise
### Confidential Computing


## 参考資料

<!-- TODO : 表に作り替える -->

### For All

[Microsoft の責任のある AI の原則](https://www.microsoft.com/ja-jp/ai/responsible-ai)
[Responsible AI resources](https://www.microsoft.com/en-us/ai/responsible-ai-resources)

### For Business leaders

<!--`Microsoft Learn -->
[Discover ways to foster an AI-ready culture in your business](https://docs.microsoft.com/en-us/learn/paths/foster-ai-ready-culture/)
[Identify principles and practices for responsible AI](https://docs.microsoft.com/en-us/learn/paths/responsible-ai-business-principles/)
[Identify guiding principles for responsible AI in government](https://docs.microsoft.com/en-us/learn/paths/responsible-ai-government-principles/)

[AI Business School の人工知能コース](https://www.microsoft.com/ja-jp/ai/ai-business-school?rtc=1)




### For Product Leaders

|Action                       |Guidelines                                                                                                      |Column3  |
|-----------------------------|----------------------------------------------------------------------------------------------------------------|---------|
|Assess & prepare             |Assess merit of developing the product considering organizational values and business objectives                |         |
|Assess & prepare             |Assemble team reflecting diverse perspectives and with clearly defined roles and responsibilities               |         |
|Assess & prepare             |Assess potential product impact by including input from domain experts and potentially impacted groups          |         |
|Design, build & document     |Evaluate data and system outcomes to minimize the risk of fairness harms                                        |         |
|Design, build & document     |Design AI product to mitigate the potential negative impact on society and the environment                      |         |
|Design, build & document     |Incorporate features to enable human control                                                                    |         |
|Design, build & document     |Incorporate features to enable human control                                                                    |         |
|Design, build & document     |Take measures to safeguard data and AI products                                                                 |         |
|Design, build & document     |Document throughout the development lifecycle to enable transparency                                            |         |
|Validate & Support           |Validate product performance and test for unplanned failures as well as foreseeable misuse unique to AI products|         |
|Validate & Support           |Communicate design choices, performance, limitations, and safety risks to end user                              |         |



### For Researcher & Data Scientists
