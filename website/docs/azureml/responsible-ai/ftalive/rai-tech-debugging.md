---
id: rai-tech-debugging
title : "機械学習モデルのデバッグ"
---

### 2.1. 機械学習モデルのデバッグ

本モジュールでは、モデルをデバッグするための様々な技術を紹介します。例えば、ブラックボックスなモデルは透明性主にモデルの透明性と公平性に言及していきます。

- モデルの透明性
    - 機械学習アルゴリズムの説明性・解釈可能性の技術より、大域的・局所的なトレンドを理解します。これは AI システムを実装する際に Data Scientist が経営者やステークホルダーにモデルを説明する際に役立ちます。また運用中モデルの挙動について説明が求められるようなシーンでも有効ですし、Data Scientist 自身が開発中の機械学習モデルをデバッグする際にも有効です。
- モデルの公平性
    - 学習済みモデルの公平性を評価し、必要に応じて軽減を行います。公平性とは特定のグループに対してモデルが他とは異なる挙動しないことを意味します。特にセンシティブな属性 (人種、ジェンダー、年齢、障害の有無 etc) の観点で考慮されます


これらの技術は下記の 3 つのステップ (特定 → 診断 → 緩和) で実行します。モデルの理解だけで良いのであれば `診断` のプロセスまでで十分ですが、公平性に問題があったり、モデルの精度が足りない場合には次の `緩和` のステップが必要になってきます。


<img src={require('./images/understand_ai_model.png').default} width="500" />

<br/>

ここで登場する主な技術を紹介します。

#### Fairlearn

<img 
    src={require('./images/fairlearn.png').default}
    width="500"
/>
<br/>

機械学習モデルの公平性の評価と不公平性の緩和を行うライブラリです。

Fairlearn 対象にしている害 (Harm) は下記の 2 つです。

- 割り当ての害
    - AI システムによって、特定のグループの機会、リソース、または情報が増減されます。 たとえば、雇用、入学許可、融資などで、モデルにより、特定のグループの人が、他のグループより、適切な候補をうまく選択される場合があります。
- サービス品質の害
    - AI システムによる対応のよさが、ユーザーのグループによって異なります。 たとえば、音声認識システムでは、女性に対する対応が男性より悪くなる場合があります。


Fairlearn はこういった不公平性の危害を評価し、必要に応じて緩和することができます。

<br/>

#### Error Analysis

<img src='https://techcommunity.microsoft.com/t5/image/serverpage/image-id/255440i28671D47179C4A7D/image-size/large?v=v2&px=999' width="500" /><br/>

Error Analysis はモデルの誤差を深堀り分析するツールです。よく機械学習モデルの精度を 90 % などと集計された数値で見ることが多いと思います (上図) が、ユースケース次第ではそれでは不十分です。誤差がデータのどこに潜んでいるのかはこれでは分からないので、例えば性別や人種の違いで誤差が異なれば公平性の問題になりますし、病理診断などのシナリオでも子供や高齢者の精度が悪いと、社会的な問題になることが考えられます。

<img src={require('./images/erroranalysis.png').default} width="500" /><br/>


そのため、誤差を深掘りし、誤差が大きくなる・小さくなるコホートを特定することで、ステークホルダーに対してモデルの潜在的なリスクを伝えることができたり、誤差が大きいコホートのデータの品質を改善することで精度が向上することが期待できます。

<br/>

#### InterpretML
<img src={require('./images/interpretml.png').default} width="500" /><br/>

[InterpretML](https://interpret.ml/) は、主要な「解釈可能性が高い Glass-box なモデル」 と 「任意の学習済みモデル (Black-box) に対する説明性付与手法」が実装されているライブラリ群です。それぞれに共通してモデル全体の傾向を見る大域的な説明とテストデータ個々の予測値に対する局所的な説明があります。


##### Global Surrogate

グローバルなモデル解釈方法。学習済みモデルへの入力データとその予測値を再度線形回帰などの解釈可能なモデルで学習し直して、モデル解釈をするアプローチ方法。InterpretML では LightGBM や線形回帰のモデルが利用できます。


##### SHAP

[SHAP (SHapley Additive exPlanations)](https://github.com/slundberg/shap) はゲーム理論のシャープレイ値の枠組みを利用して、モデルの種類に関わらず、ここのデータの特徴量ごとの貢献度をみることができます。SHAP 単体でもライブラリが公開されています。

<br/>


#### Explainable Boosting Machines (EBM)

Explainable Boosting Machines (EBM) は、一般化加法モデル (GAM) に交互作用項を組み込んだモデル (GA2M) を高速に推定するアルゴリズムです。

$$
y =  f(x_1) + f(x_2) + f(x_3) + ... + \Sigma_{ij} f_{ij}(x_i, x_j)
$$ 

<!-- it uses [Math >> Image](https://marketplace.visualstudio.com/items?itemName=MeowTeam.vscode-math-to-image) to render math in github markdown. -->

<!-- <div align="center"><img style="background: white;" src="https://render.githubusercontent.com/render/math?math=y%20%3D%20%20f(x_1)%20%2B%20f(x_2)%20%2B%20f(x_3)%20%2B%20...%20%2B%20%5CSigma_%7Bij%7D%20f_%7Bij%7D(x_i%2C%20x_j)"></div> -->


それぞれの特徴量 $x_i$ は関数 $f(x_i)$ で表現されています。線形回帰などの線形モデルとは違い目的変数 $y$ との関係性は線形性は前提としていません。この関数を推定する方法はいくつかありますが、EBM ではこの関数をブースティングで推定します。また交互作用項を推定するアルゴリズム (FAST) も実装されており精度向上に寄与しています。


<br/>


#### Responsible AI Toolbox

<img src={require('./images/raitoolbox.png').default} width="500" /><br/>


モデルの説明性付与、誤差分析、データ可視化、反事仮想分析、因果推論の機能をより簡単にスムーズに利用するために Responsible AI Toolbox という統合されたダッシュボードを提供しています。モデルをデバッグする機能と意思決定をサポートする機能の 2 つを提供しています。


<img src='https://techcommunity.microsoft.com/t5/image/serverpage/image-id/331674i5FBF69F2E05F85A3/image-size/medium?v=v2&px=400' width="300" /><br/>



<br/>


#### デモンストレーション
ローンの履行・不履行を予測するモデルを作成するシナリオで責任のある AI を考慮した AI システムを構築していきます。[UCI Adault Dataset](https://archive.ics.uci.edu/ml/datasets/adult) を用いた擬似データを利用します。


#### Phase1 : アセスメント

(お客様によってカスタマイズされた) Microsoft Responsible AI Standard v2 に従って、責任のある形で AI システムを構築・運用するための評価を行い、実装方法を検討します。

ローンの審査モデルにおいては公平性が社会問題になることがあります。Responsible AI Standard v2 の Fairness - F2 : Allocation of resources and opportunities を考慮する必要があります。F2.1 ~ F2.9 にデータやモデルの評価、ドキュメンテーション、顧客への情報公開などの必要性が記載されています。


<br/>

#### Phase2 : 開発 (Development)

##### データ準備
データの品質が AI システムに大きな影響を与えるため、データの詳細な情報をドキュメントに残しておくことが重要です。[Datasheets for Datasets](https://www.microsoft.com/en-us/research/project/datasheets-for-datasets/) ([Template](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4t8QB)) を利用することで、データの透明性と信頼性を高め、ステークホルダー間のコミュニケーションを促進します。

#### モデル構築

次にモデル構築を進めていきます。最初のモデル構築は勾配ブースティングのライブラリ [CatBoost](https://catboost.ai/) を用います。その後、解釈可能性の高いモデルである一般化加法モデルを Explainable Boosting Machine (aka EBM) を用いて構築します。また、構築済みの CatBoost のモデルに InterpretML を利用して説明性を付与します。

最後は FairLearn を用いて公平性の評価を行い、不公平性を緩和する処置を行います。


それではまず最初に CatBoost のモデルを構築します。

```python
from catboost import CatBoostClassifier
model_1 = CatBoostClassifier(
    random_seed=42, logging_level="Silent", iterations=150)


pipeline_1 = Pipeline(steps=[
    ('preprocessor', column_transformer), # 前処理
    ('classifier_CBC', model_1)]) # モデル

catboost_predictor = pipeline_1.fit(X_train, Y_train)

```

次に解釈可能性の高いモデルである EBM を構築します。

```python
from interpret.glassbox import ExplainableBoostingClassifier
seed = 1234

#  No pipeline needed due to EBM handling string datatypes
ebm_predictor = ExplainableBoostingClassifier(random_state=seed, interactions=4)
ebm_predictor.fit(X_train, Y_train)
```

各変数の貢献度や推定された関数を確認します。

<img src={require('./images/ebm_global.png').default} width="500" />
<img src={require('./images/ebm_global_age.png').default} width="500" /><br/>

交互作用項のアウトプットを確認します。

<img src={require('./images/ebm_global_interaction.png').default} width="500" />

<br/>


次に CatBoost のモデルに説明性を付与します。

```python
from raiwidgets import ExplanationDashboard
from interpret.ext.blackbox import TabularExplainer

explainer = TabularExplainer(catboost_predictor, 
                             X_train)

global_explanation = explainer.explain_global(X_test)

ExplanationDashboard(global_explanation, catboost_predictor, dataset=X_test, true_y=Y_test)
```

<img src={require('./images/interpretml_dashboard.png').default} width="500" />


誤差分析を行い、誤差の大きいコホートを特定します。

```python
from raiwidgets import ErrorAnalysisDashboard
ErrorAnalysisDashboard(global_explanation, catboost_predictor, dataset=X_test, true_y=Y_test)
```
<img src={require('./images/erroranalysis_dashboard_decisiontree.png').default} width="500" />
<img src={require('./images/erroranalysis_dashboard_heatmap.png').default} width="500" />



これからの一連の流れを統合されたダッシュボードである Responsible AI Toolbox を用いて表現します。

```python
from raiwidgets import ResponsibleAIDashboard
from responsibleai import RAIInsights


# データや目的変数などの情報
rai_insights = RAIInsights(pipeline_1, train_data, test_data, target_feature, 'classification',
                               categorical_features=categorical_features, maximum_rows_for_test=7000)
# モデル説明性 (InterpretML)
rai_insights.explainer.add()
# モデル誤差解析 (Error Analysis)
rai_insights.error_analysis.add()

# 計算処理
rai_insights.compute()

# ダッシュボード出力
ResponsibleAIDashboard(rai_insights, locale="ja")
```
<img src={require('./images/raitoolbox_dashboard.gif').default} width="500" />


<br/>
次に公平性の評価と不公平性を軽減していきます。まずは最初に CatBoost モデルを性別の観点で公平性を確認します。

```python
from raiwidgets import FairnessDashboard
Y_pred = catboost_predictor.predict(X_test)
FairnessDashboard(sensitive_features=A_test,
                  y_true=Y_test,
                  y_pred=Y_pred)
```
<img src={require('./images/fairlearn_dashboard.png').default} width="500" />

<img src={require('./images/fairlearn_assess_selection_rate.png').default} width="500" />

次に、GridSearch を用いて不公平性を軽減したモデルを複数作成します

```python
from fairlearn.reductions import GridSearch
from fairlearn.reductions import DemographicParity, ErrorRate

sweep = GridSearch(
    model_1,
    constraints=DemographicParity(),
    grid_size=70)

sweep.fit(X_train, Y_train, sensitive_features=A_train.Sex)
```

公平性を再度確認します。

```python
from raiwidgets import FairnessDashboard
mitigated_predictors = sweep.predictors_

ys_mitigated_predictors = {} # it contains (<model_id>, <predictions>) pairs

# the original prediction:
ys_mitigated_predictors["census_unmitigated"]=catboost_predictor.predict(X_test)

base_predictor_name="mitigated_predictor_{0}"
model_id=1

for mp in mitigated_predictors:
    id=base_predictor_name.format(model_id)
    ys_mitigated_predictors[id]=mp.predict(X_test)
    model_id=model_id+1
    
FairnessDashboard(
    sensitive_features=A_test,
    y_true=Y_test,
    y_pred=ys_mitigated_predictors)
```

オレンジ色にハイライトされているモデルが軽減前のモデルです。ダッシュボードで精度で公平性のトレードオフを確認し、採用するモデルを決めていきます。

<img src={require('./images/fairlearn_mitigate_dpratio.png').default} width="500" />


<br/>

#### Phase3 : デプロイメント (Deployment)

Phase2 で精度と責任ある AI の原則とのトレードオフを考慮したモデルが選択されました。Phase3 では本番環境にこのモデルをデプロイしていきます。主に機械学習エンジニア、DevOps エンジニアが作業を進めますが、Data Scientist とシームレスに連携する必要があったり、短いサイクルでモデルのリリースや再学習を行う必要性があるため、MLOps を導入します。

今回利用している Azure Machine Learning では GitHub (GitHub Actions) and/or Azure DevOps (Azure Pipelines) 用います。一般的には下記の MLOps のプラクティスを実装します。

- 再現可能な機械学習パイプライン
- 機械学習ライフサイクルの自動化
- 監査証跡の自動取得
- AI システムやモデルの監視
- 通知とアラートの仕組み

※ Azure Machine Learning における MLOps の詳細は [MLOps: Model management, deployment, lineage, and monitoring with Azure Machine Learning](https:/.microsoft.com/en-us/azure/machine-learning/concept-model-management-and-deployment) を参照ください。


モデルの説明性・解釈可能性は、推論時にも必要になるケースがあります。今回のローン審査においては、ローンの審査の結果に大きく影響を与えた属性 (年齢、勤続年数、負債額 etc) が分かることで、銀行がユーザに謝絶理由を説明できたり、銀行の担当者が結果の妥当性を確認することができます。


<br/>