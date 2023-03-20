---
id: rai-toolbox-for-debug
title : "Responsible AI Toolbox"
---

本ページでは、Microsoft がオープンソースで提供している Responsible AI を実装するツールである Responsible AI Toolbox を紹介します。

## Responsible AI Toolbox

Responsible AI Toolbox は Responsible AI の実装をサポートするツール群です。

<img src="https://raw.githubusercontent.com/microsoft/responsible-ai-widgets/main/img/responsible-ai-toolbox.png" />

### Responsible AI dashboard
Resposible AI dashboard は Responsible AI Toolbox の UI 機能を提供しています。特に緑色にハイライトされた **Identify (特定)**、**Diagnose (診断)**、**Inform Action (アクションの通知)** のプロセスをサポートしています。

<img src="https://raw.githubusercontent.com/microsoft/responsible-ai-widgets/main/img/responsible-ai-dashboard.png" />



:::caution
Mitigate は Responsible AI dashboard の機能では提供されていませんが、Responsible AI Toolbox Mitigate や Fairlearn ライブラリを用いることが実行できます。
:::


## ツール
Responsible AI Toolbox は複数のツールで構成されています。それぞれについて紹介します。s


|機能     |ベース技術   |概要|
|---------|---------|---------|
|[Error Analysis](#error-analysis)|[Error Analysis](https://erroranalysis.ai/)|モデルの誤差の大きいコホートを特定します。|
|[Fairness Assessment](#fairness-assessment)|[Fairlearn](https://github.com/fairlearn/fairlearn)|モデルの公平性を評価します。|
|[Model Interpretability](#model-interpretability)|[InterpretML](http://interpret.ml/)|ブラックボックスなモデルに説明性を付与します。|
|[Counterfactual Analysis](#counterfactual-analysis-and-what-if)|[DiCE](https://github.com/interpretml/DiCE)|予測値を変化させる反実仮想のデータを生成します。|



### Error Analysis

Error Analysis では学習済みの機械学習モデルの誤差の大きいコホート (データのサブセット) を特定します。機械学習モデルを評価する際、精度 73.8 % などと集計された数値で見ることが多いと思います (下図) が、ユースケース次第ではそれでは不十分な場合があります。

集計された数値指標では、誤差がデータのどこに潜んでいるのかはこれでは分かりません。次のようなケースでは特に問題になりやすいです。

- 病理診断モデルにおいて子供や高齢者の誤差が他と比べて大きい
- 与信モデルや異常検知モデルなどで特定の性別・人種だけ誤差大きい

<img src={require('./images/erroranalysis.png').default} width="800" /><br/>


誤差が大きくなる・小さくなるコホートを特定することで、ステークホルダーに対してモデルの潜在的なリスクを伝えることができたり、誤差が大きいコホートのデータの品質を改善することで精度が向上することが期待できます。

なお、Error Analysis は Responsible AI Toolbox に直接組み込まれています。

<br/>


#### 参考情報
- [Error Analysis (Web ページ)](https://erroranalysis.ai/)
- [機械学習モデルでエラーを評価する](https://learn.microsoft.com/ja-jp/azure/machine-learning/concept-error-analysis)

---

### Fairness Assessment

Fairness Assessment では学習済み機械学習モデルの公平性の評価を行います。Python ライブラリの [Fairlearn](https://github.com/fairlearn/fairlearn) をベースにしています。

人種、ジェンダー、年齢などによってマイナスの影響がでるような機械学習モデルは許容されない場合があるため注意が必要です。

:::note
モデルから不公平性を軽減する機能は Responsible AI Toolbox に含まれていませんが、Fairlearn には含まれています。
:::

#### ライブラリ : Fairlearn

[Fairlearn](https://fairlearn.org/) は機械学習モデルの公平性を評価し、必要に応じて不公平性を軽減することができる Python ライブラリです。

<img 
    src={require('./images/fairlearn.png').default}
    width="800"
/>
<br/><br/>

Fairlearn が想定している不公平性による損害 (Harm) のパターンは **Quality-of-service harms** と **Allocation harms** の 2 通りです。

<img 
    src={require('./images/harm-of-unfairness.png').default}
    width="800"
/>
<br/>

#### 参考情報
- [Fairlearn (Web ページ)](https://fairlearn.org/)
- [Fairlearn (GitHub)](https://github.com/fairlearn/fairlearn)
- [機械学種での公平性 (プレビュー)](https://learn.microsoft.com/ja-jp/azure/machine-learning/concept-fairness-ml)

---

### Model Interpretability

学習モデルに説明性を付与する機能を提供します。Python ライブラリの [InterpretML](http://interpret.ml/) をベースにしています。


#### ライブラリ : InterpretML

<img src={require('./images/interpretml.png').default} width="500" /><br/>

[InterpretML](https://interpret.ml/) は、主要な「解釈可能性が高い Glass-box なモデル」 と 「任意の学習済みモデル (Black-box) に対する説明性付与手法」が実装されているライブラリ群です。それぞれに共通してモデル全体の傾向を見る大域的な説明とテストデータ個々の予測値に対する局所的な説明があります。


<br/>

---

### Counterfactual Analysis and What If

#### ライブラリ : DiCE
<img src={require('./images/dice.png').default} width="500" /><br/>
DiCE (Diverse Counterfactual Explanations) は Microsoft が主導で開発している反実仮想説明 (Counterfactual Explanation, CE) の Python ライブラリです。

<br/>


#### 参考情報
- [DiCE (GitHub)](https://github.com/interpretml/DiCE)
- [反事実分析と What-If (プレビュー)](https://learn.microsoft.com/ja-jp/azure/machine-learning/concept-counterfactual-analysis)