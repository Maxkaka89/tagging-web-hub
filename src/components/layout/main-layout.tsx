"use client"

import * as React from "react"
import { Sidebar } from "./sidebar"
import { Navbar } from "./navbar"
import { cn } from "@/lib/utils"

export function MainLayout({ children }: { children: React.ReactNode }) {
    const [isCollapsed, setIsCollapsed] = React.useState(false)

    return (
        <div className="flex min-h-screen bg-[#F1F5F9] transition-colors duration-300">
            {/* Sidebar - Fixed Position */}
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

            {/* Main Content Area */}
            <div
                className={cn(
                    "flex-1 flex flex-col min-w-0 transition-all duration-300",
                    isCollapsed ? "pl-[70px]" : "pl-[260px] max-[768px]:pl-[70px]"
                )}
            >
                <Navbar />

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
                    <div className="max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {children}
                    </div>
                </main>
            </div>

            {/* Background blobs for elite aesthetic */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200/20 blur-[120px] rounded-full -z-10 pointer-events-none" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-slate-400/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        </div>
    )
}
