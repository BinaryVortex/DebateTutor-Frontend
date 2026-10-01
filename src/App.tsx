import { useEffect, useRef, useState } from "react"
import type { FormEvent, ReactNode, DragEvent } from "react"

type Page = "home" | "dashboard" | "chat" | "trail" | "saved" | "analytics" | "audit" | "courses" | "research" | "library" | "login" | "signup" | "forgot" | "reset"
type IconName = "spark" | "arrow" | "arrowUp" | "chevron" | "check" | "shield" | "book" | "layers" | "messages" | "chart" | "file" | "settings" | "menu" | "close" | "search" | "bookmark" | "clock" | "eye" | "eyeOff" | "upload" | "plus" | "logout" | "filter" | "info" | "brain" | "target" | "users" | "copy" | "retry" | "lock" | "mail" | "graduation" | "external" | "download"

function Icon({
  name,
  size = 18,
  className = "",
}: {
  name: IconName
  size?: number
  className?: string
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
  }
  const paths: Record<IconName, ReactNode> = {
    spark: (
      <>
        <path d="m12 2 1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2Z" />
        <path d="m19 17 .7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z" />
      </>
    ),
    arrow: (
      <>
        <path d="M4 12h15m-6-6 6 6-6 6" />
      </>
    ),
    arrowUp: (
      <>
        <path d="M12 19V5m-6 6 6-6 6 6" />
      </>
    ),
    chevron: <path d="m6 9 6 6 6-6" />,
    check: <path d="m5 12 4 4L19 6" />,
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </>
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
      </>
    ),
    messages: (
      <>
        <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5 8 8 0 0 1-3-.6L4 20l1.6-5.5a8 8 0 0 1-.6-3A7.5 7.5 0 0 1 12.5 4 7.5 7.5 0 0 1 20 11.5Z" />
        <path d="M9 11.5h7" />
      </>
    ),
    chart: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 15 4-4 3 2 5-7" />
      </>
    ),
    file: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
        <path d="M14 2v6h6M8 13h8M8 17h6" />
      </>
    ),
    settings: (
      <>
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.9 1.9-.06-.06A1.7 1.7 0 0 0 16 18.44a1.7 1.7 0 0 0-1 1.56v.1h-6V20a1.7 1.7 0 0 0-1-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.9-1.9.06-.06A1.7 1.7 0 0 0 4.56 15 1.7 1.7 0 0 0 3 14h-.1V10H3a1.7 1.7 0 0 0 1.56-1 1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.9-1.9.06.06A1.7 1.7 0 0 0 8 5.56 1.7 1.7 0 0 0 9 4V3.9h6V4a1.7 1.7 0 0 0 1 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.9 1.9-.06.06A1.7 1.7 0 0 0 19.44 9 1.7 1.7 0 0 0 21 10h.1v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="M5 5 19 19M19 5 5 19" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m16 16 5 5" />
      </>
    ),
    bookmark: <path d="M5 3h14v19l-7-4-7 4V3Z" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    eye: (
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
    eyeOff: (
      <>
        <path d="m3 3 18 18M10.6 6.1A11 11 0 0 1 12 6c6.5 0 10 6 10 6a15 15 0 0 1-3.3 3.8M6.1 8A15 15 0 0 0 2 12s3.5 6 10 6a10 10 0 0 0 3.1-.5" />
      </>
    ),
    upload: (
      <>
        <path d="M12 16V3m-5 5 5-5 5 5M4 16v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    logout: (
      <>
        <path d="M10 17l5-5-5-5m5 5H3" />
        <path d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" />
      </>
    ),
    filter: (
      <>
        <path d="M4 7h16M7 12h10m-7 5h4" />
      </>
    ),
    info: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 11v5m0-8h.01" />
      </>
    ),
    brain: (
      <>
        <path d="M12 18V6m0 1a4 4 0 0 0-7 2 4 4 0 0 0 0 6 4 4 0 0 0 7 3m0-11a4 4 0 0 1 7 2 4 4 0 0 1 0 6 4 4 0 0 1-7 3M8 11l-2 2m10-2 2 2" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-2a6 6 0 0 1 12 0v2H3Zm14-15a3 3 0 0 1 0 6m2 9h2v-2a6 6 0 0 0-4-5.7" />
      </>
    ),
    copy: (
      <>
        <rect x="8" y="8" width="12" height="12" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </>
    ),
    retry: (
      <>
        <path d="M20 11a8 8 0 1 1-2.2-5.5M20 4v6h-6" />
      </>
    ),
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 1 1 8 0v3" />
      </>
    ),
    mail: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </>
    ),
    graduation: (
      <>
        <path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v6c4 3 8 3 12 0v-6m4-2v7" />
      </>
    ),
    external: (
      <>
        <path d="M13 4h7v7m0-7-9 9" />
        <path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v13m-5-5 5 5 5-5M4 18v3h16v-3" />
      </>
    ),
  }
  return <svg {...common}>{paths[name]}</svg>
}

const sampleQuestion = "Why do antibiotics not work against viruses?"
const sampleAnswer =
  "Antibiotics target structures and processes found in bacteria, such as cell walls and bacterial ribosomes. Viruses lack these structures and instead replicate inside our own cells, so antibiotics cannot stop a viral infection. Using antibiotics when they are not needed can also contribute to antibiotic resistance."
const trailStages = [
  {
    label: "Retrieval",
    role: "Evidence gathering",
    icon: "search" as IconName,
    detail:
      "Found relevant course material on bacterial cell structures, viral replication, and antibiotic resistance.",
    evidence: "3 course excerpts reviewed · 2 retrieval hops",
  },
  {
    label: "Reflection",
    role: "Question framing",
    icon: "brain" as IconName,
    detail:
      "Identified the key distinction: bacteria are living cells with independent machinery; viruses rely on host cells.",
    evidence: "Concepts: cell wall, ribosomes, host cell",
  },
  {
    label: "Affirmative",
    role: "Initial explanation",
    icon: "messages" as IconName,
    detail:
      "Proposed that antibiotics act on bacterial targets that are absent in viruses.",
    evidence: "Supported by Microbiology course notes, Week 4",
  },
  {
    label: "Devil's Advocate",
    role: "Challenge",
    icon: "filter" as IconName,
    detail:
      "Checked whether the explanation could imply antibiotics never matter during a viral illness. A secondary bacterial infection is a separate case.",
    evidence: "Nuance added: bacterial co-infections",
  },
  {
    label: "Fact-Checker",
    role: "Source validation",
    icon: "shield" as IconName,
    detail:
      "Matched the biological claims to the retrieved course excerpts and flagged no unsupported statements in this sample answer.",
    evidence: "3 claims matched to course material",
  },
  {
    label: "Convergence",
    role: "Consensus",
    icon: "layers" as IconName,
    detail:
      "Kept the supported explanation and added the practical note about antibiotic resistance.",
    evidence: "1 challenge addressed · no outstanding conflicts",
  },
  {
    label: "Final Answer",
    role: "Student-facing response",
    icon: "check" as IconName,
    detail: sampleAnswer,
    evidence: "Verified against sample course material",
  },
]
const pageTitles: Partial<Record<Page, string>> = {
  dashboard: "Overview",
  chat: "Tutor chat",
  trail: "Debate trail",
  saved: "Saved answers",
  analytics: "Analytics",
  audit: "Audit trail",
  courses: "Course management",
  research: "Research evaluation",
  library: "Component library",
}

function Button({
  children,
  onClick,
  variant = "primary",
  icon,
  type = "button",
  disabled = false,
  className = "",
}: {
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "ghost" | "light"
  icon?: IconName
  type?: "button" | "submit"
  disabled?: boolean
  className?: string
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} ${className}`}
    >
      {children}
      {icon && <Icon name={icon} size={17} />}
    </button>
  )
}
function Badge({
  children,
  tone = "neutral",
  icon,
}: {
  children: ReactNode
  tone?: "neutral" | "green" | "violet" | "amber" | "red"
  icon?: IconName
}) {
  return (
    <span className={`badge badge-${tone}`}>
      {icon && <Icon name={icon} size={13} />} {children}
    </span>
  )
}
function Brand({
  onClick,
  small = false,
}: {
  onClick: () => void
  small?: boolean
}) {
  return (
    <button
      className={`brand ${small ? "brand-small" : ""}`}
      onClick={onClick}
      aria-label="DebateTutor home"
    >
      <span className="brand-mark">
        <Icon name="spark" size={21} />
      </span>
      <span>
        debate<span className="brand-light">tutor</span>
        <span className="brand-dot">.</span>
      </span>
    </button>
  )
}
function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

function PreviewCard({
  onTrail,
  compact = false,
}: {
  onTrail: () => void
  compact?: boolean
}) {
  return (
    <div className={`preview-card ${compact ? "preview-compact" : ""}`}>
      <div className="preview-top">
        <div className="preview-avatar">
          <Icon name="spark" size={18} />
        </div>
        <div>
          <strong>DebateTutor</strong>
          <span>Your AI learning companion</span>
        </div>
        <span className="preview-top-right">
          <span className="online-dot" /> Online
        </span>
      </div>
      <div className="preview-content">
        <div className="preview-question">
          <span className="question-initial">S</span>
          <p>{sampleQuestion}</p>
        </div>
        <div className="answer-header">
          <span className="answer-spark">
            <Icon name="spark" size={16} />
          </span>
          <strong>Great question! Let's break it down.</strong>
        </div>
        <p className="preview-answer">
          Antibiotics target features of <strong>bacterial cells</strong>, like
          their cell walls and ribosomes. Viruses don't have those structures —
          they use your own cells to reproduce. That's why antibiotics can't
          treat viral infections. <span className="citation">1</span>{" "}
          <span className="citation">2</span>
        </p>
        <div className="preview-verified">
          <div className="verified-left">
            <Icon name="shield" size={19} />
            <div>
              <strong>Answer verified</strong>
              <span>Checked against course sources</span>
            </div>
          </div>
          <button onClick={onTrail}>
            View debate trail <Icon name="arrow" size={15} />
          </button>
        </div>
      </div>
      <div className="preview-footer">
        <span>
          <Icon name="book" size={15} /> Biology 101
        </span>
        <span>
          <Icon name="layers" size={15} /> 3 sources cited
        </span>
      </div>
    </div>
  )
}

function Landing({ navigate }: { navigate: (p: Page) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrollTo = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="landing">
      <header className="site-header">
        <div className="site-nav container">
          <Brand
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <nav className="desktop-nav" aria-label="Main navigation">
            <button onClick={() => scrollTo("features")}>Product</button>
            <button onClick={() => scrollTo("how-it-works")}>
              How It Works
            </button>
            <button onClick={() => navigate("dashboard")}>Students</button>
            <button onClick={() => navigate("analytics")}>Teachers</button>
          </nav>
          <div className="nav-actions">
            <button className="text-link" onClick={() => navigate("login")}>
              Sign In
            </button>
            <Button onClick={() => navigate("signup")} icon="arrow">
              Get Started
            </Button>
          </div>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={24} />
          </button>
        </div>
        {mobileOpen && (
          <nav className="mobile-site-nav" aria-label="Mobile navigation">
            <button onClick={() => scrollTo("features")}>Product</button>
            <button onClick={() => scrollTo("how-it-works")}>
              How It Works
            </button>
            <button onClick={() => navigate("dashboard")}>Students</button>
            <button onClick={() => navigate("analytics")}>Teachers</button>
            <button onClick={() => navigate("login")}>Sign In</button>
            <Button onClick={() => navigate("signup")}>Get Started</Button>
          </nav>
        )}
      </header>
      <main>
        <section className="hero">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="hero-eyebrow">
                <span className="eyebrow-icon">
                  <Icon name="spark" size={13} />
                </span>{" "}
                THE NEXT CHAPTER IN LEARNING
              </div>
              <h1>
                Learn with an AI Tutor That <span>Checks Its Own Answers</span>
              </h1>
              <p className="hero-description">
                Go beyond quick answers. Explore ideas with an AI tutor that
                consults your course materials, challenges its reasoning, and
                shows you the evidence.
              </p>
              <div className="hero-actions">
                <Button onClick={() => navigate("signup")} icon="arrow">
                  Start learning free
                </Button>
                <Button onClick={() => navigate("chat")} variant="secondary">
                  Explore the demo
                </Button>
              </div>
              <div className="hero-proof">
                <div className="proof-icons">
                  <span>
                    <Icon name="book" size={17} />
                  </span>
                  <span>
                    <Icon name="messages" size={17} />
                  </span>
                  <span>
                    <Icon name="shield" size={17} />
                  </span>
                </div>
                <span>Built for curious minds and confident answers</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="floating-tag floating-tag-top">
                <span className="floating-icon violet">
                  <Icon name="layers" size={17} />
                </span>
                <span>
                  <strong>Multi-perspective</strong>
                  <small>reasoning in action</small>
                </span>
              </div>
              <PreviewCard onTrail={() => navigate("trail")} />
              <div className="floating-tag floating-tag-bottom">
                <span className="floating-icon green">
                  <Icon name="check" size={17} />
                </span>
                <span>
                  <strong>Evidence first</strong>
                  <small>every step of the way</small>
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="trust-strip">
          <div className="container trust-inner">
            <span>MORE THAN AN ANSWER ENGINE</span>
            <div>
              <Icon name="search" size={17} /> Source-grounded
            </div>
            <div>
              <Icon name="messages" size={17} /> Multi-agent debate
            </div>
            <div>
              <Icon name="shield" size={17} /> Verifiable answers
            </div>
            <div>
              <Icon name="brain" size={17} /> Built for understanding
            </div>
          </div>
        </div>
        <section className="features section-wrap container" id="features">
          <SectionHeading
            eyebrow="A SMARTER WAY TO STUDY"
            title="Answers you can actually learn from."
            subtitle="Most AI tools give you a response. DebateTutor gives you the context, the counterpoints, and the confidence to understand why."
          />
          <div className="feature-grid">
            <FeatureCard
              number="01"
              icon="search"
              title="Grounded in your materials"
              text="Answers start with a search across your course content, not a guess from memory."
              tone="lilac"
            />
            <FeatureCard
              number="02"
              icon="messages"
              title="A healthy dose of debate"
              text="Different AI perspectives challenge an answer before it reaches you."
              tone="peach"
            />
            <FeatureCard
              number="03"
              icon="target"
              title="Find the missing piece"
              text="Spot common misconceptions and turn confusion into a clearer understanding."
              tone="blue"
            />
            <FeatureCard
              number="04"
              icon="layers"
              title="See how it got there"
              text="Follow an accessible trail of evidence, challenges, and checks behind each answer."
              tone="mint"
            />
          </div>
        </section>
        <section className="workflow-section" id="how-it-works">
          <div className="container workflow-inner">
            <div className="workflow-head">
              <SectionHeading
                eyebrow="THE METHOD"
                title="A little more thought. A lot more clarity."
                subtitle="A transparent learning loop designed to help you think deeper, not just get there faster."
              />
              <Button
                onClick={() => navigate("trail")}
                variant="secondary"
                icon="arrow"
              >
                Explore the debate trail
              </Button>
            </div>
            <div className="workflow-grid">
              {[
                {
                  n: "01",
                  title: "Ask",
                  text: "Start with what you want to understand.",
                  icon: "messages" as IconName,
                },
                {
                  n: "02",
                  title: "Retrieve",
                  text: "Find relevant evidence in course materials.",
                  icon: "search" as IconName,
                },
                {
                  n: "03",
                  title: "Debate",
                  text: "Challenge ideas from multiple perspectives.",
                  icon: "users" as IconName,
                },
                {
                  n: "04",
                  title: "Verify",
                  text: "Check claims against their sources.",
                  icon: "shield" as IconName,
                },
                {
                  n: "05",
                  title: "Learn",
                  text: "Get a clear answer you can explore.",
                  icon: "graduation" as IconName,
                },
              ].map((step, i) => (
                <div className="workflow-step" key={step.title}>
                  <div className="step-top">
                    <span>{step.n}</span>
                    {i < 4 && <div className="step-line" />}
                  </div>
                  <div className="step-icon">
                    <Icon name={step.icon} size={24} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="audience-section container">
          <div className="audience-card student-card">
            <div className="audience-icon">
              <Icon name="graduation" size={23} />
            </div>
            <span className="eyebrow">FOR STUDENTS</span>
            <h2>
              Get unstuck.
              <br />
              Stay curious.
            </h2>
            <p>
              Ask questions, revisit what you learned, and see the reasoning
              behind every answer.
            </p>
            <button onClick={() => navigate("dashboard")}>
              Explore student workspace <Icon name="arrow" size={17} />
            </button>
          </div>
          <div className="audience-card teacher-card">
            <div className="audience-icon">
              <Icon name="chart" size={23} />
            </div>
            <span className="eyebrow">FOR EDUCATORS</span>
            <h2>
              See the learning
              <br />
              behind the answers.
            </h2>
            <p>
              Surface misconceptions, review answer evidence, and keep course
              materials at the center.
            </p>
            <button onClick={() => navigate("analytics")}>
              Explore teacher workspace <Icon name="arrow" size={17} />
            </button>
          </div>
        </section>
        <section className="cta-section container">
          <div className="cta-mark">
            <Icon name="spark" size={28} />
          </div>
          <span className="eyebrow">LET'S THINK BETTER, TOGETHER</span>
          <h2>
            Make every question
            <br />a learning moment.
          </h2>
          <p>Try a more thoughtful kind of AI tutoring.</p>
          <Button
            onClick={() => navigate("signup")}
            variant="light"
            icon="arrow"
          >
            Get started with DebateTutor
          </Button>
        </section>
      </main>
      <footer className="site-footer container">
        <Brand
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          small
        />
        <p>
          An exploratory EdTech prototype for transparent, evidence-led
          learning.
        </p>
        <div>
          <button onClick={() => navigate("research")}>Research</button>
          <button onClick={() => navigate("library")}>Components</button>
          <span>© 2026 DebateTutor</span>
        </div>
      </footer>
    </div>
  )
}
function FeatureCard({
  number,
  icon,
  title,
  text,
  tone,
}: {
  number: string
  icon: IconName
  title: string
  text: string
  tone: string
}) {
  return (
    <article className="feature-card">
      <div className={`feature-icon ${tone}`}>
        <Icon name={icon} size={24} />
      </div>
      <span className="feature-number">{number} / 04</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="feature-corner">
        <Icon name="arrow" size={17} />
      </span>
    </article>
  )
}

function Auth({
  page,
  navigate,
  enter,
}: {
  page: Page
  navigate: (p: Page) => void
  enter: (role: "student" | "teacher") => void
}) {
  const [role, setRole] = useState<"student" | "teacher">("student")
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)
  const isSignup = page === "signup"
  const isForgot = page === "forgot"
  const isReset = page === "reset"
  const submit = (e: FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    if (isSignup && !name.trim()) {
      setError("Please enter your name.")
      return
    }
    if (!isReset && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.")
      return
    }
    if (!isForgot && password.length < 8) {
      setError("Password must be at least 8 characters.")
      return
    }
    if ((isSignup || isReset) && password !== confirm) {
      setError("Passwords do not match.")
      return
    }
    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      if (isForgot)
        setSuccess(
          "Demo mode: no email was sent. You can preview the reset form below.",
        )
      else if (isReset)
        setSuccess(
          "Demo mode: password reset preview complete. No account was changed.",
        )
      else enter(role)
    }, 650)
  }
  return (
    <div className="auth-layout">
      <div className="auth-left">
        <div className="auth-brand">
          <Brand onClick={() => navigate("home")} />
        </div>
        <div className="auth-art">
          <span className="eyebrow">THOUGHTFUL LEARNING STARTS HERE</span>
          <h2>
            Questions lead
            <br />
            to <em>better</em> questions.
          </h2>
          <p>
            Learn with answers grounded in evidence, challenged by different
            perspectives, and open for you to explore.
          </p>
          <div className="auth-quote">
            <Icon name="spark" size={19} />
            <span>
              Good learning isn't about having all the answers. It's about
              knowing how to question them.
            </span>
          </div>
        </div>
        <div className="auth-bottom">
          A research-inspired learning experience
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-mobile-brand">
          <Brand onClick={() => navigate("home")} />
        </div>
        <div className="auth-form-wrap">
          <button
            className="back-link"
            onClick={() => navigate(isSignup ? "login" : "home")}
          >
            <Icon name="arrow" size={16} className="rotate-180" />{" "}
            {isSignup ? "Back to sign in" : "Back to home"}
          </button>
          <span className="auth-overline">DEBATETUTOR ACCOUNT</span>
          <h1>
            {isSignup
              ? "Create your account"
              : isForgot
                ? "Forgot your password?"
                : isReset
                  ? "Set a new password"
                  : "Welcome back"}
          </h1>
          <p className="auth-subtitle">
            {isSignup
              ? "Join a more thoughtful way to learn."
              : isForgot
                ? "Enter your email to preview the recovery flow."
                : isReset
                  ? "Choose a new password for this demo flow."
                  : "Sign in to continue your learning journey."}
          </p>
          {!isForgot && !isReset && (
            <div
              className="role-switch"
              role="group"
              aria-label="Choose account role"
            >
              <button
                className={role === "student" ? "active" : ""}
                onClick={() => setRole("student")}
              >
                <Icon name="graduation" size={17} /> Student
              </button>
              <button
                className={role === "teacher" ? "active" : ""}
                onClick={() => setRole("teacher")}
              >
                <Icon name="book" size={17} /> Teacher
              </button>
            </div>
          )}
          <form onSubmit={submit} noValidate>
            {isSignup && (
              <label className="field-label">
                Full name
                <input
                  autoComplete="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
            )}
            {!isReset && (
              <label className="field-label">
                Email address
                <div className="input-wrap">
                  <Icon name="mail" size={18} />
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="you@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </label>
            )}
            {!isForgot && (
              <label className="field-label">
                Password
                <div className="input-wrap">
                  <Icon name="lock" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete={
                      isSignup || isReset ? "new-password" : "current-password"
                    }
                    placeholder="At least 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    className="password-toggle"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    <Icon name={showPassword ? "eyeOff" : "eye"} size={18} />
                  </button>
                </div>
              </label>
            )}
            {(isSignup || isReset) && (
              <label className="field-label">
                Confirm password
                <div className="input-wrap">
                  <Icon name="lock" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Repeat password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    required
                  />
                </div>
              </label>
            )}
            {page === "login" && (
              <button
                className="forgot-link"
                type="button"
                onClick={() => navigate("forgot")}
              >
                Forgot password?
              </button>
            )}
            {error && (
              <div className="form-message form-error" role="alert">
                <Icon name="info" size={16} />
                {error}
              </div>
            )}
            {success && (
              <div className="form-message form-success" role="status">
                <Icon name="check" size={16} />
                {success}
              </div>
            )}
            <Button
              type="submit"
              className="auth-submit"
              disabled={loading}
              icon={loading ? undefined : "arrow"}
            >
              {loading
                ? "Please wait..."
                : isSignup
                  ? "Create demo account"
                  : isForgot
                    ? "Preview recovery"
                    : isReset
                      ? "Preview reset"
                      : "Enter demo workspace"}
            </Button>
          </form>
          {isForgot && success && (
            <button
              className="auth-bottom-link"
              onClick={() => navigate("reset")}
            >
              Preview reset form <Icon name="arrow" size={15} />
            </button>
          )}
          {!isForgot && !isReset && (
            <p className="auth-bottom-link">
              {isSignup ? "Already have an account?" : "New to DebateTutor?"}{" "}
              <button onClick={() => navigate(isSignup ? "login" : "signup")}>
                {isSignup ? "Sign in" : "Create an account"}
              </button>
            </p>
          )}
          {(isForgot || isReset) && (
            <button
              className="auth-bottom-link"
              onClick={() => navigate("login")}
            >
              Back to sign in
            </button>
          )}
          <p className="demo-note">
            <Icon name="info" size={14} /> Prototype only. No real account is
            created and credentials are not stored.
          </p>
        </div>
      </div>
    </div>
  )
}

const studentNav: { label: string, page: Page, icon: IconName }[] = [
  { label: "Overview", page: "dashboard", icon: "layers" },
  { label: "Tutor chat", page: "chat", icon: "messages" },
  { label: "Debate trail", page: "trail", icon: "spark" },
  { label: "Saved answers", page: "saved", icon: "bookmark" },
]
const teacherNav: { label: string, page: Page, icon: IconName }[] = [
  { label: "Analytics", page: "analytics", icon: "chart" },
  { label: "Audit trail", page: "audit", icon: "shield" },
  { label: "Courses", page: "courses", icon: "book" },
]
function Workspace({
  page,
  navigate,
  role,
  setRole,
  saved,
  setSaved,
}: {
  page: Page
  navigate: (p: Page) => void
  role: "student" | "teacher"
  setRole: (r: "student" | "teacher") => void
  saved: boolean
  setSaved: (v: boolean) => void
}) {
  const [drawer, setDrawer] = useState(false)
  const go = (p: Page) => {
    setDrawer(false)
    navigate(p)
  }
  const navList = (list: typeof studentNav) =>
    list.map((item) => (
      <button
        key={item.page}
        className={`side-link ${page === item.page ? "active" : ""}`}
        onClick={() => go(item.page)}
      >
        <Icon name={item.icon} size={19} />
        {item.label}
        {item.page === "saved" && saved && <span className="nav-count">1</span>}
      </button>
    ))
  return (
    <div className="workspace">
      <aside className={`sidebar ${drawer ? "sidebar-open" : ""}`}>
        <div className="sidebar-head">
          <Brand onClick={() => go("home")} small />
          <button
            className="sidebar-close"
            onClick={() => setDrawer(false)}
            aria-label="Close navigation"
          >
            <Icon name="close" size={22} />
          </button>
        </div>
        <div className="workspace-switch">
          <span className="workspace-avatar">
            <Icon name={role === "student" ? "graduation" : "book"} size={19} />
          </span>
          <span>
            <strong>
              {role === "student" ? "Student workspace" : "Teacher workspace"}
            </strong>
            <small>Demo environment</small>
          </span>
          <Icon name="chevron" size={16} />
        </div>
        <div className="side-scroll">
          <div className="side-group">
            <span className="side-label">STUDENT SPACE</span>
            {navList(studentNav)}
          </div>
          <div className="side-group">
            <span className="side-label">EDUCATOR SPACE</span>
            {navList(teacherNav)}
          </div>
          <div className="side-group">
            <span className="side-label">EXPLORE</span>
            {navList([
              {
                label: "Research evaluation",
                page: "research",
                icon: "target",
              },
              { label: "Component library", page: "library", icon: "layers" },
            ])}
          </div>
        </div>
        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <span>
              <Icon name="spark" size={17} />
            </span>
            <strong>Curiosity looks good on you.</strong>
            <p>Every question is a place to start.</p>
          </div>
          <button className="side-link signout" onClick={() => go("home")}>
            <Icon name="logout" size={18} /> Back to website
          </button>
        </div>
      </aside>
      {drawer && (
        <button
          className="drawer-backdrop"
          aria-label="Close navigation"
          onClick={() => setDrawer(false)}
        />
      )}
      <div className="workspace-main">
        <header className="workspace-header">
          <div className="workspace-header-left">
            <button
              className="workspace-menu"
              onClick={() => setDrawer(true)}
              aria-label="Open navigation"
            >
              <Icon name="menu" size={22} />
            </button>
            <span className="breadcrumb">
              Workspace <span>/</span> <strong>{pageTitles[page]}</strong>
            </span>
          </div>
          <div className="header-right">
            <Badge tone="violet" icon="info">
              Interactive demo
            </Badge>
            <button
              className="header-avatar"
              onClick={() =>
                setRole(role === "student" ? "teacher" : "student")
              }
              title="Switch demo role"
              aria-label="Switch demo role"
            >
              {role === "student" ? "S" : "T"}
            </button>
          </div>
        </header>
        <main className="workspace-content">
          {page === "dashboard" && (
            <StudentDashboard navigate={navigate} saved={saved} />
          )}
          {page === "chat" && (
            <Chat navigate={navigate} saved={saved} setSaved={setSaved} />
          )}
          {page === "trail" && <Trail navigate={navigate} />}
          {page === "saved" && (
            <Saved navigate={navigate} saved={saved} setSaved={setSaved} />
          )}
          {page === "analytics" && <Analytics navigate={navigate} />}
          {page === "audit" && <Audit navigate={navigate} />}
          {page === "courses" && <Courses />}
          {page === "research" && <Research />}
          {page === "library" && <Library />}
        </main>
      </div>
    </div>
  )
}
function PageHeader({
  eyebrow,
  title,
  subtitle,
  right,
}: {
  eyebrow: string
  title: string
  subtitle: string
  right?: ReactNode
}) {
  return (
    <div className="page-header">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {right && <div className="page-header-action">{right}</div>}
    </div>
  )
}
function StudentDashboard({
  navigate,
  saved,
}: {
  navigate: (p: Page) => void
  saved: boolean
}) {
  return (
    <>
      <PageHeader
        eyebrow="YOUR LEARNING SPACE"
        title="Good to see you, learner."
        subtitle="Keep your curiosity going. Pick up where you left off."
        right={
          <Button onClick={() => navigate("chat")} icon="arrow">
            Ask your tutor
          </Button>
        }
      />
      <div className="dashboard-feature">
        <div>
          <span className="eyebrow">YOUR NEXT QUESTION AWAITS</span>
          <h2>
            Learning gets better
            <br />
            when you ask why.
          </h2>
          <p>
            Your tutor is ready to explore ideas with you, one thoughtful answer
            at a time.
          </p>
          <Button onClick={() => navigate("chat")} variant="light" icon="arrow">
            Start a conversation
          </Button>
        </div>
        <div className="dashboard-art">
          <div className="art-ring ring-a" />
          <div className="art-ring ring-b" />
          <div className="art-center">
            <Icon name="spark" size={39} />
          </div>
          <div className="art-float art-float-a">
            <Icon name="book" size={19} />
          </div>
          <div className="art-float art-float-b">
            <Icon name="shield" size={19} />
          </div>
        </div>
      </div>
      <div className="dashboard-stats">
        <Metric
          icon="messages"
          label="Questions explored"
          value="12"
          detail="Sample activity"
        />
        <Metric
          icon="book"
          label="Active courses"
          value="3"
          detail="Sample courses"
        />
        <Metric
          icon="target"
          label="Learning progress"
          value="68%"
          detail="Sample progress"
        />
        <Metric
          icon="bookmark"
          label="Saved answers"
          value={saved ? "1" : "0"}
          detail="In this session"
        />
      </div>
      <div className="dashboard-columns">
        <div className="panel">
          <div className="panel-heading">
            <div>
              <h2>Recent conversations</h2>
              <p>Continue exploring your questions</p>
            </div>
            <button className="inline-link" onClick={() => navigate("chat")}>
              View chat <Icon name="arrow" size={15} />
            </button>
          </div>
          <button className="conversation-row" onClick={() => navigate("chat")}>
            <span className="row-icon violet-bg">
              <Icon name="messages" size={19} />
            </span>
            <span>
              <strong>{sampleQuestion}</strong>
              <small>Biology 101 · Sample conversation</small>
            </span>
            <Icon name="arrow" size={17} />
          </button>
          <button className="conversation-row" onClick={() => navigate("chat")}>
            <span className="row-icon blue-bg">
              <Icon name="messages" size={19} />
            </span>
            <span>
              <strong>What causes the seasons?</strong>
              <small>Earth Science · Sample conversation</small>
            </span>
            <Icon name="arrow" size={17} />
          </button>
        </div>
        <div className="panel">
          <div className="panel-heading">
            <div>
              <h2>Your courses</h2>
              <p>Explore a subject</p>
            </div>
          </div>
          <div className="course-mini">
            <span className="course-icon biology">
              <Icon name="brain" size={19} />
            </span>
            <span>
              <strong>Biology 101</strong>
              <small>Introductory biology</small>
            </span>
            <span className="course-progress">72%</span>
          </div>
          <div className="course-mini">
            <span className="course-icon earth">
              <Icon name="layers" size={19} />
            </span>
            <span>
              <strong>Earth Science</strong>
              <small>Our changing planet</small>
            </span>
            <span className="course-progress">56%</span>
          </div>
          <div className="course-mini">
            <span className="course-icon history">
              <Icon name="book" size={19} />
            </span>
            <span>
              <strong>World History</strong>
              <small>Ideas across time</small>
            </span>
            <span className="course-progress">76%</span>
          </div>
        </div>
      </div>
    </>
  )
}
function Metric({
  icon,
  label,
  value,
  detail,
}: {
  icon: IconName
  label: string
  value: string
  detail?: string
}) {
  return (
    <div className="metric-card">
      <span className="metric-icon">
        <Icon name={icon} size={19} />
      </span>
      <span className="metric-label">{label}</span>
      <strong>{value}</strong>
      {detail && <small>{detail}</small>}
    </div>
  )
}

function Chat({
  navigate,
  saved,
  setSaved,
}: {
  navigate: (p: Page) => void
  saved: boolean
  setSaved: (v: boolean) => void
}) {
  const [text, setText] = useState("")
  const [hasAnswer, setHasAnswer] = useState(true)
  const [error, setError] = useState(false)
  const [course, setCourse] = useState("Biology 101")
  const [historyOpen, setHistoryOpen] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const send = (e?: FormEvent) => {
    e?.preventDefault()
    if (!text.trim()) return
    if (
      text
        .trim()
        .toLowerCase()
        .replace(/[?.!]+$/, "") ===
        sampleQuestion.toLowerCase().replace(/[?.!]+$/, "") &&
      course === "Biology 101"
    ) {
      setHasAnswer(true)
      setError(false)
      setText("")
    } else {
      setError(true)
      setHasAnswer(false)
    }
  }
  return (
    <>
      <PageHeader
        eyebrow="STUDENT WORKSPACE"
        title="Tutor chat"
        subtitle="Ask a question. Explore the answer. Follow the evidence."
        right={
          <Button
            variant="secondary"
            onClick={() => {
              setHasAnswer(false)
              setError(false)
              setText("")
              inputRef.current?.focus()
            }}
            icon="plus"
          >
            New chat
          </Button>
        }
      />
      <div className="chat-layout">
        <div className="chat-main panel">
          <div className="chat-toolbar">
            <div>
              <span className="small-label">LEARNING IN</span>
              <select
                aria-label="Select course"
                value={course}
                onChange={(e) => {
                  setCourse(e.target.value)
                  setHasAnswer(false)
                  setError(false)
                }}
              >
                <option>Biology 101</option>
                <option>Earth Science</option>
                <option>World History</option>
              </select>
            </div>
            <button
              className="history-toggle"
              onClick={() => setHistoryOpen(!historyOpen)}
            >
              <Icon name="clock" size={16} /> History
            </button>
          </div>
          {historyOpen && (
            <div className="history-popover">
              <button
                onClick={() => {
                  setCourse("Biology 101")
                  setHasAnswer(true)
                  setError(false)
                  setHistoryOpen(false)
                }}
              >
                {sampleQuestion}
                <small>Sample conversation · Biology 101</small>
              </button>
            </div>
          )}
          <div className="chat-messages">
            {hasAnswer ? (
              <>
                <div className="chat-user-message">
                  <span className="chat-user-avatar">S</span>
                  <div>
                    <small>YOU ASKED</small>
                    <p>{sampleQuestion}</p>
                  </div>
                </div>
                <div className="chat-answer">
                  <div className="chat-answer-icon">
                    <Icon name="spark" size={18} />
                  </div>
                  <div className="chat-answer-body">
                    <span className="answer-author">
                      DEBATETUTOR <span>· SAMPLE RESPONSE</span>
                    </span>
                    <h2>Let's look at the difference.</h2>
                    <p>{sampleAnswer}</p>
                    <div className="source-list">
                      <span>COURSE SOURCES</span>
                      <div>
                        <Badge icon="book">Microbiology notes · Week 4</Badge>
                        <Badge icon="book">
                          Antibiotic resistance · Week 5
                        </Badge>
                      </div>
                    </div>
                    <div className="verification-strip">
                      <Icon name="shield" size={20} />
                      <span>
                        <strong>Verified against sample course material</strong>
                        <small>
                          Evidence summaries available in the debate trail
                        </small>
                      </span>
                      <button onClick={() => navigate("trail")}>
                        View trail <Icon name="arrow" size={15} />
                      </button>
                    </div>
                    <div className="answer-actions">
                      <button onClick={() => setSaved(!saved)}>
                        <Icon name="bookmark" size={16} />
                        {saved ? "Saved answer" : "Save answer"}
                      </button>
                      <button onClick={() => navigate("trail")}>
                        <Icon name="layers" size={16} /> View Debate Trail
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : error ? (
              <div className="chat-state">
                <span className="state-icon">
                  <Icon name="info" size={26} />
                </span>
                <h2>That question isn't in this demo yet.</h2>
                <p>
                  This prototype only has a prepared, source-grounded example.
                  Try the sample question below to explore the complete
                  experience.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setCourse("Biology 101")
                    setText(sampleQuestion)
                    setError(false)
                    inputRef.current?.focus()
                  }}
                  icon="retry"
                >
                  Try sample question
                </Button>
              </div>
            ) : (
              <div className="chat-state">
                <span className="state-icon">
                  <Icon name="spark" size={27} />
                </span>
                <h2>What are you curious about?</h2>
                <p>
                  Ask your tutor a question to get started. In this demo, try
                  the sample question below.
                </p>
                <button
                  className="suggestion"
                  onClick={() => {
                    setCourse("Biology 101")
                    setText(sampleQuestion)
                    inputRef.current?.focus()
                  }}
                >
                  {sampleQuestion} <Icon name="arrow" size={16} />
                </button>
              </div>
            )}
          </div>
          <form className="chat-composer" onSubmit={send}>
            <textarea
              ref={inputRef}
              aria-label="Ask your tutor"
              placeholder="Ask a question about your course..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  send()
                }
              }}
              rows={2}
            />
            <div className="composer-bottom">
              <span>
                <Icon name="shield" size={14} /> Answers are checked against
                course material
              </span>
              <button
                type="submit"
                disabled={!text.trim()}
                aria-label="Send question"
              >
                <Icon name="arrowUp" size={19} />
              </button>
            </div>
          </form>
        </div>
        <aside className="chat-side">
          <div className="panel chat-tip">
            <span className="tip-icon">
              <Icon name="spark" size={18} />
            </span>
            <h3>A better answer starts with a better question.</h3>
            <p>
              Be specific, ask why, and follow up when something doesn't click.
            </p>
          </div>
          <div className="panel chat-side-sources">
            <h3>What happens next?</h3>
            <div>
              <span>01</span> Find course evidence
            </div>
            <div>
              <span>02</span> Challenge the answer
            </div>
            <div>
              <span>03</span> Check every claim
            </div>
            <div>
              <span>04</span> Show you the trail
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}

function Trail({ navigate }: { navigate: (p: Page) => void }) {
  const [open, setOpen] = useState<number[]>([0, 4, 6])
  const toggle = (i: number) =>
    setOpen((current) =>
      current.includes(i) ? current.filter((x) => x !== i) : [...current, i],
    )
  return (
    <>
      <PageHeader
        eyebrow="BEHIND THE ANSWER"
        title="The Debate Trail"
        subtitle="See the evidence and checks behind an answer — without exposing private model reasoning."
        right={
          <Button
            variant="secondary"
            onClick={() => navigate("chat")}
            icon="arrow"
          >
            Back to chat
          </Button>
        }
      />
      <div className="trail-layout">
        <div className="trail-main">
          <div className="trail-intro panel">
            <div>
              <span className="small-label">QUESTION EXPLORED</span>
              <h2>{sampleQuestion}</h2>
              <p>Biology 101 · Sample answer</p>
            </div>
            <Badge tone="green" icon="shield">
              Verified example
            </Badge>
          </div>
          <div className="trail-notice">
            <Icon name="info" size={18} />
            <p>
              This trail displays concise evidence summaries and decisions, not
              private chain-of-thought. All content shown is illustrative sample
              data.
            </p>
          </div>
          <div className="timeline">
            {trailStages.map((stage, i) => (
              <div
                className={`timeline-item ${
                  open.includes(i) ? "expanded" : ""
                }`}
                key={stage.label}
              >
                <div className="timeline-node">
                  <Icon name={stage.icon} size={19} />
                </div>
                <div className="timeline-card">
                  <button
                    className="timeline-toggle"
                    onClick={() => toggle(i)}
                    aria-expanded={open.includes(i)}
                  >
                    <span>
                      <small>
                        STAGE {String(i + 1).padStart(2, "0")} <span>·</span>{" "}
                        {stage.role}
                      </small>
                      <strong>{stage.label}</strong>
                    </span>
                    <Icon name="chevron" size={19} />
                  </button>
                  {open.includes(i) && (
                    <div className="timeline-details">
                      <p>{stage.detail}</p>
                      <div>
                        <Icon name="file" size={15} />
                        {stage.evidence}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className="trail-aside">
          <div className="panel summary-panel">
            <span className="eyebrow">AT A GLANCE</span>
            <h3>A considered answer.</h3>
            <div>
              <span>
                <Icon name="search" size={17} /> Retrieval hops
              </span>
              <strong>2</strong>
            </div>
            <div>
              <span>
                <Icon name="book" size={17} /> Sources reviewed
              </span>
              <strong>3</strong>
            </div>
            <div>
              <span>
                <Icon name="messages" size={17} /> Challenges addressed
              </span>
              <strong>1</strong>
            </div>
            <div>
              <span>
                <Icon name="shield" size={17} /> Final status
              </span>
              <Badge tone="green">Verified</Badge>
            </div>
          </div>
          <div className="trail-aside-note">
            <Icon name="lock" size={19} />
            <p>
              Designed for transparency, with student-friendly summaries instead
              of internal deliberation.
            </p>
          </div>
        </aside>
      </div>
    </>
  )
}
function Saved({
  navigate,
  saved,
  setSaved,
}: {
  navigate: (p: Page) => void
  saved: boolean
  setSaved: (v: boolean) => void
}) {
  return (
    <>
      <PageHeader
        eyebrow="YOUR COLLECTION"
        title="Saved answers"
        subtitle="Keep the explanations worth coming back to."
      />
      {saved ? (
        <div className="panel saved-card">
          <div className="saved-card-top">
            <Badge tone="green" icon="shield">
              Verified example
            </Badge>
            <button
              onClick={() => setSaved(false)}
              aria-label="Remove saved answer"
            >
              <Icon name="bookmark" size={18} />
            </button>
          </div>
          <h2>{sampleQuestion}</h2>
          <p>{sampleAnswer}</p>
          <div>
            <Button
              variant="secondary"
              onClick={() => navigate("trail")}
              icon="arrow"
            >
              Review debate trail
            </Button>
            <span>Biology 101 · Saved this session</span>
          </div>
        </div>
      ) : (
        <div className="panel empty-saved">
          <span className="state-icon">
            <Icon name="bookmark" size={27} />
          </span>
          <h2>Your best insights, all in one place.</h2>
          <p>
            Save an answer in Tutor Chat and you'll find it here for this
            session.
          </p>
          <Button onClick={() => navigate("chat")} icon="arrow">
            Explore tutor chat
          </Button>
        </div>
      )}
    </>
  )
}
const analyticsMetrics = [
  {
    icon: "messages" as IconName,
    label: "Questions asked",
    value: "1,284",
    change: "+12.4%",
    positive: true,
  },
  {
    icon: "shield" as IconName,
    label: "Answer accuracy",
    value: "94.2%",
    change: "+2.1%",
    positive: true,
  },
  {
    icon: "brain" as IconName,
    label: "Misconceptions found",
    value: "86",
    change: "Insights surfaced",
    positive: false,
  },
  {
    icon: "layers" as IconName,
    label: "Avg. debate rounds",
    value: "2.4",
    change: "Per answer",
    positive: false,
  },
  {
    icon: "clock" as IconName,
    label: "Avg. latency",
    value: "3.8s",
    change: "Sample measure",
    positive: false,
  },
]
function Analytics({ navigate }: { navigate: (p: Page) => void }) {
  const [course, setCourse] = useState("All courses")
  const [date, setDate] = useState("Last 30 days")
  const [cohort, setCohort] = useState("All cohorts")
  return (
    <>
      <PageHeader
        eyebrow="EDUCATOR WORKSPACE"
        title="Learning analytics"
        subtitle="A clearer view of the questions behind the learning."
        right={
          <Badge tone="violet" icon="info">
            Illustrative data
          </Badge>
        }
      />
      <div className="filters">
        <label>
          <Icon name="book" size={16} />
          <select
            aria-label="Filter by course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option>All courses</option>
            <option>Biology 101</option>
            <option>Earth Science</option>
            <option>World History</option>
          </select>
          <Icon name="chevron" size={15} />
        </label>
        <label>
          <Icon name="clock" size={16} />
          <select
            aria-label="Filter by date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          >
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>This semester</option>
          </select>
          <Icon name="chevron" size={15} />
        </label>
        <label>
          <Icon name="users" size={16} />
          <select
            aria-label="Filter by cohort"
            value={cohort}
            onChange={(e) => setCohort(e.target.value)}
          >
            <option>All cohorts</option>
            <option>Section A</option>
            <option>Section B</option>
          </select>
          <Icon name="chevron" size={15} />
        </label>
      </div>
      <p className="filter-caption">
        Sample view: {course} · {date} · {cohort}. Filters demonstrate the
        interface; metrics are illustrative.
      </p>
      <div className="analytics-metrics">
        {analyticsMetrics.map((m) => (
          <div className="metric-card analytics-metric" key={m.label}>
            <span className="metric-icon">
              <Icon name={m.icon} size={19} />
            </span>
            <span className="metric-label">{m.label}</span>
            <strong>{m.value}</strong>
            <small className={m.positive ? "positive" : ""}>{m.change}</small>
          </div>
        ))}
      </div>
      <div className="analytics-grid">
        <div className="panel chart-panel">
          <div className="panel-heading">
            <div>
              <h2>Questions over time</h2>
              <p>How curiosity shows up in your classroom</p>
            </div>
            <Badge>Weekly</Badge>
          </div>
          <div className="chart-area">
            <div className="chart-y">
              <span>400</span>
              <span>300</span>
              <span>200</span>
              <span>100</span>
              <span>0</span>
            </div>
            <div className="bar-chart">
              {[43, 57, 49, 66, 59, 76, 69, 88].map((height, i) => (
                <div className="bar-group" key={i}>
                  <div className="bar" style={{ height: `${height}%` }} />
                  <small>W{i + 1}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="panel misconception-panel">
          <div className="panel-heading">
            <div>
              <h2>Top misconceptions</h2>
              <p>Where students need a second look</p>
            </div>
          </div>
          <div className="misconception-list">
            <div>
              <span>
                <strong>Antibiotics & viruses</strong>
                <small>Biology 101</small>
              </span>
              <span className="mini-bar">
                <i style={{ width: "82%" }} />
              </span>
              <b>32</b>
            </div>
            <div>
              <span>
                <strong>Seasons & distance</strong>
                <small>Earth Science</small>
              </span>
              <span className="mini-bar">
                <i style={{ width: "61%" }} />
              </span>
              <b>24</b>
            </div>
            <div>
              <span>
                <strong>Natural selection</strong>
                <small>Biology 101</small>
              </span>
              <span className="mini-bar">
                <i style={{ width: "43%" }} />
              </span>
              <b>17</b>
            </div>
            <div>
              <span>
                <strong>Primary sources</strong>
                <small>World History</small>
              </span>
              <span className="mini-bar">
                <i style={{ width: "32%" }} />
              </span>
              <b>13</b>
            </div>
          </div>
        </div>
      </div>
      <div className="panel recent-audits">
        <div className="panel-heading">
          <div>
            <h2>Recent answer reviews</h2>
            <p>Follow the evidence behind sample tutor responses</p>
          </div>
          <button className="inline-link" onClick={() => navigate("audit")}>
            View audit trail <Icon name="arrow" size={15} />
          </button>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>QUESTION</th>
                <th>COURSE</th>
                <th>STATUS</th>
                <th>ROUNDS</th>
                <th>REVIEW</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{sampleQuestion}</td>
                <td>Biology 101</td>
                <td>
                  <Badge tone="green" icon="check">
                    Verified
                  </Badge>
                </td>
                <td>2</td>
                <td>
                  <button
                    onClick={() => navigate("audit")}
                    aria-label="Review antibiotics answer"
                  >
                    <Icon name="arrow" size={17} />
                  </button>
                </td>
              </tr>
              <tr>
                <td>What causes the seasons?</td>
                <td>Earth Science</td>
                <td>
                  <Badge tone="green" icon="check">
                    Verified
                  </Badge>
                </td>
                <td>3</td>
                <td>
                  <button
                    onClick={() => navigate("audit")}
                    aria-label="Review seasons answer"
                  >
                    <Icon name="arrow" size={17} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
function Audit({ navigate }: { navigate: (p: Page) => void }) {
  const [active, setActive] = useState("Evidence")
  return (
    <>
      <PageHeader
        eyebrow="EDUCATOR WORKSPACE"
        title="Answer audit trail"
        subtitle="Review what was retrieved, challenged, and checked before an answer was shown."
        right={
          <Badge tone="violet" icon="info">
            Sample record
          </Badge>
        }
      />
      <div className="audit-layout">
        <div className="panel audit-main">
          <div className="audit-top">
            <div>
              <span className="small-label">ANSWER RECORD · BIOLOGY 101</span>
              <h2>{sampleQuestion}</h2>
              <span>Sample record · 2 retrieval hops · 2 debate rounds</span>
            </div>
            <Badge tone="green" icon="shield">
              Verified
            </Badge>
          </div>
          <div className="tab-list" role="tablist" aria-label="Audit sections">
            {["Evidence", "Challenges", "Convergence", "Final answer"].map(
              (tab) => (
                <button
                  role="tab"
                  aria-selected={active === tab}
                  className={active === tab ? "selected" : ""}
                  onClick={() => setActive(tab)}
                  key={tab}
                >
                  {tab}
                </button>
              ),
            )}
          </div>
          <div className="audit-body">
            {active === "Evidence" && (
              <>
                <h3>Retrieved course evidence</h3>
                <p>
                  Two retrieval hops surfaced relevant course material for this
                  answer.
                </p>
                <div className="audit-evidence">
                  <span className="audit-index">01</span>
                  <span>
                    <strong>Microbiology notes · Week 4</strong>
                    <small>
                      Bacterial cell walls and ribosomes are targets of
                      different antibiotic classes.
                    </small>
                  </span>
                  <Badge tone="violet">Hop 1</Badge>
                </div>
                <div className="audit-evidence">
                  <span className="audit-index">02</span>
                  <span>
                    <strong>Viruses and host cells · Week 4</strong>
                    <small>
                      Viruses use host-cell machinery to replicate and lack the
                      same independent structures.
                    </small>
                  </span>
                  <Badge tone="violet">Hop 2</Badge>
                </div>
                <div className="audit-evidence">
                  <span className="audit-index">03</span>
                  <span>
                    <strong>Antibiotic resistance · Week 5</strong>
                    <small>
                      Unnecessary antibiotic use contributes to the development
                      of resistant bacteria.
                    </small>
                  </span>
                  <Badge tone="violet">Hop 2</Badge>
                </div>
              </>
            )}
            {active === "Challenges" && (
              <>
                <h3>Debate challenges</h3>
                <p>
                  Evidence summaries from the example review, not internal model
                  deliberation.
                </p>
                <div className="audit-evidence">
                  <span className="audit-index">
                    <Icon name="messages" size={17} />
                  </span>
                  <span>
                    <strong>Alternative case checked</strong>
                    <small>
                      Can antibiotics be used during a viral illness? Only for a
                      separate bacterial co-infection, not the virus itself.
                    </small>
                  </span>
                  <Badge>Addressed</Badge>
                </div>
                <div className="audit-evidence">
                  <span className="audit-index">
                    <Icon name="shield" size={17} />
                  </span>
                  <span>
                    <strong>Claim support checked</strong>
                    <small>
                      Claims about bacterial targets and viral replication
                      matched the sample course excerpts.
                    </small>
                  </span>
                  <Badge tone="green">Supported</Badge>
                </div>
              </>
            )}
            {active === "Convergence" && (
              <>
                <h3>Convergence summary</h3>
                <p>
                  The explanation retained the source-supported distinction
                  between bacteria and viruses. A note about antibiotic
                  resistance was added for context.
                </p>
                <div className="convergence-box">
                  <Icon name="check" size={20} />
                  <span>
                    <strong>No outstanding conflicts in this sample</strong>
                    <small>
                      1 challenge addressed · 3 claims matched · final answer
                      approved
                    </small>
                  </span>
                </div>
              </>
            )}
            {active === "Final answer" && (
              <>
                <h3>Student-facing answer</h3>
                <p className="audit-final-answer">{sampleAnswer}</p>
                <div className="convergence-box">
                  <Icon name="shield" size={20} />
                  <span>
                    <strong>Verified sample answer</strong>
                    <small>
                      Grounded in the course excerpts listed in this record
                    </small>
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
        <aside className="panel audit-side">
          <span className="eyebrow">REVIEW SNAPSHOT</span>
          <h3>From source to student</h3>
          <div>
            <span>Retrieval hops</span>
            <strong>2</strong>
          </div>
          <div>
            <span>Sources reviewed</span>
            <strong>3</strong>
          </div>
          <div>
            <span>Debate challenges</span>
            <strong>1</strong>
          </div>
          <div>
            <span>Unresolved claims</span>
            <strong>0</strong>
          </div>
          <Button
            variant="secondary"
            onClick={() => navigate("trail")}
            icon="arrow"
          >
            Open student view
          </Button>
        </aside>
      </div>
    </>
  )
}
type UploadItem = {
  name: string
  size: string
  status: "Uploading" | "Processing" | "Indexed" | "Error"
  demo?: boolean
}
function Courses() {
  const [course, setCourse] = useState("Biology 101")
  const [dragging, setDragging] = useState(false)
  const [items, setItems] = useState<UploadItem[]>([
    { name: "Microbiology_Week_4.pdf", size: "2.4 MB", status: "Indexed" },
    { name: "Antibiotic_Resistance.pdf", size: "1.8 MB", status: "Indexed" },
    { name: "Lecture_Notes_Week_5.pdf", size: "3.1 MB", status: "Processing" },
    { name: "Unclear_Scan.pdf", size: "0.8 MB", status: "Error" },
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const addFiles = (files: FileList | null) => {
    if (!files?.length) return
    const incoming = Array.from(files).map((f) => ({
      name: f.name,
      size: `${Math.max(0.1, f.size / 1048576).toFixed(1)} MB`,
      status: "Uploading" as const,
      demo: true,
    }))
    setItems((current) => [...incoming, ...current])
    window.setTimeout(
      () =>
        setItems((current) =>
          current.map((item) =>
            incoming.some((f) => f.name === item.name && item.demo)
              ? { ...item, status: "Processing" }
              : item,
          ),
        ),
      800,
    )
    window.setTimeout(
      () =>
        setItems((current) =>
          current.map((item) =>
            incoming.some((f) => f.name === item.name && item.demo)
              ? { ...item, status: "Indexed" }
              : item,
          ),
        ),
      1800,
    )
  }
  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    setDragging(false)
    addFiles(e.dataTransfer.files)
  }
  return (
    <>
      <PageHeader
        eyebrow="EDUCATOR WORKSPACE"
        title="Course management"
        subtitle="Organize the materials that give your tutor its grounding."
        right={
          <Badge tone="violet" icon="info">
            Simulated indexing
          </Badge>
        }
      />
      <div className="course-layout">
        <div className="course-left">
          <div className="panel course-overview">
            <span className="small-label">CURRENT COURSE</span>
            <div className="course-overview-row">
              <span className="course-icon biology">
                <Icon name="brain" size={24} />
              </span>
              <div>
                <select
                  aria-label="Select course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option>Biology 101</option>
                  <option>Earth Science</option>
                  <option>World History</option>
                </select>
                <p>Course materials and indexing status</p>
              </div>
            </div>
            <div className="course-facts">
              <span>
                <strong>{items.length}</strong> Documents
              </span>
              <span>
                <strong>
                  {items.filter((i) => i.status === "Indexed").length}
                </strong>{" "}
                Indexed
              </span>
              <span>
                <strong>2</strong> Sample retrieval hops
              </span>
            </div>
          </div>
          <div className="panel upload-panel">
            <h2>Add course materials</h2>
            <p>
              Give answers a strong foundation with lecture notes, readings, and
              handouts.
            </p>
            <div
              className={`dropzone ${dragging ? "dragging" : ""}`}
              onDragOver={(e) => {
                e.preventDefault()
                setDragging(true)
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
            >
              <span className="upload-icon">
                <Icon name="upload" size={25} />
              </span>
              <strong>Drag and drop files here</strong>
              <span>
                or{" "}
                <button onClick={() => inputRef.current?.click()}>
                  browse your files
                </button>
              </span>
              <small>
                PDF, DOCX, or TXT · Demo only, files are not uploaded
              </small>
              <input
                type="file"
                ref={inputRef}
                multiple
                accept=".pdf,.docx,.txt"
                className="sr-only"
                onChange={(e) => {
                  addFiles(e.target.files)
                  e.target.value = ""
                }}
              />
            </div>
            <div className="upload-disclaimer">
              <Icon name="info" size={16} /> Upload and indexing statuses are
              simulated locally. File contents are not read or sent anywhere.
            </div>
          </div>
        </div>
        <div className="panel documents-panel">
          <div className="panel-heading">
            <div>
              <h2>Course documents</h2>
              <p>Illustrative documents and local demo uploads</p>
            </div>
            <Badge>{items.length} files</Badge>
          </div>
          <div className="document-list">
            {items.map((item, i) => (
              <div className="document-row" key={`${item.name}-${i}`}>
                <span className="row-icon violet-bg">
                  <Icon name="file" size={19} />
                </span>
                <span className="document-name">
                  <strong>{item.name}</strong>
                  <small>
                    {item.size}
                    {item.demo
                      ? " · Demo file, not actually indexed"
                      : " · Sample document"}
                  </small>
                </span>
                <Badge
                  tone={
                    item.status === "Indexed"
                      ? "green"
                      : item.status === "Error"
                        ? "red"
                        : item.status === "Processing"
                          ? "violet"
                          : "amber"
                  }
                  icon={
                    item.status === "Indexed"
                      ? "check"
                      : item.status === "Error"
                        ? "info"
                        : "clock"
                  }
                >
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
function Research() {
  const metrics = [
    {
      value: "94.2%",
      label: "Answer accuracy",
      icon: "target" as IconName,
      detail: "Source-supported sample answers",
    },
    {
      value: "3.1%",
      label: "Hallucination rate",
      icon: "shield" as IconName,
      detail: "Unsupported claims in sample set",
    },
    {
      value: "91.8%",
      label: "Retrieval precision",
      icon: "search" as IconName,
      detail: "Relevant retrieved passages",
    },
    {
      value: "87.4%",
      label: "Misconception detection",
      icon: "brain" as IconName,
      detail: "Identified in sample questions",
    },
    {
      value: "96.1%",
      label: "Convergence rate",
      icon: "layers" as IconName,
      detail: "Debates reaching resolution",
    },
    {
      value: "3.8s",
      label: "Median latency",
      icon: "clock" as IconName,
      detail: "Sample response duration",
    },
    {
      value: "$0.04",
      label: "Estimated cost / answer",
      icon: "chart" as IconName,
      detail: "Illustrative model usage",
    },
  ]
  return (
    <>
      <PageHeader
        eyebrow="RESEARCH & EVALUATION"
        title="Measuring what matters"
        subtitle="A framework for evaluating answer quality, learning value, and system efficiency."
        right={
          <Badge tone="violet" icon="info">
            Illustrative metrics
          </Badge>
        }
      />
      <div className="research-intro">
        <span className="research-intro-icon">
          <Icon name="target" size={24} />
        </span>
        <div>
          <strong>Research prototype, not a performance claim</strong>
          <p>
            These values are placeholder data to demonstrate an evaluation
            dashboard. No live model or study is connected to this demo.
          </p>
        </div>
      </div>
      <div className="research-grid">
        {metrics.map((m) => (
          <div className="metric-card research-metric" key={m.label}>
            <span className="metric-icon">
              <Icon name={m.icon} size={20} />
            </span>
            <strong>{m.value}</strong>
            <h3>{m.label}</h3>
            <small>{m.detail}</small>
          </div>
        ))}
      </div>
      <div className="panel methodology">
        <span className="eyebrow">THE EVALUATION LENS</span>
        <h2>Not just faster answers. Better ones.</h2>
        <p>
          DebateTutor's evaluation framework brings together groundedness,
          retrieval relevance, misconception identification, debate convergence,
          and practical system measures. In a live deployment, each metric would
          require a documented dataset and repeatable evaluation method.
        </p>
        <div>
          <span>
            <Icon name="book" size={18} /> Evidence quality
          </span>
          <span>
            <Icon name="messages" size={18} /> Debate outcomes
          </span>
          <span>
            <Icon name="clock" size={18} /> System efficiency
          </span>
        </div>
      </div>
    </>
  )
}
function Library() {
  const [tab, setTab] = useState("Components")
  return (
    <>
      <PageHeader
        eyebrow="DESIGN SYSTEM"
        title="The building blocks"
        subtitle="A small, reusable visual language for thoughtful learning experiences."
      />
      <div className="panel library-panel">
        <div
          className="tab-list"
          role="tablist"
          aria-label="Component library sections"
        >
          {["Components", "Colors", "Typography"].map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              className={tab === t ? "selected" : ""}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
        {tab === "Components" && (
          <div className="library-content">
            <div className="library-group">
              <span className="small-label">ACTIONS</span>
              <div className="library-row">
                <Button icon="arrow">Primary action</Button>
                <Button variant="secondary" icon="arrow">
                  Secondary action
                </Button>
                <Button variant="ghost">Text action</Button>
              </div>
            </div>
            <div className="library-group">
              <span className="small-label">STATUS INDICATORS</span>
              <div className="library-row">
                <Badge tone="green" icon="shield">
                  Verified
                </Badge>
                <Badge tone="violet" icon="layers">
                  Processing
                </Badge>
                <Badge tone="amber" icon="clock">
                  Uploading
                </Badge>
                <Badge tone="red" icon="info">
                  Error
                </Badge>
              </div>
            </div>
            <div className="library-group">
              <span className="small-label">INPUTS</span>
              <div className="library-row">
                <label className="field-label">
                  Course question
                  <input placeholder="Ask a thoughtful question..." />
                </label>
                <label className="field-label">
                  Select a course
                  <select>
                    <option>Biology 101</option>
                    <option>Earth Science</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="library-group">
              <span className="small-label">SURFACES</span>
              <div className="library-row">
                <div className="library-surface">
                  <span className="feature-icon lilac">
                    <Icon name="spark" size={20} />
                  </span>
                  <strong>Consider every angle</strong>
                  <p>Consistent cards make important ideas easy to scan.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {tab === "Colors" && (
          <div className="library-content">
            <span className="small-label">PRODUCT PALETTE</span>
            <div className="swatch-grid">
              {[
                ["Indigo", "indigo"],
                ["Violet", "violet"],
                ["Verified", "verified"],
                ["Canvas", "canvas"],
                ["Ink", "ink"],
              ].map(([name, color]) => (
                <div key={name}>
                  <span className={`swatch swatch-${color}`} />
                  <strong>{name}</strong>
                </div>
              ))}
            </div>
          </div>
        )}
        {tab === "Typography" && (
          <div className="library-content type-showcase">
            <span className="small-label">INTER · CLEAR AT EVERY SCALE</span>
            <h2>Ideas worth exploring.</h2>
            <h3>Understanding starts with a question.</h3>
            <p>
              Thoughtful typography gives every explanation room to breathe,
              from a quick insight to a deeper dive.
            </p>
            <span className="eyebrow">SMALL DETAILS, BIG CLARITY</span>
          </div>
        )}
      </div>
    </>
  )
}

export default function App() {
  const validPages: Page[] = [
    "home",
    "dashboard",
    "chat",
    "trail",
    "saved",
    "analytics",
    "audit",
    "courses",
    "research",
    "library",
    "login",
    "signup",
    "forgot",
    "reset",
  ]
  const fromHash = (): Page => {
    const hash = window.location.hash.slice(1) as Page
    return validPages.includes(hash) ? hash : "home"
  }
  const [page, setPage] = useState<Page>(fromHash)
  const [role, setRole] = useState<"student" | "teacher">("student")
  const [saved, setSaved] = useState(false)
  useEffect(() => {
    const sync = () => setPage(fromHash())
    window.addEventListener("hashchange", sync)
    return () => window.removeEventListener("hashchange", sync)
  }, [])
  const navigate = (next: Page) => {
    window.location.hash = next === "home" ? "" : next
    setPage(next)
    window.scrollTo(0, 0)
  }
  const enter = (selectedRole: "student" | "teacher") => {
    setRole(selectedRole)
    navigate(selectedRole === "student" ? "dashboard" : "analytics")
  }
  if (page === "home") return <Landing navigate={navigate} />
  if (["login", "signup", "forgot", "reset"].includes(page))
    return <Auth key={page} page={page} navigate={navigate} enter={enter} />
  return (
    <Workspace
      page={page}
      navigate={navigate}
      role={role}
      setRole={setRole}
      saved={saved}
      setSaved={setSaved}
    />
  )
}
