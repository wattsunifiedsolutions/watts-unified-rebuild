import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { SolutionsAnalytics } from "../SolutionsAnalytics";
import { LiteVideo } from "../LiteVideo";

const siteUrl = "https://wattsunified.com";
const pageUrl = `${siteUrl}/retirement-roadmap`;
const scheduleUrl = `${siteUrl}/schedule/solutions`;

export const metadata: Metadata = {
  title: { absolute: "Retirement Roadmap | Watts Unified Solutions" },
  description: "A complete, step-by-step guide to mapping out your transition into retirement with confidence and clarity.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Retirement Roadmap | Watts Unified Solutions",
    description: "Navigate the transition from accumulating wealth to creating a sustainable, lifelong income stream.",
    url: pageUrl,
    siteName: "Watts Unified Solutions",
    type: "website",
    images: [{
      url: "/solutions-app/retirement-roadmap-hero-v2.webp",
      width: 1672,
      height: 941,
      alt: "A Black father with long locs preparing a retirement roadmap with his two sons.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retirement Roadmap | Watts Unified Solutions",
    description: "Build a clearer path from accumulated wealth to sustainable retirement income.",
    images: ["/solutions-app/retirement-roadmap-hero-v2.webp"],
  },
};

const roadmapAreas = [
  {
    title: "Income Planning",
    copy: "Determine exactly how much income you need and where it will come from.",
  },
  {
    title: "Risk Mitigation",
    copy: "Protect your nest egg from sequence-of-returns risk and inflation.",
  },
  {
    title: "Legacy Alignment",
    copy: "Ensure your retirement plan aligns with your desires for passing wealth to your heirs.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "The 401(k) Trap: How to Protect Your Savings from the Next Market Crash",
  description: "A Retirement Roadmap education briefing from Watts Unified Solutions.",
  thumbnailUrl: "https://i.ytimg.com/vi/65ySBKxE6OI/maxresdefault.jpg",
  embedUrl: "https://www.youtube.com/embed/65ySBKxE6OI",
  contentUrl: "https://www.youtube.com/watch?v=65ySBKxE6OI",
  publisher: { "@type": "Organization", name: "Watts Unified Solutions", url: siteUrl },
};

export default function RetirementRoadmapPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />

      <main id="main" className="roadmap-page">
        <section className="roadmap-hero" aria-label="A family preparing a retirement roadmap together">
          <Image
            src="/retirement-roadmap-hero-v2.webp"
            alt="A Black father with long locs preparing a retirement roadmap with his two sons"
            width={1672}
            height={941}
            sizes="100vw"
            priority
          />
        </section>

        <section className="roadmap-intro" aria-labelledby="roadmap-title">
          <p className="roadmap-eyebrow">Education Series</p>
          <h1 id="roadmap-title">Retirement Roadmap</h1>
          <p>Navigate the transition from accumulating wealth to creating a sustainable, lifelong income stream.</p>
        </section>

        <section className="roadmap-video-section" aria-label="Retirement Roadmap video briefing">
          <div className="roadmap-video-frame">
            <LiteVideo
              videoId="65ySBKxE6OI"
              title="The 401(k) Trap: How to Protect Your Savings from the Next Market Crash"
              poster="/retirement-roadmap-hero-v2.webp"
              posterAlt="Black couple reviewing their retirement roadmap with a financial professional"
              analyticsLabel="Retirement Roadmap briefing"
            />
          </div>
        </section>

        <section className="roadmap-confidence" aria-labelledby="confidence-title">
          <div className="roadmap-confidence-copy">
            <p className="roadmap-eyebrow">Plan the Transition</p>
            <h2 id="confidence-title">Transitioning with Confidence</h2>
            <p>The rules of the game change when you retire. You shift from trying to grow your money to trying to make it last. This requires a completely different strategy.</p>
            <p>Our Retirement Roadmap process helps you identify income gaps, optimize Social Security, and structure your assets to provide a reliable paycheck for the rest of your life.</p>
          </div>

          <div className="roadmap-area-grid">
            {roadmapAreas.map((area) => (
              <article key={area.title}>
                <span className="roadmap-card-mark" aria-hidden="true">✓</span>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="roadmap-cta" aria-labelledby="roadmap-cta-title">
          <p className="roadmap-eyebrow">Your Next Step</p>
          <h2 id="roadmap-cta-title">Ready to map your retirement?</h2>
          <p>Let&apos;s build a customized roadmap for your transition into retirement.</p>
          <a
            className="roadmap-button"
            href={scheduleUrl}
            data-analytics-event="primary_cta_click"
            data-analytics-label="Schedule a Retirement Roadmap Consultation"
          >
            Schedule a Consultation <span aria-hidden="true">→</span>
          </a>
          <div className="conversion-assurance" aria-label="What happens next">
            <span><b>1</b> Share your priorities</span>
            <span><b>2</b> Review the roadmap</span>
            <span><b>3</b> Choose your next step</span>
          </div>
          <a
            className="education-solutions-link"
            href={`${siteUrl}/solutions/`}
            data-analytics-event="education_solutions_click"
            data-analytics-label="Retirement Roadmap Explore Solutions"
          >
            Explore All Solutions <span aria-hidden="true">→</span>
          </a>
        </section>

        <p className="roadmap-disclaimer">Educational information only. This page does not provide individualized investment, tax, or legal advice. Product availability, guarantees, and benefits depend on eligibility, contract terms, and the claims-paying ability of the issuing company.</p>
      </main>

      <SiteFooter />
      <a
        className="mobile-conversion-cta"
        href={scheduleUrl}
        data-analytics-event="primary_cta_click"
        data-analytics-label="Mobile Retirement Roadmap Consultation"
      >
        Map My Retirement <span aria-hidden="true">→</span>
      </a>
      <SolutionsAnalytics />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
