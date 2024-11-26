---
title: 翻译计划常见问题 (FAQ)
lang: zh
description: 关于 ethereum.org 翻译计划的常见问题
---

# ethereum.org 翻译指南 {#translating-ethereum-guide}

如果你是翻译计划的新手，而且不知道从何下手，这里的一些常见问题会有所帮助。 使用本指南来寻找常见问题的答案。

## 我是否可以通过翻译 ethereum.org 而获得补偿？ {#compensation}

ethereum.org 是一个开放源代码的网站，这意味着任何人都可以参与并作出贡献。

ethereum.org 翻译计划是这种做法的延伸，其组织方式考虑到了类似的理念。

翻译计划的目标是使人人都能访问以太坊的内容，而不论他们使用哪种语言。 它使得任何双语人员都能够参与以太坊生态系统，并以方便的方式作出贡献。

因此，这个翻译计划是开放和自愿的，参与不会得到补偿。 如果我们要按照翻译字数对翻译人员提供补偿，我们只会邀请那些有足够翻译经验的人（专业翻译人员）加入这个翻译计划。 这将导致翻译计划具有排他性，并阻止了我们实现所概述的目标。这个目标具体而言就是：允许所有人参加和参与到生态系统中。

我们尽一切努力使我们的贡献者能够在以太坊生态系统中取得成功；许多非货币性的激励措施已经到位，如：[提供 POAP 徽章](/contributing/translation-program/acknowledgements/#poap)和[翻译人员证书](/contributing/translation-program/acknowledgements/#certificate)，整理[翻译排行榜](/contributing/translation-program/acknowledgements/)和[列出我们网站上的所有翻译人员](/contributing/translation-program/contributors/)。

## 如何翻译带有 `<HTML tags>` 的语句？ {#tags}

并非每个语句都以纯文本形式书写。 部分语句包含 HTML 标签 (`<0>` `</0>`) 等混合脚本。通常是句子中的超链接或不同格式。

- 翻译标签内的文本，但不翻译标签本身。 不能翻译或删除 `<` 和 `>` 中的任何内容。
- 为了保持语句完整，建议你点击左下方的"Copy Source"按钮。 这将复制原文语句并粘贴到文本框内。 这让你明确标签的位置，有助于避免错误。

![高亮显示“复制原文”按钮的 Crowdin 界面](./html-tag-strings.png)

你可以在语句中移动标签的位置，使其在句子中更加自然 – 但请确保移动整个标签。

更多关于处理标签和代码片段的详细信息，请参阅 [《ethereum.org 翻译风格指南》](/contributing/translation-program/translators-guide/#dealing-with-tags)。

## 上下文在哪里？ {#strings}

通常情况下，仅靠原文语句可能不足以让你提供准确翻译。

- 查看“屏幕截图”和“上下文”以获取更多信息。 在原文语句部分，你将看到附加的屏幕截图，从而了解使用该语句的上下文。
- 如果仍然不确定，请在“COMMENTS”部分中添加标记。 [不知道如何评论？](#comment)

![如何通过屏幕截图为语句提供上下文信息](./source-string.png)

![为上下文添加一个示例屏幕截图](./source-string-2.png)

## 如何留下评论或问题？ 我想标记一个问题或错别字... {#comment}

如果你想标记某个需要注意的语句，请随时提交评论。

- 点击右上角菜单栏的第二个按钮。 隐藏标签将出现在你的右侧。 留下新评论并点击底部的“Issue”复选框。 你可以从下拉菜单选择一个选项，表明问题类型。
- 问题一旦提交，就将报告给我们的团队。 我们将解决这个问题，并通过回复评论和关闭问题来让你知道。
- 如果你提供不正确的翻译，那么在下次审核期间，母语人士将审核该翻译和你建议的替代方案。

![如何发表评论和提出问题](./comment-issue.png)

## 什么是翻译记忆库 (TM)？ {#translation-memory}

翻译记忆库 (TM) 是一项 Crowdin 功能，可存储所有先前已翻译的 [ethereum.org](http://ethereum.org/) 中的语句。 翻译过的语句会自动保存到 TM 中。 这款实用工具可以帮助你节省时间！

- 请看“TM and MT Suggestions”部分，你会看到其他翻译人员如何翻译相同或类似语句。 如果发现匹配率很高的建议，可以点击以引用该翻译内容。
- 如果列表中没有任何内容，你可以搜索 TM 中以前做过的翻译并重新使用以保持一致性。

![翻译记忆库屏幕截图](./translation-memory.png)

## 如何使用 Crowdin 词汇表？ {#glossary}

以太坊术语是我们翻译工作的另一个关键部分，因为通常新的技术术语在许多语言中尚未本地化。 另外，有些术语在不同背景下的含义不同。 [关于以太坊术语翻译的更多信息](#terminology)

Crowdin 词汇表是阐明术语和定义的最佳位置。 有两种方法来参照词汇表。

- 首先，当你在原文语句上发现带下划线的术语时，将鼠标移到上面，即可看到简要定义。

![词汇表定义示例](./glossary-definition.png)

- 第二，如果看到一个不熟悉但没有下划线的术语，你可以在词汇表选项卡（右侧列第三个按钮）中搜索。 你会找到特定术语和项目中常用术语的解释。

![Crowdin 中“词汇表”选项卡位置的屏幕截图](./glossary-tab.png)

- 如果仍然找不到，即可借此机会添加新术语！ 我们建议你在搜索引擎上进行查找，并将描述添加到词汇表中。 这将非常有助于其他翻译人员更好地理解该术语。

![如何向 Crowdin 添加词汇表术语的屏幕截图](./add-glossary-term.png)

### 术语翻译政策 {#terminology}

_适用于名称（商标、公司、人员）和新技术术语（信标链、分片链等）_

以太坊提出了很多最近出现的新术语。 由于没有各自语言的官方译本，因此翻译人员对有些术语的翻译不同。 这种不一致会造成误解，降低可读性。

由于语言多样性和每种语言的标准化程度不同，几乎不可能提出可适合所有支持语言的统一术语翻译政策。

经过慎重考虑，我们决定将最常用的术语留给你们翻译人员去翻译。

如果发现你不熟悉的术语，我们建议你：

- 参考[词汇表](#glossary)，你可能会发现其他翻译人员以前的译法。 如果你认为之前翻译的术语不恰当，请随时通过向 Crowdin 词汇表添加新术语来恢复你的译文。
- 如果词汇表中之前没有翻译，我们建议你在搜索引擎或媒体文章中查找，显示该术语在社区中的实际使用情况。
- 如果根本找不到任何参考资料，请按你的直觉和理解翻译成自己的语言！
- 如果不太确定，可以不翻译这一术语。 有时，英语术语足以提供准确定义。

我们建议不翻译品牌、公司和人员名称，因为翻译可能会造成不必要的混乱和搜索引擎优化困难。

## 审核流程如何运作？ {#review-process}

为确保我们翻译的质量和一致性达到一定的水平，我们与 [Acolad](https://www.acolad.com/)合作，它是全球最大的语言服务提供者之一。 Acolad 拥有 20,000 名专业语言学家，这意味着他们可以针对我们所需的每种语言和内容类型提供专业的审稿人。

审核过程是简单明确的；在一个[内容存储桶](/contributing/translation-program/content-buckets)被全部翻译后，我们便会安排对该内容库进行审核。 审核过程直接在 Crowdin 进行。 当审核完成后，我们将用翻译内容更新网站。

## 如何以我的语言添加内容？ {#adding-foreign-language-content}

目前，所有非英文内容都是直接从英文源内容翻译而来，任何不是以英文形式存在的内容都不能添加到其他语言中。

要为 ethereum.org 推荐新内容，你可以在 GitHub 上[创建一个提议](https://github.com/ethereum/ethereum-org-website/issues)。 如果要添加的话，内容将用英语编写并使用 Crowdin 翻译成其他语言。

我们计划在不久的将来支持对于非英文内容的添加。

## 联系我们 {#contact}

感谢阅读所有内容。 我们希望这对你加入我们的计划有所帮助。 欢迎加入我们的 [Discord 翻译频道](https://discord.gg/ethereum-org)，提出问题并与其他翻译人员合作，或者通过 translations@ethereum.org 联系我们！