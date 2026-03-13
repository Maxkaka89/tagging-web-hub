import type { ComponentType } from "react";
import AutoChecklist from "../../exported-components/AutoChecklist";
import RuleComparatorGuide from "../../exported-components/RuleComparator";
import DocumentTemplateBuilder from "@/components/resources/document-template-builder";

export interface Resource {
  id: string;
  title: string;
  category: string;
  updatedAt: string;
  author: string;
  description: string;
  icon: string; // Lucide icon name or type
  content?: string; // HTML-like content for the detail page
  component?: ComponentType;
}

export const RESOURCE_CATEGORIES = [
  "Internal Tools",
  "Templates & Kits",
  "Guidelines & Policies",
  "Learning Center"
];

export const resources: Resource[] = [
  // Internal Tools
  {
    id: "crm-dashboard",
    title: "Global CRM Dashboard",
    category: "Internal Tools",
    updatedAt: "Feb 20, 2024",
    author: "Data Team",
    description: "Access real-time customer relationship data and reporting.",
    icon: "LayoutDashboard",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">About this Tool</h2>
        <p>The Global CRM Dashboard provides a 360-degree view of all customer interactions across regional touchpoints.</p>
        <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
          <h3 class="font-bold text-indigo-800">Key Features:</h3>
          <ul class="list-disc ml-5 mt-2 space-y-1 text-slate-700">
            <li>Real-time ticket tracking</li>
            <li>Customer sentiment analysis</li>
            <li>Regional performance benchmarking</li>
          </ul>
        </div>
        <button class="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors">
          Open CRM Dashboard
        </button>
      </div>
    `
  },
  {
    id: "tagging-tool",
    title: "Adobe Tagging Validator",
    category: "Internal Tools",
    updatedAt: "Feb 15, 2024",
    author: "Tech Team",
    description: "Validate Adobe Analytics tags across production environments.",
    icon: "ShieldCheck",
    content: "<p>Detailed instructions for Adobe Tagging Validation go here...</p>"
  },
  {
    id: "auto-checklist",
    title: "Auto Checklist",
    category: "Internal Tools",
    updatedAt: "Feb 27, 2024",
    author: "Samsung Team",
    description: "Smart Jira synchronization and automation solution (v2.3).",
    icon: "ShieldCheck",
    component: AutoChecklist
  },
  {
    id: "rule-comparator",
    title: "Rule Comparator",
    category: "Internal Tools",
    updatedAt: "Feb 27, 2024",
    author: "Adobe Team",
    description: "Precision auditing for Adobe Launch configurations (v2.0).",
    icon: "ShieldCheck",
    component: RuleComparatorGuide
  },

  // Templates & Kits
  {
    id: "ui-style-guide",
    title: "Brand UI Kit 2024",
    category: "Templates & Kits",
    updatedAt: "Jan 30, 2024",
    author: "Design Team",
    description: "Standardized UI components and color palettes for internal apps.",
    icon: "Palette",
    content: "<p>Download links for Figma and Sketch kits...</p>"
  },
  {
    id: "template-builder",
    title: "Document Template Builder",
    category: "Templates & Kits",
    updatedAt: "Mar 12, 2026",
    author: "Frontend Team",
    description: "Editable browser-based template for saving notes, guides, and internal documentation directly from FE.",
    icon: "FileBox",
    component: DocumentTemplateBuilder
  },
  {
    id: "report-template",
    title: "Monthly Performance PPT",
    category: "Templates & Kits",
    updatedAt: "Feb 01, 2024",
    author: "Ops Team",
    description: "PowerPoint template for monthly stakeholder reviews.",
    icon: "FilePresentation",
    content: "<p>PPTX template download and usage guidelines...</p>"
  },

  // Guidelines & Policies
  {
    id: "security-protocol",
    title: "Data Handling Protocol",
    category: "Guidelines & Policies",
    updatedAt: "Feb 25, 2024",
    author: "Security Team",
    description: "Mandatory guidelines for handling sensitive client information.",
    icon: "Lock",
    content: "<p>Full security policy documentation...</p>"
  },

  // Learning Center
  {
    id: "onboarding-video",
    title: "Platform Onboarding",
    category: "Learning Center",
    updatedAt: "Jan 10, 2024",
    author: "HR Team",
    description: "Introductory video series for new team members.",
    icon: "PlayCircle",
    content: "<p>Video player and course curriculum...</p>"
  },
  {
    id: "be-spring-boot",
    title: "Kiến thức BE Spring Boot",
    category: "Learning Center",
    updatedAt: "Mar 02, 2025",
    author: "Dev Team",
    description: "Tài liệu học tập và kế hoạch 2 tuần nắm vững kiến trúc Backend Spring Boot.",
    icon: "PlayCircle",
    content: `
      <div class="space-y-6">
        <div class="bg-gradient-to-br from-slate-900 to-green-950 rounded-3xl p-8 text-center border border-slate-800 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-3xl rounded-full -mr-20 -mt-20"></div>
          <div class="relative z-10 space-y-4">
            <span class="inline-block bg-green-500/20 text-green-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-green-500/30">
              Learning Path • Spring Boot
            </span>
            <h2 class="text-3xl font-extrabold text-white tracking-tight">Kiến thức BE Spring Boot</h2>
            <p class="text-green-200/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Kế hoạch học tập 2 tuần để nắm vững kiến trúc, luồng xử lý và các kỹ năng cần thiết của dự án Backend.
            </p>
          </div>
        </div>
        <div class="text-center">
          <a href="/resources/be-spring-boot" class="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-green-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-green-200">
            Mở tài liệu
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>
      </div>
    `
  }
];
