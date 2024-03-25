# website
WASA Rocket's website.

# Git Repository Model
このレポジトリは，GitHub Flowをベースとしつつ、Git Flowの考え方も一部取り入れて運用しています。
## branch list
- main
  - メインブランチでデプロイされている。本番環境なので，常に完璧に動く状態にする必要がある。**ここで作業はできません。**
- release
  - 作業が完了したfeatureの変更内容を統合し、リリース前の最終的な調整を行うためのブランチ。ここでテストやバグ修正を行い，リリース可能な状態になったら，mainにマージすることで本番環境へのデプロイを行う。
- \[feature\]：例）10-add-list-view　など
  - バグ修正や新機能開発など一般的な作業を行う，最も使われるブランチ。mainからそれぞれブランチを切って，各自作業する。接頭辞には関連するissue番号をつける。
- hotfix
  - 緊急のバグ修正などに対応するために，masterから直接ブランチを切って作業する，特殊で一時的なブランチ。

## 実際の流れ
1. issueを発行してfeatureブランチを切る
   1. 何か作業したくなった（バグ修正，新機能開発など何でも）ときに，Githubで[issueを発行](https://github.com/WASA-Rocket/website/issues)する。**このときissueのtitleは，英語小文字と半角スペースのみを使うこと。（数字や記号，全角文字は禁止）**
   2. issue詳細ページの右側サイドバーのDevelopment欄にある「Create a branch」を押して，ブランチを切る。設定画面では，特に何も変えずにデフォルトのまま「Create branch」に進んで構わない。ここで自動的にmainからfeatureブランチが切られる。
   3. 「Checkout in your local repository」画面のコマンド２行をコピーして，ターミナルで実行する。こうすることで，自分のPCで先ほど作成したfeatureブランチに入ることができる。
2. featureブランチで作業をする。いつも通りadd,commit,pushしてください
3. 作業完了〜mainマージ
   1. 作業が完了したら，いつも通りpushまで行う。
   2. Githubで[Pull requestsを開く](https://github.com/WASA-Rocket/website/pulls)。
