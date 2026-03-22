export default {
  index: {
    startingJourney: 'Iniciando viaje...',
    viewProjects: 'Ver Proyectos',
    downloadCV: 'Descargar CV',
    skipAnimation: '[Saltar animación]',
    headliner: 'Desarrollador Full Stack especializado en la construcción de sistemas escalables, integraciones y aplicaciones del mundo real. Experiencia en infraestructura, monitorización y automatización (mentalidad DevOps).',
    profileData: {
      name: "Alexander Labiano Serrano",
      role: "Desarrollador Full Stack",
      location: "España",
      skills: ["React", "Node.js", "Firebase", "IA y Automatización", "Diseño de Sistemas"],
      mission: "Construyendo aplicaciones web escalables y mantenibles."
    },
    stats: [
      'Desarrollé apps full-stack con autenticación',
      'Experiencia con MERN y Firebase',
      'Foco en soluciones escalables y mantenibles'
    ]
  },
  layout: {
    home: 'Sobre mí',
    experience: 'Experiencia',
    skills: 'Habilidades',
    projects: 'Proyectos'
  },
  experience: {
    title: 'Trayectoria Profesional',
    keyContributions: 'Contribuciones Clave',
    items: [
      {
        company: 'Picmatic',
        role: 'Desarrollador Full Stack',
        summary: 'Desarrollo de múltiples sistemas para entornos de juego, incluyendo control de acceso, integraciones y resolución de incidencias en tiempo real.',
        contributions: [
          'Construcción de un sistema de acceso por reconocimiento facial integrado con servicios externos (SOAP)',
          'Implementación de extracción de datos de ID basada en OCR para automatizar el registro',
          'Desarrollo de APIs para integraciones (sistema de ticketing TITO)',
          'Mantenimiento y depuración de incidencias reales de clientes (sistema SAT)',
          'Diseño y desarrollo de funcionalidades de forma independiente en múltiples proyectos',
          'Automatización de procesos y gestión de dispositivos (scripting DevOps)'
        ],
        tech: ['Node.js', 'Express', 'PostgreSQL', 'Vue / Quasar', 'SOAP', 'OCR']
      },
      {
        company: 'Aplanet',
        role: 'Desarrollador Full Stack',
        summary: 'Trabajo en una plataforma SaaS para informes ambientales, centrándose en integraciones, rendimiento y fiabilidad del sistema.',
        contributions: [
          'Desarrollo de integraciones con terceros dentro de la plataforma SaaS',
          'Optimización de consultas a la base de datos mejorando el rendimiento',
          'Implementación de monitorización con Prometheus y Grafana',
          'Refactorización de grandes partes de la aplicación',
          'Liderazgo en decisiones de DevOps: despliegue, infraestructura y selección de bases de datos',
          'Trabajo en entorno ágil mejorando la colaboración del equipo'
        ],
        tech: ['Node.js', 'React', 'PostgreSQL', 'Prometheus', 'Grafana', 'DevOps']
      },
      {
        company: 'Erictel',
        role: 'Technical Delivery Manager',
        summary: 'Actué como puente entre clientes y equipos de desarrollo, asegurando la viabilidad, planificación y entrega exitosa de nuevas funcionalidades y proyectos.',
        contributions: [
          'Recopilación y análisis de requisitos de clientes para nuevas funcionalidades',
          'Evaluación de la viabilidad técnica y estimación de esfuerzo y cronogramas',
          'Liderazgo de reuniones con equipos técnicos y partes interesadas de negocio',
          'Elaboración de documentación técnica oficial',
          'Gestión de planificación de sprints, asignación de tareas y coordinación de equipos'
        ],
        tech: ['Agile', 'Gestión de Proyectos', 'Análisis Técnico', 'Comunicación con Clientes']
      },
      {
        company: 'Mitsl',
        role: 'Soporte de Sistemas y Redes',
        summary: 'Proporcioné soporte técnico y mantenimiento de infraestructura en entornos de alta demanda como hoteles, garantizando el funcionamiento estable de sistemas críticos.',
        contributions: [
          'Mantenimiento y resolución de problemas de redes y sistemas POS en producción',
          'Configuración de redes WiFi privadas para eventos y casos de uso específicos',
          'Instalación y gestión de sistemas CCTV en instalaciones hoteleras',
          'Resolución de incidentes técnicos en tiempo real bajo presión operativa',
          'Entrega de pequeñas soluciones personalizadas basadas en las necesidades del cliente'
        ],
        tech: ['Redes', 'Linux', 'Sistemas POS', 'CCTV']
      }
    ]
  },
  skills: {
    title: 'Habilidades',
    description: 'Desarrollador Full Stack especializado en aplicaciones web modernas y sistemas escalables.',
    coreStack: 'Core Stack',
    frontend: 'Frontend',
    backend: 'Backend & Arquitectura',
    databases: 'Bases de Datos',
    cloudDevOps: 'Cloud & DevOps',
    aiAutomation: 'IA y Automatización',
    languages: 'Idiomas',
    others: 'Otros',
    spanish: 'Español (Nativo)',
    english: 'Inglés (Profesional)',
    basque: 'Euskera',
    cctv: 'Sistemas CCTV'
  },
  projects: {
    title: 'Mis Proyectos',
    jackpotTitle: 'Sistemas de Jackpot y Juego',
    jackpotDesc: 'Desarrollo de aplicaciones robustas para la industria del juego, incluyendo sistemas complejos de jackpot y software seguro de máquinas de cambio en Picmatic S.A.',
    jackpotDetails: 'Proyecto: Plataforma de Control de Acceso e Integraciones (Picmatic)\n\nProblema:\nLos locales de juego requerían un sistema fiable para gestionar el acceso de usuarios, validar identidades e integrarse con sistemas externos para pagos y cumplimiento normativo.\n\nSolución:\nDesarrollo de múltiples soluciones full-stack, incluyendo un sistema de acceso por reconocimiento facial conectado a servicios policiales e integraciones con sistemas de ticketing y pago.\n\nTecnología:\nNode.js, Express, Vue (Quasar), PostgreSQL, SOAP, OCR\n\nContribuciones clave:\n- Construcción de un sistema de acceso por reconocimiento facial integrado con servicios externos vía SOAP.\n- Implementación de extracción de datos de ID basada en OCR para automatizar el registro de usuarios.\n- Desarrollo de APIs para integraciones como TITO (sistema de ticketing para pagos).\n- Mantenimiento y depuración de un sistema de soporte (SAT), resolviendo incidencias reales de clientes.\n- Diseño y desarrollo de funcionalidades completas de forma independiente en múltiples proyectos.\n- Automatización de procesos y gestión de dispositivos mediante scripts (tareas de DevOps).\n\nImpacto:\nMejora de la eficiencia operativa en locales de juego mediante la automatización del control de acceso y las integraciones de pago, obteniendo una sólida experiencia en resolución de problemas reales e interacción con clientes.',
    erictelTitle: 'Technical Delivery & Gestión de Proyectos',
    erictelDesc: 'Puente entre clientes y equipos técnicos, asegurando la viabilidad y la entrega exitosa.',
    erictelDetails: `Problema:
Los clientes requerían nuevas funcionalidades y proyectos, pero necesitaban validación técnica, planificación y una comunicación clara entre los equipos de desarrollo y de negocio.

Solución:
Actué como puente entre los clientes y los equipos técnicos, asegurando la viabilidad, la planificación adecuada y la entrega exitosa de las funcionalidades.

Tecnologías:
Gestión de Proyectos, Agile, Documentación, Análisis Técnico

Contribuciones Clave:
- Recopilación y análisis de requisitos de clientes para nuevas funcionalidades y proyectos.
- Evaluación de la viabilidad técnica y estimación de esfuerzo y cronogramas.
- Liderazgo de reuniones con equipos técnicos y partes interesadas del negocio.
- Elaboración de documentación técnica oficial.
- Gestión de la planificación de tareas, organización de sprints y coordinación de equipos.
- Inicio de responsabilidades de gestión de equipos y optimización del flujo de trabajo.

Impacto:
Mejora de la claridad del proyecto, la planificación de la entrega y la comunicación entre los interesados, asegurando una ejecución eficiente de los requisitos del cliente.`,
    aplanetTitle: 'Plataforma de Sostenibilidad Social',
    aplanetDesc: 'Desarrollo de funcionalidades principales para una plataforma enfocada en la gestión de impacto social y ambiental, asegurando escalabilidad y rendimiento.',
    aplanetDetails: 'Proyecto: Integraciones SaaS para Informes ESG (Aplanet)\n\nProblema:\nLas empresas necesitaban integraciones fiables y un rendimiento optimizado para generar informes ambientales y previsiones de emisiones.\n\nSolución:\nDesarrollo y mantenimiento de integraciones para servicios de terceros dentro de una plataforma SaaS, mejorando el rendimiento, la observabilidad y los procesos de despliegue.\n\nTecnología:\nNode.js, Express, React, PostgreSQL, Prometheus, Grafana\n\nContribuciones clave:\n- Construcción y mantenimiento de integraciones con terceros dentro de la plataforma SaaS.\n- Optimización de consultas a la base de datos para mejorar significativamente el rendimiento.\n- Diseño e implementación de monitorización utilizando Prometheus y Grafana.\n- Refactorización de grandes partes de la aplicación para mejorar la mantenibilidad.\n- Toma de decisiones en DevOps: despliegue, infraestructura y selección de bases de datos.\n- Trabajo en equipos ágiles, mejorando la colaboración y los procesos de entrega.\n\nImpacto:\nMejora del rendimiento y la fiabilidad del sistema, contribuyendo a una infraestructura escalable y mejorando las prácticas de desarrollo del equipo.',
    mitslTitle: 'Soporte de Redes y Sistemas',
    mitslDesc: 'Soporte técnico presencial y mantenimiento de infraestructura para entornos de hostelería.',
    mitslDetails: `Problema:
Los hoteles requerían una infraestructura de red estable, sistemas POS y una resolución rápida de incidentes técnicos para garantizar operaciones ininterrumpidas.

Solución:
Proporcioné soporte técnico in situ y mantenimiento de infraestructura, resolviendo problemas en tiempo real e implementando nuevas configuraciones de red cuando era necesario.

Tecnologías:
Redes, Linux, Sistemas CCTV, Sistemas POS, Soporte de Hardware

Contribuciones Clave:
- Mantenimiento y resolución de problemas de redes y sistemas POS en entornos de producción.
- Configuración de redes WiFi privadas para eventos y casos de uso específicos.
- Instalación y gestión de sistemas CCTV en instalaciones hoteleras.
- Resolución de incidentes técnicos en tiempo real en entornos de alta demanda.
- Entrega de pequeñas soluciones técnicas personalizadas basadas en las necesidades del cliente.

Impacto:
Garantía del funcionamiento continuo de sistemas críticos en entornos de hostelería, ganando una sólida experiencia en la resolución de problemas en el mundo real y la gestión de infraestructuras.`,
    sunflowerTitle: 'Plataforma Sunflower Samurai',
    sunflowerDesc: 'Aplicación web full-stack con autenticación y participación de usuarios en tiempo real, desarrollada con Vue y Firebase.',
    sunflowerDetails: 'Proyecto: Plataforma Sunflower Samurai\n\nProblema:\nSe necesitaba una plataforma donde los usuarios pudieran autenticarse e interactuar con el contenido de forma sencilla y escalable.\n\nSolución:\nConstrucción de una aplicación web full-stack con funcionalidades de autenticación e interacción de usuarios, permitiendo el inicio de sesión y la participación mediante comentarios.\n\nTecnología:\nNode.js, Express, Vue (Quasar), Firebase Authentication\n\nContribuciones clave:\n- Desarrollo del flujo completo de autenticación utilizando Firebase.\n- Diseño de APIs backend para la interacción de usuarios y contenido.\n- Implementación de un sistema de comentarios para el compromiso de los usuarios.\n- Construcción de una interfaz responsiva utilizando el framework Quasar.\n- Estructuración de la aplicación para escalabilidad y mantenibilidad.\n\nImpacto:\nEntrega de una plataforma multiusuario funcional que demuestra capacidades full-stack, manejo de autenticación e interacción de usuarios en tiempo real.',
    lotinaTitle: 'Gestión Ciclos Lotina',
    lotinaDesc: 'Plataforma full-stack para gestión de grupos y contenido interactivo, basada en la arquitectura de Sunflower Samurai.',
    lotinaDetails: 'Proyecto: Gestión Ciclos Lotina\n\nProblema:\nSe necesitaba una plataforma de gestión para un entorno relacionado con el ciclismo con autenticación e interacción en tiempo real.\n\nSolución:\nDesarrollo de una plataforma full-stack similar a la arquitectura de Sunflower Samurai, con autenticación de usuarios y elementos interactivos.\n\nTecnología:\nNode.js, Express, Vue (Quasar), Firebase\n\nContribuciones clave:\n- Implementación de arquitectura full-stack basada en estándares de alto rendimiento.\n- Integración de Firebase para autenticación y datos en tiempo real.\n- Desarrollo de una interfaz de usuario responsiva utilizando el framework Quasar.\n- Garantía de consistencia con el ecosistema de proyectos de Sunflower Samurai.\n\nImpacto:\nEntrega de una plataforma fiable y escalable para la gestión de contenido y usuarios relacionados con el ciclismo.',
    details: 'Detalles',
    liveView: 'Ver en Vivo',
    github: 'GitHub',
    deejaypoTitle: 'DeeJayPo (Bot de Música para Discord)',
    deejaypoDesc: 'Bot de música avanzado para Discord con integración de Lavalink para streaming de audio de alta calidad.',
    deejaypoDetails: 'Proyecto: DeeJayPo (Bot de Música para Discord)\n\nProblema:\nLos bots de Discord a menudo tienen una calidad de audio poco confiable y funciones limitadas para el streaming de música de alto rendimiento.\n\nSolución:\nDesarrollo de un bot de música robusto utilizando el conector Shoukaku y nodos Lavalink para una reproducción de audio estable y de alta calidad, con soporte para múltiples usuarios concurrentes.\n\nTecnología:\nNode.js, Discord.js, Shoukaku, Lavalink\n\nContribuciones clave:\n- Integración de Shoukaku para una interacción de alto rendimiento con Lavalink.\n- Implementación de un manejo de errores robusto para la estabilidad de la conexión.\n- Diseño de un sistema de gestión de reproductores escalable.\n- Configuración de manejo de tokens e IDs de cliente basados en el entorno.\n- Optimización de los tiempos de respuesta del bot y la fiabilidad de los comandos.\n\nImpacto:\nProporciona una experiencia de escucha de música premium en Discord con latencia mínima y alta estabilidad.'
  }
};
