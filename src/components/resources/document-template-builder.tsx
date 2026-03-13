"use client";

import * as React from "react";
import { Plus, RotateCcw, Save, Trash2, Download, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Section = {
  id: string;
  heading: string;
  content: string;
};

type Draft = {
  title: string;
  author: string;
  summary: string;
  sections: Section[];
};

const STORAGE_KEY = "resource-template-builder-draft";

const createSection = (index: number): Section => ({
  id: `section-${Date.now()}-${index}`,
  heading: `Main Section ${index + 1}`,
  content: "",
});

const DEFAULT_DRAFT: Draft = {
  title: "Untitled Document",
  author: "",
  summary: "",
  sections: [createSection(0), createSection(1)],
};

function buildMarkdown(draft: Draft) {
  const sectionText = draft.sections
    .map((section) => `## ${section.heading || "Untitled Section"}\n\n${section.content || "Add content here."}`)
    .join("\n\n");

  return `# ${draft.title || "Untitled Document"}\n\nAuthor: ${draft.author || "Unknown"}\n\n${draft.summary || "Add a short summary."}\n\n${sectionText}`;
}

export default function DocumentTemplateBuilder() {
  const [draft, setDraft] = React.useState<Draft>(DEFAULT_DRAFT);
  const [hasLoaded, setHasLoaded] = React.useState(false);
  const [saveState, setSaveState] = React.useState<"idle" | "saved" | "copied">("idle");
  const [lastSavedAt, setLastSavedAt] = React.useState<string | null>(null);

  React.useEffect(() => {
    const savedDraft = window.localStorage.getItem(STORAGE_KEY);

    if (savedDraft) {
      try {
        const parsed = JSON.parse(savedDraft) as Draft;
        setDraft({
          ...parsed,
          sections: parsed.sections?.length ? parsed.sections : DEFAULT_DRAFT.sections,
        });
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }

    setHasLoaded(true);
  }, []);

  React.useEffect(() => {
    if (!hasLoaded) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    setLastSavedAt(new Date().toLocaleString());
  }, [draft, hasLoaded]);

  React.useEffect(() => {
    if (saveState === "idle") {
      return;
    }

    const timeout = window.setTimeout(() => setSaveState("idle"), 1800);
    return () => window.clearTimeout(timeout);
  }, [saveState]);

  const updateSection = (id: string, key: keyof Omit<Section, "id">, value: string) => {
    setDraft((current) => ({
      ...current,
      sections: current.sections.map((section) =>
        section.id === id ? { ...section, [key]: value } : section
      ),
    }));
  };

  const addSection = () => {
    setDraft((current) => ({
      ...current,
      sections: [...current.sections, createSection(current.sections.length)],
    }));
  };

  const removeSection = (id: string) => {
    setDraft((current) => ({
      ...current,
      sections: current.sections.length === 1
        ? current.sections
        : current.sections.filter((section) => section.id !== id),
    }));
  };

  const handleManualSave = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    setLastSavedAt(new Date().toLocaleString());
    setSaveState("saved");
  };

  const handleReset = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setDraft({
      ...DEFAULT_DRAFT,
      sections: [createSection(0), createSection(1)],
    });
    setLastSavedAt(null);
  };

  const handleCopyMarkdown = async () => {
    await navigator.clipboard.writeText(buildMarkdown(draft));
    setSaveState("copied");
  };

  const handleExportJson = () => {
    const blob = new Blob([JSON.stringify(draft, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${(draft.title || "document-template").toLowerCase().replace(/\s+/g, "-")}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-amber-50 via-white to-cyan-50 p-8 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <span className="inline-flex rounded-full border border-amber-200 bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.24em] text-amber-700">
              Editable Template
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Document Builder</h2>
            <p className="max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
              Create and save internal notes, guides, or documentation directly in the browser. Title, author,
              summary, and main sections can all be edited from the page.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button onClick={handleManualSave} className="gap-2 rounded-2xl bg-slate-900 text-white hover:bg-slate-800">
              <Save className="h-4 w-4" />
              Save Draft
            </Button>
            <Button onClick={handleCopyMarkdown} variant="outline" className="gap-2 rounded-2xl border-slate-200">
              {saveState === "copied" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              Copy Markdown
            </Button>
            <Button onClick={handleExportJson} variant="outline" className="gap-2 rounded-2xl border-slate-200">
              <Download className="h-4 w-4" />
              Export JSON
            </Button>
            <Button onClick={handleReset} variant="outline" className="gap-2 rounded-2xl border-rose-200 text-rose-600 hover:bg-rose-50 hover:text-rose-700">
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
          <span className="rounded-full bg-white px-3 py-1">Auto-saved in browser</span>
          {lastSavedAt ? <span>Last saved: {lastSavedAt}</span> : null}
          {saveState === "saved" ? <span className="text-emerald-600">Draft saved</span> : null}
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="doc-title">Title</Label>
              <Input
                id="doc-title"
                value={draft.title}
                onChange={(event) => setDraft((current) => ({ ...current, title: event.target.value }))}
                placeholder="Enter document title"
                className="h-11 rounded-xl border-slate-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="doc-author">Author</Label>
              <Input
                id="doc-author"
                value={draft.author}
                onChange={(event) => setDraft((current) => ({ ...current, author: event.target.value }))}
                placeholder="Enter author name"
                className="h-11 rounded-xl border-slate-200"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="doc-summary">Summary</Label>
            <textarea
              id="doc-summary"
              value={draft.summary}
              onChange={(event) => setDraft((current) => ({ ...current, summary: event.target.value }))}
              placeholder="Short overview or objective of this document"
              className="min-h-28 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-slate-300"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Main Sections</h3>
                <p className="text-sm text-slate-500">Add one or more editable content blocks.</p>
              </div>
              <Button onClick={addSection} variant="outline" className="gap-2 rounded-2xl border-slate-200">
                <Plus className="h-4 w-4" />
                Add Section
              </Button>
            </div>

            <div className="space-y-4">
              {draft.sections.map((section, index) => (
                <div key={section.id} className="rounded-[1.5rem] border border-slate-200 bg-slate-50/70 p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Section {index + 1}
                    </span>
                    <Button
                      onClick={() => removeSection(section.id)}
                      variant="ghost"
                      size="icon"
                      className="rounded-xl text-slate-400 hover:bg-white hover:text-rose-600"
                      disabled={draft.sections.length === 1}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={section.id}>Section Title</Label>
                      <Input
                        id={section.id}
                        value={section.heading}
                        onChange={(event) => updateSection(section.id, "heading", event.target.value)}
                        placeholder="Enter section title"
                        className="h-11 rounded-xl border-slate-200 bg-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Content</Label>
                      <textarea
                        value={section.content}
                        onChange={(event) => updateSection(section.id, "content", event.target.value)}
                        placeholder="Write the main content for this section"
                        className="min-h-36 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-slate-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-slate-100 shadow-sm">
          <div className="space-y-2 border-b border-white/10 pb-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Preview</p>
            <h3 className="text-3xl font-extrabold tracking-tight">{draft.title || "Untitled Document"}</h3>
            <p className="text-sm text-slate-300">Author: {draft.author || "Unknown"}</p>
          </div>

          <div className="space-y-6 pt-6">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Summary</p>
              <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-200">
                {draft.summary || "Your summary will appear here."}
              </p>
            </div>

            <div className="space-y-4">
              {draft.sections.map((section) => (
                <div key={section.id} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <h4 className="text-lg font-bold text-white">{section.heading || "Untitled Section"}</h4>
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-300">
                    {section.content || "Add content to preview this section."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
