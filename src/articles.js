// Articles. Each entry becomes a card on the home page and its own page at /writing/<slug>.
// Body blocks: { h: 'Heading' } or { p: 'Paragraph' }. Newest first.

export const writing = {
  title: 'Things I have written.',
}

export const articles = [
  {
    slug: 'it-leadership-in-transition',
    title: 'IT leadership in transition: from administrator to shaper',
    date: 'May 2025',
    teaser:
      'Only 48 percent of digital initiatives reach their goals. Why the role of the CIO is changing in everyday practice, and why attitude matters more than technology.',
    image: '/images/writing/it-leadership.webp',
    imageAlt: 'Light box with the words Time for change',
    original: {
      label: 'Read the original German article on LinkedIn',
      url: 'https://de.linkedin.com/pulse/it-f%C3%BChrung-im-wandel-vom-verwalter-zum-gestalter-jonathan-berkmann-5cyrf',
    },
    sources: [
      { label: 'Gartner, CIO Agenda', url: 'https://www.gartner.com/en/chief-information-officer/insights/cio-agenda' },
      { label: 'Capgemini, Generative AI in organizations 2024', url: 'https://www.capgemini.com/insights/research-library/generative-ai-in-organizations-2024/' },
    ],
    body: [
      { p: 'At first glance, the debate about the role of CIOs and IT leaders seems long settled. Strategic involvement? Innovation partner instead of IT service provider? Nothing new, one might think. Reality looks different: according to the Gartner CIO Survey 2025, only 48 percent of digital initiatives in companies reach their intended outcomes. In other words, more than every second digital initiative falls short of expectations.' },
      { p: 'In many IT departments, the basic mood has changed. Requirements and projects are becoming more complex, and strategic expectations are rising. While operational challenges hardly decrease, the pressure grows to not only understand new technologies such as generative AI, data analytics, or automation, but to implement and use them, often without additional resources, and at the moment sometimes with fewer.' },
      { p: 'The reality is that the role of IT leaders is changing. Not in the abstract, but very concretely, day to day. Strategic thinking, fast execution, and modern leadership are central success factors today. Only those who actively shape this change will stay relevant in the long run.' },
      { h: 'Technology is only the beginning, attitude makes the difference' },
      { p: 'The introduction of generative AI marks a turning point. According to one study, 74 percent of the companies surveyed already see a strategic impact of generative AI on their business model. Yet only 21 percent say they have a concrete roadmap for integrating it.' },
      { p: 'The step from observing a technology to using it productively often fails. Not because of a lack of interest, but because decision processes, resource allocation, and responsibilities are not adapted quickly enough.' },
      { p: 'Anyone who wants to introduce AI has to evaluate not only the technology, but business models, data availability, ethical risks, and how it fits into the organisation, all at the same time. That requires a different understanding of leadership, and the courage to focus not on the tools themselves, but on their impact.' },
      { h: 'The new reality: IT as a partner that enables innovation' },
      { p: 'The CIO is increasingly becoming a strategic enabler, not because it is politically convenient, but because it is operationally necessary. According to a recent study, more than 80 percent of CIOs plan targeted investments in foundational capabilities in 2025, including cyber security, generative AI, business intelligence, data analytics, and integration solutions such as APIs.' },
      { p: 'But such investments only pay off when the foundations are in place. Data must not only exist in digital form, it must be structured, accessible, and usable, otherwise its potential remains untapped. This is exactly where it becomes clear how closely technological and strategic responsibility are intertwined today.' },
      { p: 'Instead of just running IT systems, successful CIOs shape products, platforms, and data strategies together with the business. The ability to translate business requirements into technological concepts, and the other way round, becomes the key skill. CIOs who build this bridge gain strategic weight. They no longer act merely as technology managers, but as co-creators of the company’s future.' },
      { h: 'Leadership in transition: modern IT teams need different conditions' },
      { p: 'The change does not only affect technologies and processes, it also changes the understanding of leadership. Modern IT teams work hybrid, agile, and across disciplines. In this environment, classic control is no longer enough. What is needed is leadership that enables, inspires, and builds trust.' },
      { p: 'IT leaders today have to be more than organisers or strategists. They carry the culture. They create conditions in which innovation is possible. They encourage ownership, shape meaningful working environments, and develop teams that do not just follow along, but want to shape things themselves.' },
      { h: 'Conclusion: the future of IT is not decided in the data centre' },
      { p: 'The role of the CIO is in upheaval, and that is exactly where the big opportunity lies. Those who act now can do more than keep up, they can shape. Connecting technology and business strategy is no longer an extra. It is the basic requirement for relevance and impact.' },
      { p: 'It is no longer infrastructure or systems that decide success, but the ability to enable innovation strategically. The CIO is no longer an administrator. The CIO is a shaper. And that is what makes the difference today.' },
    ],
  },
  {
    slug: 'choosing-a-cloud-provider',
    title: 'Why your choice of cloud provider matters now, for individuals and companies',
    subtitle: 'US data laws and what they mean for European companies',
    date: 'February 2025',
    note: 'Written in February 2025, before digital sovereignty became a headline topic.',
    teaser:
      'What happens to my data in a US cloud, and what does that mean for European companies? Why the CLOUD Act turns the choice of a cloud provider into a strategic decision.',
    image: '/images/writing/cloud-provider.webp',
    imageAlt: 'Server racks in a data centre, lit in blue',
    original: {
      label: 'Read the original German article on LinkedIn',
      url: 'https://de.linkedin.com/pulse/warum-die-wahl-des-cloud-anbieters-jetzt-entscheidend-berkmann-7ektf',
    },
    body: [
      { p: 'I use OneDrive myself, a Microsoft service that lets me manage all my data in the cloud with little effort, and conveniently across all my devices.' },
      { p: 'Recent political developments in the US, however, made me look at the topic more closely. What happens to my data when it is stored in a US cloud? Who has access to it? And what does this mean for European companies that rely on similar solutions?' },
      { p: 'As a private person, I can make sure to store my data with European providers only. But what about the data collected and processed by the companies I deal with? I have no way of knowing where my energy supplier, my bank, or my telecom provider stores my data, and who could potentially access it.' },
      { p: 'This uncertainty matters all the more because the US CLOUD Act entitles US authorities to access data held by US companies, regardless of where it is stored.' },
      { p: 'The CLOUD Act (Clarifying Lawful Overseas Use of Data Act), introduced in 2018, allows US authorities to access data of US companies even when it sits on servers in Europe. In other words, even if a company stores its data in a European data centre run by Microsoft, Google, or Amazon, US authorities can access it under certain conditions. This raises serious questions about GDPR compliance and data sovereignty.' },
      { p: 'Until now, the US has been seen as an important and reliable partner for European companies. Business ties are close, and many of the largest European companies naturally use US providers to host their data.' },
      { p: 'Recent political developments in the US have shaken this trust in the stability of transatlantic relations. Elon Musk, for example, now head of the Department of Government Efficiency (DOGE), and his team could gain access to sensitive personal data of millions of Americans, including information on social security and Medicare benefits as well as payments to government contractors, some of which compete directly with Musk’s own companies.' },
      { p: 'These developments raise serious questions about data protection and data sovereignty, especially for European companies that rely on US cloud providers.' },
      { h: 'Why companies should act now' },
      { p: 'In recent years, many companies and public institutions have followed a cloud-first approach, often with US providers. There were good reasons for this, as US providers frequently offered more powerful, more innovative, or easier to integrate solutions. Given the political and regulatory developments, however, European alternatives such as Nextcloud, IONOS Cloud, or OVHcloud deserve serious consideration. They offer GDPR-compliant and privacy-friendly options.' },
      { p: 'Companies that are rethinking their IT strategy should follow these developments closely and make sure they stay compliant and trustworthy in the long run. Trust can be strengthened, for example, by being transparent about where and how data is stored. One thing is certain: data protection is not just a compliance question, it is a key competitive factor for the future.' },
      { h: 'Conclusion' },
      { p: 'Political developments in the US have a direct impact on European companies and their IT strategies. The CLOUD Act gives US authorities potential access to company data, even when it is stored in the EU. Anyone deciding on a future-proof IT infrastructure today should consider European alternatives, not only for data protection reasons, but also from an economic and strategic point of view.' },
    ],
  },
]
