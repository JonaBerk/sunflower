// Selected projects. Each entry becomes a card under Work and its own page at /work/<slug>.
// No client names, only industry and type of organisation.
// Body blocks: { h: 'Heading' } or { p: 'Paragraph' }.

export const projects = [
  {
    slug: 'governance-cio-office',
    title: 'Building governance for the CIO office of a bank',
    industry: 'Banking',
    role: 'PMO and CIO Office',
    teaser:
      'A demand process from end to end, a scoring model for the project portfolio, and risk reporting for the board, built from scratch inside the CIO office.',
    image: '/images/work/bank-governance.webp',
    imageAlt: 'Facade of a bank building',
    body: [
      { h: 'The starting point' },
      { p: 'An Austrian bank wanted to steer its IT more deliberately. Requests came in through many channels, priorities were negotiated case by case, and the board lacked a clear view of risks across the portfolio.' },
      { h: 'What I did' },
      { p: 'Embedded in the CIO office for about two years, I built the governance structure step by step: a demand management process from the first idea to the decision, portfolio steering with a weighted scoring method, and regular risk reporting for the board.' },
      { p: 'Just as important as the structures was getting people to use them. I worked with business units, IT, and management so the new processes made sense in their daily work, and supported the shift towards decisions based on data instead of gut feeling.' },
      { h: 'What came out of it' },
      { p: 'One transparent path for every request, a portfolio that can be prioritised against the strategy, and a board that sees the relevant risks in one place.' },
    ],
  },
  {
    slug: 'eprocurement-platform',
    title: 'A group-wide eProcurement platform for an energy group',
    industry: 'Energy',
    role: 'Project Owner and Agile Coach',
    teaser:
      'Introducing one procurement platform across a large energy group, with interfaces to SAP and external providers, from process analysis to go-live.',
    image: '/images/work/eprocurement.webp',
    imageAlt: 'Transmission towers on a green field',
    body: [
      { h: 'The starting point' },
      { p: 'A large energy group wanted to move its purchasing onto one shared eProcurement system, connected to SAP and to external service providers.' },
      { h: 'What I did' },
      { p: 'As Project Owner and Agile Coach I analysed the existing purchasing processes, gathered and structured the requirements, and ran change control throughout the project. I coordinated with international development teams and accompanied the platform through go-live.' },
      { h: 'What came out of it' },
      { p: 'A group-wide platform for procurement, built on processes that the purchasing teams helped to shape, and a go-live that the business carried rather than endured.' },
    ],
  },
  {
    slug: 'crm-selection',
    title: 'Preparing the selection of a new CRM system',
    industry: 'Energy',
    role: 'Project Manager and Requirements Engineer',
    teaser:
      'Leading the RFI for a future CRM system: requirements, scope, user stories, and a structured market analysis from long list to short list.',
    image: '/images/work/crm-selection.webp',
    imageAlt: 'Team meeting around a table',
    body: [
      { h: 'The starting point' },
      { p: 'An energy supplier needed a new CRM system and wanted a well-founded basis for the decision before going to market.' },
      { h: 'What I did' },
      { p: 'I led the request for information. Together with the business I gathered the requirements, wrote the scope document and user stories, and ran the market analysis, from a long list of providers to a short list. I then supported the initial phase of the introduction.' },
      { h: 'What came out of it' },
      { p: 'A clear picture of what the organisation actually needs, and a short list of providers that could be compared on solid ground.' },
    ],
  },
  {
    slug: 'ot-security-roadmap',
    title: 'An OT security roadmap for production systems',
    industry: 'Energy',
    role: 'Project Manager',
    teaser:
      'Sub-projects on digitalisation and cyber security for production systems, with a roadmap based on NIST and IEC 62443, architecture concepts, and support for the tender.',
    image: '/images/work/ot-security.webp',
    imageAlt: 'Industrial plant at night',
    body: [
      { h: 'The starting point' },
      { p: 'An energy company wanted to secure its operational technology, the systems that control production, along the entire value chain.' },
      { h: 'What I did' },
      { p: 'I managed sub-projects on digitalisation and cyber security for production systems. This included a roadmap based on NIST and IEC 62443, architecture concepts, a market analysis, and support for the tender process.' },
      { h: 'What came out of it' },
      { p: 'A roadmap that connects security requirements with what is realistic in running operations, and a solid basis for choosing the right partners.' },
    ],
  },
  {
    slug: 'architecture-analysis',
    title: 'Making an application landscape visible',
    industry: 'Financial services',
    role: 'Project Manager and IT Architect',
    teaser:
      'Gathering and validating the documentation of programs and interfaces, with application profiles, architecture diagrams, and validation workshops.',
    image: '/images/work/architecture-analysis.webp',
    imageAlt: 'Workflow sketched on a board',
    body: [
      { h: 'The starting point' },
      { p: 'A financial services provider needed a reliable picture of its applications and interfaces, documented in a way that holds up to regulatory scrutiny.' },
      { h: 'What I did' },
      { p: 'I gathered and validated the process documentation for programs and interfaces, created application profiles and architecture diagrams, and led the validation workshops with the people responsible for each system.' },
      { h: 'What came out of it' },
      { p: 'A documented, validated application landscape that the teams recognised as their own.' },
    ],
  },
  {
    slug: 'tolling-systems',
    title: 'System design for international tolling systems',
    industry: 'Mobility',
    role: 'System Engineer',
    teaser:
      'Translating customer requirements into technical solution architectures for tolling systems, and coordinating clients, engineering, development, and suppliers.',
    image: '/images/work/tolling-systems.webp',
    imageAlt: 'Highway traffic at night',
    body: [
      { h: 'The starting point' },
      { p: 'International tolling systems involve many parties: the client, engineering teams, development, and external suppliers, all working towards one system that has to run reliably on public roads.' },
      { h: 'What I did' },
      { p: 'I was responsible for system design. I translated customer requirements into technical solution architectures, analysed and qualified performance and quality requirements, specified work packages, and reviewed design documents and use cases. I also steered and assessed external subcontractors.' },
      { h: 'What came out of it' },
      { p: 'Designs that the client, engineering, and suppliers could all work with, from the design phase through to system integration.' },
    ],
  },
]
