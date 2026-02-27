import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { sendOTPVerificationEmail } from '@/lib/email'

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json()

        // Basic server-side validation
        if (!name || !email || !password) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        if (!email.endsWith('@concentrix.com')) {
            return NextResponse.json(
                { error: 'Email must end with @concentrix.com' },
                { status: 400 }
            )
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        })

        if (existingUser) {
            return NextResponse.json(
                { error: 'User with this email already exists' },
                { status: 400 }
            )
        }

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString()
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes

        // Hash the password for secure temporary storage
        const hashedPassword = await bcrypt.hash(password, 10)

        // Store in temporary OTP table (Upsert handles resends)
        await prisma.registrationOTP.upsert({
            where: { email },
            update: {
                name,
                password: hashedPassword,
                otp,
                expiresAt,
            },
            create: {
                email,
                name,
                password: hashedPassword,
                otp,
                expiresAt,
            }
        })

        // Real email sending via Resend API
        await sendOTPVerificationEmail(email, otp, name);

        return NextResponse.json(
            { message: 'OTP sent successfully', requireOtp: true, email },
            { status: 200 }
        )
    } catch (error: unknown) {
        const err = error as Error
        console.error('Detailed Error during signup/otp generation:', {
            message: err?.message,
            stack: err?.stack,
        })
        return NextResponse.json(
            { error: 'Internal server error: ' + (err?.message || 'Unknown') },
            { status: 500 }
        )
    }
}
