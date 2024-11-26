---
title: Disponibilité des données
description: Un aperçu des problèmes et des solutions liés à la disponibilité des données sur Ethereum
lang: fr
---

« Ne pas faire confiance, vérifier » est une maxime courante dans Ethereum. L'idée est que votre nœud peut vérifier de façon indépendante que les informations qu'il reçoit sont correctes en exécutant toutes les transactions dans les blocs qu'il reçoit de ses pairs pour s'assurer que les changements proposés correspondent exactement à ceux calculés indépendamment par le noeud. Cela signifie que les nœuds n'ont pas à croire que les expéditeurs du bloc sont honnêtes. Ce n'est pas possible si les données sont manquantes.

**La disponibilité des données** fait référence à la confiance qu'un utilisateur peut avoir que les données requises pour vérifier qu'un bloc est vraiment disponible pour tous les participants au réseau. Pour les nœuds complets de la couche Ethereum 1, c'est relativement simple ; le noeud complet télécharge une copie de toutes les données dans chaque bloc - les données _doivent être disponibles_ pour que le téléchargement soit possible. Un bloc avec des données manquantes serait jeté plutôt que d'être ajouté à la blockchain. Ceci est « sur la disponibilité des données en chaîne » et c'est une caractéristique des blockchains monolithiques. Les nœuds complets ne peuvent pas être amenés à accepter des transactions invalides car ils téléchargent et exécutent chaque transaction pour eux-mêmes. Cependant, pour les blockchains modulaires, les rollups de la couche 2 et les clients légers, le paysage de disponibilité des données est plus complexe, nécessitant des procédures de vérification plus sophistiquées.

## Prérequis {#prerequisites}

Vous devriez avoir une bonne compréhension des [fondamentaux de la blockchain](/developers/docs/intro-to-ethereum/), en particulier des [mécanismes de consensus](/developers/docs/consensus-mechanisms/). Cette page suppose également que le lecteur est familier avec les [blocs](/developers/docs/blocks/), [transactions](/developers/docs/transactions/), [noeuds](/developers/docs/nodes-and-clients/), [solutions d'échelle](/developers/docs/scaling/), et autres sujets pertinents.

## Problème de disponibilité des données {#the-data-availability-problem}

Le problème de la disponibilité des données est la nécessité de prouver à l'ensemble du réseau que la forme résumée de certaines données de transaction qui sont ajoutées à la blockchain représente vraiment un ensemble de transactions valides, mais sans obliger tous les nœuds à télécharger toutes les données. Les données de transaction complètes sont nécessaires pour la vérification indépendante des blocs, mais exiger que tous les nœuds téléchargent toutes les données de transaction est un obstacle à la mise à l'échelle. Les solutions au problème de la disponibilité des données visent à fournir suffisamment d'assurance que toutes les données de transaction ont été mises à la disposition des participants du réseau qui ne téléchargent pas et ne stockent pas les données pour eux-mêmes.

[Les nœuds légers](/developers/docs/nodes-and-clients/light-clients) et [les rollups de la couche 2](/developers/docs/scaling) sont des exemples importants de participants au réseau qui nécessitent une forte assurance de disponibilité des données, mais ne peuvent pas télécharger et traiter les données de transaction pour eux-mêmes. Une opération de téléchargement des données de transaction non effectuée, c'est ce qui rend les light nodes légers, et permet à la fois aux rollups de se présenter en tant que véritables solutions pour résoudre les problèmes de scalabilité.

La disponibilité des données constitue aussi un sujet de préoccupation majeure pour les clients [« apatrides »](/roadmap/statelessness) d'Ethereum à venir, qui n'auraient pas besoin de télécharger ou de stocker des données afin de vérifier des blocs. Les clients « stateless » ont constamment besoin d'être assurés que les données sont disponibles_, peu importe comment,_ et que le traitement des données s'est déroulé de façon correcte.

## Des solutions garantissant la disponibilité des données {#data-availability-solutions}

### Échantillonnage de la disponibilité des données (DAS) {#data-availability-sampling}

L'échantillonnage de la disponibilité des données (DAS) est un moyen pour le réseau de vérifier que les données sont disponibles sans mettre trop de pression sur un nœud individuel. Chaque nœud (y compris les nœuds non jalonnés) télécharge un petit sous-ensemble sélectionné au hasard des données totales. Le téléchargement réussi des échantillons confirme avec une grande confiance que toutes les données sont disponibles. Cela repose sur un système de chiffrage qui permet l'effacement de données, tout en favorisant l'extension d'un ensemble de données avec des informations redondantes (la façon dont cela s'effectue est d'adapter une fonction connue sous le nom de _fonctions polynomiales,_ sur les données et dévaluer ce polynôme en des points supplémentaires). Les données originales peuvent ainsi être recouvertes, si nécessaire, sur un ensemble de données redondantes. Par conséquent, si _aucune_ donnée originale n'était disponible, la création des données engendrait une perte de la _moitié_ des données étendues ! La quantité d'échantillons de données téléchargées peut être ajustée par noeud. De ce fait, il est _fort_ probable qu'au moins un des fragments de données échantillonnés par chaque client soit manquant _si_ moins de la moitié des données sont réellement disponibles.

DAS sera employé pour permettre aux opérateurs de rollup de rendre leurs données de transaction disponibles, après l'implémentation du[Danksharding complet](/roadmap/danksharding/#what-is-danksharding). Les nœuds Ethereum procéderont à un échantillonnage aléatoire des données de transaction fournies dans les blobs en utilisant le schéma de redondance expliqué ci-dessus pour s'assurer que toutes les données existent. La même technique pourrait également être employée pour s'assurer que les producteurs de blocs mettent toutes leurs données à la disposition de la sécurisation des clients légers. De même, sous [la séparation proposant-constructeur](/roadmap/pbs), seul le constructeur d'un bloc serait requis pour traiter un bloc entier - d'autres validateurs procéderaient à une vérification en utilisant l'échantillonnage de la disponibilité des données.

### Comités de disponibilité des données {#data-availability-committees}

Les comités de disponibilité des données (DAC) sont des tiers de confiance qui fournissent ou attestent de la disponibilité des données. Les DAC peuvent être utilisés à la place de, [ou en combinaison avec](https://hackmd.io/@vbuterin/sharding_proposal#Why-not-use-just-committees-and-not-DAS) DAS. Les garanties données par les comités en matière de sécurité, relèvent de leur mise en place spécifique. Ethereum utilise des échantillons aléatoires de sous-ensembles de validateurs pour attester de la disponibilité des données pour les nœuds légers, par exemple.

Les DAC sont également utilisés par certains validiums. Le DAC est un ensemble de noeuds de confiance qui stocke des copies de données hors ligne. Le DAC est nécessaire pour la mise à disposition des données en cas de litige. Les membres de la DAC délivrent également des attestations en chaîne, attestant ainsi une vraie disponibilité desdites données. Certains Validiums remplacent les DAC par un système de validation par preuve d'enjeu (PoS). Ici, tout le monde peut devenir un validateur et stocker des données hors chaîne. Cependant, ils doivent fournir une « obligation », qui est déposée dans un contrat intelligent. En cas d'intention malveillante, telle que la retenue des données du validateur, cet accord pourrait être résilié. Les comités de disponibilité des données basée sur la preuve d'enjeu sont bien plus sécuritaires que les DAC régulières, car ils encouragent directement les comportements honnêtes.

## Disponibilité des données et nœuds légers {#data-availability-and-light-nodes}

[Les nœuds légers](/developers/docs/nodes-and-clients/light-clients) doivent valider l'exactitude des en-têtes de bloc qu'ils reçoivent sans télécharger les données du bloc. Le coût de cette légèreté est l'incapacité à vérifier indépendamment les en-têtes de bloc en réexécutant les transactions localement à la manière des nœuds complets.

Les nœuds légers Ethereum font confiance à des ensembles aléatoires de 512 validateurs qui ont été assignés à un _comité de synchronisation_. Le comité de synchronisation agit comme une DAC qui signale aux clients légers que les données dans l'en-tête sont correctes en utilisant une signature cryptographique. Le comité de synchronisation effectue des rafraîchissements journaliers des données. Chaque en-tête de bloc alerte les nœuds légers quant aux validateurs qui s'attendent à approuver le bloc _suivant_, afin qu'ils ne puissent pas être amenés à faire confiance à un groupe malveillant prétendant être le vrai comité de synchronisation.

Cependant, que se passe-t-il si un attaquant _parvient_ d'une manière ou d'une autre à transmettre un en-tête de bloc malveillant aux clients légers et à les convaincre qu'il a été approuvé par un comité de synchronisation honnête ? Dans ce cas, l'attaquant pourrait inclure des transactions invalides et le client léger les accepterait aveuglément, car il ne vérifie pas indépendamment tous les changements d'état résumés dans l'en-tête du bloc. Pour se prémunir contre cela, le client léger pourrait utiliser des preuves de fraude.

La façon dont ces preuves de fraude fonctionnent est qu'un nœud complet, voyant une transition d'état invalide faire l'objet de commérages dans le réseau, pourrait rapidement générer une petite partie de données démontrant qu'une transition d'état proposée ne pourrait pas provenir d'un ensemble donné de transactions et diffuser ces données aux pairs. Les nœuds légers pourraient récupérer ces preuves de fraude et les utiliser pour éliminer les en-têtes de bloc défectueux, en s'assurant d'un maintien sur la même chaîne honnête que les nœuds complets.

Cela repose sur des nœuds complets ayant accès à des données de transaction complètes. Un attaquant qui diffuse un mauvais en-tête de bloc et ne parvient pas non plus à rendre les données de transaction disponibles serait en mesure d'empêcher les nœuds complets de générer des preuves de fraude. Les nœuds complets pourraient être en mesure de signaler la présence d'un bloc défectueux, mais ils ne pourraient pas assurer la mise en place de leur avertissement avec une preuve, du fait de l'absence de disponibilité des données pour générer la preuve !

DAS : la solution au problème de disponibilité des données. Les nœuds légers téléchargent de très petits morceaux aléatoires des données d'état complètes et utilisent les échantillons pour vérifier que l'ensemble de données complet est disponible. La probabilité réelle de supposer à tort la disponibilité totale des données après le téléchargement de N morceaux aléatoires peut être calculée ([pour 100 morceaux, la chance est de 10^-30](https://dankradfeist.de/ethereum/2019/12/20/data-availability-checks.html), c'est-à-dire incroyablement improbable).

Même dans ce scénario, les attaques qui retiennent seulement quelques octets pourraient vraisemblablement passer inaperçues auprès des clients effectuant des demandes de données aléatoires. Le code d'effacement corrige cela en reconstruisant de petites parties de données manquantes qui peuvent être utilisées pour vérifier les changements d'état proposés. Une preuve de fraude pourrait alors être construite en utilisant les données reconstruites, empêchant les nœuds légers d'accepter de mauvais en-têtes.

**Remarque :** Les preuves DAS et de fraude n'ont pas encore été implémentées pour les clients légers Ethereum prouvés en jeu mais elles sont sur la feuille de route, très probablement sous la forme de preuves basées sur ZK-SNARK. Les clients légers d'aujourd'hui s'appuient sur une forme de DAC : ils vérifient les identités du comité de synchronisation et font ensuite confiance aux en-têtes de blocs signés qu'ils reçoivent.

## Disponibilité des données et couche 2 rollups {#data-availability-and-layer-2-rollups}

[Les solutions d'évolutivité de la couche 2](/layer-2/), telles que les [rollups](/glossary/#rollups), réduisent les coûts de transaction et augmentent le débit d'Ethereum par le traitement des transactions hors chaîne. Les transactions de rollup sont compressées et publiées par lots sur Ethereum. Les lots représentent des milliers de transactions individuelles hors chaîne dans une seule transaction sur Ethereum. Cela réduit la congestion de la couche de base et réduit les frais pour les utilisateurs.

Cependant, il n'est possible de faire confiance aux transactions « résumées » postées sur Ethereum que si le changement d'état proposé peut être vérifié et confirmé indépendamment comme étant le résultat de l'application de toutes les transactions individuelles hors chaîne. Si les opérateurs de rollup ne rendent pas disponibles les données de transaction pour cette vérification, ils pourraient envoyer des données incorrectes à Ethereum.

[Les rollups optimistes](/developers/docs/scaling/optimistic-rollups/) postent des données de transaction compressées sur Ethereum et attendent un certain temps (typiquement 7 jours) pour permettre aux vérificateurs indépendants de vérifier les données. Si quelqu'un identifie un problème, il peut générer une étanchéité à la fraude et l'utiliser pour défier le rollup. Cela provoquerait l'annulation de la chaîne et l'omission du bloc invalide. Ce n'est pas possible si les données sont manquantes. Actuellement, il existe deux façons pour les rollups optimistes de publier les données de transaction sur la couche de niveau 1. Certains rollups rendent les données disponibles de manière permanente en tant que `CALLDATA`, qui reste en permanence sur la chaîne. Avec l'introduction de l'EIP-4844, certains rollups publient plutôt leurs données de transaction dans un stockage blob moins coûteux. Il ne s'agit pas d'un stockage permanent. Les vérificateurs indépendants doivent interroger les blobs et soulever leurs objections dans un délai d'environ 18 jours avant que les données ne soient supprimées de la couche de niveau 1 d'Ethereum. La disponibilité des données n'est garantie que par le protocole Ethereum pour cette courte fenêtre fixe. Ensuite, cela incombe à d'autres entités de l'écosystème Ethereum. N'importe quel nœud peut vérifier la disponibilité des données en utilisant DAS, c'est-à-dire en téléchargeant de petits échantillons aléatoires des données du blob.

[Les rollups Zero-knowledge (ZK)](/developers/docs/scaling/zk-rollups) ne nécessitent pas de publier de données de transaction car [les preuves de validité de la nulle-connaissance](/glossary/#zk-proof) garantissent l'exactitude des transitions d'état. Cependant, la disponibilité des données reste un problème parce que nous ne pouvons pas garantir la fonctionnalité du ZK-rollup (ou interagir avec elle) sans accès à ses données d'état. Par exemple, les utilisateurs ne peuvent pas connaître leurs soldes si un opérateur retient des détails sur l’état du rollup. De plus, ils ne peuvent pas effectuer de mises à jour d'état en utilisant des informations contenues dans un bloc nouvellement ajouté.

## Disponibilité des données par rapport à la récupération des données {#data-availability-vs-data-retrievability}

Disponibilité des données par rapport à la récupération des données. La disponibilité des données est l'assurance que des nœuds complets ont été en mesure de vérifier l'ensemble des transactions associées à un bloc spécifique et d'y accéder. Il ne s'ensuit pas nécessairement que les données sont accessibles pour toujours.

La possibilité de récupérer des données est la capacité des nœuds à récupérer _des informations historiques_ de la blockchain. Ces données historiques ne sont pas nécessaires pour vérifier de nouveaux blocs, elles sont seulement requises pour synchroniser des nœuds complets à partir du bloc d'origine ou pour répondre à des requêtes historiques spécifiques.

Le protocole Ethereum de base est principalement concerné par la disponibilité des données, et non par la récupération des données. La possibilité de récupérer les données peut être fournie par une petite population de nœuds d'archive exécutés par des tiers, ou une distribution est possible à travers le réseau en utilisant un stockage de fichiers décentralisé tel que le [réseau du portail](https://www.ethportal.net/).

## Complément d'information {#further-reading}

- [Le WTF est-il la disponibilité des données ?](https://medium.com/blockchain-capital-blog/wtf-is-data-availability-80c2c95ded0f)
- [Qu'est-ce que la disponibilité des données ?](https://coinmarketcap.com/alexandria/article/what-is-data-availability)
- [Le paysage de la disponibilité des données Ethereum hors chaîne](https://blog.celestia.org/ethereum-off-chain-data-availability-landscape/)
- [Un préfixe sur les vérifications de disponibilité des données](https://dankradfeist.de/ethereum/2019/12/20/data-availability-checks.html)
- [Une explication de la proposition de fragmentation + DAS](https://hackmd.io/@vbuterin/sharding_proposal#ELI5-data-availability-sampling)
- [Une note sur la disponibilité des données et le codage de l'effacement](https://github.com/ethereum/research/wiki/A-note-on-data-availability-and-erasure-coding#can-an-attacker-not-circumvent-this-scheme-by-releasing-a-full-unavailable-block-but-then-only-releasing-individual-bits-of-data-as-clients-query-for-them)
- [Comités de disponibilité des données.](https://medium.com/starkware/data-availability-e5564c416424)
- [Comités de disponibilité des données de preuve d'enjeu.](https://blog.matter-labs.io/zkporter-a-breakthrough-in-l2-scaling-ed5e48842fbf)
- [Solutions au problème de récupération des données](https://notes.ethereum.org/@vbuterin/data_sharding_roadmap#Who-would-store-historical-data-under-sharding)
- [Disponibilité des données ou : Comment les Rollups ont appris à ne plus s'inquiéter et à aimer Ethereum](https://ethereum2077.substack.com/p/data-availability-in-ethereum-rollups) 