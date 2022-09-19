---
id: workspace-design
title: "ワークスペースの設計"
---


Workspace (ワークスペース) は Azure Machine Learning の最小サービス単位です。要件によって Azure Machine Learning を構築する際は Workspace (ワークスペース) を複数構築することが必要になります。本ページでは一般的な Workspace の構成方法をご紹介します。

## 環境ごとの分離
一般的な IT システムと同様に **開発環境**、**テスト環境**、**本番環境** のようにシステムを分離することが推奨です。開発環境は試行錯誤をするところで自由度が高い一方、本番運用を想定し始めるテスト環境や本番環境は徐々にユーザーのアクセス制御を厳しく設定します。

### 参考情報
- [機械学習環境とロールベースのアクセス制御](https://docs.microsoft.com/ja-JP/azure/cloud-adoption-framework/innovate/best-practices/set-up-ml-workspaces#machine-learning-environments-and-role-based-access-control)

## プロジェクト単位の分離
現在 (2022年9月)、Azure Machine Learning は Workspace 内部での細かいアクセス制御ができません。他人が作成したコードや実験履歴が閲覧できます。そのため他人や他の部署に公開したくない場合にはセキュリティ境界線ごとに Workspace を作成します。

:::caution
`Datastore` で Identity ベースのアクセスに対応しているもの利用することも一つの方法ですが、ロードされたデータが Jupyter Notebook や実験管理のメトリックに出力されていることがあるため注意が必要です。
:::

## 個人単位の分離
研究開発部門などでは Data Scientist が個人レベルで自由に触れる環境のニーズが高く、個人単位で Workspace を構築することが多々あります。

## その他

GDPR などの地域の法令の関係でデータの移動 (EU から Japan etc) が難しい場合には、Workspace をその地域ごとに構築することが望ましいケースがあります。


## 参考情報
- [Azure Machine Learning 環境の整理とセットアップ](https://docs.microsoft.com/ja-JP/azure/cloud-adoption-framework/ready/azure-best-practices/ai-machine-learning-resource-organization)
- [ワークスペースの設定方法](https://docs.microsoft.com/ja-JP/azure/cloud-adoption-framework/innovate/best-practices/set-up-ml-workspaces)