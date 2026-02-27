"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Lock, Mail, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle, Eye, EyeOff, KeyRound, ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
    const router = useRouter()
    const [step, setStep] = React.useState<"email" | "otp" | "new-password">("email")
    const [isLoading, setIsLoading] = React.useState(false)

    // Form State
    const [email, setEmail] = React.useState("")
    const [otp, setOtp] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [error, setError] = React.useState("")
    const [successMsg, setSuccessMsg] = React.useState("")

    const [showPassword, setShowPassword] = React.useState(false)
    const [showConfirm, setShowConfirm] = React.useState(false)

    const validations = {
        length: password.length >= 8,
        letter: /[a-zA-Z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[\W_]/.test(password) // Non-word character or underscore
    }
    const isPasswordValid = Object.values(validations).every(Boolean)

    const Requirement = ({ met, text }: { met: boolean; text: string }) => (
        <div className="flex items-center gap-2 text-sm">
            {met ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            ) : (
                <AlertCircle className="w-4 h-4 text-slate-500" />
            )}
            <span className={met ? "text-slate-300" : "text-slate-500"}>{text}</span>
        </div>
    )

    // Step 1: Request OTP
    const handleRequestOtp = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (!email.endsWith("@concentrix.com")) {
            setError("Email must be a valid @concentrix.com address.")
            return
        }

        setIsLoading(true)

        try {
            const res = await fetch("/api/auth/forgot-password/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            })

            const data = await res.json()

            if (!res.ok) {
                setError(data.error || "Failed to process request.")
                setIsLoading(false)
                return
            }

            // Move to OTP step
            setStep("otp")
            setIsLoading(false)
        } catch (err) {
            setError("An unexpected error occurred.")
            setIsLoading(false)
        }
    }

    // Step 2 & 3 Combined Check: When verifying OTP, just progress UI locally.
    // We send payload to server only when user submits the final new password.
    const handleVerifyOtp = (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (otp.length !== 6) {
            setError("Please enter the 6-digit verification code.")
            return
        }

        // We can't immediately verify OTP without setting exactly what they want to do.
        // Moving to step 3 layout to type in password.
        setStep("new-password")
    }

    // Step 3: Final Reset
    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (!isPasswordValid) {
            setError("Please fulfill all password requirements.")
            return
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.")
            return
        }

        setIsLoading(true)

        try {
            const res = await fetch("/api/auth/forgot-password/reset", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp, newPassword: password }),
            })

            const data = await res.json()

            if (!res.ok) {
                setError(data.error || "Password reset failed.")
                setIsLoading(false)
                return
            }

            // Success! 
            setSuccessMsg("Password reset successfully. Redirecting to login...")
            setTimeout(() => {
                router.push("/login")
            }, 2000)

        } catch (err) {
            setError("An unexpected error occurred.")
            setIsLoading(false)
        }
    }


    return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className={`absolute top-[-20%] left-[-10%] w-[50%] h-[50%] blur-[120px] rounded-full pointer-events-none transition-colors duration-1000 ${step === 'email' ? 'bg-indigo-600/20' : step === 'otp' ? 'bg-amber-500/20' : 'bg-emerald-600/20'}`} />
            <div className={`absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] blur-[120px] rounded-full pointer-events-none transition-colors duration-1000 ${step === 'email' ? 'bg-sky-500/20' : step === 'otp' ? 'bg-orange-500/20' : 'bg-indigo-500/20'}`} />

            {/* Main Card */}
            <div className="w-full max-w-md relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden">

                    {error && (
                        <div className="mb-6 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2 animate-in fade-in">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            {error}
                        </div>
                    )}
                    {successMsg && (
                        <div className="mb-6 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center justify-center gap-2 animate-in fade-in">
                            <CheckCircle2 className="w-4 h-4 shrink-0" />
                            {successMsg}
                        </div>
                    )}

                    {step === "email" && (
                        <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                            <button
                                onClick={() => router.push("/login")}
                                className="absolute top-6 left-6 text-slate-500 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back
                            </button>

                            <div className="text-center mb-8 mt-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
                                    <ShieldCheck className="w-8 h-8 text-white" />
                                </div>
                                <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Reset Password</h1>
                                <p className="text-slate-400">Enter your work email to receive a secure recovery code.</p>
                            </div>

                            <form onSubmit={handleRequestOtp} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300 ml-1">Work Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                        <input
                                            type="email"
                                            required
                                            autoFocus
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="name@concentrix.com"
                                            className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-8"
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Send Code
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    )}

                    {step === "otp" && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <button
                                onClick={() => setStep("email")}
                                className="absolute top-6 left-6 text-slate-500 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back
                            </button>

                            <div className="text-center mb-8 mt-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
                                    <KeyRound className="w-8 h-8 text-white" />
                                </div>
                                <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Verify Email</h1>
                                <p className="text-slate-400 text-sm px-4">
                                    We&apos;ve sent a 6-digit recovery code to <span className="text-slate-200 font-medium">{email}</span>.
                                </p>
                            </div>

                            <form onSubmit={handleVerifyOtp} className="space-y-6">
                                <div className="space-y-2 text-center">
                                    <label className="text-sm font-medium text-slate-300">Recovery Code</label>
                                    <input
                                        type="text"
                                        required
                                        autoFocus
                                        maxLength={6}
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                                        placeholder="000000"
                                        className="w-full text-center text-3xl tracking-[1em] font-mono bg-slate-800/50 border border-slate-700 text-white rounded-xl py-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-slate-700"
                                    />
                                    <p className="text-xs text-slate-500 mt-2">The code expires in 10 minutes.</p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading || otp.length !== 6}
                                    className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                                >
                                    Verify Code
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>

                            <p className="text-center text-slate-500 text-sm mt-8">
                                Didn&apos;t receive the code?{' '}
                                <button onClick={handleRequestOtp} disabled={isLoading} className="text-amber-400 hover:text-amber-300 font-medium disabled:opacity-50">
                                    Resend Code
                                </button>
                            </p>
                        </div>
                    )}

                    {step === "new-password" && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <button
                                onClick={() => setStep("otp")}
                                className="absolute top-6 left-6 text-slate-500 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back
                            </button>

                            <div className="text-center mb-8 mt-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-indigo-500 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                                    <Lock className="w-8 h-8 text-white" />
                                </div>
                                <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Set New Password</h1>
                                <p className="text-slate-400 text-sm px-4">
                                    Secure your account with a strong password.
                                </p>
                            </div>

                            <form onSubmit={handleResetPassword} className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300 ml-1">New Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            required
                                            autoFocus
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>

                                    {/* Live Password Checklist */}
                                    {password.length > 0 && !isPasswordValid && (
                                        <div className="mt-2 p-3 bg-slate-800/30 rounded-xl space-y-2 border border-slate-700/50">
                                            <Requirement met={validations.length} text="At least 8 characters" />
                                            <Requirement met={validations.letter} text="At least 1 letter" />
                                            <Requirement met={validations.number} text="At least 1 number" />
                                            <Requirement met={validations.special} text="At least 1 special character" />
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300 ml-1">Confirm New Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                        <input
                                            type={showConfirm ? "text" : "password"}
                                            required
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl py-3 pl-12 pr-[80px] focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                                        />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                                            {/* Match Indicator */}
                                            {confirmPassword.length > 0 && (
                                                confirmPassword === password ? (
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                                ) : (
                                                    <AlertCircle className="w-5 h-5 text-red-500" />
                                                )
                                            )}

                                            {/* Toggle Visibility */}
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirm(!showConfirm)}
                                                className="text-slate-500 hover:text-slate-300 transition-colors"
                                            >
                                                {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading || !!successMsg}
                                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-8"
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Update Password
                                            <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
