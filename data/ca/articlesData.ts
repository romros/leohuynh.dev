import type { Article } from '~/types'

export let articlesData: Article[] = [
  {
    category: 'article',
    author: [
      'Miró, Jordi',
      'De la Vega, Rocío',
      'Roset Mayals, Roman',
      'Castarlenas, Elena',
      'Sánchez-Rodríguez, Elisabet',
    ],
    year: '2017',
    month: '01',
    pages: '',
    title:
      'Painometer v2®: Una aplicación móvil certificada para monitorizar a los pacientes con dolor',
    volume: '25',
    journal: 'Revista de la Sociedad Española del Dolor',
    doi: '10.20986/resed.2017.3555/2016',
    abstract:
      "L'ús de dispositius mòbils intel·ligents i aplicacions per a l'avaluació i el tractament dels pacients amb dolor crònic s'està estenent. Les importants avantatges d'aquestes alternatives tecnològiques hi contribueixen, incloent-hi facilitar l'accés als tractaments, fins i tot des de llocs remots i amb accés difícil als recursos sanitaris, ajudar a millorar els procediments clínics i reduir els costos.",
    roleDescription:
      "Vaig liderar la implementació d'estratègies d'eLearning per adaptar un tractament cognitiu-conductual de modalitat presencial a distància. A més, vaig dirigir el desenvolupament tècnic de l'aplicació mòbil Painometer v2® per Android, utilitzant Java, Android SDK i Firebase.",
  },
  {
    category: 'article',
    author: ['De la Vega, Rocío', 'Roset Mayals, Roman', 'Galán, Santiago', 'Miró, Jordi'],
    year: '2016',
    month: '05',
    pages: '',
    title:
      'Fibroline: A mobile app for improving the quality of life of young people with fibromyalgia',
    volume: '23',
    journal: 'Journal of Health Psychology',
    doi: '10.1177/1359105316650509',
    abstract:
      "Fibroline és una aplicació mòbil amb un tractament cognitiu-conductual autogestionat per a joves amb fibromiàlgia o dolor crònic generalitzat, dissenyat per reduir el dolor i altres símptomes negatius comuns i millorar la qualitat de vida. Els nostres objectius són informar sobre els protocols d'usabilitat i viabilitat utilitzats per avaluar l'aplicació. Es van implementar dues cicles d'usabilitat. Un grup de pacients va seguir la intervenció del tractament cognitiu-conductual per provar-ne la viabilitat. Es van recollir dades qualitatives i es van realitzar anàlisis de contingut. Els resultats van demostrar que l'aplicació no té errors, és fàcil d'utilitzar, agradada als usuaris i acceptada.",
    roleDescription:
      "Vaig centrar-me en la creació d'estratègies d'eLearning per transposar un tractament cognitiu-conductual de presencial a distància. També vaig liderar el desenvolupament de l'aplicació Painometer v2® per a Android, utilitzant Java, Android SDK i Firebase.",
  },
  {
    category: 'article',
    author: [
      'Sánchez-Rodríguez, Elisabet',
      'Castarlenas, Elena',
      'De la Vega, Rocío',
      'Roset Mayals, Roman',
      'Miró, Jordi',
    ],
    year: '2016',
    month: '03',
    pages: '',
    title:
      'On the electronic measurement of pain intensity: Can we use different pain intensity scales interchangeably?',
    volume: '22',
    journal: 'Journal of Health Psychology',
    doi: '10.1177/1359105316633284',
    roleDescription:
      'La meva col·laboració va ser digitalitzar escales de dolor crònic, passant de paper a format mòbil. Es van emprar tecnologies com html5 i javascript. Finalment, es va incloure aquesta versió digital dins una app nativa per assegurar la seva eficiència i adaptabilitat.',
    abstract:
      "L'objectiu d'aquest treball era estudiar la concordança entre quatre escales d'intensitat del dolor quan s'administren electrònicament: l'Escala Numèrica de Valoració-11, l'Escala de Dolor de Cares-Revisada, l'Escala Analògica Visual i l'Escala Analògica en Colors. En total, van participar en l'estudi 180 escolars d'entre 12 i 19 anys. Havien de reportar la intensitat màxima del seu dolor més freqüent utilitzant les versions electròniques de les quatre escales. La concordança es va calcular utilitzant el mètode de Bland-Altman. Els resultats mostren que les versions electròniques de l'Escala Numèrica-11, l'Escala Analògica en Colors i l'Escala Analògica Visual es poden utilitzar de manera intercanviable.",
  },
  {
    category: 'article',
    author: [
      'Sánchez-Rodríguez, Elisabet',
      'De la Vega, Rocío',
      'Castarlenas, Elena',
      'Roset Mayals, Roman',
      'Miró, Jordi',
    ],
    year: '2015',
    month: '07',
    pages: '',
    title:
      'AN APP for the Assessment of Pain Intensity: Validity Properties and Agreement of Pain Reports When Used with Young People',
    volume: '16',
    journal: 'Pain medicine (Malden, Mass.)',
    doi: '10.1111/pme.12859',
    roleDescription:
      'Vaig digitalitzar escales de dolor crònic, passant de paper a format per mòbils usant html5 i javascript. Després, la solució es va integrar en una app nativa per assegurar la seva funcionalitat i adaptabilitat.',
    abstract:
      "Painometer és una aplicació mòbil que incorpora quatre escales d'intensitat del dolor: l'Escala de Valoració Numèrica, l'Escala de Dolor amb Cares-Revisada, l'escala analògica visual mecànica i l'Escala Analògica en Colors. L'objectiu d'aquest estudi va ser analitzar la validesa i la concordança dels informes d'intensitat proporcionats per aquestes escales i les seves contraparts tradicionals.",
  },
  {
    category: 'article',
    author: [
      'De la Vega, Rocío',
      'Roset Mayals, Roman',
      'Castarlenas, Elena',
      'Sánchez-Rodríguez, Elisabet',
      'Solé, Ester',
      'Miró, Jordi',
    ],
    year: '2014',
    month: '10',
    pages: '',
    title: 'Development and Testing of Painometer: A Smartphone App to Assess Pain Intensity',
    volume: '15',
    journal: 'The Journal of Pain',
    doi: '10.1016/j.jpain.2014.04.009',
    roleDescription:
      "En aquest article, vaig col·laborar activament en el testeig de l'aplicació, implementant diverses versions i oferint suport als usuaris. A més, vaig liderar el desenvolupament de Painometer v2® per Android, fent ús de Java, Android SDK i Firebase per la gestió de dades.",
    abstract:
      "Les tecnologies electròniques i de la informació s'estan utilitzant cada vegada més per avaluar el dolor. Aquest estudi té com a objectius 1) presentar el Painometer, una aplicació per a telèfons mòbils que ajuda els usuaris a avaluar la intensitat del dolor, i 2) informar sobre la seva usabilitat (és a dir, el rendiment i la satisfacció dels usuaris) i acceptabilitat (és a dir, la disposició a utilitzar-lo) quan es posa a disposició de professionals de la salut i no professionals.",
  },
  {
    category: 'article',
    author: [
      'Castarlenas, Elena',
      'Sánchez-Rodríguez, Elisabet',
      'De la Vega, Rocío',
      'Roset Mayals, Roman',
      'Miró, Jordi',
    ],
    year: '2014',
    month: '04',
    pages: '',
    title:
      'Agreement Between Verbal and Electronic Versions of the Numerical Rating Scale (NRS-11) when Used to Assess Pain Intensity in Adolescents',
    volume: '31',
    journal: 'The Clinical journal of pain',
    doi: '10.1097/AJP.0000000000000104',
    roleDescription:
      "Vaig contribuir al desenvolupament de l'aplicació i al disseny tècnic de la investigació sobre la valoració del dolor en adolescents.",
    abstract:
      "Objectius: Les mesures electròniques del dolor estan devenint eines habituals en l'avaluació de la intensitat del dolor pediàtric. Els objectius d'aquest estudi van ser (1) examinar la concordança entre les versions verbal i electrònica de l'Escala Numèrica de Valoració de 11 punts (ENV-11) (vENV-11 i eENV-11, respectivament) quan s'utilitzen per avaluar la intensitat del dolor en adolescents; i (2) informar sobre les preferències dels participants per cadascuna de les 2 alternatives.",
  },
  {
    category: 'article',
    author: [
      'Estanyol, Francesc',
      'Rafael-Palou, Xavier',
      'Roset Mayals, Roman',
      'Lurgi, Miguel',
      'Mier, Mariola',
      'Lluch-Ariet, Magí',
    ],
    year: '2011',
    month: '09',
    pages: '329-351',
    title: 'A Web-accessible distributed data warehouse for brain tumour diagnosis',
    volume: '26',
    journal: 'Knowledge Eng. Review',
    doi: '10.1017/S0269888911000142',
    roleDescription:
      'En el projecte, vaig implementar una ontologia per classificar tumors cerebrals i una API per connectar agents distribuïts amb aquesta ontologia. Vaig usar Java, amb suport de tecnologies com RDF, SPARQL i GraphQL. També vaig integrar llibreries per millorar la comunicació entre els agents..',
    abstract:
      "Actualment, les bases de dades biològiques (BD) són una eina comuna per complementar la recerca en una àmplia gamma de disciplines biomèdiques. No obstant això, només existeixen unes poques BD mèdiques especialitzades per a les dades de l'espectroscòpia de ressonància magnètica (ERM) de tumors cerebrals humans. Aquestes bases de dades típicament emmagatzemen una gamma limitada de dades biològiques (com ara informació clínica, imatges per ressonància magnètica i dades d'ERM) i no es presenten com a esquemes de bases de dades relacionals(SQL). Presentem un enfocament innovador per a les bases de dades biològiques: una base de dades distribuïda accessible a través de la web per emmagatzemar i gestionar dades clíniques i biomèdiques relacionades amb tumors cerebrals de diferents centres clínics. Aquesta eina està dissenyada per a sistemes multiplataforma amb sistemes de gestió de bases de dades diversos. Sent el recurs principal de dades del projecte HealthAgents (HA), utilitza tecnologia multiagent i permet als centres compartir dades i obtenir classificacions de diagnòstic d'altres centres distribuïts arreu del món de manera fiable. El projecte HA té com a objectiu crear un sistema de suport a la presa de decisions distribuït basat en agents (DSS) per ajudar els metges a proporcionar un diagnòstic i pronòstic de tumors cerebrals. La BD de HA permet que el DSS s'integri completament amb la seva interfície gràfica d'usuari per realitzar classificacions amb les dades emmagatzemades i visualitzar els resultats mitjançant el marc de treball d'agents distribuïts de HA. Aquesta nova característica converteix el sistema presentat en la primera aplicació al món que combina una eina d'emmagatzematge i gestió de dades de tumors cerebrals amb un DSS complet basat en web per obtenir diagòstics automàtics.",
  },
  {
    category: 'article',
    author: [
      'Hu, Bo',
      'Croitoru, Madalina',
      'Roset Mayals, Roman',
      'Dupplaw, David',
      'Lurgi, Miguel',
      'Dasmahapatra, Srinandan',
      'Lewis, Paul',
      'Martínez-Miranda, Juan',
      'Sáez, Carlos',
    ],
    year: '2011',
    month: '07',
    pages: '',
    title:
      'The HealthAgents ontology: Knowledge representation in a distributed decision support system for brain tumours',
    volume: '26',
    journal: 'The Knowledge Engineering Review',
    doi: '10.1017/S0269888911000130',
    roleDescription:
      "En aquest article, la meva responsabilitat principal va ser la implementació d'una ontologia dissenyada pels col·laboradors. Aquesta implementació va ser realitzada utilitzant Java, SPARQL i RDF. L'objectiu principal d'aquesta tasca va ser facilitar l'ús de l'ontologia per agents distribuïts, assegurant així una integració efectiva i eficient en entorns computacionals distribuïts.",
    abstract:
      "En aquest article presentem la nostra experiència en la representació del coneixement darrere de HealthAgents (HA), un sistema distribuït de suport a la presa de decisions per al diagnòstic de tumors cerebrals. La nostra motivació inicial va sorgir de la naturalesa distribuïda de la informació involucrada en el sistema i s'ha enriquit amb les necessitats dels professionals de la salut i les restriccions d'accés a les dades. Presentem detalladament els passos que hem seguit per construir la nostra ontologia, des de l'adquisició de coneixement fins a l'accés a les dades i el raonament. Motivem les nostres eleccions de representació i mostrem els nostres resultats utilitzant exemples del domini que han estat emprats pels socis clínics de HA.",
  },
  {
    category: 'inproceedings',
    author: [
      'Croitoru, Madalina',
      'Hu, Bo',
      'Dasmahapatra, Srinandan',
      'Lewis, Paul',
      'Dupplaw, David',
      'Gibb, Alex',
      'Julia-Sape, Margarida',
      'Vicente, Javier',
      'Sáez, Carlos',
      'García-Gómez, Juan',
      'Roset Mayals, Roman',
      'Estanyol, Francesc',
      'Rafael-Palou, Xavier',
      'Mier, Mariola',
    ],
    year: '2007',
    month: '06',
    pages: '618-623',
    title: 'Conceptual Graphs Based Information Retrieval in HealthAgents',
    doi: '10.1109/CBMS.2007.36',
    roleDescription:
      "En l'article, he aportat una eina de desenvolupament per al projecte que visualitza l'ontologia i suporta consultes amb SPARQL i GraphQL. Una característica clau és mostrar respostes com a gràfics visuals. Vaig usar tecnologies com Java, SPARQL, GraphQL, RDF i OWL per crear-la.",
    abstract:
      "Aquest article es centra en el problema de representar, de manera significativa, el coneixement involucrat en el projecte HealthAgents. El nostre treball està motivat per la complexitat de representar els registres electrònics de salut de manera coherent. Presentem HADOM (ontologia del domini HealthAgents), que conceptualitza la informació necessària dels HealthAgents i proposem descriure el coneixement de les fonts mitjançant gràfics conceptuals (GCs). Això permet construir sobre l'ontologia existent, permetent modularitat i flexibilitat. La novetat del nostre enfocament rau en la facilitat amb què els GCs es poden situar sobre altres formalismes i en el seu potencial per a consultes i recuperacions optimitzades.",
  },
  {
    category: 'article',
    author: ['Roset Mayals, Roman', 'Subirana, Juan', 'Messeguer, Xavier'],
    year: '2004',
    month: '01',
    pages: '2475-6',
    title: 'MREPATT: Detection and analysis of exact consecutive repeats in genomic sequences',
    volume: '19',
    journal: 'Bioinformatics (Oxford, England)',
    doi: '10.1093/bioinformatics/btg326',
    roleDescription:
      "En el meu projecte final de grau en Enginyeria Informàtica, vaig presentar aquest article on vaig desenvolupar un algorisme optimitzat per detectar patrons repetits en seqüències genòmiques, superant altres solucions en eficiència. Per a la seva implementació, vaig usar C, i per a la interfície d'usuari, vaig optar per Perl i HTML.",
    abstract:
      "Hem creat un programa per determinar el nombre, la longitud i la posició de repeticions consecutives exactes de seqüències curtes en fragments d'ADN o genomes complets. A més, el programa proporciona la significança estadística dels resultats mitjançant la seva comparació amb els resultats esperats per a una seqüència aleatòria generada segons un model markovià.",
  },
  {
    category: 'article',
    author: [
      'Farre, Domenec',
      'Roset Mayals, Roman',
      'Huerta, Mario',
      'Adsuara, Jose',
      'Roselló, Llorenç',
      'Alba, Maisa',
      'Messeguer, Xavier',
    ],
    year: '2003',
    month: '08',
    pages: '3651-3',
    title:
      'Identification of patterns in biological sequences at the ALGGEN server: PROMO and MALGEN',
    volume: '31',
    journal: 'Nucleic acids research',
    doi: '10.1093/nar/gkg605',
    abstract:
      "En aquest article presentem diverses eines basades en web per identificar patrons conservats en seqüències. En concret, detallem la funcionalitat de PROMO versió 2.0, un programa per predir els llocs de unió dels factors de transcripció en una sola seqüència o en un grup de seqüències relacionades, i de MALGEN, una eina per visualitzar les correspondències de seqüència entre seqüències llargues d'ADN. Les eines web i la documentació associada es poden consultar a http://www.lsi.upc.es/~alggen (enllaç INVESTIGACIÓ).",
    roleDescription:
      "Vaig contribuir al desenvolupament d'eines per identificar patrons en seqüències biològiques, utilitzant principalment Python i Perl.",
  },
]
