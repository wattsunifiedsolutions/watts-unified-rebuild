const PAGE_PATHS = new Set(["/schedule/marketing", "/schedule/marketing/"]);
const HERO_PATH = "/assets/marketing-strategy-session-hero.webp";
const HERO_KEY = "marketing-strategy-session-hero.webp";
const CALENDAR_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1gxff_vnvbL_Xrb8CT2bEncJcdBy-_EY-Wa_gYbGqKdf2nKCbVkcgvXMIDtCKqjp83elVSXgTh?gv=true";

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#ffffff">
  <title>Business Systems &amp; Marketing Strategy | Watts Unified Solutions</title>
  <meta name="description" content="Schedule a focused business systems strategy session to review your domain, CRM, tracking, automation, funnels, and client acquisition foundation.">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="https://wattsunified.com/schedule/marketing">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Business Systems &amp; Marketing Strategy | Watts Unified Solutions">
  <meta property="og:description" content="Audit the systems supporting your client acquisition and leave with clearer priorities.">
  <meta property="og:url" content="https://wattsunified.com/schedule/marketing">
  <meta property="og:image" content="https://wattsunified.com${HERO_PATH}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Business Systems &amp; Marketing Strategy | Watts Unified Solutions">
  <meta name="twitter:description" content="Reserve a focused review of the digital foundation supporting your business growth.">
  <meta name="twitter:image" content="https://wattsunified.com${HERO_PATH}">
  <link rel="icon" type="image/png" sizes="128x128" href="https://wattsunified.com/watts-falcon.png?v=20260720">
  <link rel="preload" as="image" type="image/webp" href="${HERO_PATH}" fetchpriority="high">
  <style>
    :root{--navy:#0b1f3a;--gold:#d4af37;--gold-deep:#9b6b17;--ink:#25282d;--muted:#626b76;--line:#e2e5e9;--cream:#faf9f6;--soft:#f6f8fa;--white:#fff;--max:1180px;--shadow:0 16px 42px rgba(23,35,50,.1)}
    *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#fff;color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased}body:before{content:"";position:absolute;inset:0 0 auto;height:4px;z-index:100;background:#c8992e}a{color:inherit}img{display:block;max-width:100%;height:auto}button,a{-webkit-tap-highlight-color:transparent}:focus-visible{outline:3px solid var(--gold);outline-offset:3px}.skip{position:fixed;left:14px;top:-100px;z-index:1000;padding:10px 16px;border-radius:4px;background:var(--navy);color:#fff}.skip:focus{top:14px}
    .site-header{position:relative;z-index:50;height:82px;border-bottom:1px solid #e6e9ed;background:#fff}.header-inner{width:min(var(--max),calc(100% - 40px));height:100%;display:flex;align-items:center;gap:36px;margin:auto}.brand{display:flex;align-items:center;flex:0 1 310px}.brand img{width:min(285px,100%)}.site-nav{display:flex;align-items:center;gap:24px;margin-left:auto;font-size:.9rem;font-weight:700}.site-nav a{text-decoration:none;white-space:nowrap}.site-nav a:not(.nav-cta){padding:28px 0;border-bottom:2px solid transparent}.site-nav a:hover:not(.nav-cta),.site-nav a:focus-visible:not(.nav-cta){border-color:var(--gold);color:var(--navy)}.nav-cta{display:inline-flex;min-height:48px;align-items:center;justify-content:center;padding:12px 21px;border:2px solid var(--gold);border-radius:3px;background:var(--gold);color:var(--navy);font-weight:850;line-height:1.2;transition:transform .18s ease,background .18s ease}.nav-cta:hover{transform:translateY(-2px);background:#e1bd44}.menu-toggle{display:none;margin-left:auto;border:0;background:transparent;color:var(--navy);font-size:1.75rem;line-height:1;cursor:pointer}
    .hero{height:440px;overflow:hidden;background:#eee}.hero img{width:100%;height:100%;object-fit:cover;object-position:center 38%}.intro{padding:45px 20px 70px;background:var(--cream);text-align:center}.intro-inner{width:min(880px,100%);margin:auto}.eyebrow{display:block;margin:0 0 12px;color:#9c7119;font-size:.72rem;font-weight:900;letter-spacing:.18em;text-transform:uppercase}.intro h1{margin:0 auto 16px;color:var(--navy);font-family:Georgia,"Times New Roman",serif;font-size:clamp(2.6rem,5vw,4.25rem);line-height:1.02;letter-spacing:-.035em}.intro p{max-width:760px;margin:0 auto;color:#44505e;font-size:clamp(1rem,1.7vw,1.16rem);font-weight:550}.primary-cta{display:inline-flex;min-height:50px;align-items:center;justify-content:center;margin-top:25px;padding:12px 25px;border:2px solid var(--gold);border-radius:3px;background:var(--gold);color:var(--navy);font-size:.84rem;font-weight:900;letter-spacing:.045em;text-decoration:none;text-transform:uppercase;box-shadow:0 8px 22px rgba(95,74,20,.15);transition:transform .18s ease,background .18s ease}.primary-cta:hover{transform:translateY(-2px);background:#e1bd44}
    .expectations{position:relative;z-index:3;padding:0 20px;background:#fff}.expectations-inner{width:min(960px,100%);display:grid;grid-template-columns:repeat(3,1fr);margin:-34px auto 0;border:1px solid #e5e7ea;border-top:3px solid var(--gold);border-radius:10px;background:#fff;box-shadow:0 12px 30px rgba(23,35,50,.09)}.expectation{display:flex;min-height:96px;align-items:center;justify-content:center;gap:12px;padding:20px}.expectation+.expectation{border-left:1px solid #e7e8eb}.expectation svg{width:24px;height:24px;flex:0 0 24px;color:#a77a19}.expectation b{display:block;color:var(--navy);font-family:Georgia,"Times New Roman",serif;font-size:1.04rem;line-height:1.2}.expectation span{display:block;margin-top:3px;color:#707782;font-size:.78rem;line-height:1.35}
    .booking-section{padding:58px 20px 88px;background:#fff}.booking-intro{width:min(760px,100%);margin:0 auto 28px;text-align:center}.booking-intro h2{margin:0 0 9px;color:var(--navy);font-family:Georgia,"Times New Roman",serif;font-size:clamp(2rem,4vw,3rem);line-height:1.08}.booking-intro p{margin:0;color:var(--muted);font-size:.98rem}.booking-shell{width:min(850px,100%);margin:0 auto;padding:18px;border:1px solid #ececec;border-radius:18px;background:#fff;box-shadow:var(--shadow)}.booking-frame{overflow:hidden;border:1px solid #ececec;border-radius:12px;background:#fff}.booking-frame iframe{display:block;width:100%;height:750px;border:0;background:#fff}.privacy{display:flex;align-items:center;justify-content:center;gap:8px;margin:25px auto 0;color:#606873;font-size:.82rem;text-align:center}.privacy svg{width:16px;height:16px;flex:0 0 16px;color:#9b781b}.booking-note{max-width:760px;margin:15px auto 0;color:#7a818b;font-size:.74rem;line-height:1.55;text-align:center}.alternate{max-width:690px;margin:28px auto 0;padding-top:22px;border-top:1px solid var(--line);color:#5e6874;font-size:.86rem;text-align:center}.alternate a{color:var(--navy);font-weight:800;text-underline-offset:3px}
    .global-footer{display:grid;grid-template-columns:2fr 1fr 1fr;gap:50px;padding:65px max(24px,7vw) 25px;border-top:1px solid #d6af48;background:#f6f8fa;color:#667085;box-shadow:inset 0 1px 0 #fff;text-align:left}.global-footer>div{display:flex;flex-direction:column;align-items:flex-start;gap:12px}.global-footer b{margin:0 0 8px;color:#0a1e38;font-size:.82rem;line-height:1.2;letter-spacing:.12em;text-transform:uppercase}.global-footer a{width:max-content;color:inherit;text-decoration:none}.global-footer a:hover,.global-footer a:focus-visible{color:#9b6b17}.footer-brand{gap:0!important}.footer-brand img{width:250px;margin:0 0 14px;object-fit:contain}.footer-brand p{max-width:560px;margin:0;color:#667085;font-size:1rem;line-height:1.5}.footer-brand p+p{margin-top:4px}.footer-social a{display:inline-flex;align-items:center;gap:10px;color:#586779;font-weight:650}.footer-social svg,.footer-social img{display:block;width:20px;height:20px;flex:0 0 20px;object-fit:contain}.footer-social .linkedin svg{color:#0a66c2}.footer-social .instagram svg{color:#e4405f}.global-footer small{grid-column:1/-1;display:block;width:100%;padding-top:22px;border-top:1px solid #e4e1da;color:#667085;font-size:.72rem;line-height:1.4}.mobile-book{display:none}
    @media(max-width:1040px){.site-nav{position:absolute;display:none;left:0;right:0;top:82px;z-index:50;padding:20px;border-bottom:1px solid #dce2e9;background:#fff}.site-nav.open{display:grid;gap:4px}.site-nav a:not(.nav-cta){padding:12px 8px}.nav-cta{margin-top:8px}.menu-toggle{display:block}.global-footer{grid-template-columns:1fr 1fr}.footer-brand{grid-column:1/-1}}
    @media(max-width:760px){.header-inner{width:min(100% - 28px,var(--max))}.site-header{height:72px}.site-nav{top:72px}.brand{max-width:245px}.hero{height:320px}.hero img{object-position:center center}.intro{padding:35px 16px 58px}.intro h1{font-size:clamp(2.5rem,11vw,3.55rem)}.intro p{font-size:.98rem}.expectations{padding-inline:14px}.expectations-inner{grid-template-columns:1fr;margin-top:-25px}.expectation{min-height:76px;justify-content:flex-start;padding:16px 22px}.expectation+.expectation{border-top:1px solid #e7e8eb;border-left:0}.booking-section{padding:46px 12px 72px}.booking-shell{padding:8px;border-radius:14px}.booking-frame{border-radius:10px}.booking-frame iframe{height:790px}.privacy{font-size:.76rem}.global-footer{grid-template-columns:1fr 1fr;padding:44px 24px 88px}.footer-brand{grid-column:1/-1}.mobile-book{position:fixed;z-index:95;inset:auto 0 0;display:flex;min-height:58px;align-items:center;justify-content:center;padding:12px 18px;background:#d4af37;color:#0b1f3a;font-size:.8rem;font-weight:950;letter-spacing:.05em;text-decoration:none;text-transform:uppercase;box-shadow:0 -10px 30px rgba(0,0,0,.18)}}
    @media(max-width:480px){.brand{max-width:218px}.hero{height:265px}.intro h1{font-size:2.55rem}.booking-section{padding-inline:8px}.booking-shell{padding:4px}.booking-frame iframe{height:810px}.global-footer{grid-template-columns:1fr}.global-footer>div,.global-footer small{grid-column:1}}
    @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.nav-cta,.primary-cta{transition:none}}
  </style>
  <script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","name":"Business Systems and Marketing Strategy","url":"https://wattsunified.com/schedule/marketing","description":"Schedule a focused audit of the digital systems supporting client acquisition.","primaryImageOfPage":{"@type":"ImageObject","url":"https://wattsunified.com${HERO_PATH}","width":1408,"height":768}},{"@type":"ScheduleAction","name":"Schedule a Business Systems Strategy Session","target":{"@type":"EntryPoint","urlTemplate":"${CALENDAR_URL}"},"agent":{"@type":"Person","name":"S. Alex Watts"}}]}</script>
</head>
<body>
  <a class="skip" href="#book">Skip to available times</a>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="/" aria-label="Watts Unified Solutions home"><img src="https://wattsunified.com/solutions-app/watts-brand-lockup.png" alt="Watts Unified Solutions" width="545" height="113"></a>
      <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="site-nav">&#9776;</button>
      <nav class="site-nav" id="site-nav" aria-label="Primary navigation"><a href="/">Home</a><a href="/solutions/">Solutions</a><a href="/solutions/programs/veterans">Veteran Summit</a><a href="/opportunity">Opportunity</a><a href="/resources">Resources</a><a href="/about">About</a><a class="nav-cta" href="/schedule/solutions">Let&#39;s Connect</a></nav>
    </div>
  </header>
  <main>
    <section class="hero" aria-label="Black business leaders reviewing a strategic plan"><img src="${HERO_PATH}" alt="Black business leaders reviewing a strategic growth plan together" width="1408" height="768" fetchpriority="high" decoding="async"></section>
    <section class="intro" aria-labelledby="marketing-title">
      <div class="intro-inner"><span class="eyebrow">Watts Unified Solutions | Systems &amp; Infrastructure Audit</span><h1 id="marketing-title">Audit Your Digital Foundation</h1><p>A focused session for business owners ready to strengthen the systems supporting client acquisition and growth.</p><a class="primary-cta" href="#book" data-watts-event="marketing_primary_cta">Reserve My Systems Audit</a></div>
    </section>
    <section class="expectations" aria-label="Session expectations">
      <div class="expectations-inner">
        <div class="expectation"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 5h16v14H4z"></path><path d="M4 9h16M8 5v4"></path></svg><div><b>Systems &amp; Infrastructure</b><span>Domain, CRM, tracking, automation, and funnels.</span></div></div>
        <div class="expectation"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg><div><b>60-Minute Strategy Session</b><span>A focused virtual working conversation.</span></div></div>
        <div class="expectation"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m5 12 4 4L19 6"></path></svg><div><b>Clear Action Priorities</b><span>Identify what deserves attention next.</span></div></div>
      </div>
    </section>
    <section class="booking-section" id="book" aria-labelledby="booking-title">
      <div class="booking-intro"><h2 id="booking-title">Reserve Your Business Systems Strategy Session</h2><p>Select an open appointment below. We will meet virtually at your chosen time.</p></div>
      <div class="booking-shell"><div class="booking-frame"><iframe src="${CALENDAR_URL}" width="100%" height="750" title="Schedule Marketing Audit" loading="eager"></iframe></div></div>
      <p class="privacy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path></svg><span>Private conversation &bull; Select an open time block above to secure your session.</span></p>
      <p class="booking-note">This session provides strategic and educational guidance. Business outcomes are not guaranteed, and implementation decisions remain the responsibility of the business owner.</p>
      <p class="alternate">Questions before booking? <a href="/schedule" data-watts-event="marketing_alternate_contact">Send a quick message.</a></p>
    </section>
  </main>
  <footer class="global-footer">
    <div class="footer-brand"><img alt="Watts Unified Solutions" src="https://wattsunified.com/solutions-app/watts-brand-lockup.png" width="545" height="113"><p>U.S. Army Veteran | Man of Faith | Retirement &amp; Legacy Specialist</p><p>Securing your lifetime income and protecting your family&#39;s future.</p></div>
    <div><b>Explore</b><a href="https://wattsunified.com/solutions/">Solutions</a><a href="https://wattsunified.com/system">Unified System</a><a href="https://wattsunified.com/solutions/programs/veterans">Veteran Summit</a><a href="https://wattsunified.com/opportunity">Opportunity</a><a href="https://wattsunified.com/resources">Resources</a><a href="https://wattsunified.com/about">About</a></div>
    <div class="footer-social"><b>Connect</b><a class="linkedin" href="https://www.linkedin.com/in/s-alex-watts" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M416 32H32C14 32 0 46 0 64v384c0 18 14 32 32 32h384c18 0 32-14 32-32V64c0-18-14-32-32-32zM135 416H69V202h66v214zm-33-243c-21 0-38-17-38-38s17-39 38-39 39 18 39 39-18 38-39 38zm282 243h-66V312c0-25 0-57-35-57s-40 27-40 55v106h-66V202h64v29h1c9-17 31-35 63-35 67 0 79 44 79 102v118z"></path></svg><span>LinkedIn</span></a><a class="instagram" href="https://www.instagram.com/watts_unifiedsolutions" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M224 141c-64 0-115 51-115 115s51 115 115 115 115-51 115-115-51-115-115-115zm0 190c-41 0-75-34-75-75s34-75 75-75 75 34 75 75-34 75-75 75zm146-195c0 15-12 27-27 27s-27-12-27-27 12-27 27-27 27 12 27 27zm76 27c-2-36-10-68-36-94s-58-34-94-36c-37-2-148-2-185 0-36 2-68 10-94 36S3 127 1 163c-2 37-2 148 0 185 2 36 10 68 36 94s58 34 94 36c37 2 148 2 185 0 36-2 68-10 94-36s34-58 36-94c2-37 2-148 0-185z"></path></svg><span>Instagram</span></a><a href="https://www.alignable.com/fort-drum-ny/watts-unified-solutions" target="_blank" rel="noopener noreferrer"><img alt="" aria-hidden="true" src="https://wattsunified.com/alignable-icon.png" width="18" height="18"><span>Alignable</span></a></div>
    <small>&copy; 2026 Watts Unified Solutions. All rights reserved.</small>
  </footer>
  <a class="mobile-book" href="#book" data-watts-event="marketing_mobile_cta">View Available Times</a>
  <script>const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.site-nav');menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});document.querySelectorAll('[data-watts-event]').forEach(el=>el.addEventListener('click',()=>{window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:el.dataset.wattsEvent,page_path:'/schedule/marketing'})}));</script>
</body>
</html>`;

export default {
  async fetch(request, env = {}) {
    const url = new URL(request.url);
    if (url.pathname === HERO_PATH) {
      const body = env.SCHEDULE_ASSETS?.get ? await env.SCHEDULE_ASSETS.get(HERO_KEY, "arrayBuffer") : env.MARKETING_STRATEGY_HERO;
      if (!body) return new Response("Asset unavailable", { status: 404 });
      return new Response(request.method === "HEAD" ? null : body, { headers: {
        "content-type": "image/webp",
        "cache-control": "public,max-age=31536000,immutable",
        "access-control-allow-origin": "*",
        "x-content-type-options": "nosniff",
        "x-watts-marketing-strategy": "highlevel-conversion-v1",
      }});
    }
    if (!PAGE_PATHS.has(url.pathname)) return Response.redirect("https://wattsunified.com/schedule/marketing", 302);
    return new Response(request.method === "HEAD" ? null : html, { headers: {
      "content-type": "text/html;charset=UTF-8",
      "cache-control": "no-store,max-age=0",
      "cloudflare-cdn-cache-control": "no-store",
      "cdn-cache-control": "no-store",
      "x-content-type-options": "nosniff",
      "x-frame-options": "SAMEORIGIN",
      "referrer-policy": "strict-origin-when-cross-origin",
      "x-robots-tag": "index,follow,max-image-preview:large",
      "x-watts-marketing-strategy": "highlevel-conversion-v1",
    }});
  },
};
