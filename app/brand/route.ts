import { NextResponse } from "next/server"

export async function GET() {
  const html = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>noticed — brand kit</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet">
<style>
[data-theme="dark"]{--bg:#0a0a0a;--bg-card:#111111;--border:#222222;--border-light:#1a1a1a;--text-primary:#f0ede8;--text-secondary:#a09a94;--text-dim:#6b6560;--accent:#c4b5a0;--tag-bg:#1a1917;--tag-border:#2a2825;--btn-bg:#f0ede8;--btn-text:#0a0a0a;--icon-bg:#f0ede8;--icon-letter:#1a1816;--toggle-bg:#1a1917;--toggle-border:#2a2825;--toggle-active:#f0ede8;--toggle-text:#a09a94;--toggle-text-active:#0a0a0a}
[data-theme="light"]{--bg:#f7f5f2;--bg-card:#efece8;--border:#d8d4ce;--border-light:#e2dfd9;--text-primary:#1a1816;--text-secondary:#6b6560;--text-dim:#9a958f;--accent:#8a7d6b;--tag-bg:#e8e4df;--tag-border:#d8d4ce;--btn-bg:#1a1816;--btn-text:#f7f5f2;--icon-bg:#0a0a0a;--icon-letter:#f0ede8;--toggle-bg:#e8e4df;--toggle-border:#d8d4ce;--toggle-active:#1a1816;--toggle-text:#9a958f;--toggle-text-active:#f7f5f2}
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--bg);color:var(--text-primary);font-family:'Instrument Sans',sans-serif;-webkit-font-smoothing:antialiased;transition:background .3s,color .3s}
.page{max-width:1200px;margin:0 auto;padding:60px 40px 120px}
.theme-toggle{position:fixed;top:24px;right:24px;display:flex;background:var(--toggle-bg);border:1px solid var(--toggle-border);border-radius:8px;overflow:hidden;z-index:100;transition:all .3s}
.theme-toggle button{font-family:'JetBrains Mono',monospace;font-size:11px;padding:8px 16px;border:none;background:transparent;color:var(--toggle-text);cursor:pointer;transition:all .2s;letter-spacing:.04em}
.theme-toggle button.active{background:var(--toggle-active);color:var(--toggle-text-active)}
.page-header{margin-bottom:64px;padding-bottom:40px;border-bottom:1px solid var(--border)}
.page-title{font-family:'Instrument Serif',serif;font-size:48px;font-weight:400;letter-spacing:-0.04em;color:var(--text-primary);margin-bottom:8px}
.page-subtitle{font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--text-dim);letter-spacing:.04em}
.section{margin-bottom:64px}
.section-label{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);margin-bottom:24px;padding-bottom:12px;border-bottom:1px solid var(--border-light)}
.card{border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-bottom:24px;transition:border-color .3s}
.card-header{padding:16px 24px;background:var(--bg-card);border-bottom:1px solid var(--border);font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--text-secondary);display:flex;justify-content:space-between;align-items:center;transition:background .3s;flex-wrap:wrap;gap:8px}
.card-body{padding:32px 24px}
.card-footer{padding:16px 24px;background:var(--bg-card);border-top:1px solid var(--border);font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text-dim);line-height:1.7;transition:background .3s}
.dim{color:var(--text-dim)}
.spec-grid{display:grid;grid-template-columns:140px 1fr;gap:0;margin-top:16px}
.spec-cell{padding:10px 0;font-family:'JetBrains Mono',monospace;font-size:12px;border-bottom:1px solid var(--border-light)}
.spec-cell.key{color:var(--text-dim)}.spec-cell.val{color:var(--text-secondary)}
.spec-cell a,.sys-cell a,.card-footer a{color:var(--accent);text-decoration:none}.spec-cell a:hover,.sys-cell a:hover,.card-footer a:hover{text-decoration:underline}
.wordmark-display{font-family:'Instrument Serif',serif;font-weight:400;letter-spacing:-0.04em;color:var(--text-primary);line-height:1}
.favicon-row{display:flex;gap:24px;align-items:end;flex-wrap:wrap;justify-content:center}
.favicon-item{display:flex;flex-direction:column;align-items:center;gap:8px}
.favicon-label{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text-dim)}
.system-table{display:grid;grid-template-columns:140px 1fr 1fr;gap:0}
.sys-cell{padding:12px 16px;font-size:13px;border-bottom:1px solid var(--border-light)}
.sys-cell.header{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--text-dim);padding-bottom:8px;border-bottom:1px solid var(--border)}
.sys-cell.role{font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--text-dim)}
.sys-cell.font{color:var(--text-secondary);font-weight:500}.sys-cell.where{color:var(--text-dim);font-size:12px}
.sys-cell a{font-weight:400;font-size:11px;margin-left:6px}
.spacing-table{display:grid;grid-template-columns:180px 100px 100px 1fr;gap:0}
.sp-cell{padding:10px 12px;font-family:'JetBrains Mono',monospace;font-size:11px;border-bottom:1px solid var(--border-light)}
.sp-cell.header{font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border)}
.sp-cell.elem{color:var(--text-secondary)}.sp-cell.val{color:var(--text-dim)}
.specimen{margin-bottom:32px}.specimen:last-child{margin-bottom:0}
.specimen-label{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--text-dim);margin-bottom:8px}
.headline-specimen{font-family:'Instrument Serif',serif;font-size:36px;line-height:1.15;letter-spacing:-0.025em;font-weight:400;color:var(--text-primary);max-width:700px}
.headline-specimen em{font-family:'Instrument Serif',serif;font-style:italic}
.subhead-specimen{font-size:18px;line-height:1.4;font-weight:400;color:var(--text-secondary);max-width:640px}
.body-specimen{font-size:16.5px;line-height:1.65;color:var(--text-secondary);max-width:620px}
.manifesto-specimen{text-align:center;max-width:640px;margin:0 auto}
.manifesto-block{font-family:'Newsreader',serif;font-size:20px;line-height:1.25;color:var(--text-primary);margin-bottom:1.5em}
.manifesto-block:last-child{margin-bottom:0}
.italic-examples{display:flex;flex-direction:column;gap:24px}
.italic-example{font-family:'Instrument Serif',serif;font-size:32px;line-height:1.2;letter-spacing:-0.02em;font-weight:400;color:var(--text-primary)}
.italic-example em{font-family:'Instrument Serif',serif;font-style:italic}
.ui-row{display:flex;gap:12px;flex-wrap:wrap;align-items:center}
.tag{font-family:'JetBrains Mono',monospace;font-size:12px;padding:6px 14px;border-radius:6px;background:var(--tag-bg);border:1px solid var(--tag-border);color:var(--text-secondary);transition:all .3s}
.btn-primary{font-family:'Instrument Sans',sans-serif;font-size:13px;padding:9px 22px;border-radius:6px;background:var(--btn-bg);color:var(--btn-text);border:none;font-weight:600;cursor:pointer;transition:all .3s}
.btn-secondary{font-family:'Instrument Sans',sans-serif;font-size:13px;padding:9px 22px;border-radius:6px;background:transparent;color:var(--text-secondary);border:1px solid var(--tag-border);font-weight:500;cursor:pointer;transition:all .3s}
.nav-row{display:flex;gap:28px;align-items:center}
.nav-item{font-family:'Instrument Sans',sans-serif;font-size:14px;color:var(--text-secondary);font-weight:500}
.palette-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:0}
.swatch{padding:16px;border-right:1px solid var(--border-light);border-bottom:1px solid var(--border-light)}
.swatch-color{width:100%;height:40px;border-radius:6px;margin-bottom:10px;border:1px solid var(--border-light)}
.swatch-name{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text-secondary);margin-bottom:2px}
.swatch-value{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text-dim)}
.swatch-role{font-size:11px;color:var(--text-dim);margin-top:4px}
.palette-note{padding:16px 20px;background:var(--bg-card);border-top:1px solid var(--border);font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text-dim);line-height:1.7;transition:background .3s}
.dl-btn{font-family:'JetBrains Mono',monospace;font-size:10px;padding:5px 12px;border-radius:4px;background:var(--tag-bg);border:1px solid var(--tag-border);color:var(--text-secondary);cursor:pointer;transition:all .2s;text-decoration:none;display:inline-block}
.dl-btn:hover{border-color:var(--text-dim);color:var(--text-primary)}
.dl-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.voice-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.voice-card{padding:16px 20px;border:1px solid var(--border-light);border-radius:8px}
.voice-card h4{font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--text-primary);font-weight:500;margin-bottom:8px}
.voice-card p{font-size:13px;color:var(--text-dim);line-height:1.6}
.identity-grid{display:grid;grid-template-columns:120px 1fr;gap:0}
.id-cell{padding:12px 0;font-size:14px;border-bottom:1px solid var(--border-light)}
.id-cell.key{font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--text-dim)}
.id-cell.val{color:var(--text-secondary)}
.tbd{color:var(--text-dim);font-style:italic}
.md-container{position:relative}
.md-content{font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--text-secondary);line-height:1.7;white-space:pre-wrap;word-wrap:break-word;max-height:400px;overflow-y:auto;padding:24px;background:var(--bg);border-top:1px solid var(--border)}
.md-copy-btn{position:absolute;top:8px;right:8px}
canvas{display:none}
@media(max-width:768px){
  .page{padding:32px 20px 80px}.wordmark-display{font-size:48px!important}.headline-specimen{font-size:28px}.italic-example{font-size:24px}
  .system-table,.spacing-table{grid-template-columns:1fr}.spec-grid,.identity-grid{grid-template-columns:100px 1fr}
  .theme-toggle{top:16px;right:16px}.voice-grid{grid-template-columns:1fr}
  .manifesto-block{font-size:16px!important}
}
</style>
</head>
<body>
<div class="theme-toggle">
  <button class="active" id="btn-dark" onclick="setTheme('dark')">dark</button>
  <button id="btn-light" onclick="setTheme('light')">light</button>
</div>
<canvas id="render-canvas"></canvas>

<div class="page">
  <div class="page-header">
    <a href="/" class="page-title" style="text-decoration:none;color:inherit;cursor:pointer;transition:opacity .2s" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">noticed</a>
    <div class="page-subtitle">brand kit — march 2026</div>
  </div>

  <!-- 01 BRAND IDENTITY -->
  <div class="section">
    <div class="section-label">01 — brand identity</div>
    <div class="card">
      <div class="card-header"><span>who we are</span></div>
      <div class="card-body">
        <div class="identity-grid">
          <div class="id-cell key">name</div><div class="id-cell val">noticed</div>
          <div class="id-cell key">domain</div><div class="id-cell val">noticed.so</div>
          <div class="id-cell key">handle</div><div class="id-cell val">@noticedso</div>
          <div class="id-cell key">tagline</div><div class="id-cell val tbd">tbd</div>
          <div class="id-cell key" style="border-bottom:none">social bio</div><div class="id-cell val tbd" style="border-bottom:none">tbd</div>
        </div>
      </div>
    </div>
  </div>

  <!-- 02 BRAND VOICE -->
  <div class="section">
    <div class="section-label">02 — brand voice</div>
    <div class="card">
      <div class="card-header"><span>how we sound</span></div>
      <div class="card-body">
        <div class="voice-grid">
          <div class="voice-card"><h4>say less.</h4><p>one sentence beats two. a period beats a comma. white space is a feature.</p></div>
          <div class="voice-card"><h4>write how people talk.</h4><p>read it out loud. if it sounds like a press release, rewrite it. if it sounds like a text to a smart friend, ship it.</p></div>
          <div class="voice-card"><h4>always lowercase.</h4><p>headlines, taglines, UI = lowercase. long-form body = standard caps. noticed never gets a capital N.</p></div>
          <div class="voice-card"><h4>don't explain AI.</h4><p>never say "powered by AI." the product just works. the agent goes unnoticed. the result is what matters.</p></div>
          <div class="voice-card"><h4>use "you."</h4><p>never "users" or "customers." noticed is a conversation with one person.</p></div>
          <div class="voice-card"><h4>no emojis.</h4><p>only exception: 👀 as the brand symbol, and single-emoji chat reactions.</p></div>
        </div>
      </div>
    </div>
  </div>

  <!-- 03 WORDMARK -->
  <div class="section">
    <div class="section-label">03 — wordmark</div>
    <div class="card">
      <div class="card-header"><span>primary wordmark</span><span class="dim">Instrument Serif · 400 · -0.04em</span></div>
      <div class="card-body" style="padding:48px 32px;text-align:center">
        <div class="wordmark-display" style="font-size:72px">noticed</div>
        <div class="dl-row" style="justify-content:center" id="wm-downloads"></div>
      </div>
      <div class="card-footer">
        <div class="spec-grid">
          <div class="spec-cell key">typeface</div><div class="spec-cell val">Instrument Serif (<a href="https://fonts.google.com/specimen/Instrument+Serif" target="_blank">Google Fonts</a>)</div>
          <div class="spec-cell key">weight</div><div class="spec-cell val">400 (only available weight)</div>
          <div class="spec-cell key">tracking</div><div class="spec-cell val">-0.04em (-4% in Figma)</div>
          <div class="spec-cell key">case</div><div class="spec-cell val">always lowercase. never capitalize.</div>
          <div class="spec-cell key" style="border-bottom:none">style</div><div class="spec-cell val" style="border-bottom:none">roman only. no italic in the wordmark.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- 04 ICON -->
  <div class="section">
    <div class="section-label">04 — icon / favicon</div>
    <div class="card">
      <div class="card-header"><span>brand mark — the letter "n"</span><span class="dim" id="icon-mode-label"></span></div>
      <div class="card-body">
        <div class="favicon-row" id="icon-row"></div>
        <div class="dl-row" style="margin-top:20px;justify-content:center" id="icon-downloads"></div>
      </div>
      <div class="card-footer">
        <div class="spec-grid">
          <div class="spec-cell key">mark</div><div class="spec-cell val">Instrument Serif lowercase "n", visually centered</div>
          <div class="spec-cell key">on dark bg</div><div class="spec-cell val">light square <code>#f0ede8</code> + dark letter <code>#1a1816</code></div>
          <div class="spec-cell key">on light bg</div><div class="spec-cell val">dark square <code>#0a0a0a</code> + light letter <code>#f0ede8</code></div>
          <div class="spec-cell key">shape</div><div class="spec-cell val">rounded square, border-radius 22% of container width</div>
          <div class="spec-cell key" style="border-bottom:none">optical sizing</div>
          <div class="spec-cell val" style="border-bottom:none">96px+: 85% · 64px: 87% · 32px: 90% · 16px: 95%</div>
        </div>
      </div>
    </div>
  </div>

  <!-- 05 COLOR PALETTE -->
  <div class="section">
    <div class="section-label">05 — color palette</div>
    <div class="card">
      <div class="card-header"><span>warm neutrals — <span id="palette-mode-label">dark mode</span></span><span class="dim">default: dark</span></div>
      <div class="card-body" style="padding:0"><div class="palette-grid" id="palette-grid"></div></div>
      <div class="palette-note">never pure black (#000) or pure white (#fff). every color has a warm undertone. both modes are the same room at different times of day. all text colors pass WCAG AA contrast (4.5:1+).</div>
    </div>
  </div>

  <!-- 06 FONT SYSTEM -->
  <div class="section">
    <div class="section-label">06 — font system</div>
    <div class="card">
      <div class="card-header"><span>four fonts, three roles</span><span class="dim">all Google Fonts · all free</span></div>
      <div class="card-body" style="padding:0 24px 24px">
        <div class="system-table">
          <div class="sys-cell header">role</div><div class="sys-cell header">font</div><div class="sys-cell header">where</div>
          <div class="sys-cell role">display / wordmark</div><div class="sys-cell font" style="font-family:'Instrument Serif',serif">Instrument Serif<a href="https://fonts.google.com/specimen/Instrument+Serif" target="_blank">↗</a></div><div class="sys-cell where">logo, hero headlines</div>
          <div class="sys-cell role">body (editorial)</div><div class="sys-cell font" style="font-family:'Newsreader',serif">Newsreader<a href="https://fonts.google.com/specimen/Newsreader" target="_blank">↗</a></div><div class="sys-cell where">subheads + body on landing page, manifesto, blog</div>
          <div class="sys-cell role">body (functional) + ui</div><div class="sys-cell font" style="font-family:'Instrument Sans',sans-serif">Instrument Sans<a href="https://fonts.google.com/specimen/Instrument+Sans" target="_blank">↗</a></div><div class="sys-cell where">subheads + body on onboarding, docs, buttons, nav, forms</div>
          <div class="sys-cell role" style="border-bottom:none">mono</div><div class="sys-cell font" style="font-family:'JetBrains Mono',monospace;border-bottom:none">JetBrains Mono<a href="https://fonts.google.com/specimen/JetBrains+Mono" target="_blank">↗</a></div><div class="sys-cell where" style="border-bottom:none">tags, labels, version numbers, code, metadata</div>
        </div>
      </div>
      <div class="card-footer">subheadline always matches the body font of its context. editorial = Newsreader. functional = Instrument Sans. Instrument Serif only at display/headline size.</div>
    </div>
  </div>

  <!-- 07 SPACING -->
  <div class="section">
    <div class="section-label">07 — spacing & line height</div>
    <div class="card">
      <div class="card-body" style="padding:0 24px 24px">
        <div class="spacing-table">
          <div class="sp-cell header">element</div><div class="sp-cell header">line-height</div><div class="sp-cell header">block gap</div><div class="sp-cell header">notes</div>
          <div class="sp-cell elem">headline</div><div class="sp-cell val">1.15</div><div class="sp-cell val">—</div><div class="sp-cell val">tight — display type</div>
          <div class="sp-cell elem">manifesto / hero</div><div class="sp-cell val">1.25</div><div class="sp-cell val">1.5em</div><div class="sp-cell val">20px desktop / 16px mobile</div>
          <div class="sp-cell elem">subheadline</div><div class="sp-cell val">1.4</div><div class="sp-cell val">—</div><div class="sp-cell val">comfortable for 1–3 lines</div>
          <div class="sp-cell elem" style="border-bottom:none">body (long-form)</div><div class="sp-cell val" style="border-bottom:none">1.65</div><div class="sp-cell val" style="border-bottom:none">1em</div><div class="sp-cell val" style="border-bottom:none">sustained reading</div>
        </div>
      </div>
    </div>
  </div>

  <!-- 08 SELECTIVE ITALIC -->
  <div class="section">
    <div class="section-label">08 — selective italic</div>
    <div class="card">
      <div class="card-header"><span>one word per headline — the emotional anchor</span></div>
      <div class="card-body">
        <div class="italic-examples">
          <div class="italic-example">quiet <em>networking</em></div>
          <div class="italic-example">your network is your most underused <em>asset</em></div>
          <div class="italic-example">we <em>engineer</em> serendipity</div>
          <div class="italic-example">the right people are already <em>there</em></div>
          <div class="italic-example">your agent opens <em>doors</em> you didn't know existed</div>
        </div>
      </div>
      <div class="card-footer">one italic word per headline, max. it can appear anywhere in the sentence — early, middle, or end. always the emotional anchor, never a filler word. Instrument Serif italic. same color as surrounding text. optional — not every headline needs it.</div>
    </div>
  </div>

  <!-- 09 EDITORIAL SPECIMENS -->
  <div class="section">
    <div class="section-label">09 — type specimens: editorial</div>
    <div class="card">
      <div class="card-header"><span>landing page / blog / manifesto</span></div>
      <div class="card-body">
        <div class="specimen"><div class="specimen-label">headline — instrument serif · 1.15</div>
          <div class="headline-specimen">your network is your most underused <em>asset</em></div></div>
        <div class="specimen"><div class="specimen-label">subheadline — newsreader · 1.4</div>
          <div class="subhead-specimen" style="font-family:'Newsreader',serif">one AI that represents you professionally, finds the right people, and makes the introduction. no broadcasting. no performing. just results.</div></div>
        <div class="specimen"><div class="specimen-label">body — newsreader · 1.65</div>
          <div class="body-specimen" style="font-family:'Newsreader',serif">The best professional matches already exist inside your network. They don't happen because both sides are hiding what they actually want. noticed holds your real preferences privately and matches them against the world — without you ever having to broadcast a thing.</div></div>
      </div>
    </div>
  </div>

  <!-- 10 FUNCTIONAL SPECIMENS -->
  <div class="section">
    <div class="section-label">10 — type specimens: functional</div>
    <div class="card">
      <div class="card-header"><span>onboarding / ui / docs</span></div>
      <div class="card-body">
        <div class="specimen"><div class="specimen-label">headline — instrument serif · 1.15</div>
          <div class="headline-specimen" style="font-size:28px">tell your agent what you're looking for</div></div>
        <div class="specimen"><div class="specimen-label">subheadline — instrument sans · 1.4</div>
          <div class="subhead-specimen" style="font-family:'Instrument Sans',sans-serif">your preferences stay private. your agent uses them to find relevant connections across the network.</div></div>
        <div class="specimen"><div class="specimen-label">body — instrument sans · 1.65</div>
          <div class="body-specimen" style="font-family:'Instrument Sans',sans-serif">The best professional matches already exist inside your network. They don't happen because both sides are hiding what they actually want. noticed holds your real preferences privately and matches them against the world — without you ever having to broadcast a thing.</div></div>
        <div class="specimen"><div class="specimen-label">navigation</div>
          <div class="nav-row"><span class="nav-item">how it works</span><span class="nav-item">pricing</span><span class="nav-item">blog</span><span class="nav-item" style="color:var(--text-primary)">join waitlist</span></div></div>
        <div class="specimen"><div class="specimen-label">buttons + tags</div>
          <div class="ui-row"><button class="btn-primary">join waitlist</button><button class="btn-secondary">learn more</button><span class="tag">investors</span><span class="tag">clients</span><span class="tag">hires</span><span class="tag">v0.1.0</span></div></div>
      </div>
    </div>
  </div>

  <!-- 11 MANIFESTO -->
  <div class="section">
    <div class="section-label">11 — manifesto / hero copy</div>
    <div class="card">
      <div class="card-header"><span>centered hero text</span><span class="dim">20px desktop · 16px mobile · lh 1.25 · gap 1.5em</span></div>
      <div class="card-body" style="padding:48px 24px;background:var(--bg)">
        <div class="manifesto-specimen">
          <div class="manifesto-block">the loudest people in the room<br>are rarely the most talented.</div>
          <div class="manifesto-block">they're just comfortable performing.</div>
          <div class="manifesto-block">the best founders, engineers, designers —<br>they're heads-down building.</div>
          <div class="manifesto-block">too busy to post.<br>too proud to beg for intros.<br>too good to go unnoticed.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- 12 QUICK REFERENCE -->
  <div class="section">
    <div class="section-label">12 — quick reference</div>
    <div class="card">
      <div class="card-body" style="padding:20px 24px">
        <div style="font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--text-secondary);line-height:2">
          wordmark: Instrument Serif, 400, -0.04em, always lowercase<br>
          favicon: Instrument Serif "n", 85% fill (95% at 16px), rounded square 22% radius<br>
          icon on dark bg: light square #f0ede8 + dark letter #1a1816<br>
          icon on light bg: dark square #0a0a0a + light letter #f0ede8<br>
          display: Instrument Serif — headlines only, line-height 1.15<br>
          manifesto/hero: Newsreader — 20px desktop / 16px mobile, lh 1.25, gap 1.5em<br>
          subheadline: matches body font, line-height 1.4<br>
          editorial body: Newsreader — line-height 1.65, paragraph gap 1em<br>
          functional body + ui: Instrument Sans — line-height 1.65<br>
          mono: JetBrains Mono — tags, labels, metadata<br>
          italic: selective, one word per headline, any position, same color as text<br>
          default mode: dark<br>
          text-secondary dark: #a09a94 — text-dim dark: #6b6560<br>
          accent dark: #c4b5a0 — accent light: #8a7d6b
        </div>
      </div>
    </div>
  </div>

  <!-- 13 BRAND KIT FOR AI AGENTS -->
  <div class="section">
    <div class="section-label">13 — brand kit for AI agents</div>
    <div class="card">
      <div class="card-header">
        <span>copy this into any coding agent to apply the noticed brand</span>
        <div style="display:flex;gap:8px">
          <button class="dl-btn" onclick="copyMarkdown()">copy markdown</button>
          <button class="dl-btn" onclick="downloadMarkdown()">download .md</button>
        </div>
      </div>
      <div class="md-container">
        <div class="md-content" id="md-content"></div>
      </div>
    </div>
  </div>

</div>

<script>
const MARKDOWN=\`# noticed brand visual identity

## overview
This file defines the visual identity for **noticed** (noticed.so), a personal networking agent for builders. Use this as the source of truth when building any noticed interface, asset, or content.

**Keywords**: branding, visual identity, typography, colors, styling, noticed brand

## name
- always lowercase: \\\`noticed\\\` — never "Noticed" or "NOTICED"
- domain: noticed.so
- handle: @noticedso

## wordmark
- **typeface**: Instrument Serif (Google Fonts)
- **weight**: 400 (only available weight)
- **letter-spacing**: -0.04em (-4% in Figma)
- **style**: roman only — no italic in the wordmark
- **case**: always lowercase

\\\`\\\`\\\`css
.wordmark {
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  letter-spacing: -0.04em;
  text-transform: lowercase;
}
\\\`\\\`\\\`

## icon / favicon
Instrument Serif lowercase "n" centered in a rounded square container.
- **shape**: rounded square, border-radius 22% of container width
- **on dark backgrounds**: light square \\\`#f0ede8\\\` + dark letter \\\`#1a1816\\\`
- **on light backgrounds**: dark square \\\`#0a0a0a\\\` + light letter \\\`#f0ede8\\\`
- optical sizing: 96px+: 85% · 64px: 87% · 32px: 90% · 16px: 95%

## colors
Warm neutrals only — never pure black (\\\`#000\\\`) or pure white (\\\`#fff\\\`). Dark mode is the default.

### Dark mode (default)
\\\`\\\`\\\`css
:root {
  --bg: #0a0a0a; --bg-card: #111111; --border: #222222;
  --text-primary: #f0ede8; --text-secondary: #a09a94; --text-dim: #6b6560;
  --accent: #c4b5a0; --tag-bg: #1a1917; --tag-border: #2a2825;
  --btn-bg: #f0ede8; --btn-text: #0a0a0a;
}
\\\`\\\`\\\`

### Light mode
\\\`\\\`\\\`css
[data-theme="light"] {
  --bg: #f7f5f2; --bg-card: #efece8; --border: #d8d4ce;
  --text-primary: #1a1816; --text-secondary: #6b6560; --text-dim: #9a958f;
  --accent: #8a7d6b; --tag-bg: #e8e4df; --tag-border: #d8d4ce;
  --btn-bg: #1a1816; --btn-text: #f7f5f2;
}
\\\`\\\`\\\`

## typography
Four fonts, three roles. All Google Fonts.

| Role | Font | Where |
|------|------|-------|
| Display / wordmark | Instrument Serif | Logo, hero headlines |
| Body (editorial) | Newsreader | Subheads + body on landing page, manifesto, blog |
| Body (functional) + UI | Instrument Sans | Onboarding, docs, buttons, nav, forms |
| Mono | JetBrains Mono | Tags, labels, version numbers, code |

### Google Fonts import
\\\`\\\`\\\`html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet">
\\\`\\\`\\\`

### CSS variables
\\\`\\\`\\\`css
:root {
  --font-display: 'Instrument Serif', serif;
  --font-body-editorial: 'Newsreader', serif;
  --font-body-functional: 'Instrument Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
\\\`\\\`\\\`

### Key rules
- Subheadline always matches the body font of its context.
- Instrument Serif only at display/headline size — never body text.
- Selective italic: one word per headline (max), emotional anchor. Same color as text.

### Spacing
| Element | Line height | Block gap | Notes |
|---------|------------|-----------|-------|
| Headline | 1.15 | — | Display type |
| Manifesto / hero | 1.25 | 1.5em | 20px desktop / 16px mobile |
| Subheadline | 1.4 | — | 1–3 lines |
| Body (long-form) | 1.65 | 1em | Sustained reading |

## brand voice
- **say less.** one sentence beats two.
- **write how people talk.** no jargon.
- **always lowercase.** noticed never gets a capital N.
- **don't explain AI.** the product just works.
- **use "you," not "users."**
- **no emojis** except 👀 as brand symbol.

## UI components
\\\`\\\`\\\`css
.btn-primary {
  font-family: var(--font-body-functional);
  font-size: 13px; padding: 9px 22px; border-radius: 6px;
  background: var(--btn-bg); color: var(--btn-text); font-weight: 600;
}
.btn-secondary {
  font-family: var(--font-body-functional);
  font-size: 13px; padding: 9px 22px; border-radius: 6px;
  background: transparent; color: var(--text-secondary);
  border: 1px solid var(--tag-border); font-weight: 500;
}
.tag {
  font-family: var(--font-mono);
  font-size: 12px; padding: 6px 14px; border-radius: 6px;
  background: var(--tag-bg); border: 1px solid var(--tag-border);
  color: var(--text-secondary);
}
.nav-item {
  font-family: var(--font-body-functional);
  font-size: 14px; color: var(--text-secondary); font-weight: 500;
}
\\\`\\\`\\\`

## art direction
**Warm machines. Human proof in a synthetic world.**
Closer to an independent magazine or design studio than a tech startup. Tactile, confident, understated. Analog warmth meets digital precision. Quiet, not minimal. Approachable authority.\`;

const palettes={dark:[
{name:'--bg',value:'#0a0a0a',role:'Page background'},
{name:'--bg-card',value:'#111111',role:'Elevated surfaces'},
{name:'--border',value:'#222222',role:'Primary dividers'},
{name:'--text-primary',value:'#f0ede8',role:'Headlines, wordmark'},
{name:'--text-secondary',value:'#a09a94',role:'Body text, subheads'},
{name:'--text-dim',value:'#6b6560',role:'Labels, metadata'},
{name:'--accent',value:'#c4b5a0',role:'Section labels'},
{name:'--tag-bg',value:'#1a1917',role:'Tag fills'},
{name:'--tag-border',value:'#2a2825',role:'Tag strokes'},
{name:'--btn-bg',value:'#f0ede8',role:'Primary button'}
],light:[
{name:'--bg',value:'#f7f5f2',role:'Page background'},
{name:'--bg-card',value:'#efece8',role:'Elevated surfaces'},
{name:'--border',value:'#d8d4ce',role:'Primary dividers'},
{name:'--text-primary',value:'#1a1816',role:'Headlines, wordmark'},
{name:'--text-secondary',value:'#6b6560',role:'Body text, subheads'},
{name:'--text-dim',value:'#9a958f',role:'Labels, metadata'},
{name:'--accent',value:'#8a7d6b',role:'Section labels'},
{name:'--tag-bg',value:'#e8e4df',role:'Tag fills'},
{name:'--tag-border',value:'#d8d4ce',role:'Tag strokes'},
{name:'--btn-bg',value:'#1a1816',role:'Primary button'}
]};

const iconCfg={
  dark:{bg:'#f0ede8',letter:'#1a1816',label:'dark context → light bg #f0ede8 · dark letter #1a1816'},
  light:{bg:'#0a0a0a',letter:'#f0ede8',label:'light context → dark bg #0a0a0a · light letter #f0ede8'}
};
const opticalScale={96:0.85,64:0.87,32:0.90,16:0.95};
let currentTheme='dark';

function renderPalette(m){
  document.getElementById('palette-mode-label').textContent=m+' mode';
  document.getElementById('palette-grid').innerHTML=palettes[m].map(s=>\`<div class="swatch"><div class="swatch-color" style="background:\${s.value}"></div><div class="swatch-name">\${s.name}</div><div class="swatch-value">\${s.value}</div><div class="swatch-role">\${s.role}</div></div>\`).join('');
}

function makeIconSVG(size,bg,letter){
  const scale=opticalScale[size]||0.85;
  const fs=Math.round(size*scale);
  const r=Math.round(size*0.22);
  const yPos=Math.round(size*0.72);
  return \`<svg xmlns="http://www.w3.org/2000/svg" width="\${size}" height="\${size}" viewBox="0 0 \${size} \${size}"><rect width="\${size}" height="\${size}" rx="\${r}" fill="\${bg}"/><text x="\${size/2}" y="\${yPos}" text-anchor="middle" font-family="'Instrument Serif',serif" font-size="\${fs}" fill="\${letter}" letter-spacing="-0.04em">n</text></svg>\`;
}

function renderIcons(m){
  const c=iconCfg[m];
  document.getElementById('icon-mode-label').textContent=c.label;
  const sizes=[96,64,32,16];
  document.getElementById('icon-row').innerHTML=sizes.map(s=>{
    const r=Math.round(s*0.22);
    const pct=Math.round((opticalScale[s]||0.85)*100);
    return \`<div class="favicon-item"><div style="width:\${s}px;height:\${s}px;border-radius:\${r}px;overflow:hidden">\${makeIconSVG(s,c.bg,c.letter).replace('xmlns="http://www.w3.org/2000/svg" ','')}</div><span class="favicon-label">\${s}px · \${pct}%</span></div>\`;
  }).join('');
  const colorTag=m==='dark'?'light-on-dark':'dark-on-light';
  document.getElementById('icon-downloads').innerHTML=sizes.map(s=>\`<button class="dl-btn" onclick="dlSVG('noticed-icon-\${s}-\${colorTag}',makeIconSVG(\${s},'\${c.bg}','\${c.letter}'))">SVG \${s}</button><button class="dl-btn" onclick="dlPNG('noticed-icon-\${s}-\${colorTag}',makeIconSVG(\${s},'\${c.bg}','\${c.letter}'),\${s*2},\${s*2})">PNG \${s} @2x</button>\`).join('');
}

function getWordmarkSVG(){
  const textColor=currentTheme==='dark'?'#f0ede8':'#1a1816';
  return \`<svg xmlns="http://www.w3.org/2000/svg" width="480" height="80" viewBox="0 0 480 80"><text x="240" y="40" text-anchor="middle" dominant-baseline="central" font-family="'Instrument Serif',serif" font-size="64" font-weight="400" fill="\${textColor}" letter-spacing="-0.04em">noticed</text></svg>\`;
}

function renderWmDownloads(){
  const colorTag=currentTheme==='dark'?'light-f0ede8':'dark-1a1816';
  document.getElementById('wm-downloads').innerHTML=\`<button class="dl-btn" onclick="dlSVG('noticed-wordmark-\${colorTag}',getWordmarkSVG())">SVG</button><button class="dl-btn" onclick="dlPNG('noticed-wordmark-\${colorTag}',getWordmarkSVG(),960,160)">PNG @2x</button>\`;
}

function dlSVG(name,svgStr){
  const b=new Blob([svgStr],{type:'image/svg+xml'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name+'.svg';a.click();URL.revokeObjectURL(a.href);
}
function dlPNG(name,svgStr,w,h){
  const canvas=document.getElementById('render-canvas');canvas.width=w;canvas.height=h;
  const ctx=canvas.getContext('2d');const img=new Image();
  const b=new Blob([svgStr],{type:'image/svg+xml'});const url=URL.createObjectURL(b);
  img.onload=function(){ctx.clearRect(0,0,w,h);ctx.drawImage(img,0,0,w,h);canvas.toBlob(function(pb){const a=document.createElement('a');a.href=URL.createObjectURL(pb);a.download=name+'.png';a.click();URL.revokeObjectURL(a.href);URL.revokeObjectURL(url)},'image/png')};
  img.src=url;
}

function copyMarkdown(){navigator.clipboard.writeText(MARKDOWN).then(()=>{const b=event.target;b.textContent='copied!';setTimeout(()=>b.textContent='copy markdown',1500)})}
function downloadMarkdown(){const b=new Blob([MARKDOWN],{type:'text/markdown'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='noticed-brand-visual-identity.md';a.click();URL.revokeObjectURL(a.href)}

document.getElementById('md-content').textContent=MARKDOWN;

function setTheme(t){
  currentTheme=t;
  document.documentElement.setAttribute('data-theme',t);
  document.getElementById('btn-dark').classList.toggle('active',t==='dark');
  document.getElementById('btn-light').classList.toggle('active',t==='light');
  renderPalette(t);renderIcons(t);renderWmDownloads();
}

renderPalette('dark');renderIcons('dark');renderWmDownloads();
</script>
</body>
</html>`

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html",
    },
  })
}
