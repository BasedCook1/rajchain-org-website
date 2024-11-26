---
title: Направления проводимых исследований Ethereum
description: Ознакомьтесь с различными областями проводимых исследований и узнайте, как принять участие.
lang: ru
---

# Направления проводимых исследований Ethereum {#active-areas-of-ethereum-research}

Одно из ключевых преимуществ Ethereum — активное сообщество исследователей и разработчиков, которые постоянно совершенствуют сеть. Множество квалифицированных энтузиастов по всему миру готовы взяться за решение проблем Ethereum, но не всегда легко понять, в чем именно заключаются эти проблемы. На этой странице описаны основные направления проводимых исследований, и она служит примерным руководством по передовым возможностям Ethereum.

## Как работают исследования Ethereum {#how-ethereum-research-works}

Исследования в Ethereum открыты, прозрачны и воплощают принципы [децентрализованной науки (DeSci)](https://hackernoon.com/desci-decentralized-science-as-our-chance-to-recover-the-real-science). Подход заключается в предоставлении инструментов и результатов исследований в как можно более открытом и интерактивном виде, например посредством исполнимых блокнотов. Исследования в Ethereum продвигаются быстро, новые данные публикуются и обсуждаются открыто на форумах, таких как [ethresear.ch](https://ethresear.ch/), а не публикуются в традиционных медиа после прохождения нескольких этапов рецензирования.

## Основные ресурсы по исследованиям {#general-research-resources}

Независимо от конкретной темы, огромное количество информации по исследованиям в Ethereum можно найти на форуме [ethresear.ch](https://ethresear.ch) и в [Discord-канале Eth R&D](https://discord.gg/qGpsxSA). Это основные места, где исследователи Ethereum обсуждают новейшие идеи и возможности разработки.

В этом отчете, опубликованном [DelphiDigital](https://members.delphidigital.io/reports/the-hitchhikers-guide-to-ethereum) в мае 2022 года, представлен хороший обзор дорожной карты Ethereum.

## Источники финансирования {#sources-of-funding}

Вы можете участвовать в исследованиях Ethereum и получать за это деньги! Например, [фонд Ethereum](/foundation/) недавно провел [раунд финансирования "Академические гранты"](https://esp.ethereum.foundation/academic-grants). Информацию о действующих и будущих возможностях финансирования можно найти на [странице грантов Ethereum](/community/grants/).

## Исследования протокола {#protocol-research}

Исследования протокола касаются базового уровня Ethereum — набора правил, определяющих подключение узлов, их взаимодействие, обмен данными Ethereum и их хранение, а также достижение консенсуса касательно состояния блокчейна. Исследования протокола разделены на высшем уровне на две категории: консенсус и исполнение.

### Консенсус {#consensus}

Исследования консенсуса касаются [механизма доказательства доли владения](/developers/docs/consensus-mechanisms/pos/) в Ethereum. Примеры тем исследований консенсуса:

- обнаружение и исправление уязвимостей;
- количественная оценка криптоэкономической безопасности;
- повышение безопасности или производительности форм реализации клиентов;
- и разработка легких клиентов.

Проводимые исследования касаются не только будущего, но и фундаментальной переработки протокола, например финализации в одном слоте, которая позволит значительно улучшить Ethereum. Кроме того, эффективность, безопасность и мониторинг взаимодействия между консенсус-клиентами — тоже важные темы для исследования.

#### Дополнительные материалы {#background-reading}

- [Введение в доказательство доли владения](/developers/docs/consensus-mechanisms/pos/)
- [Документ Casper-FFG](https://arxiv.org/abs/1710.09437)
- [Поясняющая статья Casper-FFG](https://arxiv.org/abs/1710.09437)
- [Документ Gasper](https://arxiv.org/abs/2003.03052)

#### Недавние исследования {#recent-research}

- [Консенсус Ethresear.ch](https://ethresear.ch/c/consensus/29)
- [Дилемма доступности/финализации](https://arxiv.org/abs/2009.04987)
- [Финализация в одном слоте](https://ethresear.ch/t/a-model-for-cumulative-committee-based-finality/10259)
- [Разделение тех, кто предлагает, и тех, кто создает](https://notes.ethereum.org/@vbuterin/pbs_censorship_resistance)

### Исполнение {#execution}

Уровень исполнения связан с выполнением транзакций, работой [виртуальной машины Ethereum (EVM)](/developers/docs/evm/) и созданием полезных нагрузок для передачи на уровень консенсуса. Исследования проводятся в различных направлениях, включая следующие:

- разработка поддержки легких клиентов;
- исследование лимитов газа;
- и добавление новых структур данных (например, деревьев Веркла).

#### Дополнительные материалы {#background-reading-1}

- [Введение в EVM](/developers/docs/evm)
- [Уровень исполнения Ethresear.ch](https://ethresear.ch/c/execution-layer-research/37)

#### Недавние исследования {#recent-research-1}

- [Оптимизация баз данных](https://github.com/ledgerwatch/erigon/blob/devel/docs/programmers_guide/db_faq.md)
- [Окончание действия данных о состоянии](https://notes.ethereum.org/@vbuterin/state_expiry_eip)
- [Пути к окончанию действия данных о состоянии](https://hackmd.io/@vbuterin/state_expiry_paths)
- [Предложение по деревьям Веркла и окончанию действия данных о состоянии](https://notes.ethereum.org/@vbuterin/verkle_and_state_expiry_proposal)
- [Управление историей](https://eips.ethereum.org/EIPS/eip-4444)
- [Деревья Веркла](https://vitalik.eth.limo/general/2021/06/18/verkle.html)
- [Проверка доступности данных](https://github.com/ethereum/research/wiki/A-note-on-data-availability-and-erasure-coding)

## Разработка клиентов {#client-development}

Клиенты Ethereum — это реализации протокола Ethereum. В процессе разработки в клиенты внедряется результаты исследований протокола. Обновляются спецификации и создаются конкретные реализации.

Узел Ethereum должен поддерживать работу двух элементов программного обеспечения:

1. Консенсус-клиент, который следит за вершиной блокчейна, обменивается блоками и обрабатывает логику консенсуса.
2. Клиент исполнения, который поддерживает виртуальную машину Ethereum, выполняет транзакции и смарт-контракты.

Дополнительную информацию об узлах и клиентах, а также список всех текущих реализаций клиентов см. на [странице об узлах и клиентах](/developers/docs/nodes-and-clients/). Историю всех обновлений Ethereum можно найти на [странице истории](/history/).

### Клиенты исполнения: {#execution-clients}

- [Спецификация клиента исполнения](https://github.com/ethereum/execution-specs)
- [Спецификация API исполнения](https://github.com/ethereum/execution-apis)

### Клиенты консенсуса: {#consensus-clients}

- [Спецификация клиента консенсуса](https://github.com/ethereum/consensus-specs)
- [Спецификация Beacon API](https://ethereum.github.io/beacon-APIs/#/Beacon/getStateRoot)

## Масштабирование и производительность {#scaling-and-performance}

Масштабирование Ethereum — это важное направление работы исследователей Ethereum. Текущие подходы включают перенос транзакций в свертки и их удешевление с помощью blob-объектов данных. Вводная информация о масштабировании Ethereum доступна на [этой странице](/developers/docs/scaling).

### Уровень 2 {#layer-2}

Существует несколько протоколов уровня 2, которые масштабируют Ethereum, используя разные техники группировки транзакций и обеспечения их безопасности на уровне 1 Ethereum. Это быстро развивающаяся тема с огромным потенциалом для исследований и разработок.

#### Дополнительные материалы {#background-reading-2}

- [Введение в решения второго уровня](/layer-2/)
- [Polynya: свертки, доступность данных и модулярные цепочки](https://polynya.medium.com/rollups-data-availability-layers-modular-blockchains-introductory-meta-post-5a1e7a60119d)

#### Недавние исследования {#recent-research-2}

- [Справедливый порядок секвенсоров в Arbitrum](https://eprint.iacr.org/2021/1465)
- [Уровень 2 от ethresear.ch](https://ethresear.ch/c/layer-2/32)
- [Дорожная карта с упором на свертки](https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698)
- [L2Beat](https://l2beat.com/)

### Мосты {#bridges}

Такое решение уровня 2, как безопасные и эффективные мосты, требует дополнительных исследований и разработок. Сюда входят мосты между разными решениями уровня 2, а также между уровнем 1 и уровнем 2. Это особенно важное направление исследований, потому что мосты часто становятся мишенью хакеров.

#### Дополнительные материалы {#background-reading-3}

- [Введение в блокчейн-мосты](/bridges/)
- [Виталик о мостах](https://old.reddit.com/r/ethereum/comments/rwojtk/ama_we_are_the_efs_research_team_pt_7_07_january/hrngyk8/)
- [Статья о блокчейн-мостах](https://medium.com/1kxnetwork/blockchain-bridges-5db6afac44f8)
- [Ценность, содержащаяся в мостах](https://dune.com/eliasimos/Bridge-Away-\(from-Ethereum\))

#### Недавние исследования {#recent-research-3}

- [Проверка мостов](https://stonecoldpat.github.io/images/validatingbridges.pdf)

### Шардинг {#sharding}

Шардинг блокчейна Ethereum долгое время был частью дорожной карты разработки. Но сейчас на первый план выходят новые решения в масштабировании, такие как данкшардинг.

Предшественник полного данкшардинга, известный как протоданкшардинг, был реализован в обновлении сети Cancun-Deneb (Dencun).

[Подробнее об обновлении Dencun](/roadmap/dencun/)

#### Дополнительные материалы {#background-reading-4}

- [Заметки о протоданкшардинге](https://notes.ethereum.org/@vbuterin/proto_danksharding_faq)
- [Видео о безбанковом данкшардинге](https://www.youtube.com/watch?v=N5p0TB77flM)
- [Сборник по исследованию шардинга Ethereum](https://notes.ethereum.org/@serenity/H1PGqDhpm?type=view)
- [Данкшардинг (Polynya)](https://polynya.medium.com/danksharding-36dc0c8067fe)

#### Недавние исследования {#recent-research-4}

- [EIP-4844: Протоданкшардинг](https://eips.ethereum.org/EIPS/eip-4844)
- [Виталик о шардинге и проверке доступности данных](https://hackmd.io/@vbuterin/sharding_proposal)

### Оборудование {#hardware}

Возможность [запуска узлов](/developers/docs/nodes-and-clients/run-a-node/) на слабом оборудовании критически важна для сохранения децентрализации Ethereum. Поэтому активно ведутся исследования, касающиеся снижения требований к оборудованию для запуска узлов.

#### Дополнительные материалы {#background-reading-5}

- [Ethereum на ARM-архитектуре](https://ethereum-on-arm-documentation.readthedocs.io/en/latest/)

#### Недавние исследования {#recent-research-5}

- [ecdsa на FPGA](https://ethresear.ch/t/does-ecdsa-on-fpga-solve-the-scaling-problem/6738)

## Безопасность {#security}

Безопасность — это обширная тема, которая включает предотвращение спама/мошенничества, безопасность кошельков, оборудования и криптоэкономическую безопасность, поиск ошибок, тестирование приложений и клиентского ПО, управление ключами. Расширение знаний в этих областях поможет стимулировать массовое внедрение.

### Криптография и ZKP {#cryptography--zkp}

Доказательства с нулевым разглашением (ZKP) и криптография критически важны для обеспечения конфиденциальности и безопасности Ethereum и его приложений. Нулевое разглашение — относительно новое, но быстро развивающееся направление с массой возможностей для исследований и разработок. К ним относятся разработка более эффективной реализации [алгоритма хэширования Keccak](https://hackmd.io/sK7v0lr8Txi1bgION1rRpw?view#Overview), поиск лучших по сравнению с существующими полиномиальных обязательств или же снижение стоимости генерации публичных ключей ECDSA и схем верификации подписей.

#### Дополнительные материалы {#background-reading-6}

- [Блог 0xparc](https://0xparc.org/blog)
- [zkp.science](https://zkp.science/)
- [Подкаст о доказательствах с нулевым разглашением](https://zeroknowledge.fm/)

#### Недавние исследования {#recent-research-6}

- [Недавние успехи в криптографии эллиптических кривых](https://ethresear.ch/t/the-ec-fft-algorithm-without-elliptic-curve-and-isogenies/11346)
- [Ethresear.ch ZK](https://ethresear.ch/c/zk-s-nt-arks/13)

### Кошельки {#wallets}

Кошельки Ethereum могут быть расширениями для браузера, приложениями для компьютеров или мобильных устройств и даже смарт-контрактами в Ethereum. Активно ведутся исследования кошельков с возможностью социального восстановления, которые снижают риски, связанные с управлением ключами одним пользователем. С разработкой кошельков связано исследование альтернативных форм абстрагирования аккаунтов, что является важным направлением перспективных исследований.

#### Дополнительные материалы {#background-reading-7}

- [Введение в кошельки](/wallets/)
- [Введение в безопасность кошельков](/security/)
- [ethresear.ch — Безопасность](https://ethresear.ch/tag/security)
- [EIP-2938 Абстрагирование аккаунта](https://eips.ethereum.org/EIPS/eip-2938)
- [EIP-4337 Абстрагирование аккаунта](https://eips.ethereum.org/EIPS/eip-4337)

#### Недавние исследования {#recent-research-7}

- [Смартконтрактные кошельки с валидацией](https://ethereum-magicians.org/t/validation-focused-smart-contract-wallets/6603)
- [Будущее аккаунтов](https://ethereum-magicians.org/t/validation-focused-smart-contract-wallets/6603)
- [EIP-3074 Операционные коды AUTH и AUTHCALL](https://eips.ethereum.org/EIPS/eip-3074)
- [Публикация кода по адресу EOA](https://eips.ethereum.org/EIPS/eip-5003)

## Сообщество, образование и охват {#community-education-and-outreach}

Знакомство новых пользователей с Ethereum требует новых образовательных ресурсов и способов охвата. Сюда могут входить публикации в блогах и статьи, книги, подкасты, мемы, образовательные ресурсы, мероприятия и все остальное, что помогает строить сообщества, приветствовать новичков и рассказывать людям об Ethereum.

### UX/UI {#uxui}

Чтобы сделать Ethereum доступнее для большего круга людей, экосистема нуждается в улучшении пользовательского опыта (UX) и интерфейса (UI). Это требует от дизайнеров и экспертов в области разработки продуктов пересмотреть текущий дизайн кошельков и приложений.

#### Дополнительные материалы {#background-reading-8}

- [Ethresear.ch UX и UI](https://ethresear.ch/c/ui-ux/24)

#### Недавние исследования {#recent-research-8}

- [Дискорд-канал Web3 Design](https://discord.gg/FsCFPMTSm9)
- [Принципы дизайна Web3](https://www.web3designprinciples.com/)
- [Обсуждение UX от Ethereum Magicians](https://ethereum-magicians.org/t/og-council-ux-follow-up/9032/3)

### Экономика {#economics}

Экономические исследования Ethereum часто затрагивают два направления: валидация безопасности механизмов, отвечающих за экономическое поощрение ("микроэкономика") и анализ потоков ценности между протоколами, приложениями и пользователями ("макроэкономика"). Существуют сложные криптоэкономические факторы, касающиеся базовой валюты Ethereum (эфира) и токенов, построенных на его основе (например, NFT и ERC20).

#### Дополнительные материалы {#background-reading-9}

- [Robust Incentives Group](https://ethereum.github.io/rig/)
- [Секция ETHconomics на Devconnect](https://www.youtube.com/playlist?list=PLTLjFJ0OQOj5PHRvA2snoOKt2udVsyXEm)

#### Недавние исследования {#recent-research-9}

- [Эмпирический анализ EIP1559](https://arxiv.org/abs/2201.05574)
- [Баланс объема предложения в обороте](https://ethresear.ch/t/circulating-supply-equilibrium-for-ethereum-and-minimum-viable-issuance-during-the-proof-of-stake-era/10954)
- [Количественная оценка MEV: насколько темен лес](https://arxiv.org/abs/2101.05511)

### Рынки блочного пространства и комиссий {#blockspace-fee-markets}

Рынки блочного пространства регулируют включение транзакций конечных пользователей, непосредственно в Ethereum (уровень 1) или в мостовых сетях, например в свертках (уровень 2). В Ethereum транзакции отправляются на рынок комиссий, развернутый в протоколе EIP-1559, что защищает цепочку от спама и чрезмерного роста стоимости транзакций. На обоих уровнях транзакции могут порождать внешние эффекты, известные как максимальная извлекаемая ценность (MEV). Это привело к созданию новых рыночных структур для отслеживания таких эффектов и управления ими.

#### Дополнительные материалы {#background-reading-10}

- [Дизайн механизма начисления комиссий за транзакции в блокчейне Ethereum: экономический анализ EIP-1559 (Тим Рафгарден, 2020 г.)](https://timroughgarden.org/papers/eip1559.pdf)
- [Моделирование EIP-1559 (Robust Incentives Group)](https://ethereum.github.io/abm1559)
- [Основы экономики свертков](https://barnabe.substack.com/p/understanding-rollup-economics-from?utm_source=url)
- [Flash Boys 2.0: фронтраннинг, перестановка транзакций и нестабильность консенсуса на децентрализованных биржах](https://arxiv.org/abs/1904.05234)

#### Недавние исследования {#recent-research-10}

- [Видеопрезентация многомерного протокола EIP-1559](https://youtu.be/QbR4MTgnCko)
- [Кроссдоменная MEV](http://arxiv.org/abs/2112.01472)
- [Аукционы MEV](https://ethresear.ch/t/mev-auction-auctioning-transaction-ordering-rights-as-a-solution-to-miner-extractable-value/6788)

### Поощрения при использовании доказательства доли владения {#proof-of-stake-incentives}

Валидаторы используют нативный актив сети Ethereum (эфир) как залог на случай нечестного поведения. Криптоэкономика этого процесса определяет безопасность в сети. Опытные валидаторы могут попробовать злоупотребить особенностями на уровне поощрений для проведения атак.

#### Дополнительные материалы {#background-reading-11}

- [Мастер-класс по экономике и экономической модели Ethereum](https://github.com/CADLabs/ethereum-economic-model)
- [Моделирование поощрений при использовании PoS (Robust Incentives Group)](https://ethereum.github.io/beaconrunner/)

#### Недавние исследования {#recent-research-11}

- [Повышение стойкости к цензурированию транзакций за счет разделения тех, кто предлагает, и тех, кто создает (PSB)](https://notes.ethereum.org/s3JToeApTx6CKLJt8AbhFQ)
- [Три атаки на Ethereum с доказательством доли владения](https://arxiv.org/abs/2110.10086)

### Ликвидный стейкинг и деривативы {#liquid-staking-and-derivatives}

Ликвидный стейкинг позволяет пользователям с балансом менее 32 ETH получать доход от стейкинга, обменивая эфир на токен, представляющий размещенный в стейкинге эфир. Этот токен также можно использовать в DeFi. Однако поощрения и динамика рынка, связанные с ликвидным стейкингом, все еще изучаются, как и их влияние на безопасность Ethereum (например, риски централизации).

#### Дополнительные материалы {#background-reading-12}

- [Ликвидный стейкинг — Ethresear.ch](https://ethresear.ch/search?q=liquid%20staking)
- [Lido: путь к стейкингу Ethereum, не требующему доверия](https://blog.lido.fi/the-road-to-trustless-ethereum-staking/)
- [Rocket Pool: знакомство с протоколом стейкинга](https://medium.com/rocket-pool/rocket-pool-staking-protocol-part-1-8be4859e5fbd)

#### Недавние исследования {#recent-research-12}

- [Как вывести средства из Lido](https://ethresear.ch/t/handling-withdrawals-in-lidos-eth-liquid-staking-protocol/8873)
- [Реквизиты для вывода](https://ethresear.ch/t/withdrawal-credential-rotation-from-bls-to-eth1/8722)
- [Риски деривативов ликвидного стейкинга](https://notes.ethereum.org/@djrtwo/risks-of-lsd)

## Тестирование {#testing}

### Формальная верификация {#formal-verification}

Формальная верификация — это написание кода, проверяющего спецификации консенсуса Ethereum. Существует исполняемая версия спецификации, написанная на Python, которая требует обслуживания и разработки. Дальнейшие исследования помогут улучшить реализацию спецификации на языке Python и добавить инструменты, которые смогут более надежно проверять правильность и выявлять проблемы.

#### Дополнительные материалы {#background-reading-13}

- [Введение в формальную верификацию](https://ptolemy.berkeley.edu/projects/embedded/research/vis/doc/VisUser/vis_user/node4.html)
- [Формальная верификация (Intel)](https://www.cl.cam.ac.uk/~jrh13/papers/mark10.pdf)

#### Недавние исследования {#recent-research-13}

- [Формальная верификация контракта депозита](https://github.com/runtimeverification/deposit-contract-verification)
- [Формальная верификация спецификации Beacon Chain](https://github.com/runtimeverification/deposit-contract-verification)

## Наука о данных и аналитика {#data-science-and-analytics}

Нужно больше инструментов для анализа и панелей, которые предоставят подробную информацию об активности и состоянии сети Ethereum.

### Дополнительные материалы {#background-reading-14}

- [Dune Analytics](https://dune.com/browse/dashboards)
- [Панель разнообразия клиентов](https://clientdiversity.org/)

#### Недавние исследования {#recent-research-14}

- [Анализ данных от Robust Incentives Group](https://ethereum.github.io/rig/)

## Приложения и инструменты {#apps-and-tooling}

Уровень приложений поддерживает разнообразную экосистему с программами, которые обрабатывают транзакции на основном уровне Ethereum. Команды разработчиков постоянно ищут новые способы создания компонуемых, не требующих разрешений и устойчивых к цензурированию версий важных приложений Web2 или совершенно новых концептов, нативных для Web3, используя Ethereum. В то же время разрабатываются новые инструменты. Они позволят строить децентрализованные приложения на Ethereum без лишних сложностей.

### DeFi {#defi}

Децентрализованные финансы (DeFi) — это один из основных классов приложений, созданных на основе Ethereum. Целью DeFi является создание компонуемых "денежных лего", которые позволят пользователям хранить, передавать, давать взаймы, одалживать и инвестировать криптоактивы, используя смарт-контракты. DeFi — направление, которое быстро развивается и постоянно совершенствуется. Исследования в области безопасности, эффективности и доступности протоколов требуются постоянно.

#### Дополнительные материалы {#background-reading-15}

- [DeFi](/defi/)
- [Coinbase: Что такое DeFi?](https://www.coinbase.com/learn/crypto-basics/what-is-defi)

#### Недавние исследования {#recent-research-15}

- [Децентрализованные финансы, централизованное владение?](https://arxiv.org/pdf/2012.09306.pdf)
- [Optimism: путь к транзакциям со стоимостью меньше доллара](https://medium.com/ethereum-optimism/the-road-to-sub-dollar-transactions-part-2-compression-edition-6bb2890e3e92)

### DAO {#daos}

Важнейший сценарий применения Ethereum — это возможность организовываться децентрализованным образом через DAO. Сейчас проводится много исследований, которые касаются разработки и использования DAO в Ethereum, чтобы применять усовершенствованные формы управления, в качестве инструмента для координации с минимумом доверия. Это значительно расширит возможности людей в сравнении с традиционными структурами корпораций и организаций.

#### Дополнительные материалы {#background-reading-16}

- [Знакомство с DAO](/dao/)
- [Dao Collective](https://daocollective.xyz/)

#### Недавние исследования {#recent-research-16}

- [Составление схемы экосистемы DAO](https://www.researchgate.net/publication/358694594_Mapping_out_the_DAO_Ecosystem_and_Assessing_DAO_Autonomy)

### Инструменты для разработчиков {#developer-tools}

Инструменты для разработчиков Ethereum стремительно улучшаются. В этой области предстоит провести много исследований и разработок.

#### Дополнительная литература {#background-reading-17}

- [Инструменты для разных языков программирования](/developers/docs/programming-languages/)
- [Фреймворки для разработчиков](/developers/docs/frameworks/)
- [Список инструментов для разработчика консенсуса](https://github.com/ConsenSys/ethereum-developer-tools-list)
- [Стандарты токенов](/developers/docs/standards/tokens/)
- [CryptoDevHub: инструменты EVM](https://cryptodevhub.io/wiki/ethereum-virtual-machine-tools)

#### Недавние исследования {#recent-research-17}

- [Канал, посвященный инструментам консенсуса Eth R&D, в Discord](https://discordapp.com/channels/595666850260713488/746343380900118528)

### Оракулы {#oracles}

Оракулы импортируют данные из офчейна в блокчейн децентрализованным и не требующим разрешений способом. Получение этих данных ончейн позволяет децентрализованным приложениям взаимодействовать с такими явлениями реального мира, как колебания цен реальных активов, события в офчейн-приложениях и даже перемены погоды.

#### Дополнительные материалы {#background-reading-18}

- [Знакомство с оракулами](/developers/docs/oracles/)

#### Недавние исследования {#recent-research-18}

- [Обзор блокчейн-оракулов](https://arxiv.org/pdf/2004.07140.pdf)
- [Документация Chainlink](https://chain.link/whitepaper)

### Безопасность приложений {#app-security}

Взломы в Ethereum обычно используют уязвимости в отдельных приложениях, а не в самом протоколе. Хакеры и разработчики приложений ведут гонку вооружений, разрабатывая новые средства атаки и защиты. Это означает, что всегда необходимо вести исследования и разработки для защиты приложений от взломов.

#### Дополнительные материалы {#background-reading-19}

- [Отчет об эксплойте Wormhole](https://blog.chainalysis.com/reports/wormhole-hack-february-2022/)
- [Анализ причин взломов контрактов Ethereum](https://forum.openzeppelin.com/t/list-of-ethereum-smart-contracts-post-mortems/1191)
- [Новости Rekt](https://twitter.com/RektHQ?s=20\&t=3otjYQdM9Bqk8k3n1a1Adg)

#### Недавние исследования {#recent-research-19}

- [Приложения — ethresear.ch](https://ethresear.ch/c/applications/18)

### Технологический стек {#technology-stack}

Децентрализация всего технологического стека Ethereum — это важное направление исследований. Сейчас децентрализованные приложения в Ethereum частично централизованы, потому что зависят от централизованных инструментов или инфраструктуры.

#### Дополнительные материалы {#background-reading-20}

- [Стек Ethereum](/developers/docs/ethereum-stack/)
- [Coinbase: введение в стек Web3](https://blog.coinbase.com/a-simple-guide-to-the-web3-stack-785240e557f0)
- [Знакомство со смарт-контрактами](/developers/docs/smart-contracts/)
- [Введение в децентрализованное хранение](/developers/docs/storage/)

#### Недавние исследования {#recent-research-20}

- [Компонуемость смарт-контрактов](/developers/docs/smart-contracts/composability/)