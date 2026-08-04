import React, { useEffect, useRef } from "react";

/* ============================================================
   HX COACH — HR PRACTITIONER PAGE
   Paid coaching booking + tools featured on The HX Podcast

   EDIT EVERYTHING IN THIS BLOCK. Nothing below it needs touching.
   ============================================================ */

/* --- 1. LINKS -------------------------------------------------
   Replace the PAID links once you've created the paid event types
   in Calendly. Until then they fall back to your free 30 min link
   so nothing on the page is broken.                              */
const FREE_CALL = "https://calendly.com/staciebaird/30min";

const LINKS = {
  intro:      "https://calendly.com/staciebaird/free-coaching-introduction",                                  // TODO: 15 minute free event
  aLaCarte:   "https://calendly.com/staciebaird/single-coaching-session",   // TODO: paid 45 minute event
  inYourCorner: "https://calendly.com/staciebaird/30min", // TODO: Calendly meeting package, 3 sessions
  podcast:    "https://staciebaird.com/podcast",                                        // TODO: podcast landing URL
  test4trust: "https://leadwithtrust.com",                // TODO: direct Test4Trust URL
};

/* --- 2. COACHING OPTIONS -------------------------------------
   Change amount + cadence + desc freely.
   Set featured: true on the one you want visually anchored.      */
const SESSIONS = [
  {
    tag: "Start Here",
    name: "Intro Consultation",
    amount: "Free",
    cadence: "15 minutes",
    desc: "Tell me what's going on and I'll tell you straight whether I'm the right person for it. No pitch, no pressure, no follow up sequence.",
    cta: "Grab 15 minutes",
    href: LINKS.intro,
    featured: false,
  },
  {
    tag: "A La Carte",
    name: "Single Session",
    amount: "$300",
    cadence: "45 minutes, plus 15 minutes of pre work",
    desc: "You send the situation ahead of time and I come in already up to speed. That's what the pre work buys you — the 45 minutes go to solving it, not explaining it.",
    cta: "Book a session",
    href: LINKS.aLaCarte,
    featured: false,
  },
  {
    tag: "Best Value",
    name: "In Your Corner",
    amount: "$800",
    cadence: "3 sessions, plus full toolkit access",
    desc: "For the stretch that has a shape to it — a reorg, a first 90 days, a system you're standing up. Three sessions used on your timeline, plus every project and change management toolkit I use with clients.",
    cta: "Start In Your Corner",
    href: LINKS.inYourCorner,
    featured: true,
  },
];

/* --- 3. WHAT WE ACTUALLY WORK ON ----------------------------- */
const TOPICS = [
  "Your first 90 days in a seat, now what?",
  "Building the business case your CFO will support",
  "Running a team through a transition",
  "Where AI belongs, and where does not",
  "Managing up to a CEO who thinks HR is tactical",
  "The succession conversation the board wants",
  "Deciding whether to stay, negotiate, or go",
];

/* --- 4. TOOLS FROM THE PODCAST -------------------------------
   status: "live" | "soon"
   Add a new object here and the card appears. No layout edits.   */
const TOOLS = [
  {
    label: "Assessment",
    title: "Test4Trust™",
    from: "Lead With Trust",
    desc: "Where trust is actually breaking on your team, measured rather than guessed at. Individual and team views.",
    href: LINKS.test4trust,
    cta: "Take the assessment",
    status: "live",
  },
  {
    label: "Worksheet",
    title: "The Judgment Audit",
    from: "The AI Headcount Trap, Episode 1",
    desc: "Before you cut a role for something AI can do, this walks you through what judgment walks out with it. One page, seven questions.",
    href: "#",
    cta: "Download",
    status: "soon",
  },
  {
    label: "Checklist",
    title: "Escalation Instinct Check",
    from: "The AI Headcount Trap, Episode 2",
    desc: "Three signs your frontline sensor is gone, plus what to look at in your own ticket data this week.",
    href: "#",
    cta: "Download",
    status: "soon",
  },
  {
    label: "Framework",
    title: "The HX Frame™",
    from: "The HX Podcast",
    desc: "Human Design Intent, AI Field, Human Judgment. The working version you can run a real process through.",
    href: "#",
    cta: "Get the frame",
    status: "soon",
  },
];

/* --- 5. FAQ -------------------------------------------------- */
const FAQ = [
  {
    q: "Is this coaching or consulting?",
    a: "Coaching. You stay in the seat and keep the decision. I'm the person you think out loud with before you make it. If what you need is someone to build the function, that's the fractional CPO work and it lives on the main site.",
  },
  {
    q: "Does my employer need to know?",
    a: "No. These sessions are yours. Plenty of people pay out of pocket precisely so the conversation belongs to them. If your company has a development budget and you want an invoice, just ask and you'll get one.",
  },
  {
    q: "What happens in the first session?",
    a: "You send the situation ahead of time and I spend 15 minutes with it before we meet. That way the 45 minutes go to working the problem rather than catching me up. You leave with a next move you can make this week.",
  },
  {
    q: "What are the toolkits?",
    a: "The project and change management templates I use inside client engagements — rollout plans, stakeholder maps, communication sequences, readiness checks. They come with In Your Corner and they're yours to keep and reuse.",
  },
  {
    q: "What if I need to reschedule?",
    a: "Move it yourself from your confirmation email up to 24 hours ahead, no charge. Inside 24 hours, email me and we'll work it out.",
  },
];

/* ============================================================
   END OF EDIT BLOCK
   ============================================================ */

export default function HRPage() {
  const toolsRef = useRef(null);
  const bookRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollTo = (ref) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const open = (href) => {
    if (!href || href === "#") return;
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="hrx-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Karla:wght@300;400;500;600&display=swap');

        /* Your App.jsx injects the global body reset, and it unmounts when this
           page renders instead — so this page carries its own. */
        html,body{margin:0;padding:0;background:#F5F1E8;}

        .hrx-page {
          --navy:#13243A;
          --navy-soft:#1D3350;
          --gold:#C9A44C;
          --cream:#F5F1E8;
          --ink:#2A3441;
          --muted:#6B7684;
          --line:rgba(19,36,58,0.12);
          background:var(--cream);
          color:var(--ink);
          font-family:'Karla',sans-serif;
          font-size:17px;
          line-height:1.65;
          min-height:100vh;
          -webkit-font-smoothing:antialiased;
        }
        .hrx-page *{box-sizing:border-box;}
        .hrx-wrap{max-width:1080px;margin:0 auto;padding:0 28px;}
        .hrx-page a{color:inherit;}

        /* ---- top bar ---- */
        .hrx-bar{
          border-bottom:1px solid var(--line);
          background:rgba(245,241,232,0.92);
          backdrop-filter:blur(8px);
          position:sticky;top:0;z-index:50;
        }
        .hrx-bar-in{
          display:flex;align-items:center;justify-content:space-between;
          gap:16px;padding:16px 28px;max-width:1080px;margin:0 auto;
        }
        .hrx-mark{
          font-family:'Cormorant Garamond',serif;font-size:22px;
          color:var(--navy);text-decoration:none;letter-spacing:0.02em;
        }
        .hrx-mark span{color:var(--gold);font-style:italic;}
        .hrx-bar-links{display:flex;align-items:center;gap:22px;}
        .hrx-bar-links button{
          background:none;border:none;padding:0;cursor:pointer;
          font-family:'Karla',sans-serif;font-size:13.5px;font-weight:500;
          letter-spacing:0.06em;text-transform:uppercase;color:var(--muted);
        }
        .hrx-bar-links button:hover{color:var(--navy);}
        .hrx-bar-links a.hrx-home{
          font-size:13.5px;font-weight:500;letter-spacing:0.06em;
          text-transform:uppercase;color:var(--muted);text-decoration:none;
        }
        .hrx-bar-links a.hrx-home:hover{color:var(--navy);}

        /* ---- shared bits ---- */
        .hrx-eyebrow{
          font-size:12.5px;font-weight:600;letter-spacing:0.16em;
          text-transform:uppercase;color:var(--gold);margin-bottom:18px;
        }
        .hrx-h2{
          font-family:'Cormorant Garamond',serif;font-weight:400;
          font-size:clamp(30px,4vw,44px);line-height:1.15;color:var(--navy);
          margin:0 0 18px;letter-spacing:-0.01em;
        }
        .hrx-h2 em{font-style:italic;color:var(--gold);}
        .hrx-lede{font-size:18px;color:var(--muted);max-width:640px;margin:0 0 44px;}
        .hrx-sec{padding:88px 0;border-top:1px solid var(--line);}
        .hrx-sec:first-of-type{border-top:none;}

        .hrx-btn{
          display:inline-block;font-family:'Karla',sans-serif;font-size:14px;
          font-weight:600;letter-spacing:0.08em;text-transform:uppercase;
          padding:15px 30px;border:none;cursor:pointer;border-radius:2px;
          transition:transform 0.15s ease, background 0.15s ease, color 0.15s ease;
        }
        .hrx-btn:hover{transform:translateY(-1px);}
        .hrx-btn:focus-visible{outline:2px solid var(--gold);outline-offset:3px;}
        .hrx-primary{background:var(--navy);color:var(--cream);}
        .hrx-primary:hover{background:var(--navy-soft);}
        .hrx-ghost{background:transparent;color:var(--navy);border:1px solid var(--navy);}
        .hrx-ghost:hover{background:var(--navy);color:var(--cream);}
        .hrx-gold{background:var(--gold);color:var(--navy);}
        .hrx-gold:hover{background:#D8B662;}
        .hrx-btn[disabled]{opacity:0.45;cursor:default;}
        .hrx-btn[disabled]:hover{transform:none;}

        /* ---- hero ---- */
        .hrx-hero{padding:96px 0 78px;}
        .hrx-hero h1{
          font-family:'Cormorant Garamond',serif;font-weight:300;
          font-size:clamp(40px,6.4vw,72px);line-height:1.06;color:var(--navy);
          margin:0 0 26px;letter-spacing:-0.02em;max-width:15ch;
        }
        .hrx-hero h1 em{font-style:italic;color:var(--gold);}
        .hrx-hero p{font-size:19px;color:var(--muted);max-width:600px;margin:0 0 38px;}
        .hrx-cta-row{display:flex;flex-wrap:wrap;gap:14px;align-items:center;}
        .hrx-note{font-size:14.5px;color:var(--muted);margin-top:22px;}
        .hrx-note a{color:var(--navy);text-decoration:underline;text-underline-offset:3px;}

        /* ---- session cards ---- */
        .hrx-grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
        .hrx-card{
          background:#fff;border:1px solid var(--line);border-radius:3px;
          padding:34px 30px 32px;display:flex;flex-direction:column;
        }
        .hrx-card.feat{border:1px solid var(--gold);box-shadow:0 10px 34px rgba(19,36,58,0.07);}
        .hrx-tag{
          font-size:12.5px;font-weight:600;letter-spacing:0.14em;
          text-transform:uppercase;color:var(--gold);margin-bottom:16px;
        }
        .hrx-name{
          font-family:'Cormorant Garamond',serif;font-size:27px;
          color:var(--navy);line-height:1.2;margin-bottom:14px;
        }
        .hrx-amount{
          font-family:'Cormorant Garamond',serif;font-size:42px;
          color:var(--navy);line-height:1;
        }
        .hrx-cadence{font-size:14px;color:var(--muted);margin:8px 0 20px;}
        .hrx-desc{font-size:15.5px;color:var(--ink);flex:1;margin:0 0 26px;}

        /* ---- topics ---- */
        .hrx-topics{
          display:grid;grid-template-columns:repeat(2,1fr);
          gap:0 46px;max-width:900px;
        }
        .hrx-topic{
          display:flex;gap:16px;padding:17px 0;
          border-bottom:1px solid var(--line);font-size:16.5px;
        }
        .hrx-topic i{color:var(--gold);font-style:normal;font-size:15px;line-height:1.7;}

        /* ---- tools ---- */
        .hrx-grid2{display:grid;grid-template-columns:repeat(2,1fr);gap:22px;}
        .hrx-tool{
          background:#fff;border:1px solid var(--line);border-radius:3px;
          padding:30px;display:flex;flex-direction:column;
        }
        .hrx-tool-top{display:flex;align-items:center;gap:12px;margin-bottom:16px;}
        .hrx-pill{
          font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;
          color:var(--navy);background:rgba(201,164,76,0.18);padding:5px 11px;border-radius:2px;
        }
        .hrx-soon{
          font-size:12px;font-weight:600;letter-spacing:0.12em;
          text-transform:uppercase;color:var(--muted);
        }
        .hrx-tool h3{
          font-family:'Cormorant Garamond',serif;font-weight:400;font-size:25px;
          color:var(--navy);margin:0 0 6px;line-height:1.2;
        }
        .hrx-from{font-size:13.5px;color:var(--muted);margin-bottom:14px;font-style:italic;}
        .hrx-tool p{font-size:15.5px;margin:0 0 24px;flex:1;}

        /* ---- faq ---- */
        .hrx-faq{max-width:760px;}
        .hrx-q{border-bottom:1px solid var(--line);padding:26px 0;}
        .hrx-q h4{
          font-family:'Cormorant Garamond',serif;font-weight:600;font-size:22px;
          color:var(--navy);margin:0 0 10px;
        }
        .hrx-q p{margin:0;font-size:16px;color:var(--muted);}

        /* ---- closer + footer ---- */
        .hrx-closer{background:var(--navy);color:var(--cream);padding:88px 0;text-align:center;}
        .hrx-closer h2{
          font-family:'Cormorant Garamond',serif;font-weight:300;
          font-size:clamp(30px,4.4vw,46px);line-height:1.15;margin:0 auto 22px;
          max-width:18ch;
        }
        .hrx-closer h2 em{font-style:italic;color:var(--gold);}
        .hrx-closer p{color:rgba(245,241,232,0.72);max-width:520px;margin:0 auto 34px;}
        .hrx-foot{
          background:var(--navy);color:rgba(245,241,232,0.5);
          font-size:13.5px;text-align:center;padding:0 0 44px;
        }
        .hrx-foot a{color:var(--gold);text-decoration:none;}

        @media (max-width:860px){
          .hrx-grid3,.hrx-grid2,.hrx-topics{grid-template-columns:1fr;}
          .hrx-sec{padding:64px 0;}
          .hrx-hero{padding:66px 0 54px;}
          .hrx-bar-links{gap:16px;}
          .hrx-bar-in{padding:14px 20px;}
          .hrx-wrap{padding:0 20px;}
          .hrx-cta-row .hrx-btn{width:100%;text-align:center;}
        }
        @media (prefers-reduced-motion:reduce){
          .hrx-page *{transition:none !important;animation:none !important;}
        }
      `}</style>

      {/* ---------- TOP BAR ---------- */}
      <header className="hrx-bar">
        <div className="hrx-bar-in">
          <a className="hrx-mark" href="/">The HX <span>Coach</span></a>
          <nav className="hrx-bar-links">
            <button onClick={() => scrollTo(bookRef)}>Coaching</button>
            <button onClick={() => scrollTo(toolsRef)}>Tools</button>
            <a className="hrx-home" href="/">For companies</a>
          </nav>
        </div>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="hrx-wrap hrx-hero">
        <div className="hrx-eyebrow">For HR Leaders</div>
        <h1>You're the one everybody brings it to. <em>Who do you bring it to?</em></h1>
        <p>
          Twenty five years in the seat, including the rooms where the decision was already
          made and someone had to make it human. Bring me the situation you can't take to your
          CEO, your team, or your peers. We'll work it in an hour.
        </p>
        <div className="hrx-cta-row">
          <button className="hrx-btn hrx-primary" onClick={() => scrollTo(bookRef)}>
            Book a session
          </button>
          <button className="hrx-btn hrx-ghost" onClick={() => scrollTo(toolsRef)}>
            Podcast tools
          </button>
        </div>
        <div className="hrx-note">
          Not sure yet? Start with the free 15 minute intro —{" "}
          <a href={LINKS.intro} target="_blank" rel="noopener noreferrer">grab a time</a>.
        </div>
      </section>

      {/* ---------- COACHING ---------- */}
      <section className="hrx-wrap hrx-sec" ref={bookRef}>
        <div className="hrx-eyebrow">Coaching</div>
        <h2 className="hrx-h2">Pick the one that <em>matches the moment</em></h2>
        <p className="hrx-lede">
          Private and yours. No intake packet, no assessment battery, no six week
          discovery. You send the situation ahead, you show up, we work it.
        </p>
        <div className="hrx-grid3">
          {SESSIONS.map((s) => (
            <div className={`hrx-card${s.featured ? " feat" : ""}`} key={s.tag}>
              <div className="hrx-tag">{s.tag}</div>
              <div className="hrx-name">{s.name}</div>
              <div className="hrx-amount">{s.amount}</div>
              <div className="hrx-cadence">{s.cadence}</div>
              <p className="hrx-desc">{s.desc}</p>
              <button
                className={`hrx-btn ${s.featured ? "hrx-gold" : "hrx-ghost"}`}
                onClick={() => open(s.href)}
              >
                {s.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- TOPICS ---------- */}
      <section className="hrx-wrap hrx-sec">
        <div className="hrx-eyebrow">What we work on</div>
        <h2 className="hrx-h2">The stuff that doesn't fit in a <em>ticket</em></h2>
        <div className="hrx-topics">
          {TOPICS.map((t) => (
            <div className="hrx-topic" key={t}><i>◆</i><span>{t}</span></div>
          ))}
        </div>
      </section>

      {/* ---------- TOOLS ---------- */}
      <section className="hrx-wrap hrx-sec" ref={toolsRef}>
        <div className="hrx-eyebrow">From The HX Podcast</div>
        <h2 className="hrx-h2">Tools you can <em>actually use Monday</em></h2>
        <p className="hrx-lede">
          Everything referenced on the show lives here. Free, no email gate on the
          worksheets, no drip sequence waiting for you.
        </p>
        <div className="hrx-grid2">
          {TOOLS.map((t) => (
            <div className="hrx-tool" key={t.title}>
              <div className="hrx-tool-top">
                <span className="hrx-pill">{t.label}</span>
                {t.status === "soon" && <span className="hrx-soon">Coming soon</span>}
              </div>
              <h3>{t.title}</h3>
              <div className="hrx-from">{t.from}</div>
              <p>{t.desc}</p>
              <button
                className="hrx-btn hrx-ghost"
                disabled={t.status !== "live"}
                onClick={() => open(t.href)}
              >
                {t.status === "live" ? t.cta : "Not yet live"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="hrx-wrap hrx-sec">
        <div className="hrx-eyebrow">Before you book</div>
        <h2 className="hrx-h2">Fair questions</h2>
        <div className="hrx-faq">
          {FAQ.map((f) => (
            <div className="hrx-q" key={f.q}>
              <h4>{f.q}</h4>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CLOSER ---------- */}
      <section className="hrx-closer">
        <div className="hrx-wrap">
          <h2>Bring the thing you've been <em>carrying alone</em></h2>
          <p>One hour. One problem. A next move you can make this week.</p>
          <button className="hrx-btn hrx-gold" onClick={() => scrollTo(bookRef)}>
            Book a session
          </button>
        </div>
      </section>

      <div className="hrx-foot">
        Looking for fractional CPO work instead? <a href="/">Head to the main site</a>
        <br />© 2026 The HX Coach · hxcoach.com
      </div>
    </div>
  );
}
