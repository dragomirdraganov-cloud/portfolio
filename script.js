const body = document.body;
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const filterButtons = document.querySelectorAll("[data-filter]");
const appCards = document.querySelectorAll("[data-category]");
const languageButtons = document.querySelectorAll("[data-language-option]");
const photoOpenButton = document.querySelector("[data-photo-open]");
const photoModal = document.querySelector("[data-photo-modal]");
const photoCloseButtons = document.querySelectorAll("[data-photo-close]");

const translations = {
  es: {
    "meta.title": "Dragomir Draganov Karlova | Portfolio iOS y SwiftUI",
    "meta.description": "Portfolio de proyectos iOS, SwiftUI y prototipos creados por Dragomir Draganov Karlova.",
    "aria.home": "Ir al inicio",
    "aria.language": "Cambiar idioma",
    "aria.openMenu": "Abrir menú",
    "aria.closeMenu": "Cerrar menú",
    "aria.openPhoto": "Abrir foto de Dragomir",
    "aria.closePhoto": "Cerrar foto",
    "aria.photoModal": "Foto de Dragomir",
    "aria.primaryActions": "Acciones principales",
    "aria.showcase": "Vista destacada de proyectos móviles",
    "aria.stats": "Resumen del portfolio",
    "aria.experienceGrid": "Resumen de experiencia y formación",
    "aria.filters": "Filtrar proyectos",
    "aria.voltpathDetails": "Detalles de VoltPath",
    "aria.bankDetails": "Detalles de Bank",
    "aria.iosHelperDetails": "Detalles de iOSHelper",
    "aria.portfolioDetails": "Detalles de portfolio",
    "aria.voltpathRepo": "Ver repositorio de VoltPath",
    "aria.bankRepo": "Ver repositorio de Bank",
    "aria.iosHelperRepo": "Ver repositorio de iOSHelper",
    "aria.portfolioRepo": "Ver repositorio del portfolio",
    "aria.stack": "Tecnologías y capacidades",
    "aria.footer": "Información de contacto",
    "aria.social": "Redes sociales",
    "alt.financeApp": "Pantalla de una app de finanzas personales",
    "alt.habitsApp": "Pantalla de una app de hábitos",
    "alt.profilePhoto": "Dragomir junto a una figura de Batman",
    "alt.voltpath": "Captura conceptual de VoltPath",
    "alt.bank": "Captura conceptual de Bank",
    "alt.iosHelper": "Captura conceptual de iOSHelper",
    "alt.portfolio": "Captura conceptual del portfolio web",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.method": "Método",
    "nav.stack": "Stack",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Portfolio de proyectos iOS y Swift",
    "hero.title": "Apps, prototipos y herramientas centradas en iOS y móvil.",
    "hero.copy":
      "Una selección real de repositorios donde trabajo con SwiftUI, arquitectura MVVM, prototipos iOS, servicios mock y pequeñas herramientas para desarrollar con más claridad.",
    "hero.primaryCta": "Ver proyectos",
    "stats.features": "funcionalidades móviles documentadas",
    "stats.repos": "repositorios públicos",
    "stats.stack": "stack principal",
    "experience.eyebrow": "Experiencia profesional",
    "experience.title": "Programador iOS centrado en producto y código mantenible.",
    "experience.copy":
      "Mi perfil público de LinkedIn refleja una trayectoria orientada a crear aplicaciones iOS con Swift y Objective-C, combinando implementación móvil, estructura de proyecto y cuidado por la experiencia de usuario.",
    "experience.link": "Ver perfil de LinkedIn",
    "experience.workLabel": "Trabajo",
    "experience.workCopy":
      "Experiencia profesional vinculada a Avantiam desde Girona, especializada en desarrollo de aplicaciones iOS y soluciones móviles.",
    "experience.specialtyLabel": "Especialidad",
    "experience.specialtyCopy":
      "Desarrollo de apps iOS con atención a la arquitectura, claridad del código y bases preparadas para evolucionar.",
    "experience.educationLabel": "Formación",
    "experience.educationCopy":
      "Formación técnica entre 2019 y 2021, conectada con el desarrollo de aplicaciones y la práctica profesional.",
    "experience.locationLabel": "Ubicación",
    "experience.locationTitle": "Girona, Cataluña",
    "experience.locationCopy": "Perfil profesional ubicado en Cataluña, con portfolio público de proyectos iOS, SwiftUI y web.",
    "projects.eyebrow": "Repositorios reales",
    "projects.title": "Proyectos destacados",
    "projects.copy":
      "Estos proyectos salen directamente de mi GitHub público. Cada tarjeta resume el objetivo, la tecnología principal y el estado del repositorio.",
    "filters.all": "Todos",
    "filters.prototypes": "Prototipos",
    "filters.tools": "Herramientas",
    "projects.voltpathCopy":
      "App iOS para pegar o compartir una dirección y enviarla a un vehículo conectado. MVP local con MVVM, navegación tipada, servicios mock e historial de destinos.",
    "projects.bankCopy":
      "Prototipo de aplicación bancaria enfocado en una interfaz clara para consultar información financiera y validar flujos de producto móvil.",
    "projects.iosHelperCopy":
      "Librería ligera para simplificar funciones, clases y objetos en proyectos iOS, reduciendo repetición y ayudando a escribir código más limpio.",
    "projects.portfolioCopy":
      "Web estática responsive para presentar proyectos, repositorios y experiencia móvil con una navegación simple, filtros y tarjetas de caso.",
    "projects.repoLink": "Ver repositorio",
    "process.eyebrow": "Forma de trabajo",
    "process.title": "De la idea al repositorio mantenible",
    "process.productTitle": "Producto",
    "process.productCopy": "Defino el caso de uso, el flujo principal y los límites del MVP antes de escribir código.",
    "process.architectureTitle": "Arquitectura",
    "process.architectureCopy": "Uso MVVM, servicios por protocolo y rutas tipadas para que la app pueda crecer sin romperse.",
    "process.interfaceTitle": "Interfaz",
    "process.interfaceCopy": "Trabajo pantallas, estados, componentes reutilizables y design system con colores semánticos.",
    "process.docsTitle": "Documentación",
    "process.docsCopy": "Documento requisitos, estructura y siguientes pasos para que cada repo sea fácil de retomar.",
    "stack.eyebrow": "Stack y capacidades",
    "stack.title": "Tecnologías visibles en mis repositorios.",
    "stack.copy":
      "El contenido se centra en proyectos iOS, prototipado móvil, herramientas Swift y una base web estática para comunicar el trabajo con claridad.",
    "contact.eyebrow": "Código abierto",
    "contact.title": "Explora los repositorios en GitHub.",
    "contact.copy":
      "El portfolio enlaza directamente a los proyectos públicos para mostrar código, documentación y la evolución real de cada idea.",
    "contact.github": "Ver GitHub",
    "contact.projects": "Ver proyectos",
    "footer.copy": "Programador iOS con experiencia en Swift, SwiftUI, prototipos móviles y bases de código mantenibles.",
    "footer.location": "España, Girona, calle Narcís Blanch i Illa 39",
    "footer.top": "Volver arriba",
  },
  en: {
    "meta.title": "Dragomir Draganov Karlova | iOS and SwiftUI Portfolio",
    "meta.description": "Portfolio of iOS, SwiftUI and prototype projects created by Dragomir Draganov Karlova.",
    "aria.home": "Go to the top",
    "aria.language": "Change language",
    "aria.openMenu": "Open menu",
    "aria.closeMenu": "Close menu",
    "aria.openPhoto": "Open Dragomir photo",
    "aria.closePhoto": "Close photo",
    "aria.photoModal": "Dragomir photo",
    "aria.primaryActions": "Primary actions",
    "aria.showcase": "Featured view of mobile projects",
    "aria.stats": "Portfolio summary",
    "aria.experienceGrid": "Experience and education summary",
    "aria.filters": "Filter projects",
    "aria.voltpathDetails": "VoltPath details",
    "aria.bankDetails": "Bank details",
    "aria.iosHelperDetails": "iOSHelper details",
    "aria.portfolioDetails": "Portfolio details",
    "aria.voltpathRepo": "View VoltPath repository",
    "aria.bankRepo": "View Bank repository",
    "aria.iosHelperRepo": "View iOSHelper repository",
    "aria.portfolioRepo": "View portfolio repository",
    "aria.stack": "Technologies and capabilities",
    "aria.footer": "Contact information",
    "aria.social": "Social profiles",
    "alt.financeApp": "Screen from a personal finance app",
    "alt.habitsApp": "Screen from a habits app",
    "alt.profilePhoto": "Dragomir next to a Batman figure",
    "alt.voltpath": "Conceptual screenshot of VoltPath",
    "alt.bank": "Conceptual screenshot of Bank",
    "alt.iosHelper": "Conceptual screenshot of iOSHelper",
    "alt.portfolio": "Conceptual screenshot of the web portfolio",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.method": "Method",
    "nav.stack": "Stack",
    "nav.contact": "Contact",
    "hero.eyebrow": "iOS and Swift project portfolio",
    "hero.title": "Apps, prototypes and tools centered on iOS and mobile.",
    "hero.copy":
      "A real selection of repositories where I work with SwiftUI, MVVM architecture, iOS prototypes, mock services and small tools to develop with more clarity.",
    "hero.primaryCta": "View projects",
    "stats.features": "documented mobile features",
    "stats.repos": "public repositories",
    "stats.stack": "main stack",
    "experience.eyebrow": "Professional experience",
    "experience.title": "iOS developer building product-minded, maintainable code.",
    "experience.copy":
      "My public LinkedIn profile reflects a career dedicated to building iOS applications with Swift and Objective-C, combining mobile implementation, project structure and care for the user experience.",
    "experience.link": "View LinkedIn profile",
    "experience.workLabel": "Work",
    "experience.workCopy":
      "Professional experience linked to Avantiam from Girona, specialized in iOS application development and mobile solutions.",
    "experience.specialtyLabel": "Specialty",
    "experience.specialtyCopy":
      "iOS app development with attention to architecture, code clarity and foundations that are ready to evolve.",
    "experience.educationLabel": "Education",
    "experience.educationCopy":
      "Technical training from 2019 to 2021, connected to application development and professional practice.",
    "experience.locationLabel": "Location",
    "experience.locationTitle": "Girona, Catalonia",
    "experience.locationCopy": "Professional profile based in Catalonia, with a public portfolio of iOS, SwiftUI and web projects.",
    "projects.eyebrow": "Real repositories",
    "projects.title": "Featured projects",
    "projects.copy":
      "These projects come directly from my public GitHub. Each card summarizes the goal, main technology and repository status.",
    "filters.all": "All",
    "filters.prototypes": "Prototypes",
    "filters.tools": "Tools",
    "projects.voltpathCopy":
      "iOS app for pasting or sharing an address and sending it to a connected vehicle. Local MVP with MVVM, typed navigation, mock services and destination history.",
    "projects.bankCopy":
      "Banking app prototype built around a clear interface for checking financial information and validating mobile product flows.",
    "projects.iosHelperCopy":
      "Lightweight library for simplifying functions, classes and objects in iOS projects, reducing repetition and helping write cleaner code.",
    "projects.portfolioCopy":
      "Responsive static website for presenting projects, repositories and mobile experience with simple navigation, filters and case cards.",
    "projects.repoLink": "View repository",
    "process.eyebrow": "Work process",
    "process.title": "From idea to maintainable repository",
    "process.productTitle": "Product",
    "process.productCopy": "I define the use case, main flow and MVP boundaries before writing code.",
    "process.architectureTitle": "Architecture",
    "process.architectureCopy": "I use MVVM, protocol-based services and typed routes so the app can grow without breaking.",
    "process.interfaceTitle": "Interface",
    "process.interfaceCopy": "I work on screens, states, reusable components and design systems with semantic colors.",
    "process.docsTitle": "Documentation",
    "process.docsCopy": "I document requirements, structure and next steps so every repo is easy to resume.",
    "stack.eyebrow": "Stack and capabilities",
    "stack.title": "Technologies visible in my repositories.",
    "stack.copy":
      "The content is centered on iOS projects, mobile prototyping, Swift tools and a static web foundation to communicate the work clearly.",
    "contact.eyebrow": "Open source",
    "contact.title": "Explore the repositories on GitHub.",
    "contact.copy":
      "The portfolio links directly to public projects to show the code, documentation and real evolution of each idea.",
    "contact.github": "View GitHub",
    "contact.projects": "View projects",
    "footer.copy": "iOS developer with experience in Swift, SwiftUI, mobile prototypes and maintainable codebases.",
    "footer.location": "Spain, Girona, Narcís Blanch i Illa Street 39",
    "footer.top": "Back to top",
  },
};

const defaultLanguage = "es";
let currentLanguage = localStorage.getItem("portfolio-language") || defaultLanguage;

const getTranslation = (key) => translations[currentLanguage]?.[key] ?? translations[defaultLanguage][key] ?? "";

const closeNav = () => {
  body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", getTranslation("aria.openMenu"));
};

const openPhotoModal = () => {
  if (!photoModal) return;
  photoModal.hidden = false;
  photoModal.setAttribute("aria-hidden", "false");
  body.classList.add("photo-modal-open");
};

const closePhotoModal = () => {
  if (!photoModal) return;
  photoModal.hidden = true;
  photoModal.setAttribute("aria-hidden", "true");
  body.classList.remove("photo-modal-open");
  photoOpenButton?.focus();
};

const applyLanguage = (language) => {
  currentLanguage = translations[language] ? language : defaultLanguage;
  document.documentElement.lang = currentLanguage;
  document.title = getTranslation("meta.title");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key) element.textContent = getTranslation(key);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    if (key) element.setAttribute("aria-label", getTranslation(key));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (key) element.setAttribute("alt", getTranslation(key));
  });

  document.querySelectorAll("[data-i18n-meta]").forEach((element) => {
    const key = element.dataset.i18nMeta;
    if (key) element.setAttribute("content", getTranslation(key));
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.languageOption === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  navToggle?.setAttribute(
    "aria-label",
    body.classList.contains("nav-open") ? getTranslation("aria.closeMenu") : getTranslation("aria.openMenu"),
  );
  localStorage.setItem("portfolio-language", currentLanguage);
};

navToggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? getTranslation("aria.closeMenu") : getTranslation("aria.openMenu"));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeNav();
  }
});

document.addEventListener("click", (event) => {
  if (!body.classList.contains("nav-open") || !(event.target instanceof Node)) {
    return;
  }

  const clickIsInsideNav = nav?.contains(event.target) ?? false;
  const clickIsToggle = navToggle?.contains(event.target) ?? false;

  if (!clickIsInsideNav && !clickIsToggle) {
    closeNav();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && body.classList.contains("photo-modal-open")) {
    closePhotoModal();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter ?? "all";

    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    appCards.forEach((card) => {
      const categories = card.dataset.category?.split(" ") ?? [];
      const shouldShow = selectedFilter === "all" || categories.includes(selectedFilter);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.languageOption);
  });
});

photoOpenButton?.addEventListener("click", () => {
  closeNav();
  openPhotoModal();
});

photoCloseButtons.forEach((button) => {
  button.addEventListener("click", closePhotoModal);
});

applyLanguage(currentLanguage);
