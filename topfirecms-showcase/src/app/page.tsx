"use client";

import { useEffect } from "react";

export default function Home() {
  const projectDocsUrl = "https://github.com/oxydev-graeme/tfmcms/tree/main/FireContent";

  const roiInputs = {
    sanitySeatCostPerMonth: 20,
    sanitySeats: 12,
    projectsPerYear: 24,
    daysSavedPerProject: 8,
    blendedDayRate: 450,
    platformOpsYearly: 2000,
  };

  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  const yearlySanityCost = roiInputs.sanitySeatCostPerMonth * roiInputs.sanitySeats * 12;
  const yearlyRecoveredCapacity =
    roiInputs.projectsPerYear * roiInputs.daysSavedPerProject * roiInputs.blendedDayRate;
  const yearlyNetImpact = yearlyRecoveredCapacity - yearlySanityCost - roiInputs.platformOpsYearly;
  const roiMultiple = yearlyRecoveredCapacity / (yearlySanityCost + roiInputs.platformOpsYearly);

  type ComparisonTone = "good" | "mid" | "low";
  type ComparisonCell = {
    label: string;
    score: number;
    tone: ComparisonTone;
  };
  type ComparisonRow = {
    category: string;
    subtitle: string;
    cells: ComparisonCell[];
  };

  const comparisonColumns = ["FireContent", "Sanity", "Contently", "Contentful"];

  const comparisonRows: ComparisonRow[] = [
    {
      category: "Platform Cost",
      subtitle: "True cost of ownership per year (platform + typical usage/support)",
      cells: [
        { label: `FireContent: ${currency.format(roiInputs.platformOpsYearly)}/yr (fixed, no extras)`, score: 82, tone: "good" },
        { label: `$8k-$15k (base + usage overage)`, score: 68, tone: "mid" },
        { label: "$65k-$180k/yr enterprise", score: 36, tone: "low" },
        { label: "$18k-$60k/yr tiered seat model", score: 56, tone: "mid" },
      ],
    },
    {
      category: "Schema Flexibility",
      subtitle: "Custom model control",
      cells: [
        { label: "Full agency control", score: 96, tone: "good" },
        { label: "Excellent", score: 88, tone: "good" },
        { label: "Moderate", score: 58, tone: "mid" },
        { label: "Strong", score: 82, tone: "good" },
      ],
    },
    {
      category: "Governance",
      subtitle: "Workflow and compliance fit",
      cells: [
        { label: "Agency-specific governance", score: 90, tone: "good" },
        { label: "Strong baseline", score: 84, tone: "good" },
        { label: "Enterprise editorial", score: 86, tone: "good" },
        { label: "Strong with config", score: 80, tone: "good" },
      ],
    },
    {
      category: "Speed to Launch",
      subtitle: "Time to initial rollout",
      cells: [
        { label: "12-week internal MVP", score: 72, tone: "mid" },
        { label: "Fastest start", score: 90, tone: "good" },
        { label: "Long enterprise cycle", score: 46, tone: "low" },
        { label: "Fast with team enablement", score: 78, tone: "good" },
      ],
    },
    {
      category: "Vendor Lock-In Risk",
      subtitle: "Strategic control over roadmap",
      cells: [
        { label: "Minimal", score: 94, tone: "good" },
        { label: "Medium", score: 62, tone: "mid" },
        { label: "High contract dependency", score: 40, tone: "low" },
        { label: "Medium", score: 58, tone: "mid" },
      ],
    },
    {
      category: "Long-Term Margin Impact",
      subtitle: "Agency upside over 2-3 years after launch",
      cells: [
        { label: "Highest: $71k+/yr after year 1", score: 92, tone: "good" },
        { label: "$50-80k/yr as usage grows", score: 74, tone: "good" },
        { label: "Loss or break-even (enterprise trap)", score: 44, tone: "low" },
        { label: "Modest gains, $10-20k/yr", score: 68, tone: "mid" },
      ],
    },
  ];

  const getToneIconClass = (tone: ComparisonTone) => {
    if (tone === "good") return "lnr-checkmark-circle text-emerald-300";
    if (tone === "mid") return "lnr-circle-minus text-amber-300";
    return "lnr-cross-circle text-rose-300";
  };

  const getToneBarClass = (tone: ComparisonTone) => {
    if (tone === "good") return "bg-[linear-gradient(90deg,#12d6a1,#22d3ee)]";
    if (tone === "mid") return "bg-[linear-gradient(90deg,#f59e0b,#fb7185)]";
    return "bg-[linear-gradient(90deg,#fb7185,#ef4444)]";
  };

  const headlineStats = [
    { label: "MVP timeline", value: "12 weeks", icon: "lnr-clock" },
    { label: "Pilot clients", value: "2 workspaces", icon: "lnr-users" },
    { label: "Provisioning target", value: "< 30 min", icon: "lnr-rocket" },
    { label: "Availability target", value: "99.9%", icon: "lnr-cloud-check" },
  ];

  const painPoints = [
    {
      title: "Tool sprawl slows delivery",
      detail:
        "Different client setups force duplicate work and prevent a repeatable operating model.",
      metric: "Margin pressure",
      icon: "lnr-cog",
    },
    {
      title: "Publishing risk stays high",
      detail:
        "Without a shared workflow, quality control relies too much on manual effort and tribal knowledge.",
      metric: "Reputation exposure",
      icon: "lnr-warning",
    },
    {
      title: "Client onboarding is too manual",
      detail:
        "Each new client should start from proven templates, not a fresh process every time.",
      metric: "Time-to-value drag",
      icon: "lnr-hourglass",
    },
  ];

  const outcomes = [
    {
      title: "Faster Client Onboarding",
      value: "< 30 min",
      copy: "Spin up a client workspace from approved blueprints instead of manual setup.",
      icon: "lnr-rocket",
    },
    {
      title: "Reliable Publishing",
      value: "99.9%",
      copy: "Use one governed path from draft to review to publish.",
      icon: "lnr-cloud-check",
    },
    {
      title: "Clear Governance",
      value: "Full audit",
      copy: "Track who changed what, when, and why across every workspace.",
      icon: "lnr-license",
    },
    {
      title: "Lower Long-Term Lock-in",
      value: "Agency owned",
      copy: "Roadmap, workflows, and priorities remain fully aligned to agency strategy.",
      icon: "lnr-diamond",
    },
  ];

  const operatingModel = [
    {
      title: "Standardize",
      copy: "Shared templates and content patterns across clients reduce rework.",
      icon: "lnr-list",
    },
    {
      title: "Govern",
      copy: "Clear roles and approvals keep publishing quality consistent.",
      icon: "lnr-lock",
    },
    {
      title: "Scale",
      copy: "A single platform supports many clients without multiplying complexity.",
      icon: "lnr-earth",
    },
    {
      title: "Measure",
      copy: "Leadership gets better visibility into delivery speed, risk, and reliability.",
      icon: "lnr-chart-bars",
    },
  ];

  const roadmap = [
    {
      phase: "Weeks 1-4",
      title: "Foundation",
      copy: "Set up the core platform, workspace structure, and repeatable content model baseline.",
      icon: "lnr-construction",
    },
    {
      phase: "Weeks 5-8",
      title: "Workflow",
      copy: "Launch review and publish operations with role-based governance.",
      icon: "lnr-sync",
    },
    {
      phase: "Weeks 9-12",
      title: "Pilot",
      copy: "Harden operations and run two client pilots to validate performance and adoption.",
      icon: "lnr-flag",
    },
  ];

  const businessCase = [
    {
      title: "Reduce delivery variability",
      copy: "One operating model replaces project-by-project improvisation.",
      icon: "lnr-magic-wand",
    },
    {
      title: "Protect brand quality",
      copy: "Structured review and approvals lower the chance of public-facing errors.",
      icon: "lnr-star",
    },
    {
      title: "Improve team leverage",
      copy: "Reusable templates let teams deliver more client value with the same headcount.",
      icon: "lnr-briefcase",
    },
  ];

  const concerns = [
    {
      q: "Will this become a giant custom build?",
      a: "No. The plan is intentionally constrained to a 12-week MVP with strict guardrails.",
    },
    {
      q: "Can non-technical client teams use it?",
      a: "Yes. The experience is workflow-guided and focused on editors and approvers, not developers.",
    },
    {
      q: "Is this replacing everything at once?",
      a: "No. Rollout can be phased by priority and timing to avoid disruption.",
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    const root = document.documentElement;
    root.classList.add("motion-reveal");

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-children")
    );

    const revealVisibleTargets = () => {
      const viewportHeight = window.innerHeight;
      const revealLine = viewportHeight * 0.86;

      for (const target of revealTargets) {
        if (target.classList.contains("is-visible")) {
          continue;
        }

        const rect = target.getBoundingClientRect();
        const isInRevealZone = rect.top <= revealLine && rect.bottom >= 0;
        if (isInRevealZone) {
          target.classList.add("is-visible");
        }
      }
    };

    let rafId: number | null = null;
    const onScrollOrResize = () => {
      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        revealVisibleTargets();
        rafId = null;
      });
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    revealVisibleTargets();

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      root.classList.remove("motion-reveal");
    };
  }, []);

  return (
    <div className="site-shell text-[var(--tf-text)]">
      <header className="sticky top-0 z-40 bg-[#090613]/88 backdrop-blur-md reveal">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8">
          <p className="text-sm font-semibold tracking-wide text-white">FireContent</p>
          <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.08em] sm:flex reveal-children">
            <a href="#problem" className="text-muted hover:text-white">
              Problem
            </a>
            <a href="#solution" className="text-muted hover:text-white">
              Solution
            </a>
            <a
              href={projectDocsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white"
            >
              Docs
            </a>
            <a href="#roi" className="text-muted hover:text-white">
              ROI
            </a>
            <a href="#roadmap" className="text-muted hover:text-white">
              Roadmap
            </a>
            <a href="#decision" className="text-muted hover:text-white">
              Decision
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1440px] space-y-20 px-5 pb-28 pt-10 text-[var(--tf-text)] sm:space-y-24 sm:px-8 sm:pt-14 lg:space-y-28">
        <section className="reveal px-2 py-5 sm:px-3 sm:py-8">
          <p className="section-chip text-xs text-muted">CEO BRIEFING</p>
          <h1 className="display-title mt-4 text-5xl font-semibold sm:text-7xl lg:text-8xl">
            One CMS Platform.
            <br />
            Every Client Workspace.
            <br />
            <span className="gradient-text">Fully Under Our Control.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            FireContent is a private headless CMS designed for our agency and our clients. It standardizes
            delivery, reduces publishing risk, and gives leadership a predictable path from idea to measurable
            operational gains.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row reveal-children">
            <a
              href="#decision"
              className="btn-primary inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
            >
              See the Decision Path
            </a>
            <a
              href="#roadmap"
              className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
            >
              View 12-Week Plan
            </a>
            <a
              href={projectDocsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold"
            >
              <span className="lnr lnr-book li-icon li-icon-sm li-icon-contrast" aria-hidden="true" />
              View Project Docs
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 reveal-children">
            {headlineStats.map((item) => (
              <article key={item.label} className="panel rounded-2xl p-4">
                <div className="flex flex-col items-start gap-3">
                  <span className={`lnr ${item.icon} li-icon li-icon-lg li-icon-contrast`} aria-hidden="true" />
                  <p className="metric-value text-base text-white">{item.value}</p>
                </div>
                <p className="mt-1 text-xs text-muted">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="problem" className="section-block-alt reveal reveal-delay-1 p-7 sm:p-10">
          <p className="section-chip text-xs text-muted">THE CURRENT REALITY</p>
          <h2 className="display-title mt-3 text-4xl font-semibold sm:text-6xl">
            Where We Lose <span className="gradient-text">Time and Margin Today.</span>
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3 reveal-children">
            {painPoints.map((item) => (
              <article key={item.title} className="panel rounded-3xl p-6">
                <span className={`lnr ${item.icon} li-icon li-icon-lg li-icon-contrast`} aria-hidden="true" />
                <p className="section-chip mt-3 text-[11px] text-muted">{item.metric}</p>
                <h3 className="mt-3 text-xl font-semibold">
                  {item.title} <span className="gradient-text">.</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="solution" className="section-block reveal reveal-delay-2 p-7 sm:p-10">
          <p className="section-chip text-xs text-muted">THE PROPOSED SHIFT</p>
          <h2 className="display-title mt-3 text-4xl font-semibold sm:text-6xl">
            FireContent Delivers
            <span className="gradient-text"> Business-Level Outcomes</span>
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            This project is not a public SaaS. It is a focused internal platform for one agency serving multiple
            clients with clear role boundaries, safer publishing, and reusable operating patterns.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 reveal-children">
            {outcomes.map((item) => (
              <article key={item.title} className="panel-soft rounded-3xl p-6">
                <span className={`lnr ${item.icon} li-icon li-icon-lg li-icon-contrast`} aria-hidden="true" />
                <p className="metric-value gradient-text mt-3 text-lg">{item.value}</p>
                <h3 className="mt-2 text-2xl font-semibold">
                  {item.title} <span className="gradient-text">.</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block-alt reveal reveal-delay-3 p-7 sm:p-10">
          <p className="section-chip text-xs text-muted">OPERATING MODEL</p>
          <h2 className="display-title text-4xl font-semibold sm:text-6xl">
            Build a Repeatable System, <span className="gradient-text">Not One-Off Projects.</span>
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 reveal-children">
            {operatingModel.map((item) => (
              <article key={item.title} className="panel-soft rounded-3xl p-6">
                <span className={`lnr ${item.icon} li-icon li-icon-lg li-icon-contrast`} aria-hidden="true" />
                <h3 className="mt-3 text-xl font-semibold">
                  {item.title} <span className="gradient-text">.</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block reveal p-7 sm:p-10">
          <p className="section-chip text-xs text-muted">WHY THIS MATTERS TO LEADERSHIP</p>
          <h2 className="display-title mt-3 text-4xl font-semibold sm:text-6xl">
            Better Control Over <span className="gradient-text">Growth and Quality.</span>
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3 reveal-children">
            {businessCase.map((item) => (
              <article key={item.title} className="panel rounded-3xl p-6">
                <span className={`lnr ${item.icon} li-icon li-icon-lg li-icon-contrast`} aria-hidden="true" />
                <h3 className="mt-3 text-2xl font-semibold">
                  {item.title} <span className="gradient-text">.</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="roi" className="section-block-alt reveal p-7 sm:p-10">
          <p className="section-chip text-xs text-muted">FINANCIAL IMPACT</p>
          <h2 className="display-title mt-3 text-4xl font-semibold sm:text-6xl">
            Revenue Capacity Gain vs
            <span className="gradient-text"> Competitor Platforms</span>
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            Illustrative model for leadership planning. Adjust the assumptions to match your real seat count,
            project volume, and rate card.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3 reveal-children">
            <article className="panel rounded-3xl p-6">
              <span className="lnr lnr-wallet li-icon li-icon-lg li-icon-contrast" aria-hidden="true" />
              <p className="section-chip mt-3 text-[11px] text-muted">ANNUAL PLATFORM COST</p>
              <p className="metric-value mt-2 text-2xl text-white">{currency.format(roiInputs.platformOpsYearly)}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                FireContent operational cost only. Enterprise competitors typically range $18k–$180k annually. Sanity base ($2,880) typically incurs 3–5x in usage + implementation.
              </p>
            </article>

            <article className="panel rounded-3xl p-6">
              <span className="lnr lnr-chart-bars li-icon li-icon-lg li-icon-contrast" aria-hidden="true" />
              <p className="section-chip mt-3 text-[11px] text-muted">ANNUAL RECOVERED CAPACITY</p>
              <p className="metric-value mt-2 text-2xl text-white">{currency.format(yearlyRecoveredCapacity)}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Efficiency gains from standardized workflows & reusable components: {roiInputs.projectsPerYear} projects × {roiInputs.daysSavedPerProject} days × {currency.format(roiInputs.blendedDayRate)}/day.
              </p>
            </article>

            <article className="panel-soft rounded-3xl p-6">
              <span className="lnr lnr-diamond li-icon li-icon-lg li-icon-contrast" aria-hidden="true" />
              <p className="section-chip mt-3 text-[11px] text-muted">NET YEARLY OPERATIONAL PROFIT</p>
              <p className="metric-value mt-2 text-2xl text-white">{currency.format(yearlyNetImpact)}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Recovered capacity ({currency.format(yearlyRecoveredCapacity)}) minus FireContent ops ({currency.format(roiInputs.platformOpsYearly)}) realizes {roiMultiple.toFixed(1)}x immediate ROI. Competitors: break-even at best.
              </p>
            </article>
          </div>

          <div className="mt-12">
            <h3 className="flex items-center gap-3 text-2xl font-semibold sm:text-3xl">
              <span className="lnr lnr-chart-bars li-icon li-icon-md li-icon-contrast" aria-hidden="true" />
              <span>
                Platform Comparison <span className="gradient-text">Matrix</span>
              </span>
            </h3>
            <div className="panel mt-5 rounded-3xl bg-[linear-gradient(180deg,rgba(14,20,42,0.82),rgba(8,11,24,0.92))] p-3 sm:p-4">
              <div className="overflow-x-auto">
                <div className="min-w-[1060px] space-y-2 reveal-children">
                  <div className="grid grid-cols-[260px_repeat(4,minmax(180px,1fr))] gap-2">
                    <div className="rounded-2xl bg-white/[0.03] px-4 py-4 section-chip text-[11px] text-muted">CATEGORY</div>
                    {comparisonColumns.map((column, index) => (
                      <div key={column} className="rounded-2xl bg-white/[0.03] px-4 py-4 text-sm font-semibold text-white">
                        <span className={index === 0 ? "gradient-text" : "text-white"}>{column}</span>
                      </div>
                    ))}
                  </div>

                  {comparisonRows.map((row) => (
                    <div key={row.category} className="grid grid-cols-[260px_repeat(4,minmax(180px,1fr))] gap-2 reveal-children">
                      <div className="rounded-2xl bg-white/[0.02] px-4 py-4">
                        <p className="text-xl font-semibold text-white">{row.category}</p>
                        <p className="mt-1 text-sm text-muted">{row.subtitle}</p>
                      </div>

                      {row.cells.map((cell, idx) => (
                        <div key={`${row.category}-${idx}`} className="rounded-2xl bg-white/[0.02] px-4 py-4">
                          <p className="flex items-center gap-2 text-sm font-semibold text-white">
                            <span className={`lnr ${getToneIconClass(cell.tone)} li-icon li-icon-sm`} aria-hidden="true" />
                            <span>{cell.label}</span>
                          </p>
                          <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                            <div
                              className={`h-full rounded-full ${getToneBarClass(cell.tone)}`}
                              style={{ width: `${cell.score}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="panel mt-4 rounded-2xl p-4 sm:p-5">
              <p className="text-xs leading-relaxed text-muted">
                Cost ranges are directional estimates for planning and depend on contract terms, seat count, usage,
                support level, and implementation scope.
              </p>
            </div>
          </div>
        </section>

        <section id="roadmap" className="section-block-alt reveal p-7 sm:p-10">
          <p className="section-chip text-xs text-muted">DELIVERY PLAN</p>
          <h2 className="display-title mt-3 text-4xl font-semibold sm:text-6xl">
            From Approval to
            <span className="gradient-text"> Live Pilot in 12 Weeks</span>
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3 reveal-children">
            {roadmap.map((item) => (
              <article key={item.phase} className="panel-soft rounded-3xl p-6">
                <span className={`lnr ${item.icon} li-icon li-icon-lg li-icon-contrast`} aria-hidden="true" />
                <p className="section-chip text-[11px] text-muted">{item.phase}</p>
                <h3 className="mt-3 text-2xl font-semibold">
                  {item.title} <span className="gradient-text">.</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block reveal p-7 sm:p-10">
          <p className="section-chip text-xs text-muted">LEADERSHIP FAQ</p>
          <h2 className="display-title mt-3 text-4xl font-semibold sm:text-6xl">
            Common Concerns, <span className="gradient-text">Clear Answers.</span>
          </h2>
          <div className="mt-8 space-y-4 reveal-children">
            {concerns.map((item) => (
              <article key={item.q} className="panel rounded-2xl p-6">
                <span className="lnr lnr-bubble li-icon li-icon-lg li-icon-contrast" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-semibold">
                  {item.q} <span className="gradient-text">.</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="decision" className="section-block-alt reveal p-7 sm:p-10">
          <div className="rounded-3xl bg-[linear-gradient(120deg,var(--tf-grad-a),var(--tf-grad-b))] px-6 py-10 text-white sm:px-10 sm:py-12 reveal-children">
            <p className="section-chip text-xs text-white/80">DECISION POINT</p>
            <h2 className="display-title mt-3 text-4xl font-semibold text-white sm:text-6xl">
              Approve a Focused MVP Pilot <span className="gradient-text">.</span>
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base">
              Authorize a 12-week MVP with strict scope, milestone reviews, and two pilot client workspaces. The
              result is a leadership-ready proof of operational impact before broader rollout.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row reveal-children">
              <a
                href="#roadmap"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/16"
              >
                Review Delivery Plan
              </a>
              <a
                href="#solution"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Revisit Outcomes
              </a>
              <a
                href={projectDocsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/16"
              >
                <span className="lnr lnr-book li-icon li-icon-sm li-icon-contrast" aria-hidden="true" />
                Open GitHub Docs
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a0712] reveal">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 reveal-children">
          <p>TopFireCMS internal proposal</p>
          <p>Built for CEO review and stakeholder feedback</p>
        </div>
      </footer>
    </div>
  );
}
