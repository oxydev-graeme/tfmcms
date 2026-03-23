export default function Home() {
  const projectDocsUrl = "https://github.com/oxydev-graeme/tfmcms/tree/main/TopFireCMS";

  const roiInputs = {
    sanitySeatCostPerMonth: 20,
    sanitySeats: 12,
    projectsPerYear: 24,
    daysSavedPerProject: 8,
    blendedDayRate: 450,
    platformOpsYearly: 12000,
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

  return (
    <div className="site-shell text-[var(--tf-text)]">
      <header className="sticky top-0 z-40 bg-[#090613]/88 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8">
          <p className="text-sm font-semibold tracking-wide text-white">TopFireCMS</p>
          <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.08em] sm:flex">
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
            TopFireCMS is a private headless CMS designed for our agency and our clients. It standardizes
            delivery, reduces publishing risk, and gives leadership a predictable path from idea to measurable
            operational gains.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
          <h2 className="display-title mt-3 text-4xl font-semibold sm:text-6xl">Where We Lose Time and Margin Today</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {painPoints.map((item) => (
              <article key={item.title} className="panel rounded-3xl p-6">
                <span className={`lnr ${item.icon} li-icon li-icon-lg li-icon-contrast`} aria-hidden="true" />
                <p className="section-chip mt-3 text-[11px] text-muted">{item.metric}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="solution" className="section-block reveal reveal-delay-2 p-7 sm:p-10">
          <p className="section-chip text-xs text-muted">THE PROPOSED SHIFT</p>
          <h2 className="display-title mt-3 text-4xl font-semibold sm:text-6xl">
            TopFireCMS Delivers
            <span className="gradient-text"> Business-Level Outcomes</span>
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            This project is not a public SaaS. It is a focused internal platform for one agency serving multiple
            clients with clear role boundaries, safer publishing, and reusable operating patterns.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {outcomes.map((item) => (
              <article key={item.title} className="panel-soft rounded-3xl p-6">
                <span className={`lnr ${item.icon} li-icon li-icon-lg li-icon-contrast`} aria-hidden="true" />
                <p className="metric-value gradient-text mt-3 text-lg">{item.value}</p>
                <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block-alt reveal reveal-delay-3 p-7 sm:p-10">
          <p className="section-chip text-xs text-muted">OPERATING MODEL</p>
          <h2 className="display-title text-4xl font-semibold sm:text-6xl">Build a Repeatable System, Not One-Off Projects</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {operatingModel.map((item) => (
              <article key={item.title} className="panel-soft rounded-3xl p-6">
                <span className={`lnr ${item.icon} li-icon li-icon-lg li-icon-contrast`} aria-hidden="true" />
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block p-7 sm:p-10">
          <p className="section-chip text-xs text-muted">WHY THIS MATTERS TO LEADERSHIP</p>
          <h2 className="display-title mt-3 text-4xl font-semibold sm:text-6xl">Better Control Over Growth and Quality</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {businessCase.map((item) => (
              <article key={item.title} className="panel rounded-3xl p-6">
                <span className={`lnr ${item.icon} li-icon li-icon-lg li-icon-contrast`} aria-hidden="true" />
                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="roi" className="section-block-alt p-7 sm:p-10">
          <p className="section-chip text-xs text-muted">FINANCIAL IMPACT</p>
          <h2 className="display-title mt-3 text-4xl font-semibold sm:text-6xl">
            Revenue Capacity Gain vs
            <span className="gradient-text"> Sanity Studio Cost</span>
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            Illustrative model for leadership planning. Adjust the assumptions to match your real seat count,
            project volume, and rate card.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="panel rounded-3xl p-6">
              <span className="lnr lnr-wallet li-icon li-icon-lg li-icon-contrast" aria-hidden="true" />
              <p className="section-chip mt-3 text-[11px] text-muted">ANNUAL SANITY STUDIO COST</p>
              <p className="metric-value mt-2 text-2xl text-white">{currency.format(yearlySanityCost)}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {roiInputs.sanitySeats} seats x {currency.format(roiInputs.sanitySeatCostPerMonth)}/month x 12 months.
              </p>
            </article>

            <article className="panel rounded-3xl p-6">
              <span className="lnr lnr-chart-bars li-icon li-icon-lg li-icon-contrast" aria-hidden="true" />
              <p className="section-chip mt-3 text-[11px] text-muted">ANNUAL CAPACITY VALUE</p>
              <p className="metric-value mt-2 text-2xl text-white">{currency.format(yearlyRecoveredCapacity)}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {roiInputs.projectsPerYear} projects x {roiInputs.daysSavedPerProject} days saved x
                {" "}{currency.format(roiInputs.blendedDayRate)} blended day rate.
              </p>
            </article>

            <article className="panel-soft rounded-3xl p-6">
              <span className="lnr lnr-diamond li-icon li-icon-lg li-icon-contrast" aria-hidden="true" />
              <p className="section-chip mt-3 text-[11px] text-muted">ESTIMATED NET YEARLY IMPACT</p>
              <p className="metric-value mt-2 text-2xl text-white">{currency.format(yearlyNetImpact)}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                After {currency.format(roiInputs.platformOpsYearly)} estimated platform operations, the model suggests
                roughly {roiMultiple.toFixed(1)}x return on platform spend.
              </p>
            </article>
          </div>
        </section>

        <section id="roadmap" className="section-block-alt p-7 sm:p-10">
          <p className="section-chip text-xs text-muted">DELIVERY PLAN</p>
          <h2 className="display-title mt-3 text-4xl font-semibold sm:text-6xl">
            From Approval to
            <span className="gradient-text"> Live Pilot in 12 Weeks</span>
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {roadmap.map((item) => (
              <article key={item.phase} className="panel-soft rounded-3xl p-6">
                <span className={`lnr ${item.icon} li-icon li-icon-lg li-icon-contrast`} aria-hidden="true" />
                <p className="section-chip text-[11px] text-muted">{item.phase}</p>
                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block p-7 sm:p-10">
          <p className="section-chip text-xs text-muted">LEADERSHIP FAQ</p>
          <h2 className="display-title mt-3 text-4xl font-semibold sm:text-6xl">Common Concerns, Clear Answers</h2>
          <div className="mt-8 space-y-4">
            {concerns.map((item) => (
              <article key={item.q} className="panel rounded-2xl p-6">
                <span className="lnr lnr-bubble li-icon li-icon-lg li-icon-contrast" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="decision" className="section-block-alt p-7 sm:p-10">
          <div className="rounded-3xl bg-[linear-gradient(120deg,var(--tf-grad-a),var(--tf-grad-b))] px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="section-chip text-xs text-white/80">DECISION POINT</p>
            <h2 className="display-title mt-3 text-4xl font-semibold text-white sm:text-6xl">Approve a Focused MVP Pilot</h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base">
              Authorize a 12-week MVP with strict scope, milestone reviews, and two pilot client workspaces. The
              result is a leadership-ready proof of operational impact before broader rollout.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

      <footer className="bg-[#0a0712]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>TopFireCMS internal proposal</p>
          <p>Built for CEO review and stakeholder feedback</p>
        </div>
      </footer>
    </div>
  );
}
