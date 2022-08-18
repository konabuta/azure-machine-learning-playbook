---
id: mlops-security
title: MLOps におけるセキュリティ

---

本ページではセキュリティを考慮した MLOps (= DevSecOps) のベストプラクティスを紹介していきます。

# DevSecOps の概念

近年、機械学種システムのセキュリティや攻撃が注目されています。そこで DevSecOps (開発 dev + セキュリティ sec + 運用 ops) というソフトウェア開発の全てのフェーズにおいてセキュリティのベストプラクティスを遵守する開発方針・概念が出てきました。従来のソフトウェアを作成してからセキュリティレビューを行い問題を発見に修正していたプロセスではなく、設計・計画フェーズからセキュリティを考慮した開発が機械学習の領域でも重要視されてきています。


<br />

# 機械学習ライフサイクルにおける DevSecOps

機械学習の観点で、DevOps (継続的インテグレーション (CI) と継続的デリバリー (CD)) の各プロセスにおけるセキュリティについて見ていきます。

<img src="https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/secure/media/devsecops-controls.png" />

各プロセスにおけるベストプラクティスについて説明していきます。

**プロセス一覧**
- [計画と開発 (Plan and Develop)](#計画と開発-plan-and-develop)
- [コードをコミットする (Commit the code)](#コードをコミットする-commit-the-code)
- [ビルドおよびテスト (Build and test)](#ビルドおよびテスト-build-and-test)
- [実稼働環境に移行 (Go to production)](#実稼働環境に移行-go-to-production)
- [運用 (Operate)](#運用-operate)

## 計画と開発 (Plan and Develop)
アジャイル開発の計画フェーズにおける取り組み例です。

### 脅威モデリング
攻撃者の立場・考え方から、機械学習システムに対する脅威を検出し、軽減策を検討します。[AI/ML システムの依存関係の脅威のモデル化](https://docs.microsoft.com/ja-JP/security/engineering/threat-modeling-aiml#aiml-specific-threats-and-their-mitigations) にはAI・機械学習に固有の脅威の一覧と、それらの脅威に対する軽減策の一覧が含まれています。

まずはシンプルに始めるべく、質問形式で問題を特定していきます。

**一般的なシステム**
- [Microsoft の簡単な質問方法](https://docs.microsoft.com/ja-jp/security/compass/applications-services#simple-questions-method)
- [OWASP 脅威モデリング](https://owasp.org/www-community/Threat_Modeling)

**AI/ML システム**
- [脅威のモデル化における重要な新しい考慮事項](https://docs.microsoft.com/ja-JP/security/engineering/threat-modeling-aiml#key-new-considerations-in-threat-modeling-changing-the-way-you-view-trust-boundariess)


### 統合開発環境の設定
VSCode などの IDE が提供するセキュリティ機能や拡張機能を用いて、開発者が使い慣れた IDE の環境内部で開発プロセスのさまざまな場マンでセキュリティの問題を特定し、必要に応じて修正します。

_TODO: VSCode におけるセキュリティ設定の例_

### Pre-commit フック

また、ソースコードのバージョン管理システムで Git を利用している場合、Commit する前にコードフォーマットやコードにおける機密情報のチェックなどを行う [pre-commit](https://pre-commit.com/) も有効です。

### ピアレビュー
Pull request を通じてピアレビューを行い、コード上の欠陥、バグ、問題を発見します。

### セキュリティ標準コーディング
セキュリティを考慮したコーディングの標準ガイドラインを作成し利用することで、コードの品質を高めることができます。例えば [OWASP Secure Coding Practices-Quick Reference Guide](https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/migrated_content) などが公開されています。

## コードをコミットする (Commit the code)

通常、開発者はコードを GitHub などのサービスを利用してコードを管理します。コードのバージョン管理ができるようになり、チーム内での共有も簡単になります。しかしながら例えば脆弱性を含むコードが共有され、デプロイされてしまう危険もあります。そこでコードをスキャン・解析して、脆弱性や認証情報などを検出し、必要に応じて修正していくことが必要になります。

### 静的なセキュリティテスト
[GitHub Advance Security](https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors) が提供する [CodeQL](https://codeql.github.com/)を利用することでコードに含間れる脆弱性を検出できます。

また、シークレット情報を検出する [Secret Scanning](https://docs.github.com/en/enterprise-cloud@latest/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories) や Seret Scannint の [Push Protection](https://docs.github.com/ja/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning) 機能があります。


### 依存関係の管理
機械学習プロジェクトではオープンソースのパッケージが多用されており、複雑な依存関係で構成されるパッケージを管理していく必要があります。一度インストールしたものを更新せずに使い続けると潜在的な脆弱性の問題する可能性があります。[Dependabot](https://docs.github.com/ja/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning) はコードの情報から利用しているパッケージの脆弱性を検出したり、パッケージを最新に保つための pull request を自動作成する機能を提供しています。



### CI/CD ワークフローのセキュリティ保護
アジャイル開発や自動化を取り入れると、セキュリティの管理が複雑になります。開発者・ITエンジニア・管理者などのそれぞれのステークホルダーのアクセス権限やロール設定を行う必要があります。

_TODO_

## ビルドおよびテスト (Build and test)

_TODO_

## 実稼働環境に移行 (Go to production)

_TODO_

## 運用 (Operate)

_TODO_

## DevSecOps の全体イメージ

_TODO: コードが GitHub に Commit され、モデル学習されたモデルが Managed Online Endpoint にデプロイされる一連の流れのアーキテクチャ図とセキュリティコンポーネントの全体像_


# フレームワーク
セキュリティを考慮したソフトウェア開発のフレームワークを挙げます。

- [Microsoft Secure Development Lifecycle.](https://www.microsoft.com/en-us/securityengineering/sdl/practices)
- [SafeCode fundamental practices for Secure Software Development.](https://safecode.org/uncategorized/fundamental-practices-secure-software-development/)


※本ページでは特定のフレームワークに限定せずに、一般的なベストプラクティスについて言及してきます。




# 参考

- [パイプラインと CI/CD ワークフローをセキュリティで保護する](https://docs.microsoft.com/ja-JP/azure/cloud-adoption-framework/secure/best-practices/secure-devops)