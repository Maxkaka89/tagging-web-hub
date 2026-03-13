"use client";

import React from "react";

export default function RuleComparatorGuide() {
  const installSteps = [
    "Go to the Rule Comparator page on the Chrome Web Store (via the download button below).",
    "Click the \"Add to Chrome\" button for automatic installation.",
    "Pin the 'Rule Comparator' icon to your browser's toolbar for easy access."
  ];

  const usageSteps = [
    {
      title: "1. Navigate to Adobe Launch",
      desc: "Log in to your Adobe Experience Platform Data Collection (Launch) account and go to the 'Rules' list page of your property (URL containing experience.adobe.com)."
    },
    {
      title: "2. Input Your Expected Rules",
      desc: "Open the extension popup and paste your custom list of rules into the 'List 1' text area. Make sure there is one rule name per line."
    },
    {
      title: "3. Fetch Page Rules to Compare",
      desc: "Click 'Get Rules From Library' to automatically extract all rule names from the active Launch page into 'List 2'. Click 'Compare' to evaluate them. Differences (missing, added, matched) are neatly categorized."
    },
    {
      title: "4. Validate Rule Naming Criteria",
      desc: "Optionally, click 'Check Rule Name' to validate standard naming conventions (e.g. LC-B2C-AN(GA)-...). The tool intelligently checks all 5 taxonomy depths and details specific validation errors."
    }
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 font-sans">
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-indigo-50 p-10 text-center shadow-lg shadow-slate-200/50 md:p-16 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,41,59,0.94),rgba(55,48,163,0.18))] dark:shadow-none">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl dark:bg-indigo-500/10" />
          <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-500/10" />
          <div className="relative z-10 space-y-6">
            <span className="inline-block rounded-full border border-indigo-200 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-700 backdrop-blur-sm dark:border-indigo-400/20 dark:bg-indigo-500/10 dark:text-indigo-300">
              Version 2.0 • Validation and Comparison
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-6xl">
              Rule Comparator
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
              A powerful extension to automatically compare, synchronize, and validate Adobe Launch rules against your expected documentation, saving you hours of manual auditing.
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
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M16 11H8V9H16V11M16 15H8V13H16V15M20 5V19C20 20.1 19.1 21 18 21H6C4.9 21 4 20.1 4 19V5C4 3.9 4.9 3 6 3H18C19.1 3 20 3.9 20 5M18 19V5H6V19H18Z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Dual List Comparison</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Compare your custom text-based rule lists directly with live Adobe Launch page rules. Quickly see matching rules, additions, and missing items in a structured layout.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Advanced Naming Validation</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Built-in strict rule name checking algorithms verify that your rules perfectly follow the standard 5-depth taxonomy schema and identify precise errors if not.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-500/20 dark:text-teal-300">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M17 3H7C5.9 3 5 3.9 5 5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V5C19 3.9 18.1 3 17 3M17 19H7V5H17V19M12 11.5C13.4 11.5 14.5 10.4 14.5 9C14.5 7.6 13.4 6.5 12 6.5C10.6 6.5 9.5 7.6 9.5 9C9.5 10.4 10.6 11.5 12 11.5M12 13.5C9.3 13.5 4 14.9 4 17.5V19H20V17.5C20 14.9 14.7 13.5 12 13.5Z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Session Persistence</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Safely close the popup. Form content and results are automatically preserved and smartly linked to specific URLs. Switch URLs, and it resets.
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
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400 mt-0.5">
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
                  <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-4 border-slate-50 bg-indigo-500 shadow-sm dark:border-slate-900 dark:bg-indigo-500"></div>

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
          <h3 className="mb-4 text-2xl font-bold text-white">Stop verifying data manually!</h3>
          <p className="mb-8 text-slate-400 max-w-2xl mx-auto">
            Enjoy the precision of automatic rule synchronization. Copy discrepancies directly into your clipboard natively or reset and repeat without reloading the browser.
          </p>
          <a
            href="https://chromewebstore.google.com/detail/rule-comparator/kbgbaeeldgkeocfelmacojfikkdmadpe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-8 py-4 font-bold text-white transition-all hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/30"
          >
            Get it on Chrome Web Store
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
