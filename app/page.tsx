import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SolutionsAnalytics } from "./SolutionsAnalytics";

const siteUrl = "https://wattsunified.com";
const scheduleUrl = `${siteUrl}/schedule/solutions`;
const taxBucketsUrl = "https://taxbuckets.wattsunified.com";

export const metadata: Metadata = {
  title: "Retirement & Wealth Strategy",
  description: "Build a faith-led retirement income, wealth protection, and family legacy strategy with S. Alex Watts.",
  alternates: { canonical: `${siteUrl}/solutions/retirement-wealth/` },
  openGraph: {
    title: "Retirement & Wealth Strategy | Watts Unified Solutions",
    description: "Protect your retirement. Build lasting wealth. Leave a legacy.",
    url: `${siteUrl}/solutions/retirement-wealth/`,
    siteName: "Watts Unified Solutions",
    type: "website",
    images: [{
      url: "/solutions-app/og-family-v2.jpg",
      width: 1200,
      height: 630,
      alt: "A Black father with long locs discussing retirement, wealth, and family legacy with his two adult sons.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retirement & Wealth Strategy | Watts Unified Solutions",
    description: "Protect your retirement. Build lasting wealth. Leave a legacy.",
    images: ["/solutions-app/og-family-v2.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Retirement & Wealth Strategy",
  serviceType: "Retirement income, wealth protection, and legacy strategy",
  url: `${siteUrl}/solutions/retirement-wealth/`,
  provider: { "@type": "FinancialService", name: "Watts Unified Solutions", url: siteUrl },
  areaServed: "US",
  description: "Faith-led guidance for retirement income, wealth protection, tax awareness, and family legacy.",
};

export default function RetirementWealthPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />

      <main id="main">
        <section className="hero" aria-label="Faith-led family wealth and legacy">
          {/* Served directly as a local WebP so the family image displays reliably. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero-image"
            src="/retirement-family-v2.webp"
            alt="A Black father with long locs discussing wealth, faith, and family legacy with his two adult sons"
            width="1004"
            height="1536"
            fetchPriority="high"
          />
        </section>

        <section className="architecture-intro" aria-labelledby="page-heading">
          <a className="back-link" href={`${siteUrl}/solutions/`}>← View All Strategic Frameworks</a>
          <p className="architecture-kicker">Strategic Wealth Management</p>
          <h1 id="page-heading">Retirement &amp; Wealth Architecture</h1>
          <p>Structure your retirement transition so your income is designed to last as long as you do. Position your wealth for tax-aware growth while reducing unnecessary exposure to market risk.</p>
        </section>

        <section className="retirement-problem" aria-labelledby="problem-heading">
          <h2 id="problem-heading">The Traditional Retirement Model Is Broken</h2>
          <p>Standard accumulation strategies can leave your life savings exposed to two major threats: unpredictable market corrections and uncertain future tax rates. Deferring taxes into retirement can create a silent partner taking a share of your income when you may need it most.</p>
          <p>Watts Unified Solutions helps you evaluate tax-diversified retirement approaches and market-protection strategies so your income, wealth, and legacy decisions work together with greater clarity.</p>
        </section>

        <section className="wealth-pillars" aria-labelledby="pillars-heading">
          <div className="pillars-heading">
            <p className="architecture-kicker">Our Framework</p>
            <h2 id="pillars-heading">The Three Pillars of Wealth</h2>
          </div>
          <div className="pillar-grid">
            <article>
              <svg className="pillar-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
              <h3>Tax-Advantaged Growth</h3>
              <p>Reduce unnecessary tax drag on compound growth. Explore properly structured strategies that may provide tax advantages and more efficient retirement distributions.</p>
            </article>
            <article>
              <svg className="pillar-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              </svg>
              <h3>Principal Protection</h3>
              <p>Sequence-of-returns risk can damage a retirement plan when a market decline happens early. Evaluate strategies designed to limit direct exposure to market losses.</p>
            </article>
            <article>
              <svg className="pillar-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" x2="21" y1="22" y2="22" />
                <line x1="6" x2="6" y1="18" y2="11" />
                <line x1="10" x2="10" y1="18" y2="11" />
                <line x1="14" x2="14" y1="18" y2="11" />
                <line x1="18" x2="18" y1="18" y2="11" />
                <polygon points="12 2 20 7 4 7" />
              </svg>
              <h3>Lifetime Income</h3>
              <p>Move from accumulating wealth to distributing it with purpose. Build an income strategy designed to support your lifestyle throughout retirement.</p>
            </article>
          </div>
        </section>

        <section className="strategy-cta" aria-labelledby="strategy-cta-heading">
          <div className="strategy-cta-inner">
            <h2 id="strategy-cta-heading">Ready to Build Your Strategy?</h2>
            <p>Stop guessing with your financial future. Discover how the three tax buckets impact your wealth, and schedule a one-on-one consultation to map out your custom tax-free retirement framework.</p>
            <div className="strategy-actions">
              <a className="cta-primary" href={scheduleUrl} data-analytics-event="primary_cta_click" data-analytics-label="Retirement Wealth Strategy Session">Schedule a Strategy Session <span aria-hidden="true">→</span></a>
              <a className="cta-secondary" href={taxBucketsUrl} data-analytics-event="education_tool_click" data-analytics-label="Explore Tax Buckets">Explore Tax Buckets <span aria-hidden="true">→</span></a>
            </div>
            <div className="conversion-assurance" aria-label="What happens next">
              <span><b>1</b> Share your priorities</span>
              <span><b>2</b> Review your framework</span>
              <span><b>3</b> Choose your next step</span>
            </div>
          </div>
        </section>

        <p className="disclaimer">Educational information only. It is not individualized investment, tax, or legal advice. Tax and legal matters should be reviewed with qualified professionals.</p>
      </main>

      <SiteFooter />

      <a className="mobile-conversion-cta" href={scheduleUrl} data-analytics-event="primary_cta_click" data-analytics-label="Mobile Retirement Wealth Strategy Session">Schedule a Strategy Session <span aria-hidden="true">→</span></a>

      <SolutionsAnalytics />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
