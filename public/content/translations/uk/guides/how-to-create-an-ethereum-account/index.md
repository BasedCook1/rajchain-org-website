---
title: Як «створити» обліковий запис Ethereum
description: Покрокова інструкція для створення облікового запису Ethereum за допомогою гаманця.
lang: uk
---

# Як створити обліковий запис Ethereum

Будь-хто може безкоштовно створити обліковий запис Ethereum у будь-який час. Є кілька способів, але найпростішим і найпоширенішим є використання програми-гаманця. Гаманці створюють і захищають ключі, які дають змогу використовувати Ethereum. Ви можете використовувати свій гаманець для надсилання транзакцій, перевірки залишку токенів і підключення до програм, побудованих на Ethereum, як-от біржі токенів, ігри, торгові площадки NFT тощо. У деякі програми web2 тепер теж можна увійти за допомогою Ethereum.

На відміну від створення нового облікового запису в компанії, в Ethereum це відбувається вільно, конфіденційно та без потреби отримувати дозвіл. Облікові записи контролюються ключами, які допомагає створювати програмне забезпечення вашого гаманця, і вони не видаються третьою стороною, а також не зберігаються в центральному реєстрі.

## Крок 1. Виберіть гаманець.

Гаманець — це програма, яка допомагає керувати вашим обліковим записом Ethereum. Вона використовує ваші ключі для надсилання та отримання транзакцій та входу в програми. Існують десятки різних гаманців на вибір: мобільні, для робочих столів і навіть розширення для браузерів.

<ButtonLink href="/wallets/find-wallet/">
  Знайти гаманець
</ButtonLink>

Якщо ви новачок, ви можете вибрати фільтр «Новачок у криптовалюті» на сторінці «Знайти гаманець», щоб визначити гаманці, які матимуть усі функції, потрібні початківцям.

![Вибір фільтра на сторінці «Знайти гаманець»](./wallet-box.png)

Існують також інші фільтри в профілі, що дають можливість задовольнити ваші потреби. Це приклади часто використовуваних гаманців. Ви маєте самостійно вивчити ситуацію, перш ніж довіряти будь-яким програмам.

## Крок 2. Завантажте та встановіть програму-гаманець.

Коли ви визначилися з конкретним гаманцем, відвідайте його офіційний сайт або магазин додатків і завантажте й встановіть додаток. Усі вони мають бути безоплатні.

## Крок 3. Відкрийте програму й згенеруйте або імпортуйте свій обліковий запис Ethereum.

Коли ви вперше відкриєте новий гаманець, вам може бути запропоновано вибрати між створенням нового облікового запису та імпортом наявного. Виберіть створення нового облікового запису.

## Крок 4. Збережіть свою фразу для відновлення.

Деякі програми попросять вас зберегти секретну «кодову фразу» (ви також можете зустріти такі назви, як «фраза для відновлення» або «мнемонічна фраза»). Дуже важливо зберігати цю кодову фразу в надійному місці! Кодова фраза використовується для створення секретного ключа для облікового запису, який може бути використаний для підписання та відправлення транзакцій. Будь-яка особа, що знає цю кодову фразу, може отримати контроль над усіма вашими обліковими записами, згенерованими з нею. Нікому не повідомляйте кодову фразу свого гаманця. Ця кодова фраза має містити від 12 до 24 випадково згенерованих слів (порядок слів важливий).

Після збереження кодової фрази ви маєте побачити панель керування свого гаманця, де вказано залишок на рахунку. Ознайомтеся з нашим посібником про те, [як користуватися гаманцем.](/guides/how-to-use-a-wallet)

 <br />

<InfoBanner shouldSpaceBetween emoji=":eyes:">
  <div>Потрібно більше інформації?</div>
  <ButtonLink href="/guides/">
    Перегляньте наші інші посібники
  </ButtonLink>
</InfoBanner>

## Поширені запитання

### Мій гаманець і мій обліковий запис Ethereum — це те саме?

Ні. Гаманець — це інструмент керування, який допомагає керувати обліковими записами. Один гаманець може надавати доступ до декількох облікових записів, і кілька гаманців можуть мати доступ до одного облікового запису. Кодова фраза використовується для створення облікових записів, які потім контролюються гаманцем.

Можна представити облікові записи як листя на дереві, яке все «росте» з однієї кодової фрази. Кожна унікальна кодова фраза стає окремим деревом облікових записів.

### Чи можу я надсилати біткоїни на адресу Ethereum або ефіри на адресу Bitcoin?

Ні, не можете. Біткоїн і ефір існують у двох окремих мережах (тобто в різних блокчейнах), і у кожної з них власні моделі ведення транзакцій і формати адрес. Було здійснено різні спроби перенесення токенів між двома різними мережами, з яких найактивнішою наразі є [обернений біткоїн, або WBTC](https://www.bitcoin.com/get-started/what-is-wbtc/). Тут не йдеться про передавання прав, оскільки WBTC є кастодіальним рішенням (тобто одна група людей контролює певні критично важливі функції) і надається тут лише в інформаційних цілях.

### Якщо в мене є адреса ETH, чи належить мені така сама адреса в інших блокчейнах?

Ви можете використовувати одну адресу в усіх блокчейнах, які побудовано на програмному забезпеченні, подібному до Ethereum (відоме як «EVM-сумісне»). У цьому [списку](https://chainlist.org/) містяться блокчейни, які ви можете використовувати з тією самою адресою. Деякі блокчейни, як-от Bitcoin, реалізують абсолютно окремий набір мережевих правил, і вам знадобиться інша адреса в іншому форматі. Якщо у вас гаманець для смартконтрактів, відвідайте вебсайт продукту, щоб отримати більше інформації про те, які блокчейни підтримуються.

### Чи безпечніше мати власний гаманець, ніж зберігати кошти на біржі?

Наявність власного гаманця означає, що ви берете на себе відповідальність за безпеку ваших активів. На жаль, є багато прикладів невдалих бірж, які втратили гроші своїх клієнтів. Володіння гаманцем (з кодовою фразою) усуває ризик, пов’язаний з необхідністю довірити якійсь організації зберігання ваших активів. Однак ви повинні захистити свої власні ключі й уникати фішингового шахрайства, ненавмисного схвалення транзакцій або публікації ключів, переходу на підроблені сайти та інших ризиків самостійного контролю. Ризики й вигоди різні.

### Якщо я загублю свій телефон або апаратний гаманець, чи потрібно мені використовувати той самий додаток гаманця, щоб відновити втрачені кошти?

Ні, ви можете використовувати інший гаманець. Якщо у вас є кодова фраза, ви можете ввести її в більшість гаманців, і вони відновлять ваш обліковий запис. Будьте обережні, якщо вам знадобиться це зробити: краще вимкнути підключення до інтернету під час відновлення гаманця, щоб унеможливити випадковий витік вашої кодової фрази. Часто повернути втрачені кошти без кодової фрази неможливо.