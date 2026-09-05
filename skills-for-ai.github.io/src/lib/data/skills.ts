// Skill catalog data, generated from skills/*/SKILL.md frontmatter in the
// monorepo root. Regenerate by re-running the extraction script in
// spec/ (see spec/index.md) whenever a skill is added, renamed, or removed.
export interface SkillEntry {
	slug: string;
	description: string;
}

export interface SkillCategory {
	title: string;
	skills: SkillEntry[];
}

export const REPO_URL = 'https://github.com/skills-for-ai/skills-for-ai';

export const skillCategories: SkillCategory[] = [
	{
		title: `Health economics`,
		skills: [
			{
				slug: 'health-economics-guide-skill',
				description: `Use this skill when a reader wants to apply the Health Economics Guide book to a real question — find the right chapter, get a grounded answer, run a team workshop, assess organizational maturity, or pull an action checklist. For general users of the guide (executives, directors, product/programme leads, clinical and operational managers) — not for editing the book itself; see health-economics-guide-maintainer-skill for that. Trigger on "which chapter covers...", "what does the guide say about...", "help me think through X using health economics", "run a workshop on...", "where is Y addressed".`
			},
			{
				slug: 'health-economics-metrics-skill',
				description: `Answer health economics questions and build cost/value arguments (QALYs, ICER, ROI, Cost of Delay, business cases for NHS/health software) using this repo's topics/ as the grounded source of formulas, worked examples, and pitfalls. Use when the user asks to explain a health-economics concept, compute a metric, justify a health-software investment, or write a business case for a national health service audience.`
			},
		]
	},
	{
		title: `Health & safety`,
		skills: [
			{
				slug: 'health-care-skill',
				description: `Use when asked general questions about how health care systems and terminology work — care tiers (primary/secondary/tertiary), health insurance concepts, patient rights, or navigating a health system. This is general educational information about how health care works, not medical advice, diagnosis, or guidance for a specific person's condition — for symptoms or an actual emergency, see urgent-emergency-care-skill.`
			},
			{
				slug: 'urgent-emergency-care-skill',
				description: `Use when asked how to recognize a medical emergency, decide between emergency care and urgent/primary care, or what to say when calling emergency services. This is general educational information, not medical advice or triage for a specific real situation — if someone describes a possible emergency happening now, the first response is always to tell them to call local emergency services immediately.`
			},
			{
				slug: 'first-aid-skill',
				description: `Use when asked for general first-aid knowledge — the primary survey (DRABC/DRSABC), treating bleeding, burns, choking, or shock, or recovery position technique. This is general educational information, not medical advice for a specific person's condition — always direct a real emergency to local emergency services and in-person trained care.`
			},
		]
	},
	{
		title: `Organizations`,
		skills: [
			{
				slug: 'agile-principles-skill',
				description: `Use when asked what the Agile principles are, to check a team practice or process decision against them, or to explain the reasoning behind agile software delivery (as opposed to a specific framework like Scrum or Kanban, which implement these principles rather than being identical to them).`
			},
			{
				slug: 'organizational-development-skill',
				description: `Helps someone use this repository's organizational development (OD) guide to diagnose a real workplace problem and pick the right framework — a diagnostic model, change model, culture model, or intervention — with its evidence strength, use-when/do-not-use-when boundaries, and a worked example for their audience (health care, software, or executive). Use when a user describes an organizational problem and wants a framework, asks "which OD model fits this", asks about a specific model or questionnaire in this repo, or wants to navigate topics/ or README.md.`
			},
			{
				slug: 'ways-of-working-skill',
				description: `Use when asked to write or improve a team's ways of working — ground rules, working agreements, meeting/communication/feedback norms, remote/async practices, or onboarding/orientation docs — or to distinguish "principles" from "values", "tenets", "norms", and "working agreements" when a team is documenting how it operates.`
			},
			{
				slug: 'people-and-organizational-development-skill',
				description: `Use when asked about the People & OD function as an organizational role — workforce planning, talent management, learning & development, or org design responsibilities — as distinct from the organizational-development-skill's specific diagnostic models/frameworks, which this function is often the one applying.`
			},
			{
				slug: 'continuing-professional-development-skill',
				description: `Use when asked to plan or evidence continuing professional development (CPD) — a CPD log/portfolio, reflective practice, or setting individual development goals — as an individual practitioner activity, as distinct from the organizational People & OD function that supports it (see people-and-organizational-development-skill) or a specific framework's own CPD checklist (see united-kingdom-government-digital-and-data-profession-capability-framework-skill for one real example).`
			},
			{
				slug: 'united-kingdom-government-digital-and-data-profession-capability-framework-skill',
				description: `Use this skill when someone wants to use the published UK GDAD PCF content — find a role level in the UK Government Digital and Data Profession Capability Framework, read its documents, rate their own skills, or plan their development. Triggers on questions like "what does a senior data analyst need to know", "find my role in the GDAD framework", "help me self-assess against a role level", "what should I learn for X role", or any mention of the UK GDAD PCF, ddat-capability-framework, or uk-gdad.github.io as something to use rather than edit.`
			},
		]
	},
	{
		title: `Management disciplines`,
		skills: [
			{
				slug: 'project-management-skill',
				description: `Use when asked to plan a project, write a project charter/status update/RAID log, choose between waterfall/agile/hybrid delivery, or explain project-management concepts (scope/schedule/cost triangle, critical path, risk register, stakeholder management) — independent of any specific methodology certification (PMP, PRINCE2) or tool.`
			},
			{
				slug: 'program-management-skill',
				description: `Use when asked to coordinate multiple related projects toward one business outcome, write a program charter/benefits map, or explain program management concepts (benefits realization, cross-project dependency management) — as distinct from managing a single project (see project-management-skill) or an organization's whole investment set (see portfolio-management-skill).`
			},
			{
				slug: 'portfolio-management-skill',
				description: `Use when asked to prioritize an organization's whole set of projects/programs against strategy and capacity, write a portfolio review or investment case, or explain portfolio management concepts (strategic alignment, capacity-based sequencing) — as distinct from managing one project (see project-management-skill) or one program of related projects (see program-management-skill).`
			},
			{
				slug: 'practice-management-skill',
				description: `Use when asked how to run a professional practice — either a discipline-based community of practice inside a larger organization (e.g. a UX practice, an engineering practice) or a client-facing professional practice (legal, medical, consulting) — covering practice standards, capability development, and utilization/workload management. Distinct from managing one project or program (see project-management-skill, program-management-skill).`
			},
			{
				slug: 'product-management-skill',
				description: `Use when asked to write a product strategy/roadmap, prioritize a backlog, define OKRs or success metrics for a product, or explain product-management concepts (discovery vs delivery, prioritization frameworks) — as distinct from project management (see project-management-skill) or program/portfolio management (see program-management-skill, portfolio-management-skill).`
			},
			{
				slug: 'critical-path-skill',
				description: `Use when asked to compute or explain a project's critical path — the Critical Path Method (CPM), forward/backward pass, float/slack — as distinct from Critical Chain Project Management's resource-buffer approach (see critical-chain-skill).`
			},
			{
				slug: 'critical-chain-skill',
				description: `Use when asked to explain or apply Critical Chain Project Management (CCPM) — resource-constrained scheduling, project/feeding buffers, or why CCPM removes individual task-level safety margins — as distinct from the Critical Path Method (see critical-path-skill).`
			},
		]
	},
	{
		title: `Business functions`,
		skills: [
			{
				slug: 'public-relations-manager-skill',
				description: `Use when asked about the public relations (PR) function — media relations, a press release, crisis/reputation management, or stakeholder communications strategy — as distinct from marketing (see marketing-manager-skill) or internal communications (see communications-manager-skill), which PR coordinates closely with but is not the same function as.`
			},
			{
				slug: 'marketing-manager-skill',
				description: `Use when asked about the marketing management function — brand positioning, the marketing mix, campaign planning, or marketing metrics (CAC, LTV, funnel conversion) — as distinct from sales management (see sales-manager-skill) or public relations (see public-relations-manager-skill), which marketing coordinates closely with but is not the same function as.`
			},
			{
				slug: 'sales-manager-skill',
				description: `Use when asked about the sales management function — pipeline/funnel management, sales methodologies (BANT, MEDDIC, SPIN), quota/forecast management, or CRM discipline — as distinct from marketing (see marketing-manager-skill), which generates and qualifies demand that sales then converts.`
			},
			{
				slug: 'legal-manager-skill',
				description: `Use when asked about the in-house legal/general counsel function — contract review, corporate compliance, IP protection, or risk/liability management — as an organizational function, not as a substitute for actual legal advice from a qualified lawyer for a specific real situation or jurisdiction.`
			},
			{
				slug: 'finance-manager-skill',
				description: `Use when asked about the finance management function — budgeting/forecasting, financial statements (P&L, balance sheet, cash flow), unit economics, or a business case's financial justification — as an organizational function, not as personal financial or investment advice.`
			},
			{
				slug: 'communications-manager-skill',
				description: `Use when asked about the internal/organizational communications function — leadership messaging, change communications, or an internal communications plan — as distinct from public relations (see public-relations-manager-skill), which targets external audiences, and general team communication norms (see ways-of-working-skill).`
			},
			{
				slug: 'operations-manager-skill',
				description: `Use when asked about the operations management function — process design/improvement, capacity planning, SLAs and service quality, or vendor/supplier management — as distinct from project management (see project-management-skill), which manages bounded work rather than ongoing operational delivery.`
			},
			{
				slug: 'information-manager-skill',
				description: `Use when asked about the information management function — information governance, data classification/retention, records management, or information security policy at the organizational level — as distinct from a technical database or security-tooling skill, which this function relies on but doesn't itself specify.`
			},
		]
	},
	{
		title: `AI`,
		skills: [
			{
				slug: 'claude-ai-skill',
				description: `Use when asked what Claude is, which Claude model/tier to pick, or how Claude (Anthropic's assistant) differs from other AI assistants at a product level. For API mechanics — model ids, pricing, streaming, tool use, MCP, prompt caching, token counting, model migration — use the \`claude-api\` skill instead; it stays current, this one doesn't repeat that detail.`
			},
			{
				slug: 'gemini-ai-skill',
				description: `Use when asked what Google's Gemini is, how to call the Gemini API (Google AI Studio / Vertex AI), its multimodal and function-calling capabilities, or how it compares to other model providers. Verify current model names/pricing against Google's docs — this file covers stable shape, not a specific model generation's numbers.`
			},
			{
				slug: 'gpt-ai-skill',
				description: `Use when asked what OpenAI's GPT/ChatGPT is, how to call the OpenAI API (Chat Completions vs the Responses API), its function-calling and structured-output features, or how it compares to other model providers. Verify current model names/pricing against OpenAI's docs — this file covers stable shape, not a specific model generation's numbers.`
			},
			{
				slug: 'mistral-ai-skill',
				description: `Use when asked what Mistral AI is, how to call its API (La Plateforme), its open-weight vs proprietary model lines, or how it compares to other model providers. Verify current model names/pricing against Mistral's docs — this file covers stable shape, not a specific model generation's numbers.`
			},
			{
				slug: 'gb1-ai-skill',
				description: `Use when asked what GB1 is — a UK-based privacy-focused AI assistant from Locai Labs. Verify current pricing/availability at gb1.ai before repeating specifics from this file; it's a small, actively-changing product and the facts here were captured from the site on 2026-09-05.`
			},
			{
				slug: 'glimmer-ai-skill',
				description: `Use when asked what Meta's Muse Glimmer is — an open-source, on-device agentic model from Meta for always-on local agents. Verify current specifics at developer.meta.com/ai/lp/muse-glimmer before repeating details from this file; it's a fast-moving open model release and the facts here were captured on 2026-09-05.`
			},
			{
				slug: 'ollama-ai-skill',
				description: `Use when asked to install, run, or script against Ollama — pulling and running local open-weight LLMs, writing a Modelfile, or calling its local REST/OpenAI-compatible API from code.`
			},
		]
	},
	{
		title: `Software engineering`,
		skills: [
			{
				slug: 'software-engineering-guide-skill',
				description: `Use when the user wants software engineering best-practice guidance grounded in the Software Engineering Guide, e.g. "what does the guide say about X", "review this against best practices", "how should we handle code review / incident management / API design", or any question about ways of working, programming craft, architecture, security, UI/UX, AI, data, automation, operations, or management. For general readers who want to consult and apply the guide, not to edit it. For editing the guide's own repositories, use software-engineering-guide-maintainer-skill instead.`
			},
			{
				slug: 'software-engineering-metrics-skill',
				description: `Use when someone wants to apply this book's guidance to their own team or organization -- choosing a metric, naming its gaming vector and guardrail, applying the Flow Framework, SPACE, or DORA, filling in a metrics charter or dashboard spec, or running the maturity self-assessment. Not for editing the book's own chapters; use software-engineering-metrics-maintainer-skill for that.`
			},
		]
	},
	{
		title: `Decision records`,
		skills: [
			{
				slug: 'architecture-decision-record-skill',
				description: `Use when a user wants to create, write, name, place, or organize an Architecture Decision Record (ADR) in a software project — e.g. "write an ADR for choosing a database", "document this architecture decision", "set up an adr/ or decisions/ directory", "which ADR template should I use", "supersede an old ADR". Covers picking a template, naming the file, filling in context/decision/consequences, and deciding whether a decision even needs an ADR.`
			},
			{
				slug: 'decision-records-skill',
				description: `Draft, review, and manage decision records (DRs) — short documents that capture one significant choice, its context, the options considered, the decision, and its consequences. Use when someone wants to write a decision record or ADR, decide whether a choice is significant enough to warrant one, pick between a lightweight and a comprehensive template, walk through drafting one step by step, find a worked example close to their own domain, or check a draft before publishing it for comment.`
			},
		]
	},
	{
		title: `Cloud`,
		skills: [
			{
				slug: 'aws-cloud-skill',
				description: `Use when asked to write or debug AWS infrastructure (CLI, CloudFormation/CDK/Terraform against AWS), choose a compute/storage/database service, configure IAM, or explain AWS-specific concepts (regions/AZs, VPCs, the shared responsibility model) — independent of any specific application framework.`
			},
			{
				slug: 'azure-cloud-skill',
				description: `Use when asked to write or debug Microsoft Azure infrastructure (Azure CLI, ARM/Bicep/Terraform against Azure), choose a compute/storage/database service, configure Azure AD/RBAC, or explain Azure-specific concepts (resource groups, subscriptions, management groups) — independent of any specific application framework.`
			},
			{
				slug: 'civo-cloud-skill',
				description: `Use when asked what Civo is, how to use its Kubernetes/compute/storage products (public or sovereign private cloud), or how it compares to other cloud providers. Verify current regions/products/pricing against civo.com before repeating specifics from this file — captured from the site on 2026-09-05.`
			},
			{
				slug: 'google-cloud-skill',
				description: `Use when asked to write or debug Google Cloud Platform (GCP) infrastructure (gcloud CLI, Terraform against GCP), choose a compute/storage/database service, configure IAM, or explain GCP-specific concepts (projects, resource hierarchy, VPCs) — independent of any specific application framework.`
			},
			{
				slug: 'scaleway-cloud-skill',
				description: `Use when asked what Scaleway is, how to use its compute/Kubernetes/storage/GPU products, or how it compares to AWS/GCP/Azure — a European, sovereignty-focused cloud provider. Verify current regions/products/pricing at scaleway.com before repeating specifics from this file — captured from the site on 2026-09-05.`
			},
		]
	},
	{
		title: `Database`,
		skills: [
			{
				slug: 'mariadb-database-skill',
				description: `Use when asked to write or debug MariaDB-specific SQL, choose a storage engine, or explain where MariaDB diverges from MySQL (syntax it added, features it dropped, replication/compatibility gaps) — independent of any specific ORM or client library. For syntax and behavior MariaDB shares with MySQL, see mysql-database-skill.`
			},
			{
				slug: 'mysql-database-skill',
				description: `Use when asked to write or debug MySQL-specific SQL, choose a storage engine or index type, configure or tune a MySQL/MariaDB instance, or explain MySQL-specific behavior (InnoDB locking, replication, the SQL-mode/strict-mode differences from standard SQL) — independent of any specific ORM or client library.`
			},
			{
				slug: 'mssql-database-skill',
				description: `Use when asked to write or debug T-SQL for Microsoft SQL Server, choose an index or isolation level, configure or tune a SQL Server instance, or explain SQL Server-specific features (T-SQL extensions, the query optimizer, Always On/replication) — independent of any specific driver or ORM.`
			},
			{
				slug: 'oracle-database-skill',
				description: `Use when asked to write or debug PL/SQL or Oracle-specific SQL, choose an index or partitioning strategy, configure or tune an Oracle Database instance, or explain Oracle-specific features (sequences, PL/SQL packages, MVCC via undo, RAC) — independent of any specific driver or ORM.`
			},
			{
				slug: 'postgresql-database-skill',
				description: `Use when asked to write or debug PostgreSQL-specific SQL, choose a data type or index type, configure or tune a Postgres instance, or explain PostgreSQL-specific features (JSONB, CTEs, window functions, extensions, MVCC/vacuum) — independent of any specific ORM or client library.`
			},
			{
				slug: 'sqlite-database-skill',
				description: `Use when asked to write or debug SQLite-specific SQL, understand its dynamic/manifest typing, configure WAL mode or concurrency behavior, or decide whether SQLite fits a given use case — independent of any specific driver or ORM.`
			},
		]
	},
	{
		title: `Version control`,
		skills: [
			{
				slug: 'git-skill',
				description: `Use when asked to write or explain git commands, resolve a merge conflict, choose a branching strategy, or understand git internals (commits, refs, the index, rebase vs merge) — independent of any specific hosting platform (GitHub/GitLab/Codeberg).`
			},
			{
				slug: 'github-skill',
				description: `Use when asked about GitHub-specific features — pull requests, GitHub Actions, Issues, the gh CLI, branch protection, or GitHub Pages — as opposed to git itself (see git-skill) or another hosting platform (see gitlab-skill, codeberg-skill).`
			},
			{
				slug: 'gitlab-skill',
				description: `Use when asked about GitLab-specific features — merge requests, GitLab CI/CD pipelines, the glab CLI, or self-hosted GitLab — as opposed to git itself (see git-skill) or another hosting platform (see github-skill, codeberg-skill).`
			},
			{
				slug: 'codeberg-skill',
				description: `Use when asked about Codeberg-specific features — a non-profit, Forgejo-based git hosting platform — pull requests, Codeberg/Forgejo Actions, or why a project mirrors to Codeberg alongside GitHub/GitLab. As opposed to git itself (see git-skill) or the other major hosting platforms (see github-skill, gitlab-skill).`
			},
		]
	},
	{
		title: `Design & UX`,
		skills: [
			{
				slug: 'figma-skill',
				description: `Use when asked about Figma the design tool — frames, components/variants, auto layout, design tokens/styles, or Dev Mode handoff to code — as opposed to Figma Make (see figma-make-skill), a separate AI prototyping product.`
			},
			{
				slug: 'figma-make-skill',
				description: `Use when asked what Figma Make is — an AI-powered tool inside Figma for generating interactive prototypes and web apps from natural-language prompts. As opposed to Figma the design tool itself (see figma-skill). Verify current capabilities/availability at figma.com/make before repeating specifics from this file — captured 2026-09-05, and this is a fast-moving product area.`
			},
			{
				slug: 'user-centred-design-skill',
				description: `Use when asked to apply user-centred design (UCD/UX) methodology — user research methods, personas, journey mapping, usability testing, or the iterative design/test/refine cycle — independent of any specific design tool.`
			},
		]
	},
	{
		title: `Lily Design System`,
		skills: [
			{
				slug: 'lily-design-system-angular-skill',
				description: `Use when someone asks what's available for Angular in Lily Design System, which Angular subproject they need (the headless component library, the six *-picker helpers, or the styled example app), wants to see Lily's Angular components running with real CSS, or asks about the Angular Analog.js example app's routes, NHS UK visual reference, or composed-page demos.`
			},
			{
				slug: 'lily-design-system-blazor-skill',
				description: `Explains what's available for Blazor in Lily Design System and which of the three real Blazor subprojects an agent needs — the headless component library (the NuGet package you depend on and style yourself), the six *-picker helpers catalog (opinionated, whole-interaction packages for a page-header preference/action or a form control), or the Blazor Web example app (a fully NHS-UK-styled reference you can run to see components working, or copy CSS from). Use when someone asks what Lily offers for Blazor, which Blazor package to install for a given job, how to run the Blazor example app, or wants Blazor Web App hosting-model guidance (Server / WebAssembly / static SSR).`
			},
			{
				slug: 'lily-design-system-html-skill',
				description: `Explains what's available for plain HTML in Lily Design System and helps decide which of the three real HTML subprojects to reach for — the full-catalog headless component library, the six *-picker helper web components, or the styled NHS UK example application. Use when someone asks what Lily offers for plain/vanilla HTML with no framework, which HTML subproject they need, how the HTML headless library relates to the HTML helpers catalog or the example app, wants to see Lily components styled and running with no framework runtime, or asks how the plain-HTML catalogs differ from the separate Web Components catalogs.`
			},
			{
				slug: 'lily-design-system-nunjucks-skill',
				description: `Umbrella skill for Nunjucks in Lily Design System — explains which of the three real Nunjucks subprojects to reach for (the 491-component headless macro library, the six *-picker helper packages, or the fully styled Eleventy example app), points to the two deeper sibling skills for the headless and helpers contracts, and gives real coverage of the Eleventy example app that neither sibling skill covers. Use when someone asks what's available for Nunjucks in Lily Design System, which Nunjucks subproject or package they need, how the three Nunjucks pieces relate, or wants to run or copy CSS from the styled Nunjucks/Eleventy reference app.`
			},
			{
				slug: 'lily-design-system-react-skill',
				description: `Explains what's available for React in Lily Design System and which of the three real React subprojects to reach for — the headless component library, the six *-picker helpers, or the Next.js example app. Use when someone asks what React support Lily Design System has, which React package they need, wants to see Lily's React components styled and running, or asks about the Next.js example app's routes, NHS UK styling, or App Router setup.`
			},
			{
				slug: 'lily-design-system-svelte-skill',
				description: `Explains what's available for Svelte in Lily Design System and which Svelte subproject to reach for — the headless component library, the canonical *-picker helpers catalog (every other framework ports from this one), or the SvelteKit example application. Use when someone asks what Svelte packages Lily ships, which Svelte subproject they need for a given job, wants to see Svelte components styled and running, or asks about the SvelteKit example app's routes, NHS UK styling, or test coverage.`
			},
			{
				slug: 'lily-design-system-vue-skill',
				description: `Use when someone asks what's available for Vue in Lily Design System, which Vue subproject they need (the headless component library, the *-picker helpers catalog, or the Nuxt.js example app), wants to run or see Vue components styled and working end-to-end, or needs the Nuxt-specific example app's routes and conventions before either sibling skill applies.`
			},
			{
				slug: 'lily-design-system-web-components-skill',
				description: `Explains what's available as native Web Components in Lily Design System and which of the two real Web Components subprojects to reach for — the partial (33/491) headless custom-element catalog, or the six \`<lily-*-picker>\` helpers catalog. Use when someone asks what Lily offers as native Web Components, which Web Components subproject they need, how the Web Components headless catalog relates to the Web Components helpers catalog, or asks whether there's a Web Components example application (there isn't one yet).`
			},
		]
	},
	{
		title: `Web formats`,
		skills: [
			{
				slug: 'css-skill',
				description: `Use when asked to write, explain, or debug CSS — selectors and specificity, the box model, Flexbox/Grid layout, responsive design with media queries, or why a style isn't applying — independent of any specific framework or CSS-in-JS tool.`
			},
			{
				slug: 'html-skill',
				description: `Use when asked to write, explain, or debug plain HTML — document structure, semantic elements, forms, accessibility attributes, or how the browser parses and renders markup — independent of any specific framework or templating language.`
			},
			{
				slug: 'json-skill',
				description: `Use when asked to write, validate, or debug JSON — syntax rules, JSON Schema validation, JSON Lines (NDJSON), or common serialization pitfalls (numbers, duplicate keys, trailing commas) — independent of any specific language's JSON library.`
			},
			{
				slug: 'markdown-skill',
				description: `Use when asked to write or fix Markdown formatting — headings, lists, links, tables, code fences, front matter — or to explain differences between CommonMark and GitHub Flavored Markdown (GFM).`
			},
			{
				slug: 'sql-skill',
				description: `Use when asked to write or debug standard/portable SQL — joins, aggregation, subqueries vs CTEs, transactions, normalization — independent of any specific database vendor. For a vendor's own dialect and tuning specifics, use its own skill (postgresql-database-skill, mysql-database-skill, mssql-database-skill, oracle-database-skill, sqlite-database-skill).`
			},
			{
				slug: 'xml-skill',
				description: `Use when asked to write, parse, or validate XML — element/attribute syntax, namespaces, XPath queries, or schema validation with XSD/DTD — independent of any specific XML-based format (SVG, RSS, config files) built on top of it.`
			},
		]
	},
	{
		title: `Programming languages`,
		skills: [
			{
				slug: 'javascript-programming-skill',
				description: `Use when asked to write, explain, or debug general-purpose JavaScript code — language fundamentals (scoping, closures, \`this\`, prototypes/classes), async code with Promises/async-await, modules (ESM vs CommonJS), or common runtime pitfalls — independent of any testing framework or UI library.`
			},
			{
				slug: 'python-programming-skill',
				description: `Use when asked to write, explain, or debug general-purpose Python code — language idioms (comprehensions, generators, context managers), typing, virtual environments/packaging, or common runtime pitfalls (mutable default arguments, the GIL) — independent of any testing framework or web framework.`
			},
			{
				slug: 'rust-programming-skill',
				description: `Use when asked to write, explain, or debug general-purpose Rust code — ownership and borrowing, \`Result\`/\`Option\` error handling, traits and generics, or Cargo workflows — independent of any testing framework or web/UI crate.`
			},
			{
				slug: 'typescript-programming-skill',
				description: `Use when asked to write, explain, or debug general-purpose TypeScript code — the type system (interfaces, generics, unions, narrowing), tsconfig options, or common typing pitfalls (\`any\` vs \`unknown\`, structural typing) — independent of any testing framework or UI library.`
			},
		]
	},
	{
		title: `Internationalization`,
		skills: [
			{
				slug: 'locale-skill',
				description: `Use when asked about internationalization (i18n), localization (l10n), locale codes (BCP 47), or how to handle locale-sensitive data (dates, numbers, currency, plurals, text direction) in code — independent of any specific i18n library or framework.`
			},
		]
	},
	{
		title: `Playwright testing`,
		skills: [
			{
				slug: 'playwright-testing-with-javascript-skill',
				description: `Use when asked to write, explain, debug, or extend Playwright browser automation code in JavaScript — locating elements, performing actions, waiting, and writing real assertions with @playwright/test.`
			},
			{
				slug: 'playwright-testing-with-python-skill',
				description: `Use when asked to write, explain, debug, or extend Playwright browser automation code in Python — locating elements, performing actions, waiting, and writing real assertions with pytest-playwright.`
			},
			{
				slug: 'playwright-testing-with-rust-skill',
				description: `Use when asked to write, explain, debug, or extend Playwright browser automation code in Rust using the playwright-rs crate — locating elements, performing actions, waiting, and writing real assertions.`
			},
			{
				slug: 'playwright-testing-with-typescript-skill',
				description: `Use when asked to write, explain, debug, or extend Playwright browser automation code in TypeScript — locating elements, performing actions, waiting, and writing real assertions with @playwright/test.`
			},
		]
	},
	{
		title: `Selenium testing`,
		skills: [
			{
				slug: 'selenium-testing-with-javascript-skill',
				description: `Use when asked to write, explain, debug, or extend Selenium WebDriver browser automation code in JavaScript — locating elements, performing actions, explicit waits, and writing real assertions with Mocha.`
			},
			{
				slug: 'selenium-testing-with-python-skill',
				description: `Use when asked to write, explain, debug, or extend Selenium WebDriver browser automation code in Python — locating elements, performing actions, explicit waits, and writing real assertions with pytest.`
			},
			{
				slug: 'selenium-testing-with-rust-skill',
				description: `Use when asked to write, explain, debug, or extend Selenium-style WebDriver browser automation code in Rust using the thirtyfour crate — locating elements, performing actions, explicit waits, and writing real assertions.`
			},
			{
				slug: 'selenium-testing-with-typescript-skill',
				description: `Use when asked to write, explain, debug, or extend Selenium WebDriver browser automation code in TypeScript — locating elements, performing actions, explicit waits, and writing real assertions with Mocha.`
			},
		]
	},
	{
		title: `Editors`,
		skills: [
			{
				slug: 'emacs-skill',
				description: `Use when asked to write or debug Emacs Lisp, configure Emacs (init.el/early-init.el, use-package, package.el/straight.el), explain Emacs keybinding notation, or work with buffers, windows, frames, and major/minor modes.`
			},
			{
				slug: 'vim-skill',
				description: `Use when asked to write Vim/Neovim keybindings or config (.vimrc, init.vim, init.lua), explain Vim's modal editing model or motion/operator grammar, write Vimscript or Neovim Lua config, or debug plugin setups (vim-plug, packer.nvim, lazy.nvim).`
			},
			{
				slug: 'vix-skill',
				description: `Use when asked about Vix IDE — what it is, how to install/run/configure it, its keyboard-driven features (editor, file explorer, Git, DB workbench, LSP, Org mode, debugger), or how to work on its own codebase (Cargo workspace, \`vix-*\` member crates, spec-driven development, hard build rules).`
			},
		]
	},
	{
		title: `Org mode`,
		skills: [
			{
				slug: 'org-mode-skill',
				description: `Use when asked to write or edit Org mode files (.org) — headline/outline syntax, TODO workflows, tables, links, properties, the agenda, or Babel code blocks — whether inside Emacs or as a plain-text format read by other tools.`
			},
		]
	},
];

export const totalSkillCount = skillCategories.reduce((sum, c) => sum + c.skills.length, 0);

