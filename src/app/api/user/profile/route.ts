import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import prisma from '@/lib/prisma'

export async function GET() {
    try {
        const cookieStore = await cookies()
        const email = cookieStore.get('hub-user-email')?.value

        if (!email) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const user = await prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                name: true,
                email: true,
                avatar: true,
            }
        })

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 })
        }

        return NextResponse.json({ user }, { status: 200 })
    } catch (error) {
        console.error('Error fetching profile:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

export async function PUT(req: Request) {
    try {
        const cookieStore = await cookies()
        const email = cookieStore.get('hub-user-email')?.value

        if (!email) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { name } = await req.json()

        if (!name || typeof name !== 'string') {
            return NextResponse.json({ error: 'Valid name is required' }, { status: 400 })
        }

        const updatedUser = await prisma.user.update({
            where: { email },
            data: { name },
            select: {
                id: true,
                name: true,
                email: true,
                avatar: true,
            }
        })

        return NextResponse.json({ message: 'Profile updated successfully', user: updatedUser }, { status: 200 })
    } catch (error) {
        console.error('Error updating profile:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
