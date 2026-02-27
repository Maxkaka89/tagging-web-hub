"use client"

import * as React from "react"
import { Search, Bell, User, ChevronDown } from "lucide-react"
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

export function Navbar() {
    return (
        <header className="h-[70px] bg-white/40 backdrop-blur-md border-b border-slate-200/50 flex items-center justify-between px-8 sticky top-0 z-30">
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                <Input
                    placeholder="Global Search (SOPs, Data, Teams...)"
                    className="pl-10 h-11 bg-slate-100/50 border-transparent focus-visible:bg-white focus-visible:border-indigo-200 focus-visible:ring-indigo-100 rounded-xl transition-all"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-slate-50 px-1.5 font-mono text-[10px] font-medium text-slate-400 opacity-100">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </div>
            </div>

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
                                <span className="text-sm font-semibold text-slate-800 leading-none">Hai Nguyen</span>
                                <span className="text-[11px] text-slate-500 leading-none mt-1">Administrator</span>
                            </div>
                            <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold border-2 border-white shadow-sm overflow-hidden">
                                <User className="w-5 h-5" />
                            </div>
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 mt-2 rounded-xl p-1 shadow-xl border-slate-200/50">
                        <DropdownMenuLabel className="font-medium text-slate-500 px-3 py-2">My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-slate-100" />
                        <DropdownMenuItem className="rounded-lg gap-2 cursor-pointer focus:bg-indigo-50 focus:text-indigo-700">
                            Profile Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-lg gap-2 cursor-pointer focus:bg-indigo-50 focus:text-indigo-700">
                            Team Settings
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-slate-100" />
                        <DropdownMenuItem className="rounded-lg gap-2 cursor-pointer text-rose-600 focus:bg-rose-50 focus:text-rose-700">
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
