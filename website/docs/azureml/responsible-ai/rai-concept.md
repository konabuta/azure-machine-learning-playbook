---
id: rai-concept
title : "責任のある AI の概要"
---


# 責任のある AI 概要
本ページでは 責任のある AI について Microsoft の取り組みを踏まえながら説明します。


## 背景

AI の技術が急速に進化しています。AI が人間に近いような能力を保持したり動作をすることや、社会的影響も大きいことから AI システム全体の透明性に対するニーズが高まっています。透明性が無い AI システムはステークホルダーの信頼を失い、AI の社会実装を妨げる一つの大きな要因となります。

しかしながら、責任のある形での AI の開発や運用管理はまだ十分に浸透しているとは言えません。AI システムのプライバイシーの懸念、誤動作、副作用などの課題に対して、誰が責任を取るのか、どのように対処するのかがルール化されていないことが多いです。本ドキュメントは、責任のある AI の概念や技術について説明し、人間中心で信頼された透明性の高い AI システムの構築・運用管理の手助けとなることを目的としています。

_"The more powerful the tool, the greater the benefit or damage it can cause ... Technology innovation is not going to slow down. The work to manage it needs to speed up." Brad Smith, President and Chief Legal Officer, Microsoft_

<br/>

## Microsoft の責任のある AI への取り組み

Microsoft 自身も責任のある AI に取り組んでいます。これまでの取り組みをまとめた年表です。


<img
  src={require('./images/microsoft-rai-journey.png').default}
  width="1000"
/>

<details>
    <summary> 詳細 </summary>

- 2016年 : Microsoft CEO Satya Nadella が [The Partnership of the Future](https://slate.com/technology/2016/06/microsoft-ceo-satya-nadella-humans-and-a-i-can-work-together-to-solve-societys-challenges.html) という論説を投稿しました。AI システムの透明性、効率性、プライバシーの尊重、バイアスからの保護などに言及しています。
- 2017年 : Aether (AI, Ethics, and Effects in Engineering and Research) を設立しました。この団体は Microsoft 社内の責任のある AI に関する最高機関になっており、様々な責任のある AI の課題、テクノロジー、プロセス、ベストプラクティスに関する提言を行なっています。
- 2018年 : [The Future Computed](https://news.microsoft.com/ja-jp/2018/01/24/180117-future-computed-artificial-intelligence-role-society/) という書籍を公表しました。AI が社会にもたらす課題、AI をどうすれば責任がある形で開発され、運用されるのか、どのようにガバナンスを制定すればいいのかについて Microsoft の見解を述べているものです。後に説明する 6 つの基本原則についても言及しています。また、顔認証技術の透明や独立した第三者機関によるテストの法規制の必要性を訴えています。
- 2019年 : Office of Responsible AI を設立しました。ポリシーやガバナンスのプロセスを策定しています。また、Responsible AI Standard (v1) を社内用に発行しました。
- 2020年 : RAISE (Responsible AI Strategy in Engineering) はエンジニアリンググループ全体で責任のある AI のルールとプロセスの実装を促進するために設立されました。
- 2021年 : Responsible AI Standard (v2) を社内用に発行しました。
- 2021年 : Resposible AI Dashboard をオープンソースで公開しました。
- 2022年 : Responsible AI Standard (v2) を社外に一般公開しました。

</details>

また最近では Microsoft のこれまでの培ってきた知見を社会・お客様に伝えていくべく、[AI Business School](https://www.microsoft.com/ja-JP/ai/ai-business-school) という責任のある AI などについて学べるビジネス向け学習コンテンツ、ガイドライン、オープンソースのツールを公開しています。


<br/>

## 責任のある AI の 6 つの原則

Microsoft は AI システムの開発および運用管理において、次の 6 つの責任のある AI の原則をガイドしています。


<img
  src={require('./images/microsoft_rai_principles.png').default}
  width="800"
/>

<br/>


**公平性 (Fairness)**<br/>
AI システムは全ての人を公平に扱い、同じ属性・状況の人たちに対して異なる影響を与えることを回避する必要があります。
- 例
    - [Racial Bias in Healthcare Algorithm](https://www.nature.com/articles/d41586-019-03228-6)
    - [Gender Bias in roles](https://www.bing.com/images/search?q=ceo&form=HDRSC3&first=1&tsc=ImageHoverTitle)
**信頼性と安全性 (Reliability & Safety)**<br />
AI システムは信頼性が高く安全である必要があります。設計されたとおりに動作し、新しい状況にも安全に対応できるようにすることが重要です。
- 例
    - [Driving to Safety](https://www.rand.org/pubs/research_reports/RR1478.html)

**プライバシーとセキュリティ (Privacy & Security)** <br/>
AI システムではデータを扱うためプライバシーとセキュリティの保護が必要です。
- 例
    - [How Target Figured Out A Teen Girl Was Pregnant Before Her Father Did](https://www.forbes.com/sites/kashmirhill/2012/02/16/how-target-figured-out-a-teen-girl-was-pregnant-before-her-father-did/?sh=1826a54c6668)


**包括性 (Inclusiveness)** <br/>
AI システムに限らず技術は全ての人にもたらされるべきで、様々なニーズに対応していく必要があります。


**透明性 (Transparency)** <br />
AI システムが意思決定に利用される場面などでは、どのように AI システムが決定を行ったのかを理解することが重要です。


**アカウンタビリティ (Accountability)** <br />
AI システムを設計・構築・運用管理する人は、システムがどのように動作するかについて説明責任があります。
- 例
    - [UK Official Says It's Too Expensive to Delete All the Mugshots of Innocent People in Police Databases](https://gizmodo.com/uk-official-says-its-too-expensive-to-delete-all-the-mu-1825388626)

この 6 つの原則は企業としてあるべき姿を定義はしていますが、実はそれだけでは不十分です。というのも原則だけでは現場での活用が進みません。また原則の解釈の仕方も人によってマチマチです。


<br/>

## 責任のある AI の実践

これらの 6 つの原則をベースに、設計フェーズから責任のある AI が考慮された AI システムが統制の効いたガバナンスの元に実装されるために Microsoft が社内外に公開している取り組みを紹介します。


<img
  src={require('./images/microsoft-rai-to-enact-principles.png').default}
  width="800"
/>

### 1. Governance (ガバナンス)

Microsoft は Hub and Spokes モデルでガバナンスの体制を構築しています。

<img
  src={require('./images/microsoft-rai-governance.png').default}
  width="800" />

<!-- - Responsible AI Council
    - Microsoft のエグゼクティブメンバーや責任のある AI の各グループ (Aether Comittee, Office of Responsible AI, RAISE) の代表者から構成され、全社的に責任のある AI への取り組みをサポートします。 -->


- Aether Committee
    - Aether (AI, Ethics, and Effects in Engineering and Research) は Microsoft 社内の部門を横断する様々な専門家グループから構成され、Microsoft 社内のシニアリーダーシップや Office of Responsible AI (ORA) に対して、AI システムに関する疑問・課題などについて助言するアドバイザリーを提供します。また 6 つの作業グループがあり、それぞれの分野で有益なツール、ベストプラクティス、実装ガイダンスなどを開発しています。
- Office of Responsible AI (ORA)
    - 責任のある AI の原則を実践に向けたガバナンスの実装と管理をします。代表的な取り組みとしては Responsible AI Standard を作成し、社内の責任のある AI の実践をサポートしています。
- RAISE (Responsible AI Strategy in Engineering)
    - エンジニアリンググループにおける責任のある AI のルールの策定、システム戦略、プロセスの実装を実行します。
- Responsible AI Champs
    - Responsible AI Champs はスポークの役割を果たし、組織全体にわたるルールの実装や、認知度の向上をサポートします。お客様や社内におけるセンシティブなユースケースに対するアドバイザリーを行なっています。

### 2. Rules (ルール)
#### Responsible AI Standard
2022年 Microsoft は [Responsible AI Standard v2](https://blogs.microsoft.com/wp-content/uploads/prod/sites/5/2022/06/Microsoft-Responsible-AI-Standard-v2-General-Requirements-3.pdf) を社外に公開しました。元々は Microsoft 社内で活用されていたものです。これは責任のある形で AI システムの開発運用の基準となるフレームワークです。

<br/>

**ドキュメントの構成**
- Principles
    - 責任のある AI を実現するための原則
- Goals
    - 各原則で実行されるべき成果
- Requirements
    - ゴールを達成するために必要なステップ
- Tools and Practices
    - 各ステップを実行するのをサポートするツールやプラクティス



### 3. Training and Practices (トレーニングとプラクティス)
人間中心のデザインや、ソフトウェア開発のライフサイクルにおける問題を予測し、それを解決することで責任のある方法で AI システムを開発することをサポートするガイドラインを提供しています。

- [Human-AI Guidelines](https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/)
    - [Human-AI eXperiences (HAX) Toolkit](https://www.microsoft.com/en-us/haxtoolkit/) に含まれます。
- [Conversational AI Guidelines](https://www.microsoft.com/en-us/research/publication/responsible-bots/)
- [Inclusive Design Guidelines](https://www.microsoft.com/design/inclusive/)
- [AI Fairness Checklist](https://www.microsoft.com/en-us/research/project/ai-fairness-checklist/)
- [Datasheets for Datasets](https://www.microsoft.com/en-us/research/project/datasheets-for-datasets/)
- [AI Security Guidelines](https://blogs.microsoft.com/on-the-issues/2019/12/06/ai-machine-learning-security/)
- [Impact Assessment Guideline](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4ZzOI)





###  4. Tools and processes (ツールとプロセス)

Microsoft は Data Scientist などの技術者が機械学習のライフサイクル (=**MLOps**) において機械学習モデルを理解し、保護し、制御するためのさまざまなツールやプラットフォームを開発しています。

#### Impact Assessment Template
Impact Assessment Template は AI システムが人、組織、社会に与える潜在的な影響を特定し、軽減策や対応方法を洗い出すツールです。Impact Assessment Guideline を参考に使います。Microsoft のこれまでの知見が集約されています。

:star: **[Impact Assessment Template](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4ZHNX)** <br />
:star: **[Impact Assessment Guideline](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4ZzOI)**



#### Responsible AI Toolbox

Responsible AI Toolbox は Microsoft が主導で開発している責任のある AI のツール群です。

<img src={require('./images/raitoolbox.png').default} width="500" /><br/>

<br/>

モデルの説明性付与、誤差分析、データ可視化、反事仮想分析、因果推論の機能をより簡単にスムーズに利用するための機能を提供しています。大きく分類すると 2 つの機能があります。

- **モデルのデバッグ** : 機械学習モデルの評価を行い、責任のある AI の観点で問題がないか、どこに問題があるのかを確認し、軽減します。**Identify(特定)**、**Diagnose (診断)**、**Mitigate (軽減)** の 3 つのステップに該当します。
- **意思決定への活用** : 機械学習モデルや因果推論を用いて、意思決定に役立てます。**Inform Action (アクションを提示)** のステップに該当します。


<img src="https://raw.githubusercontent.com/microsoft/responsible-ai-widgets/main/img/responsible-ai-toolbox.png" />


2 つのリポジトリから構成されています。<br/>

:point_right: **[Responsible AI Toolbox](https://github.com/microsoft/responsible-ai-toolbox)** <br />
モデルを評価し意思決定を行うための可視化ウィジェットである Responsible AI Dashboard が含まれます。

:point_right: **[Responsible AI Toolbox Mitigations](https://github.com/microsoft/responsible-ai-toolbox-mitigations)** <br />
データの均衡性の分析とデータ拡張を行う Python ライブラリです。

<br />

また、**Responsible AI Dashboard** は Responsible AI Toolbox が提供する責任のある AI を実現する統合されたダッシュボードです。責任のある AI の一連のプロセスを一気通貫で実行できます。

<img src={require('./images/raidashboard.png').default} width="500" /><br/>


<br />

:pencil2: **デモサイトはこちら → [AI Lab Project : Responsible AI dashboard](https://www.microsoft.com/en-us/ai/ai-lab-responsible-ai-dashboard)**

<br/>

#### その他ツール
Responsible AI Toolbox に含まれていないツールも多数あります。ここでは一部を掲載します。

:::note
Microsoft が提供するツールの最新の情報は [責任ある AI のリソース](https://www.microsoft.com/ja-JP/ai/responsible-ai-resources) 、研究開発の取り組みは [Advancing AI trustworthiness: Updates on responsible AI research](https://www.microsoft.com/en-us/research/blog/advancing-ai-trustworthiness-updates-on-responsible-ai-research/) を参照ください。
:::


- [Interpret](https://github.com/interpretml/interpret) - EBM (交互作用項付き一般化加法モデル) などの解釈可能性の高いモデルアルゴリズムや、ブラックスモデルに説明性を付与する SHAP、LIME、Partial Dependence Plot などを含む Python ライブラリ。

<br/>

#### MLOps における Responsible AI
こういった責任のある AI をサポートするさまざまなツールを Data Scientist が個人で使っていくだけでなく、MLOps の中でチーム・組織として確実に実装していくことも大事です。Responsible AI Dashboard は Azure Machine Learning との統合機能があり、MLOps の中で使っていくことができます。



#### 参考資料
- [責任のある AI とは (プレビュー)](https://learn.microsoft.com/ja-jp/azure/machine-learning/concept-responsible-ml)
- [Azure Machine Learning の責任ある AI ダッシュボードを使用して AI システムを評価し、データ ドリブンの意思決定を行う (プレビュー)](https://learn.microsoft.com/ja-jp/azure/machine-learning/concept-responsible-ai-dashboard)

<br/>


## Microsoft 製品・サービスでの取り組み例

### Transparency Note の公開
[Transparency Note for Azure Cognitive Service for Language](https://learn.microsoft.com/en-us/legal/cognitive-services/language-service/transparency-note) などの Transparency Note を公開し、AI システムの目的、能力、限界についてのコミュニケーションを支援し、マーケティングと技術文章のギャップを埋め、お客様が責任を持って AI を導入するために知っておくべき情報を積極的に伝えています。その他、Azure Cognitive Services 全般における責任のある AI のガイドラインは [Cognitive Services における AI の責任ある使用](https://learn.microsoft.com/ja-JP//azure/cognitive-services/responsible-use-of-ai-overview) で確認できます。


### Azure OpenAI Service (プレビュー)

GPT-3 などもモデルが利用できる Open AI Service (プレビュー) は責任のある AI が考慮されたサービスになっています。例えばコンテンツフィルタの機能があり、プロンプトや生成されたコンテンツがフィルタリングされます。

#### 参考情報
- [Azure OpenAI Service (Web サイト)](https://azure.microsoft.com/ja-jp/products/cognitive-services/openai-service/#get-started)
