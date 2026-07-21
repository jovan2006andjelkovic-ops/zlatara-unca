/* ==========================================================================
   ZLATARA UNCA — Design System
   Signature: the "punca" (hallmark/purity stamp) motif — circular impressed
   marks used the way goldsmiths mark 585/375/916 purity on real gold.
   ========================================================================== */

:root {
  --ink: #15120d;         /* near-black warm charcoal background */
  --ink-2: #1f1a13;       /* raised panel / card background */
  --ink-3: #2a231a;       /* border / hairline on dark */
  --gold: #c9a24b;        /* primary gold accent */
  --gold-bright: #e8c874; /* hover / highlight gold */
  --parchment: #f3ede0;   /* warm ivory text on dark */
  --parchment-dim: #cfc4ac; /* secondary text */
  --stamp: #7a2e2e;       /* hallmark-ink red, used sparingly */

  --display: "Fraunces", "Iowan Old Style", Georgia, serif;
  --body: "Public Sans", -apple-system, "Segoe UI", sans-serif;
  --mono: "Space Mono", "SF Mono", monospace;

  --container: 1180px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  margin: 0;
  background: var(--ink);
  color: var(--parchment);
  font-family: var(--body);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }

.wrap {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 48px);
}

h1, h2, h3 { font-family: var(--display); font-weight: 600; margin: 0; }

.eyebrow {
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.eyebrow::before {
  content: "";
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--gold);
  display: inline-block;
}

.skip-link {
  position: absolute; left: -9999px; top: 0;
  background: var(--gold); color: var(--ink); padding: 10px 16px; z-index: 200;
}
.skip-link:focus { left: 16px; top: 16px; }

a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible {
  outline: 2px solid var(--gold-bright);
  outline-offset: 3px;
}

/* --------------------------------------------------------------------
   Punca / hallmark stamp — the signature element
   -------------------------------------------------------------------- */

.punca {
  --size: 64px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: grid;
  place-items: center;
  border: 1.5px solid var(--gold);
  box-shadow:
    inset 0 0 0 3px var(--ink),
    inset 0 0 0 4px rgba(201, 162, 75, 0.35);
  font-family: var(--mono);
  color: var(--gold);
  font-size: calc(var(--size) * 0.2);
  letter-spacing: 0.02em;
  transform: rotate(-6deg);
  transition: transform 0.4s cubic-bezier(.2,.9,.3,1);
  flex-shrink: 0;
  background: radial-gradient(circle at 35% 30%, rgba(232,200,116,0.12), transparent 60%);
}

.punca span { display: block; text-align: center; line-height: 1.1; }
.punca .k { font-size: 0.55em; opacity: 0.75; }

/* --------------------------------------------------------------------
   Header
   -------------------------------------------------------------------- */

.site-header {
  position: sticky; top: 0; z-index: 100;
  background: rgba(21, 18, 13, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--ink-3);
}

.site-header .bar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px clamp(20px, 4vw, 48px);
  gap: 24px;
}

.brand {
  display: flex; align-items: center; gap: 12px;
  font-family: var(--display);
  font-size: 1.3rem;
  letter-spacing: 0.02em;
}
.brand .punca { --size: 38px; font-size: 11px; transform: rotate(-6deg); }
.brand small {
  display: block; font-family: var(--mono); font-size: 0.6rem;
  letter-spacing: 0.16em; color: var(--parchment-dim); text-transform: uppercase;
  font-weight: 400;
}

nav.primary {
  display: flex; gap: clamp(14px, 2vw, 28px);
  font-size: 0.92rem;
}
nav.primary a {
  position: relative; padding: 6px 2px; color: var(--parchment-dim);
  transition: color 0.2s;
}
nav.primary a:hover, nav.primary a[aria-current="page"] { color: var(--gold-bright); }
nav.primary a[aria-current="page"]::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: -2px;
  height: 1px; background: var(--gold);
}

.header-actions { display: flex; align-items: center; gap: 18px; }

.cart-pill {
  display: flex; align-items: center; gap: 8px;
  border: 1px solid var(--ink-3);
  padding: 8px 14px; border-radius: 999px;
  font-family: var(--mono); font-size: 0.78rem;
  transition: border-color 0.2s;
}
.cart-pill:hover { border-color: var(--gold); }
.cart-pill .count {
  background: var(--gold); color: var(--ink);
  border-radius: 50%; width: 20px; height: 20px;
  display: grid; place-items: center; font-size: 0.68rem; font-weight: 700;
}

.nav-toggle { display: none; background: none; border: none; color: var(--parchment); font-size: 1.4rem; cursor: pointer; }

@media (max-width: 860px) {
  nav.primary { display: none; }
  .nav-toggle { display: block; }
}

/* --------------------------------------------------------------------
   Buttons
   -------------------------------------------------------------------- */

.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  padding: 13px 28px;
  font-family: var(--mono); font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase;
  border-radius: 2px; border: 1px solid var(--gold);
  cursor: pointer; transition: all 0.25s ease;
  background: transparent; color: var(--gold-bright);
}
.btn:hover { background: var(--gold); color: var(--ink); }
.btn.primary { background: var(--gold); color: var(--ink); }
.btn.primary:hover { background: var(--gold-bright); border-color: var(--gold-bright); }
.btn.block { width: 100%; }
.btn[disabled] { opacity: 0.4; cursor: not-allowed; }
.btn[disabled]:hover { background: transparent; color: var(--gold-bright); }

/* --------------------------------------------------------------------
   Hero
   -------------------------------------------------------------------- */

.hero {
  position: relative;
  padding: clamp(64px, 10vw, 120px) 0 clamp(56px, 8vw, 96px);
  overflow: hidden;
  border-bottom: 1px solid var(--ink-3);
}

.hero::before {
  content: "";
  position: absolute; inset: -20% -10% auto -10%;
  height: 600px;
  background: radial-gradient(circle, rgba(201,162,75,0.16), transparent 65%);
  pointer-events: none;
}

.hero-grid {
  position: relative;
  display: grid; grid-template-columns: 1.1fr 0.9fr; gap: clamp(32px, 6vw, 80px);
  align-items: center;
}

.hero h1 {
  font-size: clamp(2.6rem, 5.4vw, 4.4rem);
  line-height: 1.02;
  margin: 18px 0 22px;
  font-weight: 600;
}
.hero h1 em { color: var(--gold-bright); font-style: italic; }

.hero p.lede {
  font-size: 1.08rem; color: var(--parchment-dim); max-width: 46ch; margin-bottom: 32px;
}

.hero-ctas { display: flex; gap: 16px; flex-wrap: wrap; }

.hero-stamp-field {
  position: relative;
  aspect-ratio: 1;
  display: grid; place-items: center;
}

.hero-stamp-field .punca {
  --size: min(360px, 60vw);
  font-size: calc(min(360px, 60vw) * 0.075);
  animation: press 7s ease-in-out infinite;
}

.hero-stamp-field .punca .stamp-word {
  font-family: var(--display); font-style: italic; font-size: 0.42em;
  letter-spacing: 0.03em; color: var(--parchment);
}

@keyframes press {
  0%, 100% { transform: rotate(-6deg) scale(1); }
  50% { transform: rotate(-4deg) scale(0.97); }
}

@media (prefers-reduced-motion: reduce) {
  .hero-stamp-field .punca { animation: none; }
  .punca { transition: none; }
}

@media (max-width: 860px) {
  .hero-grid { grid-template-columns: 1fr; }
  .hero-stamp-field { display: none; }
}

/* --------------------------------------------------------------------
   Trust bar
   -------------------------------------------------------------------- */

.trust-bar {
  border-bottom: 1px solid var(--ink-3);
  background: var(--ink-2);
}
.trust-bar .wrap {
  display: flex; flex-wrap: wrap; gap: 28px; justify-content: space-between;
  padding-top: 20px; padding-bottom: 20px;
  font-family: var(--mono); font-size: 0.74rem; letter-spacing: 0.04em; color: var(--parchment-dim);
}
.trust-bar .wrap span { display: flex; align-items: center; gap: 8px; }
.trust-bar .wrap span::before { content: "◆"; color: var(--gold); font-size: 0.6em; }

/* --------------------------------------------------------------------
   Sections
   -------------------------------------------------------------------- */

section.block { padding: clamp(56px, 8vw, 96px) 0; }
section.block.alt { background: var(--ink-2); border-top: 1px solid var(--ink-3); border-bottom: 1px solid var(--ink-3); }

.block-head {
  display: flex; justify-content: space-between; align-items: flex-end; gap: 24px;
  margin-bottom: 40px; flex-wrap: wrap;
}
.block-head h2 { font-size: clamp(1.7rem, 3vw, 2.4rem); margin-top: 10px; }
.block-head .see-all { font-family: var(--mono); font-size: 0.78rem; letter-spacing: 0.06em; color: var(--gold-bright); border-bottom: 1px solid var(--gold); padding-bottom: 2px; white-space: nowrap; }

/* Category tiles */
.category-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px;
  background: var(--ink-3);
  border: 1px solid var(--ink-3);
}
.category-tile {
  background: var(--ink);
  padding: 36px 24px; min-height: 200px;
  display: flex; flex-direction: column; justify-content: space-between;
  transition: background 0.25s;
}
.category-tile:hover { background: var(--ink-2); }
.category-tile .punca { --size: 46px; font-size: 10px; margin-bottom: 20px; }
.category-tile h3 { font-size: 1.15rem; margin-bottom: 6px; }
.category-tile p { margin: 0; color: var(--parchment-dim); font-size: 0.86rem; }

@media (max-width: 960px) { .category-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .category-grid { grid-template-columns: 1fr; } }

/* Product grid + cards */
.product-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px;
}
@media (max-width: 1080px) { .product-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 780px) { .product-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .product-grid { grid-template-columns: 1fr; } }

.product-card {
  background: var(--ink-2);
  border: 1px solid var(--ink-3);
  display: flex; flex-direction: column;
  transition: border-color 0.25s, transform 0.25s;
}
.product-card:hover { border-color: var(--gold); transform: translateY(-3px); }

.product-media {
  aspect-ratio: 1;
  display: grid; place-items: center;
  position: relative;
  border-bottom: 1px solid var(--ink-3);
  background: linear-gradient(155deg, #201b14, #17130e);
  overflow: hidden;
}
.product-media svg { width: 52%; height: 52%; transition: transform 0.4s ease; }
.product-card:hover .product-media svg { transform: scale(1.08) rotate(-3deg); }

.product-tag {
  position: absolute; top: 12px; left: 12px;
  font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.08em; text-transform: uppercase;
  padding: 4px 9px; border-radius: 999px; border: 1px solid var(--gold);
  color: var(--gold-bright); background: rgba(21,18,13,0.75);
}

.product-body { padding: 18px 20px 20px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.product-cat { font-family: var(--mono); font-size: 0.66rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--parchment-dim); }
.product-name { font-family: var(--display); font-size: 1.05rem; line-height: 1.3; flex: 1; }
.product-foot { display: flex; align-items: center; justify-content: space-between; margin-top: 6px; }
.product-price { font-family: var(--mono); color: var(--gold-bright); font-size: 0.95rem; }
.product-add {
  border: 1px solid var(--gold); background: none; color: var(--gold-bright);
  width: 36px; height: 36px; border-radius: 50%; cursor: pointer; font-size: 1.05rem;
  transition: all 0.2s;
  display: grid; place-items: center;
}
.product-add:hover { background: var(--gold); color: var(--ink); }

/* Filters */
.filter-row { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 36px; }
.filter-chip {
  font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.05em; text-transform: uppercase;
  padding: 9px 16px; border: 1px solid var(--ink-3); border-radius: 999px;
  color: var(--parchment-dim); cursor: pointer; background: none; transition: all 0.2s;
}
.filter-chip:hover { border-color: var(--gold); color: var(--parchment); }
.filter-chip.active { border-color: var(--gold); color: var(--ink); background: var(--gold); }

/* --------------------------------------------------------------------
   Brand strip
   -------------------------------------------------------------------- */

.brand-strip { display: flex; flex-wrap: wrap; gap: 0; border: 1px solid var(--ink-3); border-bottom: none; }
.brand-strip a {
  flex: 1 1 160px;
  padding: 22px 18px;
  border-bottom: 1px solid var(--ink-3); border-right: 1px solid var(--ink-3);
  font-family: var(--mono); font-size: 0.78rem; letter-spacing: 0.05em; text-transform: uppercase;
  color: var(--parchment-dim);
  text-align: center;
  transition: color 0.2s, background 0.2s;
}
.brand-strip a:hover { color: var(--gold-bright); background: var(--ink-2); }

/* --------------------------------------------------------------------
   Newsletter / CTA band
   -------------------------------------------------------------------- */

.cta-band { padding: clamp(48px, 7vw, 80px) 0; border-top: 1px solid var(--ink-3); text-align: center; }
.cta-band h2 { font-size: clamp(1.6rem, 3vw, 2.2rem); max-width: 24ch; margin: 14px auto 30px; }
.cta-band form { display: flex; gap: 10px; max-width: 420px; margin: 0 auto; }
.cta-band input[type="email"] {
  flex: 1; background: var(--ink-2); border: 1px solid var(--ink-3); color: var(--parchment);
  padding: 13px 16px; font-family: var(--body); border-radius: 2px;
}
.cta-band input[type="email"]::placeholder { color: var(--parchment-dim); }

/* --------------------------------------------------------------------
   Footer
   -------------------------------------------------------------------- */

footer.site-footer { border-top: 1px solid var(--ink-3); padding: 56px 0 28px; background: var(--ink-2); }
.footer-grid {
  display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 32px;
  padding-bottom: 40px; border-bottom: 1px solid var(--ink-3); margin-bottom: 24px;
}
.footer-grid h4 {
  font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--gold); margin-bottom: 16px; font-weight: 400;
}
.footer-grid ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
.footer-grid a { color: var(--parchment-dim); font-size: 0.9rem; }
.footer-grid a:hover { color: var(--gold-bright); }
.footer-brand p { color: var(--parchment-dim); font-size: 0.9rem; max-width: 32ch; margin-top: 14px; }
.footer-bottom {
  display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px;
  font-family: var(--mono); font-size: 0.72rem; color: var(--parchment-dim); letter-spacing: 0.03em;
}
@media (max-width: 780px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr; } }

/* --------------------------------------------------------------------
   Mobile nav drawer
   -------------------------------------------------------------------- */

.mobile-drawer {
  position: fixed; inset: 0; z-index: 200;
  background: var(--ink);
  display: none;
  flex-direction: column;
  padding: 24px clamp(20px, 4vw, 48px);
}
.mobile-drawer.open { display: flex; }
.mobile-drawer .drawer-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
.mobile-drawer nav { display: flex; flex-direction: column; gap: 22px; font-family: var(--display); font-size: 1.6rem; }
.mobile-drawer .close-btn { background: none; border: none; color: var(--parchment); font-size: 1.6rem; cursor: pointer; }

/* --------------------------------------------------------------------
   Page header (category / cart / static pages)
   -------------------------------------------------------------------- */

.page-header { padding: 44px 0 40px; border-bottom: 1px solid var(--ink-3); }
.page-header .breadcrumb { font-family: var(--mono); font-size: 0.72rem; color: var(--parchment-dim); letter-spacing: 0.04em; margin-bottom: 14px; }
.page-header .breadcrumb a:hover { color: var(--gold-bright); }
.page-header h1 { font-size: clamp(1.9rem, 4vw, 2.8rem); }

/* --------------------------------------------------------------------
   Product detail
   -------------------------------------------------------------------- */

.pdp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(32px, 5vw, 72px); padding: 48px 0 80px; }
.pdp-media {
  aspect-ratio: 1; border: 1px solid var(--ink-3);
  background: linear-gradient(155deg, #201b14, #17130e);
  display: grid; place-items: center; position: relative;
}
.pdp-media svg { width: 46%; height: 46%; }
.pdp-info .eyebrow { margin-bottom: 16px; }
.pdp-info h1 { font-size: clamp(1.8rem, 3vw, 2.4rem); margin-bottom: 14px; }
.pdp-price { font-family: var(--mono); color: var(--gold-bright); font-size: 1.4rem; margin-bottom: 22px; }
.pdp-desc { color: var(--parchment-dim); margin-bottom: 28px; max-width: 52ch; }

.pdp-meta {
  display: grid; grid-template-columns: 1fr 1fr; gap: 14px 24px;
  padding: 22px 0; margin-bottom: 28px;
  border-top: 1px solid var(--ink-3); border-bottom: 1px solid var(--ink-3);
}
.pdp-meta .label { font-family: var(--mono); font-size: 0.66rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--parchment-dim); margin-bottom: 4px; }
.pdp-meta .value { font-size: 0.95rem; }

.qty-row { display: flex; align-items: center; gap: 18px; margin-bottom: 22px; }
.qty-control { display: flex; align-items: center; border: 1px solid var(--ink-3); }
.qty-control button { background: none; border: none; color: var(--parchment); width: 38px; height: 42px; cursor: pointer; font-size: 1.1rem; }
.qty-control button:hover { color: var(--gold-bright); }
.qty-control input { width: 44px; text-align: center; background: none; border: none; color: var(--parchment); font-family: var(--mono); }

.pdp-added { margin-top: 16px; font-family: var(--mono); font-size: 0.8rem; color: var(--gold-bright); display: none; }
.pdp-added.show { display: block; }

@media (max-width: 860px) { .pdp-grid { grid-template-columns: 1fr; } }

/* --------------------------------------------------------------------
   Cart page
   -------------------------------------------------------------------- */

.cart-layout { display: grid; grid-template-columns: 1fr 340px; gap: 48px; padding: 48px 0 80px; align-items: start; }
.cart-lines { display: flex; flex-direction: column; }
.cart-line {
  display: grid; grid-template-columns: 84px 1fr auto auto; gap: 18px; align-items: center;
  padding: 22px 0; border-bottom: 1px solid var(--ink-3);
}
.cart-line .thumb {
  width: 84px; height: 84px; background: linear-gradient(155deg, #201b14, #17130e);
  border: 1px solid var(--ink-3); display: grid; place-items: center;
}
.cart-line .thumb svg { width: 55%; height: 55%; }
.cart-line .name { font-family: var(--display); font-size: 1rem; margin-bottom: 4px; }
.cart-line .cat { font-family: var(--mono); font-size: 0.66rem; color: var(--parchment-dim); text-transform: uppercase; }
.cart-line .price { font-family: var(--mono); color: var(--gold-bright); white-space: nowrap; }
.cart-line .remove { background: none; border: none; color: var(--parchment-dim); cursor: pointer; font-family: var(--mono); font-size: 0.7rem; text-decoration: underline; text-underline-offset: 3px; }
.cart-line .remove:hover { color: var(--stamp); }

.cart-summary { border: 1px solid var(--ink-3); background: var(--ink-2); padding: 28px; position: sticky; top: 96px; }
.cart-summary h3 { font-size: 1.1rem; margin-bottom: 20px; }
.summary-row { display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--parchment-dim); margin-bottom: 12px; }
.summary-row.total { color: var(--parchment); font-family: var(--mono); font-size: 1.05rem; border-top: 1px solid var(--ink-3); padding-top: 16px; margin-top: 16px; }
.summary-row.total .val { color: var(--gold-bright); }

.empty-cart { text-align: center; padding: 80px 0; }
.empty-cart .punca { --size: 72px; font-size: 15px; margin: 0 auto 24px; }
.empty-cart p { color: var(--parchment-dim); margin-bottom: 26px; }

@media (max-width: 860px) { .cart-layout { grid-template-columns: 1fr; } .cart-summary { position: static; } }

/* --------------------------------------------------------------------
   Static content pages (o nama / kontakt)
   -------------------------------------------------------------------- */

.prose { max-width: 68ch; padding: 48px 0 80px; }
.prose p { color: var(--parchment-dim); margin-bottom: 20px; }
.prose h2 { font-size: 1.5rem; margin: 40px 0 16px; }

.stat-row { display: flex; gap: 40px; flex-wrap: wrap; padding: 32px 0; border-top: 1px solid var(--ink-3); border-bottom: 1px solid var(--ink-3); margin: 32px 0; }
.stat-row .stat .num { font-family: var(--display); font-size: 2.2rem; color: var(--gold-bright); }
.stat-row .stat .lbl { font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--parchment-dim); margin-top: 4px; }

.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; padding: 48px 0 80px; }
.contact-form label { display: block; font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--parchment-dim); margin-bottom: 8px; }
.contact-form .field { margin-bottom: 20px; }
.contact-form input, .contact-form textarea {
  width: 100%; background: var(--ink-2); border: 1px solid var(--ink-3); color: var(--parchment);
  padding: 12px 14px; font-family: var(--body); border-radius: 2px; resize: vertical;
}
.contact-info h3 { font-size: 1.2rem; margin-bottom: 8px; }
.contact-info .punca { --size: 50px; font-size: 11px; margin-bottom: 18px; }
.contact-info .row { margin-bottom: 22px; }
.contact-info .row .label { font-family: var(--mono); font-size: 0.66rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--gold); margin-bottom: 4px; }
@media (max-width: 780px) { .contact-grid { grid-template-columns: 1fr; } }
