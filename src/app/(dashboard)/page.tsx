import {
  FileText,
  Database,
  Clock,
  TrendingUp,
  Bookmark,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Users
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const dynamic = 'force-dynamic'

const stats = [
  { label: "Total SOPs", value: "128", icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Data Assets", value: "2.4k", icon: Database, color: "text-indigo-600", bg: "bg-indigo-50" },
  { label: "Active Users", value: "45", icon: Users, color: "text-violet-600", bg: "bg-violet-50" },
  { label: "Knowledge Articles", value: "85", icon: BookOpen, color: "text-sky-600", bg: "bg-sky-50" },
]

const recentSOPs = [
  { title: "Remote Work Guidelines (v2.1)", date: "Jan 15, 2024", tag: "Human Resources", author: "Sarah M." },
  { title: "Data Security Protocol 2024", date: "Jan 12, 2024", tag: "Security", author: "James L." },
  { title: "New Hire Onboarding Flow", date: "Jan 08, 2024", tag: "Operations", author: "Emily C." },
]

const quickLinks = [
  { title: "Team Knowledge Base", description: "Centralized articles and guides", icon: BookOpen, href: "/kb" },
  { title: "Resource Directory", description: "Links to internal tools and sites", icon: ExternalLink, href: "/resources" },
  { title: "Data Analytics Hub", description: "Live data and reporting dashboards", icon: TrendingUp, href: "/data" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-10 pb-10">
      {/* Header Section */}
      <section>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Welcome back, <span className="text-indigo-600">Hai</span>
        </h1>
        <p className="text-slate-500 mt-2 text-lg">
          Everything you need for your team&apos;s success in one place.
        </p>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-none bg-white/60 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
                  <h3 className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</h3>
                </div>
                <div className={`${stat.bg} ${stat.color} p-3 rounded-2xl`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent SOPs Section */}
        <section className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Clock className="w-5 h-5 text-indigo-500" />
              Latest SOPs & Guides
            </h2>
            <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50">
              View all
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="space-y-4">
            {recentSOPs.map((sop, idx) => (
              <Card key={idx} className="group border-none bg-white/60 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-center p-6 bg-gradient-to-r from-transparent to-transparent group-hover:to-indigo-50/30">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 mr-5 transition-colors group-hover:bg-indigo-100 group-hover:text-indigo-600">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">{sop.title}</h4>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-500 font-medium">
                          {sop.tag}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-500 mt-1 flex items-center gap-3">
                        <span>Updated {sop.date}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span>By {sop.author}</span>
                      </p>
                    </div>
                    <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Bookmark className="w-5 h-5 text-slate-400" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Actions / Featured Links */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 px-2 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-500" />
            Knowledge Hub
          </h2>
          <div className="space-y-4">
            {quickLinks.map((link, idx) => (
              <Card key={idx} className="border-none bg-indigo-600 text-white shadow-indigo-200/50 shadow-xl hover:translate-y-[-4px] transition-all duration-300">
                <CardHeader className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-xl">{link.title}</CardTitle>
                  <CardDescription className="text-indigo-100/80 leading-snug">
                    {link.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="secondary" className="w-full bg-white text-indigo-600 hover:bg-slate-50 border-none font-bold">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
