import { useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    el.querySelectorAll(".reveal").forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef}>
      <nav className="top">
        <div className="inner">
          <div className="brand">
            <div>
              <div className="mark">RED</div>
              <small>REFINE EVERY DETAIL</small>
            </div>
          </div>
          <div className="links">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#preview">Preview</a>
            <a href="#pricing">Pricing</a>
            <a href="#install">Install</a>
          </div>
          <a href="RED-v1.0.0.zip" download="RED-v1.0.0.zip" className="pill-btn">
            ↓ Download
          </a>
        </div>
      </nav>

      <div className="wrap">
        <div className="hero-grid reveal">
          <div className="card thick hero-left">
            <div className="caps">v1.0.0 · Chrome · Manifest V3</div>
            <div className="hero-lockup">
              <h1 className="hero">RED</h1>
              <div className="hero-sub" aria-label="Refine Every Detail">
                <span>R</span><span>E</span><span>F</span><span>I</span><span>N</span><span>E</span>
                <span className="dot">·</span>
                <span>E</span><span>V</span><span>E</span><span>R</span><span>Y</span>
                <span className="dot">·</span>
                <span>D</span><span>E</span><span>T</span><span>A</span><span>I</span><span>L</span>
              </div>
            </div>
            <p className="tag">Your prompts, refined. Instantly.</p>
            <p className="body">
              Real-time analysis. AI-powered rewrites. Score your prompts before you send them —
              right inside any AI chat interface.
            </p>
            <div className="cta-row">
              <a href="RED-v1.0.0.zip" download="RED-v1.0.0.zip" className="btn btn-primary">
                ⬇ Download v1.0.0 — Free
              </a>
              <a href="https://github.com/mihirzoting/RED" className="btn btn-outline">
                View on GitHub →
              </a>
            </div>
            <div className="meta-row">
              <span><i></i>100% local scoring</span>
              <span><i style={{ background: "var(--indigo)" }}></i>AI refines built-in</span>
              <span><i style={{ background: "var(--amber)" }}></i>No signup to try</span>
            </div>
          </div>

          <div className="card thick score-panel tint-teal">
            <div className="score-head">
              <div>
                <div className="caps-sm">LIVE PROMPT SCORE</div>
                <div className="h-sm" style={{ marginTop: 6 }}>Sample analysis</div>
              </div>
              <div className="caps-sm" style={{ color: "var(--teal)" }}>● ACTIVE</div>
            </div>
            <div className="score-row">
              <div className="score-ring" style={{ "--p": 81, "--color": "var(--teal)" } as React.CSSProperties}>
                <div className="n">81</div>
                <div className="l">SCORE</div>
              </div>
              <div className="metrics">
                <div className="metric teal">
                  <span>CLARITY</span>
                  <div className="bar"><span style={{ width: "100%", animationDelay: ".1s" }}></span></div>
                  <div className="val">100</div>
                </div>
                <div className="metric red">
                  <span>CONTEXT</span>
                  <div className="bar"><span style={{ width: "40%", animationDelay: ".25s" }}></span></div>
                  <div className="val">40</div>
                </div>
                <div className="metric teal">
                  <span>EFFICIENCY</span>
                  <div className="bar"><span style={{ width: "100%", animationDelay: ".4s" }}></span></div>
                  <div className="val">100</div>
                </div>
                <div className="metric teal">
                  <span>SPECIFICITY</span>
                  <div className="bar"><span style={{ width: "85%", animationDelay: ".55s" }}></span></div>
                  <div className="val">85</div>
                </div>
              </div>
            </div>
            <div className="tier teal">HIGH ≥ 80 · GOOD</div>
            <p className="muted" style={{ fontSize: 13 }}>
              3 of 4 metrics at target. Context at 40 — add background to reach 90+.
            </p>

            <div className="panel-refine">
              <div className="refine-label"><span className="ic">✦</span> AI REFINE · ONE CLICK</div>
              <div className="refine-weak">"help me write a blog post"</div>
              <div className="refine-flow"><span className="ar">↻</span> REFINED IN-CHAT</div>
              <div className="refine-strong">
                "Write a 600-word blog post on [topic] for beginners. Include a hook, 3 subheadings,
                and a CTA. Tone: friendly, practical."
              </div>
              <div className="refine-foot">
                <span className="ext-badge">+46 PTS</span> 38 → 84 · paste back with one click
              </div>
            </div>
          </div>
        </div>

        <section id="download" style={{ marginTop: 60 }}>
          <div className="card xthick accent-left dl-card reveal tint-indigo">
            <div className="num">01</div>
            <div className="caps">DOWNLOAD · FREE FOREVER</div>
            <h2 className="h-section" style={{ marginTop: 10 }}>Install RED in 60 seconds.</h2>
            <p className="lead muted" style={{ marginTop: 10, maxWidth: 640 }}>
              No Web Store. No review wait. Download the ZIP, load it in Chrome, and start refining.
            </p>
            <div style={{ marginTop: 26, maxWidth: 520 }}>
              <a href="RED-v1.0.0.zip" download="RED-v1.0.0.zip" className="btn btn-primary btn-block">
                ⬇ Download RED v1.0.0 — Free
              </a>
              <div className="dl-meta">
                <span>● Chrome Extension</span>
                <span>● Manifest V3</span>
                <span>● ~2.4 MB</span>
              </div>
              <div className="counter">↓ 312 installs</div>
            </div>
            <p className="muted" style={{ marginTop: 22, fontSize: 13 }}>
              Prefer Git? Clone from{" "}
              <a href="https://github.com/mihirzoting/RED" style={{ borderBottom: "1px solid var(--ink)" }}>
                github.com/mihirzoting/RED
              </a>
            </p>
          </div>
        </section>

        <section id="features">
          <div className="sec-head reveal">
            <div>
              <div className="caps">02 / WHAT IT DOES</div>
              <h2 className="h-section" style={{ marginTop: 8 }}>Six sharp features. Zero bloat.</h2>
            </div>
            <p className="muted" style={{ maxWidth: 320, fontSize: 14 }}>
              Every part of RED is designed to make your prompts measurably better — locally,
              instantly, without leaving your chat window.
            </p>
          </div>

          <div className="f-grid">
            <div className="card thick f1 reveal tint-blue">
              <div className="caps-sm">01 · REAL-TIME ANALYSIS</div>
              <h3 className="h-card" style={{ margin: "10px 0 12px" }}>
                Runs 100% locally. Zero API calls.
              </h3>
              <p className="muted">
                Detects vague words, filler words, run-on sentences, missing context, and ambiguous
                references — results appear within <b style={{ color: "var(--ink)" }}>500 ms</b> of
                typing.
              </p>
              <div className="chips">
                <span className="chip warn">Vague words</span>
                <span className="chip warn">Filler</span>
                <span className="chip info">Run-on</span>
                <span className="chip info">Missing context</span>
              </div>
            </div>

            <div className="card thick f2 reveal">
              <div className="caps-sm">02 · 4 SCORE METRICS</div>
              <h3 className="h-card" style={{ margin: "10px 0 4px" }}>One score. Four lenses.</h3>
              <ul className="metric-list">
                <li className="teal">
                  <h4>CLARITY</h4>
                  <p>Penalizes vague words and run-on sentences. Rewards specific language.</p>
                  <div className="rail" style={{ "--w": "92%" } as React.CSSProperties}></div>
                </li>
                <li className="indigo">
                  <h4>CONTEXT RICHNESS</h4>
                  <p>Checks if your prompt gives enough background. Flags short or ambiguous prompts.</p>
                  <div className="rail" style={{ "--w": "70%" } as React.CSSProperties}></div>
                </li>
                <li className="amber">
                  <h4>TOKEN EFFICIENCY</h4>
                  <p>Measures filler word density. Clean prompts score higher.</p>
                  <div className="rail" style={{ "--w": "80%" } as React.CSSProperties}></div>
                </li>
                <li className="red">
                  <h4>SPECIFICITY</h4>
                  <p>Rewards numbers, proper nouns, code references. Penalizes vague language.</p>
                  <div className="rail" style={{ "--w": "66%" } as React.CSSProperties}></div>
                </li>
              </ul>
              <p className="muted" style={{ fontSize: 12, borderTop: "1px solid var(--soft-line)", paddingTop: 10 }}>
                Overall score = average of all 4 · 0–100
              </p>
            </div>

            <div className="card thick f3 reveal tint-amber">
              <div className="caps-sm">03 · TOKEN COUNTER</div>
              <div className="serif" style={{ fontSize: 36, fontWeight: 800, margin: "14px 0 4px", letterSpacing: "-.02em" }}>
                36<span style={{ fontSize: 16, color: "var(--muted)", fontWeight: 500 }}> tokens</span>
              </div>
              <div style={{ fontFamily: "ui-monospace,monospace", fontSize: 13, color: "var(--indigo)" }}>
                $0.000029
              </div>
              <p className="muted" style={{ fontSize: 13, marginTop: 14 }}>Know your cost before you send.</p>
            </div>

            <div className="card thick f4 reveal tint-teal">
              <div className="caps-sm">04 · WORKS OFFLINE</div>
              <div style={{ fontSize: 36, margin: "14px 0 4px" }}>⌀</div>
              <h3 className="h-sm">No internet needed for scoring.</h3>
              <p className="muted" style={{ fontSize: 13, marginTop: 8 }}>
                Local analysis runs 100% in your browser. Your prompts never leave your machine unless
                you refine.
              </p>
            </div>

            <div className="card thick f5 reveal tint-pink">
              <div className="caps-sm">05 · ISSUE DETECTION</div>
              <h3 className="h-sm" style={{ margin: "10px 0 12px" }}>Flagged inline. As you type.</h3>
              <div className="chips">
                <span className="chip warn">⚠ Missing context</span>
                <span className="chip warn">⚠ Filler words</span>
                <span className="chip info">ℹ Short prompt</span>
              </div>
              <p className="muted" style={{ fontSize: 13, marginTop: 14 }}>
                No waiting. No modal. Chips update the moment you pause typing.
              </p>
            </div>

            <div className="card xthick f6 reveal tint-indigo">
              <div className="caps-sm">06 · AI-POWERED REFINE</div>
              <h3 className="h-card" style={{ margin: "10px 0 6px" }}>
                One click. Rewritten. Streamed back.
              </h3>
              <p className="muted">
                Send a weak prompt, get a stronger one. RED rewrites in place — you paste it back with
                a click.
              </p>
              <div className="before-after">
                <div className="ba-box">
                  <span className="lb">BEFORE</span>
                  "explain this to me in detail please and also make it simpler"
                  <div className="ba-score red">SCORE 41 / 100 · LOW</div>
                </div>
                <div className="ba-arrow">→</div>
                <div className="ba-box after">
                  <span className="lb">AFTER · REFINED</span>
                  "Break down [topic] into simple terms. Use an analogy for the core concept, then
                  provide a step-by-step explanation at a beginner level."
                  <div className="ba-score teal">SCORE 86 / 100 · +45 PTS</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how">
          <div className="sec-head reveal">
            <div>
              <div className="caps">03 / HOW IT WORKS</div>
              <h2 className="h-section" style={{ marginTop: 8 }}>Three steps. Under a second.</h2>
            </div>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="n">01</div>
              <h3>Type your prompt</h3>
              <p>
                Start typing in any AI chat interface. RED detects your input automatically — no
                shortcuts, no setup.
              </p>
            </div>
            <div className="step reveal">
              <div className="n">02</div>
              <h3>RED scores it instantly</h3>
              <p>
                4 metrics. Overall score. Issue chips. Token count. All in under 500 ms. Runs entirely
                in your browser.
              </p>
            </div>
            <div className="step reveal">
              <div className="n">03</div>
              <h3>Refine with one click</h3>
              <p>
                Click Refine. RED rewrites your prompt using AI. Stream the result in real time. Paste
                it back with one click.
              </p>
            </div>
          </div>
        </section>

        <section id="preview">
          <div className="sec-head reveal">
            <div>
              <div className="caps">04 / EXTENSION PREVIEW</div>
              <h2 className="h-section" style={{ marginTop: 8 }}>What it looks like.</h2>
            </div>
            <p className="muted" style={{ maxWidth: 340, fontSize: 14 }}>
              Real UI, recreated in pure HTML/CSS. The floating panel sits in the corner of any AI
              chat surface.
            </p>
          </div>

          <div className="preview-stage reveal">
            <div className="panels">
              <div className="ext-panel">
                <div className="ext-head">
                  <div className="ext-logo">RED</div>
                  <div className="ext-icons">
                    <div className="ext-ico">⚙</div>
                    <div className="ext-ico">↻</div>
                  </div>
                </div>
                <div className="ext-tag">REFINE EVERY DETAIL</div>
                <div className="ext-scorerow">
                  <div className="score-ring" style={{ "--p": 66, "--color": "var(--amber)" } as React.CSSProperties}>
                    <div className="n">66</div><div className="l">SCORE</div>
                  </div>
                  <div className="ext-metrics">
                    <div className="metric teal"><span>CLARITY</span><div className="bar"><span style={{ width: "82%" }}></span></div><div className="val">82</div></div>
                    <div className="metric amber"><span>CONTEXT</span><div className="bar"><span style={{ width: "64%" }}></span></div><div className="val">64</div></div>
                    <div className="metric amber"><span>EFFICIENCY</span><div className="bar"><span style={{ width: "71%" }}></span></div><div className="val">71</div></div>
                    <div className="metric red"><span>SPECIFICITY</span><div className="bar"><span style={{ width: "48%" }}></span></div><div className="val">48</div></div>
                  </div>
                </div>
                <div className="ext-tier" style={{ color: "var(--amber)" }}>MED ≥ 50 · WARNING</div>
                <p className="ext-summary">Improve specificity — add concrete numbers, dataset names, or an example.</p>
                <div className="ext-section-label"><span>✦ PROMPT</span></div>
                <div className="ext-input">analyze my past prompts to find patterns</div>
                <div className="ext-token">9 tokens · $0.0000072</div>
                <div className="ext-section-label"><span>✦ ISSUES 2</span></div>
                <div className="ext-chips">
                  <span className="chip warn">Missing output format</span>
                  <span className="chip info">Specify dataset scope</span>
                </div>
                <div className="ext-controls">
                  <span>DEEP</span><div className="toggle off"></div>
                  <span style={{ marginLeft: 6 }}>STYLE</span>
                  <select className="ext-select"><option>Default</option></select>
                </div>
                <div className="ext-section-label"><span>✦ REFINED PROMPT</span></div>
                <div className="ext-input placeholder">Waiting for input…</div>
                <div className="ext-buttons">
                  <div className="ext-btn ghost">Paste</div>
                  <div className="ext-btn primary">Re-refine</div>
                </div>
              </div>

              <div className="ext-panel">
                <div className="ext-head">
                  <div className="ext-logo">RED</div>
                  <div className="ext-icons">
                    <div className="ext-ico">⚙</div>
                    <div className="ext-ico">↻</div>
                  </div>
                </div>
                <div className="ext-tag">REFINE EVERY DETAIL</div>
                <div className="ext-scorerow">
                  <div className="score-ring" style={{ "--p": 81, "--color": "var(--teal)" } as React.CSSProperties}>
                    <div className="n">81</div><div className="l">SCORE</div>
                  </div>
                  <div className="ext-metrics">
                    <div className="metric teal"><span>CLARITY</span><div className="bar"><span style={{ width: "100%" }}></span></div><div className="val">100</div></div>
                    <div className="metric red"><span>CONTEXT</span><div className="bar"><span style={{ width: "40%" }}></span></div><div className="val">40</div></div>
                    <div className="metric teal"><span>EFFICIENCY</span><div className="bar"><span style={{ width: "100%" }}></span></div><div className="val">100</div></div>
                    <div className="metric teal"><span>SPECIFICITY</span><div className="bar"><span style={{ width: "85%" }}></span></div><div className="val">85</div></div>
                  </div>
                </div>
                <div className="ext-tier" style={{ color: "var(--teal)" }}>HIGH ≥ 80 · GOOD</div>
                <p className="ext-summary">3 of 4 metrics at target. Context at 40 — needs improvement.</p>
                <div className="ext-section-label"><span>✦ PROMPT</span></div>
                <div className="ext-input">refine my prompt</div>
                <div className="ext-token">4 tokens · $0.000003</div>
                <div className="ext-section-label"><span>✦ ISSUES 2</span></div>
                <div className="ext-chips">
                  <span className="chip warn">Missing context</span>
                  <span className="chip info">Short prompt</span>
                </div>
                <div className="ext-controls">
                  <span>DEEP</span><div className="toggle"></div>
                  <span style={{ marginLeft: 6 }}>STYLE</span>
                  <select className="ext-select"><option>Detailed</option></select>
                </div>
                <div className="ext-section-label"><span>✦ REFINED PROMPT</span><span className="ext-badge">+15 PTS</span></div>
                <div className="ext-refined">
                  Please provide the original prompt you would like me to refine, and I will rephrase
                  it to be clearer, more specific, and more effective while maintaining the original
                  intent.
                </div>
                <div className="ext-buttons">
                  <div className="ext-btn ghost">Paste</div>
                  <div className="ext-btn primary">Re-refine</div>
                </div>
              </div>

              <div className="ext-panel">
                <div className="hist-back">←</div>
                <div className="ext-head">
                  <div className="ext-logo">RED</div>
                </div>
                <div className="ext-tag">REFINE EVERY DETAIL</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
                  <div style={{ background: "var(--cream-2)", padding: "8px 10px", borderRadius: 6 }}>
                    <div className="caps-sm" style={{ fontSize: 8 }}>AVG SCORE</div>
                    <div className="serif" style={{ fontWeight: 800, fontSize: 22 }}>92</div>
                  </div>
                  <div style={{ background: "var(--cream-2)", padding: "8px 10px", borderRadius: 6 }}>
                    <div className="caps-sm" style={{ fontSize: 8 }}>PROMPTS</div>
                    <div className="serif" style={{ fontWeight: 800, fontSize: 22 }}>5</div>
                  </div>
                  <div style={{ background: "var(--cream-2)", padding: "8px 10px", borderRadius: 6 }}>
                    <div className="caps-sm" style={{ fontSize: 8 }}>TOKENS SAVED</div>
                    <div className="serif" style={{ fontWeight: 800, fontSize: 22 }}>232</div>
                  </div>
                  <div style={{ background: "var(--cream-2)", padding: "8px 10px", borderRadius: 6 }}>
                    <div className="caps-sm" style={{ fontSize: 8 }}>REFINEMENTS</div>
                    <div className="serif" style={{ fontWeight: 800, fontSize: 22 }}>0</div>
                  </div>
                </div>
                <div className="ext-section-label"><span>✦ RECENT PROMPTS</span></div>
                <div className="hist-row">
                  <div className="hist-score">100</div>
                  <div className="txt">i guess some of the info in this prom…<div className="meta">13 min ago · 41 tok</div></div>
                </div>
                <div className="hist-row">
                  <div className="hist-score">81</div>
                  <div className="txt">i want a download feature form whe…<div className="meta">17 min ago · 20 tok</div></div>
                </div>
                <div className="hist-row">
                  <div className="hist-score">100</div>
                  <div className="txt">Create a minimalist Brutalist-inspir…<div className="meta">19 min ago · 157 tok</div></div>
                </div>
                <div className="hist-row">
                  <div className="hist-score amber">81</div>
                  <div className="txt">what should i add here for my exten…<div className="meta">32 min ago · 9 tok</div></div>
                </div>
                <div className="upgrade-banner">✦ Upgrade to Premium for full analytics →</div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing">
          <div className="sec-head reveal">
            <div>
              <div className="caps">05 / PRICING</div>
              <h2 className="h-section" style={{ marginTop: 8 }}>Free forever. Or lifetime, once.</h2>
            </div>
            <p className="muted" style={{ maxWidth: 340, fontSize: 14 }}>
              No subscriptions. No trials that lapse. Pay once for Premium and own it.
            </p>
          </div>
          <div className="price-grid">
            <div className="card thick price-card reveal">
              <div className="badge" style={{ background: "transparent", color: "var(--ink)", border: "1px solid var(--ink)" }}>FREE</div>
              <h3 className="h-card" style={{ marginTop: 12 }}>Free</h3>
              <div className="price-num">₹0 <small>forever</small></div>
              <ul>
                <li>Unlimited local analysis</li>
                <li>4 score metrics in real time</li>
                <li>Token count + cost estimate</li>
                <li>Issue detection + inline highlights</li>
                <li>10 AI refines per day</li>
                <li>2 free re-refines per prompt</li>
                <li>Session history (up to 20 prompts)</li>
              </ul>
              <a href="RED-v1.0.0.zip" download="RED-v1.0.0.zip" className="btn btn-outline btn-block">⬇ Download Free</a>
            </div>
            <div className="card xthick accent-left price-card reveal tint-indigo" style={{ position: "relative" }}>
              <div className="badge indigo">LIFETIME ACCESS</div>
              <h3 className="h-card" style={{ marginTop: 12 }}>Premium</h3>
              <div className="price-num"><span className="strike">₹1499</span>₹999 <small>one-time · lifetime</small></div>
              <ul style={{ columns: 2, columnGap: 32 }}>
                <li>Everything in Free</li>
                <li>300 AI refines per day (30×)</li>
                <li>Priority routing — races 2 AI providers</li>
                <li>Deep refine mode (larger, smarter models)</li>
                <li>4 refine styles: Default, Concise, Detailed, Code-focused</li>
                <li>Persistent history in cloud</li>
                <li>Analytics dashboard + score trends</li>
                <li>Export history as CSV</li>
              </ul>
              <a href="https://rzp.io/i/upgrade-red" className="btn btn-primary btn-block">Get Lifetime Access →</a>
              <p className="muted" style={{ fontSize: 12, marginTop: 12, textAlign: "center" }}>
                One-time payment. No subscription. No renewal ever.
              </p>
            </div>
          </div>
        </section>

        <section id="install">
          <div className="sec-head reveal">
            <div>
              <div className="caps">06 / INSTALLATION</div>
              <h2 className="h-section" style={{ marginTop: 8 }}>Eight steps. Two minutes.</h2>
            </div>
            <a href="RED-v1.0.0.zip" download="RED-v1.0.0.zip" className="btn btn-primary">⬇ Grab the ZIP first</a>
          </div>
          <div className="install-grid">
            <div className="install-step reveal"><div className="n">01</div><h4>Download the ZIP</h4><p>Click the download button above. File: <b>RED-v1.0.0.zip</b> (~2.4 MB).</p></div>
            <div className="install-step reveal"><div className="n">02</div><h4>Unzip the file</h4><p>Extract RED-v1.0.0.zip to a permanent folder on your computer.</p></div>
            <div className="install-step reveal"><div className="n">03</div><h4>Open Chrome Extensions</h4><p>Go to <span className="kbd">chrome://extensions</span> in your Chrome browser.</p></div>
            <div className="install-step reveal"><div className="n">04</div><h4>Enable Developer Mode</h4><p>Toggle <b>Developer mode</b> in the top-right corner of the page.</p></div>
            <div className="install-step reveal"><div className="n">05</div><h4>Load Unpacked</h4><p>Click <b>Load unpacked</b> and select the unzipped RED folder.</p></div>
            <div className="install-step reveal"><div className="n">06</div><h4>Pin to toolbar</h4><p>Click the puzzle piece icon → find RED → click the pin icon.</p></div>
            <div className="install-step reveal"><div className="n">07</div><h4>Sign up free</h4><p>Click the RED icon → create a free account with email or Google.</p></div>
            <div className="install-step reveal"><div className="n">08</div><h4>Start refining</h4><p>Open any AI chat interface and start typing. RED activates automatically.</p></div>
          </div>
          <div className="warn-card reveal">
            ⚠ <b>Important:</b> Keep the RED folder in a permanent location. Moving it after loading
            will break the extension.
          </div>
        </section>

        <section>
          <div className="card thin reveal" style={{ padding: 32 }}>
            <div className="caps">07 / BUILT WITH</div>
            <h3 className="h-sm" style={{ marginTop: 8 }}>A lean, edge-first stack.</h3>
            <div className="tech-list">
              <span>Manifest V3</span>
              <span>Vanilla JS</span>
              <span>Supabase · Auth + DB + Edge Functions</span>
              <span>Groq</span>
              <span>Gemini</span>
              <span>OpenRouter</span>
              <span>gpt-tokenizer · local</span>
              <span>Chart.js</span>
              <span>Tabler Icons</span>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div>RED — Refine Every Detail · v1.0.0</div>
        <div>
          Built by Mihir Zoting ·{" "}
          <a href="https://github.com/mihirzoting/RED" style={{ borderBottom: "1px solid var(--ink)" }}>
            github.com/mihirzoting/RED
          </a>
        </div>
      </footer>
    </div>
  );
}
