"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import { User, Shield, Bell, LayoutDashboard } from "lucide-react"

export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const router = useRouter()

    const navItems = [
        {
            title: "Profile",
            href: "/settings/profile",
            icon: <User className="w-4 h-4" />
        },
        {
            title: "Security",
            href: "/settings/security",
            icon: <Shield className="w-4 h-4" />
        },
        {
            title: "Notifications",
            href: "/settings/notifications",
            icon: <Bell className="w-4 h-4" />
        }
    ]

    return (
        <div className="flex flex-col h-[calc(100vh-70px)] bg-slate-50 overflow-hidden">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between shrink-0">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Settings</h1>
                    <p className="text-sm text-slate-500 mt-1">Manage your account preferences and configurations</p>
                </div>
                <button
                    onClick={() => router.push('/')}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors text-sm font-medium"
                >
                    <LayoutDashboard className="w-4 h-4" />
                    Back to Dashboard
                </button>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar Navigation */}
                <div className="w-64 bg-white border-r border-slate-200 flex flex-col p-4 shrink-0 overflow-y-auto">
                    <div className="space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href

                            return (
                                <button
                                    key={item.title}
                                    onClick={() => router.push(item.href)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                                            ? 'bg-indigo-50 text-indigo-700'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                        }`}
                                >
                                    <span className={isActive ? 'text-indigo-600' : 'text-slate-400'}>
                                        {item.icon}
                                    </span>
                                    {item.title}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto p-8 relative">
                    <div className="max-w-4xl mx-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
