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

自動機械学習 Automated Machine Learning (aka AutoML) は、シンプルな設定だけで **特徴量エンジニアリング** + **アルゴリズムとパラメータ選択** のさまざまなパターンを並列でモデル学習し、得られたモデルの **精度検証や解釈** を自動で行うことができる機能です。

Microsoft Research が開発したメタ学習のアルゴリズム[^1]を利用して効率的に精度が高いパイプラインを探索しています。

<img src="https://docs.microsoft.com/en-us/azure/machine-learning/media/concept-automated-ml/automl-concept-diagram2.png" width="500" />

### 操作インターフェース

自動機械学習は Python SDK、 CLI、 Azure ML (Web UI) の 3 つの API・インターフェースから利用することができます。

### 表形式データ

- 表形式データ
    - 分類 Classification
    - 回帰 Regression
    - 時系列予測 Forecasting
- Computer Vision (Preview)
    - 画像分類 Classification
        - 複数クラス Multi-class
        - 複数ラベル Multi-label
    - オブジェクト検知 Object detection
    - インスタンスセグメンテーション Instance segmentation
- Natural language processing (Preivew)
    - テキスト分類 Image classification
        - 複数クラス Multi-class
        - 複数ラベル Multi-label
    - 名前付きエンティティの認識 Named Entity Recognition

<br />

---

## デザイナー Designer

デザイナー Designer は直感的なマウス操作でモデル学習・推論のパイプラインを構築し実行することができる UI 機能です。Microsoft が用意している prebuild のモジュール以外にも、ユーザー自信でコンポーネント Components を作ることもでき、あらゆるパイプライン要件に柔軟に対応しています。

<img src="https://docs.microsoft.com/en-us/azure/machine-learning/media/concept-designer/designer-drag-and-drop.gif" width="500" />

<br />

---

## Frequently Asked Question

- Python や機械学習の知識が無い場合でも AutoML や Designer は利用できますか？
    - Azure Machine Learning Studio の UI 機能を利用すれば簡単にモデルを作ることができます。しかしながら、モデルの要件によっては、構築されたモデルの精度を詳細に検証したり、モデルの妥当性を確認することが必要になり、やはり機械学習・統計の知識が必要になってきます。


[^1]: [Probabilistic Matrix Factorization for Automated Machine Learning](https://www.microsoft.com/en-us/research/publication/probabilistic-matrix-factorization-for-automated-machine-learning/)