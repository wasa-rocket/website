---
title: "新歓Cansat講座"
excerpt: "
Creating an interactive web application to facilitate equipment management for our robot projects."
date: "2024/04/09"
---
## 回路作成

まずは回路を作りましょう！今回はブレッドボードを使用してモーターとモータードライバを接続する回路を作ります。

### 回路図

以下の図を参考に回路図を作成してみてください ↓↓↓
<img src="/posts/shinkanCansat/cansatCircuits.png" />

### 配線一覧

- モータードライバ ↔ESP32（マイコン）
  - 5V (赤)
  - GND (黒)
  - GPIO x 4 (黄、オレンジ、緑、青)
- モータードライバ ↔DC モーター
  - 2 x 2 本 (黃 x 2、オレンジ x 2)
- モータードライバ ↔ 電源
  - +(赤)
  - -(黒)

(バッテリーとモータはの線の先には xh コネクタが接続されています。ここは xh コネクタにジャンパーワイヤを差し込んでください。)

### 基板の機体取り付け

- 機体の上部にいい感じで取り付けてください。参考画像 ↓
<img src="/posts/shinkanCansat/cansatImage.jpg" />

## スマホ取り付け

- 機体前方の留め具にスマホを取り付けてください。留め具が外れている等の問題があれば、留め具をつけ直してください。スマホは esp32 の給電用なのでスマホがつきさえすれば止め方は何でも構いません。
- usbc↔microusb ケーブルが cansat 用の袋に入っているはずです。このケーブルでスマホと esp32 を接続して esp32 を給電してください。

## プログラミング

### ソースコード

以下の Github リポジトリにソースコードが掲載されていますこれを編集して動かしてみましょう。
https://github.com/wasa-cansat/Shinkan-CanSat
