---
title: Beacon Chain
description: Дізнайтеся про Beacon Chain — оновлення, за якого платформа Ethereum перейшла на модель доказу частки.
lang: uk
template: upgrade
image: /images/upgrades/core.png
alt:
summaryPoint1: З Beacon Chain в екосистемі Ethereum з’явився доказ частки володіння.
summaryPoint2: У вересні 2022 року відбулося об’єднання з оригінальним ланцюжком Ethereum, що ґрунтувався на доказі виконання роботи.
summaryPoint3: З Beacon Chain у системі з’явився протокол логіки консенсусу та обміну блоками, який наразі захищає Ethereum.
---

<UpgradeStatus isShipped dateKey="page-upgrades:page-upgrades-beacon-date">
  Beacon Chain було запущено 1 грудня 2020 року, а доказ частки володіння став офіційним механізмом консенсусу Ethereum після оновлення The Merge, яке відбулося 15 вересня 2022 року.
</UpgradeStatus>

## Що таке Beacon Chain? {#what-is-the-beacon-chain}

Beacon Chain — назва оригінального блокчейну з доказом частки володіння, який було запущено у 2020 році. Його було створено для забезпечення стабільної та екологічної роботи логіки консенсусу з доказом частки володіння, перш ніж її буде впроваджено в головній мережі Ethereum. Тому він функціонував паралельно з оригінальною мережею Ethereum із доказом виконання роботи. Beacon Chain був ланцюжком пустих блоків. Для переходу Ethereum із доказу виконання роботи на доказ частки володіння потрібно було навчити Beacon Chain приймати дані транзакцій від клієнтів-виконавців, об’єднувати їх у блоки й організовувати в блокчейн за допомогою механізму консенсусу на основі доказу частки володіння. Водночас оригінальні клієнти Ethereum вимкнули майнінг і логіку консенсусу та поширення блоків, передавши всі ці функції в Beacon Chain. Ця подія отримала назву [злиття](/roadmap/merge/). Після злиття більше не існувало двох блокчейнів. Замість цього, залишилась одна мережа Ethereum із доказом частки володіння, яка тепер вимагає наявність двох різних клієнтів на кожному вузлі. Beacon Chain є рівнем консенсусу, піринговою мережею консенсус-клієнтів, яка відповідає за обмін блоками й логіку консенсусу, а вихідні клієнти формують рівень виконання, який відповідає за обмін транзакціями та їх виконання, а також керування станом Ethereum. Два рівні можуть взаємодіяти між собою за допомогою Engine API.

## Про оновлення Beacon Chain {#what-does-the-beacon-chain-do}

Beacon Chain — це назва реєстру облікових записів, що моніторили та координували мережу [стейкерів](/staking/) Ethereum, перш ніж вони почали валідувати справжні блоки Ethereum. Він не обробляє транзакції та не керує взаємодією зі смартконтрактами, оскільки ці функції виконуються на рівні виконання. Beacon Chain відповідає за такі функції, як обробка блоків і атестацій, виконання алгоритму вибору розгалуження, а також керування винагородами та покараннями. Читайте більше на [сторінці архітектури вузлів](/developers/docs/nodes-and-clients/node-architecture/#node-comparison).

## Вплив Beacon Chain {#beacon-chain-features}

### Про стейкінг {#introducing-staking}

З Beacon Chain в Ethereum з’явився [доказ частки володіння](/developers/docs/consensus-mechanisms/pos/). Він захищає Ethereum і допомагає валідаторам заробляти більше ETH у процесі. На практиці стейкінг ETH потрібен для активації програмного забезпечення валідатора. Стейкер запускає програмне забезпечення, що створює нові блоки в ланцюгу та здійснює їх валідацію.

Стейкінг слугує тій самій меті, що і [майнінг](/developers/docs/consensus-mechanisms/pow/mining/), але багато в чому відрізняється від нього. Майнінг потребував високих попередніх витрат, як-от потужного апаратного забезпечення і великої кількості енергії, що призводило до економії масштабів і просування централізації. Майнінг також не вимагав внесення застави, що обмежувало здатність протоколу карати зловмисників після атак.

Після переходу на доказ частки володіння мережа Ethereum стала набагато безпечнішою та децентралізованішою, як порівняти з періодом використання доказу виконання роботи. Що більше людей беруть участь у мережі, то децентралізованішою та захищенішою від атак вона стає.

А використання доказу частки володіння як механізму консенсусу лежить в основі [безпечного, екологічного й масштабованого Ethereum, який ми маємо сьогодні](/roadmap/vision/).

<InfoBanner emoji=":money_bag:">
  Якщо ви хочете стати валідатором і допомагати захистити Ethereum, <a href="/staking/">дізнайтеся більше про стейкінг</a>.
</InfoBanner>

### Налаштування для сегментування {#setting-up-for-sharding}

З моменту об’єднання Beacon Chain і оригінальної головної мережі Ethereum спільнота Ethereum почала шукати способи масштабування мережі.

Перевага доказу частки володіння — постійна наявність реєстру всіх схвалених генераторів блоків із частками у вигляді ETH. Цей реєстр формує підґрунтя для здатності розділяти й володарювати, водночас надійно розподіляючи конкретні зобов’язання в мережі.

Це зобов’язання суперечить доказу виконання роботи, коли в майнерів немає обов’язків перед мережею: вони можуть припинити майнінг і повністю вимкнути програмне забезпечення вузла без жодних наслідків для себе. Також немає реєстру відомих осіб, які пропонують блоки, і надійного та безпечного способу розділяти зобов’язання в мережі.

[Докладніше про сегментування](/roadmap/danksharding/)

## Зв’язок між оновленнями {#relationship-between-upgrades}

Усі оновлення Ethereum певним чином пов’язані. Тож пояснимо, як Beacon Chain впливає на інші оновлення.

### Beacon Chain і The Merge {#merge-and-beacon-chain}

Спочатку Beacon Chain існував окремо від головної мережі Ethereum, але у 2022 році вони об’єдналися.

<ButtonLink href="/roadmap/merge/">
  Об’єднання
</ButtonLink>

### Сегменти даних і Beacon Chain {#shards-and-beacon-chain}

Сегментування можливо безпечним чином запровадити в екосистемі Ethereum лише за використання механізму консенсусу на основі доказу частки володіння. З Beacon Chain з’явився стейкінг, що «об’єднався» з головною мережею і дав можливість застосовувати сегментування для подальшого масштабування Ethereum.

<ButtonLink href="/roadmap/danksharding/">
  Ланцюги сегментів даних
</ButtonLink>

## Додаткові матеріали

- [Детальніше про майбутні оновлення Ethereum](/roadmap/vision)
- [Докладніше про архітектуру вузла](/developers/docs/nodes-and-clients/node-architecture)
- [Докладніше про доказ частки володіння](/developers/docs/consensus-mechanisms/pos)