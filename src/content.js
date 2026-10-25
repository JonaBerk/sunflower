// All texts of the page live here. First complete draft, to be refined section by section.
// Rule from DESIGN.md: concrete instead of generic, commas instead of dashes.

export const site = {
  name: 'Jonathan Berkmann',
  place: 'Vienna',
  email: 'bWFpbEBqb25hdGhhbmJlcmttYW5uLmV1', // base64, decoded on click so scrapers do not find it
  linkedin: 'https://www.linkedin.com/in/jonathan-berkmann',
}

export const hero = {
  eyebrow: 'Strategy · People · Technology · Vienna',
  title: 'I connect strategy and IT, so organisations can grow.',
  lead: 'I get people on board, so new ideas become everyday practice. For energy, banking, industry, and the public sector since 2019.',
  cta: 'Get in touch',
}

export const about = {
  title: 'Between the people who decide and the people who build.',
  paragraphs: [
    'I studied business informatics at WU Vienna and have worked in consulting and engineering ever since, from the system design of international tolling systems to the CIO office of an Austrian bank. Most of my work happens where business and IT have to agree on something.',
    'Work takes up a large part of our lives, so I want to spend it where it makes a noticeable difference. What drives me is building structures that last: governance, processes, and decision bases that still work long after the project team has moved on.',
    'Technology is rarely the hard part. The hard part is bringing stakeholders together, giving complexity a shape, and carrying a project all the way to its result. That combination of people skills and technical understanding is what I bring.',
  ],
}

export const focus = {
  title: 'What I do best.',
  items: [
    {
      name: 'Change that sticks',
      text: 'Change only works when people want it. I bring everyone on board early, from the board room to the shop floor, and keep them on board until the new way of working is the normal one.',
    },
    {
      name: 'Structures that last',
      text: 'Processes, governance, and portfolio steering that still work after the project team has left. For the CIO office of a bank I built demand management, a scoring model for the project portfolio, and risk reporting for the board, end to end.',
    },
    {
      name: 'Getting it done',
      text: 'Plans are easy, delivery is the hard part. I have led projects from the first analysis to go-live, from a group-wide eProcurement platform in energy to international tolling systems, and steered internal teams and external partners until the result was live and in use.',
    },
    {
      name: 'AI in practice',
      text: 'I trained a team of consultants to work with AI, organised an event series on AI for decision makers, and build AI agents for real workflows. Hands-on and honest about what works, without the hype.',
    },
    {
      name: 'Tenders and procurement',
      text: 'EU-wide tenders from both sides of the table. For clients I have designed procedures, managed bidders, and prepared award decisions. As a bidder I write and submit offers, on my own and in consortia.',
    },
  ],
}

export const path = {
  title: 'Where I have been.',
  stations: [
    { years: 'Since 2024', role: 'Manager, Senior IT Consultant', org: 'WeCon GmbH, Vienna' },
    { years: '2023 to 2024', role: 'System Engineer, international tolling systems', org: 'Kapsch TrafficCom, Vienna' },
    { years: '2019 to 2023', role: 'Senior IT Consultant', org: 'ReqPOOL GmbH, Vienna' },
    { years: 'Studies', role: 'B.Sc. Business Informatics', org: 'WU Vienna' },
  ],
  industries: ['Energy', 'Banking and finance', 'Industry', 'Public sector', 'Mobility'],
  certifications: [
    'IREB CPRE',
    'Scrum Master',
    'Scrum Product Owner',
    'CRISAM',
    'Elements of AI',
    'PMP (in progress)',
  ],
}

export const work = {
  title: 'A selection of my work.',
  intro: {
    projects: 'A few projects from the past years, as an excerpt rather than a complete list. Clients are not named, the work speaks for itself.',
    articles: 'Thoughts I have written down, originally in German on LinkedIn.',
    ideas: 'Frameworks and formats I have developed or shaped.',
  },
  projectNote: 'One project out of many. Clients are not named on this page. Happy to tell you more in person.',
}

export const ideas = {
  title: 'Things I have built.',
  items: [
    {
      name: 'The convergent organisation',
      kind: 'Framework',
      image: '/images/work/convergent.webp',
      text: 'How far have people and technology grown together in an organisation: separate, coexisting, or interwoven? The idea came from me, and I developed it into a maturity model with four areas, from processes to accountability, that shows where an organisation stands and where to act next.',
    },
    {
      name: 'Dead Reckoning',
      kind: 'Framework',
      image: '/images/work/dead-reckoning.webp',
      text: 'A method for steering IT portfolios against strategic goals. It measures what each project contributes to the strategy and turns portfolio meetings from status reports into real decisions.',
    },
    {
      name: 'Evenings that start conversations',
      kind: 'Events',
      image: '/images/work/events.webp',
      text: 'I organise and host events for leaders in IT and business, from talks and panel discussions on AI to client evenings. As a student I was head organiser of the WU Ball in the Vienna Hofburg.',
    },
  ],
}

export const offTheClock = {
  title: 'Off the clock.',
  items: [
    {
      name: 'Padel',
      text: 'Next to the gym, my biggest sporting passion. It is fun, it is social, and it is the best balance to a day full of meetings. I am always looking for keen people to play with.',
      link: { label: 'Up for a game?', url: '#contact' },
    },
    {
      name: 'Cycling',
      text: 'Preferably on gravel, out of the city and into the countryside around Vienna. A few hours outside, a good route, and a coffee stop on the way. Company is always welcome.',
      link: { label: 'Up for a ride?', url: '#contact' },
    },
    {
      name: 'Hidoku',
      kind: 'Side project · work in progress',
      text: 'My own web app for Hidoku, the number puzzle where you find one continuous path from 1 to the end. Grids from 5×5 to 10×10, three levels, hints, and a tutorial, in English and German.',
      link: { label: 'Play Hidoku', url: 'https://hidoku.vercel.app/' },
    },
  ],
  sunflower: {
    title: 'Why the sunflower?',
    text: 'It stands for growth. That is what good strategy should lead to, not a document in a drawer, but something that keeps growing.',
  },
}

export const contact = {
  title: "Let's talk.",
  text: 'I always value an exchange on current topics, from AI and transformation to new projects and plans. Ideally in a classic Viennese café, and just as gladly anywhere else in the world. Feel free to get in touch.',
}

export const legal = {
  // Offenlegung nach § 25 MedienG
  owner: 'Jonathan Berkmann',
  place: 'Vienna, Austria',
  purpose: 'Personal website with information about the professional activities of Jonathan Berkmann.',
  privacy:
    'This website uses no cookies, no tracking, and no external services. Fonts are hosted on this server. The hosting provider processes technically required access data (such as IP addresses) in server logs.',
}
