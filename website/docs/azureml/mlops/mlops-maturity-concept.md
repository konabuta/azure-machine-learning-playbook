---
id: mlops-maturity-concept
title : "コンセプト"
---

## MLOps 成熟度モデルとは？

MLOps 成熟度モデルは MLOps の原則と実践方法を明確にするために策定されました。このモデルを活用することで次の 2 点ができるようになります。

- チーム・組織の MLOps の成熟度を理解する
- MLOps プロジェクトの具体的なゴールや計画を立てる

下記の表は MLOps 成熟度の概要です。

:::note
この MLOps 成熟度モデルはあくまでベースラインとしてご利用いただき、機械学習システムに求められる要件に応じて、それぞれカスタマイズすることを推奨します。
:::


 **Maturity Level**|**Training Process**|**Release Process**|**Integration into app**                                                    
-------|-------|-------|--------
 Level 0 - No MLOps                        | Untracked, file is provided for handoff                                                                                | Manual, hand-off                                                                               | Manual, heavily DS driven                                                   
 Level 1 - DevOps no MLOps                 | Untracked, file is provided for handoff                                                                                | Manual, hand-off to SWE                                                                        | Manual, heavily DS driven, basic integration tests added                    
 Level 2 - Automated Training              | Tracked, run results and model artifacts are captured in a repeatable way                                              | Manual release, clean handoff process, managed by SWE team                                     | Manual, heavily DS driven, basic integration tests added                    
 Level 3 - Automated Model Deployment      | Tracked, run results and model artifacts are captured in a repeatable way                                              | Automated, CI/CD pipeline set up, everything is version controlled                             | Semi-automated, unit and integration tests added, still needs human signoff 
 Level 4 - Full MLOps Automated Retraining | Tracked, run results and model artifacts are captured in a repeatable way, retraining set up based on metrics from app | Automated, CI/CD pipeline set up, everything is version controlled, A/B testing has been added | Semi-automated, unit and integration tests added, may need human signoff    

 
---


## Level 0 : No MLOps
この段階は機械学習プロジェクトでは PoC や実験フェーズと呼ばれることが多いです。Data Scientist は手動で各データソースからデータを取得し、モデルを構築し評価するという作業を探索的にインタラクティブに行います。個人単位や少人数の Data Scientist が主導します。


### 課題
- 再現性
- 品質とセキュリティ
- スケーラビリティ
- その他

### 次に取り組むこと

---

## Level 1 : DevOps no MLOops

### 課題

### 次に取り組むこと

---

## Level 2 : Automated Training

### 課題

### 次に取り組むこと

---

## Level 3 : Automated Model Deployment

### 課題

### 次に取り組むこと

---

## Level 4 : Full MLOps Automated Retraining


### 課題

### 次に取り組むこと
