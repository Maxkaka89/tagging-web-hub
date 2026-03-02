export interface Resource {
  id: string;
  title: string;
  category: string;
  updatedAt: string;
  author: string;
  description: string;
  icon: string; // Lucide icon name or type
  content: string; // HTML-like content for the detail page
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
    content: `
      <div class="space-y-12">
        <!-- Hero Section -->
        <div class="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-8 md:p-12 text-center border border-slate-800 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full -mr-20 -mt-20"></div>
          <div class="relative z-10 space-y-4">
            <span class="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-indigo-500/30">
              Version 2.3 • Premium Automation
            </span>
            <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Smart Jira Automation</h2>
            <p class="text-indigo-200/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Focus on what matters most with intelligent synchronization and automation solutions.
            </p>
          </div>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-200">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M21,11C21,16.52 16.52,21 11,21C5.48,21 1,16.52 1,11C1,5.48 5.48,1 11,1C16.52,1 21,5.48 21,11M16.19,6.11L10.23,12.07L7.81,9.65L6.4,11.06L10.23,14.89L17.6,7.52L16.19,6.11Z"/></svg>
            </div>
            <h3 class="font-bold text-slate-900 text-lg">Built-in Templates</h3>
            <p class="text-slate-500 text-sm mt-2 leading-relaxed">Integrated smart template system. Fast data retrieval even offline.</p>
          </div>

          <div class="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-amber-100">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M13,3H6A2,2 0 0,0 4,5V19A2,2 0 0,0 6,21H18A2,2 0 0,0 20,19V10L13,3M12,14V19H10V14H12M14,14V19H12V14H14M16,14V19H14V14H16Z"/></svg>
            </div>
            <h3 class="font-bold text-slate-900 text-lg">Auto-Fill Form</h3>
            <p class="text-slate-500 text-sm mt-2 leading-relaxed">Rapidly detects AEM/SHOP sessions to suggest relevant content.</p>
          </div>

          <div class="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-100">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15L12,18.17M12,5.83L15.17,9L16.59,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"/></svg>
            </div>
            <h3 class="font-bold text-slate-900 text-lg">Dynamic Placeholders</h3>
            <p class="text-slate-500 text-sm mt-2 leading-relaxed">Use flexible variables like {%caseid%} to personalize ticket data.</p>
          </div>
        </div>

        <!-- Workflow Section -->
        <div class="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12">
          <h3 class="text-2xl font-bold text-slate-900 text-center mb-10">Workflow Experience</h3>
          <div class="flex flex-col md:flex-row justify-between items-start gap-8">
            <div class="flex-1 text-center group">
              <div class="w-12 h-12 rounded-full border-2 border-indigo-600 flex items-center justify-center mx-auto mb-4 text-indigo-600 font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">1</div>
              <h4 class="font-bold text-slate-900">Installation</h4>
              <p class="text-slate-500 text-sm mt-1">From Chrome Web Store</p>
            </div>
            <div class="hidden md:block w-px h-16 bg-slate-200 mt-6 self-start"></div>
            <div class="flex-1 text-center group">
              <div class="w-12 h-12 rounded-full border-2 border-indigo-600 flex items-center justify-center mx-auto mb-4 text-indigo-600 font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">2</div>
              <h4 class="font-bold text-slate-900">Recognition</h4>
              <p class="text-slate-500 text-sm mt-1">Smart session detection</p>
            </div>
            <div class="hidden md:block w-px h-16 bg-slate-200 mt-6 self-start"></div>
            <div class="flex-1 text-center group">
              <div class="w-12 h-12 rounded-full border-2 border-indigo-600 flex items-center justify-center mx-auto mb-4 text-indigo-600 font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">3</div>
              <h4 class="font-bold text-slate-900">Completion</h4>
              <p class="text-slate-500 text-sm mt-1">Auto-create Sub-task</p>
            </div>
          </div>

          <div class="mt-12 text-center">
            <a href="https://chromewebstore.google.com/detail/auto-checklist/fakphhbhokogkjlojohconpbmpfaapgl" target="_blank" class="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-200">
              Get it on Web Store
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "rule-comparator",
    title: "Rule Comparator",
    category: "Internal Tools",
    updatedAt: "Feb 27, 2024",
    author: "Adobe Team",
    description: "Precision auditing for Adobe Launch configurations (v2.0).",
    icon: "ShieldCheck",
    content: `
      <div class="space-y-12">
        <!-- Hero Section -->
        <div class="bg-gradient-to-br from-indigo-950 to-purple-950 rounded-3xl p-8 md:p-12 text-center border border-slate-800 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full -mr-20 -mt-20"></div>
          <div class="relative z-10 space-y-4">
            <span class="inline-block bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-purple-500/30">
              Version 2.0 • Rules Auditor
            </span>
            <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Precision Rules Audit</h2>
            <p class="text-purple-200/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Compare, validate, and synchronize your Adobe Launch configurations with clinical accuracy.
            </p>
          </div>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-200">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17H13V15H11V17M11,13H13V7H11V13Z"/></svg>
            </div>
            <h3 class="font-bold text-slate-900 text-lg">Dual List Comparison</h3>
            <p class="text-slate-500 text-sm mt-2 leading-relaxed">Instantly spot differences between master checklists and live libraries.</p>
          </div>

          <div class="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-pink-100">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M14,14H7V10H14M19,13V18H5V13H19M19,6H5V11H19M19,3H5C3.89,3 3,3.89 3,5V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V5C21,3.89 20.1,3 19,3Z"/></svg>
            </div>
            <h3 class="font-bold text-slate-900 text-lg">Auto Rule Fetching</h3>
            <p class="text-slate-500 text-sm mt-2 leading-relaxed">One-click scraping extracts all rules directly from the Adobe Launch interface.</p>
          </div>

          <div class="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-purple-100">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12,17L7,12L8.41,10.59L11,13.17V7H13V13.17L15.59,10.59L17,12L12,17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"/></svg>
            </div>
            <h3 class="font-bold text-slate-900 text-lg">Convention Validation</h3>
            <p class="text-slate-500 text-sm mt-2 leading-relaxed">Verifies rule names against hierarchical standards in real-time.</p>
          </div>
        </div>

        <!-- Workflow Section -->
        <div class="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12">
          <h3 class="text-2xl font-bold text-slate-900 text-center mb-10">Operation Workflow</h3>
          <div class="flex flex-col md:flex-row justify-between items-start gap-4">
            <div class="flex-1 text-center group">
              <div class="w-12 h-12 rounded-full border-2 border-indigo-600 flex items-center justify-center mx-auto mb-4 text-indigo-600 font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">1</div>
              <h4 class="font-bold text-slate-900">Paste</h4>
              <p class="text-slate-500 text-sm mt-1">Input expected list</p>
            </div>
            <div class="flex-1 text-center group">
              <div class="w-12 h-12 rounded-full border-2 border-indigo-600 flex items-center justify-center mx-auto mb-4 text-indigo-600 font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">2</div>
              <h4 class="font-bold text-slate-900">Fetch</h4>
              <p class="text-slate-500 text-sm mt-1">Extract live rules</p>
            </div>
            <div class="flex-1 text-center group">
              <div class="w-12 h-12 rounded-full border-2 border-indigo-600 flex items-center justify-center mx-auto mb-4 text-indigo-600 font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">3</div>
              <h4 class="font-bold text-slate-900">Compare</h4>
              <p class="text-slate-500 text-sm mt-1">Execute analysis</p>
            </div>
            <div class="flex-1 text-center group">
              <div class="w-12 h-12 rounded-full border-2 border-indigo-600 flex items-center justify-center mx-auto mb-4 text-indigo-600 font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">4</div>
              <h4 class="font-bold text-slate-900">Validate</h4>
              <p class="text-slate-500 text-sm mt-1">Check conventions</p>
            </div>
          </div>

          <div class="mt-12 text-center">
            <a href="https://chromewebstore.google.com/detail/rule-comparator/kbgbaeeldgkeocfelmacojfikkdmadpe" target="_blank" class="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-200">
              Start Your Audit
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>
      </div>
    `
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
          <a href="/BE.html" target="_blank" class="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-green-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-green-200">
            Mở tài liệu
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>
      </div>
    `
  }
];
