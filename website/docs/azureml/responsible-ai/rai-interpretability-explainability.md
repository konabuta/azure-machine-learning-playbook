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