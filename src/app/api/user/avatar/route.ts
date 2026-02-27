import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import prisma from '@/lib/prisma'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function POST(req: Request) {
    try {
        const cookieStore = await cookies()
        const email = cookieStore.get('hub-user-email')?.value

        if (!email) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const formData = await req.formData()
        const file = formData.get('avatar') as File | null

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
        }

        if (file.size > 2 * 1024 * 1024) {
            return NextResponse.json({ error: 'File size must be <= 2MB' }, { status: 400 })
        }

        if (!file.type.startsWith('image/')) {
            return NextResponse.json({ error: 'Only images are allowed' }, { status: 400 })
        }

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const filename = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`

        // Upload to Supabase Storage
        const { error: uploadError } = await supabase.storage
            .from('avatars')
            .upload(filename, buffer, {
                contentType: file.type,
                upsert: true,
            })

        if (uploadError) {
            console.error('Supabase upload error:', uploadError)
            return NextResponse.json({ error: 'Failed to upload image to cloud storage' }, { status: 500 })
        }

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
            .from('avatars')
            .getPublicUrl(filename)

        const avatarUrl = publicUrl

        const updatedUser = await prisma.user.update({
            where: { email },
            data: { avatar: avatarUrl },
            select: {
                id: true,
                name: true,
                email: true,
                avatar: true,
            }
        })

        return NextResponse.json({ message: 'Avatar uploaded successfully', user: updatedUser }, { status: 200 })
    } catch (error) {
        console.error('Error uploading avatar:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
