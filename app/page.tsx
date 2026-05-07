import Link from "next/link";

type Metric = {
  label: string;
  value: string;
  note: string;
  tone?: "warning" | "good" | "critical";
};

type Source = {
  label: string;
  organization: string;
  date: string;
  href: string;
  use: string;
};

const lastUpdated = "May 7, 2026";
const isoUpdated = "2026-05-07";

const officialSources: Source[] = [
  {
    label: "WHO response to hantavirus cases linked to a cruise ship",
    organization: "World Health Organization",
    date: "May 7, 2026",
    href: "https://www.who.int/news/item/07-05-2026-who-s-response-to-hantavirus-cases-linked-to-a-cruise-ship",
    use: "Current case count, risk assessment, response actions.",
  },
  {
    label: "WHO Director-General media briefing",
    organization: "World Health Organization",
    date: "May 7, 2026",
    href: "https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-media-briefing---7-may-2026",
    use: "Operational timeline, countries notified, ship status.",
  },
  {
    label: "Disease Outbreak News: Hantavirus cluster linked to cruise ship travel",
    organization: "World Health Organization",
    date: "May 4, 2026",
    href: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599",
    use: "Initial public DON, symptoms, exposure window, baseline case definitions.",
  },
  {
    label: "PAHO supports the international response",
    organization: "Pan American Health Organization",
    date: "May 7, 2026",
    href: "https://www.paho.org/en/news/7-5-2026-paho-supports-international-response-hantavirus-pulmonary-syndrome-cases-linked",
    use: "Americas context, 2025 regional counts, surveillance guidance.",
  },
  {
    label: "About Hantavirus",
    organization: "U.S. CDC",
    date: "May 13, 2024",
    href: "https://www.cdc.gov/hantavirus/",
    use: "General transmission, symptoms, treatment, HPS background.",
  },
  {
    label: "Hantavirus Prevention",
    organization: "U.S. CDC",
    date: "May 13, 2024",
    href: "https://www.cdc.gov/hantavirus/prevention/index.html",
    use: "Rodent exposure reduction and safe cleanup principles.",
  },
];

const mediaSources: Source[] = [
  {
    label: "Global race under way to trace passengers who left hantavirus ship",
    organization: "The Guardian",
    date: "May 7, 2026",
    href: "https://www.theguardian.com/world/2026/may/07/global-race-under-way-to-trace-passengers-who-left-hantavirus-ship-before-outbreak-confirmed",
    use: "Passenger tracing context and public concerns.",
  },
  {
    label: "Hantavirus-hit MV Hondius cruise ship to sail to Spain",
    organization: "GMA News / Reuters",
    date: "May 6, 2026",
    href: "https://www.gmanetwork.com/news/topstories/world/986641/hantavirus-hit-mv-hondius-cruise-ship-to-sail-to-spain-rare-andes-strain-confirmed/story/",
    use: "News reporting on transfer plans and Swiss case.",
  },
  {
    label: "This is not the start of a COVID pandemic",
    organization: "ABC News",
    date: "May 7, 2026",
    href: "https://abcnews.com/Health/start-covid-pandemic-suspected-hantavirus-cluster-cruise-ship/story?id=132741290",
    use: "Public communications framing from WHO experts.",
  },
];

const metrics: Metric[] = [
  {
    label: "Reported cases",
    value: "8",
    note: "Five laboratory-confirmed; three suspected.",
    tone: "warning",
  },
  {
    label: "Deaths",
    value: "3",
    note: "Reported among the eight cases.",
    tone: "critical",
  },
  {
    label: "Virus identified",
    value: "Andes",
    note: "A South American hantavirus with documented limited person-to-person spread.",
  },
  {
    label: "Wider public risk",
    value: "Low",
    note: "WHO assessment as of May 7, 2026.",
    tone: "good",
  },
];

const timeline = [
  {
    date: "Apr. 1",
    title: "MV Hondius departed Ushuaia, Argentina",
    detail:
      "WHO reports the vessel followed a South Atlantic route with remote ecological stops.",
  },
  {
    date: "Apr. 6-11",
    title: "First known case developed symptoms and died onboard",
    detail:
      "Hantavirus was not initially suspected because symptoms resembled other respiratory illness.",
  },
  {
    date: "Apr. 24-27",
    title: "Saint Helena disembarkation and medical evacuation",
    detail:
      "Some passengers disembarked before confirmation; contact tracing later expanded across multiple countries.",
  },
  {
    date: "May 2-4",
    title: "WHO notified and Disease Outbreak News published",
    detail:
      "Initial WHO public count: seven confirmed or suspected cases, including three deaths.",
  },
  {
    date: "May 7",
    title: "WHO confirmed Andes virus and five confirmed cases",
    detail:
      "The ship was sailing for the Canary Islands with WHO, Dutch, and ECDC experts supporting onboard assessment.",
  },
];

const symptomGroups = [
  {
    phase: "Early signs",
    items: [
      "Fever, chills, fatigue, and muscle aches",
      "Headache, dizziness, nausea, vomiting, diarrhea, or abdominal pain",
      "Symptoms can resemble flu or other respiratory infections",
    ],
  },
  {
    phase: "Urgent warning signs",
    items: [
      "Coughing, shortness of breath, or chest tightness",
      "Rapid progression to pneumonia-like illness",
      "Low blood pressure, shock, or severe weakness",
    ],
  },
  {
    phase: "Exposure timing",
    items: [
      "WHO notes Andes virus incubation can be up to six weeks",
      "CDC says HPS symptoms usually appear 1 to 8 weeks after rodent exposure",
      "Tell clinicians about rodent exposure, travel, or close contact with a case",
    ],
  },
];

const preventionSteps = [
  "Avoid contact with rodent urine, droppings, saliva, and nesting material.",
  "Seal holes, remove food sources, and control rodents around homes, workplaces, cabins, vehicles, and campsites.",
  "Ventilate enclosed spaces before cleanup and use disinfectant so contaminated dust is not stirred into the air.",
  "Seek medical care promptly for compatible symptoms after possible rodent exposure or close contact with a confirmed case.",
];

const faqs = [
  {
    question: "Is this a declared hantavirus pandemic?",
    answer:
      "No. WHO describes this as a serious incident linked to a cruise ship cluster and assesses the public health risk as low as of May 7, 2026.",
  },
  {
    question: "Can hantavirus spread from person to person?",
    answer:
      "Most hantaviruses do not. Andes virus, the species confirmed in this event, has documented limited human-to-human transmission in close and prolonged contact settings.",
  },
  {
    question: "What should someone do after possible exposure?",
    answer:
      "Monitor for fever, gastrointestinal symptoms, cough, shortness of breath, or rapid worsening, and contact a clinician or local health department. Mention rodent exposure, travel, and any contact with a confirmed case.",
  },
  {
    question: "Is there a vaccine or specific antiviral treatment?",
    answer:
      "CDC and PAHO describe treatment as supportive care. Prevention focuses on avoiding rodent exposure and safe cleanup.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Hantavirus Outbreak Tracker 2026",
    datePublished: isoUpdated,
    dateModified: isoUpdated,
    about: [
      {
        "@type": "MedicalCondition",
        name: "Hantavirus infection",
      },
      {
        "@type": "InfectiousDisease",
        name: "Hantavirus pulmonary syndrome",
      },
    ],
    description:
      "Current source-led information page for the 2026 MV Hondius hantavirus cluster, including Andes virus status, symptoms, prevention, and official source links.",
    isBasedOn: officialSources.map((source) => source.href),
  },
  {
    "@context": "https://schema.org",
    "@type": "SpecialAnnouncement",
    name: "MV Hondius hantavirus cluster status",
    datePosted: isoUpdated,
    diseasePreventionInfo:
      "Avoid rodent exposure, use safe cleanup practices, and seek medical care for compatible symptoms after possible exposure.",
    text: "WHO reports eight cases linked to MV Hondius as of May 7, 2026, including five confirmed hantavirus cases and three deaths. WHO assesses wider public health risk as low.",
    spatialCoverage: {
      "@type": "Place",
      name: "Multi-country",
    },
    url: "https://www.who.int/news/item/07-05-2026-who-s-response-to-hantavirus-cases-linked-to-a-cruise-ship",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header" aria-label="Site header">
        <div className="utility-bar">
          <span>Independent public information page</span>
          <span>Not affiliated with CDC, WHO, PAHO, or any government agency</span>
        </div>
        <div className="masthead">
          <Link className="brand" href="/" aria-label="Hantavirus Watch home">
            <span className="brand-mark" aria-hidden="true">
              HW
            </span>
            <span>
              <strong>Hantavirus Watch</strong>
              <small>Outbreak status and prevention guidance</small>
            </span>
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#situation">Situation</a>
            <a href="#symptoms">Symptoms</a>
            <a href="#prevention">Prevention</a>
            <a href="#sources">Sources</a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="page-title">
          <div className="hero-copy">
            <p className="eyebrow">Current situation // {lastUpdated}</p>
            <h1 id="page-title">
              Hantavirus Outbreak Tracker: MV Hondius and Andes Virus
            </h1>
            <p className="lede">
              A source-led starter page for the 2026 cruise-linked hantavirus
              cluster, designed for fast public understanding: current counts,
              transmission risk, symptoms, prevention, and source links in one
              place.
            </p>
            <div className="status-strip" aria-label="Current status summary">
              <span className="status-chip status-chip-neutral">
                No pandemic declared
              </span>
              <span className="status-chip status-chip-warning">
                Serious contained cluster
              </span>
              <span className="status-chip status-chip-good">
                Wider public risk low
              </span>
            </div>
            <div className="hero-links">
              <a href="#what-to-do" className="primary-link">
                What to do after exposure
              </a>
              <a href="#sources">Review source log</a>
            </div>
          </div>

          <aside className="briefing-panel" aria-label="Current briefing">
            <div className="panel-label">WHO baseline</div>
            <dl className="briefing-list">
              <div>
                <dt>Latest official update</dt>
                <dd>May 7, 2026</dd>
              </div>
              <div>
                <dt>Cases reported</dt>
                <dd>8 total, 5 confirmed</dd>
              </div>
              <div>
                <dt>Deaths reported</dt>
                <dd>3</dd>
              </div>
              <div>
                <dt>Transmission note</dt>
                <dd>Andes virus can spread in limited close-contact settings</dd>
              </div>
              <div>
                <dt>Public health risk</dt>
                <dd>Low, per WHO</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="section-band" id="situation" aria-labelledby="situation-title">
          <div className="section-header">
            <p className="eyebrow">Situation dashboard</p>
            <h2 id="situation-title">What is known right now</h2>
            <p>
              Counts can change as contact tracing and testing continue. This
              page treats WHO and PAHO as the source of truth for epidemiology,
              and news reports as operational context.
            </p>
          </div>

          <div className="metrics-grid">
            {metrics.map((metric) => (
              <article
                className={`metric-card ${metric.tone ? `metric-${metric.tone}` : ""}`}
                key={metric.label}
              >
                <p>{metric.label}</p>
                <strong>{metric.value}</strong>
                <span>{metric.note}</span>
              </article>
            ))}
          </div>

          <div className="two-column">
            <figure className="route-visual" aria-labelledby="route-title">
              <figcaption>
                <span id="route-title">Known route and response points</span>
                <small>Illustrative event path from official WHO reporting</small>
              </figcaption>
              <div className="route-line" aria-hidden="true">
                <span style={{ "--position": "6%" } as React.CSSProperties}>
                  Ushuaia
                </span>
                <span style={{ "--position": "26%" } as React.CSSProperties}>
                  South Atlantic
                </span>
                <span style={{ "--position": "47%" } as React.CSSProperties}>
                  Saint Helena
                </span>
                <span style={{ "--position": "67%" } as React.CSSProperties}>
                  Cabo Verde
                </span>
                <span style={{ "--position": "90%" } as React.CSSProperties}>
                  Canary Islands
                </span>
              </div>
            </figure>

            <div className="risk-note">
              <h3>Plain-language risk statement</h3>
              <p>
                Hantavirus is severe but uncommon. For this event, WHO says more
                cases may appear because Andes virus can incubate for weeks, but
                the wider public-health risk remains low. The highest concern is
                for people with direct exposure to infected rodents or close,
                prolonged contact with an infected person.
              </p>
            </div>
          </div>
        </section>

        <section className="section-band timeline-band" aria-labelledby="timeline-title">
          <div className="section-header compact">
            <p className="eyebrow">Event timeline</p>
            <h2 id="timeline-title">Key dates</h2>
          </div>
          <ol className="timeline">
            {timeline.map((item) => (
              <li key={`${item.date}-${item.title}`}>
                <time>{item.date}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section-band" id="symptoms" aria-labelledby="symptoms-title">
          <div className="section-header">
            <p className="eyebrow">Symptoms and care</p>
            <h2 id="symptoms-title">When to seek medical help</h2>
            <p>
              Hantavirus can progress quickly once respiratory symptoms begin.
              This page is informational and is not a substitute for medical
              care.
            </p>
          </div>

          <div className="symptom-grid">
            {symptomGroups.map((group) => (
              <article className="info-card" key={group.phase}>
                <h3>{group.phase}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="action-box" id="what-to-do">
            <h3>After possible exposure</h3>
            <p>
              If you develop fever, gastrointestinal symptoms, coughing,
              shortness of breath, or rapid worsening after rodent exposure,
              travel through affected areas, or close contact with a confirmed
              case, contact a clinician or local health department and mention
              the exposure history.
            </p>
          </div>
        </section>

        <section className="section-band" id="prevention" aria-labelledby="prevention-title">
          <div className="section-header">
            <p className="eyebrow">Prevention</p>
            <h2 id="prevention-title">Reduce rodent exposure first</h2>
            <p>
              CDC and PAHO emphasize prevention because there is no specific
              vaccine or antiviral treatment for hantavirus infection.
            </p>
          </div>
          <ol className="prevention-list">
            {preventionSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="section-band" aria-labelledby="context-title">
          <div className="section-header">
            <p className="eyebrow">Regional context</p>
            <h2 id="context-title">Why public-health agencies are watching</h2>
            <p>
              PAHO reported that in 2025, through epidemiological week 47, eight
              countries in the Americas reported 229 confirmed HPS cases and 59
              deaths. The disease remains uncommon, but surveillance matters
              because cases can be severe and environmental exposure risks vary
              by region.
            </p>
          </div>
        </section>

        <section className="section-band faq-band" aria-labelledby="faq-title">
          <div className="section-header compact">
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-title">Fast answers</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section-band" id="sources" aria-labelledby="sources-title">
          <div className="section-header">
            <p className="eyebrow">Source log</p>
            <h2 id="sources-title">Official sources first</h2>
            <p>
              This starter page is designed to be updated manually or wired to a
              future editorial workflow. Keep official agencies above news media
              when counts conflict.
            </p>
          </div>

          <div className="source-table-wrap">
            <table className="source-table">
              <caption>Primary official sources used for this page</caption>
              <thead>
                <tr>
                  <th scope="col">Source</th>
                  <th scope="col">Date</th>
                  <th scope="col">Use on page</th>
                </tr>
              </thead>
              <tbody>
                {officialSources.map((source) => (
                  <tr key={source.href}>
                    <td>
                      <a href={source.href}>{source.label}</a>
                      <span>{source.organization}</span>
                    </td>
                    <td>{source.date}</td>
                    <td>{source.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="media-watch">
            <h3>Media watch</h3>
            <p>
              News links help track public operations, travel logistics, and
              local response. Official public-health agencies remain the
              baseline for medical and epidemiological claims.
            </p>
            <ul>
              {mediaSources.map((source) => (
                <li key={source.href}>
                  <a href={source.href}>{source.label}</a>
                  <span>
                    {source.organization} - {source.date} - {source.use}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          Last reviewed {lastUpdated}. For emergencies, follow instructions from
          your local health department or emergency medical services.
        </p>
      </footer>
    </>
  );
}
