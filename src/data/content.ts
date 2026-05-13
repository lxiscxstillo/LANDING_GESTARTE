export const hero = {
  title: 'GestARte: Realidad Mixta para la Educación en Desarrollo Fetal',
  subtitle: 'Innovación inmersiva para la formación médica',
  description: 'GestARte es una plataforma educativa de realidad mixta diseñada para fortalecer el aprendizaje del desarrollo fetal mediante modelos 3D, experiencias inmersivas y evaluación formativa en contextos clínicos.'
};

export const meta = {
  authors: ['Luis Esteban Castillo', 'Bayron Felipe Jaramillo'],
  advisor: 'Daniel Fernando Arteaga Fajardo',
  university: 'Universidad Cooperativa de Colombia',
  faculty: 'Facultad de Ingeniería',
  program: 'Ingeniería de Software',
  campus: 'San Juan de Pasto',
  year: '2024',
  researchLine: 'Desarrollo de Software',
  researchGroup: 'INTITECH'
};

export const sections = [
  {
    id: 'resumen',
    title: 'Resumen',
    content: 'GestARte es una propuesta tecnológica orientada a fortalecer la enseñanza del desarrollo fetal en estudiantes de medicina mediante una herramienta de realidad mixta que combine visualización tridimensional, interacción inmersiva y apoyo didáctico. El proyecto surge ante las limitaciones de los recursos tradicionales y ante la baja incorporación de tecnologías inmersivas en escenarios universitarios colombianos.'
  },
  {
    id: 'introduccion',
    title: 'Introducción',
    content: 'El estudio del desarrollo fetal demanda estrategias pedagógicas que permitan comprender cambios anatómicos y fisiológicos de carácter progresivo, espacial y dinámico. GestARte articula fundamentos de ingeniería de software, visualización 3D, simulación educativa y usabilidad con el fin de construir una experiencia de aprendizaje más interactiva y contextualizada.'
  },
  {
    id: 'problema',
    title: 'Problema de investigación',
    content: 'En Colombia, la adopción de tecnologías inmersivas en educación superior es limitada, lo que restringe el acceso a experiencias formativas avanzadas y reduce la calidad en la enseñanza de salud. GestARte propone cerrar esta brecha con una solución de realidad mixta enfocada en el desarrollo fetal.'
  },
  {
    id: 'objetivos',
    title: 'Objetivos',
    subsections: [
      {
        title: 'Objetivo general',
        content: 'Desarrollar una herramienta de software que simule el desarrollo fetal en un entorno de realidad mixta, facilitando la visualización y el estudio de diferentes casos en la gestación del feto con estudiantes de medicina de la Universidad Cooperativa de Colombia.'
      },
      {
        title: 'Objetivos específicos',
        list: [
          'Recopilar información científica y académica sobre el desarrollo fetal para establecer requerimientos funcionales precisos.',
          'Diseñar una arquitectura de software basada en el modelo 4+1 para el desarrollo de una herramienta de realidad mixta.',
          'Construir la herramienta en Unity con modelos 3D que representen cada etapa del desarrollo fetal y escenarios clínicos.',
          'Evaluar la herramienta con estudiantes de medicina empleando criterios de la norma ISO 25010.'
        ]
      }
    ]
  },
  {
    id: 'justificacion',
    title: 'Justificación',
    content: 'GestARte propone una herramienta de realidad mixta como complemento en la formación médica, permitiendo visualizar y explorar el desarrollo fetal en un entorno inmersivo. Busca mejorar la formación en salud, la retención de conocimiento y la motivación académica mediante simulaciones avanzadas y aprendizaje contextualizado.'
  },
  {
    id: 'motivacion',
    title: 'Motivación',
    content: 'La motivación es superar las barreras de los recursos bidimensionales y ofrecer una experiencia más clara, práctica e inmersiva. GestARte busca fortalecer la innovación educativa regional y acercar a los futuros profesionales de la salud a herramientas de simulación modernas y relevantes.'
  },
  {
    id: 'marco-teorico',
    title: 'Marco teórico',
    subsections: [
      {
        title: 'Educación en desarrollo fetal',
        content: 'El desarrollo fetal se explica mejor con representaciones dinámicas y espaciales. Las tecnologías inmersivas permiten comprender cambios anatómicos y fisiológicos complejos mediante modelos 3D interactivos.'
      },
      {
        title: 'Realidad mixta aplicada a la educación',
        content: 'La realidad mixta integra elementos virtuales y reales para mejorar el aprendizaje. Estudios muestran que incrementa la experiencia educativa aunque mantiene la ganancia de conocimiento en línea con métodos tradicionales.'
      },
      {
        title: 'Gamificación y aprendizaje activo',
        content: 'La gamificación aumenta la participación y motivación. Al integrarla con contenidos médicos, se promueve una enseñanza más activa y retentiva.'
      },
      {
        title: 'Simulación obstétrica y entrenamiento médico',
        content: 'Las simulaciones inmersivas en obstetricia permiten practicar sin riesgo, promoviendo una formación segura y práctica. GestARte incorpora este enfoque para apoyar el aprendizaje clínico.'
      },
      {
        title: 'Realidad aumentada y educación prenatal',
        content: 'La realidad aumentada ha demostrado mejorar el conocimiento sobre estilos de vida saludables durante la gestación, lo que refuerza la pertinencia de GestARte como recurso educativo en salud.'
      },
      {
        title: 'Comprensión espacial y aprendizaje anatómico',
        content: 'El desarrollo fetal es un proceso espacial. Las experiencias tridimensionales ayudan a internalizar relaciones anatómicas y fisiológicas que son difíciles de transmitir con recursos planos.'
      }
    ]
  },
  {
    id: 'antecedentes',
    title: 'Antecedentes',
    content: 'Las tecnologías inmersivas se han usado en anatomía y obstetricia, pero hay poca implementación específica para el desarrollo fetal. GestARte se diferencia por integrar variables externas y un enfoque educativo adaptado a estudiantes de medicina.'
  },
  {
    id: 'teorias',
    title: 'Teorías generales del proyecto',
    list: [
      'Teoría del Aprendizaje Experiencial: el conocimiento se deriva de la experiencia y su reflexión.',
      'Gamificación: mejora el compromiso del estudiante y facilita el aprendizaje activo.',
      'Realidad Mixta en educación médica: permite nuevos insights y refuerza aprendizajes previos.'
    ]
  },
  {
    id: 'hipotesis',
    title: 'Hipótesis',
    list: [
      'GestARte mejorará la comprensión del desarrollo fetal en comparación con métodos tradicionales.',
      'El uso de realidad mixta aumentará la motivación académica de los estudiantes.',
      'La herramienta cumplirá criterios de eficiencia y usabilidad aceptables para Meta Quest.',
      'Las funcionalidades implementadas serán acordes a los requerimientos definidos.'
    ]
  },
  {
    id: 'metodologia',
    title: 'Metodología de desarrollo de software',
    content: 'GestARte se construye mediante Scrum, un marco ágil que facilita entregas iterativas, adaptabilidad y comunicación constante. El proyecto combina enfoques racionalistas y empíricos para conectar teoría con resultados observables.'
  },
  {
    id: 'resultados',
    title: 'Resultados',
    subsections: [
      {
        title: 'Levantamiento de requerimientos',
        content: 'Se establecieron requerimientos funcionales y no funcionales que responden a las necesidades educativas y técnicas del proyecto.'
      },
      {
        title: 'Requerimientos funcionales',
        list: [
          'Visualizar etapas de desarrollo fetal en 3D.',
          'Permitir interacción con capas anatómicas y variables clínicas.',
          'Registrar acciones y evaluaciones en JSON.',
          'Soportar exportación de resultados para revisión docente.'
        ]
      },
      {
        title: 'Requerimientos no funcionales',
        list: [
          'Rendimiento estable en Meta Quest Standalone.',
          'Interfaz accesible y usable para estudiantes de medicina.',
          'Arquitectura modular con separación de responsabilidades.',
          'Compatibilidad con Unity y XR Toolkit.'
        ]
      }
    ]
  },
  {
    id: 'requerimientos',
    title: 'Requerimientos del sistema',
    content: 'A continuación se presentan los requerimientos funcionales y no funcionales que guían el desarrollo de GestARte.'
  },
  {
    id: 'arquitectura',
    title: 'Diseño de la arquitectura de software',
    content: 'GestARte adopta el modelo 4+1 de Kruchten para estructurar la arquitectura en vistas lógica, desarrollo, procesos, física y escenarios. Esto permite abordar las preocupaciones de usuarios, desarrolladores y docentes de forma clara y ordenada.'
  },
  {
    id: 'referencias',
    title: 'Referencias',
    list: [
      'Ljungblad, L. W., Murphy, D., & Fonkalsrud, H. E. (2025). A mixed reality for midwifery students.',
      'Baratz, G. et al. (2022). Comparing learning retention in medical students using mixed-reality.',
      'Ryan, G. V. et al. (2021). Learning Outcomes of Immersive Technologies in Health Care Student Education.',
      'Smiderle, R. et al. (2020). The impact of gamification on students’ learning.',
      'Alnuaim, A. (2024). The Impact and Acceptance of Gamification.',
      'Satin, A. J. (2018). Simulation in Obstetrics.',
      'Mulyani, E. Y. et al. (2023). Effect of AR media-based health education.',
      'Kolb, D. (1984). Experiential Learning.',
      'Kruchten, P. (1995). Architectural blueprints — The 4+1 view model.'
    ]
  }
];

export const functionalRequirements = [
  {
    ref: 'REQF01',
    requirement: 'Autenticación y Registro',
    description: 'Permitir registro e inicio de sesión con correo institucional, recuperación de contraseña.'
  },
  {
    ref: 'REQF02',
    requirement: 'Gestión de roles',
    description: 'Estudiante: registro inicial, acceso a simulaciones, actividades gamificadas, y visualización de progreso. Docente: verificación institucional, creación de actividades, seguimiento de estudiantes y revisión de resultados. Administrador: gestión de usuarios y roles, validación de docentes y actualización de contenidos.'
  },
  {
    ref: 'REQF03',
    requirement: 'Gestión de objetos 3D',
    description: 'El sistema debe permitir a los estudiantes de medicina visualizar, manipular e interactuar de forma inmersiva con modelos tridimensionales de fetos, observando los modelos en alta resolución con niveles de detalle anatómico, rotando, escalando, moviendo y explorando desde distintos ángulos, y entrando en el modelo en realidad aumentada para analizar su estructura espacial interna.'
  },
  {
    ref: 'REQF04',
    requirement: 'Visualizar modelos en AR sin gafas VR',
    description: 'Los estudiantes podrán ver los modelos fetales en realidad aumentada utilizando la cámara de sus dispositivos móviles a través del uso de targets, sin necesidad de gafas de realidad virtual.'
  },
  {
    ref: 'REQF05',
    requirement: 'Gamificación educativa',
    description: 'Incorporar actividades interactivas (quiz, retos) para reforzar el aprendizaje.'
  },
  {
    ref: 'REQF06',
    requirement: 'Tutor IA',
    description: 'Tendrá un acompañamiento que explicará según el estudiante lo solicite mediante prompts.'
  },
  {
    ref: 'REQF07',
    requirement: 'Análisis de errores con IA',
    description: 'El sistema utilizará un modelo de machine learning para analizar patrones de error y personalizar la retroalimentación del estudiante.'
  },
  {
    ref: 'REQF08',
    requirement: 'Panel docente',
    description: 'Proporcionar herramientas para docentes, como evaluaciones rápidas y seguimiento de estudiantes.'
  }
];

export const nonFunctionalRequirements = [
  {
    ref: 'REQNF01',
    category: 'Usabilidad intuitiva',
    requirement: 'Interfaz inmersiva e intuitiva',
    description: 'La interfaz debe ser intuitiva y permitir navegación fluida en entornos VR, garantizando una curva de aprendizaje mínima (<15 min de entrenamiento).'
  },
  {
    ref: 'REQNF02',
    category: 'Compatibilidad',
    requirement: 'Soporte de dispositivos MR',
    description: 'La aplicación debe funcionar correctamente en gafas de realidad mixta compatibles con Meta Quest Pro y futuras versiones equivalentes.'
  },
  {
    ref: 'REQNF03',
    category: 'Rendimiento/Eficiencia',
    requirement: 'Fluidez en simulaciones 3D',
    description: 'Los modelos 3D deben visualizarse a mínimo 30 fps estables en VR, evitando mareos por latencia.'
  },
  {
    ref: 'REQNF04',
    category: 'Seguridad',
    requirement: 'Protección de datos académicos',
    description: 'La plataforma debe asegurar la protección de perfiles de usuario y resultados académicos mediante cifrado AES-256.'
  },
  {
    ref: 'REQNF05',
    category: 'Mantenibilidad',
    requirement: 'Arquitectura modular',
    description: 'El software debe estar diseñado de forma modular para permitir la actualización de modelos 3D y escenarios clínicos sin afectar la aplicación principal.'
  },
  {
    ref: 'REQNF06',
    category: 'Portabilidad',
    requirement: 'Despliegue multiplataforma de AR targets',
    description: 'Los targets AR deben poder integrarse en diferentes superficies físicas (pósters, libros, material impreso), manteniendo la detección en al menos 90% de intentos.'
  },
  {
    ref: 'REQNF07',
    category: 'Calidad en uso',
    requirement: 'Reducción de errores de navegación',
    description: 'El diseño debe permitir que el 95% de estudiantes completen una simulación sin errores de navegación en el primer intento.'
  }
];

export const architectureViews = [
  {
    id: 'escenarios',
    title: 'Vista de escenarios',
    description: 'Escenarios del sistema para validar la arquitectura mediante casos de uso y secuencias de interacción.',
    items: [
      {
        title: 'Escenario 1 – Inicio de la simulación',
        image: '/images/arquitectura/SECUENCIA ESCENARIO 1 ESTUDIANTE INICIA LA SIMULACION.png',
        alt: 'Escenario 1 inicio de simulación'
      },
      {
        title: 'Escenario 2 – Selección de trimestre',
        image: '/images/arquitectura/SECUENCIA ESCENARIO 2 SELECCION DE TRIMESTRE.png',
        alt: 'Escenario 2 selección de trimestre'
      },
      {
        title: 'Escenario 3 – Diabetes gestacional',
        image: '/images/arquitectura/SECUENCIA ESCENARIO 3 APLICACIÓN DE VARIABLE — DIABETES GESTACIONAL.png',
        alt: 'Escenario 3 diabetes gestacional'
      },
      {
        title: 'Escenario 4 – Observación por capas',
        image: '/images/arquitectura/SECUENCIA ESCENARIO 4 OBSERVACION DE CAMBIOS FISIOLOGICOS POR CAPAS.png',
        alt: 'Escenario 4 observación por capas'
      },
      {
        title: 'Escenario 5 – Retroalimentación evaluativa',
        image: '/images/arquitectura/SECUENCIA ESCENARIO 5 RETROALIMENTACION EVALUATIVA.png',
        alt: 'Escenario 5 retroalimentación evaluativa'
      },
      {
        title: 'Escenario 6 – Revisión docente',
        image: '/images/arquitectura/Escenario 6 - Docente revisa resultados de Sesion Estudiantil.png',
        alt: 'Escenario 6 revisión docente'
      },
      {
        title: 'Interacción en entorno AR',
        image: '/images/arquitectura/SECUENCIA INTERACCION EN ENTORNO AR.png',
        alt: 'Interacción del estudiante en entorno AR'
      }
    ]
  },
  {
    id: 'procesos',
    title: 'Vista de procesos',
    description: 'Flujos y actividades que guían el comportamiento del sistema en tiempo real.',
    items: [
      {
        title: 'Diagrama de actividades',
        image: '/images/arquitectura/Diagrama De Actividades.png',
        alt: 'Diagrama de actividades'
      },
      {
        title: 'Diagrama de estados',
        image: '/images/arquitectura/DIAGRAMA DE ESTADOS.png',
        alt: 'Diagrama de estados GestARte'
      },
      {
        title: 'Secuencia de carga de etapa fetal',
        image: '/images/arquitectura/SECUENCIA CARGA ETAPA FETAL.png',
        alt: 'Secuencia de carga de etapa fetal'
      },
      {
        title: 'Secuencia de aplicación de variable externa',
        image: '/images/arquitectura/SECUENCIA APLICACION VARIABLE EXTERNA.png',
        alt: 'Secuencia de aplicación de variable externa'
      },
      {
        title: 'Secuencia de evaluación de desempeño',
        image: '/images/arquitectura/SECUENCIA EVALUACION DE DESEMPEÑO.png',
        alt: 'Secuencia evaluación de desempeño'
      },
      {
        title: 'Modelo de control del flujo principal',
        image: '/images/arquitectura/MODELO DE CONTROL DEL FLUJO PRINCIPAL (Unity Main Thread).png',
        alt: 'Modelo de control del flujo principal Unity'
      }
    ]
  },
  {
    id: 'logica',
    title: 'Vista lógica',
    description: 'Estructura de clases, paquetes y componentes que definen la lógica del software.',
    items: [
      {
        title: 'Diagrama de clases',
        image: '/images/arquitectura/DIAGRAMA-DE-CLASES.svg',
        alt: 'Diagrama de clases de GestARte'
      },
      {
        title: 'Diagrama de paquetes',
        image: '/images/arquitectura/Diagrama de Paquetes.png',
        alt: 'Diagrama de paquetes GestARte'
      },
      {
        title: 'Diagrama de componentes',
        image: '/images/arquitectura/Diagrama De Componentes.png',
        alt: 'Diagrama de componentes GestARte'
      }
    ]
  },
  {
    id: 'fisica',
    title: 'Vista física',
    description: 'Despliegue en Meta Quest y elementos físicos de la solución.',
    items: [
      {
        title: 'Diagrama de despliegue',
        image: '/images/arquitectura/DIAGRAMA DE DESPLIEGUE.png',
        alt: 'Diagrama de despliegue GestARte'
      }
    ]
  },
  {
    id: 'desarrollo',
    title: 'Vista de desarrollo',
    description: 'Dependencias y estructura de ensamblajes para un desarrollo modular y escalable.',
    items: [
      {
        title: 'Diagrama de dependencias entre assemblies',
        image: '/images/arquitectura/DIAGRAMA DE DEPENDENCIAS ENTRE ASSEMBLIES.png',
        alt: 'Diagrama de dependencias de assembly GestARte'
      }
    ]
  }
];

export const prototypeGallery = [
  {
    title: 'Escena de sala principal - Meta Quest',
    image: '/images/prototipo/AVANCE_PROTOTIPO.jpeg',
    alt: 'Avance prototipo Meta Quest 1'
  },
  {
    title: 'Modelo fetal en la experiencia',
    image: '/images/prototipo/AVANCE_PROTOTIPO_2.jpeg',
    alt: 'Avance prototipo Meta Quest 2'
  },
  {
    title: 'Interacción y selección de semanas',
    image: '/images/prototipo/AVANCE_PROTOTIPO_3.jpeg',
    alt: 'Avance prototipo Meta Quest 3'
  },
  {
    title: 'Vista ampliada del entorno',
    image: '/images/prototipo/AVANCE_PROTOTIPO_4.jpeg',
    alt: 'Avance prototipo Meta Quest 4'
  },
  {
    title: 'Detalle del modelo fetal',
    image: '/images/prototipo/AVANCE_PROTOTIPO_5.jpeg',
    alt: 'Avance prototipo Meta Quest 5'
  }
];

export const prototypeVideo = {
  title: 'Video de avance del prototipo',
  src: '/images/prototipo/AVANCE_PROTOTIPO_6.mp4',
  poster: '/images/prototipo/AVANCE_PROTOTIPO_5.jpeg'
};
