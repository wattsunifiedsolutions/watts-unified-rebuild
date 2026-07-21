import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { SolutionsAnalytics } from "../SolutionsAnalytics";
import { LiteVideo } from "../LiteVideo";

const siteUrl = "https://wattsunified.com";
const blueprintUrl = "https://financialsnapshot.wattsunified.com/?source=million-dollar-baby-blueprint";

export const metadata: Metadata = {
  title: "Million Dollar Baby Blueprint | Family Protection & Legacy",
  description: "Watch the Million Dollar Baby education briefing and explore a family protection blueprint designed for parents and grandparents who want to start early.",
  alternates: { canonical: `${siteUrl}/million-dollar-baby` },
  openGraph: {
    title: "Start Their Protection Early | Million Dollar Baby",
    description: "A family protection and legacy education series from Watts Unified Solutions.",
    url: `${siteUrl}/million-dollar-baby`,
    siteName: "Watts Unified Solutions",
    type: "website",
    images: [{
      url: "/solutions-app/family-protection-social.webp",
      width: 1200,
      height: 630,
      alt: "Black parents, including a father with long locs, sharing a joyful moment with their young child.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Their Protection Early | Million Dollar Baby",
    description: "A family protection and legacy education series from Watts Unified Solutions.",
    images: ["/solutions-app/family-protection-social.webp"],
  },
};

const benefits = [
  {
    title: "Fund College or Ventures",
    copy: "Depending on policy design and available value, funds may support education, a down payment, or a future business.",
  },
  {
    title: "Preserve Future Options",
    copy: "Beginning while a child is young may help preserve future coverage options, subject to underwriting and policy terms.",
  },
  {
    title: "Generational Wealth Transfer",
    copy: "Create a thoughtful legacy strategy designed to support the next generation with greater intention.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Why Most Parents Are Missing This Wealth Strategy for Their Kids",
  description: "An educational briefing on the Million Dollar Baby family protection strategy.",
  thumbnailUrl: "https://i.ytimg.com/vi/MimwLRKY1bA/maxresdefault.jpg",
  embedUrl: "https://www.youtube.com/embed/MimwLRKY1bA",
  contentUrl: "https://www.youtube.com/watch?v=MimwLRKY1bA",
  publisher: { "@type": "Organization", name: "Watts Unified Solutions", url: siteUrl },
};

export default function MillionDollarBabyPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" className="mdb-page">
        <section className="mdb-hero" aria-label="Black family building an early protection plan">
          <Image
            src="/family-protection-social.webp"
            alt="Black parents, including a father with long locs, sharing a hopeful moment with their young child"
            width={1200}
            height={630}
            sizes="100vw"
            priority
          />
        </section>

        <section className="mdb-original-intro" aria-labelledby="mdb-title">
          <p className="mdb-eyebrow">Education Series</p>
          <h1 id="mdb-title">Million Dollar Baby</h1>
          <p>Give your children or grandchildren a stronger financial head start by leveraging the power of time and intentional planning.</p>
        </section>

        <section className="mdb-video-section" aria-label="Million Dollar Baby video briefing">
          <div className="mdb-video-frame">
            <LiteVideo
              videoId="MimwLRKY1bA"
              title="Million Dollar Baby Strategy"
              poster="/family-protection-social.webp"
              posterAlt="Black parents with their young child"
              analyticsLabel="Million Dollar Baby briefing"
            />
          </div>
        </section>

        <section className="mdb-early" aria-labelledby="mdb-early-title">
          <div className="mdb-section-heading">
            <p className="mdb-eyebrow">The Strategy</p>
            <h2 id="mdb-early-title">The Power of Starting Early</h2>
            <p>The greatest asset in long-term financial planning may be time. Starting while a child is young gives a properly designed strategy more years to work.</p>
            <p>Million Dollar Baby explores how permanent life insurance may provide protection and cash-value potential alongside the child, depending on eligibility, product terms, and funding.</p>
          </div>
          <div className="mdb-original-benefits">
            {benefits.map((benefit) => (
              <article key={benefit.title}>
                <span className="mdb-check" aria-hidden="true">✓</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mdb-blueprint" aria-labelledby="mdb-blueprint-title">
          <div className="mdb-blueprint-preview">
            <p className="mdb-eyebrow">Your Next Step</p>
            <h2 id="mdb-blueprint-title">The Free Blueprint</h2>
            <p>Request the guide for a clearer look at the questions parents and grandparents should consider before choosing a strategy.</p>
            <Image
              src="/family-blueprint-guide.webp"
              alt="Million Dollar Baby Blueprint guide displayed on a table"
              width={1024}
              height={1024}
              sizes="(max-width: 820px) 100vw, 48vw"
            />
          </div>
          <div className="mdb-blueprint-card">
            <p className="mdb-eyebrow">Private Family Review</p>
            <h3>Request Your Blueprint</h3>
            <p>Begin with the private Financial Snapshot so your follow-up can focus on the people, priorities, and decisions that matter to your family.</p>
            <ul>
              <li>Organize your family priorities</li>
              <li>Identify the decisions that need attention</li>
              <li>Prepare for a focused strategy conversation</li>
            </ul>
            <a
              className="mdb-button"
              href={blueprintUrl}
              data-analytics-event="primary_cta_click"
              data-analytics-label="Request My Million Dollar Baby Blueprint"
            >
              Request My Blueprint <span aria-hidden="true">→</span>
            </a>
            <small>Private • Secure • No pressure</small>
            <div className="conversion-assurance" aria-label="What happens next">
              <span><b>1</b> Share your priorities</span>
              <span><b>2</b> Review your options</span>
              <span><b>3</b> Decide without pressure</span>
            </div>
            <a
              className="education-solutions-link"
              href={`${siteUrl}/solutions/`}
              data-analytics-event="education_solutions_click"
              data-analytics-label="Million Dollar Baby Explore Solutions"
            >
              Explore All Solutions <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <p className="mdb-disclaimer">Educational information only. Policy benefits, cash value, access to value, tax treatment, and coverage depend on eligibility, underwriting, product terms, funding, and applicable law. Loans and withdrawals may reduce policy values and benefits. No outcome is guaranteed.</p>
      </main>
      <SiteFooter />
      <a
        className="mobile-conversion-cta"
        href={blueprintUrl}
        data-analytics-event="primary_cta_click"
        data-analytics-label="Mobile Blueprint Request"
      >
        Request My Blueprint <span aria-hidden="true">→</span>
      </a>
      <SolutionsAnalytics />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
