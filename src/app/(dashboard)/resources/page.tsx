import Link from "next/link"
import {
    Search,
    LayoutDashboard,
    ShieldCheck,
    Palette,
    FileBox,
    Lock,
    PlayCircle,
    ArrowUpRight
} from "lucide-react"
import { resources, RESOURCE_CATEGORIES } from "@/lib/resource-data"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mapping icon strings to Lucide components
const ICON_MAP: Record<string, React.ElementType> = {
    LayoutDashboard,
    ShieldCheck,
    Palette,
    FileBox,
    Lock,
    PlayCircle
}

export default function ResourcesPage() {
    return (
        <div className="space-y-10 pb-20">
            {/* Page Header */}
            <section className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Resource Hub</h1>
                    <p className="text-slate-500 mt-2 text-lg">Central library for tools, templates, kits, and training materials.</p>
                </div>
                <div className="relative w-full md:w-80 group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                    <Input
                        placeholder="Search resources..."
                        className="pl-10 h-11 bg-white/60 border-slate-200 focus:ring-indigo-100 rounded-xl"
                    />
                </div>
            </section>

            {/* Main Categories Section */}
            <div className="space-y-12">
                {RESOURCE_CATEGORIES.map((category) => {
                    const categoryResources = resources.filter(r => r.category === category)

                    return (
                        <section key={category} className="space-y-6">
                            <div className="flex items-center gap-3 px-2 border-l-4 border-indigo-600">
                                <h2 className="text-2xl font-bold text-slate-900">{category}</h2>
                                <Badge variant="secondary" className="bg-slate-100 text-slate-500 rounded-full font-bold">
                                    {categoryResources.length}
                                </Badge>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                                {categoryResources.map((resource) => {
                                    const IconComponent = ICON_MAP[resource.icon] || FileBox

                                    return (
                                        <Link key={resource.id} href={`/resources/${resource.id}`} className="group">
                                            <Card className="border-none bg-white/60 backdrop-blur-md shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 overflow-hidden cursor-pointer h-full">
                                                <CardContent className="p-0 h-full flex flex-col">
                                                    <div className="p-6 flex items-start gap-5">
                                                        <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 ease-out shadow-inner">
                                                            <IconComponent className="w-7 h-7" />
                                                        </div>
                                                        <div className="flex-1 space-y-1">
                                                            <div className="flex items-center justify-between">
                                                                <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
                                                                    {resource.title}
                                                                </h3>
                                                                <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-all group-hover:translate-x-1 group-hover:translate-y-[-2px]" />
                                                            </div>
                                                            <p className="text-slate-500 leading-relaxed line-clamp-2 text-sm md:text-base">
                                                                {resource.description}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="mt-auto border-t border-slate-100 bg-slate-50/30 px-6 py-3 flex items-center justify-between">
                                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                                                            By {resource.author}
                                                        </span>
                                                        <span className="text-xs font-medium text-slate-400">
                                                            Updated {resource.updatedAt}
                                                        </span>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    )
                                })}
                            </div>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}
