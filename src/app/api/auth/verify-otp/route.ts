import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
    try {
        const { email, otp } = await req.json()

        if (!email || !otp) {
            return NextResponse.json(
                { error: 'Email and OTP are required' },
                { status: 400 }
            )
        }

        // Find the OTP record
        const record = await prisma.registrationOTP.findUnique({
            where: { email },
        })

        if (!record) {
            return NextResponse.json(
                { error: 'No pending registration found for this email. Please sign up again.' },
                { status: 404 }
            )
        }

        // Check if expired
        if (new Date() > record.expiresAt) {
            // Clean up expired record
            await prisma.registrationOTP.delete({ where: { email } })
            return NextResponse.json(
                { error: 'OTP has expired. Please sign up again.' },
                { status: 400 }
            )
        }

        // Verify OTP
        if (record.otp !== otp) {
            return NextResponse.json(
                { error: 'Invalid verification code.' },
                { status: 400 }
            )
        }

        // Create the actual user
        const user = await prisma.user.create({
            data: {
                email: record.email,
                name: record.name,
                password: record.password,
            },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
            }
        })

        // Clean up the OTP record
        await prisma.registrationOTP.delete({ where: { email } })

        return NextResponse.json(
            { message: 'User verification successful', user },
            { status: 201 }
        )
    } catch (error: unknown) {
        const err = error as Error
        console.error('Detailed Error during OTP verification:', {
            message: err?.message,
            stack: err?.stack,
        })
        return NextResponse.json(
            { error: 'Internal server error: ' + (err?.message || 'Unknown') },
            { status: 500 }
        )
    }
}
