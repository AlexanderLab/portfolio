export default {
  index: {
    startingJourney: 'Starting journey...',
    viewProjects: 'View Projects',
    downloadCV: 'Download CV',
    skipAnimation: '[Skip animation]',
    headliner: 'Full Stack Developer specialized in building scalable systems, integrations and real-world applications. Experience with infrastructure, monitoring and automation (DevOps mindset).',
    profileData: {
      name: "Alexander Labiano Serrano",
      role: "Full Stack Developer",
      location: "Spain",
      skills: ["React", "Node.js", "Firebase", "AI & Automation", "System Design"],
      mission: "Building scalable and maintainable web applications."
    },
    stats: [
      'Built full-stack apps with authentication',
      'Experience with MERN & Firebase',
      'Focus on scalable and maintainable solutions'
    ]
  },
  layout: {
    home: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects'
  },
  experience: {
    title: 'Professional Path',
    keyContributions: 'Key Contributions',
    items: [
      {
        company: 'Picmatic',
        role: 'Full Stack Developer',
        summary: 'Developed multiple systems for gaming environments, including access control, integrations and real-time incident resolution.',
        contributions: [
          'Built facial recognition access system integrated with external services (SOAP)',
          'Implemented OCR-based ID data extraction for automated registration',
          'Developed APIs for integrations (TITO ticketing system)',
          'Maintained and debugged real client incidents (SAT system)',
          'Designed and developed features independently across multiple projects',
          'Automated processes and managed devices (DevOps scripting)'
        ],
        tech: ['Node.js', 'Express', 'PostgreSQL', 'Vue / Quasar', 'SOAP', 'OCR']
      },
      {
        company: 'Aplanet',
        role: 'Full Stack Developer',
        summary: 'Worked on a SaaS platform for environmental reporting, focusing on integrations, performance and system reliability.',
        contributions: [
          'Developed third-party integrations within the SaaS platform',
          'Optimized database queries improving performance',
          'Implemented monitoring with Prometheus and Grafana',
          'Refactored large parts of the application',
          'Led DevOps decisions: deployment, infrastructure and database selection',
          'Worked in agile environment improving team collaboration'
        ],
        tech: ['Node.js', 'React', 'PostgreSQL', 'Prometheus', 'Grafana', 'DevOps']
      },
      {
        company: 'Erictel',
        role: 'Technical Delivery Manager',
        summary: 'Acted as a bridge between clients and development teams, ensuring feasibility, planning and successful delivery of new features and projects.',
        contributions: [
          'Gathered and analyzed client requirements for new features',
          'Evaluated technical feasibility and estimated effort and timelines',
          'Led meetings with both technical teams and business stakeholders',
          'Produced official technical documentation',
          'Managed sprint planning, task assignment and team coordination'
        ],
        tech: ['Agile', 'Project Management', 'Technical Analysis', 'Client Communication']
      },
      {
        company: 'Mitsl',
        role: 'Systems & Network Support',
        summary: 'Provided technical support and infrastructure maintenance in high-demand environments such as hotels, ensuring stable operation of critical systems.',
        contributions: [
          'Maintained and troubleshot networks and POS systems in production',
          'Configured private WiFi networks for events and specific use cases',
          'Installed and managed CCTV systems in hotel facilities',
          'Resolved real-time technical incidents under operational pressure',
          'Delivered small custom solutions based on client needs'
        ],
        tech: ['Networking', 'Linux', 'POS Systems', 'CCTV']
      }
    ]
  },
  skills: {
    title: 'Skills',
    description: 'Full Stack Developer specialized in modern web applications and scalable systems.',
    coreStack: 'Core Stack',
    frontend: 'Frontend',
    backend: 'Backend & Architecture',
    databases: 'Databases',
    cloudDevOps: 'Cloud & DevOps',
    aiAutomation: 'AI & Automation',
    languages: 'Languages',
    others: 'Other',
    spanish: 'Spanish (Native)',
    english: 'English (Professional)',
    basque: 'Basque',
    cctv: 'CCTV Systems'
  },
  projects: {
    title: 'My Projects',
    jackpotTitle: 'Jackpot & Gaming Systems',
    jackpotDesc: 'Developed robust applications for the gaming industry, including complex jackpot systems and secure change machine software at Picmatic S.A.',
    jackpotDetails: 'Project: Access Control & Integrations Platform (Picmatic)\n\nProblem:\nGaming venues required a reliable system to manage user access, validate identities and integrate with external systems for payments and compliance.\n\nSolution:\nDeveloped multiple full-stack solutions including a facial recognition access system connected to law enforcement services and integrations with ticketing/payment systems.\n\nTech:\nNode.js, Express, Vue (Quasar), PostgreSQL, SOAP, OCR\n\nKey Contributions:\n- Built a facial recognition access system integrated with external services via SOAP\n- Implemented OCR-based ID data extraction to automate user registration\n- Developed APIs for integrations such as TITO (ticketing system for payouts)\n- Maintained and debugged a support system (SAT), resolving real client incidents\n- Designed and developed full features independently across multiple projects\n- Automated processes and managed devices through scripting (DevOps tasks)\n\nImpact:\nImproved operational efficiency in gaming venues by automating access control and payment integrations, while gaining strong experience in real-world problem solving and client interaction.',
    erictelTitle: 'Technical Delivery & Project Management',
    erictelDesc: 'Bridge between clients and technical teams, ensuring feasibility and successful delivery.',
    erictelDetails: `Problem:
Clients required new features and projects but needed technical validation, planning and clear communication between business and development teams.

Solution:
Acted as a bridge between clients and technical teams, ensuring feasibility, proper planning and successful delivery of features.

Tech:
Project Management, Agile, Documentation, Technical Analysis

Key Contributions:
- Gathered and analyzed client requirements for new features and projects
- Evaluated technical feasibility and estimated effort and timelines
- Led meetings with both technical teams and business stakeholders
- Produced official technical documentation
- Managed task planning, sprint organization and team coordination
- Initiated team management responsibilities and workflow optimization

Impact:
Improved project clarity, delivery planning and communication between stakeholders, ensuring efficient execution of client requirements.`,
    aplanetTitle: 'Social Sustainability Platform',
    aplanetDesc: 'Development of core functionalities for a platform focused on social and environmental impact management, ensuring scalability and performance.',
    aplanetDetails: 'Project: ESG Reporting SaaS Integrations (Aplanet)\n\nProblem:\nCompanies needed reliable integrations and optimized performance to generate environmental reports and emissions forecasts.\n\nSolution:\nDeveloped and maintained integrations for third-party services within a SaaS platform, improving performance, observability and deployment processes.\n\nTech:\nNode.js, Express, React, PostgreSQL, Prometheus, Grafana\n\nKey Contributions:\n- Built and maintained third-party integrations within the SaaS platform\n- Optimized database queries to significantly improve performance\n- Designed and implemented monitoring using Prometheus and Grafana\n- Refactored large parts of the application to improve maintainability\n- Took ownership of DevOps decisions: deployment, infrastructure and database selection\n- Worked in agile teams, improving collaboration and delivery processes\n\nImpact:\nEnhanced system performance and reliability, while contributing to scalable infrastructure and improving team development practices.',
    mitslTitle: 'Network & Systems Support',
    mitslDesc: 'On-site technical support and infrastructure maintenance for hospitality environments.',
    mitslDetails: `Problem:
Hotels required stable network infrastructure, POS systems and quick resolution of technical incidents to ensure uninterrupted operations.

Solution:
Provided on-site technical support and infrastructure maintenance, solving real-time issues and implementing new network setups when required.

Tech:
Networking, Linux, CCTV Systems, POS Systems, Hardware Support

Key Contributions:
- Maintained and troubleshot networks and POS systems in production environments
- Configured private WiFi networks for events and specific use cases
- Installed and managed CCTV systems in hotel facilities
- Resolved real-time technical incidents in high-demand environments
- Delivered small custom technical solutions based on client needs

Impact:
Ensured continuous operation of critical systems in hospitality environments, gaining strong experience in real-world problem solving and infrastructure management.`,
    sunflowerTitle: 'Sunflower Samurai Platform',
    sunflowerDesc: 'Full-stack web application with authentication and real-time user interaction features, built with Vue and Firebase.',
    sunflowerDetails: 'Project: Sunflower Samurai Platform\n\nProblem:\nNeeded a platform where users could authenticate and interact with content in a simple and scalable way.\n\nSolution:\nBuilt a full-stack web application with authentication and user interaction features, allowing users to log in and engage with content through comments.\n\nTech:\nNode.js, Express, Vue (Quasar), Firebase Authentication\n\nKey Contributions:\n- Developed full authentication flow using Firebase\n- Designed backend APIs for user and content interaction\n- Implemented comment system for user engagement\n- Built responsive frontend using Quasar framework\n- Structured the application for scalability and maintainability\n\nImpact:\nDelivered a functional multi-user platform demonstrating full-stack capabilities, authentication handling and real-time user interaction.',
    lotinaTitle: 'Ciclos Lotina Website',
    lotinaDesc: 'Small website for a local cycling business.',
    lotinaDetails: 'Project: Ciclos Lotina Management\n\nProblem:\nA promotional platform was needed for a local cycling business.\n\nSolution:\nDeveloped a full-stack platform with basic promotional and content management features.\n\nTech:\nNode.js, Express, Vue (Quasar), Firebase\n\nKey Contributions:\n- Implemented full-stack architecture based on high-performance standards.\n- Integrated Firebase, enabling future scaling for features like authentication or inventory management.\n- Developed a responsive UI using the Quasar framework.\n\nImpact:\nDelivered a reliable and scalable platform for managing content and users for the cycling business.',
    details: 'Details',
    liveView: 'Live View',
    github: 'GitHub',
    deejaypoTitle: 'DeeJayPo (Discord Music Bot)',
    deejaypoDesc: 'Advanced Discord music bot with Lavalink integration for high-quality audio streaming.',
    deejaypoDetails: 'Project: DeeJayPo (Discord Music Bot)\n\nProblem:\nDiscord bots often have unreliable audio quality and limited features for high-performance music streaming.\n\nSolution:\nDeveloped a robust music bot utilizing the Shoukaku connector and Lavalink nodes for stable, high-quality audio playback and concurrent user support.\n\nTech:\nNode.js, Discord.js, Shoukaku, Lavalink\n\nKey Contributions:\n- Integrated Shoukaku for high-performance Lavalink interaction\n- Implemented robust error handling for connection stability\n- Designed a scalable player management system\n- Configured environment-based token and client-id handling\n- Optimized bot response times and command reliability\n\nImpact:\nProvides a premium music listening experience on Discord with minimal latency and high stability.'
  }
};
