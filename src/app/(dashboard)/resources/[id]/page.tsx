import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, Calendar, User, Share2, Printer } from "lucide-react"
import { resources } from "@/lib/resource-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// For static export compatibility in Next.js 15, we use a simple functional component
export default async function ResourceDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const resource = resources.find((r) => r.id === id)

    if (!resource) {
        notFound()
    }

    const ResourceComponent = resource.component

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-20">
            {/* Back Button */}
            <Link href="/resources">
                <Button variant="ghost" className="gap-2 text-slate-500 hover:text-indigo-600 pl-0">
                    <ChevronLeft className="w-4 h-4" />
                    Back to Resources
                </Button>
            </Link>

            {/* Header Area */}
            <div className="space-y-6">
                <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-bold uppercase tracking-widest">
                    {resource.category}
                </Badge>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            {resource.title}
                        </h1>
                        <div className="flex items-center gap-6 text-slate-500">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span className="text-sm font-medium">{resource.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm font-medium">Updated {resource.updatedAt}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-xl border-slate-200">
                            <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-xl border-slate-200">
                            <Printer className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <hr className="border-slate-200/60" />

            {/* Content Area */}
            <article className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-200/50 shadow-sm min-h-[400px]">
                {ResourceComponent ? (
                    <ResourceComponent />
                ) : (
                    <div
                        className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: resource.content ?? "" }}
                    />
                )}
            </article>

            {/* Footer Support */}
            <div className="text-center space-y-4">
                <p className="text-slate-400 text-sm">Need help with this resource? Contact the {resource.author}.</p>
            </div>
        </div>
    )
}
