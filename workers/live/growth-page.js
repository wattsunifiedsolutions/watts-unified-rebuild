const PAGE_PATHS = new Set(["/growth", "/growth/"]);
const HERO_PATH = "/assets/growth-opportunity-hero.webp";
const HERO_URL = `${HERO_PATH}?v=20260721-hero2`;
const HERO_KEY = "growth-opportunity-hero.webp";
const CALENDAR_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ftaGinVKd21W8W3fKh1bv2LsLqiaoDuujeE2eFynNsyyzSF8R0n8AO4AywNeGbn5JdvYQKQrs?gv=true";

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#ffffff">
  <title>Explore a Growth Opportunity | Watts Unified Solutions</title>
  <meta name="description" content="Learn about the Watts Unified growth opportunity and schedule a private conversation with S. Alex Watts to explore alignment and next steps.">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="https://wattsunified.com/growth">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Explore a Growth Opportunity | Watts Unified Solutions">
  <meta property="og:description" content="Schedule a private Growth &amp; Opportunity Session with S. Alex Watts.">
  <meta property="og:url" content="https://wattsunified.com/growth">
  <meta property="og:image" content="https://wattsunified.com${HERO_URL}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Explore a Growth Opportunity | Watts Unified Solutions">
  <meta name="twitter:description" content="Explore alignment, professional growth, mentorship, and business-building opportunities.">
  <meta name="twitter:image" content="https://wattsunified.com${HERO_URL}">
  <link rel="icon" type="image/png" sizes="128x128" href="https://wattsunified.com/watts-falcon.png?v=20260720">
  <link rel="preload" as="image" type="image/webp" href="${HERO_URL}" fetchpriority="high">
  <style>
    :root{--navy:#0b1f3a;--gold:#d4af37;--gold-deep:#9b6b17;--ink:#292929;--muted:#5d6672;--line:#e2e4e7;--cream:#faf9f6;--soft:#f6f8fa;--white:#fff;--max:1180px;--shadow:0 16px 42px rgba(23,35,50,.11)}
    *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#fff;color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased}body:before{content:"";position:absolute;inset:0 0 auto;height:4px;z-index:100;background:#c8992e}a{color:inherit}img{display:block;max-width:100%;height:auto}button,a{-webkit-tap-highlight-color:transparent}:focus-visible{outline:3px solid var(--gold);outline-offset:3px}.skip{position:fixed;left:14px;top:-100px;z-index:1000;padding:10px 16px;border-radius:4px;background:var(--navy);color:#fff}.skip:focus{top:14px}
    .site-header{position:relative;z-index:50;height:82px;border-bottom:1px solid #e6e9ed;background:#fff}.header-inner{width:min(var(--max),calc(100% - 40px));height:100%;display:flex;align-items:center;gap:36px;margin:auto}.brand{display:flex;align-items:center;flex:0 1 310px}.brand img{width:min(285px,100%)}.site-nav{display:flex;align-items:center;gap:24px;margin-left:auto;font-size:.9rem;font-weight:700}.site-nav a{text-decoration:none;white-space:nowrap}.site-nav a:not(.nav-cta){padding:28px 0;border-bottom:2px solid transparent}.site-nav a:hover:not(.nav-cta),.site-nav a:focus-visible:not(.nav-cta),.site-nav a[aria-current="page"]{border-color:var(--gold);color:var(--navy)}.nav-cta{display:inline-flex;min-height:48px;align-items:center;justify-content:center;padding:12px 21px;border:2px solid var(--gold);border-radius:3px;background:var(--gold);color:var(--navy);font-weight:850;line-height:1.2;transition:transform .18s ease,background .18s ease}.nav-cta:hover{transform:translateY(-2px);background:#e1bd44}.menu-toggle{display:none;margin-left:auto;border:0;background:transparent;color:var(--navy);font-size:1.75rem;line-height:1;cursor:pointer}
    .hero{position:relative;isolation:isolate;min-height:505px;display:flex;align-items:flex-start;justify-content:center;overflow:hidden;background:#262626;text-align:center}.hero>img{position:absolute;z-index:0;inset:0;width:100%;height:100%;object-fit:cover;object-position:center center}.hero-copy{position:relative;z-index:1;width:min(900px,calc(100% - 36px));padding:92px 18px 110px}.eyebrow{display:block;margin:0 0 18px;color:#d7a62f;font-size:.72rem;font-weight:900;letter-spacing:.18em;text-transform:uppercase;text-shadow:0 2px 6px rgba(0,0,0,.8)}.hero h1{max-width:850px;margin:0 auto 30px;color:#fff;font-family:Georgia,"Times New Roman",serif;font-size:clamp(3rem,6vw,5.2rem);line-height:.98;letter-spacing:-.035em;text-shadow:0 3px 13px rgba(0,0,0,.9)}.hero p{max-width:750px;margin:0 auto;color:#fff;font-size:clamp(1rem,1.7vw,1.22rem);line-height:1.6;text-shadow:0 2px 9px rgba(0,0,0,.95)}
    .booking-section{position:relative;z-index:3;padding:0 20px 92px;background:#fff}.booking-shell{width:min(850px,100%);margin:-58px auto 0;padding:18px;border:1px solid #ececec;border-radius:18px;background:#fff;box-shadow:var(--shadow)}.booking-frame{overflow:hidden;border:1px solid #ececec;border-radius:12px;background:#fff}.booking-frame iframe{display:block;width:100%;height:750px;border:0;background:#fff}.privacy{display:flex;align-items:center;justify-content:center;gap:8px;margin:25px auto 0;color:#606873;font-size:.82rem;text-align:center}.privacy svg{width:16px;height:16px;flex:0 0 16px;color:#9b781b}.booking-note{max-width:750px;margin:15px auto 0;color:#7a818b;font-size:.75rem;line-height:1.55;text-align:center}
    .global-footer{display:grid;grid-template-columns:2fr 1fr 1fr;gap:50px;padding:65px max(24px,7vw) 25px;border-top:1px solid #d6af48;background:#f6f8fa;color:#667085;box-shadow:inset 0 1px 0 #fff;text-align:left}.global-footer>div{display:flex;flex-direction:column;align-items:flex-start;gap:12px}.global-footer b{margin:0 0 8px;color:#0a1e38;font-size:.82rem;line-height:1.2;letter-spacing:.12em;text-transform:uppercase}.global-footer a{width:max-content;color:inherit;text-decoration:none}.global-footer a:hover,.global-footer a:focus-visible{color:#9b6b17}.footer-brand{gap:0!important}.footer-brand img{width:250px;margin:0 0 14px;object-fit:contain}.footer-brand p{max-width:560px;margin:0;color:#667085;font-size:1rem;line-height:1.5}.footer-brand p+p{margin-top:4px}.footer-social a{display:inline-flex;align-items:center;gap:10px;color:#586779;font-weight:650}.footer-social svg,.footer-social img{display:block;width:20px;height:20px;flex:0 0 20px;object-fit:contain}.footer-social .linkedin svg{color:#0a66c2}.footer-social .instagram svg{color:#e4405f}.global-footer small{grid-column:1/-1;display:block;width:100%;padding-top:22px;border-top:1px solid #e4e1da;color:#667085;font-size:.72rem;line-height:1.4}.mobile-book{display:none}
    @media(max-width:1040px){.site-nav{position:absolute;display:none;left:0;right:0;top:82px;z-index:50;padding:20px;border-bottom:1px solid #dce2e9;background:#fff}.site-nav.open{display:grid;gap:4px}.site-nav a:not(.nav-cta){padding:12px 8px}.nav-cta{margin-top:8px}.menu-toggle{display:block}.global-footer{grid-template-columns:1fr 1fr}.footer-brand{grid-column:1/-1}}
    @media(max-width:760px){.header-inner{width:min(100% - 28px,var(--max))}.site-header{height:72px}.site-nav{top:72px}.brand{max-width:245px}.hero{min-height:460px}.hero>img{object-position:center center}.hero-copy{padding:75px 14px 100px}.hero h1{font-size:clamp(2.75rem,12vw,4rem)}.booking-section{padding-inline:12px;padding-bottom:72px}.booking-shell{margin-top:-42px;padding:8px;border-radius:14px}.booking-frame{border-radius:10px}.booking-frame iframe{height:790px}.privacy{font-size:.76rem}.global-footer{grid-template-columns:1fr 1fr;padding:44px 24px 88px}.footer-brand{grid-column:1/-1}.mobile-book{position:fixed;z-index:95;inset:auto 0 0;display:flex;min-height:58px;align-items:center;justify-content:center;padding:12px 18px;background:#d4af37;color:#0b1f3a;font-size:.8rem;font-weight:950;letter-spacing:.05em;text-decoration:none;text-transform:uppercase;box-shadow:0 -10px 30px rgba(0,0,0,.18)}}
    @media(max-width:480px){.brand{max-width:218px}.hero{min-height:430px}.hero-copy{padding-top:62px}.hero h1{font-size:2.85rem}.hero p{font-size:.98rem}.booking-section{padding-inline:8px}.booking-shell{padding:4px}.booking-frame iframe{height:810px}.global-footer{grid-template-columns:1fr}.global-footer>div,.global-footer small{grid-column:1}}
    @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.nav-cta{transition:none}}
  </style>
  <script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","name":"Explore a Growth Opportunity","url":"https://wattsunified.com/growth","description":"Learn about the Watts Unified growth opportunity and schedule a private conversation with S. Alex Watts.","primaryImageOfPage":{"@type":"ImageObject","url":"https://wattsunified.com${HERO_PATH}","width":1408,"height":768}},{"@type":"ScheduleAction","name":"Schedule a Growth & Opportunity Session","target":{"@type":"EntryPoint","urlTemplate":"${CALENDAR_URL}"},"agent":{"@type":"Person","name":"S. Alex Watts"}}]}</script>
</head>
<body>
  <a class="skip" href="#main">Skip to booking</a>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="/" aria-label="Watts Unified Solutions home"><img src="https://wattsunified.com/solutions-app/watts-brand-lockup.png" alt="Watts Unified Solutions" width="545" height="113"></a>
      <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="site-nav">&#9776;</button>
      <nav class="site-nav" id="site-nav" aria-label="Primary navigation"><a href="/">Home</a><a href="/solutions/">Solutions</a><a href="/solutions/programs/veterans">Veteran Summit</a><a href="/opportunity" aria-current="page">Opportunity</a><a href="/resources">Resources</a><a href="/about">About</a><a class="nav-cta" href="/schedule/solutions">Let&#39;s Connect</a></nav>
    </div>
  </header>
  <main id="main">
    <section class="hero" aria-labelledby="growth-title">
      <img src="${HERO_URL}" alt="Premium boardroom prepared for a private growth and opportunity conversation" width="1408" height="768" fetchpriority="high" decoding="async">
      <div class="hero-copy"><span class="eyebrow">Watts Unified Solutions | Growth</span><h1 id="growth-title">Explore a Growth Opportunity</h1><p>Learn more about the partner opportunity and schedule a private conversation to see if it is the right fit for your goals.</p></div>
    </section>
    <section class="booking-section" id="book" aria-label="Schedule a Growth and Opportunity Session">
      <div class="booking-shell"><div class="booking-frame"><iframe src="${CALENDAR_URL}" width="100%" height="750" title="Schedule Growth &amp; Opportunity Session" loading="eager"></iframe></div></div>
      <p class="privacy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path></svg><span>Safe &amp; Confidential &bull; Select an open time block above to secure your session.</span></p>
      <p class="booking-note">This private conversation is for exploring fit and alignment. It does not create an employment relationship or guarantee licensing, compensation, acceptance, or results.</p>
    </section>
  </main>
  <footer class="global-footer">
    <div class="footer-brand"><img alt="Watts Unified Solutions" src="https://wattsunified.com/solutions-app/watts-brand-lockup.png" width="545" height="113"><p>U.S. Army Veteran | Man of Faith | Retirement &amp; Legacy Specialist</p><p>Securing your lifetime income and protecting your family&#39;s future.</p></div>
    <div><b>Explore</b><a href="https://wattsunified.com/solutions/">Solutions</a><a href="https://wattsunified.com/system">Unified System</a><a href="https://wattsunified.com/solutions/programs/veterans">Veteran Summit</a><a href="https://wattsunified.com/opportunity">Opportunity</a><a href="https://wattsunified.com/resources">Resources</a><a href="https://wattsunified.com/about">About</a></div>
    <div class="footer-social"><b>Connect</b><a class="linkedin" href="https://www.linkedin.com/in/s-alex-watts" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M416 32H32C14 32 0 46 0 64v384c0 18 14 32 32 32h384c18 0 32-14 32-32V64c0-18-14-32-32-32zM135 416H69V202h66v214zm-33-243c-21 0-38-17-38-38s17-39 38-39 39 18 39 39-18 38-39 38zm282 243h-66V312c0-25 0-57-35-57s-40 27-40 55v106h-66V202h64v29h1c9-17 31-35 63-35 67 0 79 44 79 102v118z"></path></svg><span>LinkedIn</span></a><a class="instagram" href="https://www.instagram.com/watts_unifiedsolutions" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M224 141c-64 0-115 51-115 115s51 115 115 115 115-51 115-115-51-115-115-115zm0 190c-41 0-75-34-75-75s34-75 75-75 75 34 75 75-34 75-75 75zm146-195c0 15-12 27-27 27s-27-12-27-27 12-27 27-27 27 12 27 27zm76 27c-2-36-10-68-36-94s-58-34-94-36c-37-2-148-2-185 0-36 2-68 10-94 36S3 127 1 163c-2 37-2 148 0 185 2 36 10 68 36 94s58 34 94 36c37 2 148 2 185 0 36-2 68-10 94-36s34-58 36-94c2-37 2-148 0-185z"></path></svg><span>Instagram</span></a><a href="https://www.alignable.com/fort-drum-ny/watts-unified-solutions" target="_blank" rel="noopener noreferrer"><img alt="" aria-hidden="true" src="https://wattsunified.com/alignable-icon.png" width="18" height="18"><span>Alignable</span></a></div>
    <small>© 2026 Watts Unified Solutions. All rights reserved.</small>
  </footer>
  <a class="mobile-book" href="#book">View Available Times</a>
  <script>const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.site-nav');menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});</script>
</body>
</html>`;

export default {
  async fetch(request, env = {}) {
    const url = new URL(request.url);
    if (url.pathname === HERO_PATH) {
      const body = env.GROWTH_ASSETS?.get ? await env.GROWTH_ASSETS.get(HERO_KEY, "arrayBuffer") : env.GROWTH_HERO;
      if (!body) return new Response("Asset unavailable", { status: 404 });
      return new Response(request.method === "HEAD" ? null : body, { headers: {
        "content-type": "image/webp",
        "cache-control": "public,max-age=31536000,immutable",
        "access-control-allow-origin": "*",
        "x-content-type-options": "nosniff",
        "x-watts-growth": "highlevel-rebuild-v1",
      }});
    }
    if (!PAGE_PATHS.has(url.pathname)) return Response.redirect("https://wattsunified.com/growth", 302);
    return new Response(request.method === "HEAD" ? null : html, { headers: {
      "content-type": "text/html;charset=UTF-8",
      "cache-control": "no-store,max-age=0",
      "cloudflare-cdn-cache-control": "no-store",
      "cdn-cache-control": "no-store",
      "x-content-type-options": "nosniff",
      "x-frame-options": "SAMEORIGIN",
      "referrer-policy": "strict-origin-when-cross-origin",
      "x-robots-tag": "index,follow,max-image-preview:large",
      "x-watts-growth": "highlevel-rebuild-v1",
    }});
  },
};
