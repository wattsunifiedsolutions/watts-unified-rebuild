import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { SolutionsAnalytics } from "../SolutionsAnalytics";
import { LiteVideo } from "../LiteVideo";

const siteUrl = "https://wattsunified.com";
const pageUrl = `${siteUrl}/protected-growth`;
const snapshotUrl = "https://financialsnapshot.wattsunified.com/?source=protected-growth";

export const metadata: Metadata = {
  title: { absolute: "Protected Growth Strategy | Watts Unified Solutions" },
  description: "Learn how protected growth strategies may help limit direct market-loss exposure while preserving long-term growth potential.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Protected Growth Strategy | Watts Unified Solutions",
    description: "Explore strategies designed to balance principal protection, growth potential, and retirement confidence.",
    url: pageUrl,
    siteName: "Watts Unified Solutions",
    type: "website",
    images: [{
      url: "/solutions-app/protected-growth-hero-v1.webp",
      width: 1672,
      height: 941,
      alt: "A Black financial educator with long locs explaining a protected growth strategy to a mature Black couple.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protected Growth Strategy | Watts Unified Solutions",
    description: "Learn how protected growth strategies may support a steadier retirement plan.",
    images: ["/solutions-app/protected-growth-hero-v1.webp"],
  },
};

const protectionAreas = [
  {
    title: "Principal Protection",
    copy: "Explore strategies designed to reduce direct exposure to market downturns while protecting previously credited gains, subject to contract terms.",
  },
  {
    title: "Upside Potential",
    copy: "Interest may be credited using the positive performance of an external market index without directly investing in that index.",
  },
  {
    title: "Peace of Mind",
    copy: "Build a retirement strategy that is less dependent on daily market movement and more aligned with your long-term priorities.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "How Generational Wealth Is Built and Protected",
  description: "A Protected Growth educational briefing from Watts Unified Solutions.",
  thumbnailUrl: "https://i.ytimg.com/vi/5OWFXJK3WG8/maxresdefault.jpg",
  embedUrl: "https://www.youtube.com/embed/5OWFXJK3WG8",
  contentUrl: "https://www.youtube.com/watch?v=5OWFXJK3WG8",
  publisher: { "@type": "Organization", name: "Watts Unified Solutions", url: siteUrl },
};

export default function ProtectedGrowthPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />

      <main id="main" className="protected-page">
        <section className="protected-hero" aria-label="Protected growth education for a Black family">
          <Image
            src="/protected-growth-hero-v1.webp"
            alt="A Black financial educator with long locs explaining a protected growth strategy to a mature Black couple"
            width={1672}
            height={941}
            sizes="100vw"
            priority
          />
        </section>

        <section className="protected-intro" aria-labelledby="protected-title">
          <p className="protected-eyebrow">Education Series</p>
          <h1 id="protected-title">Protected Growth</h1>
          <p>Learn how to participate in market gains without directly exposing your principal to market crashes.</p>
        </section>

        <section className="protected-video-section" aria-label="Protected Growth video briefing">
          <div className="protected-video-frame">
            <LiteVideo
              videoId="5OWFXJK3WG8"
              title="How Generational Wealth Is Built and Protected"
              poster="/protected-growth-hero-v1.webp"
              posterAlt="Black couple reviewing a protected growth strategy with a financial educator"
              analyticsLabel="Protected Growth briefing"
            />
          </div>
        </section>

        <section className="protected-explainer" aria-labelledby="zero-hero-title">
          <div className="protected-explainer-copy">
            <p className="protected-eyebrow">Protect the Foundation</p>
            <h2 id="zero-hero-title">Zero Is Your Hero</h2>
            <p>When the market drops, recovering losses requires even more growth just to return to where you started. A 50% loss requires a 100% gain to break even.</p>
            <p>Some protected-growth strategies use Fixed Indexed Annuities or Indexed Universal Life insurance. Depending on the product, negative index performance may not create a negative interest credit for the crediting period, while positive index performance may support credited interest.</p>
          </div>

          <div className="protected-area-grid">
            {protectionAreas.map((area) => (
              <article key={area.title}>
                <span className="protected-card-mark" aria-hidden="true">✓</span>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="protected-cta" aria-labelledby="protected-cta-title">
          <p className="protected-eyebrow">Your Next Step</p>
          <h2 id="protected-cta-title">Ready to protect your wealth?</h2>
          <p>Start with the private Financial Snapshot to see whether a protected-growth strategy deserves a closer look.</p>
          <a
            className="protected-button"
            href={snapshotUrl}
            data-analytics-event="primary_cta_click"
            data-analytics-label="Protected Growth Financial Snapshot"
          >
            Take the Financial Snapshot <span aria-hidden="true">→</span>
          </a>
          <small>Private • Secure • No pressure</small>
          <div className="conversion-assurance" aria-label="What happens next">
            <span><b>1</b> Complete your Snapshot</span>
            <span><b>2</b> Review your priorities</span>
            <span><b>3</b> Decide without pressure</span>
          </div>
          <a
            className="education-solutions-link"
            href={`${siteUrl}/solutions/`}
            data-analytics-event="education_solutions_click"
            data-analytics-label="Protected Growth Explore Solutions"
          >
            Explore All Solutions <span aria-hidden="true">→</span>
          </a>
        </section>

        <p className="protected-disclaimer">Educational information only. This is not individualized investment, tax, or legal advice. Indexed annuities and indexed life insurance are not direct market investments. Caps, participation rates, spreads, charges, surrender terms, loans, withdrawals, eligibility, and guarantees vary by product and may affect values and benefits. Guarantees depend on the claims-paying ability of the issuing insurer.</p>
      </main>

      <SiteFooter />
      <a
        className="mobile-conversion-cta"
        href={snapshotUrl}
        data-analytics-event="primary_cta_click"
        data-analytics-label="Mobile Protected Growth Snapshot"
      >
        Take My Snapshot <span aria-hidden="true">→</span>
      </a>
      <SolutionsAnalytics />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
