import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
    LayoutDashboard,
    FileText,
    Database,
    Library,
    Users,
    Settings,
    ChevronLeft,
    BookOpen,
    LogOut
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: FileText, label: "SOPs", href: "/sops" },
    { icon: Database, label: "Data", href: "/data" },
    { icon: Library, label: "Resources", href: "/resources" },
    { icon: BookOpen, label: "Knowledge Base", href: "/kb" },
    { icon: Users, label: "Team", href: "/team" },
]

export function Sidebar({
    isCollapsed,
    setIsCollapsed
}: {
    isCollapsed: boolean;
    setIsCollapsed: (val: boolean) => void;
}) {
    const pathname = usePathname()
    const router = useRouter()

    const handleLogout = () => {
        document.cookie = "hub-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; samesite=strict"
        router.push("/login")
        router.refresh()
    }

    return (
        <aside
            className={cn(
                "fixed top-0 left-0 h-screen bg-white/40 backdrop-blur-xl border-r border-slate-200/50 flex flex-col transition-all duration-300 ease-in-out z-40",
                isCollapsed ? "w-[70px]" : "w-[260px]"
            )}
        >
            {/* Logo Section */}
            <div className="p-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                    M
                </div>
                {!isCollapsed && (
                    <span className="font-bold text-slate-800 text-lg tracking-tight">
                        Max Hub
                    </span>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
                                isActive
                                    ? "bg-indigo-50 text-indigo-700 shadow-sm"
                                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                            )}
                        >
                            <item.icon className={cn(
                                "w-5 h-5 transition-transform duration-200 group-hover:scale-110",
                                isActive ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"
                            )} />
                            {!isCollapsed && (
                                <span className="font-medium text-[15px]">{item.label}</span>
                            )}
                            {isActive && !isCollapsed && (
                                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600" />
                            )}
                        </Link>
                    )
                })}
            </nav>

            {/* Bottom Actions */}
            <div className="p-3 border-t border-slate-200/50 space-y-1">
                <Link
                    href="/settings"
                    className={cn(
                        "group flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all",
                        pathname === "/settings" && "bg-slate-100 text-slate-800"
                    )}
                >
                    <Settings className="w-5 h-5" />
                    {!isCollapsed && <span className="font-medium">Settings</span>}
                </Link>

                <button
                    onClick={handleLogout}
                    className="w-full group flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-500 hover:bg-red-50 hover:text-red-700 transition-all"
                >
                    <LogOut className="w-5 h-5" />
                    {!isCollapsed && <span className="font-medium">Log out</span>}
                </button>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="mt-2 w-full flex justify-center text-slate-400 hover:text-slate-600"
                >
                    <ChevronLeft className={cn("w-5 h-5 transition-transform", isCollapsed && "rotate-180")} />
                </Button>
            </div>
        </aside>
    )
}

