---
id: azureml-author
title: "実験サービス"
---

機械学習モデルを構築する実験フェーズは、特徴量エンジニアリング、モデル選択、パラメータ選択を試行錯誤しながら行うため、非常に時間がかかるものです。下記の Azure Machine Learning の実験サービスを用いて、データサイエンティストだけでなく市民データサイエンティストの方も効率的・高速に実験を行うことができます。


:::info
本ドキュメントにおける `実験 (experiment)` は機械学習プロジェクトの PoC フェーズにおける初期 (もしくは再学習・再実験における) における試行錯誤的な機械学習モデルの構築・学習のプロセスを表します。精度が高く本番稼働に耐えうる可能性のある機械学習モデルを探索します。
:::

Azure Machine Learning が提供する実験サービス
- [Notebook](#notebook)
- [自動機械学習 AutoML](#自動機械学習-automl)
- [デザイナー Designer](#デザイナー-designer)



- ---

## Notebook

Notebook は Azure Machine Learning Studio で提供する Jupyter 互換のエディタです。VSCode でも利用されている Monaco エディタが利用されています。Compute Instance を計算環境として使っており、Compute Instance の種類によってスペックを自由に変更することができます。

### 特徴的な機能
####  コード補完 (Code Completion)
Ctrl + Space でコード補完機能が利用できます。

#### 変数エクスプローラー (Varible Explore)
Python のオブジェクトの名前、種類、長さ、サンプルデータを確認することができます。


#### 他の IDE・エディタとの連携
JupyterLab, Jupyter Notebook, Visual Studio Code に切り替えて作業を続けることができます。

<br />

---

## 自動機械学習 AutoML

自動機械学習 (AutoML) は、シンプルな設定だけで **特徴量エンジニアリング** + **アルゴリズムとパラメータ選択** のさまざまなパターンを並列でモデル学習し、得られたモデルの **精度検証や解釈** を自動で行うことができる機能です。

Microsoft Research が開発したメタ学習のアルゴリズム[^1]を利用して効率的に精度が高いパイプラインを探索しています。

<img src="https://docs.microsoft.com/en-us/azure/machine-learning/media/concept-automated-ml/automl-concept-diagram2.png" width="800" />

操作インタフェースとして Python SDK、 CLI、 Azure ML Studio (Web UI) の 3 つの API・インターフェースから利用することができます。Azure ML Studio は非常に便利なのですが、設定項目が最小限度に抑えられているため、細かい設定をしたい場合や操作履歴を正確に残しておきたい場合は、Python SDK や CLI といったコード・コマンドを利用します。


### サポートされているシナリオ
#### 表形式データ
表形式データが利用できます。従来の機械学習手法を中心とした機械学習アルゴリズムが適用されます[^2]。回帰、分類、時系列予測が利用できます。非教師なし学習手法のクラスタリングなどは利用できません。

#### Computer Vision (preview)
画像データが利用できます。深層学習の手法を中心したアルゴリズムが適用されます。画像分類 (マルチクラス、マルチラベル)、オブジェクト検知、インスタンスセグメンテーションが利用できます。

#### NLP (preview)
テキストデータが利用できます。深層学習の手法を中心としたアルゴリズムが適用されます。テキスト分類 (マルチクラス、マルチラベル)、名前付きエンティティ認識 (NER) が利用できます。


### 参考情報
- [自動機械学習 (AutoML) とは](https://docs.microsoft.com/ja-jp/azure/machine-learning/concept-automated-ml)


<br />

---

## デザイナー Designer

デザイナー (Designer() は直感的なマウス操作でモデル学習・推論のパイプラインを構築し実行することができる UI 機能です。Microsoft が用意している prebuild のモジュール以外にも、ユーザー自信でコンポーネント (Component) を作ることもでき、あらゆるパイプライン要件に柔軟に対応しています。

<img src="https://docs.microsoft.com/en-us/azure/machine-learning/media/concept-designer/designer-drag-and-drop.gif" width="800" />


### 参考情報
- [Azure Machine Learning デザイナーとは](https://docs.microsoft.com/ja-jp/azure/machine-learning/concept-designer)
- [Azure Machine Learning コンポーネントとは](https://docs.microsoft.com/ja-jp/azure/machine-learning/concept-component)


<br />

---

## Frequently Asked Question

- Python や機械学習の知識が無い場合でも 自動機械学習 (AutoML) やデザイナー (Designer) は利用できますか？
    - Azure Machine Learning Studio の UI 機能を利用すれば簡単にモデルを作ることができます。しかしながら、モデルの要件によっては、構築されたモデルの精度を詳細に検証したり、モデルの妥当性を確認することが必要になります。となると、やはり機械学習・統計の知識が必要になってきますし、Python の知識があった方がより細かい操作を行うことができます。


[^1]: [Probabilistic Matrix Factorization for Automated Machine Learning](https://www.microsoft.com/en-us/research/publication/probabilistic-matrix-factorization-for-automated-machine-learning/)


[^2]: 一部 Neural Network による特徴量エンジニアリングや機械学習アルゴリズムの手法もサポートしています。