import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(req: Request) {
    try {
        const { email, otp, newPassword } = await req.json()

        if (!email || !otp || !newPassword) {
            return NextResponse.json(
                { error: 'Email, OTP, and new password are required' },
                { status: 400 }
            )
        }

        // Find the OTP record
        const record = await prisma.resetPasswordOTP.findUnique({
            where: { email },
        })

        if (!record) {
            return NextResponse.json(
                { error: 'No pending password reset found for this email. Please request a new code.' },
                { status: 404 }
            )
        }

        // Check if expired
        if (new Date() > record.expiresAt) {
            // Clean up expired record
            await prisma.resetPasswordOTP.delete({ where: { email } })
            return NextResponse.json(
                { error: 'OTP has expired. Please request a new code.' },
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

        // Ensure user actually exists before proceeding
        const user = await prisma.user.findUnique({
            where: { email },
        })

        if (!user) {
            return NextResponse.json(
                { error: 'User does not exist.' },
                { status: 404 }
            )
        }

        // Hash new password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(newPassword, salt)

        // Update the actual user's password
        await prisma.user.update({
            where: { email },
            data: {
                password: hashedPassword,
            },
        })

        // Clean up the OTP record
        await prisma.resetPasswordOTP.delete({ where: { email } })

        return NextResponse.json(
            { message: 'Password has been reset successfully.' },
            { status: 200 }
        )
    } catch (error: unknown) {
        const err = error as Error
        console.error('Detailed Error during password reset verification:', {
            message: err?.message,
            stack: err?.stack,
        })
        return NextResponse.json(
            { error: 'Internal server error: ' + (err?.message || 'Unknown') },
            { status: 500 }
        )
    }
}
