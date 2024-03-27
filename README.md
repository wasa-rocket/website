# website
WASA Rocket's website.

# Git Branch Strategy（ブランチ戦略）
このレポジトリは，GitHub Flowをベースとしつつ、Git Flowの考え方も一部取り入れて運用しています。
## branch list
- main
  - メインブランチでデプロイされている。本番環境なので，常に完璧に動く状態にする必要がある。**ここで作業はできません。**
- release
  - 作業が完了したfeatureの変更内容を統合し、リリース前の最終的な調整を行うためのブランチ。プレビューデプロイされているので，ここでテストやバグ修正を行って，リリース可能な状態にする。その後mainにマージすることで本番環境へのデプロイを行う。
- \[feature\]：例）10-add-list-view　など
  - バグ修正や新機能開発など一般的な作業を行う，最も使われるブランチ。releaseからそれぞれブランチを切って，各自作業する。接頭辞には関連するissue番号をつける。
- hotfix
  - 緊急のバグ修正などに対応するために，masterから直接ブランチを切って作業する，特殊で一時的なブランチ。

## 参考資料
- [GitHub Flow with GitOpsの導入](https://techblog.zozo.com/entry/github-flow-with-gitops)
- [git flowとgithub flow　開発運用方法の違い](https://qiita.com/Yu-kiFujiwara/items/40b503683d6525c8d274)
