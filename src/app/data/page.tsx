import { Database, Search, Download, Filter, FileSpreadsheet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DataPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Team Data Assets</h1>
                    <p className="text-slate-500 mt-1">Centralized datasets, spreadsheets, and reporting templates.</p>
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2 h-11 px-6 rounded-xl">
                    <Download className="w-5 h-5" />
                    Export All Data
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <Card key={i} className="border-none bg-indigo-50/50 shadow-sm border border-indigo-100/50">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                                    <Database className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 tracking-tight">Q{i} Performance Metrics</h3>
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-0.5">Updated Weekly</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-2xl font-bold text-indigo-700">14.2 GB</span>
                                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none">Stable</Badge>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className="border-none bg-white/60 backdrop-blur-md shadow-sm">
                <CardContent className="p-4 flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input placeholder="Search datasets..." className="pl-10 h-11 bg-slate-50/50 border-slate-200 focus:ring-indigo-100 rounded-xl" />
                    </div>
                    <Button variant="outline" className="h-11 rounded-xl gap-2 border-slate-200">
                        <Filter className="w-4 h-4" />
                        Categories
                    </Button>
                </CardContent>
            </Card>

            <div className="grid gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <Card key={i} className="group border-none bg-white/60 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-6 flex items-center gap-6">
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                                <FileSpreadsheet className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <h3 className="font-bold text-slate-800 text-lg">Region_{i}_Client_Data_Final.xlsx</h3>
                                    <Badge variant="outline" className="text-emerald-600 border-emerald-100 bg-emerald-50/30 font-medium">Excel</Badge>
                                </div>
                                <p className="text-slate-500 text-sm mt-1">2.4MB • Created by Data_Bot • Sync successful</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-indigo-600">Preview</Button>
                                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-indigo-600">
                                    <Download className="w-5 h-5" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
