
import { Talk } from "@/lib/types";

export const talks: Talk[] = [
  {
    id: "self-service-iac-banking-circle",
    title: "Self-service IaC @ Banking Circle",
    event: "DevOps Meetup, Copenhagen",
    date: "2022-11-10T00:00:00Z",
    description: {
      en: "An introduction to how Banking Circle went from a mostly manual approach to re-usable terraform modules for infrastructure provisioning.",
      es: "Una introducción a cómo Banking Circle pasó de un enfoque mayormente manual a módulos de terraform reutilizables para el aprovisionamiento de infraestructura.",
      da: "En introduktion til hvordan Banking Circle gik fra en mest manuel tilgang til genanvendelige terraform moduler til infrastruktur provisionering."
    },
    videoUrl: "https://www.youtube.com/watch?v=KnLCEtHkRa8",
    slides: "https://speakerdeck.com/jherreros/self-service-iac-at-banking-circle",
    speakerdeckId: "ab4dff2de4d84cca9cfcf0f8b625880b",
    tags: ["Infrastructure as Code", "Automation", "Terraform"],
  },
  {
    id: "self-service-iac-people-process-product",
    title: "Self-service Infrastructure as Code: People, process, product",
    event: "HashiTalks 2023",
    date: "2023-02-16T00:00:00Z",
    description: {
      en: "A reflection of how an automated, repeatable approach drives benefits in both technical and non-technical areas.",
      es: "Una reflexión sobre cómo un enfoque automatizado y repetible genera beneficios tanto en áreas técnicas como no técnicas.",
      da: "En reflektion over hvordan en automatiseret, gentagelig tilgang driver fordele i både tekniske og ikke-tekniske områder."
    },
    videoUrl: "https://www.youtube.com/watch?v=_-mHscUXYZY",
    slides: "https://speakerdeck.com/jherreros/self-service-infrastructure-as-code-people-process-product",
    speakerdeckId: "35991cb08afd4ccab3df26742e69510d",
    tags: ["Infrastructure as Code", "Automation", "Terraform", "Culture"],
  },
  {
    id: "yes-sir-i-can-gitops",
    title: "Yes sir, I can GitOps! SDLC automation on a regulated industry",
    event: "PlatformCon 2023",
    date: "2023-06-09T00:00:00Z",
    description: {
      en: "A look into how we put in place an automated compliance solution in our pipelines and a GitOps solution for Feature Flags, within the regulations of our industry.",
      es: "Una mirada a cómo implementamos una solución de cumplimiento automatizada en nuestros pipelines y una solución GitOps para Feature Flags, dentro de las regulaciones de nuestra industria.",
      da: "Et kig på hvordan vi implementerede en automatiseret compliance-løsning i vores pipelines og en GitOps-løsning til Feature Flags, inden for vores industris reguleringer."
    },
    videoUrl: "https://www.youtube.com/watch?v=7P6IaysAiCM",
    slides: "https://speakerdeck.com/jherreros/yes-sir-i-can-gitops-sdlc-automation-on-a-regulated-industry",
    speakerdeckId: "6fef555f89dc4633bea988c47e0c5f58",
    tags: ["GitOps", "CI/CD", "Compliance", "Feature Flags"],
  },
  {
    id: "3-layers-platform-helm",
    title: "The 3 Layers of our Platform and Helmping Ourselves before helping others",
    event: "Cloud Native Copenhagen",
    date: "2024-05-21T00:00:00Z",
    description: {
      en: "A look into the structure of Banking Circle's Internal Developer Platform, and the open source tooling we have built for it.",
      es: "Una mirada a la estructura de la Plataforma Interna de Desarrolladores de Banking Circle, y las herramientas de código abierto que hemos construido para ella.",
      da: "Et kig på strukturen af Banking Circles Interne Udviklerplatform, og de open source værktøjer vi har bygget til den."
    },
    imageUrl: "/cncf-cph.png",
    slides: "https://speakerdeck.com/jherreros/the-3-layers-of-our-platform-and-helmping-ourselves-before-helping-others",
    speakerdeckId: "7f8101e11cca48c1bab687f9a8a5e5b0",
    tags: ["Kubernetes", "Open Source", "Cloud Native", "Platform Engineering"],
  },
  {
    id: "platform-bank-4-steps",
    title: "A Platform to run a Bank on, in 4 simple steps",
    event: "QCon London 2025",
    date: "2025-04-08T00:00:00Z",
    description: {
      en: "A quick overview of Banking Circle's Compute Platform, including its core and the abstraction layers exposed to our users.",
      es: "Una descripción rápida de la Plataforma de Cómputo de Banking Circle, incluyendo su núcleo y las capas de abstracción expuestas a nuestros usuarios.",
      da: "Et hurtigt overblik over Banking Circles Compute Platform, inklusive dens kerne og abstraktionslag eksponeret til vores brugere."
    },
    imageUrl: "/qcon.jpg",
    slides: "https://speakerdeck.com/jherreros/a-platform-to-run-a-bank-on-in-4-simple-steps",
    speakerdeckId: "883377e402d841e584feb42aebda7444",
    tags: ["Kubernetes", "Open Source", "Cloud Native", "Platform Engineering"],
  },
  {
    id: "azure-landing-zones-service",
    title: "Azure Landing Zones as a Service",
    event: "Azure Usergroup Denmark",
    date: "2025-02-05T00:00:00Z",
    description: {
      en: "An introduction to our single, simple, self-service interface to provision infrastructure resources.",
      es: "Una introducción a nuestra interfaz única, simple y de autoservicio para aprovisionar recursos de infraestructura.",
      da: "En introduktion til vores enkle, selvbetjente interface til at provisionere infrastruktur ressourcer."
    },
    imageUrl: "/azure-usergroup.jpg",
    slides: "https://speakerdeck.com/jherreros/azure-landing-zones-as-a-service",
    speakerdeckId: "75d3db9b86a349fdb88d24f8514dcbb4",
    tags: ["Azure", "Landing Zones", "Cloud Native", "Platform Engineering"],
  },
  {
    id: "evolving-engineering-banking-circle",
    title: "Evolving Engineering at Banking Circle",
    event: "The Shortcu.tt podcast ",
    date: "2025-05-14T00:00:00Z",
    description: {
      en: "(Not a talk as such) I was a guest in the podcast The Shortcu.tt, where I talked about our journey in Banking Circle",
      es: "(No es una charla como tal) Fui invitado en el podcast The Shortcu.tt, donde hablé sobre nuestro viaje en Banking Circle",
      da: "(Ikke et foredrag som sådan) Jeg var gæst i podcasten The Shortcu.tt, hvor jeg talte om vores rejse i Banking Circle"
    },
    videoUrl: "https://www.youtube.com/watch?v=i8EGSQcg0aY",
    tags: ["Podcast", "Culture", "Cloud Native", "Platform Engineering"],
  },
  {
    id: "iac-templates-apis-platform",
    title: "Infrastructure as code, from templates to APIs: A Platform Engineering Story",
    event: "PlatformCon 2025",
    date: "2025-06-23T00:00:00Z",
    description: {
      en: "A look back at our journey around infrastructure provisioning, from re-usable building blocks to a pure Platform Engineering approach.",
      es: "Una mirada retrospectiva a nuestro viaje alrededor del aprovisionamiento de infraestructura, desde bloques de construcción reutilizables hasta un enfoque puro de Platform Engineering.",
      da: "Et tilbageblik på vores rejse omkring infrastruktur provisionering, fra genanvendelige byggeklodser til en ren Platform Engineering tilgang."
    },
    videoUrl: "https://www.youtube.com/watch?v=HWG7fSMQd9I",
    slides: "https://speakerdeck.com/jherreros/infrastructure-as-code-from-templates-to-apis-a-platform-engineering-story",
    speakerdeckId: "43684923fce04e4b956f2664aa65de1e",
    tags: ["Terraform", "Infrastructure as Code", "Cloud Native", "Platform Engineering"],
  },
  {
    id: "helm-crossplane",
    title: "Crossplane y Helm: Juntos, revueltos, mezclados y agitados",
    event: "Cloudnativos 2025",
    date: "2025-10-28T00:00:00Z",
    description: {
      en: "Combining Crossplane and Helm to manage applications including everything they need, both in Kubernetes and in the cloud, natively.",
      es: "Combinado Crossplane y Helm para gestionar aplicaciones incluyendo todo lo que necesitan, tanto en Kubernetes como en la nube, de manera nativa.",
      da: "Kombinere Crossplane og Helm for at administrere applikationer, herunder alt hvad de har brug for, både i Kubernetes og i skyen, nativt."
    },
    videoUrl: "https://www.youtube.com/watch?v=JAD5avWGXao",
    slides: "https://speakerdeck.com/jherreros/20251028-helm-crossplane-juntos-revueltos-mezclados-agitados",
    speakerdeckId: "64bafa800fa5436a9831c9815c053201",
    tags: ["Crossplane", "Helm",  "Kubernetes", "Infrastructure as Code", "Cloud Native", "Platform Engineering"],
  },
  {
    id: "platforms-for-humans-and-machines-aiengineer",
    title: "Platforms for Humans and Machines: Engineering for the Age of AI Agents",
    event: "AI Engineer Europe 2026",
    date: "2026-04-08T00:00:00Z",
    description: {
      en: "Self-service interfaces, well-defined APIs with schemas and documentation, local-first workflows, and rich observability have always been important elements of a good platform. Now they are prerequisites for agents that can autonomously build, debug, and ship software.",
      es: "Las interfaces de autoservicio, APIs bien definidas con esquemas y documentación, flujos de trabajo locales y observabilidad con detalle siempre han sido elementos importantes de una buena plataforma. Ahora son requisitos para agentes que pueden construir, depurar y enviar software de manera autónoma.",
      da: "Selvbetjeningsgrænseflader, veldefinerede API'er med skemaer og dokumentation, lokale arbejdsprocesser og rig observabilitet har altid været vigtige elementer i en god platform. Nu er de forudsætninger for agenter, der kan bygge, fejlfinde og levere software autonomt."
    },
    videoUrl: "https://www.youtube.com/watch?v=cCRO3ChaYhM",
    slides: "https://speakerdeck.com/jherreros/platforms-for-humans-and-machines-engineering-for-the-age-of-agents",
    speakerdeckId: "bd5f88e3b8ee48c1b369de7801968f5c",
    tags: ["AI", "Self-Service", "Platform Engineering", "Automation", "Observability", "APIs"],
  },
  {
    id: "platforms-for-humans-and-machines-platformcon",
    title: "Platforms for Humans and Machines: Engineering for the Age of AI Agents",
    event: "PlatformCon 2026",
    date: "2026-06-26T00:00:00Z",
    description: {
      en: "Self-service interfaces, well-defined APIs with schemas and documentation, local-first workflows, and rich observability have always been important elements of a good platform. Now they are prerequisites for agents that can autonomously build, debug, and ship software.",
      es: "Las interfaces de autoservicio, APIs bien definidas con esquemas y documentación, flujos de trabajo locales y observabilidad con detalle siempre han sido elementos importantes de una buena plataforma. Ahora son requisitos para agentes que pueden construir, depurar y enviar software de manera autónoma.",
      da: "Selvbetjeningsgrænseflader, veldefinerede API'er med skemaer og dokumentation, lokale arbejdsprocesser og rig observabilitet har altid været vigtige elementer i en god platform. Nu er de forudsætninger for agenter, der kan bygge, fejlfinde og levere software autonomt."
    },
    videoUrl: "https://www.youtube.com/watch?v=cCRO3ChaYhM",
    slides: "https://speakerdeck.com/jherreros/platforms-for-humans-and-machines-engineering-for-the-age-of-agents-daf66ef5-42f2-47a3-88db-a304e613444e",
    speakerdeckId: "bc3c25a9aee442fbaffc77dc87dd08ed",
    tags: ["AI", "Self-Service", "Platform Engineering", "Automation", "Observability", "APIs"],
  },
];
