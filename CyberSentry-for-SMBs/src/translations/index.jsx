const translations = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    toggleMenu: "Toggle menu",

    // Hero section
    heroTitle: "CyberSentry for SMBs: Shielding Your Business Future",
    heroSubtitle: "Comprehensive cybersecurity solutions tailored for small and medium businesses",
    getStarted: "Get Started",

    // Blog section
    latestArticles: "Latest Articles",
    readMore: "Read more",

    article1: {
      title: "5 Essential Cybersecurity Practices for SMBs",
      excerpt:
        "Discover the fundamental security measures every small business should implement to protect their digital assets.",
    },
    article2: {
      title: "Cloud Security: What Your Business Needs to Know",
      excerpt: "Learn how to secure your cloud infrastructure and protect your business data from emerging threats.",
    },
    article3: {
      title: "Recognizing and Preventing Phishing Attacks",
      excerpt:
        "Stay one step ahead of cybercriminals by learning to identify and mitigate sophisticated phishing attempts.",
    },
    article4: {
      title: "Employee Training: Your First Line of Defense",
      excerpt:
        "Discover why your team members are both your greatest vulnerability and strongest asset in cybersecurity.",
    },

    // Featured article
    featuredArticle: "Featured Article",
    featuredTitle: "Ransomware Protection Strategies for Small Businesses",
    featuredExcerpt:
      "Ransomware attacks against small businesses have increased by 300% in the last year. Is your business prepared?",
    featuredContent:
      "Small businesses are increasingly becoming targets for ransomware attacks due to their typically lower security budgets and less robust defenses. This comprehensive guide outlines practical steps to protect your business from these devastating attacks without breaking the bank.",
    readFullArticle: "Read Full Article",

    // Footer
    footerTagline: "Protecting small and medium businesses with enterprise-grade cybersecurity solutions.",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    address: "123 Security Ave, Cybertown, CT 10101",
    allRightsReserved: "All Rights Reserved",

    // Ransomware Article
    ransomware: {
      title: "Ransomware Protection Strategies for Small Businesses",
      subtitle:
        "A comprehensive guide to safeguarding your business from increasingly sophisticated ransomware threats",
      publishDate: "March 15, 2025",
      backToHome: "Back to Home",
      share: "Share this article:",
      tableOfContents: "Table of Contents",
      tags: {
        security: "Security",
        ransomware: "Ransomware",
        smb: "Small Business",
      },
      sections: {
        introduction: {
          title: "Introduction",
          content1:
            "Ransomware attacks have become one of the most significant cybersecurity threats facing small and medium-sized businesses today. These malicious attacks encrypt a company's data, rendering it inaccessible until a ransom is paid to the attackers, often in cryptocurrency to avoid tracking.",
          content2:
            "The landscape of ransomware attacks has evolved dramatically in recent years, with attackers employing increasingly sophisticated techniques and targeting businesses of all sizes. Small businesses are particularly vulnerable due to limited resources for cybersecurity infrastructure and expertise.",
          statistic: "Increase in ransomware attacks targeting small businesses in the past year",
        },
        whatIs: {
          title: "What is Ransomware?",
          content1:
            "Ransomware is a type of malicious software (malware) designed to block access to a computer system or data until a sum of money is paid. It typically encrypts files on the victim's system, making them inaccessible, and demands payment for the decryption key.",
          content2:
            "Modern ransomware attacks often employ a double extortion technique, where attackers not only encrypt data but also exfiltrate sensitive information and threaten to publish it if the ransom isn't paid, adding another layer of pressure on victims.",
          imageCaption: "Typical ransomware attack flow: infiltration, encryption, and extortion",
          typesTitle: "Common Types of Ransomware",
          types: {
            encryptor: {
              name: "Crypto Ransomware",
              description:
                "Encrypts files and documents on a system, making them inaccessible without a decryption key.",
            },
            locker: {
              name: "Locker Ransomware",
              description:
                "Locks users out of their devices entirely, preventing access to the system rather than just files.",
            },
            doxware: {
              name: "Doxware/Leakware",
              description: "Threatens to publish stolen sensitive data online if the ransom is not paid.",
            },
            raas: {
              name: "Ransomware-as-a-Service (RaaS)",
              description:
                "Subscription-based model where developers provide ransomware tools to affiliates who conduct attacks and share profits.",
            },
          },
        },
        whyTarget: {
          title: "Why Small Businesses are Targeted",
          content1:
            "Cybercriminals increasingly target small businesses because they often represent the perfect combination of valuable data and limited security resources. While large enterprises have dedicated security teams and substantial budgets, small businesses frequently lack both.",
          content2:
            "Understanding why your small business might be in the crosshairs is the first step toward implementing effective protection strategies.",
          calloutTitle: "Did You Know?",
          calloutContent:
            "According to recent studies, 60% of small businesses that suffer a ransomware attack go out of business within six months if they cannot recover their data.",
          reasons: {
            security: {
              title: "Limited Security Resources",
              description:
                "Small businesses often lack dedicated IT security staff and sophisticated security tools that larger organizations employ.",
            },
            resources: {
              title: "Insufficient Backup Solutions",
              description:
                "Many small businesses don't maintain proper backup systems, making them more likely to pay ransoms to recover critical data.",
            },
            awareness: {
              title: "Lower Security Awareness",
              description:
                "Employees at smaller companies may receive less cybersecurity training, making them more susceptible to phishing and social engineering.",
            },
            payment: {
              title: "Higher Likelihood of Payment",
              description:
                "Small businesses often pay ransoms quickly to resume operations, making them attractive targets for quick profits.",
            },
          },
        },
        prevention: {
          title: "Prevention Strategies",
          content1:
            "Preventing ransomware attacks requires a multi-layered approach to security. No single solution can provide complete protection, but implementing several defensive measures significantly reduces your risk exposure.",
          tipsTitle: "Implementation Tips:",
          strategies: {
            updates: {
              title: "Keep Systems Updated",
              description:
                "Regularly update operating systems, applications, and firmware to patch security vulnerabilities that ransomware often exploits.",
              tips: {
                tip1: "Enable automatic updates whenever possible",
                tip2: "Create a schedule for checking and applying updates that can't be automated",
                tip3: "Maintain an inventory of all software to ensure nothing is overlooked",
              },
            },
            antivirus: {
              title: "Deploy Modern Antivirus Solutions",
              description:
                "Use reputable antivirus and anti-malware solutions with real-time protection capabilities and regular definition updates.",
              tips: {
                tip1: "Choose solutions with specific ransomware protection features",
                tip2: "Enable real-time scanning and scheduled deep scans",
                tip3: "Consider endpoint detection and response (EDR) solutions for better protection",
              },
            },
            firewall: {
              title: "Implement Strong Firewall Protection",
              description:
                "Configure firewalls to monitor and control incoming and outgoing network traffic based on predetermined security rules.",
              tips: {
                tip1: "Use both hardware and software firewalls for layered protection",
                tip2: "Regularly review and update firewall rules",
                tip3: "Consider a next-generation firewall (NGFW) with advanced threat protection",
              },
            },
            email: {
              title: "Enhance Email Security",
              description:
                "Since email is the most common ransomware delivery method, implementing robust email security measures is essential.",
              tips: {
                tip1: "Use email filtering services to block suspicious attachments",
                tip2: "Implement DMARC, SPF, and DKIM to prevent email spoofing",
                tip3: "Consider a secure email gateway with sandboxing capabilities",
              },
            },
          },
        },
        backup: {
          title: "Backup and Recovery Strategies",
          content1:
            "A robust backup strategy is your last line of defense against ransomware. Even if prevention fails, proper backups can help you recover without paying the ransom.",
          content2:
            "The goal is to maintain backups that ransomware cannot reach or encrypt, allowing you to restore your systems to a pre-attack state with minimal data loss and disruption.",
          methodsTitle: "Effective Backup Methods",
          methods: {
            threeTwo: {
              title: "3-2-1 Backup Rule",
              description:
                "Maintain at least three copies of your data, on two different types of storage media, with one copy stored off-site or in the cloud.",
            },
            offsite: {
              title: "Air-gapped Backups",
              description:
                "Keep some backups completely disconnected from your network to ensure they cannot be reached by ransomware.",
            },
            testing: {
              title: "Regular Backup Testing",
              description:
                "Periodically test your backup restoration process to ensure it works when needed and identify any potential issues.",
            },
            encryption: {
              title: "Encrypted Backups",
              description:
                "Encrypt your backups to protect sensitive data from unauthorized access if backup media is lost or stolen.",
            },
          },
          warningTitle: "Important Warning",
          warningContent:
            "Some advanced ransomware variants specifically target backup systems. Ensure your backup solution has ransomware protection features and immutable storage options.",
        },
        training: {
          title: "Employee Training and Awareness",
          content1:
            "Your employees are both your greatest vulnerability and your strongest defense against ransomware attacks. Human error, such as clicking on malicious links or opening infected attachments, remains the primary entry point for ransomware.",
          content2:
            "A comprehensive security awareness training program can significantly reduce your risk by teaching employees to recognize and avoid common attack vectors.",
          programTitle: "Building an Effective Training Program",
          steps: {
            awareness: {
              title: "General Security Awareness",
              description:
                "Educate employees about the importance of cybersecurity and how their actions can impact the entire organization.",
            },
            phishing: {
              title: "Phishing Recognition Training",
              description:
                "Teach employees to identify suspicious emails, links, and attachments through examples and interactive exercises.",
            },
            passwords: {
              title: "Password Management",
              description:
                "Implement strong password policies and train employees on using password managers and multi-factor authentication.",
            },
            simulation: {
              title: "Phishing Simulations",
              description:
                "Conduct regular phishing simulation exercises to test employee awareness and provide targeted training to those who need it.",
            },
            reporting: {
              title: "Incident Reporting Procedures",
              description:
                "Establish clear procedures for reporting suspicious activities and potential security incidents.",
            },
          },
        },
        response: {
          title: "Incident Response Planning",
          content1:
            "Despite your best prevention efforts, it's essential to prepare for the possibility of a successful ransomware attack. A well-documented and practiced incident response plan can significantly reduce the impact and recovery time.",
          planTitle: "Ransomware Response Plan Elements",
          steps: {
            isolate: {
              title: "Isolation and Containment",
              description:
                "Immediately disconnect infected systems from the network to prevent the ransomware from spreading to other systems and backups.",
            },
            identify: {
              title: "Identification and Assessment",
              description:
                "Determine the ransomware variant, extent of infection, and affected systems and data to guide your response.",
            },
            report: {
              title: "Notification and Reporting",
              description:
                "Report the incident to law enforcement, notify affected parties as required by regulations, and contact your cyber insurance provider if applicable.",
            },
            recover: {
              title: "Recovery and Restoration",
              description:
                "Restore systems from clean backups, verify data integrity, and scan for remaining malware before reconnecting systems.",
            },
            learn: {
              title: "Post-Incident Analysis",
              description:
                "Conduct a thorough review of the incident to identify how the attack succeeded and what improvements are needed to prevent future attacks.",
            },
          },
          paymentTitle: "Should You Pay the Ransom?",
          paymentContent:
            "Law enforcement agencies and security experts generally advise against paying ransoms, as payment doesn't guarantee data recovery, funds criminal activities, and may mark you as a willing target for future attacks. However, each situation must be evaluated based on business impact, availability of backups, and other factors.",
        },
        conclusion: {
          title: "Conclusion",
          content1:
            "Ransomware represents one of the most significant threats to small businesses today, but with proper preparation and a layered security approach, you can significantly reduce your risk and minimize potential damage.",
          content2:
            "By implementing the strategies outlined in this guide—from prevention and backup to employee training and incident response planning—your business will be better positioned to withstand and recover from ransomware attacks.",
          ctaTitle: "Need Help Securing Your Business?",
          ctaContent:
            "CyberSentry offers comprehensive ransomware protection services tailored specifically for small and medium businesses. Our experts can help you implement all the strategies discussed in this article.",
          ctaButton: "Contact Our Security Experts",
        },
      },
    },
  },

  es: {
    // Navigation
    home: "Inicio",
    services: "Servicios",
    about: "Nosotros",
    blog: "Blog",
    contact: "Contacto",
    toggleMenu: "Alternar menú",

    // Hero section
    heroTitle: "CyberSentry para PyMEs: Protegiendo el Futuro de tu Negocio",
    heroSubtitle: "Soluciones integrales de ciberseguridad diseñadas para pequeñas y medianas empresas",
    getStarted: "Comenzar",

    // Blog section
    latestArticles: "Últimos Artículos",
    readMore: "Leer más",

    article1: {
      title: "5 Prácticas Esenciales de Ciberseguridad para PyMEs",
      excerpt:
        "Descubre las medidas de seguridad fundamentales que toda pequeña empresa debería implementar para proteger sus activos digitales.",
    },
    article2: {
      title: "Seguridad en la Nube: Lo que tu Empresa Necesita Saber",
      excerpt:
        "Aprende cómo asegurar tu infraestructura en la nube y proteger los datos de tu empresa contra amenazas emergentes.",
    },
    article3: {
      title: "Reconociendo y Previniendo Ataques de Phishing",
      excerpt:
        "Mantente un paso adelante de los ciberdelincuentes aprendiendo a identificar y mitigar intentos sofisticados de phishing.",
    },
    article4: {
      title: "Capacitación de Empleados: Tu Primera Línea de Defensa",
      excerpt:
        "Descubre por qué los miembros de tu equipo son tanto tu mayor vulnerabilidad como tu activo más fuerte en ciberseguridad.",
    },

    // Featured article
    featuredArticle: "Artículo Destacado",
    featuredTitle: "Estrategias de Protección contra Ransomware para Pequeñas Empresas",
    featuredExcerpt:
      "Los ataques de ransomware contra pequeñas empresas han aumentado un 300% en el último año. ¿Está preparada tu empresa?",
    featuredContent:
      "Las pequeñas empresas se están convirtiendo cada vez más en objetivos de ataques de ransomware debido a sus presupuestos de seguridad típicamente más bajos y defensas menos robustas. Esta guía integral describe pasos prácticos para proteger tu negocio de estos devastadores ataques sin arruinar tu presupuesto.",
    readFullArticle: "Leer Artículo Completo",

    // Footer
    footerTagline: "Protegiendo pequeñas y medianas empresas con soluciones de ciberseguridad de nivel empresarial.",
    quickLinks: "Enlaces Rápidos",
    contactUs: "Contáctanos",
    address: "Av. Seguridad 123, Ciudad Cyber, CT 10101",
    allRightsReserved: "Todos los Derechos Reservados",

    // Ransomware Article
    ransomware: {
      title: "Estrategias de Protección contra Ransomware para Pequeñas Empresas",
      subtitle: "Una guía completa para proteger tu negocio de las amenazas de ransomware cada vez más sofisticadas",
      publishDate: "15 de marzo de 2025",
      backToHome: "Volver al inicio",
      share: "Compartir este artículo:",
      tableOfContents: "Tabla de Contenidos",
      tags: {
        security: "Seguridad",
        ransomware: "Ransomware",
        smb: "Pequeña Empresa",
      },
      sections: {
        introduction: {
          title: "Introducción",
          content1:
            "Los ataques de ransomware se han convertido en una de las amenazas de ciberseguridad más significativas que enfrentan las pequeñas y medianas empresas en la actualidad. Estos ataques maliciosos cifran los datos de una empresa, haciéndolos inaccesibles hasta que se paga un rescate a los atacantes, a menudo en criptomonedas para evitar el rastreo.",
          content2:
            "El panorama de los ataques de ransomware ha evolucionado dramáticamente en los últimos años, con atacantes empleando técnicas cada vez más sofisticadas y dirigiéndose a empresas de todos los tamaños. Las pequeñas empresas son particularmente vulnerables debido a recursos limitados para infraestructura y experiencia en ciberseguridad.",
          statistic: "Aumento en ataques de ransomware dirigidos a pequeñas empresas en el último año",
        },
        whatIs: {
          title: "¿Qué es el Ransomware?",
          content1:
            "El ransomware es un tipo de software malicioso (malware) diseñado para bloquear el acceso a un sistema informático o datos hasta que se pague una suma de dinero. Típicamente cifra archivos en el sistema de la víctima, haciéndolos inaccesibles, y exige un pago por la clave de descifrado.",
          content2:
            "Los ataques modernos de ransomware a menudo emplean una técnica de extorsión doble, donde los atacantes no solo cifran datos sino que también extraen información sensible y amenazan con publicarla si no se paga el rescate, añadiendo otra capa de presión sobre las víctimas.",
          imageCaption: "Flujo típico de ataque de ransomware: infiltración, cifrado y extorsión",
          typesTitle: "Tipos comunes de Ransomware",
          types: {
            encryptor: {
              name: "Crypto Ransomware",
              description:
                "Cifra archivos y documentos en un sistema, haciéndolos inaccesibles sin una clave de descifrado.",
            },
            locker: {
              name: "Locker Ransomware",
              description:
                "Bloquea completamente a los usuarios de sus dispositivos, impidiendo el acceso al sistema en lugar de solo a los archivos.",
            },
            doxware: {
              name: "Doxware/Leakware",
              description: "Amenaza con publicar datos sensibles robados en línea si no se paga el rescate.",
            },
            raas: {
              name: "Ransomware-as-a-Service (RaaS)",
              description:
                "Modelo basado en suscripción donde los desarrolladores proporcionan herramientas de ransomware a afiliados que realizan ataques y comparten ganancias.",
            },
          },
        },
        whyTarget: {
          title: "Por qué las pequeñas empresas son objetivo",
          content1:
            "Los ciberdelincuentes cada vez más se dirigen a pequeñas empresas porque a menudo representan la combinación perfecta de datos valiosos y recursos de seguridad limitados. Mientras que las grandes empresas tienen equipos de seguridad dedicados y presupuestos sustanciales, las pequeñas empresas frecuentemente carecen de ambos.",
          content2:
            "Entender por qué tu pequeña empresa podría estar en la mira es el primer paso para implementar estrategias de protección efectivas.",
          calloutTitle: "¿Sabías que?",
          calloutContent:
            "Según estudios recientes, el 60% de las pequeñas empresas que sufren un ataque de ransomware cierran dentro de los seis meses si no pueden recuperar sus datos.",
          reasons: {
            security: {
              title: "Recursos de seguridad limitados",
              description:
                "Las pequeñas empresas a menudo carecen de personal dedicado a la seguridad informática y herramientas de seguridad sofisticadas que emplean las organizaciones más grandes.",
            },
            resources: {
              title: "Soluciones de respaldo insuficientes",
              description:
                "Muchas pequeñas empresas no mantienen sistemas de respaldo adecuados, lo que las hace más propensas a pagar rescates para recuperar datos críticos.",
            },
            awareness: {
              title: "Menor conciencia de seguridad",
              description:
                "Los empleados en empresas más pequeñas pueden recibir menos capacitación en ciberseguridad, lo que los hace más susceptibles al phishing y la ingeniería social.",
            },
            payment: {
              title: "Mayor probabilidad de pago",
              description:
                "Las pequeñas empresas a menudo pagan rescates rápidamente para reanudar operaciones, lo que las convierte en objetivos atractivos para obtener ganancias rápidas.",
            },
          },
        },
        prevention: {
          title: "Estrategias de prevención",
          content1:
            "Prevenir ataques de ransomware requiere un enfoque de seguridad en múltiples capas. Ninguna solución única puede proporcionar protección completa, pero implementar varias medidas defensivas reduce significativamente tu exposición al riesgo.",
          tipsTitle: "Consejos de implementación:",
          strategies: {
            updates: {
              title: "Mantén los sistemas actualizados",
              description:
                "Actualiza regularmente los sistemas operativos, aplicaciones y firmware para corregir vulnerabilidades de seguridad que el ransomware suele explotar.",
              tips: {
                tip1: "Habilita las actualizaciones automáticas siempre que sea posible",
                tip2: "Crea un calendario para verificar y aplicar actualizaciones que no se pueden automatizar",
                tip3: "Mantén un inventario de todo el software para asegurarte de que nada se pase por alto",
              },
            },
            antivirus: {
              title: "Implementa soluciones antivirus modernas",
              description:
                "Utiliza soluciones antivirus y anti-malware de buena reputación con capacidades de protección en tiempo real y actualizaciones regulares de definiciones.",
              tips: {
                tip1: "Elige soluciones con características específicas de protección contra ransomware",
                tip2: "Habilita el escaneo en tiempo real y escaneos profundos programados",
                tip3: "Considera soluciones de detección y respuesta de endpoints (EDR) para una mejor protección",
              },
            },
            firewall: {
              title: "Implementa protección de firewall sólida",
              description:
                "Configura firewalls para monitorear y controlar el tráfico de red entrante y saliente basado en reglas de seguridad predeterminadas.",
              tips: {
                tip1: "Utiliza firewalls tanto de hardware como de software para una protección por capas",
                tip2: "Revisa y actualiza regularmente las reglas del firewall",
                tip3: "Considera un firewall de próxima generación (NGFW) con protección avanzada contra amenazas",
              },
            },
            email: {
              title: "Mejora la seguridad del correo electrónico",
              description:
                "Dado que el correo electrónico es el método de entrega de ransomware más común, implementar medidas robustas de seguridad de correo electrónico es esencial.",
              tips: {
                tip1: "Utiliza servicios de filtrado de correo electrónico para bloquear archivos adjuntos sospechosos",
                tip2: "Implementa DMARC, SPF y DKIM para prevenir la suplantación de correo electrónico",
                tip3: "Considera una puerta de enlace de correo electrónico segura con capacidades de sandbox",
              },
            },
          },
        },
        backup: {
          title: "Estrategias de respaldo y recuperación",
          content1:
            "Una estrategia de respaldo robusta es tu última línea de defensa contra el ransomware. Incluso si la prevención falla, los respaldos adecuados pueden ayudarte a recuperarte sin pagar el rescate.",
          content2:
            "El objetivo es mantener copias de seguridad que el ransomware no pueda alcanzar o cifrar, permitiéndote restaurar tus sistemas a un estado previo al ataque con una pérdida de datos y una interrupción mínimas.",
          methodsTitle: "Métodos efectivos de respaldo",
          methods: {
            threeTwo: {
              title: "Regla de respaldo 3-2-1",
              description:
                "Mantén al menos tres copias de tus datos, en dos tipos diferentes de medios de almacenamiento, con una copia almacenada fuera del sitio o en la nube.",
            },
            offsite: {
              title: "Respaldos aislados",
              description:
                "Mantén algunas copias de seguridad completamente desconectadas de tu red para asegurar que no puedan ser alcanzadas por ransomware.",
            },
            testing: {
              title: "Pruebas regulares de respaldo",
              description:
                "Prueba periódicamente tu proceso de restauración de respaldo para asegurar que funcione cuando sea necesario e identificar posibles problemas.",
            },
            encryption: {
              title: "Respaldos cifrados",
              description:
                "Cifra tus respaldos para proteger datos sensibles de acceso no autorizado si los medios de respaldo se pierden o son robados.",
            },
          },
          warningTitle: "Advertencia importante",
          warningContent:
            "Algunas variantes avanzadas de ransomware se dirigen específicamente a sistemas de respaldo. Asegúrate de que tu solución de respaldo tenga características de protección contra ransomware y opciones de almacenamiento inmutable.",
        },
        training: {
          title: "Capacitación y concienciación de empleados",
          content1:
            "Tus empleados son tanto tu mayor vulnerabilidad como tu defensa más fuerte contra ataques de ransomware. El error humano, como hacer clic en enlaces maliciosos o abrir archivos adjuntos infectados, sigue siendo el punto de entrada principal para el ransomware.",
          content2:
            "Un programa integral de capacitación en concienciación de seguridad puede reducir significativamente tu riesgo al enseñar a los empleados a reconocer y evitar vectores de ataque comunes.",
          programTitle: "Construyendo un programa de capacitación efectivo",
          steps: {
            awareness: {
              title: "Concienciación general de seguridad",
              description:
                "Educa a los empleados sobre la importancia de la ciberseguridad y cómo sus acciones pueden impactar a toda la organización.",
            },
            phishing: {
              title: "Capacitación en reconocimiento de phishing",
              description:
                "Enseña a los empleados a identificar correos electrónicos, enlaces y archivos adjuntos sospechosos a través de ejemplos y ejercicios interactivos.",
            },
            passwords: {
              title: "Gestión de contraseñas",
              description:
                "Implementa políticas de contraseñas fuertes y capacita a los empleados en el uso de gestores de contraseñas y autenticación multifactor.",
            },
            simulation: {
              title: "Simulaciones de phishing",
              description:
                "Realiza ejercicios regulares de simulación de phishing para probar la conciencia de los empleados y proporcionar capacitación dirigida a quienes la necesiten.",
            },
            reporting: {
              title: "Procedimientos de reporte de incidentes",
              description:
                "Establece procedimientos claros para reportar actividades sospechosas y posibles incidentes de seguridad.",
            },
          },
        },
        response: {
          title: "Planificación de respuesta a incidentes",
          content1:
            "A pesar de tus mejores esfuerzos de prevención, es esencial prepararse para la posibilidad de un ataque de ransomware exitoso. Un plan de respuesta a incidentes bien documentado y practicado puede reducir significativamente el impacto y el tiempo de recuperación.",
          planTitle: "Elementos del plan de respuesta a ransomware",
          steps: {
            isolate: {
              title: "Aislamiento y contención",
              description:
                "Desconecta inmediatamente los sistemas infectados de la red para evitar que el ransomware se propague a otros sistemas y respaldos.",
            },
            identify: {
              title: "Identificación y evaluación",
              description:
                "Determina la variante de ransomware, el alcance de la infección y los sistemas y datos afectados para guiar tu respuesta.",
            },
            report: {
              title: "Notificación y reporte",
              description:
                "Reporta el incidente a las autoridades, notifica a las partes afectadas según lo requieran las regulaciones y contacta a tu proveedor de seguro cibernético si corresponde.",
            },
            recover: {
              title: "Recuperación y restauración",
              description:
                "Restaura los sistemas desde copias de seguridad limpias, verifica la integridad de los datos y escanea en busca de malware restante antes de reconectar los sistemas.",
            },
            learn: {
              title: "Análisis post-incidente",
              description:
                "Realiza una revisión exhaustiva del incidente para identificar cómo tuvo éxito el ataque y qué mejoras se necesitan para prevenir ataques futuros.",
            },
          },
          paymentTitle: "¿Deberías pagar el rescate?",
          paymentContent:
            "Las agencias de aplicación de la ley y los expertos en seguridad generalmente aconsejan contra el pago de rescates, ya que el pago no garantiza la recuperación de datos, financia actividades criminales y puede marcarte como un objetivo dispuesto para futuros ataques. Sin embargo, cada situación debe evaluarse en función del impacto empresarial, la disponibilidad de respaldos y otros factores.",
        },
        conclusion: {
          title: "Conclusión",
          content1:
            "El ransomware representa una de las amenazas más significativas para las pequeñas empresas en la actualidad, pero con la preparación adecuada y un enfoque de seguridad por capas, puedes reducir significativamente tu riesgo y minimizar el daño potencial.",
          content2:
            "Al implementar las estrategias descritas en esta guía—desde la prevención y el respaldo hasta la capacitación de empleados y la planificación de respuesta a incidentes—tu empresa estará mejor posicionada para resistir y recuperarse de ataques de ransomware.",
          ctaTitle: "¿Necesitas ayuda para asegurar tu empresa?",
          ctaContent:
            "CyberSentry ofrece servicios integrales de protección contra ransomware diseñados específicamente para pequeñas y medianas empresas. Nuestros expertos pueden ayudarte a implementar todas las estrategias discutidas en este artículo.",
          ctaButton: "Contacta a nuestros expertos en seguridad",
        },
      },
    },
  },

  de: {
    // Navigation
    home: "Startseite",
    services: "Dienstleistungen",
    about: "Über uns",
    blog: "Blog",
    contact: "Kontakt",
    toggleMenu: "Menü umschalten",

    // Hero section
    heroTitle: "CyberSentry für KMU: Schutz für die Zukunft Ihres Unternehmens",
    heroSubtitle: "Umfassende Cybersicherheitslösungen, maßgeschneidert für kleine und mittlere Unternehmen",
    getStarted: "Jetzt starten",

    // Blog section
    latestArticles: "Neueste Artikel",
    readMore: "Weiterlesen",

    article1: {
      title: "5 Wesentliche Cybersicherheitspraktiken für KMU",
      excerpt:
        "Entdecken Sie die grundlegenden Sicherheitsmaßnahmen, die jedes kleine Unternehmen implementieren sollte, um seine digitalen Vermögenswerte zu schützen.",
    },
    article2: {
      title: "Cloud-Sicherheit: Was Ihr Unternehmen wissen muss",
      excerpt:
        "Erfahren Sie, wie Sie Ihre Cloud-Infrastruktur sichern und Ihre Unternehmensdaten vor neuen Bedrohungen schützen können.",
    },
    article3: {
      title: "Phishing-Angriffe erkennen und verhindern",
      excerpt:
        "Bleiben Sie Cyberkriminellen einen Schritt voraus, indem Sie lernen, raffinierte Phishing-Versuche zu identifizieren und zu minimieren.",
    },
    article4: {
      title: "Mitarbeiterschulung: Ihre erste Verteidigungslinie",
      excerpt:
        "Entdecken Sie, warum Ihre Teammitglieder sowohl Ihre größte Schwachstelle als auch Ihr stärkster Vorteil in der Cybersicherheit sind.",
    },

    // Featured article
    featuredArticle: "Hervorgehobener Artikel",
    featuredTitle: "Ransomware-Schutzstrategien für kleine Unternehmen",
    featuredExcerpt:
      "Ransomware-Angriffe gegen kleine Unternehmen haben im letzten Jahr um 300% zugenommen. Ist Ihr Unternehmen vorbereitet?",
    featuredContent:
      "Kleine Unternehmen werden zunehmend zu Zielen von Ransomware-Angriffen aufgrund ihrer typischerweise niedrigeren Sicherheitsbudgets und weniger robusten Abwehrmaßnahmen. Dieser umfassende Leitfaden skizziert praktische Schritte zum Schutz Ihres Unternehmens vor diesen verheerenden Angriffen, ohne das Budget zu sprengen.",
    readFullArticle: "Vollständigen Artikel lesen",

    // Footer
    footerTagline: "Schutz kleiner und mittlerer Unternehmen mit Cybersicherheitslösungen auf Unternehmensniveau.",
    quickLinks: "Schnelllinks",
    contactUs: "Kontaktieren Sie uns",
    address: "Sicherheitsallee 123, Cyberstadt, CT 10101",
    allRightsReserved: "Alle Rechte vorbehalten",

    // Ransomware Article
    ransomware: {
      title: "Ransomware-Schutzstrategien für kleine Unternehmen",
      subtitle:
        "Ein umfassender Leitfaden zum Schutz Ihres Unternehmens vor zunehmend raffinierten Ransomware-Bedrohungen",
      publishDate: "15. März 2025",
      backToHome: "Zurück zur Startseite",
      share: "Diesen Artikel teilen:",
      tableOfContents: "Inhaltsverzeichnis",
      tags: {
        security: "Sicherheit",
        ransomware: "Ransomware",
        smb: "Kleinunternehmen",
      },
      sections: {
        introduction: {
          title: "Einführung",
          content1:
            "Ransomware-Angriffe sind zu einer der bedeutendsten Cybersicherheitsbedrohungen für kleine und mittlere Unternehmen geworden. Diese bösartigen Angriffe verschlüsseln die Daten eines Unternehmens und machen sie unzugänglich, bis ein Lösegeld an die Angreifer gezahlt wird, oft in Kryptowährung, um eine Rückverfolgung zu vermeiden.",
          content2:
            "Die Landschaft der Ransomware-Angriffe hat sich in den letzten Jahren dramatisch verändert, wobei Angreifer zunehmend raffinierte Techniken einsetzen und Unternehmen aller Größen ins Visier nehmen. Kleine Unternehmen sind besonders gefährdet aufgrund begrenzter Ressourcen für Cybersicherheitsinfrastruktur und Fachwissen.",
          statistic: "Anstieg der Ransomware-Angriffe auf kleine Unternehmen im vergangenen Jahr",
        },
        whatIs: {
          title: "Was ist Ransomware?",
          content1:
            "Ransomware ist eine Art von Schadsoftware (Malware), die entwickelt wurde, um den Zugriff auf ein Computersystem oder Daten zu blockieren, bis eine Geldsumme gezahlt wird. Sie verschlüsselt typischerweise Dateien auf dem System des Opfers, macht sie unzugänglich und fordert eine Zahlung für den Entschlüsselungsschlüssel.",
          content2:
            "Moderne Ransomware-Angriffe verwenden oft eine doppelte Erpressungstechnik, bei der Angreifer nicht nur Daten verschlüsseln, sondern auch sensible Informationen extrahieren und drohen, diese zu veröffentlichen, wenn das Lösegeld nicht gezahlt wird, was einen zusätzlichen Druck auf die Opfer ausübt.",
          imageCaption: "Typischer Ransomware-Angriffsablauf: Infiltration, Verschlüsselung und Erpressung",
          typesTitle: "Häufige Arten von Ransomware",
          types: {
            encryptor: {
              name: "Crypto Ransomware",
              description:
                "Verschlüsselt Dateien und Dokumente auf einem System und macht sie ohne Entschlüsselungsschlüssel unzugänglich.",
            },
            locker: {
              name: "Locker Ransomware",
              description:
                "Sperrt Benutzer vollständig aus ihren Geräten aus und verhindert den Zugriff auf das System anstatt nur auf Dateien.",
            },
            doxware: {
              name: "Doxware/Leakware",
              description:
                "Droht damit, gestohlene sensible Daten online zu veröffentlichen, wenn das Lösegeld nicht gezahlt wird.",
            },
            raas: {
              name: "Ransomware-as-a-Service (RaaS)",
              description:
                "Abonnementbasiertes Modell, bei dem Entwickler Ransomware-Tools an Partner bereitstellen, die Angriffe durchführen und Gewinne teilen.",
            },
          },
        },
        whyTarget: {
          title: "Warum kleine Unternehmen ins Visier genommen werden",
          content1:
            "Cyberkriminelle nehmen zunehmend kleine Unternehmen ins Visier, weil sie oft die perfekte Kombination aus wertvollen Daten und begrenzten Sicherheitsressourcen darstellen. Während große Unternehmen über dedizierte Sicherheitsteams und erhebliche Budgets verfügen, fehlt es kleinen Unternehmen häufig an beidem.",
          content2:
            "Das Verständnis, warum Ihr kleines Unternehmen im Fadenkreuz stehen könnte, ist der erste Schritt zur Implementierung effektiver Schutzstrategien.",
          calloutTitle: "Wussten Sie?",
          calloutContent:
            "Laut aktuellen Studien gehen 60% der kleinen Unternehmen, die einen Ransomware-Angriff erleiden, innerhalb von sechs Monaten unter, wenn sie ihre Daten nicht wiederherstellen können.",
          reasons: {
            security: {
              title: "Begrenzte Sicherheitsressourcen",
              description:
                "Kleinen Unternehmen fehlt oft dediziertes IT-Sicherheitspersonal und ausgeklügelte Sicherheitstools, die größere Organisationen einsetzen.",
            },
            resources: {
              title: "Unzureichende Backup-Lösungen",
              description:
                "Viele kleine Unternehmen unterhalten keine ordnungsgemäßen Backup-Systeme, was sie eher dazu bringt, Lösegelder zu zahlen, um kritische Daten wiederherzustellen.",
            },
            awareness: {
              title: "Geringeres Sicherheitsbewusstsein",
              description:
                "Mitarbeiter in kleineren Unternehmen erhalten möglicherweise weniger Cybersicherheitsschulung, was sie anfälliger für Phishing und Social Engineering macht.",
            },
            payment: {
              title: "Höhere Wahrscheinlichkeit der Zahlung",
              description:
                "Kleine Unternehmen zahlen oft schnell Lösegelder, um den Betrieb wieder aufzunehmen, was sie zu attraktiven Zielen für schnelle Gewinne macht.",
            },
          },
        },
        prevention: {
          title: "Präventionsstrategien",
          content1:
            "Die Verhinderung von Ransomware-Angriffen erfordert einen mehrschichtigen Sicherheitsansatz. Keine einzelne Lösung kann vollständigen Schutz bieten, aber die Implementierung mehrerer Verteidigungsmaßnahmen reduziert Ihr Risiko erheblich.",
          tipsTitle: "Implementierungstipps:",
          strategies: {
            updates: {
              title: "Halten Sie Systeme aktuell",
              description:
                "Aktualisieren Sie regelmäßig Betriebssysteme, Anwendungen und Firmware, um Sicherheitslücken zu schließen, die Ransomware oft ausnutzt.",
              tips: {
                tip1: "Aktivieren Sie automatische Updates, wann immer möglich",
                tip2: "Erstellen Sie einen Zeitplan für die Überprüfung und Anwendung von Updates, die nicht automatisiert werden können",
                tip3: "Führen Sie ein Inventar aller Software, um sicherzustellen, dass nichts übersehen wird",
              },
            },
            antivirus: {
              title: "Moderne Antiviren-Lösungen einsetzen",
              description:
                "Verwenden Sie seriöse Antiviren- und Anti-Malware-Lösungen mit Echtzeit-Schutzfunktionen und regelmäßigen Definitionsupdates.",
              tips: {
                tip1: "Wählen Sie Lösungen mit spezifischen Ransomware-Schutzfunktionen",
                tip2: "Aktivieren Sie Echtzeit-Scanning und geplante Tiefenscans",
                tip3: "Erwägen Sie Endpoint Detection and Response (EDR)-Lösungen für besseren Schutz",
              },
            },
            firewall: {
              title: "Starken Firewall-Schutz implementieren",
              description:
                "Konfigurieren Sie Firewalls, um ein- und ausgehenden Netzwerkverkehr basierend auf vordefinierten Sicherheitsregeln zu überwachen und zu kontrollieren.",
              tips: {
                tip1: "Verwenden Sie sowohl Hardware- als auch Software-Firewalls für mehrschichtigen Schutz",
                tip2: "Überprüfen und aktualisieren Sie regelmäßig Firewall-Regeln",
                tip3: "Erwägen Sie eine Next-Generation-Firewall (NGFW) mit erweitertem Bedrohungsschutz",
              },
            },
            email: {
              title: "E-Mail-Sicherheit verbessern",
              description:
                "Da E-Mail die häufigste Ransomware-Übertragungsmethode ist, ist die Implementierung robuster E-Mail-Sicherheitsmaßnahmen unerlässlich.",
              tips: {
                tip1: "Verwenden Sie E-Mail-Filterdienste, um verdächtige Anhänge zu blockieren",
                tip2: "Implementieren Sie DMARC, SPF und DKIM, um E-Mail-Spoofing zu verhindern",
                tip3: "Erwägen Sie ein sicheres E-Mail-Gateway mit Sandboxing-Funktionen",
              },
            },
          },
        },
        backup: {
          title: "Backup- und Wiederherstellungsstrategien",
          content1:
            "Eine robuste Backup-Strategie ist Ihre letzte Verteidigungslinie gegen Ransomware. Selbst wenn die Prävention versagt, können ordnungsgemäße Backups Ihnen helfen, sich ohne Zahlung des Lösegelds zu erholen.",
          content2:
            "Das Ziel ist, Backups zu unterhalten, die Ransomware nicht erreichen oder verschlüsseln kann, sodass Sie Ihre Systeme mit minimalem Datenverlust und minimaler Unterbrechung in einen Zustand vor dem Angriff zurückversetzen können.",
          methodsTitle: "Effektive Backup-Methoden",
          methods: {
            threeTwo: {
              title: "3-2-1-Backup-Regel",
              description:
                "Bewahren Sie mindestens drei Kopien Ihrer Daten auf zwei verschiedenen Speichermedien auf, wobei eine Kopie außerhalb des Standorts oder in der Cloud gespeichert wird.",
            },
            offsite: {
              title: "Air-gapped Backups",
              description:
                "Halten Sie einige Backups vollständig von Ihrem Netzwerk getrennt, um sicherzustellen, dass sie nicht von Ransomware erreicht werden können.",
            },
            testing: {
              title: "Regelmäßige Backup-Tests",
              description:
                "Testen Sie regelmäßig Ihren Backup-Wiederherstellungsprozess, um sicherzustellen, dass er bei Bedarf funktioniert, und identifizieren Sie potenzielle Probleme.",
            },
            encryption: {
              title: "Verschlüsselte Backups",
              description:
                "Verschlüsseln Sie Ihre Backups, um sensible Daten vor unbefugtem Zugriff zu schützen, falls Backup-Medien verloren gehen oder gestohlen werden.",
            },
          },
          warningTitle: "Wichtige Warnung",
          warningContent:
            "Einige fortschrittliche Ransomware-Varianten zielen speziell auf Backup-Systeme ab. Stellen Sie sicher, dass Ihre Backup-Lösung über Ransomware-Schutzfunktionen und unveränderliche Speicheroptionen verfügt.",
        },
        training: {
          title: "Mitarbeiterschulung und Bewusstsein",
          content1:
            "Ihre Mitarbeiter sind sowohl Ihre größte Schwachstelle als auch Ihre stärkste Verteidigung gegen Ransomware-Angriffe. Menschliches Versagen, wie das Klicken auf bösartige Links oder das Öffnen infizierter Anhänge, bleibt der primäre Einstiegspunkt für Ransomware.",
          content2:
            "Ein umfassendes Schulungsprogramm zum Sicherheitsbewusstsein kann Ihr Risiko erheblich reduzieren, indem es Mitarbeiter lehrt, häufige Angriffsvektoren zu erkennen und zu vermeiden.",
          programTitle: "Aufbau eines effektiven Schulungsprogramms",
          steps: {
            awareness: {
              title: "Allgemeines Sicherheitsbewusstsein",
              description:
                "Klären Sie Mitarbeiter über die Bedeutung der Cybersicherheit auf und wie ihre Handlungen die gesamte Organisation beeinflussen können.",
            },
            phishing: {
              title: "Phishing-Erkennungstraining",
              description:
                "Bringen Sie Mitarbeitern bei, verdächtige E-Mails, Links und Anhänge durch Beispiele und interaktive Übungen zu identifizieren.",
            },
            passwords: {
              title: "Passwort-Management",
              description:
                "Implementieren Sie starke Passwortrichtlinien und schulen Sie Mitarbeiter in der Verwendung von Passwort-Managern und Multi-Faktor-Authentifizierung.",
            },
            simulation: {
              title: "Phishing-Simulationen",
              description:
                "Führen Sie regelmäßige Phishing-Simulationsübungen durch, um das Bewusstsein der Mitarbeiter zu testen und gezielte Schulungen für diejenigen anzubieten, die sie benötigen.",
            },
            reporting: {
              title: "Verfahren zur Vorfallmeldung",
              description:
                "Etablieren Sie klare Verfahren für die Meldung verdächtiger Aktivitäten und potenzieller Sicherheitsvorfälle.",
            },
          },
        },
        response: {
          title: "Planung der Vorfallreaktion",
          content1:
            "Trotz Ihrer besten Präventionsbemühungen ist es wichtig, sich auf die Möglichkeit eines erfolgreichen Ransomware-Angriffs vorzubereiten. Ein gut dokumentierter und geübter Vorfallreaktionsplan kann die Auswirkungen und die Wiederherstellungszeit erheblich reduzieren.",
          planTitle: "Elemente des Ransomware-Reaktionsplans",
          steps: {
            isolate: {
              title: "Isolation und Eindämmung",
              description:
                "Trennen Sie infizierte Systeme sofort vom Netzwerk, um zu verhindern, dass sich die Ransomware auf andere Systeme und Backups ausbreitet.",
            },
            identify: {
              title: "Identifikation und Bewertung",
              description:
                "Bestimmen Sie die Ransomware-Variante, das Ausmaß der Infektion und die betroffenen Systeme und Daten, um Ihre Reaktion zu steuern.",
            },
            report: {
              title: "Benachrichtigung und Meldung",
              description:
                "Melden Sie den Vorfall den Strafverfolgungsbehörden, benachrichtigen Sie betroffene Parteien gemäß den Vorschriften und kontaktieren Sie gegebenenfalls Ihren Cyber-Versicherungsanbieter.",
            },
            recover: {
              title: "Wiederherstellung und Restaurierung",
              description:
                "Stellen Sie Systeme aus sauberen Backups wieder her, überprüfen Sie die Datenintegrität und scannen Sie nach verbleibender Malware, bevor Sie Systeme wieder verbinden.",
            },
            learn: {
              title: "Nachbearbeitung des Vorfalls",
              description:
                "Führen Sie eine gründliche Überprüfung des Vorfalls durch, um zu identifizieren, wie der Angriff erfolgreich war und welche Verbesserungen notwendig sind, um zukünftige Angriffe zu verhindern.",
            },
          },
          paymentTitle: "Sollten Sie das Lösegeld zahlen?",
          paymentContent:
            "Strafverfolgungsbehörden und Sicherheitsexperten raten im Allgemeinen davon ab, Lösegelder zu zahlen, da die Zahlung keine Datenwiederherstellung garantiert, kriminelle Aktivitäten finanziert und Sie möglicherweise als williges Ziel für zukünftige Angriffe kennzeichnet. Jede Situation muss jedoch basierend auf den Auswirkungen auf das Geschäft, der Verfügbarkeit von Backups und anderen Faktoren bewertet werden.",
        },
        conclusion: {
          title: "Fazit",
          content1:
            "Ransomware stellt heute eine der bedeutendsten Bedrohungen für kleine Unternehmen dar, aber mit angemessener Vorbereitung und einem mehrschichtigen Sicherheitsansatz können Sie Ihr Risiko erheblich reduzieren und potenzielle Schäden minimieren.",
          content2:
            "Durch die Implementierung der in diesem Leitfaden beschriebenen Strategien – von Prävention und Backup bis hin zu Mitarbeiterschulung und Planung der Vorfallreaktion – wird Ihr Unternehmen besser positioniert sein, um Ransomware-Angriffen standzuhalten und sich davon zu erholen.",
          ctaTitle: "Benötigen Sie Hilfe bei der Sicherung Ihres Unternehmens?",
          ctaContent:
            "CyberSentry bietet umfassende Ransomware-Schutzservices, die speziell für kleine und mittlere Unternehmen zugeschnitten sind. Unsere Experten können Ihnen helfen, alle in diesem Artikel diskutierten Strategien zu implementieren.",
          ctaButton: "Kontaktieren Sie unsere Sicherheitsexperten",
        },
      },
    },
  },

  hr: {
    // Navigation
    home: "Početna",
    services: "Usluge",
    about: "O nama",
    blog: "Blog",
    contact: "Kontakt",
    toggleMenu: "Prebaci izbornik",

    // Hero section
    heroTitle: "CyberSentry za MSP: Štitimo budućnost vašeg poslovanja",
    heroSubtitle: "Sveobuhvatna rješenja za kibernetičku sigurnost prilagođena malim i srednjim poduzećima",
    getStarted: "Započnite",

    // Blog section
    latestArticles: "Najnoviji članci",
    readMore: "Pročitaj više",

    article1: {
      title: "5 Ključnih praksi kibernetičke sigurnosti za MSP",
      excerpt:
        "Otkrijte temeljne sigurnosne mjere koje svako malo poduzeće treba implementirati za zaštitu svojih digitalnih sredstava.",
    },
    article2: {
      title: "Sigurnost u oblaku: Što vaše poduzeće treba znati",
      excerpt:
        "Naučite kako osigurati svoju infrastrukturu u oblaku i zaštititi podatke vašeg poduzeća od novih prijetnji.",
    },
    article3: {
      title: "Prepoznavanje i sprječavanje phishing napada",
      excerpt:
        "Budite korak ispred kibernetičkih kriminalaca učeći prepoznati i ublažiti sofisticirane pokušaje phishinga.",
    },
    article4: {
      title: "Obuka zaposlenika: Vaša prva linija obrane",
      excerpt:
        "Otkrijte zašto su članovi vašeg tima istovremeno vaša najveća ranjivost i najjača prednost u kibernetičkoj sigurnosti.",
    },

    // Featured article
    featuredArticle: "Izdvojeni članak",
    featuredTitle: "Strategije zaštite od ransomwarea za mala poduzeća",
    featuredExcerpt:
      "Napadi ransomwareom na mala poduzeća povećali su se za 300% u posljednjih godinu dana. Je li vaše poduzeće spremno?",
    featuredContent:
      "Mala poduzeća sve više postaju meta napada ransomwareom zbog njihovih tipično nižih sigurnosnih proračuna i manje robusne obrane. Ovaj sveobuhvatni vodič opisuje praktične korake za zaštitu vašeg poslovanja od ovih razornih napada bez velikih troškova.",
    readFullArticle: "Pročitajte cijeli članak",

    // Footer
    footerTagline: "Zaštita malih i srednjih poduzeća s rješenjima za kibernetičku sigurnost na razini velikih tvrtki.",
    quickLinks: "Brze poveznice",
    contactUs: "Kontaktirajte nas",
    address: "Sigurnosna avenija 123, Cybergrad, CT 10101",
    allRightsReserved: "Sva prava pridržana",

    // Ransomware Article
    ransomware: {
      title: "Strategije zaštite od ransomwarea za mala poduzeća",
      subtitle: "Sveobuhvatni vodič za zaštitu vašeg poslovanja od sve sofisticiranijih ransomware prijetnji",
      publishDate: "15. ožujka 2025.",
      backToHome: "Povratak na početnu",
      share: "Podijelite ovaj članak:",
      tableOfContents: "Sadržaj",
      tags: {
        security: "Sigurnost",
        ransomware: "Ransomware",
        smb: "Malo poduzeće",
      },
      sections: {
        introduction: {
          title: "Uvod",
          content1:
            "Napadi ransomwareom postali su jedna od najznačajnijih prijetnji kibernetičkoj sigurnosti s kojima se danas suočavaju mala i srednja poduzeća. Ovi zlonamjerni napadi šifriraju podatke tvrtke, čineći ih nedostupnima dok se napadačima ne plati otkupnina, često u kriptovaluti kako bi se izbjeglo praćenje.",
          content2:
            "Krajolik napada ransomwareom dramatično se razvio posljednjih godina, s napadačima koji koriste sve sofisticiranije tehnike i ciljaju poduzeća svih veličina. Mala poduzeća posebno su ranjiva zbog ograničenih resursa za infrastrukturu kibernetičke sigurnosti i stručnosti.",
          statistic: "Povećanje napada ransomwareom usmjerenih na mala poduzeća u protekloj godini",
        },
        whatIs: {
          title: "Što je ransomware?",
          content1:
            "Ransomware je vrsta zlonamjernog softvera (malware) dizajniranog za blokiranje pristupa računalnom sustavu ili podacima dok se ne plati određena svota novca. Obično šifrira datoteke na sustavu žrtve, čineći ih nedostupnima, i zahtijeva plaćanje za ključ za dešifriranje.",
          content2:
            "Moderni napadi ransomwareom često koriste tehniku dvostruke iznude, gdje napadači ne samo da šifriraju podatke već i izvlače osjetljive informacije i prijete njihovim objavljivanjem ako se otkupnina ne plati, dodajući još jedan sloj pritiska na žrtve.",
          imageCaption: "Tipičan tijek napada ransomwareom: infiltracija, šifriranje i iznuda",
          typesTitle: "Uobičajene vrste ransomwarea",
          types: {
            encryptor: {
              name: "Crypto Ransomware",
              description:
                "Šifrira datoteke i dokumente na sustavu, čineći ih nedostupnima bez ključa za dešifriranje.",
            },
            locker: {
              name: "Locker Ransomware",
              description:
                "Zaključava korisnike izvan njihovih uređaja u potpunosti, sprječavajući pristup sustavu, a ne samo datotekama.",
            },
            doxware: {
              name: "Doxware/Leakware",
              description:
                "Prijeti objavljivanjem ukradenih osjetljivih podataka na internetu ako se otkupnina ne plati.",
            },
            raas: {
              name: "Ransomware-as-a-Service (RaaS)",
              description:
                "Model temeljen na pretplati gdje programeri pružaju alate za ransomware suradnicima koji provode napade i dijele profit.",
            },
          },
        },
        whyTarget: {
          title: "Zašto su mala poduzeća meta",
          content1:
            "Kibernetički kriminalci sve više ciljaju mala poduzeća jer često predstavljaju savršenu kombinaciju vrijednih podataka i ograničenih sigurnosnih resursa. Dok velika poduzeća imaju posvećene sigurnosne timove i značajne proračune, malim poduzećima često nedostaje oboje.",
          content2:
            "Razumijevanje zašto bi vaše malo poduzeće moglo biti na nišanu prvi je korak prema implementaciji učinkovitih strategija zaštite.",
          calloutTitle: "Jeste li znali?",
          calloutContent:
            "Prema nedavnim studijama, 60% malih poduzeća koja pretrpe napad ransomwareom prestaje s poslovanjem unutar šest mjeseci ako ne mogu oporaviti svoje podatke.",
          reasons: {
            security: {
              title: "Ograničeni sigurnosni resursi",
              description:
                "Malim poduzećima često nedostaje posvećeno IT sigurnosno osoblje i sofisticirani sigurnosni alati koje koriste veće organizacije.",
            },
            resources: {
              title: "Nedovoljne sigurnosne kopije",
              description:
                "Mnoga mala poduzeća ne održavaju pravilne sustave sigurnosnih kopija, što ih čini vjerojatnijima za plaćanje otkupnina kako bi oporavili kritične podatke.",
            },
            awareness: {
              title: "Niža sigurnosna svijest",
              description:
                "Zaposlenici u manjim tvrtkama mogu primiti manje obuke o kibernetičkoj sigurnosti, što ih čini podložnijima phishingu i socijalnom inženjeringu.",
            },
            payment: {
              title: "Veća vjerojatnost plaćanja",
              description:
                "Mala poduzeća često brzo plaćaju otkupnine kako bi nastavila s poslovanjem, što ih čini atraktivnim metama za brzu zaradu.",
            },
          },
        },
        prevention: {
          title: "Strategije prevencije",
          content1:
            "Sprječavanje napada ransomwareom zahtijeva višeslojni pristup sigurnosti. Nijedno pojedinačno rješenje ne može pružiti potpunu zaštitu, ali implementacija nekoliko obrambenih mjera značajno smanjuje vašu izloženost riziku.",
          tipsTitle: "Savjeti za implementaciju:",
          strategies: {
            updates: {
              title: "Održavajte sustave ažuriranima",
              description:
                "Redovito ažurirajte operativne sustave, aplikacije i firmware kako biste zakrpali sigurnosne ranjivosti koje ransomware često iskorištava.",
              tips: {
                tip1: "Omogućite automatska ažuriranja kad god je to moguće",
                tip2: "Stvorite raspored za provjeru i primjenu ažuriranja koja se ne mogu automatizirati",
                tip3: "Održavajte inventar svog softvera kako biste bili sigurni da ništa nije previđeno",
              },
            },
            antivirus: {
              title: "Implementirajte moderna antivirusna rješenja",
              description:
                "Koristite ugledna antivirusna i anti-malware rješenja s mogućnostima zaštite u stvarnom vremenu i redovitim ažuriranjima definicija.",
              tips: {
                tip1: "Odaberite rješenja s posebnim značajkama zaštite od ransomwarea",
                tip2: "Omogućite skeniranje u stvarnom vremenu i planirane dubinske skenove",
                tip3: "Razmislite o rješenjima za otkrivanje i odgovor na krajnjim točkama (EDR) za bolju zaštitu",
              },
            },
            firewall: {
              title: "Implementirajte snažnu zaštitu vatrozida",
              description:
                "Konfigurirajte vatrozide za praćenje i kontrolu dolaznog i odlaznog mrežnog prometa na temelju unaprijed određenih sigurnosnih pravila.",
              tips: {
                tip1: "Koristite i hardverske i softverske vatrozide za slojevitu zaštitu",
                tip2: "Redovito pregledavajte i ažurirajte pravila vatrozida",
                tip3: "Razmislite o vatrozidu nove generacije (NGFW) s naprednom zaštitom od prijetnji",
              },
            },
            email: {
              title: "Poboljšajte sigurnost e-pošte",
              description:
                "Budući da je e-pošta najčešća metoda isporuke ransomwarea, implementacija robusnih mjera sigurnosti e-pošte je ključna.",
              tips: {
                tip1: "Koristite usluge filtriranja e-pošte za blokiranje sumnjivih privitaka",
                tip2: "Implementirajte DMARC, SPF i DKIM za sprječavanje lažiranja e-pošte",
                tip3: "Razmislite o sigurnom pristupniku e-pošte s mogućnostima sandboxinga",
              },
            },
          },
        },
        backup: {
          title: "Strategije sigurnosnih kopija i oporavka",
          content1:
            "Robusna strategija sigurnosnih kopija vaša je posljednja linija obrane protiv ransomwarea. Čak i ako prevencija ne uspije, pravilne sigurnosne kopije mogu vam pomoći da se oporavite bez plaćanja otkupnine.",
          content2:
            "Cilj je održavati sigurnosne kopije koje ransomware ne može doseći ili šifrirati, omogućujući vam da obnovite svoje sustave u stanje prije napada s minimalnim gubitkom podataka i prekidom.",
          methodsTitle: "Učinkovite metode sigurnosnih kopija",
          methods: {
            threeTwo: {
              title: "Pravilo sigurnosnih kopija 3-2-1",
              description:
                "Održavajte najmanje tri kopije vaših podataka, na dvije različite vrste medija za pohranu, s jednom kopijom pohranjenom izvan lokacije ili u oblaku.",
            },
            offsite: {
              title: "Air-gapped sigurnosne kopije",
              description:
                "Držite neke sigurnosne kopije potpuno odvojene od vaše mreže kako biste osigurali da ih ransomware ne može doseći.",
            },
            testing: {
              title: "Redovito testiranje sigurnosnih kopija",
              description:
                "Periodično testirajte svoj proces obnavljanja sigurnosnih kopija kako biste osigurali da radi kada je potrebno i identificirali potencijalne probleme.",
            },
            encryption: {
              title: "Šifrirane sigurnosne kopije",
              description:
                "Šifrirajte svoje sigurnosne kopije kako biste zaštitili osjetljive podatke od neovlaštenog pristupa ako se mediji za sigurnosne kopije izgube ili ukradu.",
            },
          },
          warningTitle: "Važno upozorenje",
          warningContent:
            "Neke napredne varijante ransomwarea posebno ciljaju sustave sigurnosnih kopija. Osigurajte da vaše rješenje za sigurnosne kopije ima značajke zaštite od ransomwarea i opcije nepromjenjive pohrane.",
        },
        training: {
          title: "Obuka i svijest zaposlenika",
          content1:
            "Vaši zaposlenici su istovremeno vaša najveća ranjivost i vaša najjača obrana protiv napada ransomwareom. Ljudska pogreška, poput klikanja na zlonamjerne poveznice ili otvaranja zaraženih privitaka, ostaje primarni ulazni put za ransomware.",
          content2:
            "Sveobuhvatni program obuke o sigurnosnoj svijesti može značajno smanjiti vaš rizik učeći zaposlenike prepoznati i izbjegavati uobičajene vektore napada.",
          programTitle: "Izgradnja učinkovitog programa obuke",
          steps: {
            awareness: {
              title: "Opća sigurnosna svijest",
              description:
                "Educirajte zaposlenike o važnosti kibernetičke sigurnosti i kako njihove akcije mogu utjecati na cijelu organizaciju.",
            },
            phishing: {
              title: "Obuka za prepoznavanje phishinga",
              description:
                "Naučite zaposlenike identificirati sumnjive e-mailove, poveznice i privitke kroz primjere i interaktivne vježbe.",
            },
            passwords: {
              title: "Upravljanje lozinkama",
              description:
                "Implementirajte jake politike lozinki i obučite zaposlenike o korištenju upravitelja lozinki i višefaktorske autentifikacije.",
            },
            simulation: {
              title: "Simulacije phishinga",
              description:
                "Provodite redovite vježbe simulacije phishinga kako biste testirali svijest zaposlenika i pružili ciljanu obuku onima kojima je potrebna.",
            },
            reporting: {
              title: "Postupci prijavljivanja incidenata",
              description:
                "Uspostavite jasne postupke za prijavljivanje sumnjivih aktivnosti i potencijalnih sigurnosnih incidenata.",
            },
          },
        },
        response: {
          title: "Planiranje odgovora na incidente",
          content1:
            "Unatoč vašim najboljim naporima prevencije, ključno je pripremiti se za mogućnost uspješnog napada ransomwareom. Dobro dokumentiran i uvježban plan odgovora na incidente može značajno smanjiti utjecaj i vrijeme oporavka.",
          planTitle: "Elementi plana odgovora na ransomware",
          steps: {
            isolate: {
              title: "Izolacija i zadržavanje",
              description:
                "Odmah odspojite zaražene sustave s mreže kako biste spriječili širenje ransomwarea na druge sustave i sigurnosne kopije.",
            },
            identify: {
              title: "Identifikacija i procjena",
              description:
                "Odredite varijantu ransomwarea, opseg zaraze te pogođene sustave i podatke kako biste usmjerili svoj odgovor.",
            },
            report: {
              title: "Obavještavanje i izvještavanje",
              description:
                "Prijavite incident tijelima za provedbu zakona, obavijestite pogođene strane prema zahtjevima propisa i kontaktirajte svog pružatelja cyber osiguranja ako je primjenjivo.",
            },
            recover: {
              title: "Oporavak i obnova",
              description:
                "Obnovite sustave iz čistih sigurnosnih kopija, provjerite integritet podataka i skenirajte preostali malware prije ponovnog povezivanja sustava.",
            },
            learn: {
              title: "Analiza nakon incidenta",
              description:
                "Provedite temeljitu reviziju incidenta kako biste identificirali kako je napad uspio i koje su poboljšanja potrebna za sprječavanje budućih napada.",
            },
          },
          paymentTitle: "Trebate li platiti otkupninu?",
          paymentContent:
            "Agencije za provedbu zakona i sigurnosni stručnjaci općenito savjetuju protiv plaćanja otkupnina, jer plaćanje ne jamči oporavak podataka, financira kriminalne aktivnosti i može vas označiti kao voljnu metu za buduće napade. Međutim, svaku situaciju treba procijeniti na temelju poslovnog utjecaja, dostupnosti sigurnosnih kopija i drugih faktora.",
        },
        conclusion: {
          title: "Zaključak",
          content1:
            "Ransomware predstavlja jednu od najznačajnijih prijetnji malim poduzećima danas, ali s pravilnom pripremom i slojevitim sigurnosnim pristupom, možete značajno smanjiti svoj rizik i minimizirati potencijalnu štetu.",
          content2:
            "Implementacijom strategija navedenih u ovom vodiču—od prevencije i sigurnosnih kopija do obuke zaposlenika i planiranja odgovora na incidente—vaše poslovanje će biti bolje pozicionirano za izdržavanje i oporavak od napada ransomwareom.",
          ctaTitle: "Trebate pomoć u osiguranju vašeg poslovanja?",
          ctaContent:
            "CyberSentry nudi sveobuhvatne usluge zaštite od ransomwarea prilagođene posebno za mala i srednja poduzeća. Naši stručnjaci vam mogu pomoći implementirati sve strategije o kojima se raspravljalo u ovom članku.",
          ctaButton: "Kontaktirajte naše sigurnosne stručnjake",
        },
      },
    },
  },

  pt: {
    // Navigation
    home: "Início",
    services: "Serviços",
    about: "Sobre",
    blog: "Blog",
    contact: "Contato",
    toggleMenu: "Alternar menu",

    // Hero section
    heroTitle: "CyberSentry para PMEs: Protegendo o Futuro do Seu Negócio",
    heroSubtitle: "Soluções abrangentes de cibersegurança adaptadas para pequenas e médias empresas",
    getStarted: "Começar",

    // Blog section
    latestArticles: "Artigos Recentes",
    readMore: "Leia mais",

    article1: {
      title: "5 Práticas Essenciais de Cibersegurança para PMEs",
      excerpt:
        "Descubra as medidas de segurança fundamentais que toda pequena empresa deve implementar para proteger seus ativos digitais.",
    },
    article2: {
      title: "Segurança na Nuvem: O que Sua Empresa Precisa Saber",
      excerpt:
        "Aprenda como proteger sua infraestrutura na nuvem e proteger os dados da sua empresa contra ameaças emergentes.",
    },
    article3: {
      title: "Reconhecendo e Prevenindo Ataques de Phishing",
      excerpt:
        "Mantenha-se um passo à frente dos cibercriminosos aprendendo a identificar e mitigar tentativas sofisticadas de phishing.",
    },
    article4: {
      title: "Treinamento de Funcionários: Sua Primeira Linha de Defesa",
      excerpt:
        "Descubra por que os membros da sua equipe são tanto sua maior vulnerabilidade quanto seu ativo mais forte em cibersegurança.",
    },

    // Featured article
    featuredArticle: "Artigo em Destaque",
    featuredTitle: "Estratégias de Proteção contra Ransomware para Pequenas Empresas",
    featuredExcerpt:
      "Ataques de ransomware contra pequenas empresas aumentaram 300% no último ano. Sua empresa está preparada?",
    featuredContent:
      "Pequenas empresas estão cada vez mais se tornando alvos de ataques de ransomware devido aos seus orçamentos de segurança tipicamente mais baixos e defesas menos robustas. Este guia abrangente descreve passos práticos para proteger seu negócio desses ataques devastadores sem comprometer seu orçamento.",
    readFullArticle: "Ler Artigo Completo",

    // Footer
    footerTagline: "Protegendo pequenas e médias empresas com soluções de cibersegurança de nível empresarial.",
    quickLinks: "Links Rápidos",
    contactUs: "Contate-nos",
    address: "Av. Segurança 123, Cidade Cyber, CT 10101",
    allRightsReserved: "Todos os Direitos Reservados",

    // Ransomware Article
    ransomware: {
      title: "Estratégias de Proteção contra Ransomware para Pequenas Empresas",
      subtitle: "Um guia abrangente para proteger seu negócio contra ameaças de ransomware cada vez mais sofisticadas",
      publishDate: "15 de março de 2025",
      backToHome: "Voltar para o Início",
      share: "Compartilhe este artigo:",
      tableOfContents: "Índice",
      tags: {
        security: "Segurança",
        ransomware: "Ransomware",
        smb: "Pequena Empresa",
      },
      sections: {
        introduction: {
          title: "Introdução",
          content1:
            "Ataques de ransomware tornaram-se uma das ameaças de cibersegurança mais significativas enfrentadas por pequenas e médias empresas hoje. Esses ataques maliciosos criptografam os dados de uma empresa, tornando-os inacessíveis até que um resgate seja pago aos atacantes, frequentemente em criptomoeda para evitar rastreamento.",
          content2:
            "O cenário de ataques de ransomware evoluiu dramaticamente nos últimos anos, com atacantes empregando técnicas cada vez mais sofisticadas e visando empresas de todos os tamanhos. Pequenas empresas são particularmente vulneráveis devido a recursos limitados para infraestrutura e expertise em cibersegurança.",
          statistic: "Aumento em ataques de ransomware visando pequenas empresas no último ano",
        },
        whatIs: {
          title: "O que é Ransomware?",
          content1:
            "Ransomware é um tipo de software malicioso (malware) projetado para bloquear o acesso a um sistema de computador ou dados até que uma soma de dinheiro seja paga. Ele tipicamente criptografa arquivos no sistema da vítima, tornando-os inacessíveis, e exige pagamento pela chave de descriptografia.",
          content2:
            "Ataques modernos de ransomware frequentemente empregam uma técnica de extorsão dupla, onde os atacantes não apenas criptografam dados, mas também extraem informações sensíveis e ameaçam publicá-las se o resgate não for pago, adicionando outra camada de pressão sobre as vítimas.",
          imageCaption: "Fluxo típico de ataque de ransomware: infiltração, criptografia e extorsão",
          typesTitle: "Tipos Comuns de Ransomware",
          types: {
            encryptor: {
              name: "Crypto Ransomware",
              description:
                "Criptografa arquivos e documentos em um sistema, tornando-os inacessíveis sem uma chave de descriptografia.",
            },
            locker: {
              name: "Locker Ransomware",
              description:
                "Bloqueia usuários de seus dispositivos completamente, impedindo o acesso ao sistema em vez de apenas aos arquivos.",
            },
            doxware: {
              name: "Doxware/Leakware",
              description: "Ameaça publicar dados sensíveis roubados online se o resgate não for pago.",
            },
            raas: {
              name: "Ransomware-as-a-Service (RaaS)",
              description:
                "Modelo baseado em assinatura onde desenvolvedores fornecem ferramentas de ransomware a afiliados que conduzem ataques e compartilham lucros.",
            },
          },
        },
        whyTarget: {
          title: "Por que Pequenas Empresas são Alvos",
          content1:
            "Cibercriminosos cada vez mais visam pequenas empresas porque elas frequentemente representam a combinação perfeita de dados valiosos e recursos de segurança limitados. Enquanto grandes empresas têm equipes de segurança dedicadas e orçamentos substanciais, pequenas empresas frequentemente carecem de ambos.",
          content2:
            "Entender por que sua pequena empresa pode estar na mira é o primeiro passo para implementar estratégias de proteção eficazes.",
          calloutTitle: "Você Sabia?",
          calloutContent:
            "De acordo com estudos recentes, 60% das pequenas empresas que sofrem um ataque de ransomware fecham dentro de seis meses se não conseguirem recuperar seus dados.",
          reasons: {
            security: {
              title: "Recursos de Segurança Limitados",
              description:
                "Pequenas empresas frequentemente carecem de pessoal dedicado à segurança de TI e ferramentas de segurança sofisticadas que organizações maiores empregam.",
            },
            resources: {
              title: "Soluções de Backup Insuficientes",
              description:
                "Muitas pequenas empresas não mantêm sistemas de backup adequados, tornando-as mais propensas a pagar resgates para recuperar dados críticos.",
            },
            awareness: {
              title: "Menor Conscientização de Segurança",
              description:
                "Funcionários em empresas menores podem receber menos treinamento em cibersegurança, tornando-os mais suscetíveis a phishing e engenharia social.",
            },
            payment: {
              title: "Maior Probabilidade de Pagamento",
              description:
                "Pequenas empresas frequentemente pagam resgates rapidamente para retomar operações, tornando-as alvos atraentes para lucros rápidos.",
            },
          },
        },
        prevention: {
          title: "Estratégias de Prevenção",
          content1:
            "Prevenir ataques de ransomware requer uma abordagem de segurança em múltiplas camadas. Nenhuma solução única pode fornecer proteção completa, mas implementar várias medidas defensivas reduz significativamente sua exposição ao risco.",
          tipsTitle: "Dicas de implementação:",
          strategies: {
            updates: {
              title: "Mantenha os Sistemas Atualizados",
              description:
                "Atualize regularmente sistemas operacionais, aplicativos e firmware para corrigir vulnerabilidades de segurança que o ransomware frequentemente explora.",
              tips: {
                tip1: "Ative atualizações automáticas sempre que possível",
                tip2: "Crie um cronograma para verificar e aplicar atualizações que não podem ser automatizadas",
                tip3: "Mantenha um inventário de todo o software para garantir que nada seja esquecido",
              },
            },
            antivirus: {
              title: "Implemente Soluções Antivírus Modernas",
              description:
                "Use soluções antivírus e anti-malware de boa reputação com capacidades de proteção em tempo real e atualizações regulares de definições.",
              tips: {
                tip1: "Escolha soluções com recursos específicos de proteção contra ransomware",
                tip2: "Ative a verificação em tempo real e verificações profundas programadas",
                tip3: "Considere soluções de detecção e resposta de endpoint (EDR) para melhor proteção",
              },
            },
            firewall: {
              title: "Implemente Proteção Forte de Firewall",
              description:
                "Configure firewalls para monitorar e controlar o tráfego de rede de entrada e saída com base em regras de segurança predeterminadas.",
              tips: {
                tip1: "Use firewalls de hardware e software para proteção em camadas",
                tip2: "Revise e atualize regularmente as regras de firewall",
                tip3: "Considere um firewall de próxima geração (NGFW) com proteção avançada contra ameaças",
              },
            },
            email: {
              title: "Melhore a Segurança de Email",
              description:
                "Como o email é o método mais comum de entrega de ransomware, implementar medidas robustas de segurança de email é essencial.",
              tips: {
                tip1: "Use serviços de filtragem de email para bloquear anexos suspeitos",
                tip2: "Implemente DMARC, SPF e DKIM para prevenir falsificação de email",
                tip3: "Considere um gateway de email seguro com capacidades de sandbox",
              },
            },
          },
        },
        backup: {
          title: "Estratégias de Backup e Recuperação",
          content1:
            "Uma estratégia robusta de backup é sua última linha de defesa contra ransomware. Mesmo se a prevenção falhar, backups adequados podem ajudá-lo a se recuperar sem pagar o resgate.",
          content2:
            "O objetivo é manter backups que o ransomware não possa alcançar ou criptografar, permitindo restaurar seus sistemas para um estado pré-ataque com perda mínima de dados e interrupção.",
          methodsTitle: "Métodos Eficazes de Backup",
          methods: {
            threeTwo: {
              title: "Regra de Backup 3-2-1",
              description:
                "Mantenha pelo menos três cópias de seus dados, em dois tipos diferentes de mídia de armazenamento, com uma cópia armazenada off-site ou na nuvem.",
            },
            offsite: {
              title: "Backups Air-gapped",
              description:
                "Mantenha alguns backups completamente desconectados de sua rede para garantir que não possam ser alcançados pelo ransomware.",
            },
            testing: {
              title: "Teste Regular de Backup",
              description:
                "Teste periodicamente seu processo de restauração de backup para garantir que funcione quando necessário e identifique quaisquer problemas potenciais.",
            },
            encryption: {
              title: "Backups Criptografados",
              description:
                "Criptografe seus backups para proteger dados sensíveis de acesso não autorizado se a mídia de backup for perdida ou roubada.",
            },
          },
          warningTitle: "Aviso Importante",
          warningContent:
            "Algumas variantes avançadas de ransomware visam especificamente sistemas de backup. Certifique-se de que sua solução de backup tenha recursos de proteção contra ransomware e opções de armazenamento imutável.",
        },
        training: {
          title: "Treinamento e Conscientização de Funcionários",
          content1:
            "Seus funcionários são tanto sua maior vulnerabilidade quanto sua defesa mais forte contra ataques de ransomware. Erro humano, como clicar em links maliciosos ou abrir anexos infectados, continua sendo o principal ponto de entrada para ransomware.",
          content2:
            "Um programa abrangente de treinamento de conscientização de segurança pode reduzir significativamente seu risco ensinando funcionários a reconhecer e evitar vetores de ataque comuns.",
          programTitle: "Construindo um Programa de Treinamento Eficaz",
          steps: {
            awareness: {
              title: "Conscientização Geral de Segurança",
              description:
                "Eduque funcionários sobre a importância da cibersegurança e como suas ações podem impactar toda a organização.",
            },
            phishing: {
              title: "Treinamento de Reconhecimento de Phishing",
              description:
                "Ensine funcionários a identificar emails, links e anexos suspeitos através de exemplos e exercícios interativos.",
            },
            passwords: {
              title: "Gerenciamento de Senhas",
              description:
                "Implemente políticas fortes de senha e treine funcionários no uso de gerenciadores de senha e autenticação multifator.",
            },
            simulation: {
              title: "Simulações de Phishing",
              description:
                "Conduza exercícios regulares de simulação de phishing para testar a conscientização dos funcionários e fornecer treinamento direcionado àqueles que precisam.",
            },
            reporting: {
              title: "Procedimentos de Relatório de Incidentes",
              description:
                "Estabeleça procedimentos claros para relatar atividades suspeitas e potenciais incidentes de segurança.",
            },
          },
        },
        response: {
          title: "Planejamento de Resposta a Incidentes",
          content1:
            "Apesar de seus melhores esforços de prevenção, é essencial se preparar para a possibilidade de um ataque de ransomware bem-sucedido. Um plano de resposta a incidentes bem documentado e praticado pode reduzir significativamente o impacto e o tempo de recuperação.",
          planTitle: "Elementos do Plano de Resposta a Ransomware",
          steps: {
            isolate: {
              title: "Isolamento e Contenção",
              description:
                "Desconecte imediatamente sistemas infectados da rede para evitar que o ransomware se espalhe para outros sistemas e backups.",
            },
            identify: {
              title: "Identificação e Avaliação",
              description:
                "Determine a variante de ransomware, extensão da infecção, e sistemas e dados afetados para orientar sua resposta.",
            },
            report: {
              title: "Notificação e Relatório",
              description:
                "Reporte o incidente às autoridades, notifique partes afetadas conforme exigido por regulamentos, e contate seu provedor de seguro cibernético, se aplicável.",
            },
            recover: {
              title: "Recuperação e Restauração",
              description:
                "Restaure sistemas a partir de backups limpos, verifique a integridade dos dados, e escaneie por malware remanescente antes de reconectar sistemas.",
            },
            learn: {
              title: "Análise Pós-Incidente",
              description:
                "Conduza uma revisão completa do incidente para identificar como o ataque teve sucesso e quais melhorias são necessárias para prevenir ataques futuros.",
            },
          },
          paymentTitle: "Você Deve Pagar o Resgate?",
          paymentContent:
            "Agências de aplicação da lei e especialistas em segurança geralmente aconselham contra o pagamento de resgates, pois o pagamento não garante a recuperação de dados, financia atividades criminosas, e pode marcá-lo como um alvo disposto para ataques futuros. No entanto, cada situação deve ser avaliada com base no impacto nos negócios, disponibilidade de backups e outros fatores.",
        },
        conclusion: {
          title: "Conclusão",
          content1:
            "Ransomware representa uma das ameaças mais significativas para pequenas empresas hoje, mas com preparação adequada e uma abordagem de segurança em camadas, você pode reduzir significativamente seu risco e minimizar danos potenciais.",
          content2:
            "Ao implementar as estratégias descritas neste guia—desde prevenção e backup até treinamento de funcionários e planejamento de resposta a incidentes—seu negócio estará melhor posicionado para resistir e se recuperar de ataques de ransomware.",
          ctaTitle: "Precisa de Ajuda para Proteger seu Negócio?",
          ctaContent:
            "CyberSentry oferece serviços abrangentes de proteção contra ransomware adaptados especificamente para pequenas e médias empresas. Nossos especialistas podem ajudá-lo a implementar todas as estratégias discutidas neste artigo.",
          ctaButton: "Contate Nossos Especialistas em Segurança",
        },
      },
    },
  },

  hu: {
    // Navigation
    home: "Kezdőlap",
    services: "Szolgáltatások",
    about: "Rólunk",
    blog: "Blog",
    contact: "Kapcsolat",
    toggleMenu: "Menü kapcsoló",

    // Hero section
    heroTitle: "CyberSentry KKV-knak: Üzleti jövőjének védelme",
    heroSubtitle: "Átfogó kiberbiztonsági megoldások kis- és középvállalkozások számára",
    getStarted: "Kezdés",

    // Blog section
    latestArticles: "Legfrissebb cikkek",
    readMore: "Tovább",

    article1: {
      title: "5 Alapvető kiberbiztonsági gyakorlat KKV-k számára",
      excerpt:
        "Fedezze fel azokat az alapvető biztonsági intézkedéseket, amelyeket minden kisvállalkozásnak be kellene vezetnie digitális eszközeinek védelme érdekében.",
    },
    article2: {
      title: "Felhőbiztonság: Amit vállalkozásának tudnia kell",
      excerpt:
        "Ismerje meg, hogyan biztosíthatja felhőinfrastruktúráját és védheti meg vállalkozása adatait a kialakuló fenyegetésektől.",
    },
    article3: {
      title: "Adathalász támadások felismerése és megelőzése",
      excerpt:
        "Legyen egy lépéssel a kiberbűnözők előtt: tanulja meg azonosítani és enyhíteni a kifinomult adathalász kísérleteket.",
    },
    article4: {
      title: "Munkavállalói képzés: Az első védelmi vonala",
      excerpt:
        "Fedezze fel, miért a csapatának tagjai egyszerre a legnagyobb sebezhetősége és legerősebb eszköze a kiberbiztonságban.",
    },

    // Featured article
    featuredArticle: "Kiemelt cikk",
    featuredTitle: "Zsarolóvírus elleni védelmi stratégiák kisvállalkozások számára",
    featuredExcerpt:
      "A kisvállalkozások elleni zsarolóvírus-támadások 300%-kal nőttek az elmúlt évben. Felkészült a vállalkozása?",
    featuredContent:
      "A kisvállalkozások egyre inkább zsarolóvírus-támadások célpontjaivá válnak a jellemzően alacsonyabb biztonsági költségvetésük és kevésbé robusztus védelmi rendszereik miatt. Ez az átfogó útmutató gyakorlati lépéseket vázol fel vállalkozása védelmére ezektől a pusztító támadásoktól anélkül, hogy túllépné a költségvetését.",
    readFullArticle: "Teljes cikk olvasása",

    // Footer
    footerTagline: "Kis- és középvállalkozások védelme vállalati szintű kiberbiztonsági megoldásokkal.",
    quickLinks: "Gyors linkek",
    contactUs: "Kapcsolat",
    address: "Biztonság sugárút 123, Kibervár, CT 10101",
    allRightsReserved: "Minden jog fenntartva",

    // Ransomware Article
    ransomware: {
      title: "Zsarolóvírus elleni védelmi stratégiák kisvállalkozások számára",
      subtitle: "Átfogó útmutató vállalkozása védelméhez az egyre kifinomultabb zsarolóvírus-fenyegetésekkel szemben",
      publishDate: "2025. március 15.",
      backToHome: "Vissza a kezdőlapra",
      share: "Ossza meg ezt a cikket:",
      tableOfContents: "Tartalomjegyzék",
      tags: {
        security: "Biztonság",
        ransomware: "Zsarolóvírus",
        smb: "Kisvállalkozás",
      },
      sections: {
        introduction: {
          title: "Bevezetés",
          content1:
            "A zsarolóvírus-támadások napjaink egyik legjelentősebb kiberbiztonsági fenyegetésévé váltak a kis- és középvállalkozások számára. Ezek a rosszindulatú támadások titkosítják a vállalat adatait, elérhetetlenné téve azokat, amíg váltságdíjat nem fizetnek a támadóknak, gyakran kriptovalutában a nyomon követés elkerülése érdekében.",
          content2:
            "A zsarolóvírus-támadások környezete drámaian fejlődött az elmúlt években, a támadók egyre kifinomultabb technikákat alkalmaznak és minden méretű vállalkozást célba vesznek. A kisvállalkozások különösen sebezhetőek a korlátozott kiberbiztonsági infrastruktúra és szakértelem miatt.",
          statistic: "Növekedés a kisvállalkozásokat célzó zsarolóvírus-támadásokban az elmúlt évben",
        },
        whatIs: {
          title: "Mi a zsarolóvírus?",
          content1:
            "A zsarolóvírus egy olyan rosszindulatú szoftver (malware), amelyet arra terveztek, hogy blokkolja a számítógépes rendszerhez vagy adatokhoz való hozzáférést, amíg pénzösszeget nem fizetnek. Általában titkosítja az áldozat rendszerén lévő fájlokat, elérhetetlenné téve azokat, és váltságdíjat követel a titkosítási kulcsért.",
          content2:
            "A modern zsarolóvírus-támadások gyakran kettős zsarolási technikát alkalmaznak, ahol a támadók nemcsak titkosítják az adatokat, hanem érzékeny információkat is kiszivároztatnak, és azzal fenyegetnek, hogy nyilvánosságra hozzák ezeket, ha nem fizetik ki a váltságdíjat, további nyomást gyakorolva az áldozatokra.",
          imageCaption: "Tipikus zsarolóvírus-támadás folyamata: behatolás, titkosítás és zsarolás",
          typesTitle: "Gyakori zsarolóvírus típusok",
          types: {
            encryptor: {
              name: "Crypto Ransomware",
              description:
                "Titkosítja a rendszeren lévő fájlokat és dokumentumokat, elérhetetlenné téve azokat titkosítási kulcs nélkül.",
            },
            locker: {
              name: "Locker Ransomware",
              description:
                "Teljesen kizárja a felhasználókat eszközeikből, megakadályozva a rendszerhez való hozzáférést, nem csak a fájlokhoz.",
            },
            doxware: {
              name: "Doxware/Leakware",
              description:
                "Azzal fenyeget, hogy online közzéteszi az ellopott érzékeny adatokat, ha nem fizetik ki a váltságdíjat.",
            },
            raas: {
              name: "Ransomware-as-a-Service (RaaS)",
              description:
                "Előfizetés-alapú modell, ahol a fejlesztők zsarolóvírus eszközöket biztosítanak partnereknek, akik támadásokat hajtanak végre és megosztják a nyereséget.",
            },
          },
        },
        whyTarget: {
          title: "Miért célozzák a kisvállalkozásokat",
          content1:
            "A kiberbűnözők egyre inkább kisvállalkozásokat céloznak meg, mert gyakran az értékes adatok és korlátozott biztonsági erőforrások tökéletes kombinációját képviselik. Míg a nagy vállalatok dedikált biztonsági csapatokkal és jelentős költségvetéssel rendelkeznek, a kisvállalkozásoknál gyakran mindkettő hiányzik.",
          content2:
            "Annak megértése, hogy miért lehet az Ön kisvállalkozása célpontban, az első lépés a hatékony védelmi stratégiák megvalósítása felé.",
          calloutTitle: "Tudta?",
          calloutContent:
            "A legújabb tanulmányok szerint a zsarolóvírus-támadást elszenvedő kisvállalkozások 60%-a hat hónapon belül bezár, ha nem tudja helyreállítani adatait.",
          reasons: {
            security: {
              title: "Korlátozott biztonsági erőforrások",
              description:
                "A kisvállalkozásoknál gyakran hiányzik a dedikált IT biztonsági személyzet és a kifinomult biztonsági eszközök, amelyeket a nagyobb szervezetek alkalmaznak.",
            },
            resources: {
              title: "Elégtelen biztonsági mentési megoldások",
              description:
                "Sok kisvállalkozás nem tart fenn megfelelő biztonsági mentési rendszereket, így nagyobb valószínűséggel fizetnek váltságdíjat a kritikus adatok helyreállításáért.",
            },
            awareness: {
              title: "Alacsonyabb biztonsági tudatosság",
              description:
                "A kisebb cégeknél dolgozók kevesebb kiberbiztonsági képzést kaphatnak, így fogékonyabbak az adathalászatra és a social engineeringre.",
            },
            payment: {
              title: "Nagyobb fizetési hajlandóság",
              description:
                "A kisvállalkozások gyakran gyorsan fizetnek váltságdíjat a működés folytatása érdekében, vonzó célpontokká téve őket a gyors haszon érdekében.",
            },
          },
        },
        prevention: {
          title: "Megelőzési stratégiák",
          content1:
            "A zsarolóvírus-támadások megelőzése többrétegű biztonsági megközelítést igényel. Egyetlen megoldás sem nyújthat teljes védelmet, de több védelmi intézkedés bevezetése jelentősen csökkenti a kockázati kitettséget.",
          tipsTitle: "Megvalósítási tippek:",
          strategies: {
            updates: {
              title: "Tartsa naprakészen a rendszereket",
              description:
                "Rendszeresen frissítse az operációs rendszereket, alkalmazásokat és firmware-t a biztonsági sebezhetőségek javítása érdekében, amelyeket a zsarolóvírusok gyakran kihasználnak.",
              tips: {
                tip1: "Engedélyezze az automatikus frissítéseket, amikor csak lehetséges",
                tip2: "Hozzon létre ütemtervet a nem automatizálható frissítések ellenőrzésére és alkalmazására",
                tip3: "Tartson fenn leltárt minden szoftverről, hogy semmi ne maradjon ki",
              },
            },
            antivirus: {
              title: "Telepítsen modern vírusirtó megoldásokat",
              description:
                "Használjon megbízható vírusirtó és kártevőirtó megoldásokat valós idejű védelmi képességekkel és rendszeres definíciós frissítésekkel.",
              tips: {
                tip1: "Válasszon specifikus zsarolóvírus-védelmi funkciókkal rendelkező megoldásokat",
                tip2: "Engedélyezze a valós idejű szkennelést és az ütemezett mélyreható vizsgálatokat",
                tip3: "Fontolja meg végponti észlelési és válaszadási (EDR) megoldások használatát a jobb védelem érdekében",
              },
            },
            firewall: {
              title: "Erős tűzfal védelem megvalósítása",
              description:
                "Konfigurálja a tűzfalakat a bejövő és kimenő hálózati forgalom figyelésére és ellenőrzésére előre meghatározott biztonsági szabályok alapján.",
              tips: {
                tip1: "Használjon hardveres és szoftveres tűzfalakat is a többrétegű védelem érdekében",
                tip2: "Rendszeresen vizsgálja felül és frissítse a tűzfal szabályokat",
                tip3: "Fontolja meg egy következő generációs tűzfal (NGFW) használatát fejlett fenyegetésvédelemmel",
              },
            },
            email: {
              title: "E-mail biztonság javítása",
              description:
                "Mivel az e-mail a leggyakoribb zsarolóvírus-terjesztési módszer, robusztus e-mail biztonsági intézkedések bevezetése elengedhetetlen.",
              tips: {
                tip1: "Használjon e-mail szűrő szolgáltatásokat a gyanús mellékletek blokkolására",
                tip2: "Vezesse be a DMARC, SPF és DKIM protokollokat az e-mail hamisítás megakadályozására",
                tip3: "Fontolja meg egy biztonságos e-mail átjáró használatát sandbox képességekkel",
              },
            },
          },
        },
        backup: {
          title: "Biztonsági mentési és helyreállítási stratégiák",
          content1:
            "A robusztus biztonsági mentési stratégia az utolsó védelmi vonala a zsarolóvírusok ellen. Még ha a megelőzés kudarcot is vall, a megfelelő biztonsági mentések segíthetnek a helyreállításban a váltságdíj kifizetése nélkül.",
          content2:
            "A cél olyan biztonsági mentések fenntartása, amelyeket a zsarolóvírus nem érhet el vagy titkosíthat, lehetővé téve a rendszerek visszaállítását a támadás előtti állapotba minimális adatvesztéssel és megszakítással.",
          methodsTitle: "Hatékony biztonsági mentési módszerek",
          methods: {
            threeTwo: {
              title: "3-2-1 biztonsági mentési szabály",
              description:
                "Tartson legalább három másolatot az adatairól, két különböző típusú tárolóeszközön, amelyek közül egy példány a telephelyen kívül vagy a felhőben található.",
            },
            offsite: {
              title: "Légréses biztonsági mentések",
              description:
                "Tartson néhány biztonsági mentést teljesen leválasztva a hálózatáról, hogy biztosítsa, hogy a zsarolóvírus ne érhesse el azokat.",
            },
            testing: {
              title: "Rendszeres biztonsági mentés tesztelés",
              description:
                "Rendszeresen tesztelje a biztonsági mentés visszaállítási folyamatát, hogy biztosítsa annak működését, amikor szükség van rá, és azonosítsa a potenciális problémákat.",
            },
            encryption: {
              title: "Titkosított biztonsági mentések",
              description:
                "Titkosítsa biztonsági mentéseit az érzékeny adatok jogosulatlan hozzáféréstől való védelme érdekében, ha a biztonsági mentési adathordozók elvesznek vagy ellopják őket.",
            },
          },
          warningTitle: "Fontos figyelmeztetés",
          warningContent:
            "Egyes fejlett zsarolóvírus-változatok kifejezetten a biztonsági mentési rendszereket célozzák. Győződjön meg arról, hogy biztonsági mentési megoldása rendelkezik zsarolóvírus-védelmi funkciókkal és megváltoztathatatlan tárolási lehetőségekkel.",
        },
        training: {
          title: "Munkavállalói képzés és tudatosság",
          content1:
            "Munkavállalói egyszerre jelentik a legnagyobb sebezhetőséget és a legerősebb védelmet a zsarolóvírus-támadásokkal szemben. Az emberi hiba, például a rosszindulatú linkekre való kattintás vagy fertőzött mellékletek megnyitása, továbbra is a zsarolóvírusok elsődleges belépési pontja.",
          content2:
            "Egy átfogó biztonsági tudatossági képzési program jelentősen csökkentheti a kockázatot azáltal, hogy megtanítja a munkavállalókat a gyakori támadási vektorok felismerésére és elkerülésére.",
          programTitle: "Hatékony képzési program kiépítése",
          steps: {
            awareness: {
              title: "Általános biztonsági tudatosság",
              description:
                "Oktassa a munkavállalókat a kiberbiztonság fontosságáról és arról, hogy cselekedeteik hogyan befolyásolhatják az egész szervezetet.",
            },
            phishing: {
              title: "Adathalászat felismerési képzés",
              description:
                "Tanítsa meg a munkavállalóknak a gyanús e-mailek, linkek és mellékletek azonosítását példákon és interaktív gyakorlatokon keresztül.",
            },
            passwords: {
              title: "Jelszókezelés",
              description:
                "Vezessen be erős jelszó-szabályzatokat, és képezze a munkavállalókat a jelszókezelők és a többfaktoros hitelesítés használatára.",
            },
            simulation: {
              title: "Adathalászat szimulációk",
              description:
                "Végezzen rendszeres adathalászat-szimulációs gyakorlatokat a munkavállalói tudatosság tesztelésére és célzott képzés nyújtására azoknak, akiknek szükségük van rá.",
            },
            reporting: {
              title: "Incidens jelentési eljárások",
              description:
                "Hozzon létre egyértelmű eljárásokat a gyanús tevékenységek és potenciális biztonsági incidensek jelentésére.",
            },
          },
        },
        response: {
          title: "Incidenskezelési tervezés",
          content1:
            "A legjobb megelőzési erőfeszítések ellenére is elengedhetetlen felkészülni egy sikeres zsarolóvírus-támadás lehetőségére. Egy jól dokumentált és gyakorolt incidenskezelési terv jelentősen csökkentheti a hatást és a helyreállítási időt.",
          planTitle: "Zsarolóvírus-választerv elemei",
          steps: {
            isolate: {
              title: "Elszigetelés és elszigetelés",
              description:
                "Azonnal válassza le a fertőzött rendszereket a hálózatról, hogy megakadályozza a zsarolóvírus terjedését más rendszerekre és biztonsági mentésekre.",
            },
            identify: {
              title: "Azonosítás és értékelés",
              description:
                "Határozza meg a zsarolóvírus változatát, a fertőzés mértékét, valamint az érintett rendszereket és adatokat a válaszlépések irányításához.",
            },
            report: {
              title: "Értesítés és jelentés",
              description:
                "Jelentse az incidenst a bűnüldöző szerveknek, értesítse az érintett feleket a szabályozások szerint, és vegye fel a kapcsolatot a kiberbiztosítási szolgáltatójával, ha van ilyen.",
            },
            recover: {
              title: "Helyreállítás és visszaállítás",
              description:
                "Állítsa vissza a rendszereket tiszta biztonsági mentésekből, ellenőrizze az adatok integritását, és keressen maradék kártevőket a rendszerek újracsatlakoztatása előtt.",
            },
            learn: {
              title: "Incidens utáni elemzés",
              description:
                "Végezzen alapos felülvizsgálatot az incidensről, hogy azonosítsa, hogyan sikerült a támadás, és milyen fejlesztésekre van szükség a jövőbeli támadások megelőzéséhez.",
            },
          },
          paymentTitle: "Fizessen-e váltságdíjat?",
          paymentContent:
            "A bűnüldöző szervek és biztonsági szakértők általában nem javasolják a váltságdíj kifizetését, mivel a fizetés nem garantálja az adatok helyreállítását, bűnözői tevékenységeket finanszíroz, és jövőbeli támadások hajlandó célpontjaként jelölheti meg Önt. Azonban minden helyzetet az üzleti hatás, a biztonsági mentések elérhetősége és egyéb tényezők alapján kell értékelni.",
        },
        conclusion: {
          title: "Következtetés",
          content1:
            "A zsarolóvírus napjaink egyik legjelentősebb fenyegetését jelenti a kisvállalkozások számára, de megfelelő felkészüléssel és többrétegű biztonsági megközelítéssel jelentősen csökkentheti a kockázatot és minimalizálhatja a potenciális károkat.",
          content2:
            "Az ebben az útmutatóban vázolt stratégiák megvalósításával – a megelőzéstől és biztonsági mentéstől kezdve a munkavállalói képzésig és az incidenskezelési tervezésig – vállalkozása jobban fel lesz készülve a zsarolóvírus-támadások elviselésére és az azokból való felépülésre.",
          ctaTitle: "Segítségre van szüksége vállalkozása biztonságának megteremtésében?",
          ctaContent:
            "A CyberSentry átfogó zsarolóvírus-védelmi szolgáltatásokat kínál, amelyeket kifejezetten kis- és középvállalkozások számára alakítottak ki. Szakértőink segíthetnek megvalósítani az ebben a cikkben tárgyalt összes stratégiát.",
          ctaButton: "Vegye fel a kapcsolatot biztonsági szakértőinkkel",
        },
      },
    },
  },
}

export default translations

