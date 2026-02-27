"use client"

import * as React from "react"
import { Upload, Camera, User as UserIcon, AlertCircle, CheckCircle2, Save, Loader2, X } from "lucide-react"
import AvatarEditor from "react-avatar-editor"

export default function ProfileSettingsPage() {
    const [isLoading, setIsLoading] = React.useState(true)
    const [isSaving, setIsSaving] = React.useState(false)
    const [isUploading, setIsUploading] = React.useState(false)
    const [user, setUser] = React.useState<{ name: string; email: string; avatar: string | null } | null>(null)
    const [error, setError] = React.useState("")
    const [success, setSuccess] = React.useState("")

    // Editor State
    const [editorOpen, setEditorOpen] = React.useState(false)
    const [imageFile, setImageFile] = React.useState<File | string | null>(null)
    const [scale, setScale] = React.useState(1.2)
    const editorRef = React.useRef<AvatarEditor>(null)
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    React.useEffect(() => {
        fetchProfile()
    }, [])

    const fetchProfile = async () => {
        try {
            const res = await fetch("/api/user/profile")
            if (res.ok) {
                const data = await res.json()
                setUser(data.user)
            } else if (res.status === 401) {
                setError("You must be logged in to view your profile.")
            } else {
                setError("Failed to load profile.")
            }
        } catch (err) {
            setError("An error occurred while fetching your profile.")
        } finally {
            setIsLoading(false)
        }
    }

    const handleSaveProfile = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!user) return

        setIsSaving(true)
        setError("")
        setSuccess("")

        try {
            const res = await fetch("/api/user/profile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: user.name }),
            })

            if (res.ok) {
                setSuccess("Profile updated successfully!")
                // Trigger a re-render of the navbar by firing a custom event or reloading
                window.dispatchEvent(new Event('profileUpdated'))
            } else {
                const data = await res.json()
                setError(data.error || "Failed to update profile.")
            }
        } catch (err) {
            setError("An error occurred while updating your profile.")
        } finally {
            setIsSaving(false)
            setTimeout(() => setSuccess(""), 3000)
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        if (!file.type.startsWith("image/")) {
            setError("Please upload a valid image file.")
            if (fileInputRef.current) fileInputRef.current.value = ""
            return
        }

        setImageFile(file)
        setEditorOpen(true)
        setScale(1.2) // reset zoom
    }

    const handleSaveAvatar = async () => {
        if (!editorRef.current) return

        setIsUploading(true)
        setError("")
        setSuccess("")

        // Get the cropped image data as a canvas
        const canvas = editorRef.current.getImageScaledToCanvas()

        // Convert canvas to Blob
        canvas.toBlob(async (blob) => {
            if (!blob) {
                setError("Failed to crop image.")
                setIsUploading(false)
                return
            }

            // Create a File from Blob
            const file = new File([blob], "avatar.jpg", { type: "image/jpeg" })

            // Validate size (2MB)
            if (file.size > 2 * 1024 * 1024) {
                setError("Cropped avatar must be less than 2MB. Try a smaller zoom/crop.")
                setIsUploading(false)
                return
            }

            const formData = new FormData()
            formData.append("avatar", file)

            try {
                const res = await fetch("/api/user/avatar", {
                    method: "POST",
                    body: formData,
                })

                const data = await res.json()

                if (res.ok) {
                    setUser((prev) => prev ? { ...prev, avatar: data.user.avatar } : null)
                    setSuccess("Avatar updated successfully!")
                    window.dispatchEvent(new Event('profileUpdated'))
                    setEditorOpen(false) // Close editor on success
                } else {
                    setError(data.error || "Failed to upload avatar.")
                }
            } catch (err) {
                setError("An error occurred while uploading. Please try again.")
            } finally {
                setIsUploading(false)
                if (fileInputRef.current) {
                    fileInputRef.current.value = ""
                }
                setTimeout(() => setSuccess(""), 3000)
            }
        }, "image/jpeg", 0.9)
    }

    const cancelEditing = () => {
        setEditorOpen(false)
        setImageFile(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center p-12">
                <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
            </div>
        )
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-500 relative">
            <div>
                <h2 className="text-xl font-semibold text-slate-800">Profile Details</h2>
                <p className="text-slate-500 text-sm mt-1">Update your personal information and how others see you on the hub.</p>
            </div>

            {error && (
                <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-sm font-semibold text-red-800">Error</h4>
                        <p className="text-sm text-red-600 mt-1">{error}</p>
                    </div>
                </div>
            )}

            {success && (
                <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-sm font-semibold text-emerald-800">Success</h4>
                        <p className="text-sm text-emerald-600 mt-1">{success}</p>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500" />

                {/* Avatar Display Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 pb-8 border-b border-slate-100">
                    <div className="relative group shrink-0">
                        <div className="w-32 h-32 rounded-full bg-slate-100 border-4 border-white shadow-md flex items-center justify-center overflow-hidden relative">
                            {user?.avatar ? (
                                <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                            ) : (
                                <UserIcon className="w-12 h-12 text-slate-400" />
                            )}

                            {/* Hover Overlay */}
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer"
                            >
                                <Camera className="w-6 h-6 text-white mb-1" />
                                <span className="text-[10px] text-white font-medium uppercase tracking-wider">Change</span>
                            </div>
                        </div>

                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept="image/jpeg,image/png,image/gif,image/webp"
                            className="hidden"
                        />
                    </div>

                    <div>
                        <h3 className="text-lg font-medium text-slate-800">Profile Picture</h3>
                        <p className="text-sm text-slate-500 mt-1 mb-3">Upload a new avatar. Maximum initial file size is 2MB. Drag/Scale your image before saving. Allowed formats: JPG, PNG, GIF, WEBP.</p>
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors"
                        >
                            <Upload className="w-4 h-4" />
                            Upload Image
                        </button>
                    </div>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSaveProfile} className="space-y-6 max-w-xl">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Display Name</label>
                        <input
                            type="text"
                            required
                            value={user?.name || ""}
                            onChange={(e) => setUser(prev => prev ? { ...prev, name: e.target.value } : null)}
                            className="w-full bg-white border border-slate-300 text-slate-900 rounded-xl py-2.5 px-4 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                            placeholder="Your full name"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            Email Address
                            <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-semibold tracking-wider uppercase">Unchangeable</span>
                        </label>
                        <input
                            type="email"
                            disabled
                            value={user?.email || ""}
                            className="w-full bg-slate-50 border border-slate-200 text-slate-500 rounded-xl py-2.5 px-4 cursor-not-allowed"
                        />
                        <p className="text-xs text-slate-500">Your email address cannot be changed as it is linked to your Concentrix identity.</p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex justify-end">
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-6 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSaving ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                                <Save className="w-4 h-4" />
                            )}
                            {isSaving ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>

            {/* Editor Modal overlay */}
            {editorOpen && imageFile && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="flex items-center justify-between p-4 border-b border-slate-100">
                            <h3 className="font-semibold text-slate-800">Crop Avatar</h3>
                            <button onClick={cancelEditing} className="text-slate-400 hover:text-slate-600 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 flex flex-col items-center">
                            <div className="bg-slate-100 rounded-xl p-4 overflow-hidden mb-6 flex items-center justify-center w-full">
                                <AvatarEditor
                                    ref={editorRef}
                                    image={imageFile}
                                    width={200}
                                    height={200}
                                    border={20}
                                    borderRadius={100} // makes crop shape circular
                                    color={[0, 0, 0, 0.4]} // RGBA
                                    scale={scale}
                                    rotate={0}
                                    className="cursor-move"
                                />
                            </div>

                            <div className="w-full space-y-2 mb-6 px-4">
                                <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Zoom Level</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="3"
                                    step="0.01"
                                    value={scale}
                                    onChange={(e) => setScale(parseFloat(e.target.value))}
                                    className="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
                                />
                            </div>

                            <div className="flex items-center gap-3 w-full">
                                <button
                                    onClick={cancelEditing}
                                    disabled={isUploading}
                                    className="flex-1 px-4 py-2.5 text-slate-600 font-medium hover:bg-slate-100 rounded-xl transition-colors disabled:opacity-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSaveAvatar}
                                    disabled={isUploading}
                                    className="flex-1 flex justify-center items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors disabled:opacity-50"
                                >
                                    {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                                    {isUploading ? "Applying..." : "Apply & Save"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
