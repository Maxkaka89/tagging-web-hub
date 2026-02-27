import { FileText, Search, Filter, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SOPsPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Standard Operating Procedures</h1>
                    <p className="text-slate-500 mt-1">Official guidelines and documentation for team processes.</p>
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2 h-11 px-6 rounded-xl">
                    <Plus className="w-5 h-5" />
                    Create New SOP
                </Button>
            </div>

            <Card className="border-none bg-white/60 backdrop-blur-md shadow-sm">
                <CardContent className="p-4 flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input placeholder="Filter SOPs by name, tag, or author..." className="pl-10 h-11 bg-slate-50/50 border-slate-200 focus:ring-indigo-100 rounded-xl" />
                    </div>
                    <Button variant="outline" className="h-11 rounded-xl gap-2 border-slate-200">
                        <Filter className="w-4 h-4" />
                        Filters
                    </Button>
                </CardContent>
            </Card>

            <div className="grid gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Card key={i} className="group border-none bg-white/60 backdrop-blur-md shadow-sm hover:shadow-md transition-all cursor-pointer">
                        <CardContent className="p-6 flex items-center gap-6">
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <h3 className="font-bold text-slate-800 text-lg">Project Lifecycle Management SOP #{i}02</h3>
                                    <Badge variant="outline" className="text-indigo-600 border-indigo-100 bg-indigo-50/30">Operations</Badge>
                                </div>
                                <p className="text-slate-500 text-sm mt-1">Last updated 12 days ago • Approved by Admin</p>
                            </div>
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-indigo-600">
                                View Details
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
