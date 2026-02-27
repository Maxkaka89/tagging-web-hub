import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json()

        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email and password are required.' },
                { status: 400 }
            )
        }

        // Find the user
        const user = await prisma.user.findUnique({
            where: { email },
        })

        if (!user) {
            return NextResponse.json(
                { error: 'User does not exist. Please sign up first.' },
                { status: 404 }
            )
        }

        // Check credentials
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return NextResponse.json(
                { error: 'Incorrect password.' },
                { status: 401 }
            )
        }

        // Success response
        return NextResponse.json(
            { message: 'Login successful' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error during login:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
