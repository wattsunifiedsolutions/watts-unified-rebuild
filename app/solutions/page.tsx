import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { SolutionsAnalytics } from "../SolutionsAnalytics";

const siteUrl = "https://wattsunified.com";

export const metadata: Metadata = {
  title: "Financial Solutions for Protection, Retirement & Legacy",
  description: "Explore concise, coordinated solutions for family protection, retirement, legacy planning, business protection, veterans, and financial clarity.",
  alternates: { canonical: `${siteUrl}/solutions/` },
  openGraph: {
    title: "Solutions Built Around Your Life | Watts Unified Solutions",
    description: "Protect what matters. Build wealth. Secure your legacy.",
    url: `${siteUrl}/solutions/`,
    siteName: "Watts Unified Solutions",
    type: "website",
    images: [{
      url: "/solutions-app/solutions-hero.webp",
      width: 1445,
      height: 1088,
      alt: "Watts Unified Solutions strategy office presenting tax-efficient planning, asset protection, income planning, and legacy transfer.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions Built Around Your Life | Watts Unified Solutions",
    description: "Protect what matters. Build wealth. Secure your legacy.",
    images: ["/solutions-app/solutions-hero.webp"],
  },
};

const solutions = [
  {
    title: "Protect Your Family",
    description: "Life insurance, living benefits, and income protection.",
    cta: "Explore Protection",
    href: `${siteUrl}/solutions/life-insurance`,
    image: "/solutions-protection.jpg",
    width: 1408,
    height: 768,
    alt: "Black family reviewing a protection plan together at home.",
  },
  {
    title: "Prepare for Retirement",
    description: "Protected growth, lifetime income, and retirement strategies.",
    cta: "Explore Retirement",
    href: `${siteUrl}/solutions/retirement-wealth/`,
    image: "/solutions-retirement.webp",
    width: 1003,
    height: 1568,
    alt: "Black father with long locs discussing a retirement and legacy plan with his sons.",
  },
  {
    title: "Secure Your Legacy",
    description: "Estate resources, LegalShield, and identity protection.",
    cta: "Explore Legacy",
    href: `${siteUrl}/solutions/protection-legacy/`,
    image: "/solutions-legacy.webp",
    width: 1280,
    height: 896,
    alt: "Gold pen resting on estate and legal planning documents.",
  },
  {
    title: "Protect Your Business",
    description: "Legal access, continuity, and owner protection.",
    cta: "Explore Business Solutions",
    href: `${siteUrl}/solutions/business`,
    image: "/solutions-business.webp",
    width: 1536,
    height: 1024,
    alt: "Black business professionals reviewing a continuity and protection plan.",
  },
];

const programs = [
  {
    title: "Veteran & Federal",
    description: "Retirement clarity after service.",
    cta: "Open Veteran Roadmap",
    href: "https://blueprint.wattsunified.com/veteran-roadmap",
    image: "/solutions-veteran.webp",
    alt: "Black veteran advisor welcoming a military family.",
  },
  {
    title: "Million Dollar Baby",
    description: "Start protection and long-term value early.",
    cta: "Explore the Strategy",
    href: `${siteUrl}/million-dollar-baby`,
    image: "/solutions-protection.jpg",
    alt: "Black family building a long-term protection plan together.",
  },
  {
    title: "Financial Snapshot",
    description: "See which decisions deserve attention now.",
    cta: "Start My Snapshot",
    href: "https://financialsnapshot.wattsunified.com/",
    image: "/solutions-business.webp",
    alt: "Black financial professionals reviewing key decisions.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Watts Unified Solutions",
  url: `${siteUrl}/solutions/`,
  description: "Coordinated solutions for protection, retirement, legacy, business owners, veterans, and financial clarity.",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: solutions.length,
    itemListElement: solutions.map((solution, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: solution.title,
      url: solution.href,
    })),
  },
};

export default function SolutionsPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" className="solutions-page">
        <section className="solutions-hero" aria-label="Watts Unified Solutions">
          <Image
            className="solutions-hero-image"
            src="/solutions-hero.webp"
            alt="Watts Unified Solutions strategy office presenting tax-efficient planning, asset protection, income planning, and legacy transfer"
            width={1445}
            height={1088}
            sizes="100vw"
            priority
          />
        </section>

        <section className="solutions-hero-content" aria-labelledby="solutions-page-title">
          <div>
            <p className="solutions-eyebrow">Watts Unified Solutions</p>
            <h1 id="solutions-page-title">Solutions Built Around Your Life.</h1>
            <p>Protect what matters. Build wealth. Secure your legacy.</p>
            <a className="solutions-button" href="#client-solutions" data-analytics-event="primary_cta_click" data-analytics-label="Find My Solution">
              Find My Solution <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="solutions-section" id="client-solutions" aria-labelledby="client-solutions-title">
          <div className="solutions-section-heading">
            <p className="solutions-eyebrow">Client Solutions</p>
            <h2 id="client-solutions-title">Choose the protection your life needs now.</h2>
          </div>
          <div className="solutions-grid">
            {solutions.map((solution) => (
              <a
                className="solution-card"
                href={solution.href}
                key={solution.title}
                data-analytics-event="solution_card_click"
                data-analytics-label={solution.title}
              >
                <Image src={solution.image} alt={solution.alt} width={solution.width} height={solution.height} sizes="(max-width: 760px) 100vw, 50vw" />
                <div>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <span>{solution.cta} <b aria-hidden="true">→</b></span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="programs-section" aria-labelledby="programs-title">
          <div className="solutions-section-heading compact-heading">
            <p className="solutions-eyebrow">Specialized Programs</p>
            <h2 id="programs-title">Focused guidance for a specific next move.</h2>
          </div>
          <div className="program-grid">
            {programs.map((program) => (
              <a className="program-card" href={program.href} key={program.title} data-analytics-event="specialized_program_click" data-analytics-label={program.title}>
                <Image src={program.image} alt={program.alt} width={1408} height={768} sizes="(max-width: 760px) 100vw, 33vw" />
                <div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <span>{program.cta} <b aria-hidden="true">→</b></span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="opportunity-section" aria-labelledby="opportunity-title">
          <div>
            <p className="solutions-eyebrow gold-eyebrow">Professional Paths</p>
            <h2 id="opportunity-title">Looking for a Business Opportunity?</h2>
            <p>Explore financial services, LegalShield, or The Unified System.</p>
          </div>
          <a className="solutions-button" href={`${siteUrl}/opportunity`} data-analytics-event="primary_cta_click" data-analytics-label="Explore Opportunities">
            Explore Opportunities <span aria-hidden="true">→</span>
          </a>
        </section>
      </main>
      <SiteFooter />
      <SolutionsAnalytics />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
