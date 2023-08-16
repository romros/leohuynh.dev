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
      'El uso de dispositivos móviles inteligentes y aplicaciones para la evaluación y el tratamiento de pacientes con dolor crónico se está extendiendo. Las importantes ventajas de estas alternativas tecnológicas contribuyen a ello, incluyendo facilitar el acceso a los tratamientos, incluso desde lugares remotos y con acceso difícil a los recursos sanitarios, ayudar a mejorar los procedimientos clínicos y reducir los costos.',
    roleDescription:
      'Lideré la implementación de estrategias de eLearning para adaptar un tratamiento cognitivo-conductual de modalidad presencial a distancia. Además, dirigí el desarrollo técnico de la aplicación móvil Painometer v2® para Android, utilizando Java, Android SDK y Firebase.',
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
      'Fibroline es una aplicación móvil con un tratamiento cognitivo-conductual autogestionado para jóvenes con fibromialgia o dolor crónico generalizado, diseñado para reducir el dolor y otros síntomas negativos comunes y mejorar la calidad de vida. Nuestros objetivos son informar sobre los protocolos de usabilidad y viabilidad utilizados para evaluar la aplicación. Se implementaron dos ciclos de usabilidad. Un grupo de pacientes siguió la intervención del tratamiento cognitivo-conductual para probar su viabilidad. Se recopilaron datos cualitativos y se realizaron análisis de contenido. Los resultados demostraron que la aplicación no tiene errores, es fácil de usar, es apreciada por los usuarios y es aceptada.',
    roleDescription:
      'Me enfoqué en la creación de estrategias de eLearning para trasladar un tratamiento cognitivo-conductual de presencial a distancia. También encabecé el desarrollo de la aplicación Painometer v2® para Android, utilizando Java, Android SDK y Firebase.',
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
      'Mi colaboración consistió en digitalizar escalas de dolor crónico, pasando del formato en papel a uno móvil. Se emplearon tecnologías como HTML5 y JavaScript. Finalmente, esta versión digital se incorporó en una aplicación nativa para asegurar su eficiencia y adaptabilidad.',
    abstract:
      'El objetivo de este trabajo era estudiar la concordancia entre cuatro escalas de intensidad del dolor cuando se administran electrónicamente: la Escala Numérica de Valoración-11, la Escala de Dolor de Caras-Revisada, la Escala Analógica Visual y la Escala Analógica en Colores. En total, participaron en el estudio 180 escolares de entre 12 y 19 años. Debían reportar la intensidad máxima de su dolor más frecuente utilizando las versiones electrónicas de las cuatro escalas. La concordancia se calculó utilizando el método de Bland-Altman. Los resultados muestran que las versiones electrónicas de la Escala Numérica-11, la Escala Analógica en Colores y la Escala Analógica Visual se pueden utilizar de manera intercambiable.',
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
      'Digitalicé escalas de dolor crónico, llevándolas del papel al formato móvil utilizando HTML5 y JavaScript. Posteriormente, se integró esta solución en una aplicación nativa para garantizar su funcionalidad y adaptabilidad.',
    abstract:
      'Painometer es una aplicación móvil que incorpora cuatro escalas de intensidad del dolor: la Escala de Valoración Numérica, la Escala de Dolor con Caras-Revisada, la escala analógica visual mecánica y la Escala Analógica en Colores. El objetivo de este estudio fue analizar la validez y la concordancia de los informes de intensidad proporcionados por estas escalas y sus contrapartes tradicionales.',
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
      'En este artículo, colaboré activamente en la prueba de la aplicación, implementando diversas versiones y brindando soporte a los usuarios. Además, lideré el desarrollo de Painometer v2® para Android, utilizando Java, Android SDK y Firebase para la gestión de datos.',
    abstract:
      'Las tecnologías electrónicas y de la información se están utilizando cada vez más para evaluar el dolor. Este estudio tiene como objetivos 1) presentar el Painometer, una aplicación para teléfonos móviles que ayuda a los usuarios a evaluar la intensidad del dolor, y 2) informar sobre su usabilidad (es decir, el rendimiento y la satisfacción de los usuarios) y aceptabilidad (es decir, la disposición a utilizarlo) cuando se pone a disposición de profesionales de la salud y no profesionales.',
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
      'Contribuí al desarrollo de la aplicación y al diseño técnico de la investigación sobre la evaluación del dolor en adolescentes.',
    abstract:
      'Objetivos: Las medidas electrónicas del dolor se están convirtiendo en herramientas habituales en la evaluación de la intensidad del dolor pediátrico. Los objetivos de este estudio fueron (1) examinar la concordancia entre las versiones verbal y electrónica de la Escala Numérica de Valoración de 11 puntos (ENV-11) (vENV-11 y eENV-11, respectivamente) cuando se utilizan para evaluar la intensidad del dolor en adolescentes; y (2) informar sobre las preferencias de los participantes por cada una de las 2 alternativas.',
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
      'En el proyecto, implementé una ontología para clasificar tumores cerebrales y una API para conectar agentes distribuidos con esta ontología. Utilicé Java, con el respaldo de tecnologías como RDF, SPARQL y GraphQL. También integré librerías para mejorar la comunicación entre los agentes.',
    abstract:
      'Actualmente, las bases de datos biológicas (BD) son una herramienta común para complementar la investigación en una amplia gama de disciplinas biomédicas. Sin embargo, solo existen unas pocas BD médicas especializadas para los datos de la espectroscopía de resonancia magnética (ERM) de tumores cerebrales humanos. Estas bases de datos típicamente almacenan una gama limitada de datos biológicos (como información clínica, imágenes por resonancia magnética y datos de ERM) y no se presentan como esquemas de bases de datos relacionales (SQL). Presentamos un enfoque innovador para las bases de datos biológicas: una base de datos distribuida accesible a través de la web para almacenar y gestionar datos clínicos y biomédicos relacionados con tumores cerebrales de diferentes centros clínicos. Esta herramienta está diseñada para sistemas multiplataforma con sistemas de gestión de bases de datos diversos. Siendo el recurso principal de datos del proyecto HealthAgents (HA), utiliza tecnología multiagente y permite que los centros compartan datos y obtengan clasificaciones de diagnóstico de otros centros distribuidos en todo el mundo de manera confiable. El proyecto HA tiene como objetivo crear un sistema de apoyo a la toma de decisiones distribuido basado en agentes (DSS) para ayudar a los médicos a proporcionar un diagnóstico y pronóstico de tumores cerebrales. La BD de HA permite que el DSS se integre completamente con su interfaz gráfica de usuario para realizar clasificaciones con los datos almacenados y visualizar los resultados mediante el marco de trabajo de agentes distribuidos de HA. Esta nueva característica convierte al sistema presentado en la primera aplicación en el mundo que combina una herramienta de almacenamiento y gestión de datos de tumores cerebrales con un DSS completo basado en la web para obtener diagnósticos automáticos.',
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
      'En este artículo, mi responsabilidad principal fue la implementación de una ontología diseñada por los colaboradores. Esta implementación se realizó utilizando Java, SPARQL y RDF. El objetivo principal de esta tarea fue facilitar el uso de la ontología por agentes distribuidos, asegurando una integración efectiva y eficiente en entornos computacionales distribuidos.',
    abstract:
      'En este artículo presentamos nuestra experiencia en la representación del conocimiento detrás de HealthAgents (HA), un sistema distribuido de apoyo a la toma de decisiones para el diagnóstico de tumores cerebrales. Nuestra motivación inicial surgió de la naturaleza distribuida de la información involucrada en el sistema y se ha enriquecido con las necesidades de los profesionales de la salud y las restricciones de acceso a los datos. Presentamos detalladamente los pasos que hemos seguido para construir nuestra ontología, desde la adquisición de conocimiento hasta el acceso a los datos y el razonamiento. Motivamos nuestras elecciones de representación y mostramos nuestros resultados utilizando ejemplos del dominio que han sido empleados por los socios clínicos de HA.',
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
      'En el artículo, aporté una herramienta de desarrollo para el proyecto que visualiza la ontología y admite consultas con SPARQL y GraphQL. Una característica clave es mostrar las respuestas en forma de gráficos visuales. Utilicé tecnologías como Java, SPARQL, GraphQL, RDF y OWL para crearla.',
    abstract:
      'Este artículo se centra en el problema de representar, de manera significativa, el conocimiento involucrado en el proyecto HealthAgents. Nuestro trabajo está motivado por la complejidad de representar los registros electrónicos de salud de manera coherente. Presentamos HADOM (ontología del dominio HealthAgents), que conceptualiza la información necesaria de los HealthAgents y proponemos describir el conocimiento de las fuentes mediante gráficos conceptuales (GCs). Esto permite construir sobre la ontología existente, permitiendo modularidad y flexibilidad. La novedad de nuestro enfoque radica en la facilidad con la que los GCs se pueden situar sobre otros formalismos y en su potencial para consultas y recuperaciones optimizadas.',
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
      'En mi proyecto final de grado en Ingeniería Informática, presenté este artículo en el que desarrollé un algoritmo optimizado para detectar patrones repetidos en secuencias genómicas, superando otras soluciones en eficiencia. Para su implementación, utilicé C, y para la interfaz de usuario, opté por Perl y HTML.',
    abstract:
      'Hemos creado un programa para determinar el número, la longitud y la posición de repeticiones consecutivas exactas de secuencias cortas en fragmentos de ADN o genomas completos. Además, el programa proporciona la significancia estadística de los resultados mediante su comparación con los resultados esperados para una secuencia aleatoria generada según un modelo markoviano.',
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
      'En este artículo presentamos varias herramientas basadas en web para identificar patrones conservados en secuencias. En concreto, detallamos la funcionalidad de PROMO versión 2.0, un programa para predecir los sitios de unión de los factores de transcripción en una sola secuencia o en un grupo de secuencias relacionadas, y de MALGEN, una herramienta para visualizar las correspondencias de secuencia entre secuencias largas de ADN. Las herramientas web y la documentación asociada se pueden consultar en http://www.lsi.upc.es/~alggen (enlace INVESTIGACIÓN).',
    roleDescription:
      'Contribuí al desarrollo de herramientas para identificar patrones en secuencias biológicas, utilizando principalmente Python y Perl.',
  },
]
