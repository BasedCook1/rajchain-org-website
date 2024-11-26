---
title: Масштабирования Ethereum
description: Свертки объединяют транзакции вместе вне цепи, уменьшая расходы пользователя. Однако сейчас свертки используют данные слишком дорогим способом, ограничивая удешевление транзакций. Прото-данкшардинг исправляет это.
lang: ru
image: /images/roadmap/roadmap-transactions.png
alt: "Дорожная карта Ethereum"
template: roadmap
---

Ethereum масштабируется с помощью сетей [уровня 2](/layer-2/#rollups) (также известными как свертки), которые собирают транзакции вместе и отправляют результат на Ethereum. Свертки до 8 раз дешевле основной сети Ethereum, но их можно оптимизировать еще лучше, чтобы снизить расходы для конечных пользователей. Они также полагаются на некоторые централизованные компоненты, которые разработчики могут удалять по мере развития свертков.

<InfoBanner mb={8} title="Расходы на транзакции">
  <ul style={{ marginBottom: 0 }}>
    <li>Сейчас свертки в <strong>5–20 раз</strong> дешевле уровня 1 Ethereum.</li>
    <li>ZK-свертки в скором времени снизят комиссию в <strong>~40–100 раз</strong>.</li>
    <li>Предстоящие изменения в Ethereum увеличат масштабирование еще в <strong>~100–1000 раз</strong>.</li>
    <li style={{ marginBottom: 0 }}>Преимуществом для пользователей должны стать транзакции <strong>стоимостью менее 0,001 $</strong>.</li>
  </ul>
</InfoBanner>

## Удешевление данных {#making-data-cheaper}

Свертки собирают большое количество транзакций, исполняют их и отправляют результаты в Ethereum. Это генерирует много данных, которые должны быть в открытом доступе, чтобы любой мог выполнить транзакции у себя и убедиться, что оператор свертка был честным. Если кто-то найдет несоответствие, он сможет начать оспаривание.

### Прото данкшардинг {#proto-danksharding}

Данные свертков хранятся на Ethereum на постоянной основе, что удорожает транзакции. Свыше 90 % расходов на транзакции, которые пользователи платят за свертки, идет на хранение этих данных. Для снижения стоимости транзакций мы можем перенести данные в новое временное хранилище BLOB-объектов. BLOB-объекты дешевле, потому что они непостоянные. Они удаляются из Ethereum, как только становятся ненужными. Длительное хранение данных свертков становится обязанностью операторов свертков, бирж, служб индексирования и прочих заинтересованных лиц. Добавление в Ethereum транзакций с BLOB-объектами — часть обновления под названием "протоданкшардинг".

Протоданкшардинг позволил добавлять в блоки Ethereum большое количество BLOB-объектов. Это позволило в очередной раз существенно (более чем в 100 раз) масштабировать пропускную способность Ethereum и сократить стоимость транзакций.

### Данкшардинг {#danksharding}

Второй этап расширения данных BLOB-объектов сложен, поскольку он требует новых методов проверки того, доступны ли данные свертков в сети, и полагается на разделение обязанностей [валидаторов](/glossary/#validator) по созданию и предложению [блоков](/glossary/#block). Это также требует способ криптографически доказать, что валидаторы проверили небольшие подмножества данных BLOB-объектов.

Этот второй шаг называется [данкшардингом](/roadmap/danksharding/). Скорее всего, его полная реализация **займет несколько лет**. Данкшардинг опирается на другие разработки, такие как: [разделение создания и предложения блоков](/roadmap/pbs), и новые дизайны сети, позволяющие ей эффективно подтверждать, что данные доступны, путем случайного отбора нескольких килобайт. Это называется [выборкой доступности данных (DAS)](/developers/docs/data-availability).

<ButtonLink variant="outline-color" href="/roadmap/danksharding/">Подробнее о данкшардинге</ButtonLink>

## Децентрализованные свертки {#decentralizing-rollups}

[Свертки](/layer-2) уже масштабируют Ethereum. [Богатая экосистема проектов по сверткам](https://l2beat.com/scaling/tvl) позволяет пользователям быстро и дешево осуществлять транзакции с целым рядом гарантий безопасности. Тем не менее свертки были инициализированы с помощью централизованных секвенсоров (компьютеров, которые выполняют всю обработку и объединение транзакций перед их отправкой в Ethereum). Это создает уязвимость для цензуры, поскольку операторы-секвенсоры могут подпасть под санкции, быть подкупленными или иным образом скомпрометированными. В то же время [свертки отличаются](https://l2beat.com) по способу утверждения входящих данных. Лучше всего, когда проверяющие отправляют [доказательства мошенничества](/glossary/#fraud-proof) или достоверности, но еще не все свертки это поддерживают. Даже те свертки, что используют доказательства достоверности или мошенничества, полагаются на малый пул известных проверяющих. Поэтому следующим важным шагом в масштабировании Ethereum станет распределение ответственности за запуск секвенсоров и проверяющих среди большего числа людей.

<ButtonLink variant="outline-color" href="/developers/docs/scaling/">Подробнее о свертках</ButtonLink>

## Текущий прогресс {#current-progress}

Протоданкшардинг является первым из этих пунктов дорожной карты, который будет реализован в рамках обновления сети Cancun-Deneb (Dencun) в марте 2024 года. **Полный данкшардинг, вероятно, будет реализован через несколько лет**, поскольку перед этим необходимо реализовать несколько других пунктов дорожной карты. Децентрализация инфраструктуры свертков, скорее всего, будет проходить поэтапно: существует множество разных свертков, которые создают немного разные системы, и они с разной скоростью станут полностью децентрализованными.

[Подробнее об обновлении сети Dencun](/roadmap/dencun/)

<QuizWidget quizKey="scaling" />