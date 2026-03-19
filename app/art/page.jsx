"use client"

import { useState, useRef, useEffect, useCallback } from "react";

const patterns = [
  {
    id: "caustics", title: "caustics",
    description: "tight, organic ripples — like light refracting through water.",
    buildDark: (c) => `
      radial-gradient(ellipse 35% 40% at 30% 40%, ${c.glow1}77 0%, transparent 70%),
      radial-gradient(ellipse 30% 35% at 65% 55%, ${c.glow2}66 0%, transparent 65%),
      radial-gradient(ellipse 25% 30% at 50% 30%, ${c.glow3}55 0%, transparent 60%),
      radial-gradient(ellipse 20% 25% at 20% 65%, ${c.glow2}44 0%, transparent 55%),
      radial-gradient(ellipse 28% 20% at 75% 35%, ${c.glow1}33 0%, transparent 50%),
      radial-gradient(ellipse 22% 28% at 45% 70%, ${c.glow3}44 0%, transparent 55%),
      linear-gradient(180deg, ${c.dark.bg1} 0%, ${c.dark.bg2} 50%, ${c.dark.bg1} 100%)`,
    buildLight: (c) => `
      radial-gradient(ellipse 38% 42% at 30% 40%, ${c.lightGlow1}44 0%, transparent 70%),
      radial-gradient(ellipse 32% 38% at 65% 55%, ${c.lightGlow2}38 0%, transparent 65%),
      radial-gradient(ellipse 28% 32% at 50% 30%, ${c.lightGlow3}30 0%, transparent 60%),
      radial-gradient(ellipse 22% 28% at 20% 65%, ${c.lightGlow2}28 0%, transparent 55%),
      radial-gradient(ellipse 30% 22% at 75% 35%, ${c.lightGlow1}22 0%, transparent 50%),
      radial-gradient(ellipse 24% 30% at 45% 70%, ${c.lightGlow3}28 0%, transparent 55%),
      linear-gradient(180deg, ${c.light.bg1} 0%, ${c.light.bg2} 50%, ${c.light.bg1} 100%)`,
  },
  {
    id: "lightleak", title: "light leak",
    description: "asymmetric edge bleeds — like overexposed analog film.",
    buildDark: (c) => `
      radial-gradient(ellipse 70% 80% at 5% 90%, ${c.glow1}88 0%, transparent 55%),
      radial-gradient(ellipse 60% 70% at 95% 10%, ${c.glow2}66 0%, transparent 50%),
      radial-gradient(ellipse 50% 40% at 50% 85%, ${c.glow3}44 0%, transparent 45%),
      radial-gradient(ellipse 40% 50% at 85% 80%, ${c.glow2}33 0%, transparent 50%),
      linear-gradient(135deg, ${c.dark.bg1} 0%, ${c.dark.bg2} 40%, ${c.dark.bg1} 100%)`,
    buildLight: (c) => `
      radial-gradient(ellipse 70% 80% at 5% 90%, ${c.lightGlow1}55 0%, transparent 55%),
      radial-gradient(ellipse 60% 70% at 95% 10%, ${c.lightGlow2}40 0%, transparent 50%),
      radial-gradient(ellipse 50% 40% at 50% 85%, ${c.lightGlow3}30 0%, transparent 45%),
      radial-gradient(ellipse 40% 50% at 85% 80%, ${c.lightGlow2}25 0%, transparent 50%),
      linear-gradient(135deg, ${c.light.bg1} 0%, ${c.light.bg2} 40%, ${c.light.bg1} 100%)`,
  },
  {
    id: "bokeh", title: "bokeh",
    description: "distinct soft circles — like city lights out of focus.",
    buildDark: (c) => `
      radial-gradient(circle 120px at 28% 65%, ${c.glow1}55 0%, transparent 70%),
      radial-gradient(circle 90px at 68% 30%, ${c.glow2}44 0%, transparent 70%),
      radial-gradient(circle 70px at 50% 50%, ${c.glow3}33 0%, transparent 70%),
      radial-gradient(circle 100px at 18% 28%, ${c.glow2}33 0%, transparent 70%),
      radial-gradient(circle 80px at 78% 72%, ${c.glow1}33 0%, transparent 70%),
      radial-gradient(circle 55px at 42% 18%, ${c.glow3}22 0%, transparent 70%),
      radial-gradient(circle 65px at 60% 80%, ${c.glow1}22 0%, transparent 70%),
      linear-gradient(180deg, ${c.dark.bg1} 0%, ${c.dark.bg2} 50%, ${c.dark.bg1} 100%)`,
    buildLight: (c) => `
      radial-gradient(circle 130px at 28% 65%, ${c.lightGlow1}35 0%, transparent 70%),
      radial-gradient(circle 100px at 68% 30%, ${c.lightGlow2}28 0%, transparent 70%),
      radial-gradient(circle 80px at 50% 50%, ${c.lightGlow3}22 0%, transparent 70%),
      radial-gradient(circle 110px at 18% 28%, ${c.lightGlow2}22 0%, transparent 70%),
      radial-gradient(circle 90px at 78% 72%, ${c.lightGlow1}22 0%, transparent 70%),
      radial-gradient(circle 60px at 42% 18%, ${c.lightGlow3}18 0%, transparent 70%),
      radial-gradient(circle 70px at 60% 80%, ${c.lightGlow1}18 0%, transparent 70%),
      linear-gradient(180deg, ${c.light.bg1} 0%, ${c.light.bg2} 50%, ${c.light.bg1} 100%)`,
  },
];

const palettes = [
  {
    id: "warm-neutral", title: "warm neutral", description: "muted golds + warm grays.",
    glow1: "#c4a880", glow2: "#a8907a", glow3: "#8c7860",
    lightGlow1: "#b89868", lightGlow2: "#a08060", lightGlow3: "#c8ad88",
    dark: { bg1: "#0a0a0a", bg2: "#161412", accent: "#c4b5a0", textPrimary: "#f0ede8", textSecondary: "#8a8580", textDim: "#555250", cardBg: "rgba(196,181,160,0.06)", cardBorder: "rgba(196,181,160,0.14)", uiBg: "#0f0f0e", uiBorder: "#1a1a1a" },
    light: { bg1: "#f7f5f2", bg2: "#efece8", accent: "#8a7d6b", textPrimary: "#1a1816", textSecondary: "#6b6560", textDim: "#9a958f", cardBg: "rgba(26,24,22,0.04)", cardBorder: "rgba(26,24,22,0.10)", uiBg: "#efece8", uiBorder: "#d8d4ce" },
  },
  {
    id: "moss", title: "moss", description: "muted sage + olive. organic, grounded.",
    glow1: "#8aaa70", glow2: "#6a9060", glow3: "#a0b880",
    lightGlow1: "#7a9a58", lightGlow2: "#5a8048", lightGlow3: "#90a868",
    dark: { bg1: "#090b09", bg2: "#121814", accent: "#9aaa80", textPrimary: "#e8ede4", textSecondary: "#7a8a6e", textDim: "#4a5444", cardBg: "rgba(140,170,110,0.06)", cardBorder: "rgba(140,170,110,0.14)", uiBg: "#0d100d", uiBorder: "#1a1e1a" },
    light: { bg1: "#f4f6f2", bg2: "#eaefe6", accent: "#5a7048", textPrimary: "#1a1e18", textSecondary: "#5a6a50", textDim: "#8a9a80", cardBg: "rgba(26,30,24,0.04)", cardBorder: "rgba(26,30,24,0.10)", uiBg: "#eaefe6", uiBorder: "#d0d8ca" },
  },
  {
    id: "bone", title: "bone", description: "near-monochrome warm whites. all restraint.",
    glow1: "#a09890", glow2: "#8a8278", glow3: "#b0a898",
    lightGlow1: "#908880", lightGlow2: "#7a7268", lightGlow3: "#a09888",
    dark: { bg1: "#0a0a09", bg2: "#141310", accent: "#a09488", textPrimary: "#edeae6", textSecondary: "#7a7570", textDim: "#4a4844", cardBg: "rgba(160,150,140,0.06)", cardBorder: "rgba(160,150,140,0.14)", uiBg: "#0e0e0d", uiBorder: "#1a1918" },
    light: { bg1: "#f5f4f2", bg2: "#edebe8", accent: "#7a7268", textPrimary: "#1a1918", textSecondary: "#6a6560", textDim: "#9a9590", cardBg: "rgba(26,25,24,0.04)", cardBorder: "rgba(26,25,24,0.10)", uiBg: "#edebe8", uiBorder: "#d4d2ce" },
  },
];

const textures = [
  { id: "none", title: "none", description: "clean — no texture overlay." },
  { id: "grain-low", title: "grain · low", description: "barely-there film grain. a whisper of analog warmth." },
  { id: "grain-med", title: "grain · medium", description: "visible film grain. warm, organic, each frame unique." },
  { id: "moire-dot", title: "moiré · dot", description: "overlapping dot grids at offset angles. interference creates an illusion of movement — even in a static image." },
  { id: "moire-line", title: "moiré · line", description: "overlapping line grids. sharper interference fringes — more structured, more tension." },
  { id: "halftone", title: "halftone", description: "regular dot pattern — like ink on newsprint. very editorial." },
  { id: "linen", title: "linen", description: "woven fiber texture — like high-end stationery or canvas." },
  { id: "scanlines", title: "scanlines", description: "thin horizontal lines — CRT monitor, retro-digital." },
];

function GrainTexture({ opacity, isDark }) {
  const ref = useRef(null);
  const raf = useRef(null);
  const draw = useCallback(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    const d = ctx.createImageData(c.width, c.height);
    for (let i = 0; i < d.data.length; i += 4) {
      const v = Math.random() * 255;
      d.data[i] = v + 6; d.data[i+1] = v + 2; d.data[i+2] = v - 4; d.data[i+3] = 255;
    }
    ctx.putImageData(d, 0, 0);
    raf.current = requestAnimationFrame(draw);
  }, []);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    c.width = 180; c.height = 180;
    draw();
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [draw]);
  return <canvas ref={ref} style={{
    position: "absolute", inset: 0, width: "100%", height: "100%",
    opacity: isDark ? opacity : opacity * 0.55,
    mixBlendMode: isDark ? "overlay" : "multiply",
    pointerEvents: "none", imageRendering: "pixelated",
  }} />;
}

function MoireDotTexture({ isDark }) {
  const o = isDark ? 0.18 : 0.12;
  const fill = isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.3)";
  // Two dot grids at different angles and slightly different spacings
  const svg1 = `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='4' r='1.2' fill='${encodeURIComponent(fill)}'/%3E%3C/svg%3E")`;
  const svg2 = `url("data:image/svg+xml,%3Csvg width='7' height='7' viewBox='0 0 7 7' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3.5' cy='3.5' r='1' fill='${encodeURIComponent(fill)}'/%3E%3C/svg%3E")`;

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: "-20%", width: "140%", height: "140%",
        opacity: o, mixBlendMode: isDark ? "overlay" : "multiply",
        backgroundImage: svg1, backgroundSize: "8px 8px",
        transform: "rotate(3deg)",
      }} />
      <div style={{
        position: "absolute", inset: "-20%", width: "140%", height: "140%",
        opacity: o, mixBlendMode: isDark ? "overlay" : "multiply",
        backgroundImage: svg2, backgroundSize: "7px 7px",
        transform: "rotate(-4deg)",
      }} />
    </div>
  );
}

function MoireLineTexture({ isDark }) {
  const o = isDark ? 0.15 : 0.10;
  const c = isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.2)";
  const line1 = `repeating-linear-gradient(0deg, transparent, transparent 3px, ${c} 3px, ${c} 3.5px)`;
  const line2 = `repeating-linear-gradient(0deg, transparent, transparent 3.3px, ${c} 3.3px, ${c} 3.8px)`;

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: "-20%", width: "140%", height: "140%",
        opacity: o, mixBlendMode: isDark ? "overlay" : "multiply",
        backgroundImage: line1,
        transform: "rotate(2deg)",
      }} />
      <div style={{
        position: "absolute", inset: "-20%", width: "140%", height: "140%",
        opacity: o, mixBlendMode: isDark ? "overlay" : "multiply",
        backgroundImage: line2,
        transform: "rotate(-3.5deg)",
      }} />
    </div>
  );
}

function HalftoneTexture({ isDark }) {
  const o = isDark ? 0.12 : 0.08;
  const fill = isDark ? "white" : "black";
  return <div style={{
    position: "absolute", inset: 0, pointerEvents: "none",
    opacity: o, mixBlendMode: isDark ? "overlay" : "multiply",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='1' fill='${fill}'/%3E%3C/svg%3E")`,
    backgroundSize: "6px 6px",
  }} />;
}

function LinenTexture({ isDark }) {
  const o = isDark ? 0.1 : 0.07;
  const s = isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.25)";
  return <div style={{
    position: "absolute", inset: 0, pointerEvents: "none",
    opacity: o, mixBlendMode: isDark ? "overlay" : "multiply",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L8 8M8 0L0 8' stroke='${encodeURIComponent(s)}' stroke-width='0.5'/%3E%3C/svg%3E")`,
    backgroundSize: "8px 8px",
  }} />;
}

function ScanlinesTexture({ isDark }) {
  const o = isDark ? 0.1 : 0.06;
  const c = isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.15)";
  return <div style={{
    position: "absolute", inset: 0, pointerEvents: "none",
    opacity: o, mixBlendMode: isDark ? "overlay" : "multiply",
    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${c} 2px, ${c} 3px)`,
    backgroundSize: "100% 3px",
  }} />;
}

function TextureOverlay({ textureId, isDark }) {
  switch (textureId) {
    case "grain-low": return <GrainTexture opacity={0.08} isDark={isDark} />;
    case "grain-med": return <GrainTexture opacity={0.18} isDark={isDark} />;
    case "moire-dot": return <MoireDotTexture isDark={isDark} />;
    case "moire-line": return <MoireLineTexture isDark={isDark} />;
    case "halftone": return <HalftoneTexture isDark={isDark} />;
    case "linen": return <LinenTexture isDark={isDark} />;
    case "scanlines": return <ScanlinesTexture isDark={isDark} />;
    default: return null;
  }
}

function ConnectionCard({ theme }) {
  return (
    <div style={{ background: theme.cardBg, border: `1px solid ${theme.cardBorder}`, borderRadius: 12, padding: "18px 22px", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", width: 256 }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.08em", color: theme.textDim, textTransform: "uppercase", marginBottom: 10 }}>new connection</div>
      <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: theme.textPrimary, letterSpacing: "-0.02em", marginBottom: 5 }}>Sara Chen</div>
      <div style={{ fontFamily: "'Newsreader', serif", fontSize: 13.5, color: theme.textSecondary, lineHeight: 1.5, marginBottom: 14 }}>
        building developer tools at scale.<br />looking for a technical co-founder.
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {["devtools", "co-founder"].map((tag) => (
          <div key={tag} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, padding: "4px 11px", borderRadius: 5, background: `${theme.accent}18`, border: `1px solid ${theme.accent}28`, color: theme.accent }}>{tag}</div>
        ))}
      </div>
    </div>
  );
}

function AgentCard({ theme }) {
  return (
    <div style={{ background: theme.cardBg, border: `1px solid ${theme.cardBorder}`, borderRadius: 12, padding: "18px 22px", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", minWidth: 190 }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.08em", color: theme.textDim, textTransform: "uppercase", marginBottom: 12 }}>your agent</div>
      {[{ label: "scanned", value: "2,847" }, { label: "matches", value: "12" }, { label: "intros", value: "3" }].map((r) => (
        <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "5px 0", gap: 20 }}>
          <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: theme.textSecondary }}>{r.label}</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: theme.textPrimary, fontWeight: 500 }}>{r.value}</span>
        </div>
      ))}
    </div>
  );
}

function MainPreview({ pattern, palette, isDark, textureId }) {
  const theme = isDark ? palette.dark : palette.light;
  const gradient = isDark ? pattern.buildDark(palette) : pattern.buildLight(palette);
  return (
    <div style={{ position: "relative", overflow: "hidden", borderRadius: 16, border: `1px solid ${theme.uiBorder}` }}>
      <div style={{ background: gradient, minHeight: 500, padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
        <TextureOverlay textureId={textureId} isDark={isDark} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 26, letterSpacing: "-0.04em", color: theme.textPrimary, opacity: 0.85, marginBottom: 28 }}>noticed</div>
          <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 42, letterSpacing: "-0.03em", color: theme.textPrimary, lineHeight: 1.1, maxWidth: 440 }}>
            your network is your<br />most underused{" "}
            <em style={{ fontStyle: "italic", color: theme.accent }}>asset</em>
          </div>
          <div style={{ fontFamily: "'Newsreader', serif", fontSize: 16, color: theme.textSecondary, lineHeight: 1.6, marginTop: 16, maxWidth: 380 }}>
            the best professional matches already exist inside your network. they don't happen because both sides are hiding what they actually want.
          </div>
        </div>
        <div style={{ position: "relative", zIndex: 1, marginTop: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <ConnectionCard theme={theme} />
          <AgentCard theme={theme} />
        </div>
      </div>
    </div>
  );
}

function MiniPreview({ pattern, palette, isDark, active, onClick, textureId }) {
  const theme = isDark ? palette.dark : palette.light;
  const gradient = isDark ? pattern.buildDark(palette) : pattern.buildLight(palette);
  return (
    <div onClick={onClick} style={{
      cursor: "pointer", borderRadius: 8, overflow: "hidden",
      border: active ? `2px solid ${isDark ? "rgba(196,181,160,0.45)" : "rgba(26,24,22,0.3)"}` : "2px solid transparent",
      transition: "border-color 0.15s ease",
    }}>
      <div style={{
        background: gradient, aspectRatio: "16/10", position: "relative",
        padding: "10px 12px", display: "flex", flexDirection: "column", justifyContent: "space-between",
      }}>
        <TextureOverlay textureId={textureId} isDark={isDark} />
        <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 11, letterSpacing: "-0.04em", color: theme.textPrimary, opacity: 0.8, position: "relative", zIndex: 1 }}>noticed</div>
        <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 13, letterSpacing: "-0.02em", color: theme.textPrimary, lineHeight: 1.2, position: "relative", zIndex: 1 }}>
          quiet <em style={{ fontStyle: "italic", color: theme.accent }}>networking</em>
        </div>
      </div>
    </div>
  );
}

function ControlPanel({ title, items, activeIdx, onSelect, isDark, theme, renderItem }) {
  return (
    <div style={{ background: theme.uiBg, border: `1px solid ${theme.uiBorder}`, borderRadius: 12, padding: "14px 16px", transition: "all 0.4s ease" }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.1em", color: theme.textDim, textTransform: "uppercase", marginBottom: 8 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {items.map((item, i) => {
          const active = i === activeIdx;
          return (
            <button key={item.id} onClick={() => onSelect(i)} style={{
              textAlign: "left", fontFamily: "'Instrument Sans', sans-serif", fontSize: 13,
              padding: "8px 10px", borderRadius: 6,
              border: active ? `1px solid ${isDark ? "rgba(196,181,160,0.3)" : "rgba(26,24,22,0.15)"}` : "1px solid transparent",
              background: active ? (isDark ? "rgba(196,181,160,0.08)" : "rgba(26,24,22,0.05)") : "transparent",
              color: active ? theme.textPrimary : theme.textSecondary,
              cursor: "pointer", transition: "all 0.15s ease", fontWeight: active ? 600 : 400,
              display: "flex", alignItems: "center", gap: 8,
            }}>
              {renderItem ? renderItem(item, i) : item.title}
            </button>
          );
        })}
      </div>
      <div style={{
        fontFamily: "'Newsreader', serif", fontSize: 12.5, color: theme.textSecondary,
        lineHeight: 1.5, marginTop: 10, paddingTop: 10, borderTop: `1px solid ${theme.uiBorder}`,
      }}>{items[activeIdx].description}</div>
    </div>
  );
}

export default function Explorer() {
  const [patIdx, setPatIdx] = useState(1);
  const [palIdx, setPalIdx] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [texIdx, setTexIdx] = useState(3);

  const pattern = patterns[patIdx];
  const palette = palettes[palIdx];
  const texture = textures[texIdx];
  const theme = isDark ? palette.dark : palette.light;

  return (
    <div style={{
      minHeight: "100vh", background: isDark ? "#0a0a0a" : "#f7f5f2",
      color: isDark ? "#f0ede8" : "#1a1816", fontFamily: "'Instrument Sans', sans-serif",
      transition: "background 0.4s ease, color 0.4s ease",
    }}>


      <div style={{ maxWidth: 900, margin: "0 auto", padding: "36px 28px 60px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.1em", color: theme.textDim, textTransform: "uppercase", marginBottom: 6 }}>
              {patterns.length} patterns × {palettes.length} palettes × {textures.length} textures × 2 modes
            </div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, letterSpacing: "-0.03em" }}>
              art direction <em style={{ fontStyle: "italic" }}>explorer</em>
            </div>
          </div>
          <div style={{ display: "flex", background: theme.uiBg, border: `1px solid ${theme.uiBorder}`, borderRadius: 8, overflow: "hidden" }}>
            {["dark", "light"].map((mode) => {
              const isActive = (mode === "dark" && isDark) || (mode === "light" && !isDark);
              return (
                <button key={mode} onClick={() => setIsDark(mode === "dark")} style={{
                  fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, padding: "8px 18px", border: "none",
                  background: isActive ? (isDark ? "rgba(196,181,160,0.1)" : "rgba(26,24,22,0.07)") : "transparent",
                  color: isActive ? theme.textPrimary : theme.textDim,
                  cursor: "pointer", fontWeight: isActive ? 600 : 400, transition: "all 0.15s ease",
                }}>{mode}</button>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 28 }}>
          <ControlPanel title="pattern" items={patterns} activeIdx={patIdx} onSelect={setPatIdx} isDark={isDark} theme={theme} />
          <ControlPanel
            title="palette" items={palettes} activeIdx={palIdx} onSelect={setPalIdx} isDark={isDark} theme={theme}
            renderItem={(item) => (
              <>
                <div style={{ display: "flex", gap: 2, flexShrink: 0 }}>
                  {(isDark ? [item.glow1, item.glow2, item.glow3] : [item.lightGlow1, item.lightGlow2, item.lightGlow3]).map((c, ci) => (
                    <div key={ci} style={{ width: 12, height: 12, borderRadius: 3, background: c }} />
                  ))}
                </div>
                {item.title}
              </>
            )}
          />
          <ControlPanel title="texture" items={textures} activeIdx={texIdx} onSelect={setTexIdx} isDark={isDark} theme={theme} />
        </div>

        {/* Main preview */}
        <MainPreview pattern={pattern} palette={palette} isDark={isDark} textureId={texture.id} />

        {/* Swatches */}
        <div style={{
          background: theme.uiBg, border: `1px solid ${theme.uiBorder}`, borderRadius: 10,
          padding: "14px 18px", marginTop: 20, display: "flex", alignItems: "center", gap: 20,
          transition: "all 0.4s ease",
        }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.1em", color: theme.textDim, textTransform: "uppercase", flexShrink: 0 }}>
            {isDark ? "dark" : "light"}
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {(isDark
              ? [{ color: palette.glow1, label: "glow1" }, { color: palette.glow2, label: "glow2" }, { color: palette.glow3, label: "glow3" }, { color: palette.dark.accent, label: "accent" }, { color: palette.dark.textPrimary, label: "text" }, { color: palette.dark.textSecondary, label: "muted" }, { color: palette.dark.bg2, label: "surface" }]
              : [{ color: palette.lightGlow1, label: "glow1" }, { color: palette.lightGlow2, label: "glow2" }, { color: palette.lightGlow3, label: "glow3" }, { color: palette.light.accent, label: "accent" }, { color: palette.light.textPrimary, label: "text" }, { color: palette.light.textSecondary, label: "muted" }, { color: palette.light.bg2, label: "surface" }]
            ).map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ width: 36, height: 36, borderRadius: 6, background: s.color, border: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.08)"}`, marginBottom: 4 }} />
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: theme.textDim }}>{s.color}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3×3 grid */}
        <div style={{ marginTop: 28 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.1em", color: theme.textDim, textTransform: "uppercase", marginBottom: 10 }}>
            all 9 — {isDark ? "dark" : "light"} / {texture.title}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "68px repeat(3, 1fr)", gridTemplateRows: "22px repeat(3, auto)", gap: 6, alignItems: "center" }}>
            <div />
            {palettes.map((p) => (
              <div key={p.id} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: theme.textDim, textAlign: "center" }}>{p.title}</div>
            ))}
            {patterns.map((pat, pi) => (
              <>
                <div key={`lbl-${pat.id}`} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: theme.textDim, textAlign: "right", paddingRight: 8 }}>{pat.title}</div>
                {palettes.map((pal, pali) => (
                  <MiniPreview
                    key={`${pat.id}-${pal.id}`}
                    pattern={pat} palette={pal} isDark={isDark}
                    active={pi === patIdx && pali === palIdx}
                    onClick={() => { setPatIdx(pi); setPalIdx(pali); }}
                    textureId={texture.id}
                  />
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
