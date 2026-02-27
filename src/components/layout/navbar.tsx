"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Search, Bell, User, ChevronDown, FileText } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import { resources } from "@/lib/resource-data"

// Mock search index since we don't have a backend search yet
const baseSearchIndex = [
    { title: "Dashboard", category: "Pages", url: "/" },
    { title: "Standard Operating Procedures (SOPs)", category: "Pages", url: "/sops" },
    { title: "Data Management", category: "Pages", url: "/data" },
    { title: "Resources Library", category: "Pages", url: "/resources" },
    { title: "Knowledge Base", category: "Pages", url: "/kb" },
    { title: "Team Management", category: "Pages", url: "/team" },
    { title: "Profile Settings", category: "Settings", url: "/settings/profile" },
    { title: "Security Settings", category: "Settings", url: "/settings/security" },
    { title: "Notification Settings", category: "Settings", url: "/settings/notifications" },
]

const searchIndex = [
    ...baseSearchIndex,
    ...resources.map((r) => ({
        title: r.title,
        category: r.category,
        url: `/resources/${r.id}`,
    })),
]

export function Navbar() {
    const router = useRouter()
    const [user, setUser] = React.useState<{ name: string; avatar: string | null } | null>(null)
    const [searchQuery, setSearchQuery] = React.useState("")
    const [isSearchFocused, setIsSearchFocused] = React.useState(false)
    const searchRef = React.useRef<HTMLFormElement>(null)

    const fetchProfile = async () => {
        try {
            const res = await fetch("/api/user/profile")
            if (res.ok) {
                const data = await res.json()
                setUser(data.user)
            }
        } catch (error) {
            console.error("Failed to fetch user profile", error)
        }
    }

    React.useEffect(() => {
        fetchProfile()

        // Listen for custom event from profile settings page
        const handleProfileUpdate = () => {
            fetchProfile()
        }

        window.addEventListener('profileUpdated', handleProfileUpdate)
        return () => window.removeEventListener('profileUpdated', handleProfileUpdate)
    }, [])

    React.useEffect(() => {
        // Handle clicking outside the search dropdown to close it
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchFocused(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleLogout = () => {
        document.cookie = "hub-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; samesite=strict"
        document.cookie = "hub-user-email=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; samesite=strict"
        router.push("/login")
        router.refresh()
    }

    // Filter search items based on query
    const filteredSearch = searchQuery.trim() === ""
        ? []
        : searchIndex.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase())
        )

    // Group the filtered search items by category
    const groupedSearch = filteredSearch.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = []
        acc[item.category].push(item)
        return acc
    }, {} as Record<string, typeof searchIndex>)

    return (
        <header className="h-[70px] bg-white/40 backdrop-blur-md border-b border-slate-200/50 flex items-center justify-between px-8 sticky top-0 z-30">
            {/* Search Bar */}
            <form
                ref={searchRef}
                onSubmit={(e) => {
                    e.preventDefault();
                    if (searchQuery.trim()) {
                        // Normally this might go to a full search results page
                        // router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);

                        // For auto-complete fallback: go to first result if it exists
                        if (filteredSearch.length > 0) {
                            router.push(filteredSearch[0].url)
                            setSearchQuery("")
                            setIsSearchFocused(false)
                        }
                    }
                }}
                className="flex-1 max-w-2xl relative group"
            >
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                <Input
                    type="search"
                    placeholder="Global Search (SOPs, Data, Teams...)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    className="pl-10 h-11 bg-slate-100/50 border-transparent focus-visible:bg-white focus-visible:border-indigo-200 focus-visible:ring-indigo-100 rounded-xl transition-all"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-slate-50 px-1.5 font-mono text-[10px] font-medium text-slate-400 opacity-100">
                        <span className="text-xs">Enter</span>
                    </kbd>
                </div>

                {/* Autocomplete Dropdown */}
                {isSearchFocused && searchQuery.trim() !== "" && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200/60 overflow-hidden max-h-[400px] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        {filteredSearch.length === 0 ? (
                            <div className="p-4 text-center text-sm text-slate-500">
                                No results found for &quot;{searchQuery}&quot;
                            </div>
                        ) : (
                            <div className="p-2 space-y-4">
                                {Object.entries(groupedSearch).map(([category, items]) => (
                                    <div key={category}>
                                        <div className="px-3 md:px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-50/50 mb-1 rounded-md">
                                            {category}
                                        </div>
                                        <div className="space-y-1">
                                            {items.map((item, idx) => (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    onClick={() => {
                                                        router.push(item.url)
                                                        setSearchQuery("")
                                                        setIsSearchFocused(false)
                                                    }}
                                                    className="w-full text-left px-3 md:px-4 py-2 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition-colors flex items-center gap-3 group"
                                                >
                                                    <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-indigo-100 flex items-center justify-center shrink-0 transition-colors">
                                                        <FileText className="w-4 h-4 text-slate-400 group-hover:text-indigo-500" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium text-slate-700 group-hover:text-indigo-700">
                                                            {item.title}
                                                        </div>
                                                        <div className="text-xs text-slate-400 group-hover:text-indigo-400 shrink-0 truncate max-w-[200px]">
                                                            {item.url}
                                                        </div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </form>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 ml-4">
                <Button variant="ghost" size="icon" className="relative text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
                </Button>

                <div className="h-6 w-px bg-slate-200 mx-2" />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-2 p-1 pl-2 hover:bg-slate-100 rounded-xl transition-all">
                            <div className="flex flex-col items-end mr-1 hidden sm:flex">
                                <span className="text-sm font-semibold text-slate-800 leading-none">
                                    {user ? user.name : "Loading..."}
                                </span>
                                <span className="text-[11px] text-slate-500 leading-none mt-1">Member</span>
                            </div>
                            <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold border-2 border-white shadow-sm overflow-hidden">
                                {user?.avatar ? (
                                    <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                                ) : (
                                    <User className="w-5 h-5" />
                                )}
                            </div>
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 mt-2 rounded-xl p-1 shadow-xl border-slate-200/50">
                        <DropdownMenuLabel className="font-medium text-slate-500 px-3 py-2">My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-slate-100" />
                        <DropdownMenuItem
                            onClick={() => router.push('/settings/profile')}
                            className="rounded-lg gap-2 cursor-pointer focus:bg-indigo-50 focus:text-indigo-700"
                        >
                            Profile Settings
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-slate-100" />
                        <DropdownMenuItem
                            onClick={handleLogout}
                            className="rounded-lg gap-2 cursor-pointer text-rose-600 focus:bg-rose-50 focus:text-rose-700"
                        >
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
