import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { SolutionsAnalytics } from "../SolutionsAnalytics";
import { LiteVideo } from "../LiteVideo";

const siteUrl = "https://wattsunified.com";
const pageUrl = `${siteUrl}/tax-free-retirement`;
const snapshotUrl = "https://financialsnapshot.wattsunified.com/?source=tax-free-retirement";

export const metadata: Metadata = {
  title: { absolute: "Tax-Free Retirement Strategy | Watts Unified Solutions" },
  description: "Learn how to structure your assets to minimize tax liability and secure your income in retirement.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Tax-Free Retirement Strategy | Watts Unified Solutions",
    description: "Explore tax diversification and retirement-income strategies designed to help you keep more of what you have built.",
    url: pageUrl,
    siteName: "Watts Unified Solutions",
    type: "website",
    images: [{
      url: "/solutions-app/tax-free-retirement-hero-v2.webp",
      width: 1672,
      height: 941,
      alt: "Three navy retirement-planning folios leading toward a secure gold vault and a thriving olive tree.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax-Free Retirement Strategy | Watts Unified Solutions",
    description: "See how tax diversification may strengthen your retirement-income plan.",
    images: ["/solutions-app/tax-free-retirement-hero-v2.webp"],
  },
};

const planningAreas = [
  {
    title: "Protect Against Rising Taxes",
    copy: "Add tax diversification so your future income is not dependent on a single tax treatment or one type of retirement account.",
  },
  {
    title: "Uninterrupted Compound Growth",
    copy: "Certain properly structured vehicles may build cash value without annual taxation on credited growth, subject to applicable rules and contract terms.",
  },
  {
    title: "Tax-Advantaged Access",
    copy: "Qualified distributions or properly structured policy loans may provide tax-advantaged access when the strategy is designed and maintained correctly.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Tax-Free Retirement: The Structure Most People Are Missing",
  description: "A Tax-Free Retirement educational briefing from Watts Unified Solutions.",
  thumbnailUrl: "https://i.ytimg.com/vi/Ompc-LHQ_9M/maxresdefault.jpg",
  embedUrl: "https://www.youtube.com/embed/Ompc-LHQ_9M",
  contentUrl: "https://www.youtube.com/watch?v=Ompc-LHQ_9M",
  publisher: { "@type": "Organization", name: "Watts Unified Solutions", url: siteUrl },
};

export default function TaxFreeRetirementPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />

      <main id="main" className="protected-page">
        <section className="protected-hero taxfree-hero" aria-labelledby="taxfree-title">
          <div className="taxfree-hero-image">
            <Image
              src="/tax-free-retirement-hero-v2.webp"
              alt="Three navy retirement-planning folios leading toward a secure gold vault and a thriving olive tree"
              width={1672}
              height={941}
              sizes="100vw"
              priority
            />
            <div className="taxfree-hero-content">
              <p className="protected-eyebrow">Tax-Free Retirement</p>
              <h1 id="taxfree-title">Keep More of What You Build.</h1>
              <a
                className="protected-button"
                href={snapshotUrl}
                data-analytics-event="primary_cta_click"
                data-analytics-label="Tax-Free Retirement Hero Snapshot"
              >
                Explore My Tax Strategy <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section id="taxfree-briefing" className="protected-video-section" aria-label="Tax-Free Retirement video briefing">
          <div className="protected-video-frame">
            <LiteVideo
              videoId="Ompc-LHQ_9M"
              title="Tax-Free Retirement: The Structure Most People Are Missing"
              poster="/tax-free-retirement-hero-v2.webp"
              posterAlt="Retirement planning folios leading toward a secure vault and thriving tree"
              analyticsLabel="Tax-Free Retirement briefing"
            />
          </div>
        </section>

        <section className="protected-explainer" aria-labelledby="tax-planning-title">
          <div className="protected-explainer-copy">
            <p className="protected-eyebrow">Plan Beyond Today&apos;s Tax Rate</p>
            <h2 id="tax-planning-title">Why Tax-Free Planning Matters</h2>
            <p>Traditional retirement accounts generally defer taxes until withdrawal. If rates or your circumstances change, the spendable income you expected may change with them.</p>
            <p>Depending on your goals and eligibility, a coordinated strategy may include Roth accounts, taxable assets, and properly structured life insurance to create more flexibility in retirement.</p>
          </div>

          <div className="protected-area-grid">
            {planningAreas.map((area) => (
              <article key={area.title}>
                <span className="protected-card-mark" aria-hidden="true">✓</span>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="protected-cta" aria-labelledby="taxfree-cta-title">
          <p className="protected-eyebrow">Your Next Step</p>
          <h2 id="taxfree-cta-title">Ready to structure your tax-free plan?</h2>
          <p>Start with the private Financial Snapshot to identify which retirement and tax decisions deserve attention now.</p>
          <a
            className="protected-button"
            href={snapshotUrl}
            data-analytics-event="primary_cta_click"
            data-analytics-label="Tax-Free Retirement Financial Snapshot"
          >
            Take the Financial Snapshot <span aria-hidden="true">→</span>
          </a>
          <small>Private • Secure • No pressure</small>
          <div className="conversion-assurance" aria-label="What happens next">
            <span><b>1</b> Complete your Snapshot</span>
            <span><b>2</b> Review tax priorities</span>
            <span><b>3</b> Choose your next step</span>
          </div>
          <a
            className="education-solutions-link"
            href={`${siteUrl}/solutions/`}
            data-analytics-event="education_solutions_click"
            data-analytics-label="Tax-Free Retirement Explore Solutions"
          >
            Explore All Solutions <span aria-hidden="true">→</span>
          </a>
        </section>

        <p className="protected-disclaimer">Educational information only. This is not individualized investment, insurance, tax, or legal advice. Tax treatment depends on current law and individual circumstances and may change. Life-insurance cash value, loans, withdrawals, charges, lapse risk, and eligibility vary by contract; loans and withdrawals may reduce cash value and death benefits and can create tax consequences. Guarantees depend on the claims-paying ability of the issuing insurer. Consult qualified tax and legal professionals for advice about your situation.</p>
      </main>

      <SiteFooter />
      <a
        className="mobile-conversion-cta"
        href={snapshotUrl}
        data-analytics-event="primary_cta_click"
        data-analytics-label="Mobile Tax-Free Retirement Snapshot"
      >
        Take My Snapshot <span aria-hidden="true">→</span>
      </a>
      <SolutionsAnalytics />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
