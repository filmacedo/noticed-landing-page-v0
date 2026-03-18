import { NextResponse } from "next/server"

export async function GET() {
  const html = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>noticed — typography</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet">
<style>
  [data-theme="dark"]{--bg:#0a0a0a;--bg-card:#111111;--border:#222222;--border-light:#1a1a1a;--text-primary:#f0ede8;--text-secondary:#8a8580;--text-dim:#555250;--accent:#c4b5a0;--tag-bg:#1a1917;--tag-border:#2a2825;--btn-bg:#f0ede8;--btn-text:#0a0a0a;--toggle-bg:#1a1917;--toggle-border:#2a2825;--toggle-active:#f0ede8;--toggle-text:#8a8580;--toggle-text-active:#0a0a0a}
  [data-theme="light"]{--bg:#f7f5f2;--bg-card:#efece8;--border:#d8d4ce;--border-light:#e2dfd9;--text-primary:#1a1816;--text-secondary:#6b6560;--text-dim:#9a958f;--accent:#8a7d6b;--tag-bg:#e8e4df;--tag-border:#d8d4ce;--btn-bg:#1a1816;--btn-text:#f7f5f2;--toggle-bg:#e8e4df;--toggle-border:#d8d4ce;--toggle-active:#1a1816;--toggle-text:#9a958f;--toggle-text-active:#f7f5f2}
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:var(--bg);color:var(--text-primary);font-family:'Instrument Sans',sans-serif;-webkit-font-smoothing:antialiased;transition:background .3s,color .3s}
  .page{max-width:1200px;margin:0 auto;padding:60px 40px 120px}
  .theme-toggle{position:fixed;top:24px;right:24px;display:flex;background:var(--toggle-bg);border:1px solid var(--toggle-border);border-radius:8px;overflow:hidden;z-index:100;transition:all .3s}
  .theme-toggle button{font-family:'JetBrains Mono',monospace;font-size:11px;padding:8px 16px;border:none;background:transparent;color:var(--toggle-text);cursor:pointer;transition:all .2s;letter-spacing:.04em}
  .theme-toggle button.active{background:var(--toggle-active);color:var(--toggle-text-active)}
  .page-header{margin-bottom:64px;padding-bottom:40px;border-bottom:1px solid var(--border)}
  .page-title{font-family:'Instrument Serif',serif;font-size:48px;font-weight:400;letter-spacing:-0.04em;color:var(--text-primary);margin-bottom:12px}
  .page-subtitle{font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--text-dim);letter-spacing:.04em}
  .section{margin-bottom:64px}
  .section-label{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);margin-bottom:24px;padding-bottom:12px;border-bottom:1px solid var(--border-light)}
  .card{border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-bottom:24px;transition:border-color .3s}
  .card-header{padding:16px 24px;background:var(--bg-card);border-bottom:1px solid var(--border);font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--text-secondary);display:flex;justify-content:space-between;align-items:center;transition:background .3s}
  .card-body{padding:32px 24px}
  .card-footer{padding:16px 24px;background:var(--bg-card);border-top:1px solid var(--border);font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text-dim);line-height:1.7;transition:background .3s}
  .dim{color:var(--text-dim)}
  .wordmark-display{font-family:'Instrument Serif',serif;font-size:72px;font-weight:400;letter-spacing:-0.04em;color:var(--text-primary);line-height:1;margin-bottom:8px}
  .spec-grid{display:grid;grid-template-columns:140px 1fr;gap:0;margin-top:24px}
  .spec-cell{padding:10px 0;font-family:'JetBrains Mono',monospace;font-size:12px;border-bottom:1px solid var(--border-light)}
  .spec-cell.key{color:var(--text-dim)}.spec-cell.val{color:var(--text-secondary)}
  .favicon-row{display:flex;gap:24px;align-items:end;margin-bottom:24px}
  .favicon-item{display:flex;flex-direction:column;align-items:center;gap:8px}
  .favicon-box{display:flex;align-items:center;justify-content:center;border-radius:12px}
  .favicon-label{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text-dim)}
  .system-table{display:grid;grid-template-columns:140px 1fr 1fr;gap:0}
  .sys-cell{padding:12px 16px;font-size:13px;border-bottom:1px solid var(--border-light)}
  .sys-cell.header{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--text-dim);padding-bottom:8px;border-bottom:1px solid var(--border)}
  .sys-cell.role{font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--text-dim)}
  .sys-cell.font{color:var(--text-secondary);font-weight:500}.sys-cell.where{color:var(--text-dim);font-size:12px}
  .specimen{margin-bottom:32px}.specimen:last-child{margin-bottom:0}
  .specimen-label{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--text-dim);margin-bottom:8px}
  .headline-specimen{font-family:'Instrument Serif',serif;font-size:36px;line-height:1.15;letter-spacing:-0.025em;font-weight:400;color:var(--text-primary);max-width:700px}
  .headline-specimen em{font-family:'Instrument Serif',serif;font-style:italic}
  .subhead-specimen{font-size:18px;line-height:1.4;font-weight:400;color:var(--text-secondary);max-width:640px}
  .body-specimen{font-size:16.5px;line-height:1.65;color:var(--text-secondary);max-width:620px}
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
  .manifesto-specimen{text-align:center;max-width:640px;margin:0 auto}
  .manifesto-block{font-family:'Newsreader',serif;font-size:22px;line-height:1.25;color:var(--text-primary);margin-bottom:1.5em}
  .manifesto-block:last-child{margin-bottom:0}
  .spacing-table{display:grid;grid-template-columns:180px 100px 100px 1fr;gap:0}
  .sp-cell{padding:10px 12px;font-family:'JetBrains Mono',monospace;font-size:11px;border-bottom:1px solid var(--border-light)}
  .sp-cell.header{font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--text-dim);border-bottom:1px solid var(--border)}
  .sp-cell.elem{color:var(--text-secondary)}.sp-cell.val{color:var(--text-dim)}
  @media(max-width:768px){.page{padding:32px 20px 80px}.wordmark-display{font-size:48px}.headline-specimen{font-size:28px}.italic-example{font-size:24px}.system-table,.spacing-table{grid-template-columns:1fr}.spec-grid{grid-template-columns:100px 1fr}.theme-toggle{top:16px;right:16px}}
</style>
</head>
<body>
<div class="theme-toggle">
  <button class="active" id="btn-dark" onclick="setTheme('dark')">dark</button>
  <button id="btn-light" onclick="setTheme('light')">light</button>
</div>
<div class="page">
  <div class="page-header">
    <div class="page-title">noticed</div>
    <div class="page-subtitle">typography &amp; brand system — march 2026</div>
  </div>

  <div class="section">
    <div class="section-label">01 — wordmark</div>
    <div class="card">
      <div class="card-header"><span>primary wordmark</span><span class="dim">Instrument Serif · 400 · -0.04em</span></div>
      <div class="card-body" style="padding:48px 32px;text-align:center"><div class="wordmark-display">noticed</div></div>
      <div class="card-footer">
        <div class="spec-grid">
          <div class="spec-cell key">typeface</div><div class="spec-cell val">Instrument Serif (Google Fonts)</div>
          <div class="spec-cell key">weight</div><div class="spec-cell val">400 (only available weight)</div>
          <div class="spec-cell key">tracking</div><div class="spec-cell val">-0.04em (-4% in Figma)</div>
          <div class="spec-cell key">case</div><div class="spec-cell val">always lowercase. never capitalize.</div>
          <div class="spec-cell key" style="border-bottom:none">style</div><div class="spec-cell val" style="border-bottom:none">roman only. no italic in the wordmark.</div>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-label">02 — icon / favicon</div>
    <div class="card">
      <div class="card-header"><span>brand mark — the letter "n"</span><span class="dim">Instrument Serif · fills container</span></div>
      <div class="card-body">
        <div class="favicon-row">
          <div class="favicon-item">
            <div class="favicon-box" style="width:96px;height:96px;border-radius:20px;background:#0a0a0a">
              <svg width="64" height="64" viewBox="0 0 64 64"><text x="32" y="46" text-anchor="middle" font-family="'Instrument Serif',serif" font-size="54" fill="#f0ede8" letter-spacing="-0.04em">n</text></svg>
            </div>
            <span class="favicon-label">96×96</span>
          </div>
          <div class="favicon-item">
            <div class="favicon-box" style="width:64px;height:64px;border-radius:14px;background:#0a0a0a">
              <svg width="44" height="44" viewBox="0 0 44 44"><text x="22" y="32" text-anchor="middle" font-family="'Instrument Serif',serif" font-size="38" fill="#f0ede8" letter-spacing="-0.04em">n</text></svg>
            </div>
            <span class="favicon-label">64×64</span>
          </div>
          <div class="favicon-item">
            <div class="favicon-box" style="width:32px;height:32px;border-radius:7px;background:#0a0a0a">
              <svg width="22" height="22" viewBox="0 0 22 22"><text x="11" y="16" text-anchor="middle" font-family="'Instrument Serif',serif" font-size="19" fill="#f0ede8" letter-spacing="-0.04em">n</text></svg>
            </div>
            <span class="favicon-label">32×32</span>
          </div>
          <div class="favicon-item">
            <div class="favicon-box" style="width:16px;height:16px;border-radius:3px;background:#0a0a0a">
              <svg width="12" height="12" viewBox="0 0 12 12"><text x="6" y="9" text-anchor="middle" font-family="'Instrument Serif',serif" font-size="11" fill="#f0ede8" letter-spacing="-0.04em">n</text></svg>
            </div>
            <span class="favicon-label">16×16</span>
          </div>
        </div>
        <div class="favicon-row" style="margin-top:16px">
          <div class="favicon-item">
            <div class="favicon-box" style="width:96px;height:96px;border-radius:20px;background:#f0ede8">
              <svg width="64" height="64" viewBox="0 0 64 64"><text x="32" y="46" text-anchor="middle" font-family="'Instrument Serif',serif" font-size="54" fill="#1a1816" letter-spacing="-0.04em">n</text></svg>
            </div>
            <span class="favicon-label">light variant</span>
          </div>
          <div class="favicon-item">
            <div class="favicon-box" style="width:96px;height:96px;border-radius:20px;background:#0a0a0a">
              <svg width="64" height="64" viewBox="0 0 64 64"><text x="32" y="46" text-anchor="middle" font-family="'Instrument Serif',serif" font-size="54" fill="#f0ede8" letter-spacing="-0.04em">n</text></svg>
            </div>
            <span class="favicon-label">dark variant (default)</span>
          </div>
        </div>
      </div>
      <div class="card-footer">Instrument Serif lowercase "n" filling the container. Dark bg (#0a0a0a) + light letter (#f0ede8) is default. Invert for light contexts.</div>
    </div>
  </div>

  <div class="section">
    <div class="section-label">03 — font system</div>
    <div class="card">
      <div class="card-header"><span>four fonts, three roles</span><span class="dim">all Google Fonts · all free</span></div>
      <div class="card-body" style="padding:0 24px 24px">
        <div class="system-table">
          <div class="sys-cell header">role</div><div class="sys-cell header">font</div><div class="sys-cell header">where</div>
          <div class="sys-cell role">display / wordmark</div><div class="sys-cell font" style="font-family:'Instrument Serif',serif">Instrument Serif</div><div class="sys-cell where">logo, hero headlines</div>
          <div class="sys-cell role">body (editorial)</div><div class="sys-cell font" style="font-family:'Newsreader',serif">Newsreader</div><div class="sys-cell where">subheads + body on landing page, manifesto, blog</div>
          <div class="sys-cell role">body (functional) + ui</div><div class="sys-cell font" style="font-family:'Instrument Sans',sans-serif">Instrument Sans</div><div class="sys-cell where">subheads + body on onboarding, docs, buttons, nav, forms</div>
          <div class="sys-cell role" style="border-bottom:none">mono</div><div class="sys-cell font" style="font-family:'JetBrains Mono',monospace;border-bottom:none">JetBrains Mono</div><div class="sys-cell where" style="border-bottom:none">tags, labels, version numbers, code, metadata</div>
        </div>
      </div>
      <div class="card-footer">Rule: subheadline always matches the body font of its context. Editorial = Newsreader. Functional = Instrument Sans. Instrument Serif only at display/headline size.</div>
    </div>
  </div>

  <div class="section">
    <div class="section-label">04 — spacing &amp; line height</div>
    <div class="card">
      <div class="card-header"><span>line height + paragraph spacing</span><span class="dim">tighter lines, generous blocks</span></div>
      <div class="card-body" style="padding:0 24px 24px">
        <div class="spacing-table">
          <div class="sp-cell header">element</div><div class="sp-cell header">line-height</div><div class="sp-cell header">block gap</div><div class="sp-cell header">notes</div>
          <div class="sp-cell elem">headline</div><div class="sp-cell val">1.15</div><div class="sp-cell val">—</div><div class="sp-cell val">tight — display type, minimal leading</div>
          <div class="sp-cell elem">manifesto / hero text</div><div class="sp-cell val">1.25</div><div class="sp-cell val">1.5em</div><div class="sp-cell val">tighter lines + generous gaps between blocks = drama</div>
          <div class="sp-cell elem">subheadline</div><div class="sp-cell val">1.4</div><div class="sp-cell val">—</div><div class="sp-cell val">comfortable for 1–3 lines</div>
          <div class="sp-cell elem" style="border-bottom:none">body (long-form)</div><div class="sp-cell val" style="border-bottom:none">1.65</div><div class="sp-cell val" style="border-bottom:none">1em</div><div class="sp-cell val" style="border-bottom:none">optimized for sustained reading</div>
        </div>
      </div>
      <div class="card-footer">The key insight: for manifesto-style centered copy, tighter line-height + generous block spacing creates breathing room and drama. Long-form body text needs looser line-height for readability.</div>
    </div>
  </div>

  <div class="section">
    <div class="section-label">05 — type specimens: editorial context</div>
    <div class="card">
      <div class="card-header"><span>landing page / blog / manifesto</span></div>
      <div class="card-body">
        <div class="specimen"><div class="specimen-label">headline — instrument serif · line-height: 1.15</div>
          <div class="headline-specimen">your network is your most underused <em>asset</em></div></div>
        <div class="specimen"><div class="specimen-label">subheadline — newsreader · line-height: 1.4</div>
          <div class="subhead-specimen" style="font-family:'Newsreader',serif">one AI that represents you professionally, finds the right people, and makes the introduction. no broadcasting. no performing. just results.</div></div>
        <div class="specimen"><div class="specimen-label">body — newsreader · line-height: 1.65</div>
          <div class="body-specimen" style="font-family:'Newsreader',serif">The best professional matches already exist inside your network. They don't happen because both sides are hiding what they actually want. noticed holds your real preferences privately and matches them against the world — without you ever having to broadcast a thing.</div></div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-label">06 — manifesto / hero copy rhythm</div>
    <div class="card">
      <div class="card-header"><span>centered hero text — interactive</span><span class="dim" id="manifesto-specs">line-height: 1.25 · block gap: 1.5em · font-size: 22px</span></div>
      <div class="card-body" style="padding:48px 24px;background:var(--bg)">
        <div class="manifesto-specimen" id="manifesto-text">
          <div class="manifesto-block">the loudest people in the room<br>are rarely the most talented.</div>
          <div class="manifesto-block">they're just comfortable performing.</div>
          <div class="manifesto-block">the best founders, engineers, designers —<br>they're heads-down building.</div>
          <div class="manifesto-block">too busy to post.<br>too proud to beg for intros.<br>too good to go unnoticed.</div>
        </div>
      </div>
      <div style="padding:20px 24px;border-top:1px solid var(--border);display:flex;gap:32px;flex-wrap:wrap">
        <div style="flex:1;min-width:200px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <span style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--text-dim)">line-height</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--text-secondary)" id="lh-val">1.25</span>
          </div>
          <input type="range" id="lh-slider" min="100" max="200" value="125" step="5" style="width:100%;accent-color:var(--accent);height:4px;-webkit-appearance:none;background:var(--border);border-radius:2px;outline:none" oninput="updateManifesto()">
          <div style="display:flex;justify-content:space-between;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text-dim);margin-top:4px"><span>1.0</span><span>2.0</span></div>
        </div>
        <div style="flex:1;min-width:200px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <span style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--text-dim)">block gap</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--text-secondary)" id="gap-val">1.5em</span>
          </div>
          <input type="range" id="gap-slider" min="50" max="400" value="150" step="10" style="width:100%;accent-color:var(--accent);height:4px;-webkit-appearance:none;background:var(--border);border-radius:2px;outline:none" oninput="updateManifesto()">
          <div style="display:flex;justify-content:space-between;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text-dim);margin-top:4px"><span>0.5em</span><span>4.0em</span></div>
        </div>
        <div style="flex:1;min-width:200px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <span style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--text-dim)">font size</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--text-secondary)" id="fs-val">22px</span>
          </div>
          <input type="range" id="fs-slider" min="16" max="36" value="22" step="1" style="width:100%;accent-color:var(--accent);height:4px;-webkit-appearance:none;background:var(--border);border-radius:2px;outline:none" oninput="updateManifesto()">
          <div style="display:flex;justify-content:space-between;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text-dim);margin-top:4px"><span>16px</span><span>36px</span></div>
        </div>
      </div>
      <div class="card-footer">Drag the sliders to find your rhythm. Tighter line-height + generous block gaps = manifesto drama. Compare with the body copy above to see the difference.</div>
    </div>
  </div>

  <div class="section">
    <div class="section-label">07 — type specimens: functional context</div>
    <div class="card">
      <div class="card-header"><span>onboarding / ui / docs</span></div>
      <div class="card-body">
        <div class="specimen"><div class="specimen-label">headline — instrument serif · line-height: 1.15</div>
          <div class="headline-specimen" style="font-size:28px">tell your agent what you're looking for</div></div>
        <div class="specimen"><div class="specimen-label">subheadline — instrument sans · line-height: 1.4</div>
          <div class="subhead-specimen" style="font-family:'Instrument Sans',sans-serif">your preferences stay private. your agent uses them to find relevant connections across the network.</div></div>
        <div class="specimen"><div class="specimen-label">body — instrument sans · line-height: 1.65</div>
          <div class="body-specimen" style="font-family:'Instrument Sans',sans-serif">The best professional matches already exist inside your network. They don't happen because both sides are hiding what they actually want. noticed holds your real preferences privately and matches them against the world — without you ever having to broadcast a thing.</div></div>
        <div class="specimen"><div class="specimen-label">navigation</div>
          <div class="nav-row">
            <span class="nav-item">how it works</span><span class="nav-item">pricing</span><span class="nav-item">blog</span>
            <span class="nav-item" style="color:var(--text-primary)">join waitlist</span>
          </div></div>
        <div class="specimen"><div class="specimen-label">buttons + tags</div>
          <div class="ui-row">
            <button class="btn-primary">join waitlist</button><button class="btn-secondary">learn more</button>
            <span class="tag">investors</span><span class="tag">clients</span><span class="tag">hires</span><span class="tag">v0.1.0</span>
          </div></div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-label">08 — selective italic</div>
    <div class="card">
      <div class="card-header"><span>one word per headline — the word that carries the emotional weight</span></div>
      <div class="card-body">
        <div class="italic-examples">
          <div class="italic-example">your agent opens doors you didn't know <em>existed</em></div>
          <div class="italic-example">quiet <em>networking</em></div>
          <div class="italic-example">the connections already <em>exist</em></div>
          <div class="italic-example">your network is your most underused <em>asset</em></div>
          <div class="italic-example">we never see your <em>preferences</em></div>
        </div>
      </div>
      <div class="card-footer">Rules: one italic word per headline, max. Always the emotional anchor — never the first word, never a filler word. Use Instrument Serif italic. Same color as surrounding text — italic alone is enough. This technique is optional — not every headline needs it.</div>
    </div>
  </div>

  <div class="section">
    <div class="section-label">09 — color palette</div>
    <div class="card">
      <div class="card-header"><span>warm neutrals — <span id="palette-mode-label">dark mode</span></span><span class="dim">default: dark</span></div>
      <div class="card-body" style="padding:0"><div class="palette-grid" id="palette-grid"></div></div>
      <div class="palette-note">never pure black (#000) or pure white (#fff). every color has a warm undertone — sand, stone, parchment. both modes are the same room at different times of day. accent is a muted gold: earned, not flashy.</div>
    </div>
  </div>

  <div class="section">
    <div class="section-label">10 — quick reference</div>
    <div class="card">
      <div class="card-body" style="padding:20px 24px">
        <div style="font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--text-secondary);line-height:2">
          wordmark: Instrument Serif, 400, -0.04em, always lowercase<br>
          favicon: Instrument Serif "n", dark bg default<br>
          display: Instrument Serif — headlines only, line-height 1.15<br>
          manifesto/hero: Newsreader — line-height 1.25, block gap 1.5em<br>
          subheadline: matches body font, line-height 1.4<br>
          editorial body: Newsreader — line-height 1.65, paragraph gap 1em<br>
          functional body + ui: Instrument Sans — line-height 1.65<br>
          mono: JetBrains Mono — tags, labels, metadata<br>
          italic: selective, one word per headline, same color as text<br>
          subheadline rule: always matches the body font of its context<br>
          default mode: dark<br>
          bg dark: #0a0a0a — bg light: #f7f5f2<br>
          text dark: #f0ede8 — text light: #1a1816<br>
          accent dark: #c4b5a0 — accent light: #8a7d6b
        </div>
      </div>
    </div>
  </div>
</div>

<script>
const palettes={dark:[
{name:'--bg',value:'#0a0a0a',role:'Page background'},{name:'--bg-card',value:'#111111',role:'Elevated surfaces'},
{name:'--border',value:'#222222',role:'Primary dividers'},{name:'--text-primary',value:'#f0ede8',role:'Headlines, wordmark'},
{name:'--text-secondary',value:'#8a8580',role:'Body text, subheads'},{name:'--text-dim',value:'#555250',role:'Labels, metadata'},
{name:'--accent',value:'#c4b5a0',role:'Section labels, highlights'},{name:'--tag-bg',value:'#1a1917',role:'Tag fills'},
{name:'--tag-border',value:'#2a2825',role:'Tag strokes'},{name:'--btn-bg',value:'#f0ede8',role:'Primary button'}
],light:[
{name:'--bg',value:'#f7f5f2',role:'Page background'},{name:'--bg-card',value:'#efece8',role:'Elevated surfaces'},
{name:'--border',value:'#d8d4ce',role:'Primary dividers'},{name:'--text-primary',value:'#1a1816',role:'Headlines, wordmark'},
{name:'--text-secondary',value:'#6b6560',role:'Body text, subheads'},{name:'--text-dim',value:'#9a958f',role:'Labels, metadata'},
{name:'--accent',value:'#8a7d6b',role:'Section labels, highlights'},{name:'--tag-bg',value:'#e8e4df',role:'Tag fills'},
{name:'--tag-border',value:'#d8d4ce',role:'Tag strokes'},{name:'--btn-bg',value:'#1a1816',role:'Primary button'}
]};
function renderPalette(m){const g=document.getElementById('palette-grid');document.getElementById('palette-mode-label').textContent=m+' mode';g.innerHTML=palettes[m].map(s=>'<div class="swatch"><div class="swatch-color" style="background:'+s.value+'"></div><div class="swatch-name">'+s.name+'</div><div class="swatch-value">'+s.value+'</div><div class="swatch-role">'+s.role+'</div></div>').join('')}
function setTheme(t){document.documentElement.setAttribute('data-theme',t);document.getElementById('btn-dark').classList.toggle('active',t==='dark');document.getElementById('btn-light').classList.toggle('active',t==='light');renderPalette(t)}
function updateManifesto(){
  const lh=document.getElementById('lh-slider').value/100;
  const gap=document.getElementById('gap-slider').value/100;
  const fs=document.getElementById('fs-slider').value;
  document.getElementById('lh-val').textContent=lh.toFixed(2);
  document.getElementById('gap-val').textContent=gap.toFixed(1)+'em';
  document.getElementById('fs-val').textContent=fs+'px';
  document.getElementById('manifesto-specs').textContent='line-height: '+lh.toFixed(2)+' · block gap: '+gap.toFixed(1)+'em · font-size: '+fs+'px';
  const blocks=document.querySelectorAll('.manifesto-block');
  blocks.forEach(function(b){b.style.lineHeight=lh;b.style.marginBottom=gap+'em';b.style.fontSize=fs+'px'});
  blocks[blocks.length-1].style.marginBottom='0';
}
renderPalette('dark');
</script>
</body>
</html>`

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  })
}
