---
title: 共识机制
description: 解释分布式系统中的协商一致协议及其在以太坊中扮演的角色。
lang: zh
---

“共识机制”一词常常泛指“权益证明”、“工作量证明”或“权威证明”协议。 不过，这些协议只是共识机制的组成部分，用于防范[女巫攻击](/glossary/#sybil-attack)。 共识机制是由一整套想法、协议和激励构成的体系，使得一系列分布式节点能够就区块链状态达成一致。

## 前提条件 {#prerequisites}

为了更好地理解此页面，我们建议你先阅读[以太坊简介](/developers/docs/intro-to-ethereum/)。

## 什么是共识？ {#what-is-consensus}

我们所说的共识，是指达成了广泛的一致。 比如，一群人去看电影， 如果他们对于提议“看某部电影”没有任何异议，那么就可以说共识达成了。 如果存在异议，那么他们就必须通过某种方法决定看哪一部电影。 在极端情况下，这群人就会分开。

对于以太坊区块链来说，达成共识的过程是标准化的，达成共识意味着全网络中至少 66% 的节点就网络的全局状态达成一致。

## 什么是共识机制？ {#what-is-a-consensus-mechanism}

共识机制是一整套由协议、激励和想法构成的体系，使得整个网络的节点能够就区块链状态达成一致。

以太坊采用基于权益证明的共识机制，其加密经济的安全性来自于对质押人的锁定资本实施的一系列奖励和罚没措施。 这种激励体系鼓励各个质押人诚信运行验证者节点，并惩罚那些有不良行为的质押人，让攻击网络的行为付出极其高昂的代价。

还有一个协议，用于规范如何选择诚实的验证者，让它们提议或验证区块、处理交易并投票支持其链头部的视图。 极少数情况下，如果链头部附近的同一位置存在多个区块，就会利用一个分叉选择机制来选择区块组成“最重的”链。区块权重根据为相应区块投票的验证者数量进行计算，并由验证者质押的以太币余额进行加权。

有些关于共识的重要概念并未在规范中明确定义，例如由潜在“带外社交协调”提供的额外安全保障，可作为防止网络攻击的最后防线。

这些部分共同组成了共识机制。

## 共识机制类型 {#types-of-consensus-mechanisms}

### 基于工作量证明 {#proof-of-work}

和比特币类似，以太坊也曾经使用基于**工作量证明 (PoW)** 的共识协议。

#### 区块创建 {#pow-block-creation}

矿工相互竞争以创建新的包括已处理交易的区块。 优胜者将与网络中的其他矿工分享该新区块，以获得新铸造的以太币。 数学问题解决速度最快的计算机可以在比赛中获胜。 这将生成当前区块和之前的区块之间的加密链接。 解决此问题就是要在“工作量证明”中开展的工作了。 规范链随后由一条叉选择规则确定，该规则选择了一组区块，这些区块在挖矿方面做得最多。

#### 安全性 {#pow-security}

因为用户需要拥有网络中 51% 的算力才能够欺骗整条链，因此网络的安全得以保证。 这将需要巨大的设备与能源投入，支出很有可能超过收益。

关于[工作量证明](/developers/docs/consensus-mechanisms/pow/)的更多信息

### 基于权益证明 {#proof-of-stake}

以太坊目前使用基于**权益证明 (PoS)** 的共识协议。

#### 区块创建 {#pos-block-creation}

验证者创建区块。 每个时隙中都会随机选择一个验证者成为区块提议者。 区块提议者的共识客户端请求配对执行客户端对交易打包，作为“执行负载”。 然后它们将“执行负载”包装成共识数据并形成一个区块，再把这个区块发送给以太坊网络上的其他节点。 这样的区块生产会得到以太币奖励。 在极少数情况下，一个时隙中产生了多个可能的区块，或节点在不同时间收到区块，分叉选择算法就会选择使形成的链具有最大认证权重的那个区块（认证权重是指为该区块提供认证的验证者数量，并根据验证者质押的以太币余额调整）。

#### 安全性 {#pos-security}

权益证明体系保障加密经济的安全，因为攻击者若试图控制整条链，就必须销毁大量以太币。 奖励机制会奖励诚实的质押人，而惩罚机制则阻止质押人作出恶意行为。

有关[权益证明](/developers/docs/consensus-mechanisms/pos/)的更多信息

### 直观指南 {#types-of-consensus-video}

观看视频，详细了解以太坊采用的不同类型共识机制：

<YouTube id="ojxfbN78WFQ" />

### Sybil 抗性和链选择 {#sybil-chain}

仅仅工作量证明和权益证明还不能成为共识协议，然而为了简便起见，通常将它们称为共识协议。 它们实际上是女巫攻击防御机制和区块作者选择器；它们是决定最新区块的作者的一种方式。 另一个重要组成部分是链选择（又称分叉选择）算法，它让节点可以在同一位置有多个区块的情况下在链头部选择一个正确区块。

**女巫攻击防御**衡量一种协议如何抗衡女巫攻击。 防御这种攻击对去中心化区块链至关重要，并使矿工和验证者能够在资源投入的基础上获得平等奖励。 通过让用户消耗大量能源或提供大量抵押品，工作量证明和权益证明可以防止这种情况。 这些保护措施通过经济手段对女巫攻击形成威慑。

**链选择规则**用于决定哪条链才是“正确”的。 比特币使用“最长链”规则。这意味着，任何最长的区块链，都会被其他节点作为有效链接受并与之协作。 对于工作量证明链，最长链由链上累积的工作量证明总难度决定。 以太坊曾经也使用过最长链规则；然而权益证明机制下运行的以太坊采用了经过更新的分叉选择算法，衡量链的“权重”。 权重是验证者投票的累积总数，并以验证者质押的以太币余额加权。

以太坊使用被称为 [Gasper](/developers/docs/consensus-mechanisms/pos/gasper/) 的共识机制，该机制结合了 [Casper 友好的最终确定性工具权益证明](https://arxiv.org/abs/1710.09437)和 [GHOST 分叉选择规则](https://arxiv.org/abs/2003.03052)。

## 延伸阅读 {#further-reading}

- [什么是区块链共识算法？](https://academy.binance.com/en/articles/what-is-a-blockchain-consensus-algorithm)
- [什么是 Nakamoto 共识？ 完整的初学者指南](https://blockonomi.com/nakamoto-consensus/)
- [Casper 的工作原理](https://medium.com/unitychain/intro-to-casper-ffg-9ed944d98b2d)
- [关于工作量证明区块链的安全性和性能](https://eprint.iacr.org/2016/555.pdf)
- [拜占庭问题](https://en.wikipedia.org/wiki/Byzantine_fault)

_还有哪些社区资源对你有所帮助？ 请编辑本页面并添加！_

## 相关主题 {#related-topics}

- [工作量证明](/developers/docs/consensus-mechanisms/pow/)
- [矿工](/developers/docs/consensus-mechanisms/pow/mining/)
- [权益证明](/developers/docs/consensus-mechanisms/pos/)
- [权威证明](/developers/docs/consensus-mechanisms/poa/)