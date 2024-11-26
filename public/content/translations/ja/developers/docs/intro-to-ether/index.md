---
title: イーサ入門
description: デベロッパーによるイーサ暗号通貨の紹介
lang: ja
---

## 前提知識 {#prerequisites}

このページをよりよく理解するために、まずは[イーサリアム入門](/developers/docs/intro-to-ethereum/)を読むことをお勧めします。

## 暗号通貨とは {#what-is-a-cryptocurrency}

暗号通貨は、ブロックチェーンベースのレジャー(台帳)によって保護された交換媒体です。

交換媒体とは、商品やサービスの対価として広く受け入れられているもので、レジャーとはトランザクションを記録するデータの保管場所のことです。 ブロックチェーン技術は、信頼できる第三者にレジャーを維持してもらうことなく、ユーザーがレジャー上でトランザクションを行うことを可能にします。

最初の暗号通貨は、サトシ・ナカモトが作ったビットコインです。 2009年にビットコインがリリースされて以来、多くの異なるブロックチェーンで何千もの暗号通貨が作られました。

## イーサとは {#what-is-ether}

**イーサ(ETH)**は、イーサリアムネットワーク上で広く使用されている暗号通貨です。 基本的には、トランザクションフィーの支払いとして唯一認められているもので、[マージ](/roadmap/merge)後は、メインネットでブロックの検証や提案にも必要となっています。 また、イーサは[分散型金融(DeFi)](/defi)融資市場での主要な担保として、NFT市場でのアカウント単位として、サービスの実行や現実世界の商品の販売で得られる支払いとしてなどにも使用されています。

イーサリアムでは、デベロッパーが[**分散型アプリケーション(Dapp)**](/developers/docs/dapps)を作成でき、すべてのDappは1つの計算能力のプールを共有します。 この共有プールには限りがあるので、誰が使用するかを判断するためのメカニズムを必要とします。 メカニズムがなければ、ある分散型アプリ(Dapp)が偶発的または悪意を持って、すべてのネットワークリソースを消費してしまい、他のユーザーがアクセスできなくなる恐れがあります。

イーサ暗号通貨は、イーサリアムのコンピューティング能力の価格設定メカニズムに対応しています。 トランザクションを行うには、ブロックチェーン上でトランザクションを認識してもらうためにイーサを支払う必要があります。 これらの使用料は[ガス代](/developers/docs/gas/)として知られており、ガス代は処理を実行するために必要な計算力の量と、その時のネットワーク全体の計算力の需要により決まります。

そのため、悪意のある分散型アプリ(Dapp)が無限ループを送信したとしても、最終的には保有しているイーサを使い果たしてトランザクションが終了し、ネットワークが正常に戻ることになります。

[広く一般的](https://www.reuters.com/article/us-crypto-currencies-lending-insight-idUSKBN25M0GP#:~:text=price%20of%20ethereum)にイーサリアムとイーサが[混同](https://www.cnn.com/2021/03/14/tech/nft-art-buying/index.html#:~:text=price%20of%20ethereum)されますが、「イーサリアムの価格」について話されている時は、イーサの価格を意味します。

## イーサのミント {#minting-ether}

ミント(鋳造)とは、イーサリアムのレジャー(台帳)に新しいイーサが作成されるプロセスのことを指します。 イーサリアムの基礎となるプロトコルが新しいイーサを作り出すのであって、ユーザーがイーサを作り出すことはできません。

イーサは提案された各ブロックの報酬と、コンセンサスに関連するその他のバリデータの活動に対して、エポックチェックポイントごとにミントされます。 発行される総額は、バリデータの数と、バリデータがステーキングしたイーサ量に依存します。 すべてのバリデータが誠実でオンラインであるという理想的な場合では、発行された総額はバリデータ間で均等に分配されるようになっていますが、実際はバリデータのパフォーマンスに応じて変動します。 発行総額の約1/8はブロック提案者に、残りは他のバリデータに分配されます。 また、ブロック提案者はトランザクションフィーやMEV関連の収入からチップを獲得しますが、これらは新規発行ではなく、リサイクルされたイーサから支払われます。

## イーサの焼却 {#burning-ether}

イーサは、ブロック報酬によって作成することも、「焼却(バーン)」と呼ばれるプロセスによって破壊することもできます。 イーサが焼却されると、永久に流通できなくなります。

イーサリアムの全トランザクションで、イーサの焼却が発生します。 ユーザーがトランザクションフィー(手数料)を支払うと、トランザクションの需要に応じてネットワークにより設定されたベースガスフィー(基本ガス手数料)が破棄されます。 これは可変ブロックサイズと最大ガスフィーと相まって、イーサリアムでのトランザクションフィーの見積もりを簡素化します。 ネットワーク需要が高い場合は、 [ブロック](https://etherscan.io/block/12965263)がミントされるイーサよりも多くのイーサを焼却させ、イーサの発行を効果的に相殺することができます。

ベースフィーが焼却されると、ブロック生成者のトランザクション操作能力が低下します。 例えば、ブロック生成者がベースフィーを受け取った場合、自分自身のトランザクションを無料にするために、生成するブロックに自分のトランザクションを追加したり、他の人のベースフィーを上げることができます。 もしくは、オフチェーンの一部のユーザーにベースフィーを払い戻すことができ、より不透明で複雑なトランザクションフィー市場につながるおそれがあります。

## イーサの通貨単位 {#denominations}

イーサリアムのトランザクションの多くは、小さな金額で行われるため、イーサには、より小さな会計単位として参照できる通貨単位が設定されています。 これらの通貨単位で、特に重要なのがweiとgweiです。

weiは最小のイーサ通貨単位で、[イーサリアムイエローペーパー](https://ethereum.github.io/yellowpaper/paper.pdf)のような多くの技術的な実装では、すべての計算はweiで行われます。

gweiはgiga-weiの略で、イーサリアムのガス代を記述するためによく使用されます。

| 通貨単位 | イーサ              | 使用例                 |
| ---- | ---------------- | ------------------- |
| wei  | 10<sup>-18</sup> | 技術的な実装              |
| gwei | 10<sup>-9</sup>  | ギガ表記により読みやすく表示したガス代 |

## イーサの送金 {#transferring-ether}

イーサリアムの各トランザクションには、送信者のアドレスから受信者のアドレスへのイーサ送金額を指定する`value`フィールドが含まれています(単位はwei)。

受信者のアドレスが[スマートコントラクト](/developers/docs/smart-contracts/)の場合、この送金されたイーサは、スマートコントラクトがコードを実行する際のガス代の支払いに使用することができます。

[トランザクションの詳細](/developers/docs/transactions/)

## イーサの照会 {#querying-ether}

[アカウント](/developers/docs/accounts/)の`balance`フィールドを確認すると、すべてのアカウントのイーサ残高を照会することができます(weiを単位とするイーサ保有量が表示)。

[Etherscan](https://etherscan.io)は、ウェブベースのアプリを介してアドレスの残高を調べる人気のツールです。 例えば、 [このEtherscanのページ](https://etherscan.io/address/0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae)はイーサリアム・ファウンデーションの残高を表示しています。 アカウント残高は、ウォレットやノードにリクエストすることで確認できます。

## 参考文献 {#further-reading}

- [イーサとイーサリアムの定義](https://www.cmegroup.com/education/courses/introduction-to-ether/defining-ether-and-ethereum.html) – _CME Group_
- [イーサリアムホワイトペーパー](/whitepaper/): イーサリアムの当初の提案。 本書はイーサの説明とその作成の背後にある理由について記述。
- [Gwei Calculator](https://www.alchemy.com/gwei-calculator): wei、gwei、イーサの変換ツール。 wei、Gwei、ETHの任意の数値を入力するだけで、自動変換。

_役に立つコミュニティリソースをご存知の場合は、 このページを編集して追加してください。_