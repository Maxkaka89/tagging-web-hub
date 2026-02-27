"use client"

import * as React from "react"
import { Sidebar } from "./sidebar"
import { Navbar } from "./navbar"

export function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            {/* Sidebar - Fixed/Sticky depending on implementation */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                <Navbar />

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <div className="max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {children}
                    </div>
                </main>
            </div>

            {/* Background blobs for elite aesthetic */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200/20 blur-[120px] rounded-full -z-10 pointer-events-none" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-100/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
        </div>
    )
}
