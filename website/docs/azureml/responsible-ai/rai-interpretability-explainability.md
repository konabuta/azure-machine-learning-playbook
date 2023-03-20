---
id: rai-interpretability-explainability
title : "解釈可能性 & 説明可能性"
---
## AI・機械学習モデルを利用する際の課題

住宅ローンの審査で機械学習モデルが利用されるシーンを考えてみます。

<img
  src={require('./images/loan-usecase.png').default}
  width="1000"
/>

単に機械学習モデルを構築しその精度を確認するでは不十分なケースが多いです。

<img
  src={require('./images/loan-usecase-comment.png').default}
  width="1000"
/>


### AI・機械学習モデルの社会実装の難しさ
原因は多岐に渡りますが、AI・機械学習の社会実装の難しさの一つに、AI・機械学習モデルの解釈性・説明性が挙げられます。

- モデルの予測値の根拠が理解できない
- モデルの品質が不透明
- モデルの改善方法がわからない

といった点が挙げられます。特に従来の統計的手法に比べ、近年の機械学習モデルは高精度である一方で、解釈性・説明性が低い傾向にあります (詳細は後述)。

---
### 人間中心の AI・機械学習のシステム
<img
  src={require('./images/human-ai-interaction.png').default}
  width="1000"
/>


#### 大局的と局所的
<img
  src={require('./images/global-local.png').default}
  width="1000"
/>

### ユースケース
#### 人間の能力を拡張する
<img
  src={require('./images/interpretability-explainability-usecase1.png').default}
  width="1000"
/>

#### AI・機械学習モデルを評価する
<img
  src={require('./images/interpretability-explainability-usecase2.png').default}
  width="1000"
/>

#### AI・機械学習モデルをデバッグする
<img
  src={require('./images/interpretability-explainability-usecase3.png').default}
  width="1000"
/>

---
## 解釈可能性 vs 説明可能性
大きく分けて **解釈可能性** と **説明可能性** の 2 つに分類されます。

### 解釈可能性 - Interpretability
**解釈可能性** の高いモデルとは、機械学習モデルが予測値を算出するまでのアルゴリズム内部の過程が、解釈できる機械学習モデル (**Glassbox**) を指します。

<img src={require('./images/glassbox-model.png').default} width="500" /><br/>

### 説明可能性 - Explainability
**説明可能性** が高いとは、機械学習モデルがアウトプットした予測に対して、なぜその予測を出力したのかを説明ことを指します。機械学習モデルを **Blackbox** として扱います。つまり、内部の構造は考慮せず、機械学習モデルに対する入力と予測値の関係性を見ます。

<img src={require('./images/blackbox-model.png').default} width="500" /><br/>

### 解釈可能性とモデル精度のトレードオフ

下記の図にあるように一般的には機械学習モデルの精度 (Accuracy) と解釈可能性 (Interpretability) にはトレードオフがあります。精度が高いニューラルネットワークのモデルが開発できたとしても、高い透明性が求められるようなビジネス要件の観点から採用されないことがあります。

<img src={require('./images/interpret-tradeoff.png').default} width="500" /><br/>

---
## 主要なアルゴリズム
### Global Surrogate

グローバルなモデル解釈方法。学習済みモデルへの入力データとその予測値を再度線形回帰などの解釈可能なモデルで学習し直して、モデル解釈をするアプローチ方法。InterpretML では LightGBM や線形回帰のモデルが利用できます。

<img
  src={require('./images/global-surrogate.png').default}
  width="300"
/><br/>

### SHAP

[SHAP (SHapley Additive exPlanations)](https://github.com/slundberg/shap) はゲーム理論のシャープレイ値の枠組みを利用して、モデルの種類に関わらず、ここのデータの特徴量ごとの貢献度をみることができます。SHAP 単体でもライブラリが公開されています。

<img
  src={require('./images/shap-diagram.png').default}
  width="300"
/><br/>


### 線形回帰モデル
**線形回帰モデル** は、各説明変数の値に重みをかけたものを合計する線形的な関係を表現します。

$$
Y =  \alpha x_1 + \beta x_2 + \gamma x_3 + ... + \epsilon
$$ 

通常、各変数の重みの大きさを変数の重要度とし、予測値への影響を判断します。

<img src={require('./images/linear-regression-qc.png').default} width="300" /><br/>


### 決定木
説明編数をある基準で分割し、分割された各領域における目的変数の値を予測値とするモデルです。分割によってどのくらい目的変数を正確に予測できるようになったのかをみて、変数の重要度を算出します。

これは、工場の製造工程において、不良の確率が 20% のデータに対して決定木モデルを構築した場合のイメージ例です。

<img src={require('./images/decision-tree-qc.png').default} width="300" /><br/>

例えば、「温度が35℃以上」&「湿度が60%以上」 であれば不良の割合がかなり多いことがわかります。一方、「温度が35℃以下」&「スキルがベテラン」 の場合は不良の割合が少ないです。

このように決定木は、どういった条件で予測値が算出されるのかが明確なので、解釈性のあるモデルです。

### 一般化加法モデル
**一般化加法モデル (Generalized Additive Model; GAM)** は、各説明変数の値に関数をかけたものを合計する非線形的な関係を表現します。
$$
Y =  f(x_1) + f(x_2) + f(x_3) + ... 
$$ 


#### Explainable Boosting Machines (EBM)

Explainable Boosting Machines (EBM) は、一般化加法モデル (GAM) に交互作用項を組み込んだモデル (GA2M) を高速に推定するアルゴリズムです。

$$
Y =  f(x_1) + f(x_2) + f(x_3) + ... + \Sigma_{ij} f_{ij}(x_i, x_j)
$$ 

それぞれの特徴量 $x_i$ は関数 $f(x_i)$ で表現されています。線形回帰などの線形モデルとは違い目的変数 $y$ との関係性は線形性は前提としていません。この関数を推定する方法はいくつかありますが、EBM ではこの関数をブースティングで推定します。また交互作用項を推定するアルゴリズム (FAST) も実装されており精度向上に寄与しています。

### 参考情報
- [InterpretML (Web ページ)](http://interpret.ml/)
- [InterpretML (GitHub)](https://github.com/interpretml)
- [Interpretable Machine Learning](https://christophm.github.io/interpretable-ml-book/)
- [一般化線形モデル (GLM) & 一般化加法モデル (GAM)](https://www.slideshare.net/DeepLearningLab/glm-gam)