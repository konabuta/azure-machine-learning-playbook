---
id: rai-tech-debugging
title : "モデルのデバッグ"
---


本モジュールでは、Responsible AI Toolbox に含まれるモデルをデバッグ・アセスメントする技術を紹介します。

## Responsible AI Dashboard
Responsible AI Dashboard は Responsible AI Toolbox が提供する可視化ウィジェットです。責任のある AI の一連のプロセスを一気通貫で実行できます。この中でもモデルのデバッグ・アセスメントに関連するところは最初の 3 つのステップ (Identify (特定) → Diagnose (診断) → Mitigate (緩和)) になり、Responsible AI Dashboard でカバーしているのはハイライトしている部分です。

<img src="https://raw.githubusercontent.com/microsoft/responsible-ai-widgets/main/img/responsible-ai-dashboard.png" />



:::caution
Mitigate は Responsible AI Dashboard の機能では提供されていませんが、Responsible AI Toolbox Mitigate や Fairlearn ライブラリを用いることが実行できます。
:::

Responsible AI Dashboard のバックエンドで利用されているツールを紹介します。


|機能     |ベース技術   |概要|
|---------|---------|---------|
|[Error Analysis](#error-analysis)|[Error Analysis](https://erroranalysis.ai/)|モデルの誤差の大きいコホートを特定します。|
|[Fairness Assessment](#fairness-assessment)|[Fairlearn](https://github.com/fairlearn/fairlearn)|モデルの公平性を評価します。|
|[Model Interpretability](#model-interpretability)|[InterpretML](http://interpret.ml/)|ブラックボックスなモデルに説明性を付与します。|
|[Counterfactual Analysis](#counterfactual-analysis-and-what-if)|[DiCE](https://github.com/interpretml/DiCE)|予測値を変化させる反実仮想のデータを生成します。|


## Error Analysis


Error Analysis では学習済みの機械学習モデルの誤差の大きいコホート (データのサブセット) を特定します。機械学習モデルを評価する際、精度 73.8 % などと集計された数値で見ることが多いと思います (下図) が、ユースケース次第ではそれでは不十分な場合があります。

集計された数値指標では、誤差がデータのどこに潜んでいるのかはこれでは分かりません。次のようなケースでは特に問題になりやすいです。

- 病理診断モデルにおいて子供や高齢者の誤差が他と比べて大きい
- 与信モデルや異常検知モデルなどで特定の性別・人種だけ誤差大きい

<img src={require('./images/erroranalysis.png').default} width="800" /><br/>


誤差が大きくなる・小さくなるコホートを特定することで、ステークホルダーに対してモデルの潜在的なリスクを伝えることができたり、誤差が大きいコホートのデータの品質を改善することで精度が向上することが期待できます。

<br/>


## Fairness Assessment

Fairness Assessment では学習済み機械学習モデルの公平性の評価を行います。Python ライブラリの [Fairlearn](https://github.com/fairlearn/fairlearn) をベースにしています。

:::note
Responsible AI Toolbox には含まれていませんが、不公平性を軽減する機能は Fairlearn に含まれています。
:::

Fairlearn 対象にしている害 (Harm) は下記の 2 つです。

- 割り当ての害
    - AI システムによって、特定のグループの機会、リソース、または情報が増減されます。 たとえば、雇用、入学許可、融資などで、モデルにより、特定のグループの人が、他のグループより、適切な候補をうまく選択される場合があります。
- サービス品質の害
    - AI システムによる対応のよさが、ユーザーのグループによって異なります。 たとえば、音声認識システムでは、女性に対する対応が男性より悪くなる場合があります。

<img 
    src={require('./images/fairlearn.png').default}
    width="800"
/>

**Fairlearn** ライブラリの概要

<br/>

## Model Interpretability

学習モデルに説明性を付与する機能を提供します。Python ライブラリの [InterpretML](http://interpret.ml/) をベースにしています。


### InterpretML

<img src={require('./images/interpretml.png').default} width="500" /><br/>

[InterpretML](https://interpret.ml/) は、主要な「解釈可能性が高い Glass-box なモデル」 と 「任意の学習済みモデル (Black-box) に対する説明性付与手法」が実装されているライブラリ群です。それぞれに共通してモデル全体の傾向を見る大域的な説明とテストデータ個々の予測値に対する局所的な説明があります。

**主要なアルゴリズム**
##### Global Surrogate

グローバルなモデル解釈方法。学習済みモデルへの入力データとその予測値を再度線形回帰などの解釈可能なモデルで学習し直して、モデル解釈をするアプローチ方法。InterpretML では LightGBM や線形回帰のモデルが利用できます。


##### SHAP

[SHAP (SHapley Additive exPlanations)](https://github.com/slundberg/shap) はゲーム理論のシャープレイ値の枠組みを利用して、モデルの種類に関わらず、ここのデータの特徴量ごとの貢献度をみることができます。SHAP 単体でもライブラリが公開されています。


#### Explainable Boosting Machines (EBM)

Explainable Boosting Machines (EBM) は、一般化加法モデル (GAM) に交互作用項を組み込んだモデル (GA2M) を高速に推定するアルゴリズムです。

$$
Y =  f(x_1) + f(x_2) + f(x_3) + ... + \Sigma_{ij} f_{ij}(x_i, x_j)
$$ 

それぞれの特徴量 $x_i$ は関数 $f(x_i)$ で表現されています。線形回帰などの線形モデルとは違い目的変数 $y$ との関係性は線形性は前提としていません。この関数を推定する方法はいくつかありますが、EBM ではこの関数をブースティングで推定します。また交互作用項を推定するアルゴリズム (FAST) も実装されており精度向上に寄与しています。


<br/>

## Counterfactual Analysis and What If

学習済みモデルが出力する予測値を変化させる反実仮想の入力データを生成します。反実仮想の世界「もし入力データが xxx だったら予測結果は xxx に変わります。」を用いて機械学習モデルを評価します。Python ライブラリの DiCE をベースにしています。

<img src={require('./images/dice-loan.gif').default} width="500" /><br/>

例えば住宅ローンの審査が結果として拒否されたケースの場合、どういった入力データ (勤続年数、借入金額、年齢 etc) であればローン審査を通過できると機械学習モデルが予測するのかを教えてくれます。

### DiCE
<img src={require('./images/dice.png').default} width="500" /><br/>
DiCE (Diverse Counterfactual Explanations) は Microsoft が主導で開発している反実仮想説明 (Counterfactual Explanation, CE) の Python ライブラリです。

<br/>
