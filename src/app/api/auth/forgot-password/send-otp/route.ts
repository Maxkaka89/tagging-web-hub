import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { sendPasswordResetEmail } from '@/lib/email'

export async function POST(req: Request) {
    try {
        const { email } = await req.json()

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            )
        }

        // Check if user exists
        const user = await prisma.user.findUnique({
            where: { email },
        })

        if (!user) {
            return NextResponse.json(
                { error: 'Email does not exist in our system.' },
                { status: 404 }
            )
        }

        // Generate 6-digit OTP
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString()
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes

        // Save to ResetPasswordOTP table
        await prisma.resetPasswordOTP.upsert({
            where: { email },
            update: {
                otp: otpCode,
                expiresAt,
                createdAt: new Date(),
            },
            create: {
                email,
                otp: otpCode,
                expiresAt,
            }
        })

        // Real email sending via Resend API
        await sendPasswordResetEmail(email, otpCode);

        return NextResponse.json(
            { message: 'A reset code has been sent to your email.' },
            { status: 200 }
        )
    } catch (error: unknown) {
        console.error('Error during password reset OTP generation:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
