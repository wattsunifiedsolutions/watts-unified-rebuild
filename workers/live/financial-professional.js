const PAGE_PATHS = new Set([
  "/opportunity/financial-professional",
  "/opportunity/financial-professional/",
]);

const ASSETS = {
  "/assets/financial-professional/hero.webp": ["FIN_HERO", "image/webp"],
  "/assets/financial-professional/retirement.webp": ["FIN_RETIREMENT", "image/webp"],
  "/assets/financial-professional/education.webp": ["FIN_EDUCATION", "image/webp"],
  "/assets/financial-professional/legacy.webp": ["FIN_LEGACY", "image/webp"],
  "/assets/financial-professional/mentor.webp": ["FIN_MENTOR", "image/webp"],
  "/assets/financial-professional/alex.webp": ["FIN_ALEX", "image/webp"],
};

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Financial Professional Opportunity | Watts Unified Solutions</title>
  <meta name="description" content="Explore a flexible, mentorship-led financial professional opportunity with Watts Unified Solutions. Learn the work, training, expectations, and next steps.">
  <link rel="canonical" href="https://wattsunified.com/opportunity/financial-professional">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Financial Professional Opportunity | Watts Unified Solutions">
  <meta property="og:description" content="Build a flexible financial services business with training, mentorship, and veteran-led infrastructure.">
  <meta property="og:url" content="https://wattsunified.com/opportunity/financial-professional">
  <meta property="og:image" content="https://wattsunified.com/assets/financial-professional/hero.webp">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Financial Professional Opportunity | Watts Unified Solutions">
  <meta name="twitter:description" content="A clear look at the work, training, expectations, and next steps.">
  <meta name="twitter:image" content="https://wattsunified.com/assets/financial-professional/hero.webp">
  <link rel="preload" as="image" type="image/webp" href="/assets/financial-professional/hero.webp" fetchpriority="high">
  <style>
    :root{--navy:#0b1f3a;--navy2:#142c4d;--gold:#d4af37;--gold2:#b28b18;--ink:#152238;--muted:#5f6b7b;--line:#dce2e9;--cream:#faf9f5;--white:#fff;--max:1180px;--shadow:0 12px 32px rgba(11,31,58,.08)}
    *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;color:var(--ink);background:#fff;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased}img{display:block;max-width:100%;height:auto}a{color:inherit}button,a{-webkit-tap-highlight-color:transparent}h1,h2,h3,p{margin-top:0}h1,h2,h3{font-family:Georgia,"Times New Roman",serif;color:var(--navy);line-height:1.12}h1{font-size:clamp(2.35rem,5vw,4.5rem);letter-spacing:-.035em;margin-bottom:20px}h2{font-size:clamp(2rem,3.8vw,3.25rem);letter-spacing:-.028em;margin-bottom:16px}h3{font-size:1.45rem;margin-bottom:10px}.skip{position:fixed;left:14px;top:-100px;z-index:1000;background:var(--navy);color:#fff;padding:10px 16px;border-radius:4px}.skip:focus{top:14px}.wrap{width:min(var(--max),calc(100% - 40px));margin:auto}.site-header{height:82px;border-bottom:1px solid #e6e9ed;background:#fff}.header-inner{width:min(var(--max),calc(100% - 40px));height:100%;display:flex;align-items:center;gap:36px;margin:auto}.brand{display:flex;align-items:center;flex:0 1 320px}.brand img{width:min(300px,100%);height:auto}.site-nav{margin-left:auto;display:flex;align-items:center;gap:24px;font-size:.9rem;font-weight:700}.site-nav a{text-decoration:none;white-space:nowrap}.site-nav a:not(.nav-cta){padding:28px 0;border-bottom:2px solid transparent}.site-nav a:hover:not(.nav-cta),.site-nav a:focus-visible:not(.nav-cta),.site-nav a[aria-current="page"]{border-color:var(--gold);color:var(--navy)}.nav-cta,.btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:12px 21px;border:2px solid var(--gold);border-radius:5px;background:var(--gold);color:var(--navy);font-weight:850;text-decoration:none;line-height:1.2;transition:transform .18s ease,background .18s ease,border-color .18s ease}.nav-cta:hover,.btn:hover{transform:translateY(-2px);background:#e1bd44;border-color:#e1bd44}.btn.secondary{background:transparent;border-color:var(--navy);color:var(--navy)}.btn.secondary:hover{background:var(--navy);color:#fff}.menu-toggle{display:none;margin-left:auto;border:0;background:transparent;color:var(--navy);font-size:1.75rem;line-height:1;cursor:pointer}.hero{background:var(--cream)}.hero img{width:100%;height:clamp(360px,53vw,690px);object-fit:cover;object-position:center 42%}.intro{padding:76px 0 68px}.intro-grid{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(280px,.7fr);gap:74px;align-items:center}.eyebrow{display:block;color:#896c13;font-size:.78rem;font-weight:900;letter-spacing:.16em;text-transform:uppercase;margin-bottom:14px}.lead{font-size:clamp(1.08rem,1.7vw,1.28rem);color:#344155;max-width:720px;margin-bottom:26px}.actions{display:flex;gap:14px;align-items:center;flex-wrap:wrap}.micro{font-size:.82rem;color:var(--muted);margin:12px 0 0}.fit-card{border-left:4px solid var(--gold);background:var(--cream);padding:28px 30px}.fit-card strong{display:block;color:var(--navy);font-family:Georgia,"Times New Roman",serif;font-size:1.25rem;margin-bottom:12px}.fit-card ul{margin:0;padding:0;list-style:none;display:grid;gap:10px}.fit-card li{position:relative;padding-left:24px}.fit-card li:before{content:"✓";position:absolute;left:0;color:#8c6b07;font-weight:900}.section{padding:78px 0}.section.soft{background:var(--cream)}.section-head{text-align:center;max-width:760px;margin:0 auto 38px}.section-head p{color:var(--muted);font-size:1.05rem;margin:0}.work-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}.work-card{border:1px solid var(--line);background:#fff;overflow:hidden;box-shadow:var(--shadow);transition:transform .2s ease,border-color .2s ease}.work-card:hover{transform:translateY(-5px);border-color:#c5a94f}.work-card img{width:100%;aspect-ratio:1.44/1;object-fit:cover}.work-copy{padding:24px}.work-copy p{color:var(--muted);margin:0}.partner-grid{display:grid;grid-template-columns:minmax(320px,.85fr) minmax(0,1.15fr);gap:66px;align-items:center}.partner-grid>img{width:100%;aspect-ratio:1/1;object-fit:cover;object-position:center;box-shadow:var(--shadow)}.benefits{display:grid;gap:24px;margin-top:30px}.benefit{display:grid;grid-template-columns:48px 1fr;gap:16px;align-items:start}.benefit-icon{width:48px;height:48px;border:1px solid #d9c678;background:#fff;display:grid;place-items:center;color:#80630c;font-weight:900;font-family:Georgia,serif;font-size:1.15rem}.benefit h3{font-size:1.22rem;margin-bottom:5px}.benefit p{color:var(--muted);margin:0}.framework{padding:72px 0;background:var(--cream);border-top:1px solid #eeeae1;border-bottom:1px solid #eeeae1}.framework h2,.framework h3{color:var(--navy)}.framework .section-head p{color:var(--muted)}.values{display:grid;grid-template-columns:repeat(5,1fr);gap:14px}.value{border:1px solid #e1d7b2;border-top:3px solid var(--gold);background:#fff;padding:22px 18px;min-height:142px;box-shadow:0 8px 22px rgba(11,31,58,.05)}.value .number{display:block;color:#896c13;font-weight:900;margin-bottom:7px}.value h3{font-size:1.15rem;margin-bottom:6px}.value p{font-size:.88rem;color:var(--muted);margin:0}.faq-layout{display:grid;grid-template-columns:.7fr 1.3fr;gap:62px;align-items:start}.faq-side{position:sticky;top:28px}.faq-side p{color:var(--muted);margin-bottom:22px}.faq-list{display:grid;gap:12px}details{border:1px solid var(--line);background:#fff}summary{cursor:pointer;list-style:none;position:relative;padding:19px 52px 19px 20px;color:var(--navy);font-weight:850}summary::-webkit-details-marker{display:none}summary:after{content:"+";position:absolute;right:20px;top:14px;color:#8b6c0d;font-size:1.45rem}details[open] summary:after{content:"−"}details p{padding:0 20px 20px;color:var(--muted);margin:0}.disclosure{display:block;margin-top:18px;color:#697383;font-size:.76rem;line-height:1.55}.meet{padding:80px 0;background:var(--cream)}.meet-grid{display:grid;grid-template-columns:minmax(300px,.82fr) minmax(0,1.18fr);gap:70px;align-items:center}.portrait{background:#e9e5dc;overflow:hidden}.portrait img{width:100%;aspect-ratio:1/1;object-fit:cover;object-position:center top}.identity{display:flex;flex-wrap:wrap;gap:8px;margin:22px 0}.identity span{border:1px solid #d8c475;background:#fff;padding:7px 11px;color:var(--navy);font-size:.76rem;font-weight:800}.quote{border-left:3px solid var(--gold);padding-left:18px;color:var(--navy);font-family:Georgia,serif;font-size:1.22rem;font-style:italic;margin:26px 0}.global-footer{display:grid;grid-template-columns:1.7fr .7fr .7fr;gap:48px;padding:52px max(24px,calc((100% - var(--max))/2));background:var(--navy);color:#fff}.global-footer a{display:block;color:#e7eaf0;text-decoration:none;margin-top:9px}.global-footer a:hover{text-decoration:underline;color:#fff}.global-footer b{color:var(--gold)}.footer-brand img{width:min(360px,100%);height:auto;margin-bottom:18px}.footer-brand p{margin:5px 0;color:#d8dee7}.footer-social a{display:flex;align-items:center;gap:9px}.footer-social svg{width:18px;height:18px}.footer-social img{width:18px;height:18px;object-fit:contain}.global-footer small{grid-column:1/-1;padding-top:24px;border-top:1px solid #38506d;color:#bfc7d1}
    :focus-visible{outline:3px solid var(--gold);outline-offset:3px}@media(max-width:1040px){.site-nav{position:absolute;display:none;left:0;right:0;top:82px;z-index:50;background:#fff;border-bottom:1px solid var(--line);padding:20px}.site-nav.open{display:grid;gap:4px}.site-nav a:not(.nav-cta){padding:12px 8px}.nav-cta{margin-top:8px}.menu-toggle{display:block}.values{grid-template-columns:repeat(3,1fr)}.global-footer{grid-template-columns:1.4fr .7fr .7fr}}
    @media(max-width:760px){.wrap,.header-inner{width:min(100% - 28px,var(--max))}.site-header{height:72px}.site-nav{top:72px}.brand{max-width:245px}.hero img{height:310px;object-position:60% center}.intro,.section,.meet{padding:56px 0}.intro-grid,.partner-grid,.faq-layout,.meet-grid{grid-template-columns:1fr;gap:34px}.fit-card{padding:24px}.work-grid{grid-template-columns:1fr}.work-card{display:grid;grid-template-columns:42% 58%}.work-card img{height:100%;aspect-ratio:auto}.work-copy{padding:20px}.partner-grid>img{aspect-ratio:4/3}.values{grid-template-columns:1fr 1fr}.value{min-height:130px}.faq-side{position:static}.global-footer{grid-template-columns:1fr 1fr;padding:44px 24px}.footer-brand{grid-column:1/-1}}
    @media(max-width:480px){h1{font-size:2.28rem}.hero img{height:245px}.actions{align-items:stretch}.actions .btn{width:100%}.work-card{display:block}.work-card img{aspect-ratio:1.55/1}.values{grid-template-columns:1fr}.value{min-height:auto}.global-footer{grid-template-columns:1fr}.global-footer>div{grid-column:1}.global-footer small{grid-column:1}.footer-brand img{max-width:310px}}
    @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.btn,.work-card{transition:none}}
  </style>
  <script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","name":"Financial Professional Opportunity","url":"https://wattsunified.com/opportunity/financial-professional","description":"Explore a flexible, mentorship-led financial professional opportunity with Watts Unified Solutions."},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do I need to be licensed already?","acceptedAnswer":{"@type":"Answer","text":"No prior license or financial services experience is required to explore the opportunity. Guidance is provided through the required state licensing steps, and licensing must be completed before conducting regulated business."}},{"@type":"Question","name":"Can I begin part-time and work remotely?","acceptedAnswer":{"@type":"Answer","text":"The independent opportunity is designed to offer remote flexibility. Your schedule, availability, and state licensing requirements will shape how you begin."}},{"@type":"Question","name":"How does compensation work?","acceptedAnswer":{"@type":"Answer","text":"This is an independent 1099 contractor opportunity with commission-based compensation. Earnings vary and depend on individual effort, activity, licensing, and results; no income is guaranteed."}},{"@type":"Question","name":"What does onboarding and mentorship include?","acceptedAnswer":{"@type":"Answer","text":"You will receive step-by-step onboarding, weekly training, and direct mentorship from S. Alex Watts and the leadership team as you develop your practice."}}]}]}</script>
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="/" aria-label="Watts Unified Solutions home"><img src="https://wattsunified.com/solutions-app/watts-brand-lockup.png" alt="Watts Unified Solutions" width="545" height="113"></a>
      <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="site-nav">☰</button>
      <nav class="site-nav" id="site-nav" aria-label="Primary navigation">
        <a href="/">Home</a><a href="/solutions/">Solutions</a><a href="/solutions/programs/veterans">Veteran Summit</a><a href="/opportunity" aria-current="page">Opportunity</a><a href="/resources">Resources</a><a href="/about">About</a><a class="nav-cta" href="/schedule/solutions">Let's Connect</a>
      </nav>
    </div>
  </header>
  <main id="main">
    <section class="hero" aria-label="Financial professional meeting with a family"><img src="/assets/financial-professional/hero.webp" alt="Black financial professional helping a Black family plan their future" width="1408" height="768" fetchpriority="high" decoding="async"></section>
    <section class="intro">
      <div class="wrap intro-grid">
        <div><span class="eyebrow">Financial Services Partner Path</span><h1>Build a Financial Business On Your Terms.</h1><p class="lead">Serve families through financial education and protection strategies while building a flexible, independent business. Watts Unified provides the training, mentorship, and veteran-led infrastructure to help you begin with clarity.</p><div class="actions"><a class="btn" href="/schedule/opportunity" data-analytics-event="primary_cta_click" data-analytics-label="Financial professional intro">Book a Fit Conversation</a><a class="btn secondary" href="#work">See the Work</a></div><p class="micro">Private conversation. No pressure. Clear expectations.</p></div>
        <aside class="fit-card" aria-label="Opportunity overview"><strong>A guided path from interest to readiness.</strong><ul><li>No prior license required to explore</li><li>Remote flexibility with structured support</li><li>Training, mentorship, and practical systems</li></ul><small class="disclosure">Independent 1099 contractor opportunity. Licensing is required before conducting regulated business. Earnings are commission-based, vary by individual, and are not guaranteed.</small></aside>
      </div>
    </section>
    <section class="section soft" id="work">
      <div class="wrap"><div class="section-head"><span class="eyebrow">The Work</span><h2>What You Will Actually Do.</h2><p>Help people understand important financial decisions and guide them toward solutions that fit their goals.</p></div><div class="work-grid">
        <article class="work-card"><img src="/assets/financial-professional/retirement.webp" alt="Black couple reviewing a retirement plan with a financial professional" width="720" height="500" loading="lazy" decoding="async"><div class="work-copy"><h3>Retirement Planning</h3><p>Help clients understand protected growth, income, and retirement options.</p></div></article>
        <article class="work-card"><img src="/assets/financial-professional/education.webp" alt="Black financial professional sharing financial education" width="720" height="500" loading="lazy" decoding="async"><div class="work-copy"><h3>Financial Education</h3><p>Make complex protection and wealth concepts easier for families to act on.</p></div></article>
        <article class="work-card"><img src="/assets/financial-professional/legacy.webp" alt="Black family discussing a generational legacy plan" width="720" height="500" loading="lazy" decoding="async"><div class="work-copy"><h3>Generational Legacy</h3><p>Guide conversations about family protection, estate resources, and long-term value.</p></div></article>
      </div></div>
    </section>
    <section class="section">
      <div class="wrap partner-grid"><img src="/assets/financial-professional/mentor.webp" alt="Black mentor guiding a new financial professional" width="800" height="800" loading="lazy" decoding="async"><div><span class="eyebrow">Why Watts Unified</span><h2>Build independently. Never build alone.</h2><p class="lead">You bring the commitment to serve. We provide a structured environment designed to help you learn the work and develop your practice.</p><div class="benefits">
        <div class="benefit"><span class="benefit-icon" aria-hidden="true">01</span><div><h3>Direct Mentorship</h3><p>Learn with access to S. Alex Watts and a leadership team invested in your development.</p></div></div>
        <div class="benefit"><span class="benefit-icon" aria-hidden="true">02</span><div><h3>Training + Systems</h3><p>Use step-by-step onboarding, weekly training, and practical tools instead of starting from scratch.</p></div></div>
        <div class="benefit"><span class="benefit-icon" aria-hidden="true">03</span><div><h3>Mission-Led Community</h3><p>Grow within a culture grounded in service, faith, family, discipline, and responsible leadership.</p></div></div>
      </div></div></div>
    </section>
    <section class="framework">
      <div class="wrap"><div class="section-head"><span class="eyebrow">The Freedom Framework</span><h2>Build a business that supports a whole life.</h2><p>Five values keep growth connected to purpose.</p></div><div class="values">
        <article class="value"><span class="number">01</span><h3>Faith</h3><p>Lead with conviction, stewardship, and service.</p></article><article class="value"><span class="number">02</span><h3>Family</h3><p>Build with the people and priorities that matter.</p></article><article class="value"><span class="number">03</span><h3>Freedom</h3><p>Create greater ownership of your time and direction.</p></article><article class="value"><span class="number">04</span><h3>Fitness</h3><p>Develop the discipline and energy to lead well.</p></article><article class="value"><span class="number">05</span><h3>Fun</h3><p>Make space to enjoy the life you are building.</p></article>
      </div></div>
    </section>
    <section class="section">
      <div class="wrap faq-layout"><div class="faq-side"><span class="eyebrow">Common Questions</span><h2>Know what you are exploring.</h2><p>Get a clear view of licensing, flexibility, compensation, and support before deciding whether this path fits.</p><a class="btn" href="/schedule/opportunity" data-analytics-event="primary_cta_click" data-analytics-label="Financial professional FAQ">Talk With S. Alex</a></div><div class="faq-list">
        <details><summary>Do I need to be licensed already?</summary><p>No prior license or financial services experience is required to explore the opportunity. Guidance is provided through the required state licensing steps, and licensing must be completed before conducting regulated business.</p></details>
        <details><summary>Can I begin part-time and work remotely?</summary><p>The independent opportunity is designed to offer remote flexibility. Your schedule, availability, and state licensing requirements will shape how you begin.</p></details>
        <details><summary>How does compensation work?</summary><p>This is an independent 1099 contractor opportunity with commission-based compensation. Earnings vary and depend on individual effort, activity, licensing, and results; no income is guaranteed.</p></details>
        <details><summary>What does onboarding and mentorship include?</summary><p>You’ll receive step-by-step onboarding, weekly training, and direct mentorship from S. Alex Watts and the leadership team as you develop your practice.</p></details>
      </div></div>
    </section>
    <section class="meet">
      <div class="wrap meet-grid"><div class="portrait"><img src="/assets/financial-professional/alex.webp" alt="S. Alex Watts, founder of Watts Unified Solutions" width="800" height="800" loading="lazy" decoding="async"></div><div><span class="eyebrow">Meet Your Mentor</span><h2>Build with S. Alex Watts.</h2><p class="lead">S. Alex Watts is a U.S. Army veteran, faith-led father, and retirement and legacy specialist. He built Watts Unified Solutions to help families make clearer decisions—and to help purpose-driven professionals learn how to serve them well.</p><div class="identity"><span>U.S. Army Veteran</span><span>Man of Faith</span><span>Father + Mentor</span><span>Financial Educator</span></div><blockquote class="quote">“This is about building with purpose, serving families responsibly, and creating a business you can be proud to lead.”</blockquote><div class="actions"><a class="btn" href="/schedule/opportunity" data-analytics-event="primary_cta_click" data-analytics-label="Financial professional mentor">Book a Fit Conversation</a><a class="btn secondary" href="/opportunity">Explore Other Paths</a></div><small class="disclosure">A conversation does not create an employment relationship or guarantee acceptance, licensing, compensation, or results.</small></div></div>
    </section>
  </main>
  <footer class="global-footer">
    <div class="footer-brand"><img alt="Watts Unified Solutions" src="https://wattsunified.com/solutions-app/watts-brand-lockup.png" width="545" height="113"><p>U.S. Army Veteran | Man of Faith | Retirement &amp; Legacy Specialist</p><p>Securing your lifetime income and protecting your family's future.</p></div>
    <div><b>Explore</b><a href="https://wattsunified.com/solutions/">Solutions</a><a href="https://wattsunified.com/system">Unified System</a><a href="https://wattsunified.com/solutions/programs/veterans">Veteran Summit</a><a href="https://wattsunified.com/opportunity">Opportunity</a><a href="https://wattsunified.com/resources">Resources</a><a href="https://wattsunified.com/about">About</a></div>
    <div class="footer-social"><b>Connect</b><a href="https://www.linkedin.com/in/s-alex-watts" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M416 32H32C14 32 0 46 0 64v384c0 18 14 32 32 32h384c18 0 32-14 32-32V64c0-18-14-32-32-32zM135 416H69V202h66v214zm-33-243c-21 0-38-17-38-38s17-39 38-39 39 18 39 39-18 38-39 38zm282 243h-66V312c0-25 0-57-35-57s-40 27-40 55v106h-66V202h64v29h1c9-17 31-35 63-35 67 0 79 44 79 102v118z"/></svg><span>LinkedIn</span></a><a href="https://www.instagram.com/watts_unifiedsolutions" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M224 141c-64 0-115 51-115 115s51 115 115 115 115-51 115-115-51-115-115-115zm0 190c-41 0-75-34-75-75s34-75 75-75 75 34 75 75-34 75-75 75zm146-195c0 15-12 27-27 27s-27-12-27-27 12-27 27-27 27 12 27 27zm76 27c-2-36-10-68-36-94s-58-34-94-36c-37-2-148-2-185 0-36 2-68 10-94 36S3 127 1 163c-2 37-2 148 0 185 2 36 10 68 36 94s58 34 94 36c37 2 148 2 185 0 36-2 68-10 94-36s34-58 36-94c2-37 2-148 0-185z"/></svg><span>Instagram</span></a><a href="https://www.alignable.com/fort-drum-ny/watts-unified-solutions" target="_blank" rel="noopener noreferrer"><img alt="" aria-hidden="true" src="https://wattsunified.com/alignable-icon.png" width="18" height="18"><span>Alignable</span></a></div>
    <small>© 2026 Watts Unified Solutions. All rights reserved.</small>
  </footer>
  <script>
    const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.site-nav');menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
    document.querySelectorAll('[data-analytics-event]').forEach(link=>link.addEventListener('click',()=>{const payload=JSON.stringify({event:link.dataset.analyticsEvent,page:location.pathname,label:link.dataset.analyticsLabel||link.textContent.trim(),destination:link.href});if(navigator.sendBeacon)navigator.sendBeacon('/conversion-event',new Blob([payload],{type:'application/json'}));else fetch('/conversion-event',{method:'POST',headers:{'content-type':'application/json'},body:payload,keepalive:true}).catch(()=>{})}));
  </script>
</body>
</html>`;

function asBody(value) {
  if (value instanceof ArrayBuffer || ArrayBuffer.isView(value) || value instanceof Blob) return value;
  if (typeof value === "string") return Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
  return null;
}

export default {
  async fetch(request, env = {}) {
    const url = new URL(request.url);
    const asset = ASSETS[url.pathname];
    if (asset) {
      const [binding, contentType] = asset;
      let body = asBody(env[binding]);
      if (!body && env.FINANCIAL_ASSETS?.get) body = await env.FINANCIAL_ASSETS.get(binding, "arrayBuffer");
      if (!body) return new Response("Asset unavailable", { status: 404 });
      return new Response(request.method === "HEAD" ? null : body, {
        headers: {
          "content-type": contentType,
          "cache-control": "public,max-age=31536000,immutable",
          "access-control-allow-origin": "*",
          "x-content-type-options": "nosniff",
        },
      });
    }

    if (!PAGE_PATHS.has(url.pathname)) return Response.redirect("https://wattsunified.com/opportunity/financial-professional", 302);
    return new Response(request.method === "HEAD" ? null : html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "cache-control": "public,max-age=300,stale-while-revalidate=86400",
        "cloudflare-cdn-cache-control": "public,max-age=300,stale-while-revalidate=86400",
        "x-content-type-options": "nosniff",
        "x-frame-options": "SAMEORIGIN",
        "referrer-policy": "strict-origin-when-cross-origin",
        "x-robots-tag": "index,follow,max-image-preview:large",
      },
    });
  },
};
