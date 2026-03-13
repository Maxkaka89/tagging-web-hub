import React from "react";

export default function AutoChecklist() {
  const installSteps = [
    "Go to the Auto Checklist page on the Chrome Web Store (via the download button below).",
    "Click the \"Add to Chrome\" button for automatic installation.",
    "Pin the extension icon to your browser toolbar for easy access.",
    "Default template data will be loaded automatically upon successful installation."
  ];

  const usageSteps = [
    {
      title: "Access Jira System",
      desc: "The extension comes pre-loaded with default templates, requiring no further configuration. Simply navigate to the detail page of a ticket on the Jira system (supports jira.secext.samsung.net...)."
    },
    {
      title: "Use Context Buttons",
      desc: "Based on the ticket's context (e.g., if the Session section contains AEM or SHOP), the extension quickly analyzes and automatically displays relevant action buttons (AEM, SHOP...) on Jira's toolbar."
    },
    {
      title: "Auto-fill Sub-task Form",
      desc: "When you click a button (AEM or SHOP), the extension automatically finds the matching rule, opens the 'Create Sub-task' dialog, and inserts the exact Summary and Description. Variables like case ID are also automatically replaced."
    }
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 font-sans">
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50 p-10 text-center shadow-lg shadow-slate-200/50 md:p-16 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,41,59,0.94),rgba(30,64,175,0.18))] dark:shadow-none">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/10" />
          <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl dark:bg-indigo-500/10" />
          <div className="relative z-10 space-y-6">
            <span className="inline-block rounded-full border border-sky-200 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-700 backdrop-blur-sm dark:border-sky-400/20 dark:bg-sky-500/10 dark:text-sky-300">
              Version 2.3 • Jira Automation
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-6xl">
              Auto Checklist
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
              An extension that helps you automate Sub-task creation on Jira, avoiding manual errors and saving you maximum time from repetitive tasks.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/20 dark:text-amber-300">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Context Recognition</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Automatically scans the DOM and inserts smart action buttons (AEM / SHOP) depending on the ticket&apos;s information.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M19 19H5V5H19V19M17 12H13V8H11V12H7V14H11V18H13V14H17V12Z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Auto-fill Subtask</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Checks the corresponding rule, opens the create Sub-task popup, and injects the content directly over the default form.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M9.5 3L11.83 7.67L16.5 10L11.83 12.33L9.5 17L7.17 12.33L2.5 10L7.17 7.67L9.5 3M19 13L17.83 15.33L15.5 16.5L17.83 17.67L19 20L20.17 17.67L22.5 16.5L20.17 15.33L19 13M19 3L17.83 5.33L15.5 6.5L17.83 7.67L19 10L20.17 7.67L22.5 6.5L20.17 5.33L19 3Z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Variable Support</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Powerful parser that dynamically processes and replaces variables like <code>{"{%caseid%}"}</code> or <code>{"{%beforetitle%}"}</code> seamlessly.
              </p>
            </div>
          </div>
        </div>

        {/* Installation & Usage Guide */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Installation Guide */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 dark:border-white/10 dark:bg-white/[0.02]">
            <div className="mb-8 flex items-center gap-3 border-b border-slate-200 pb-4 dark:border-white/10">
              <div className="rounded-xl bg-white p-2 shadow-sm dark:bg-white/10">
                <svg className="h-6 w-6 text-slate-700 dark:text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Installation Guide</h2>
            </div>
            <ol className="space-y-6 text-slate-600 dark:text-slate-300 text-sm md:text-base">
              {installSteps.map((step, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-700 dark:bg-sky-500/20 dark:text-sky-400 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Usage Workflow */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 dark:border-white/10 dark:bg-white/[0.02]">
            <div className="mb-8 flex items-center gap-3 border-b border-slate-200 pb-4 dark:border-white/10">
              <div className="rounded-xl bg-white p-2 shadow-sm dark:bg-white/10">
                <svg className="h-6 w-6 text-slate-700 dark:text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Usage Workflow</h2>
            </div>
            <div className="space-y-8">
              {usageSteps.map((step, index) => (
                <div key={index} className="relative pl-10">
                  {/* Line connector */}
                  {index !== usageSteps.length - 1 && (
                    <div className="absolute left-[11px] top-8 bottom-[-24px] w-0.5 bg-slate-200 dark:bg-white/10"></div>
                  )}
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-4 border-slate-50 bg-sky-500 shadow-sm dark:border-slate-900 dark:bg-sky-400"></div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer / CTA */}
        <div className="mt-12 rounded-[2rem] bg-slate-900 p-8 text-center sm:p-12 dark:bg-white/[0.05] dark:border dark:border-white/10">
          <h3 className="mb-4 text-2xl font-bold text-white">Ready to optimize your workflow?</h3>
          <p className="mb-8 text-slate-400">
            Start using Auto Checklist now to free up your time and avoid manual errors when creating bulk sub-tasks.
          </p>
          <a
            href="https://chromewebstore.google.com/detail/auto-checklist/fakphhbhokogkjlojohconpbmpfaapgl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-8 py-4 font-bold text-white transition-all hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30"
          >
            Get it on Chrome Web Store
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
