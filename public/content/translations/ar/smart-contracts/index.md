---
title: العقود الذكية
description: مقدمة غير تقنية للعقود الذكية
lang: ar
---

# مدخل إلى العقود الذكية {#introduction-to-smart-contracts}

العقود الذكية هي عبارة عن كتل بناء أساسية في طبقة تطبيق الإيثريوم. وهي عبارة عن برامج كمبيوتر مخزنة على [سلسلة البلوكتشين](/glossary/#blockchain) التي تتبع منطق "إذا كان هذا فسيحدث ذاك"، وهي مضمونة التنفيذ وفقًا للقواعد المحددة في النصوص البرمجية الخاصة بها، والتي لا يمكن تغييرها بمجرد إنشائها.

وقد صاغ Nick Szabo مصطلح "العقد الذكي". ففي عام 1994، كتب [مقدمة للمفهوم](https://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart.contracts.html)ثم كتب في عام 1996 [استكشاف لما يمكن أن تفعله العقود الذكية](https://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart_contracts_2.html).

تصوَّر Szabo سوقاً رقمية تتيح فيها العمليات التلقائية [الآمنة من حيث العملات الرقمية](/glossary/#cryptography) إجراء المعاملات ووظائف الأعمال التجارية دون وسطاء موثوق بهم. وقد وُجدت العقود الذكية على إيثريوم لجعل هذه الفكرة قابلة للتطبيق.

شاهد فيديو لـ Finematics تشرح به العقود الذكية:

<YouTube id="pWGLtjG-F5c" />

## وضع الثقة في العقود التقليدية {#trust-and-contracts}

تتمثل إحدى أكبر مشاكل العقود التقليدية في الحاجة إلى وجود أشخاص موثوق بهم لمتابعة تحقيق نتائج العقد.

إليك مثالًا:

أليس وبوب يخوضان سباق دراجات. فلنفترض أن أليس راهنت بوب على 10 دولارات أنها ستفوز عليه في السباق. ولأن بوب واثق من قدرته على الفوز في السباق، وافق على الرهان. في النهاية، سبقت أليس بوب بفارق كبير وكانت هي الرابحة دون أدنى شك. لكن بوب رفض دفع الرهان مدعيًا أنه بالتأكيد أليس قد غشت.

هذا مثال بسيط يوضح المشكلة المتعلقة بأي اتفاقية غير ذكية. وحتى لو استوفيت شروط الاتفاقية (أي أنت الفائز في السباق)، فلا بد أن تضع ثقتك بشخص آخر يفي بالاتفاقية (أي دفع الرهان).

## آلة بيع رقمية {#vending-machine}

أبسط تشبيه مجازي للعقد الذكي هو آلة البيع التي تعمل بشكل مماثل إلى حد ما للعقد الذكي - أي، توجد مدخلات محددة تضمن نتائج محددة.

- أنت تختار المنتج
- تعرض آلة البيع السعر
- أنت تدفع السعر المطلوب
- تتأكد آلة البيع من أنك دفعت المبلغ الصحيح
- تمنحك آلة البيع السلعة التي قمت بشرائها

ولن تُخرج آلة البيع المنتج المرغوب فيه إلا عند استيفاء جميع الشروط. ففي حال لم تحدد المنتج أو تُدخل ما يكفي من المال، فإن آلة البيع لن تعطيك المنتج الذي ترغب به.

## التنفيذ التلقائي {#automation}

الميزة الرئيسية للعقد الذكي هي أنه ينفذ بشكل حتمي نص برمجي واضح عند تحقُق شروط معينة. ولا داعي لانتظار شخص بشري لتفسير النتيجة أو مناقشتها. وهذا يؤدى بدوره إلى الاستغناء عن الوسطاء الموثوق بهم.

فمثلاً، يمكن كتابة عقد ذكي للاحتفاظ بمبلغ من المال في صندوق ضمان لطفل، ولا يسمح له بسحب الأموال إلا بعد تاريخ محدد. وإذا حاول الطفل سحب الأموال قبل التاريخ المحدد، فلن يسمح العقد الذكي بتنفيذ عملية السحب. أو يمكنك كتابة عقد يعطي نسخة رقمية من حق ملكية السيارة عندما تدفع ثمنها للتاجر بشكل تلقائي.

## نتائج متوقعة {#predictability}

تتسم العقود التقليدية بالغموض لأنها تعتمد على البشر لتفسيرها وتنفيذها. فمثلاً، قد يعطي اثنان من القضاة تفسيرًا مختلفًا لعقد ما، ما يؤدى إلى اتخاذ قرارات متعارضة ونتائج غير متكافئة. تلغي العقود الذكية إمكانية حدوث ذلك. وبدلاً من ذلك، تنفذ العقود الذكية الالتزامات بدقة استنادًا إلى الشروط المكتوبة ضمن النص البرمجي للعقد. وتعني هذه الدقة أنه في ظل الظروف نفسها، فإن العقد الذكي سيؤدي إلى النتيجة ذاتها.

## السجل العام {#public-record}

تُفيد العقود الذكية في التدقيق والتتبُع. نظرًا إلى أن العقود الذكية في إيثريوم موجودة ضمن بلوكتشين عامة، يمكن لأي شخص أن يتتبع على الفور عمليات نقل الأصول والمعلومات الأخرى المتعلقة بها. فمثلاً، يمكنك التحقق من إرسال شخص ما أموال إلى عنوانك.

## حماية الخصوصية {#privacy-protection}

كما تحمي العقود الذكية خصوصيتك. بما أن إيثريوم شبكة مستترة (يتاح للعموم عنوان تشفير فريد مرتبط بمعاملاتك وليس هويتك الشخصية)، يمكنك حماية خصوصيتك من المراقبين.

## شروط واضحة {#visible-terms}

وأخيراً، كما في العقود التقليدية، يمكنك التحقق من محتوى العقد الذكي قبل توقيعه (أو التفاعل معه بطريقة أخرى). تضمن شفافية العقد الذكي أنه يمكن لأي شخص فحصه وتدقيقه.

## حالات استخدام العقود الذكية {#use-cases}

يمكن للعقود الذكية تنفيذ أي إجراء بشكل أساسي يمكن للبرامج الحاسوبية تنفيذه.

ويمكنها إجراء العمليات الحسابية، وإنشاء العملات، وتخزين البيانات، وصكّ [NFTs،](/glossary/#nft) وإرسال الاتصالات، وحتى إنشاء الرسومات. وفيما يلي بعض الأمثلة الواقعية الشائعة:

- [عملات ثابتة](/stablecoins/)
- [إنشاء أصول رقمية فريدة وتوزيعها](/nft/)
- [منصة تبادل عملات مفتوحة ومؤتمتة](/get-eth/#dex)
- [ألعاب الفيديو اللامركزية](/dapps/?category=gaming#explore)
- [بوليصة تأمين تقوم بالسداد تلقائيًا](https://etherisc.com/)
- [معيار قياسي يتيح للأشخاص إنشاء عملات مخصصة وقابلة للتشغيل المتبادل](/developers/docs/standards/tokens/)

## قراءة إضافية {#further-reading}

- [How Smart Contracts Will Change the World - (كيف ستغير العقود الذكية العالم)](https://www.youtube.com/watch?v=pA6CGuXEKtQ)
- [Smart Contracts: The Blockchain Technology That Will Replace Lawyers - (العقود الذكية: تقنية سلاسل البلوكتشين التي ستحل محل المحامين)](https://blockgeeks.com/guides/smart-contracts/)
- [Smart contracts for developers - (العقود الذكية للمبرمجين)](/developers/docs/smart-contracts/)
- [Learn to write smart-contracts - (تعلم كتابة العقود الذكية)](/developers/learning-tools/)
- [Mastering Ethereum - What is a Smart Contract (إتقان إيثريوم - ما هو العقد الذكي؟)](https://github.com/ethereumbook/ethereumbook/blob/develop/07smart-contracts-solidity.asciidoc#what-is-a-smart-contract)