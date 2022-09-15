---
id: azureml-compute
title: "計算リソース"
---

モデル学習や推論は計算リソース上で処理が実行されます。Azure Machine Learning は計算リソースとして Azure Machine Learning で管理しているマネージドな計算リソースとして Compute Cluster & Compute Instance が利用できます。また Kubernetes など外部の計算リソースをアタッチして利用することもできます。本ページでは Azure Machine Learning で利用可能な計算リソースの一覧とそれぞれの特徴を記載します。


## マネージドな計算リソース

Azure Machine Learning が提供するコンピューティングインスタンス (Compute Instance) とコンピューティングクラスター (Compute Clusters) の比較をします。

|          |Compute Instance | Compute Clusters  |
|---------|---------|---------|
|用途|データサイエンティスト一人ひとりに付与される自由度の高い開発/テスト環境|中大規模な学習・推論、分散・並列処理を実行するクラスター環境|
|方式|インタラクティブ|非インタラクティブ (バッチ)|
|スケーラビリティ|単一インスタンス|最大 6500 ノードまで拡張可能 (MPI 非実行時)|
|起動停止|スケジュール設定可|ワークロードに応じて自動で起動停止|
|低優先度|非対応|対応|


## アタッチする計算リソース



## 推論に特化した計算リソース



## 計算リソースの選択や構成における考慮事項

### Public IP or No Public IP